/* CentryAI — Shared language switcher
 * Used by all pages. Translations will be wired later. */
window.SR_LANGS = [
  { code: 'en', label: 'English',    native: 'English' },
  { code: 'tr', label: 'Turkish',    native: 'Türkçe' },
  { code: 'es', label: 'Spanish',    native: 'Español' },
  { code: 'fr', label: 'French',     native: 'Français' },
  { code: 'de', label: 'German',     native: 'Deutsch' },
  { code: 'pt', label: 'Portuguese', native: 'Português' },
  { code: 'it', label: 'Italian',    native: 'Italiano' },
  { code: 'nl', label: 'Dutch',      native: 'Nederlands' },
  { code: 'pl', label: 'Polish',     native: 'Polski' },
  { code: 'ru', label: 'Russian',    native: 'Русский' },
  { code: 'ja', label: 'Japanese',   native: '日本語' },
  { code: 'ko', label: 'Korean',     native: '한국어' },
  { code: 'zh', label: 'Chinese',    native: '中文' },
  { code: 'ar', label: 'Arabic',     native: 'العربية', rtl: true },
  { code: 'hi', label: 'Hindi',      native: 'हिन्दी' },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'sv', label: 'Swedish',    native: 'Svenska' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt' },
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
        <span class="globe">🌐</span>
        <span>${cur.code.toUpperCase()}</span>
        <span class="chev">▾</span>
      </button>
      <div class="lang-menu" id="sr-lang-menu" role="menu">
        ${window.SR_LANGS.map(l => `
          <button class="lang-opt ${l.code === current ? 'active' : ''}" data-lang="${l.code}" role="menuitem">
            <span>${l.label}</span>
            <span class="native">${l.native}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
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
