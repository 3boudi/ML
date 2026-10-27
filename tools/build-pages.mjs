import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  loopDiagram, biasDiagram, bayesDiagram, agentDiagram,
  confusionDiagram, factorDiagram, federatedDiagram, kmeansPanels,
} from './diagrams.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const raw = readFileSync(resolve(ROOT, 'assets/data.js'), 'utf8');
const data = JSON.parse(raw.replace(/^window\.ML\s*=\s*/, '').replace(/;\s*$/, ''));
const { meta, chapters, gaps, videos } = data;

const byN = new Map(videos.map((v) => [v.n, v]));
const mapped = videos.filter((v) => v.chapters.length);
const extras = videos.filter((v) => !v.chapters.length);
const GAP_BY_CHAPTER = new Map();
for (const gap of gaps) {
  if (!GAP_BY_CHAPTER.has(gap.chapter)) GAP_BY_CHAPTER.set(gap.chapter, []);
  GAP_BY_CHAPTER.get(gap.chapter).push(gap);
}

/* ---------- text ---------- */

const esc = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const A = (ar) => `data-ar="${esc(ar)}"`;

const T = {
  skip: ['Skip to content', 'تجاوز إلى المحتوى'],
  chapters: ['Chapters', 'الفصول'],
  library: ['Library', 'المكتبة'],
  primary: ['Primary', 'التنقل الرئيسي'],
  sources: ['Sources', 'المصادر'],
  playlist: ['Playlist', 'قائمة التشغيل'],
  channel: ['StatQuest channel', 'قناة StatQuest'],
  allVideos: ['All 106 videos', 'كل الفيديوهات'],
  close: ['Close', 'إغلاق'],
  youtube: ['Open on YouTube', 'افتح على يوتيوب'],
  play: ['Play', 'شغّل'],
  playFirst: ['Play the first lesson', 'شغّل الدرس الأول'],
  readChapters: ['Read the chapters', 'اقرأ الفصول'],
  playFirstVideo: ['Play the first video', 'شغّل أول فيديو'],
  browse: ['Browse the library', 'تصفّح المكتبة'],
  allChapters: ['All chapters', 'كل الفصول'],
  previous: ['Previous chapter', 'الفصل السابق'],
  next: ['Next chapter', 'الفصل التالي'],
  syllabus: ['Syllabus', 'المقرر'],
  practical: ['Practical', 'العملي'],
  watch: ['Watch', 'شاهد'],
  noVideo: ['No video mapped.', 'لا فيديو مرتبط.'],
  gapTable: ['Open the gap table', 'افتح جدول الفجوات'],
  coverageHead: ['What the videos cover.', 'ما تغطيه الفيديوهات.'],
  coverageFine: ['Marked per chapter, not averaged away.', 'مذكورة لكل فصل، لا معدّلة.'],
  missingHere: ['Missing here', 'ناقص هنا'],
  drawn: ['Drawn for this guide. Labels stay in English.', 'مرسوم لهذا الدليل. العناوين تبقى بالإنجليزية.'],
  coverage: {
    covered: ['Covered', 'تغطية كاملة'],
    partial: ['Partly covered', 'تغطية جزئية'],
    none: ['Not covered', 'لا تغطية'],
  },
  contentsHead: ['Eight chapters, one route.', 'ثمانية فصول، مسار واحد.'],
  contentsIntro: ['The syllabus in order, with the videos that match each lesson.', 'المقرر بالترتيب، مع الفيديوهات التي تطابق كل درس.'],
  contentsLead: [
    'Start with what learning is, how to test it, and the probability under the first model.',
    'ابدأ بمعنى التعلّم، وكيف تختبره، والاحتمال الذي يقف تحت أول نموذج.',
  ],
  bandHead: ['The lesson to watch first.', 'الدرس الذي تشاهده أولًا.'],
  bandLead: [
    'The hinge under every model that learns. Six updates, one minimum.',
    'المفصل تحت كل نموذج يتعلّم. ستة تحديثات، وحد أدنى واحد.',
  ],
  bandNext: ['Next', 'التالي'],
  railHead: ['Six covers.', 'ستة أغلفة.'],
  railIntro: ['They play here.', 'تُشغّل هنا.'],
  railLabel: ['Six starting videos', 'ستة فيديوهات للبداية'],
  kmHead: ['K-means, in three panels.', 'K-means، في ثلاثة مشاهد.'],
  kmIntro: [
    'Place, assign, move, repeat.',
    'ضع، وزّع، حرّك، ثم كرّر.',
  ],
  kmLabels: [
    ['Place k centres', 'ضع k مراكز'],
    ['Assign each point', 'وزّع كل نقطة'],
    ['Move to the mean', 'حرّك إلى المتوسط'],
  ],
  kmTexts: [
    ['Start with three centres, chosen by hand or by k-means++.', 'ابدأ بثلاثة مراكز، مختارة يدويًا أو بـk-means++.'],
    ['Each point joins the nearest centre; the lines are not drawn, the distance is.', 'كل نقطة تنضم إلى أقرب مركز؛ الخطوط لا تُرسم، المسافة هي التي تُحسب.'],
    ['Each centre moves to the mean of its points. Repeat until nothing moves.', 'كل مركز ينتقل إلى متوسط نقاطه. كرّر حتى لا يتحرك شيء.'],
  ],
  kmNote: ['The loop stops when the centres stop moving. That is the whole algorithm.', 'تتوقف الحلقة عندما تتوقف المراكز عن الحركة. هذه هي الخوارزمية كلها.'],
  gapsHead: ['The gaps, named.', 'الفجوات، بالاسم.'],
  gapsIntro: [
    'Six syllabus areas have no video in this playlist. The page marks them rather than hiding them.',
    'ستة موضوعات في المقرر لا فيديو لها في هذه القائمة. الصفحة تسمّيها بدل أن تخفيها.',
  ],
  gapChapter: ['Chapter', 'الفصل'],
  gapMissing: ['Missing', 'الناقص'],
  gapWhere: ['Where', 'أين'],
  openChapter: (n) => [`Open chapter ${n}`, `افتح الفصل ${n}`],
  also: [
    'Also missing: LightGBM, stacking, RFE, ICA and UMAP, and most anomaly-detection algorithms.',
    'ناقص أيضًا: LightGBM، والتكديس، وRFE، وICA وUMAP، ومعظم خوارزميات كشف الشذوذ.',
  ],
  letterHome: [
    'An independent study guide for Semester 7. The syllabus sets the order, StatQuest supplies the voice, and where the playlist is silent, the page says so.',
    'دليل دراسة مستقل للسداسي السابع. المقرر يحدد الترتيب، وStatQuest يقدّم الصوت، وحيث تصمت القائمة تقول الصفحة ذلك.',
  ],
  letterShort: [
    'Semester 7, UEF2, coefficient 4. Course by Halitim Amin. Syllabus pages 61 to 63.',
    'السداسي 7، وحدة UEF2، معامل 4. المقرر: Halitim Amin. صفحات المقرر 61 إلى 63.',
  ],
  letterDate: ['26 October 2026. UEF2, coefficient 4.', '26 أكتوبر 2026. UEF2، معامل 4.'],
  letterLegal: [
    'Course material: Halitim Amin. Videos: StatQuest, YouTube. Diagrams drawn for this guide. No photographs.',
    'المقرر: Halitim Amin. الفيديوهات: StatQuest على يوتيوب. الرسوم مرسومة لهذا الدليل. لا صور فوتوغرافية.',
  ],
  libraryHead: ['106 videos, mapped to the syllabus.', '106 فيديو، مرتبطة بالمقرر.'],
  libraryLead: ['29 h 51 min of StatQuest, sorted by chapter.', '29 س 51 د من StatQuest، مرتبة حسب الفصل.'],
  libraryMeta: ['78 mapped, 28 extras. One playlist.', '78 مرتبطًا، 28 إضافيًا. قائمة واحدة.'],
  libraryUnit: ['videos in one playlist', 'فيديو في قائمة واحدة'],
  jump: ['Jump to the list', 'اذهب إلى القائمة'],
  mappingHead: ['How the mapping works.', 'كيف يعمل الربط.'],
  mappingIntro: [
    'The syllabus sets chapter order. The playlist sets video order.',
    'المقرر يحدد ترتيب الفصول، والقائمة تحدد ترتيب الفيديوهات.',
  ],
  mappingPoints: [
    ['One video, two chapters.', 'فيديو واحد، فصلان.', 'Chapter pages place it by topic; the library keeps every tag.', 'صفحات الفصول تضعها حسب الموضوع، والمكتبة تحفظ كل وسم.'],
    ['Starred videos are the shortest route.', 'الفيديوهات المميّزة هي أقصر طريق.', '78 are mapped, 28 are extra practice.', '78 مرتبطًا، و28 للتمرين الإضافي.'],
    ['Nothing is auto-generated.', 'لا شيء مولّد آليًا.', 'Each mapping was checked against the syllabus bullets.', 'كل ربط تم التحقق منه مقابل بنود المقرر.'],
  ],
  libHead: ['The playlist, all 106.', 'قائمة التشغيل، 106 كلها.'],
  filterLabel: ['Filter videos', 'رشّح الفيديوهات'],
  search: ['Search', 'ابحث'],
  searchPlaceholder: ['Search titles', 'ابحث في العناوين'],
  chapterLabel: ['Chapter', 'الفصل'],
  statusLabel: ['Status', 'الحالة'],
  allChapterOptions: ['All chapters', 'كل الفصول'],
  unmappedOption: ['Not mapped', 'غير مرتبط'],
  allStatus: ['All videos', 'كل الفيديوهات'],
  unwatched: ['Unwatched', 'غير المشاهدة'],
  watched: ['Watched', 'المشاهدة'],
  reset: ['Clear filters', 'امسح المرشّحات'],
  shown: ['videos shown', 'فيديو معروض'],
  watchedCount: ['watched', 'تمت مشاهدته'],
  noJs: [
    'Search and progress need JavaScript. The full list is below.',
    'البحث والتقدّم يحتاجان JavaScript. القائمة الكاملة أدناه.',
  ],
  empty: ['No videos match. Clear the filters or try a shorter search.', 'لا فيديو يطابق. امسح المرشّحات أو جرّب بحثًا أقصر.'],
  extrasHead: ['The 28 extras.', 'الـ28 الإضافية.'],
  extrasIntro: [
    'Background, Python walkthroughs and topics outside the syllabus. They are worth watching, but they do not fill a gap.',
    'خلفية، وشروحات بايثون، وموضوعات خارج المقرر. تستحق المشاهدة، لكنها لا تسدّ فجوة.',
  ],
  extrasAction: ['Show the 28', 'اعرض الـ28'],
  countRows: ['rows', 'صفًا'],
  chLabel: ['Ch', 'ف'],
  unmappedRow: ['Unmapped', 'غير مرتبط'],
  markWatched: (title) => [`Mark ${title} as watched`, `علّم ${title} كمشاهد`],
  playerDefault: ['Video', 'فيديو'],
  chapterWord: ['Chapter', 'الفصل'],
  languageToggle: 'العربية',
  privacy: ['Privacy & Cookies', 'الخصوصية وملفات تعريف الارتباط'],
  cookieAccept: ['Accept', 'قبول'],
  cookieTitle: ['Local Storage & Privacy', 'التخزين المحلي والخصوصية'],
  cookieText: [
    'We use local browser storage (LocalStorage) to save your study progress (% of ML learned), language, and caption preferences. No personal tracking or ad cookies.',
    'نستخدم التخزين المحلي (LocalStorage) في متصفحك لحفظ تقدمك الدراسي (% ما تعلمته في تعلّم الآلة)، وتفضيلات اللغة والترجمة. لا نجمع أي بيانات شخصية ولا نستخدم كوكيز إعلانية.',
  ],
  mlLearned: ['learned', 'مكتمل'],
  markFinished: ['Mark as watched', 'علّم كمنتهي'],
  finished: ['Finished', 'تمت المشاهدة'],
};

