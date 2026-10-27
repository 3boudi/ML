import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { META, NOTES, CHAPTERS, GAPS } from './data.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const PLAYLIST = 'C:/Users/SURFUCE/AppData/Local/Temp/opencode/playlist.json';

const raw = JSON.parse(readFileSync(PLAYLIST, 'utf8'));
const secs = (t) => t.split(':').reduce((a, b) => a * 60 + Number(b), 0);
const tidy = (s) => String(s).replace(/'/g, '’');
const hhmm = (s) => {
  const h = Math.floor(s / 3600);
  const m = Math.round((s % 3600) / 60);
  return h ? `${h} h ${String(m).padStart(2, '0')} min` : `${m} min`;
};

const videos = raw.videos.map((v, i) => ({
  n: i + 1,
  id: v.video_id,
  title: tidy(v.title),
  duration: v.duration,
  seconds: secs(v.duration),
  published: v.published,
  url: v.url,
}));
const byN = new Map(videos.map((v) => [v.n, v]));

const chapters = CHAPTERS.map((ch) => {
  const used = new Map();
  for (const lesson of ch.lessons) {
    for (const group of lesson.groups) {
      for (const ref of group.videos) {
        const star = ref.star || !!used.get(ref.n)?.star;
        used.set(ref.n, { n: ref.n, star });
      }
    }
  }
  const list = [...used.values()].sort((a, b) => a.n - b.n);
  const seconds = list.reduce((s, x) => s + (byN.get(x.n)?.seconds || 0), 0);
  return {
    ...ch,
    videoCount: list.length,
    seconds,
    time: hhmm(seconds),
    videoNumbers: list.map((x) => x.n),
  };
});

const chapterOf = new Map();
for (const ch of chapters) {
  for (const lesson of ch.lessons) {
    for (const group of lesson.groups) {
      for (const ref of group.videos) {
        if (!chapterOf.has(ref.n)) chapterOf.set(ref.n, []);
        const arr = chapterOf.get(ref.n);
        if (!arr.includes(ch.id)) arr.push(ch.id);
      }
    }
  }
}
for (const video of videos) {
  video.chapters = chapterOf.get(video.n) || [];
  video.primary = video.chapters[0] || null;
  video.note = NOTES[video.n] || null;
}

const totalSeconds = videos.reduce((s, v) => s + v.seconds, 0);
const data = {
  meta: {
    ...META,
    videoCount: videos.length,
    totalSeconds,
    totalTime: hhmm(totalSeconds),
    average: hhmm(Math.round(totalSeconds / videos.length)),
  },
  chapters,
  gaps: GAPS,
  videos,
};

mkdirSync(resolve(ROOT, 'assets'), { recursive: true });
writeFileSync(resolve(ROOT, 'assets/data.js'), 'window.ML = ' + JSON.stringify(data, null, 2) + ';\n');

const usedCount = videos.filter((v) => v.chapters.length).length;
console.log(`videos: ${videos.length} | total ${hhmm(totalSeconds)} | used ${usedCount} | unused ${videos.length - usedCount}`);
for (const ch of chapters) {
  console.log(`ch${ch.id} ${ch.videoCount} videos, ${ch.time}, ${ch.coverage}`);
}
console.log('written assets/data.js');
