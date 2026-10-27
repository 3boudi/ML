/* Progressive enhancement for ML VII. Nothing here is needed to read or to
   reach a video: every player link is a real YouTube link, every list is in
   the HTML. The script only adds the bilingual switch, the dialog player,
   the learning-rate control and the watch list. */
(() => {
  const html = document.documentElement;
  const LANG_KEY = 'ml7-lang';
  const WATCH_KEY = 'ml7-watched';
  const originals = new WeakMap();
  let currentLang = html.lang === 'ar' ? 'ar' : 'en';
  let openVideo = null;
  let lastTrigger = null;

  const one = (sel, root = document) => root.querySelector(sel);
  const all = (sel, root = document) => [...root.querySelectorAll(sel)];

  // The HTML ships in English. Take that copy before any Arabic is applied so
  // switching back and forth is lossless even when the page opens in Arabic.
  for (const el of all('[data-ar]')) originals.set(el, el.textContent);

  /* ---------- language ---------- */

  function textFor(el, lang) {
    if (lang === 'ar') return el.getAttribute('data-ar') ?? el.textContent;
    if (!originals.has(el)) originals.set(el, el.textContent);
    return originals.get(el);
  }

  function applyLanguage(lang, persist = true) {
    currentLang = lang === 'ar' ? 'ar' : 'en';
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    for (const el of all('[data-ar]')) {
      const next = textFor(el, currentLang);
      if (el.textContent !== next) el.textContent = next;
    }

    for (const el of all('[data-ar-content]')) {
      if (!el.dataset.enContent) el.dataset.enContent = el.getAttribute('content') || '';
      el.setAttribute('content', currentLang === 'ar' ? el.getAttribute('data-ar-content') : el.dataset.enContent);
    }

    for (const el of all('[data-ar-placeholder]')) {
      if (!el.dataset.enPlaceholder) el.dataset.enPlaceholder = el.getAttribute('placeholder') || '';
      el.setAttribute('placeholder', currentLang === 'ar' ? el.getAttribute('data-ar-placeholder') : el.dataset.enPlaceholder);
    }

    for (const el of all('[data-ar-aria]')) {
      if (!el.dataset.enAria) el.dataset.enAria = el.getAttribute('aria-label') || '';
      el.setAttribute('aria-label', currentLang === 'ar' ? el.getAttribute('data-ar-aria') : el.dataset.enAria);
    }

    const toggle = one('[data-lang-toggle]');
    if (toggle) {
      toggle.textContent = currentLang === 'ar' ? 'English' : 'العربية';
      toggle.lang = currentLang === 'ar' ? 'en' : 'ar';
      toggle.setAttribute('aria-label', currentLang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }

    if (persist) {
      try { localStorage.setItem(LANG_KEY, currentLang); } catch {}
    }

    if (openVideo) renderPlayer(openVideo);
    if (typeof updateCaptionButtons === 'function') updateCaptionButtons();
    if (applyFilters) applyFilters();
  }

  const toggle = one('[data-lang-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => applyLanguage(currentLang === 'ar' ? 'en' : 'ar'));
  }

  /* ---------- the learning-rate control ---------- */

  const rates = all('input[name="descent-rate"]');
  if (rates.length) {
    const groups = all('.descent__chart [data-rate]');
    const lossValue = one('[data-loss-value]');
    const setRate = (value) => {
      for (const group of groups) group.hidden = group.getAttribute('data-rate') !== value;
      const active = rates.find((input) => input.checked);
      if (active && lossValue) lossValue.textContent = active.getAttribute('data-loss') || '';
    };
    for (const input of rates) input.addEventListener('change', () => setRate(input.value));
    const checked = rates.find((input) => input.checked) || rates[0];
    if (checked) {
      checked.checked = true;
      setRate(checked.value);
    }
  }

  /* ---------- the player & captions ---------- */

  const dialog = one('#player');
  const CAPTION_KEY = 'ml7-caption-lang';
  let preferredCaption = null;
  try {
    const saved = localStorage.getItem(CAPTION_KEY);
    if (saved === 'ar' || saved === 'en' || saved === 'off') {
      preferredCaption = saved;
    }
  } catch {}

  function getEffectiveCaption() {
    return preferredCaption || (currentLang === 'ar' ? 'ar' : 'en');
  }

  function updateCaptionButtons() {
    if (!dialog) return;
    const effective = getEffectiveCaption();
    const btns = all('.caption-btn', dialog);
    for (const btn of btns) {
      const bLang = btn.getAttribute('data-caption-lang');
      const isActive = bLang === effective;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  }

  function buildEmbedUrl(videoId, caption, startTime = 0) {
    const params = new URLSearchParams({
      autoplay: '1',
      rel: '0',
      enablejsapi: '1'
    });
    if (startTime > 0) {
      params.set('start', String(Math.floor(startTime)));
    }
    if (caption === 'ar') {
      params.set('cc_load_policy', '1');
      params.set('cc_lang_pref', 'ar');
      params.set('hl', 'ar');
    } else if (caption === 'en') {
      params.set('cc_load_policy', '1');
      params.set('cc_lang_pref', 'en');
      params.set('hl', 'en');
    } else if (caption === 'off') {
      params.set('cc_load_policy', '0');
    }
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  }

  let currentPlaybackTime = 0;
  window.addEventListener('message', (event) => {
    try {
      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      if (data && data.info && typeof data.info.currentTime === 'number') {
        currentPlaybackTime = data.info.currentTime;
      }
    } catch {}
  });

  function switchCaptionLanguage(target) {
    preferredCaption = target;
    try {
      localStorage.setItem(CAPTION_KEY, target);
    } catch {}
    updateCaptionButtons();

    if (!dialog || !openVideo) return;

    const link = one('#player-link', dialog);
    if (link) {
      const hlParam = target === 'ar' ? '&hl=ar' : (target === 'en' ? '&hl=en' : '');
      link.href = `${openVideo.url}${hlParam}`;
    }

    const frame = one('#player-frame', dialog);
    if (!frame) return;

    // Send postMessage to YouTube IFrame API to change captions immediately
    const existingIframe = one('iframe', frame);
    if (existingIframe && existingIframe.contentWindow) {
      try {
        if (target === 'off') {
          existingIframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'unloadModule',
            args: ['captions']
          }), '*');
          existingIframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'setOption',
            args: ['captions', 'track', {}]
          }), '*');
        } else {
          existingIframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'loadModule',
            args: ['captions']
          }), '*');
          existingIframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'setOption',
            args: ['captions', 'track', { languageCode: target }]
          }), '*');
        }
      } catch (e) {}
    }

    // Seamlessly reload iframe with explicit cc_load_policy and cc_lang_pref
    // at the preserved timestamp to guarantee YouTube renders the selected subtitle
    const iframe = document.createElement('iframe');
    iframe.src = buildEmbedUrl(openVideo.id, target, currentPlaybackTime);
    iframe.title = openVideo.title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    frame.replaceChildren(iframe);
  }

  function videoFor(n) {
    const list = window.ML && window.ML.videos;
    return Array.isArray(list) ? list.find((v) => Number(v.n) === Number(n)) : null;
  }

  function noteFor(video) {
    if (!video || !video.note) return '';
    return currentLang === 'ar' ? video.note[1] || '' : video.note[0] || '';
  }

  function renderPlayer(video) {
    if (!dialog || !video) return;
    const title = one('#player-title', dialog);
    const note = one('#player-note', dialog);
    const link = one('#player-link', dialog);
    title.textContent = video.title;
    title.lang = 'en';
    title.dir = 'ltr';
    const text = noteFor(video);
    note.textContent = text;
    note.hidden = !text;
    const effective = getEffectiveCaption();
    const hlParam = effective === 'ar' ? '&hl=ar' : (effective === 'en' ? '&hl=en' : '');
    if (link) link.href = `${video.url}${hlParam}`;
    if (video.n) dialog.setAttribute('data-playing', String(video.n));
    updateCaptionButtons();
  }

  function openPlayer(n, trigger) {
    if (!dialog || typeof dialog.showModal !== 'function') return false;
    const video = videoFor(n);
    if (!video) return false;
    openVideo = video;
    lastTrigger = trigger || null;
    currentPlaybackTime = 0;
    renderPlayer(video);
    const frame = one('#player-frame', dialog);
    frame.replaceChildren();
    const effective = getEffectiveCaption();
    const iframe = document.createElement('iframe');
    iframe.src = buildEmbedUrl(video.id, effective, 0);
    iframe.title = video.title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    frame.append(iframe);
    document.body.classList.add('is-playing');
    dialog.showModal();
    return true;
  }

  if (dialog) {
    const captionBtns = all('.caption-btn', dialog);
    for (const btn of captionBtns) {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-caption-lang');
        if (target) switchCaptionLanguage(target);
      });
    }

    dialog.addEventListener('close', () => {
      const frame = one('#player-frame', dialog);
      if (frame) frame.replaceChildren();
      document.body.classList.remove('is-playing');
      openVideo = null;
      currentPlaybackTime = 0;
      if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    });
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-video]');
    if (!link) return;
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (openPlayer(link.getAttribute('data-video'), link)) event.preventDefault();
  });

  /* ---------- the library ---------- */

  const library = one('#library');
  const libraryRows = library ? all('.lib__row', library) : [];
  let applyFilters = null;
  let watched = new Set();

  try {
    const stored = JSON.parse(localStorage.getItem(WATCH_KEY) || '[]');
    if (Array.isArray(stored)) watched = new Set(stored.map(Number).filter(Number.isFinite));
  } catch {}

  function saveWatched() {
    try { localStorage.setItem(WATCH_KEY, JSON.stringify([...watched].sort((a, b) => a - b))); } catch {}
  }

  function updateWatchedCount() {
    const out = one('#lib-watched');
    if (out) out.textContent = String(watched.size);
  }

  if (libraryRows.length) {
    const search = one('#lib-search');
    const chapter = one('#lib-chapter');
    const status = one('#lib-status');
    const reset = one('#lib-reset');
    const visible = one('#lib-visible');
    const empty = one('#lib-empty');

    applyFilters = () => {
      const query = (search ? search.value : '').trim().toLowerCase();
      const picked = chapter ? chapter.value : 'all';
      const state = status ? status.value : 'all';
      let shown = 0;
      for (const row of libraryRows) {
        const tags = (row.getAttribute('data-chapters') || '').split(/\s+/).filter(Boolean);
        const isWatched = watched.has(Number(row.getAttribute('data-n')));
        const matchesQuery = !query || (row.getAttribute('data-title') || '').toLowerCase().includes(query);
        const matchesChapter = picked === 'all' || (picked === 'none' ? tags.length === 0 : tags.includes(picked));
        const matchesStatus = state === 'all' || (state === 'watched' ? isWatched : !isWatched);
        const show = matchesQuery && matchesChapter && matchesStatus;
        row.classList.toggle('is-hidden', !show);
        if (show) shown += 1;
      }
      if (visible) visible.textContent = String(shown);
      if (empty) empty.hidden = shown !== 0;
    };

    for (const box of all('input[data-watch]', library)) {
      const n = Number(box.getAttribute('data-watch'));
      const row = box.closest('.lib__row');
      box.checked = watched.has(n);
      if (row) row.classList.toggle('is-watched', box.checked);
      box.addEventListener('change', () => {
        if (box.checked) watched.add(n); else watched.delete(n);
        if (row) row.classList.toggle('is-watched', box.checked);
        saveWatched();
        updateWatchedCount();
        applyFilters();
      });
    }
    updateWatchedCount();

    for (const control of [search, chapter, status]) {
      if (control) control.addEventListener('input', applyFilters);
      if (control) control.addEventListener('change', applyFilters);
    }
    if (reset) {
      reset.addEventListener('click', () => {
        if (search) search.value = '';
        if (chapter) chapter.value = 'all';
        if (status) status.value = 'all';
        applyFilters();
        if (search) search.focus();
      });
    }

    const extras = one('#extras-filter');
    if (extras) {
      extras.addEventListener('click', (event) => {
        if (!chapter) return;
        event.preventDefault();
        chapter.value = 'none';
        if (status) status.value = 'all';
        if (search) search.value = '';
        applyFilters();
        const target = one('#library');
        if (target) target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        const first = libraryRows.find((row) => !row.classList.contains('is-hidden'));
        const play = first && one('.lib__play', first);
        if (play) play.focus({ preventScroll: true });
      });
    }

    applyFilters();
  }

  /* ---------- remove Netlify badge ---------- */

  function purgeNetlifyBadge() {
    const candidates = all(
      'iframe[src*="netlify"], iframe[src*="badge"], iframe[title*="Netlify" i], netlify-badge, netlify-drawer, [data-netlify-badge], [data-netlify-drawer], [id*="netlify-badge" i], [class*="netlify-badge" i], [id*="netlify_badge" i]'
    );
    for (const el of candidates) {
      if (el.id !== 'player' && !el.closest('#player')) {
        el.remove();
      }
    }
    for (const a of all('a[href*="netlify.com"]')) {
      const parent = a.parentElement;
      if (parent && parent !== document.body && parent.id !== 'player') {
        const style = window.getComputedStyle(parent);
        if (style.position === 'fixed' || style.position === 'absolute') {
          parent.remove();
        }
      }
    }
  }

  try {
    purgeNetlifyBadge();
    const netlifyObserver = new MutationObserver((mutations) => {
      let shouldPurge = false;
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType === 1) {
            const tag = node.tagName.toLowerCase();
            const src = node.getAttribute('src') || '';
            const id = node.id || '';
            const cls = typeof node.className === 'string' ? node.className : '';
            if (
              tag.includes('netlify') ||
              src.includes('netlify') ||
              src.includes('badge') ||
              /netlify/i.test(id) ||
              /netlify/i.test(cls)
            ) {
              shouldPurge = true;
              break;
            }
          }
        }
        if (shouldPurge) break;
      }
      if (shouldPurge) purgeNetlifyBadge();
    });
    netlifyObserver.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('DOMContentLoaded', purgeNetlifyBadge);
    window.addEventListener('load', purgeNetlifyBadge);
  } catch {}

  applyLanguage(currentLang, false);
})();