const en = (key) => T[key][0];
const ar = (key) => T[key][1];

const enVideos = (n) => `${n} video${n === 1 ? '' : 's'}`;
const enLessons = (n) => `${n} lesson${n === 1 ? '' : 's'}`;

function arVideos(n) {
  if (n === 0) return 'لا فيديو';
  if (n === 1) return 'فيديو واحد';
  if (n === 2) return 'فيديوان';
  if (n <= 10) return `${n} فيديوهات`;
  return `${n} فيديو`;
}
function arLessons(n) {
  if (n === 1) return 'درس واحد';
  if (n === 2) return 'درسان';
  return `${n} دروس`;
}
function arTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  if (!h) return `${m} د`;
  return `${h} س ${String(m).padStart(2, '0')} د`;
}
function chapterStat(ch) {
  if (!ch.videoCount) return { en: 'No videos yet', ar: 'لا فيديو بعد' };
  return { en: `${enVideos(ch.videoCount)}, ${ch.time}`, ar: `${arVideos(ch.videoCount)}، ${arTime(ch.seconds)}` };
}
function chapterMeta(ch) {
  const cover = T.coverage[ch.coverage];
  if (!ch.videoCount) {
    return {
      en: `${enLessons(ch.lessons.length)}, no videos. ${cover[0]}.`,
      ar: `${arLessons(ch.lessons.length)}، لا فيديو. ${cover[1]}.`,
    };
  }
  return {
    en: `${enLessons(ch.lessons.length)}, ${enVideos(ch.videoCount)}, ${ch.time}. ${cover[0]}.`,
    ar: `${arLessons(ch.lessons.length)}، ${arVideos(ch.videoCount)}، ${arTime(ch.seconds)}. ${cover[1]}.`,
  };
}

const pad2 = (n) => String(n).padStart(2, '0');
const pad3 = (n) => String(n).padStart(3, '0');

const PLAY = '<svg class="icon-play" viewBox="0 0 10 12" aria-hidden="true" focusable="false"><path d="M0 0 10 6 0 12Z"/></svg>';

function bi(tag, cls, enText, arText, extra = '') {
  const klass = cls ? ` class="${cls}"` : '';
  return `<${tag}${klass} ${A(arText)}${extra}>${esc(enText)}</${tag}>`;
}

