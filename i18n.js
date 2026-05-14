(function () {
  // 1. Get active language using the already-defined SR_getLang()
  const lang = (window.SR_getLang ? window.SR_getLang() : null) || 'en';

  // 2. Load the locale JSON synchronously using XMLHttpRequest
  //    (must be synchronous so it's ready before React/DOM renders)
  function loadJSON(url) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, false); // false = synchronous
      xhr.send(null);
      if (xhr.status === 200) return JSON.parse(xhr.responseText);
    } catch (e) {}
    return null;
  }

  // 3. Try to load the selected language, fall back to English
  let locale = loadJSON('locales/' + lang + '.json');
  if (!locale && lang !== 'en') locale = loadJSON('locales/en.json');
  if (!locale) locale = {};

  window._locale = locale;

  // 4. window.t(key, vars) — resolves dot-notation keys
  //    Example: t("nav.features") → "Özellikler"
  //    Example: t("support.results", {count: 3, query: "gmail"})
  //             → "3 results for \"gmail\""
  window.t = function(key, vars) {
    const parts = key.split('.');
    let val = locale;
    for (const p of parts) {
      if (val == null || typeof val !== 'object') { val = undefined; break; }
      val = val[p];
    }
    if (typeof val !== 'string') return key; // fallback: show the key itself
    if (vars) {
      Object.entries(vars).forEach(function(entry) {
        val = val.split('{' + entry[0] + '}').join(entry[1]);
      });
    }
    return val;
  };

  // 5. window.tArr(key) — returns an array value from the locale JSON
  //    Example: tArr("faq.items") → [{q:"...", a:"..."}, ...]
  window.tArr = function(key) {
    const parts = key.split('.');
    let val = locale;
    for (const p of parts) {
      if (val == null || typeof val !== 'object') { val = undefined; break; }
      val = val[p];
    }
    return Array.isArray(val) ? val : [];
  };

  // 6. window.tObj(key) — returns an object value from the locale JSON
  window.tObj = function(key) {
    const parts = key.split('.');
    let val = locale;
    for (const p of parts) {
      if (val == null || typeof val !== 'object') { val = undefined; break; }
      val = val[p];
    }
    return (val && typeof val === 'object' && !Array.isArray(val)) ? val : {};
  };

})();
