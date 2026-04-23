/* CentryAI — Shared language switcher */
window.SR_LANGS = [
  { code: 'en', label: 'English',    native: 'English',          flag: '🇺🇸' },
  { code: 'tr', label: 'Turkish',    native: 'Türkçe',           flag: '🇹🇷' },
  { code: 'es', label: 'Spanish',    native: 'Español',          flag: '🇪🇸' },
  { code: 'fr', label: 'French',     native: 'Français',         flag: '🇫🇷' },
  { code: 'de', label: 'German',     native: 'Deutsch',          flag: '🇩🇪' },
  { code: 'pt', label: 'Portuguese', native: 'Português',        flag: '🇧🇷' },
  { code: 'it', label: 'Italian',    native: 'Italiano',         flag: '🇮🇹' },
  { code: 'nl', label: 'Dutch',      native: 'Nederlands',       flag: '🇳🇱' },
  { code: 'pl', label: 'Polish',     native: 'Polski',           flag: '🇵🇱' },
  { code: 'ru', label: 'Russian',    native: 'Русский',          flag: '🇷🇺' },
  { code: 'ja', label: 'Japanese',   native: '日本語',            flag: '🇯🇵' },
  { code: 'ko', label: 'Korean',     native: '한국어',             flag: '🇰🇷' },
  { code: 'zh', label: 'Chinese',    native: '中文',              flag: '🇨🇳' },
  { code: 'ar', label: 'Arabic',     native: 'العربية', rtl: true, flag: '🇸🇦' },
  { code: 'hi', label: 'Hindi',      native: 'हिन्दी',            flag: '🇮🇳' },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'sv', label: 'Swedish',    native: 'Svenska',          flag: '🇸🇪' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt',       flag: '🇻🇳' },
];

window.SR_getLang = function () {
  const url = new URLSearchParams(location.search).get('lang');
  const saved = localStorage.getItem('sr_lang');
  return url || saved || 'en';
};

window.SR_setLang = function (code) {
  localStorage.setItem('sr_lang', code);
  const u = new URL(location.href);
  u.searchParams.set('lang', code);
  location.href = u.toString();
};

window.SR_mountLangSwitcher = function (container) {
  const current = window.SR_getLang();
  const cur = window.SR_LANGS.find(l => l.code === current) || window.SR_LANGS[0];
  container.innerHTML = `
    <div class="lang-switcher">
      <button class="lang-btn" id="sr-lang-toggle" aria-haspopup="true" aria-expanded="false">
        <span class="lang-flag">${cur.flag}</span>
        <span class="lang-code">${cur.code.toUpperCase()}</span>
        <span class="chev">▾</span>
      </button>
      <div class="lang-menu" id="sr-lang-menu" role="menu">
        ${window.SR_LANGS.map(l => `
          <button class="lang-opt ${l.code === current ? 'active' : ''}" data-lang="${l.code}" role="menuitem">
            <span class="lang-opt-left">
              <span class="lang-opt-flag">${l.flag}</span>
              <span class="lang-opt-label">${l.label}</span>
            </span>
            <span class="native">${l.native}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  // Extra styles for flag layout
  if (!document.getElementById('sr-lang-style')) {
    const s = document.createElement('style');
    s.id = 'sr-lang-style';
    s.textContent = `
      .lang-flag { font-size: 1.1rem; line-height: 1; }
      .lang-code { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.03em; }
      .lang-opt-left { display: flex; align-items: center; gap: 8px; }
      .lang-opt-flag { font-size: 1.1rem; line-height: 1; flex-shrink: 0; }
      .lang-opt-label { font-weight: 600; }
    `;
    document.head.appendChild(s);
  }

  const btn = container.querySelector('#sr-lang-toggle');
  const menu = container.querySelector('#sr-lang-menu');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', menu.classList.contains('open'));
  });
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) menu.classList.remove('open');
  });
  menu.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => window.SR_setLang(opt.dataset.lang));
  });
};

// Apply RTL when Arabic is active
(function applyDir() {
  const cur = window.SR_getLang();
  const entry = window.SR_LANGS.find(l => l.code === cur);
  if (entry && entry.rtl) {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', cur);
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', cur || 'en');
  }
})();