/* ---------- the hero chart ---------- */

function descentChart() {
  const rates = [
    { key: 'low', label: '0.05', hint: 'slow', hintAr: 'بطيء', lr: 0.05, loss: '1.75' },
    { key: 'good', label: '0.35', hint: 'lands', hintAr: 'يصل', lr: 0.35, loss: '0.15', checked: true },
    { key: 'high', label: '1.00', hint: 'bounces', hintAr: 'يرتد', lr: 1, loss: '6.40' },
  ];
  const loss = (w) => (w - 2) ** 2 + 0.15;
  const X = (w) => 44 + ((w + 1) / 6) * 292;
  const Y = (l) => 236 - (l / 9.5) * 196;

  let curve = '';
  for (let i = 0; i <= 120; i += 1) {
    const w = -1 + (6 * i) / 120;
    curve += `${i ? 'L' : 'M'} ${X(w).toFixed(1)} ${Y(loss(w)).toFixed(1)} `;
  }

  const groups = rates.map((rate) => {
    let w = -0.5;
    const points = [{ w, l: loss(w) }];
    for (let step = 1; step <= 6; step += 1) {
      w = w - rate.lr * 2 * (w - 2);
      points.push({ w, l: loss(w) });
    }
    const trail = points.map((p, i) => `${i ? 'L' : 'M'} ${X(p.w).toFixed(1)} ${Y(p.l).toFixed(1)}`).join(' ');
    const dots = points.map((p, i) => {
      const last = i === points.length - 1;
      return `<circle class="${last ? 'step step--last' : 'step'}" cx="${X(p.w).toFixed(1)}" cy="${Y(p.l).toFixed(1)}" r="${last ? 4 : 3}"/>`;
    }).join('');
    return `<g data-rate="${rate.key}"${rate.checked ? '' : ' hidden'}>
      <path class="trail" d="${trail}"/>
      ${dots}
    </g>`;
  }).join('\n');

  const controls = rates.map((rate) => `
        <label>
          <input type="radio" name="descent-rate" value="${rate.key}" data-loss="${rate.loss}"${rate.checked ? ' checked' : ''}>
          <span>${rate.label}</span>
          <small ${A(rate.hintAr)}>${rate.hint}</small>
        </label>`).join('');

  return `<figure class="descent">
      <svg class="descent__chart" viewBox="0 0 360 280" role="img" aria-labelledby="descent-title descent-desc">
        <title id="descent-title">Gradient descent on a loss curve</title>
        <desc id="descent-desc" ${A('منحنى خسارة محدّب. كل نقطة تحديث واحد. المعدل المنخفض يزحف، والمعدل المرتفع يتجاوز، والمعدل المناسب يصل إلى الحد الأدنى.')}>A convex loss curve. Each dot is one update. A low rate crawls, a high rate overshoots, a good rate lands at the minimum.</desc>
        <path class="axis" d="M 32 236 L 342 236"/>
        <path class="axis" d="M 32 236 L 32 30"/>
        <path class="grid" d="M 44 60 L 336 60"/>
        <path class="grid" d="M 44 120 L 336 120"/>
        <path class="grid" d="M 44 180 L 336 180"/>
        <path class="loss" d="${curve}"/>
        <path class="guide" d="M ${X(2).toFixed(1)} 236 L ${X(2).toFixed(1)} 250"/>
        <path class="axis" d="M ${X(0).toFixed(1)} 236 L ${X(0).toFixed(1)} 241"/>
        <path class="axis" d="M ${X(2).toFixed(1)} 236 L ${X(2).toFixed(1)} 241"/>
        <path class="axis" d="M ${X(4).toFixed(1)} 236 L ${X(4).toFixed(1)} 241"/>
        <text class="tick" x="32" y="20" text-anchor="start">loss</text>
        <text class="tick" x="${X(0).toFixed(1)}" y="256" text-anchor="middle">0</text>
        <text class="tick" x="${X(2).toFixed(1)}" y="256" text-anchor="middle">minimum</text>
        <text class="tick" x="${X(4).toFixed(1)}" y="256" text-anchor="middle">4</text>
        <text class="tick" x="342" y="274" text-anchor="end">weight</text>
        ${groups}
      </svg>
      <div class="descent__readout">
        <span><span ${A('الخسارة')}>loss</span> <span data-loss-value>0.15</span></span>
        <span ${A('6 تحديثات')}>6 updates</span>
      </div>
      <fieldset class="descent__control">
        <legend ${A('معدل التعلّم')}>Learning rate</legend>
        <div class="descent__rates">${controls}</div>
      </fieldset>
      <div class="descent__caption">
        <span ${A('ستة تحديثات من w = −0.5.')}>Six updates from w = −0.5.</span>
        <span dir="ltr">loss = (w − 2)² + 0.15</span>
      </div>
    </figure>`;
}

/* ---------- chrome ---------- */

function nav(current = '') {
  const libraryCurrent = current === 'library' ? ' aria-current="page"' : '';
  return `<header class="site-nav">
    <div class="container site-nav__inner">
      <a class="wordmark" href="index.html">
        <img class="wordmark__logo" src="assets/logo.png" alt="ML" width="28" height="28">
        ML VII <span ${A('السداسي 7')} dir="auto">Semester 7</span>
      </a>
      <div class="nav__progress" id="nav-progress" title="Your overall ML learning progress" data-ar-title="نسبة تقدّمك العامة في تعلّم الآلة" aria-label="Learning progress" data-ar-aria="نسبة التعلّم">
        <div class="nav__progress-track" aria-hidden="true"><div class="nav__progress-fill" id="nav-progress-fill" style="width: 0%;"></div></div>
        <span class="nav__progress-text"><strong id="nav-progress-num">0%</strong> <span ${A('مكتمل')}>learned</span></span>
      </div>
      <nav class="site-nav__links" aria-label="Primary" data-ar-aria="التنقل الرئيسي">
        <a href="index.html#chapters" ${A(ar('chapters'))}>Chapters</a>
        <a href="library.html"${libraryCurrent} ${A(ar('library'))}>Library</a>
        <button class="lang-toggle" type="button" data-lang-toggle aria-label="التبديل إلى العربية" lang="ar">العربية</button>
      </nav>
    </div>
  </header>`;
}

function footer(short = false) {
  const statement = short ? T.letterShort : T.letterHome;
  return `<footer class="letter${short ? ' letter--short' : ''}" id="about">
    <div class="container letter__grid">
      <div>
        ${bi('p', 'letter__statement', statement[0], statement[1])}
        <p class="letter__sign">Halitim Amin</p>
        ${bi('p', 'letter__date', en('letterDate'), ar('letterDate'))}
      </div>
      <div class="letter__side">
        <nav class="letter__links" aria-label="Sources" data-ar-aria="المصادر">
          <a href="${meta.playlist}" target="_blank" rel="noopener" ${A('قائمة التشغيل')}>Playlist</a>
          <a href="${meta.channel}" target="_blank" rel="noopener" ${A('قناة StatQuest')}>StatQuest channel</a>
          <a href="library.html" ${A('كل الفيديوهات')}>All 106 videos</a>
          <a href="privacy.html" ${A('الخصوصية وملفات تعريف الارتباط')}>Privacy &amp; Cookies</a>
        </nav>
        ${bi('p', 'letter__legal', en('letterLegal'), ar('letterLegal'))}
      </div>
    </div>
  </footer>`;
}

