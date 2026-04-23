/* =========================================================
   CV Site — client logic: lang/theme toggles, render, print
   ========================================================= */
(function () {
  'use strict';

  // ---------- SVG icon library ----------
  const ICONS = {
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M21.66 4.14 2.93 11.5c-1.28.52-1.27 1.24-.23 1.56l4.79 1.5 1.85 5.67c.22.6.11.83.74.83.49 0 .7-.22.98-.49l2.38-2.32 4.94 3.65c.91.5 1.56.24 1.79-.84l3.24-15.28c.33-1.31-.5-1.9-1.75-1.64Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 .5C5.73.5.67 5.56.67 11.83c0 4.99 3.24 9.22 7.74 10.72.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.15.69-3.81-1.52-3.81-1.52-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.44.11-3 0 0 .96-.31 3.14 1.17.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.56.23 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.3-5.18 5.58.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55C20.1 21.04 23.33 16.81 23.33 11.83 23.33 5.56 18.27.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 17.34H5.67V9.67h2.67v7.67zM7 8.5A1.5 1.5 0 1 1 7 5.5a1.5 1.5 0 0 1 0 3zm11.33 8.84h-2.67v-3.67c0-.88-.02-2-1.22-2-1.22 0-1.4.95-1.4 1.93v3.74h-2.67V9.67h2.56v1.05h.04c.36-.68 1.23-1.4 2.53-1.4 2.71 0 3.21 1.78 3.21 4.1v3.92z"/></svg>',
    pubdev: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2 3 6v12l9 4 9-4V6l-9-4Zm0 2.26 6.54 2.91L12 10.09 5.46 7.17 12 4.26ZM5 8.55l6 2.67v8.22l-6-2.67V8.55Zm8 10.89v-8.22l6-2.67v8.22l-6 2.67Z"/></svg>'
  };

  // ---------- STATE ----------
  const state = {
    lang: 'ru',
    data: null
  };

  let animObs = null;
  let firstRender = true;

  // ---------- HELPERS ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function icon(name) {
    return ICONS[name] || '';
  }

  function highlightStats(str) {
    if (str == null) return '';
    return esc(str).replace(
      /\b(v?\d[\d,]*(?:[./]\d+)*[+×%]?)/g,
      '<strong class="stat">$1</strong>'
    );
  }

  function bulletHtml(items) {
    if (!items || !items.length) return '';
    return `<ul class="bullets">${items.map((b) => `<li>${highlightStats(b)}</li>`).join('')}</ul>`;
  }

  // ---------- RENDERERS ----------
  function renderHero(data) {
    const { header } = data;
    const contacts = header.contacts
      .map(
        (c) => `
          <li>
            <a class="contact" href="${esc(c.href)}" target="_blank" rel="noopener">
              <span class="icon">${icon(c.icon)}</span>
              <span class="label-value">${esc(c.value)}</span>
            </a>
          </li>`
      )
      .join('');

    return `
      <section class="hero">
        <div class="hero-text">
          <h1>${esc(header.name)} ${esc(header.surname || '')}</h1>
          <p class="hero-role">${esc(header.role)}</p>
          <p class="hero-tagline">${esc(header.tagline)}</p>
          <p class="hero-location">${esc(header.location)}</p>
          <ul class="contacts">${contacts}</ul>
        </div>
        <div class="hero-photo">
          <img src="assets/photo.jpg" alt="${esc(header.name)} ${esc(header.surname || '')}" onerror="this.style.display='none'" />
        </div>
      </section>
    `;
  }

  function renderAbout(data) {
    if (!data.about) return '';
    const paragraphs = data.about.map((p) => `<p>${esc(p)}</p>`).join('');
    return sectionWrap({
      id: 'about',
      kicker: '01',
      title: data.sections.about,
      body: `<div class="about">${paragraphs}</div>`
    });
  }

  function renderPosition(data) {
    if (!data.position) return '';
    const p = data.position;
    const hint = esc(data.sections.revealHint || (state.lang === 'ru' ? 'Нажмите, чтобы раскрыть' : 'Click to reveal'));
    const salaryHtml = p.salaryHidden
      ? `<span class="spoiler" tabindex="0" role="button" aria-label="${hint}" title="${hint}">${esc(p.salary)}</span><span class="spoiler-hint">${hint}</span>`
      : esc(p.salary);
    return sectionWrap({
      id: 'position',
      kicker: '02',
      title: data.sections.position,
      body: `
        <div class="position-card">
          <div class="position-item">
            <div class="position-label">${state.lang === 'ru' ? 'Роль' : 'Role'}</div>
            <div class="position-value">${esc(p.role)}</div>
            <div class="position-value-alt">${esc(p.roleDetails || '')}</div>
          </div>
          <div class="position-item">
            <div class="position-label">${state.lang === 'ru' ? 'Желаемый доход' : 'Compensation'}</div>
            <div class="position-value">${salaryHtml}</div>
            <div class="position-value-alt">${esc(p.salaryAlt || '')}</div>
          </div>
          <div class="position-item">
            <div class="position-label">${state.lang === 'ru' ? 'Занятость' : 'Employment'}</div>
            <div class="position-value">${esc(p.type)}</div>
            <div class="position-value-alt">${esc(p.format || '')}</div>
          </div>
        </div>
      `
    });
  }

  function renderExperience(data) {
    if (!data.experience || !data.experience.length) return '';

    const html = data.experience
      .map((exp) => {
        const metaParts = [];
        if (exp.role) metaParts.push(`<span class="exp-meta-role">${esc(exp.role)}</span>`);
        if (exp.period) metaParts.push(esc(exp.period));
        if (exp.duration) metaParts.push(esc(exp.duration));
        if (exp.location) metaParts.push(esc(exp.location));

        const metaRow = metaParts.length ? `<p class="exp-meta">${metaParts.join(' · ')}</p>` : '';
        const note = exp.note ? `<p class="exp-note">${esc(exp.note)}</p>` : '';
        const desc = exp.description ? `<p class="exp-desc">${esc(exp.description)}</p>` : '';
        const generalBullets = bulletHtml(exp.generalBullets);
        const hasProjects = exp.projects && exp.projects.length;
        const projects = hasProjects ? renderProjects(exp.projects) : '';
        const expClass = hasProjects ? 'exp' : 'exp standalone-exp';

        return `
          <div class="${expClass}">
            <div class="exp-head">
              <h3 class="exp-company">${esc(exp.company)}</h3>
              ${metaRow}
              ${note}
            </div>
            ${desc}
            ${generalBullets}
            ${projects}
          </div>
        `;
      })
      .join('');

    return sectionWrap({
      id: 'experience',
      kicker: '03',
      title: data.sections.experience,
      body: html
    });
  }

  function renderProjects(projects) {
    const html = projects
      .map((p) => {
        const head = [];
        head.push(`<h4 class="project-name">${esc(p.name)}</h4>`);
        if (p.role) head.push(`<span class="project-role">${esc(p.role)}</span>`);
        if (p.period) head.push(`<span class="project-period">${esc(p.period)}</span>`);

        const stack = p.stack ? `<p class="project-stack">${esc(p.stack)}</p>` : '';
        return `
          <div class="project">
            <div class="project-head">${head.join('')}</div>
            ${stack}
            ${bulletHtml(p.bullets)}
          </div>
        `;
      })
      .join('');

    return `<div class="projects">${html}</div>`;
  }

  function renderOwnProducts(data) {
    if (!data.ownProducts || !data.ownProducts.length) return '';
    const html = data.ownProducts
      .map((p) => {
        const desc = p.description ? `<p class="exp-desc">${esc(p.description)}</p>` : '';
        return `
          <div class="project">
            <div class="project-head">
              <h4 class="project-name">${esc(p.name)}</h4>
              <span class="project-role">${esc(p.role)}</span>
              <span class="project-period">${esc(p.period)}</span>
            </div>
            ${desc}
            ${bulletHtml(p.bullets)}
          </div>
        `;
      })
      .join('');

    return sectionWrap({
      id: 'own-products',
      kicker: '04',
      title: data.sections.ownProducts,
      body: `<div class="projects">${html}</div>`
    });
  }

  function renderTeaching(data) {
    if (!data.teaching || !data.teaching.length) return '';
    const html = data.teaching
      .map((t) => {
        return `
          <div class="project">
            <div class="project-head">
              <h4 class="project-name">${esc(t.name)}</h4>
              <span class="project-role">${esc(t.role)}</span>
              <span class="project-period">${esc(t.period)}</span>
            </div>
            ${bulletHtml(t.bullets)}
          </div>
        `;
      })
      .join('');

    return sectionWrap({
      id: 'teaching',
      kicker: '05',
      title: data.sections.teaching,
      body: `<div class="projects">${html}</div>`
    });
  }

  function renderAchievements(data) {
    if (!data.achievements) return '';
    const groups = Object.values(data.achievements)
      .map(
        (g) => `
          <div class="ach-group">
            <h3 class="ach-label">${esc(g.label)}</h3>
            <ul class="ach-list">
              ${g.items.map((i) => `<li>${highlightStats(i)}</li>`).join('')}
            </ul>
          </div>
        `
      )
      .join('');

    return sectionWrap({
      id: 'achievements',
      kicker: '06',
      title: data.sections.achievements,
      body: groups
    });
  }

  function renderSkills(data) {
    if (!data.skills || !data.skills.length) return '';
    const html = data.skills
      .map((s) => {
        const chips = s.items.map((i) => `<li>${esc(i)}</li>`).join('');
        const note = s.note ? `<p class="skill-note">${esc(s.note)}</p>` : '';
        return `
          <div class="skill-group">
            <h4 class="skill-group-label">${esc(s.group)}</h4>
            <ul class="skill-chips">${chips}</ul>
            ${note}
          </div>
        `;
      })
      .join('');

    return sectionWrap({
      id: 'skills',
      kicker: '07',
      title: data.sections.skills,
      body: `<div class="skills-grid">${html}</div>`
    });
  }

  function renderEducation(data) {
    if (!data.education) return '';
    const degrees = (data.education.degrees || [])
      .map(
        (d) => `
          <li class="edu-item">
            <div class="edu-institution">${esc(d.institution)}</div>
            <div class="edu-degree">${esc(d.degree)}${d.specialty ? ' · ' + esc(d.specialty) : ''}</div>
            <div class="edu-meta">${esc(d.year)}</div>
          </li>
        `
      )
      .join('');

    const courses = (data.education.courses || [])
      .map(
        (c) => `
          <li>
            <span class="course-year">${esc(c.year)}</span>
            <span><strong>${esc(c.name)}</strong><br /><span class="course-provider">${esc(c.provider)}</span></span>
          </li>
        `
      )
      .join('');

    const coursesBlock = courses
      ? `
          <div class="edu-courses">
            <h3 class="edu-courses-head">${state.lang === 'ru' ? 'Курсы и повышение квалификации' : 'Courses & Certifications'}</h3>
            <ul class="course-list">${courses}</ul>
          </div>
        `
      : '';

    return sectionWrap({
      id: 'education',
      kicker: '08',
      title: data.sections.education,
      body: `<ul class="edu-list">${degrees}</ul>${coursesBlock}`
    });
  }

  function renderLanguages(data) {
    if (!data.languages || !data.languages.length) return '';
    const list = data.languages
      .map((l) => `<li><strong>${esc(l.name)}</strong><span class="lang-level">— ${esc(l.level)}</span></li>`)
      .join('');

    const additional = data.additional
      ? `<div class="additional-block">${esc(data.additional)}</div>`
      : '';

    return sectionWrap({
      id: 'languages',
      kicker: '09',
      title: data.sections.languages,
      body: `<ul class="lang-list">${list}</ul>${additional}`
    });
  }

  function sectionWrap({ id, kicker, title, body }) {
    return `
      <section class="section" id="section-${id}">
        <header class="section-head">
          <h2 class="section-title">${esc(title)}</h2>
          <span class="section-kicker">${esc(kicker)}</span>
        </header>
        ${body}
      </section>
    `;
  }

  // ---------- MAIN RENDER ----------
  function render() {
    const data = state.lang === 'ru' ? window.CV_DATA_RU : window.CV_DATA_EN;
    state.data = data;

    // meta
    document.documentElement.lang = data.meta.lang;
    document.title = data.meta.title;
    $('meta[name="description"]').setAttribute('content', data.meta.description);
    const ogTitle = $('meta[property="og:title"]');
    const ogDesc = $('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', data.meta.title);
    if (ogDesc) ogDesc.setAttribute('content', data.meta.description);

    // print button label
    const printLabel = $('[data-slot="print-label"]');
    if (printLabel) printLabel.textContent = data.sections.print;

    // year
    const yearSlot = $('[data-slot="year"]');
    if (yearSlot) yearSlot.textContent = new Date().getFullYear();

    // render cv body
    const root = $('#cv-root');
    root.innerHTML =
      renderHero(data) +
      renderAbout(data) +
      renderPosition(data) +
      renderExperience(data) +
      renderOwnProducts(data) +
      renderTeaching(data) +
      renderAchievements(data) +
      renderSkills(data) +
      renderEducation(data) +
      renderLanguages(data);

    // lang buttons
    $$('.lang-btn').forEach((btn) => {
      const isActive = btn.dataset.lang === state.lang;
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // spoiler handlers — reveal on click or Enter/Space
    $$('.spoiler', root).forEach((s) => {
      const reveal = () => s.classList.add('revealed');
      s.addEventListener('click', reveal);
      s.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          reveal();
        }
      });
    });

    // collapsible sections (achievements starts collapsed)
    setupCollapsible(root, '#section-achievements');

    // scroll-reveal
    const skipVisible = !firstRender;
    firstRender = false;
    initAnimations(root, skipVisible);
  }

  // ---------- COLLAPSIBLE SECTIONS ----------
  function setupCollapsible(root, selector) {
    const section = $(selector, root);
    if (!section) return;
    const head = $('.section-head', section);
    if (!head) return;

    head.classList.add('collapsible-head');
    section.classList.add('collapsed');
    head.setAttribute('role', 'button');
    head.setAttribute('tabindex', '0');
    head.setAttribute('aria-expanded', 'false');

    const toggle = () => {
      section.classList.toggle('collapsed');
      head.setAttribute('aria-expanded', section.classList.contains('collapsed') ? 'false' : 'true');
    };

    head.addEventListener('click', toggle);
    head.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  }

  // ---------- SCROLL-REVEAL ----------
  function initAnimations(root, skipVisible) {
    if (animObs) { animObs.disconnect(); animObs = null; }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
    animObs = obs;

    function add(el, delay) {
      if (!el) return;
      el.dataset.anim = '1';
      if (delay) el.style.setProperty('--anim-delay', delay + 'ms');
      if (skipVisible) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) { el.classList.add('in-view'); return; }
      }
      obs.observe(el);
    }

    add($('.hero', root));
    $$('.section-head', root).forEach((h) => add(h));
    $$('.about > p', root).forEach((el, i) => add(el, i * 80));
    $$('.position-card > .position-item', root).forEach((el, i) => add(el, i * 70));
    $$('.projects', root).forEach((container) => {
      Array.from(container.children).forEach((el, i) => add(el, i * 70));
    });
    $$('.skills-grid > .skill-group', root).forEach((el, i) => add(el, i * 35));
    $$('.ach-group', root).forEach((el, i) => add(el, i * 60));
    $$('.edu-list > .edu-item', root).forEach((el, i) => add(el, i * 70));
    $$('.course-list > li', root).forEach((el, i) => add(el, i * 50));
    $$('.lang-list > li', root).forEach((el, i) => add(el, i * 60));
  }

  // ---------- LANG HANDLING ----------
  function setLang(lang, { updateUrl = true } = {}) {
    if (!['ru', 'en'].includes(lang)) lang = 'ru';
    state.lang = lang;
    try { localStorage.setItem('cv-lang', lang); } catch (_) {}
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    }
    render();
  }

  function getInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang && ['ru', 'en'].includes(urlLang)) return urlLang;
    try {
      const stored = localStorage.getItem('cv-lang');
      if (stored && ['ru', 'en'].includes(stored)) return stored;
    } catch (_) {}
    const browser = (navigator.language || 'ru').toLowerCase();
    return browser.startsWith('ru') ? 'ru' : 'en';
  }

  // ---------- THEME ----------
  function setTheme(theme) {
    if (!['light', 'dark'].includes(theme)) theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('cv-theme', theme); } catch (_) {}
  }

  function getInitialTheme() {
    try {
      const stored = localStorage.getItem('cv-theme');
      if (stored) return stored;
    } catch (_) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // ---------- INIT ----------
  function init() {
    setTheme(getInitialTheme());
    setLang(getInitialLang(), { updateUrl: false });

    // lang toggle listeners
    $$('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLang(btn.dataset.lang);
        updateDownloadBtn(btn.dataset.lang);
      });
    });

    // theme toggle
    const themeBtn = $('.theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // download PDF — links to pre-generated static file
    function updateDownloadBtn(lang) {
      const btn = $('#download-btn');
      if (!btn) return;
      btn.href = `assets/cv-${lang}.pdf`;
      btn.download = lang === 'ru' ? 'Movchan_CV_RU.pdf' : 'Movchan_CV_EN.pdf';
    }
    updateDownloadBtn(state.lang);

    // keyboard shortcut: Cmd/Ctrl + P handled natively
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