function player() {
  return `<dialog class="player" id="player" aria-labelledby="player-title">
    <div class="player__bar">
      <h2 id="player-title">Video</h2>
      <div class="player__actions">
        <button type="button" class="player__watched-btn" id="player-mark-btn" aria-pressed="false" title="Mark video as finished" data-ar-title="علّم الفيديو كمنتهي">
          <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" focusable="false"><path d="M13.5 3.5 6 11 2.5 7.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="player__watched-text" ${A('تمت المشاهدة')}>Mark as watched</span>
        </button>
        <div class="player__captions" role="group" aria-label="Caption language" data-ar-aria="لغة الترجمة المصاحبة">
          <span class="player__captions-label">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"/></svg>
            <span class="captions-text" ${A('الترجمة')}>CC</span>
          </span>
          <button type="button" class="caption-btn" data-caption-lang="ar" aria-pressed="false" ${A('العربية')}>العربية</button>
          <button type="button" class="caption-btn" data-caption-lang="en" aria-pressed="false" ${A('الإنجليزية')}>English</button>
          <button type="button" class="caption-btn" data-caption-lang="off" aria-pressed="false" ${A('إيقاف')}>Off</button>
        </div>
        <form method="dialog"><button class="player__close" type="submit" ${A('إغلاق')}>Close</button></form>
      </div>
    </div>
    <div class="player__frame" id="player-frame"></div>
    <div class="player__foot">
      <p class="player__note" id="player-note" hidden></p>
      <a id="player-link" href="${meta.playlist}" target="_blank" rel="noopener" ${A('افتح على يوتيوب')}>Open on YouTube</a>
    </div>
  </dialog>`;
}

function cookieBanner() {
  return `<aside class="cookie-banner" id="cookie-banner" aria-label="Privacy and cookies" data-ar-aria="الخصوصية والتخزين المحلي">
    <div class="cookie-banner__inner">
      <div class="cookie-banner__content">
        <p class="cookie-banner__title" ${A(ar('cookieTitle'))}>${esc(en('cookieTitle'))}</p>
        <p class="cookie-banner__text" ${A(ar('cookieText'))}>
          ${esc(en('cookieText'))}
        </p>
      </div>
      <div class="cookie-banner__actions">
        <button type="button" class="btn btn--primary btn--sm" id="cookie-accept" ${A(ar('cookieAccept'))}>${esc(en('cookieAccept'))}</button>
        <a href="privacy.html" class="btn btn--quiet btn--sm" ${A(ar('privacy'))}>${esc(en('privacy'))}</a>
      </div>
    </div>
  </aside>`;
}

function duaModal() {
  return `<dialog class="dua-dialog" id="dua-dialog" aria-labelledby="dua-text">
    <div class="dua-dialog__inner">
      <span class="dua-dialog__icon" aria-hidden="true">🤲</span>
      <h2 class="dua-dialog__text" id="dua-text" dir="rtl" ${A('دعاء لنا بالخير، فدعاء في ظهر الغيب مستجاب')}>
        دعاء لنا بالخير، فدعاء في ظهر الغيب مستجاب
      </h2>
      <p class="dua-dialog__sub" ${A('اللهم وفّق كل طالب علم ويسّر له أمره')}>
        Keep us in your prayers, for a supplication in absence is answered.
      </p>
      <button type="button" class="btn btn--primary dua-dialog__btn" id="dua-close" ${A('آمين يا رب')}>
        آمين يا رب
      </button>
    </div>
  </dialog>`;
}

function shell({ title, arTitle, desc, arDesc, current, body }) {
  return `<!doctype html>
<html lang="en" dir="ltr" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title ${A(arTitle)}>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}" data-ar-content="${esc(arDesc)}">
  <meta name="author" content="Halitim Amin">
  <link rel="icon" href="favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}" data-ar-content="${esc(arTitle)}">
  <meta property="og:description" content="${esc(desc)}" data-ar-content="${esc(arDesc)}">
  <meta property="og:image" content="assets/logo.png">
  <meta property="og:locale" content="en_DZ">
  <script>
    (function(){
      var d=document.documentElement;
      d.classList.remove('no-js');
      d.classList.add('js');
      try{
        var l=localStorage.getItem('ml7-lang');
        if(l==='ar'){d.lang='ar';d.dir='rtl';}
        if(localStorage.getItem('ml7-consent-v2')==='accepted'){
          d.classList.add('cookie-accepted');
        }
      }catch(e){}
    })();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,800&amp;family=IBM+Plex+Sans+Arabic:wght@400;700&amp;family=Source+Serif+4:opsz,wght@8..60,400&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/site.css">
</head>
<body>
  <a class="skip" href="#main" ${A('تجاوز إلى المحتوى')}>Skip to content</a>
  ${nav(current)}
  <main id="main">
${body}
  </main>
  ${cookieBanner()}
  ${duaModal()}
  ${footer(current !== 'home')}
  ${player()}
  <script src="assets/data.js" defer></script>
  <script src="assets/app.js" defer></script>
</body>
</html>
`;
}

/* ---------- home ---------- */

function hero() {
  const first = byN.get(1);
  return `<section class="hero">
    <div class="container hero__grid">
      <div class="hero__copy">
        ${bi('h1', '', 'Machine learning, semester seven.', 'تعلّم الآلة، السداسي السابع.')}
        ${bi('p', 'lead', 'Every syllabus topic, explained by 106 videos, with the maths drawn out.', 'كل موضوع في المقرر، تشرحه 106 فيديوهات، والرياضيات مرسومة.')}
        <div class="hero__actions">
          <a class="btn btn--primary" href="${first.url}" data-video="${first.n}">${PLAY}<span ${A('شغّل الدرس الأول')}>Play the first lesson</span></a>
          <a class="btn btn--quiet" href="#chapters"><span ${A('اقرأ الفصول')}>Read the chapters</span></a>
        </div>
        ${bi('p', 'hero__meta', 'Semester 7, UEF2, coefficient 4. Course by Halitim Amin.', 'السداسي 7، وحدة UEF2، معامل 4. المقرر: Halitim Amin.')}
      </div>
      <div class="hero__stage">
        ${descentChart()}
      </div>
    </div>
  </section>`;
}

function contents() {
  const rows = chapters.map((ch, index) => {
    const stat = chapterStat(ch);
    const lead = index === 0 ? `<span class="contents__line" ${A(ar('contentsLead'))}>${esc(T.contentsLead[0])}</span>` : '';
    return `<li class="contents__item${index === 0 ? ' contents__item--lead' : ''}">
        <a class="contents__row" href="chapter-${ch.id}.html" data-ch-row="${ch.id}">
          <span class="contents__num">${pad2(ch.id)}</span>
          <span class="contents__title" ${A(ch.ar.short)}>${esc(ch.en.short)}</span>
          <span class="contents__meta" ${A(stat.ar)}>${esc(stat.en)}</span>
          <span class="contents__badge" data-ch-badge="${ch.id}" hidden>0%</span>
          ${lead}
        </a>
      </li>`;
  }).join('\n');

  return `<section class="section" id="chapters">
    <div class="container">
      <div class="section__head">
        ${bi('h2', '', en('contentsHead'), ar('contentsHead'))}
        <p class="section__aside"><span ${A(`${arVideos(meta.videoCount)}، ${arTime(meta.totalSeconds)}`)}>${enVideos(meta.videoCount)}, ${meta.totalTime}</span></p>
      </div>
      ${bi('p', 'section__intro', en('contentsIntro'), ar('contentsIntro'))}
      <ol class="contents">
${rows}
      </ol>
    </div>
  </section>`;
}

function band() {
  const featured = byN.get(56);
  const next = [9, 46, 52].map((n) => byN.get(n));
  return `<section class="band section--band" aria-labelledby="featured-title">
    <div class="container band__grid">
      <figure class="poster">
        <a class="poster__link" href="${featured.url}" data-video="${featured.n}" aria-label="Play video 56: ${esc(featured.title)}" data-ar-aria="شغّل الفيديو 56: ${esc(featured.title)}">
          <span class="poster__top">
            <span class="poster__num">56</span>
            <span class="poster__play">${PLAY}${bi('span', '', 'Play, 23:54', 'شغّل، 23:54')}</span>
          </span>
          <span class="poster__bottom">
            <span class="poster__title">${esc(featured.title)}</span>
            <span class="poster__meta" ${A('الفصل 2، 23:54.')}>Chapter 2, 23:54.</span>
          </span>
        </a>
      </figure>
      <div class="band__copy">
        <h2 id="featured-title" ${A(ar('bandHead'))}>${esc(T.bandHead[0])}</h2>
        ${bi('p', '', en('bandLead'), ar('bandLead'))}
        <div class="band__next">
          <h3 ${A(ar('bandNext'))}>Next in chapter 2</h3>
          <ul>
${next.map((v) => `<li><a href="${v.url}" data-video="${v.n}"><span>${esc(v.title)}</span><span>${v.duration}</span></a></li>`).join('\n')}
          </ul>
        </div>
      </div>
    </div>
  </section>`;
}

function covers() {
  const picks = [1, 56, 46, 41, 31, 103].map((n) => byN.get(n));
  return `<section class="rail-section" aria-labelledby="rail-title">
    <div class="container">
      <div class="section__head">
        <h2 id="rail-title" ${A(ar('railHead'))}>${esc(T.railHead[0])}</h2>
      </div>
      ${bi('p', 'section__intro', en('railIntro'), ar('railIntro'))}
      <div class="rail-wrap" tabindex="0" role="region" aria-label="Six starting videos" data-ar-aria="ستة فيديوهات للبداية">
        <ul class="rail">
${picks.map((v) => `<li>
          <a class="cover" href="${v.url}" data-video="${v.n}" aria-label="Play video ${v.n}: ${esc(v.title)}" data-ar-aria="شغّل الفيديو ${v.n}: ${esc(v.title)}">
            <span class="cover__top"><span class="cover__num">${pad2(v.n)}</span><span class="cover__play">${PLAY}</span></span>
            <span class="cover__title">${esc(v.title)}</span>
            <span class="cover__meta" ${A(v.primary ? `الفصل ${v.primary}، ${v.duration}` : `غير مرتبط، ${v.duration}`)}>${v.primary ? `Chapter ${v.primary}` : 'Unmapped'}, ${v.duration}</span>
          </a>
        </li>`).join('\n')}
        </ul>
      </div>
    </div>
  </section>`;
}

function kmeans() {
  const p = kmeansPanels();
  const steps = ['one', 'two', 'three'].map((key, index) => `<li class="km__step">
        <figure class="km__fig">${p[key]}</figure>
        ${bi('p', 'km__label', T.kmLabels[index][0], T.kmLabels[index][1])}
        ${bi('p', 'km__text', T.kmTexts[index][0], T.kmTexts[index][1])}
      </li>`).join('\n');

  return `<section class="km section--well" aria-labelledby="km-title">
    <div class="container">
      <div class="section__head">
        <h2 id="km-title" ${A(ar('kmHead'))}>${esc(T.kmHead[0])}</h2>
        <p class="section__aside"><a href="chapter-3.html" ${A('الفصل 3')}>Chapter 3</a></p>
      </div>
      ${bi('p', 'section__intro', en('kmIntro'), ar('kmIntro'))}
      <ol class="km__steps">
${steps}
      </ol>
      ${bi('p', 'km__note', en('kmNote'), ar('kmNote'))}
    </div>
  </section>`;
}

function gapTable() {
  const rows = gaps.map((gap) => `<tr>
          <td class="gaps__chapter" data-label="Chapter" data-label-ar="الفصل"><a href="chapter-${gap.chapter}.html" aria-label="${esc(T.openChapter(gap.chapter)[0])}" data-ar-aria="${esc(T.openChapter(gap.chapter)[1])}">Ch ${gap.chapter}</a></td>
          <td data-label="Missing" data-label-ar="الناقص"><span class="gaps__what" ${A(gap.ar)}>${esc(gap.en)}</span><span class="gaps__note" ${A(gap.noteAr)}>${esc(gap.noteEn)}</span></td>
        </tr>`).join('\n');

  return `<section class="section" id="gaps">
    <div class="container">
      <div class="section__head">
        ${bi('h2', '', en('gapsHead'), ar('gapsHead'))}
        <p class="section__aside"><span ${A(`${gaps.length} صفوف`)}>${gaps.length} rows</span></p>
      </div>
      ${bi('p', 'section__intro', en('gapsIntro'), ar('gapsIntro'))}
      <table class="gaps__table">
        <thead><tr><th ${A('الفصل')}>Chapter</th><th ${A('الناقص')}>Missing</th></tr></thead>
        <tbody>
${rows}
        </tbody>
      </table>
      ${bi('p', 'gaps__also', en('also'), ar('also'))}
    </div>
  </section>`;
}

function homePage() {
  const body = `${hero()}
${contents()}
${band()}
${covers()}
${kmeans()}
${gapTable()}`;
  return shell({
    title: 'Machine learning, semester seven · ML VII',
    arTitle: 'تعلّم الآلة، السداسي السابع · ML VII',
    desc: 'A bilingual study guide to the Semester 7 machine learning syllabus: 106 StatQuest videos mapped to eight chapters, with the maths drawn out.',
    arDesc: 'دليل دراسة ثنائي اللغة لمقرر تعلّم الآلة في السداسي السابع: 106 فيديوهات من StatQuest مرتبطة بثمانية فصول، والرياضيات مرسومة.',
    current: 'home',
    body,
  });
}

/* ---------- chapters ---------- */

const DIAGRAM_KEY = {
  1: 'loop', 2: 'bias', 3: 'km', 4: 'bayes',
  5: 'agent', 6: 'confusion', 7: 'factor', 8: 'federated',
};

function chapterDiagram(ch) {
  const key = DIAGRAM_KEY[ch.id];
  if (key === 'km') {
    const p = kmeansPanels();
    return `<div class="km__triptych">
      <figure>${p.one}</figure>
      <figure>${p.two}</figure>
      <figure>${p.three}</figure>
    </div>`;
  }
  const fn = {
    loop: loopDiagram,
    bias: biasDiagram,
    bayes: bayesDiagram,
    agent: agentDiagram,
    confusion: confusionDiagram,
    factor: factorDiagram,
    federated: federatedDiagram,
  }[key];
  return fn();
}

function chapterHero(ch) {
  const firstRef = ch.lessons.flatMap((lesson) => lesson.groups).flatMap((group) => group.videos)[0];
  const firstVideo = firstRef ? byN.get(firstRef.n) : null;
  const cm = chapterMeta(ch);
  const action = firstVideo
    ? `<a class="btn btn--primary" href="${firstVideo.url}" data-video="${firstVideo.n}">${PLAY}<span ${A('شغّل أول فيديو')}>Play the first video</span></a>`
    : `<a class="btn btn--primary" href="library.html"><span ${A('تصفّح المكتبة')}>Browse the library</span></a>`;
  return `<section class="chapter">
    <div class="container chapter__grid">
      <div class="chapter__num-col">
        <span class="chapter__num" aria-hidden="true">${pad2(ch.id)}</span>
        <div class="chapter-progress-pill" data-chapter-pill="${ch.id}">
          <span class="chapter-progress-pill__bar"><span class="chapter-progress-pill__fill" data-chapter-fill="${ch.id}" style="width: 0%;"></span></span>
          <span class="chapter-progress-pill__text"><strong data-chapter-pct="${ch.id}">0%</strong> <span ${A('مكتمل')}>completed</span></span>
        </div>
      </div>
      <div class="chapter__copy">
        ${bi('h1', '', ch.en.title, ch.ar.title)}
        ${bi('p', 'lead', ch.en.standfirst, ch.ar.standfirst)}
        <div class="chapter__action">
          ${action}
          <a class="btn btn--quiet" href="index.html#chapters"><span ${A('كل الفصول')}>All chapters</span></a>
        </div>
        <p class="chapter__meta" ${A(cm.ar)}>${esc(cm.en)}</p>
      </div>
    </div>
  </section>`;
}

function splitSection(ch) {
  const points = ch.en.diagram.points.map((point, index) => `<li>
          <span>${pad2(index + 1)}</span>
          <span ${A(ch.ar.diagram.points[index])}>${esc(point)}</span>
        </li>`).join('\n');
  const trip = ch.id === 3 ? ' split--triptych' : '';
  return `<section class="split${trip}" aria-labelledby="diagram-title">
    <div class="container split__grid">
      <div class="split__text">
        <h2 id="diagram-title" ${A(ch.ar.diagram.title)}>${esc(ch.en.diagram.title)}</h2>
        ${bi('p', '', ch.en.diagram.intro, ch.ar.diagram.intro)}
        <ol class="split__points">
${points}
        </ol>
      </div>
      <figure class="split__fig">
        ${chapterDiagram(ch)}
        ${bi('figcaption', '', en('drawn'), ar('drawn'))}
      </figure>
    </div>
  </section>`;
}

function lessonSection(lesson, ch) {
  const bullets = lesson.en.bullets.map((bullet, index) => `<li ${A(lesson.ar.bullets[index])}>${esc(bullet)}</li>`).join('\n');
  const groups = lesson.groups.map((group) => {
    const items = group.videos.map((ref) => {
      const video = byN.get(ref.n);
      const mark = T.markWatched(video.title);
      return `<li class="video-row" data-n="${video.n}">
            <label class="watch">
              <input type="checkbox" data-watch="${video.n}" aria-label="${esc(mark[0])}" data-ar-aria="${esc(mark[1])}">
              <span class="watch__box" aria-hidden="true"></span>
            </label>
            <a class="video" href="${video.url}" data-video="${video.n}">
              <span class="video__n">${pad3(video.n)}</span>
              <span class="video__title">${PLAY}<span>${esc(video.title)}</span></span>
              <span class="video__time">${video.duration}</span>
            </a>
          </li>`;
    }).join('\n');
    return `<div class="vgroup">
          <h4 ${A(group.ar)}>${esc(group.en)}</h4>
          <ul class="videos">
${items}
          </ul>
        </div>`;
  }).join('\n');

  const empty = lesson.groups.length ? '' : `<p class="video-empty"><span ${A('لا فيديو مرتبط.')}>No video mapped.</span> <a href="index.html#gaps" ${A('افتح جدول الفجوات')}>Open the gap table</a></p>`;

  return `<section class="lesson" id="lesson-${lesson.id.replace('.', '-')}">
    <div class="container">
      <header class="lesson__head">
        <span class="lesson__id">${esc(lesson.id)}</span>
        <h2 ${A(lesson.ar.title)}>${esc(lesson.en.title)}</h2>
        <p class="lesson__practical"><span class="lesson__label" ${A('العملي')}>Practical</span> <span ${A(lesson.ar.practical)}>${esc(lesson.en.practical)}</span></p>
      </header>
      <div class="lesson__syllabus">
        <h3 ${A('المقرر')}>Syllabus</h3>
        <ul class="lesson__bullets">
${bullets}
        </ul>
      </div>
      <div class="lesson__watch">
        <h3 ${A('شاهد')}>Watch</h3>
${groups}
${empty}
      </div>
    </div>
  </section>`;
}

function coverageSection(ch) {
  const list = GAP_BY_CHAPTER.get(ch.id) || [];
  const items = list.length ? `<p class="coverage__fine" ${A('ناقص هنا')}>Missing here</p>
        <ul class="coverage__list">
${list.map((gap) => `<li ${A(gap.ar)}>${esc(gap.en)}</li>`).join('\n')}
        </ul>` : '';
  return `<section class="coverage" aria-labelledby="coverage-title">
    <div class="container coverage__grid">
      <div>
        <h2 id="coverage-title" ${A(ar('coverageHead'))}>${esc(T.coverageHead[0])}</h2>
        ${bi('p', 'coverage__fine', en('coverageFine'), ar('coverageFine'))}
      </div>
      <div class="coverage__body">
        ${bi('p', '', ch.en.coverageNote, ch.ar.coverageNote)}
        ${items}
        <a class="coverage__link" href="index.html#gaps" ${A('افتح جدول الفجوات')}>See the gap table</a>
      </div>
    </div>
  </section>`;
}

function pager(ch) {
  const previous = chapters.find((item) => item.id === ch.id - 1);
  const next = chapters.find((item) => item.id === ch.id + 1);
  const prevLink = previous
    ? `<a href="chapter-${previous.id}.html"><small ${A('الفصل السابق')}>Previous chapter</small><b ${A(previous.ar.short)}>${esc(previous.en.short)}</b></a>`
    : `<a href="index.html#chapters"><small ${A('الفصول')}>Chapters</small><b ${A('كل الفصول')}>All chapters</b></a>`;
  const nextLink = next
    ? `<a href="chapter-${next.id}.html"><small ${A('الفصل التالي')}>Next chapter</small><b ${A(next.ar.short)}>${esc(next.en.short)}</b></a>`
    : `<a href="library.html"><small ${A('المكتبة')}>Library</small><b ${A('كل الفيديوهات')}>All 106 videos</b></a>`;
  return `<nav class="pager" aria-label="Chapter navigation" data-ar-aria="التنقل بين الفصول">
    <div class="container pager__grid">
      ${prevLink}
      ${nextLink}
    </div>
  </nav>`;
}

function chapterPage(ch) {
  const body = `${chapterHero(ch)}
${splitSection(ch)}
${ch.lessons.map((lesson) => lessonSection(lesson, ch)).join('\n')}
${coverageSection(ch)}
${pager(ch)}`;
  return shell({
    title: `Chapter ${ch.id}, ${ch.en.title} · ML VII`,
    arTitle: `الفصل ${ch.id}، ${ch.ar.title} · ML VII`,
    desc: `${ch.en.standfirst} ${ch.videoCount ? `${ch.videoCount} videos mapped to this chapter.` : 'No video mapped yet.'}`,
    arDesc: `${ch.ar.standfirst} ${ch.videoCount ? `${arVideos(ch.videoCount)} مرتبطة بهذا الفصل.` : 'لا فيديو مرتبط بعد.'}`,
    current: '',
    body,
  });
}

/* ---------- library ---------- */

function libraryHero() {
  return `<section class="library-head">
    <div class="container library-head__grid">
      <div>
        <span class="library-figure" aria-hidden="true">106</span>
        <span class="library-figure__unit" ${A('فيديو في قائمة واحدة')}>videos in one playlist</span>
      </div>
      <div class="library-head__copy">
        <h1 ${A(ar('libraryHead'))}>${esc(T.libraryHead[0])}</h1>
        ${bi('p', 'lead', en('libraryLead'), ar('libraryLead'))}
        <div class="library-head__action"><a class="btn btn--primary" href="#library" ${A('اذهب إلى القائمة')}>Jump to the list</a></div>
        ${bi('p', 'library-head__meta', en('libraryMeta'), ar('libraryMeta'))}
      </div>
    </div>
  </section>`;
}

function mappingSection() {
  const points = T.mappingPoints.map(([titleEn, titleAr, bodyEn, bodyAr]) => `<li>
        <b ${A(titleAr)}>${esc(titleEn)}</b>
        <span ${A(bodyAr)}>${esc(bodyEn)}</span>
      </li>`).join('\n');
  return `<section class="mapping" aria-labelledby="mapping-title">
    <div class="container mapping__grid">
      <div class="mapping__head">
        <h2 id="mapping-title" ${A(ar('mappingHead'))}>${esc(T.mappingHead[0])}</h2>
        ${bi('p', '', en('mappingIntro'), ar('mappingIntro'))}
      </div>
      <ul class="mapping__points">
${points}
      </ul>
    </div>
  </section>`;
}

function libraryRows() {
  return videos.map((video) => {
    const chapterTags = video.chapters.join(' ');
    const meta = video.primary ? `${en('chLabel')} ${video.primary}, ${video.duration}` : `${en('unmappedRow')}, ${video.duration}`;
    const metaAr = video.primary ? `ف ${video.primary}، ${video.duration}` : `غير مرتبط، ${video.duration}`;
    const mark = T.markWatched(video.title);
    return `<li class="lib__row" data-n="${video.n}" data-title="${esc(video.title)}" data-chapters="${chapterTags}">
      <label class="watch">
        <input type="checkbox" data-watch="${video.n}" aria-label="${esc(mark[0])}" data-ar-aria="${esc(mark[1])}">
        <span class="watch__box" aria-hidden="true"></span>
      </label>
      <span class="lib__n">${pad3(video.n)}</span>
      <a class="lib__play" href="${video.url}" data-video="${video.n}">
        <span class="lib__title">${esc(video.title)}</span>
        <span class="lib__meta" ${A(metaAr)}>${esc(meta)}</span>
      </a>
    </li>`;
  }).join('\n');
}

function librarySection() {
  const chapterOptions = chapters.map((ch) => `<option value="${ch.id}" ${A(`${ch.id}، ${ch.ar.short}`)}>${ch.id}, ${esc(ch.en.short)}</option>`).join('\n');
  return `<section class="library" id="library">
    <div class="container">
      <div class="library__head">
        ${bi('h2', '', en('libHead'), ar('libHead'))}
        <p class="library__count" aria-live="polite">
          <span><output id="lib-visible">106</output> <span ${A('فيديو معروض')}>videos shown</span></span>
          <span><output id="lib-watched">0</output> <span ${A('تمت مشاهدته')}>watched</span></span>
        </p>
      </div>
      <form class="filters" role="search" aria-label="Filter videos" data-ar-aria="رشّح الفيديوهات">
        <div class="field field--search">
          <label for="lib-search" ${A('ابحث')}>Search</label>
          <input id="lib-search" type="search" placeholder="Search titles" data-ar-placeholder="ابحث في العناوين" autocomplete="off">
        </div>
        <div class="field">
          <label for="lib-chapter" ${A('الفصل')}>Chapter</label>
          <select id="lib-chapter">
            <option value="all" ${A('كل الفصول')}>All chapters</option>
${chapterOptions}
            <option value="none" ${A('غير مرتبط')}>Not mapped</option>
          </select>
        </div>
        <div class="field">
          <label for="lib-status" ${A('الحالة')}>Status</label>
          <select id="lib-status">
            <option value="all" ${A('كل الفيديوهات')}>All videos</option>
            <option value="unwatched" ${A('غير المشاهدة')}>Unwatched</option>
            <option value="watched" ${A('المشاهدة')}>Watched</option>
          </select>
        </div>
        <button class="btn btn--quiet filters__reset" type="button" id="lib-reset" ${A('امسح المرشّحات')}>Clear filters</button>
      </form>
      <p class="no-js-note" ${A('البحث والتقدّم يحتاجان JavaScript. القائمة الكاملة أدناه.')}>Search and progress need JavaScript. The full list is below.</p>
      <ul class="lib">
${libraryRows()}
      </ul>
      <p class="lib__empty" id="lib-empty" hidden ${A('لا فيديو يطابق. امسح المرشّحات أو جرّب بحثًا أقصر.')}>No videos match. Clear the filters or try a shorter search.</p>
    </div>
  </section>`;
}

function extrasSection() {
  return `<section class="extras" aria-labelledby="extras-title">
    <div class="container extras__grid">
      <div>
        <h2 id="extras-title" ${A(ar('extrasHead'))}>${esc(T.extrasHead[0])}</h2>
        ${bi('p', '', en('extrasIntro'), ar('extrasIntro'))}
      </div>
      <div class="extras__action">
        <a class="btn btn--quiet" href="#library" id="extras-filter" ${A('اعرض الـ28')}>Show the 28</a>
      </div>
    </div>
  </section>`;
}

function libraryPage() {
  const body = `${libraryHero()}
${mappingSection()}
${librarySection()}
${extrasSection()}`;
  return shell({
    title: 'Every video in the playlist · ML VII',
    arTitle: 'كل فيديو في قائمة التشغيل · ML VII',
    desc: 'All 106 StatQuest machine learning videos, each mapped to a chapter of the Semester 7 syllabus or marked unmapped.',
    arDesc: '106 فيديوهات من StatQuest لتعلّم الآلة، كل واحد مرتبط بفصل من مقرر السابع أو موسوم بغير مرتبط.',
    current: 'library',
    body,
  });
}

function privacyPage() {
  const body = `<section class="section">
    <div class="container privacy-page">
      <header class="section__head">
        ${bi('h1', '', 'Privacy & Cookies Policy', 'سياسة الخصوصية وملفات تعريف الارتباط')}
        <p class="section__aside"><span ${A('تحديث: أكتوبر 2026')}>Updated: October 2026</span></p>
      </header>
      ${bi('p', 'section__intro', 'Clear, transparent, and respectful of your autonomy. No trackers, no advertising, and no personal data collection.', 'واضحة وشفافة وتحترم خصوصيتك بالكامل. لا أدوات تتبع، لا إعلانات، ولا جمع لأي بيانات شخصية.')}

      <div class="privacy-grid">
        <article class="privacy-card">
          ${bi('h2', 'privacy-card__title', '1. Zero Personal Data Collection', '1. عدم جمع أي بيانات شخصية')}
          ${bi('p', '', 'ML VII is an educational study guide for university students. We do not require accounts, logins, email addresses, or names. We do not track your IP address, browser fingerprint, or geographic location. Nothing you read or study here is ever sent to a tracking database.', 'دليل ML VII هو موقع تعليمي مخصص لطلاب الجامعة. لا يتطلب أي تسجيل دخول، أو بريد إلكتروني، أو اسم. نحن لا نتتبع عنوان IP الخاص بك أو موقعك الجغرافي. لا يتم إرسال أي معلومة حول ما تدرسه إلى أي قاعدة بيانات تتبّع.')}
        </article>

        <article class="privacy-card">
          ${bi('h2', 'privacy-card__title', '2. How Local Storage (LocalStorage) is Used', '2. كيف نستخدم التخزين المحلي (LocalStorage)')}
          ${bi('p', '', 'Instead of using tracking cookies on a server, this website stores a few essential pieces of data directly inside your own web browser storage (LocalStorage). This data never leaves your device:', 'بدل استخدام ملفات تعريف ارتباط (Cookies) على خادم، يحفظ الموقع بعض البيانات الأساسية في ذاكرة متصفحك محلياً (LocalStorage). هذه البيانات لا تغادر جهازك أبداً:')}
          <ul class="privacy-list">
            <li><strong>ml7-lang:</strong> <span ${A('يحفظ لغة العرض التي اخترتها (العربية أو الإنجليزية).')}>Remembers your preferred interface language (Arabic or English).</span></li>
            <li><strong>ml7-caption-lang:</strong> <span ${A('يحفظ لغة الترجمة المصاحبة الافتراضية لفيديوهات يوتيوب (العربية، الإنجليزية، أو إيقاف).')}>Remembers your preferred YouTube caption language (Arabic, English, or Off).</span></li>
            <li><strong>ml7-watched:</strong> <span ${A('يحفظ أرقام الفيديوهات التي حددتها كمشاهدة لحساب نسبة تعلّمك في المادة (ML Progress %).')}>Stores an array of video IDs you have marked as watched to calculate your overall learning percentage (% of ML learned).</span></li>
            <li><strong>ml7-consent-v2:</strong> <span ${A('يحفظ موافقتك على إشعار الخصوصية والتخزين المحلي كي لا يظهر الشريط مجدداً.')}>Remembers that you acknowledged the privacy & local storage banner.</span></li>
          </ul>
        </article>

        <article class="privacy-card">
          ${bi('h2', 'privacy-card__title', '3. Third-Party Services (YouTube)', '3. الخدمات الخارجية (YouTube)')}
          ${bi('p', '', 'Videos embedded in this site are hosted on YouTube (StatQuest channel). When you click to play a video, YouTube may set its own cookies and track playback metrics according to Google’s Privacy Policy. We do not control Google/YouTube cookies.', 'الفيديوهات المضمنة في هذا الموقع مستضافة على يوتيوب (قناة StatQuest). عند تشغيل أي فيديو، قد يقوم يوتيوب بوضع ملفات تعريف الارتباط الخاصة به وفقاً لسياسة خصوصية Google. ليس لدينا تحكم في ملفات تعريف ارتباط Google/YouTube.')}
          <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener" ${A('اقرأ سياسة خصوصية Google')}>Read Google Privacy Policy &rarr;</a></p>
        </article>

        <article class="privacy-card">
          ${bi('h2', 'privacy-card__title', '4. Manage & Clear Your Data', '4. إدارة ومسح بياناتك المخزنة')}
          ${bi('p', '', 'Because all your progress and settings exist only in your browser, you have complete control. You can reset your progress, watched videos, and preferences with one click below, or by clearing your browser cache/cookies at any time.', 'نظراً لأن جميع بيانات تقدمك وتفضيلاتك موجودة فقط في متصفحك، فإنك تملك السيطرة الكاملة عليها. يمكنك تصفير تقدمك وحذف كافة التفضيلات بنقرة واحدة أدناه، أو عبر مسح بيانات التصفح من إعدادات متصفحك في أي وقت.')}
          <div class="privacy-actions">
            <button type="button" class="btn btn--quiet" id="privacy-reset-consent" ${A('إعادة إظهار إشعار الكوكيز')}>Re-open Cookie Banner</button>
            <button type="button" class="btn btn--quiet" id="privacy-clear-data" ${A('مسح كل بيانات التقدم والتفضيلات')}>Clear all saved progress &amp; settings</button>
            <span class="privacy-clear-feedback" id="privacy-clear-feedback" hidden ${A('تم مسح جميع البيانات بنجاح!')}>All local data cleared successfully!</span>
          </div>
        </article>
      </div>

      <div class="section__action" style="margin-top: 2.5rem;">
        <a class="btn btn--primary" href="index.html"><span ${A('العودة إلى الصفحة الرئيسية')}>Return to Home</span></a>
      </div>
    </div>
  </section>`;

  return shell({
    title: 'Privacy & Cookies Policy · ML VII',
    arTitle: 'سياسة الخصوصية وملفات تعريف الارتباط · ML VII',
    desc: 'Privacy and cookie policy for the ML VII study guide: local browser storage, zero tracking, and complete user autonomy.',
    arDesc: 'سياسة الخصوصية وملفات تعريف الارتباط لدليل دراسة ML VII: تخزين محلي في المتصفح، بدون أي تتبع، وتحكم كامل للمستخدم.',
    current: 'privacy',
    body,
  });
}

/* ---------- write ---------- */

const pages = [
  ['index.html', homePage()],
  ...chapters.map((ch) => [`chapter-${ch.id}.html`, chapterPage(ch)]),
  ['library.html', libraryPage()],
  ['privacy.html', privacyPage()],
];

for (const [file, html] of pages) {
  writeFileSync(resolve(ROOT, file), html);
  console.log(`${file}  ${(html.length / 1024).toFixed(1)} kB`);
}
console.log(`videos ${meta.videoCount}, mapped ${mapped.length}, extras ${extras.length}, chapters ${chapters.length}`);
