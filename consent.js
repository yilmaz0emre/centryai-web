/* CentryAI — Cookie consent banner + Google Consent Mode v2.
 * gtag starts with analytics_storage:'denied' (set inline in <head> before config).
 * This script shows a banner on first visit; the choice is stored in localStorage
 * and replayed on every page load. Ad storage stays denied permanently (no ads). */
(function () {
  'use strict';

  var KEY = 'sr_consent'; // 'granted' | 'denied'

  var I18N = {
    en: { msg: 'We use cookies for anonymous analytics to improve CentryAI.', accept: 'Accept', decline: 'Decline', privacy: 'Privacy Policy' },
    tr: { msg: "CentryAI'ı geliştirmek için anonim analitik çerezleri kullanıyoruz.", accept: 'Kabul Et', decline: 'Reddet', privacy: 'Gizlilik Politikası' },
    es: { msg: 'Usamos cookies de análisis anónimas para mejorar CentryAI.', accept: 'Aceptar', decline: 'Rechazar', privacy: 'Política de privacidad' },
    fr: { msg: "Nous utilisons des cookies d'analyse anonymes pour améliorer CentryAI.", accept: 'Accepter', decline: 'Refuser', privacy: 'Politique de confidentialité' },
    de: { msg: 'Wir verwenden Cookies für anonyme Analysen, um CentryAI zu verbessern.', accept: 'Akzeptieren', decline: 'Ablehnen', privacy: 'Datenschutzerklärung' },
    pt: { msg: 'Usamos cookies de análise anônimos para melhorar o CentryAI.', accept: 'Aceitar', decline: 'Recusar', privacy: 'Política de privacidade' },
    it: { msg: 'Utilizziamo cookie di analisi anonimi per migliorare CentryAI.', accept: 'Accetta', decline: 'Rifiuta', privacy: 'Informativa sulla privacy' },
    nl: { msg: 'We gebruiken cookies voor anonieme analyses om CentryAI te verbeteren.', accept: 'Accepteren', decline: 'Weigeren', privacy: 'Privacybeleid' },
    pl: { msg: 'Używamy plików cookie do anonimowej analityki, aby ulepszać CentryAI.', accept: 'Akceptuję', decline: 'Odrzuć', privacy: 'Polityka prywatności' },
    ru: { msg: 'Мы используем cookie для анонимной аналитики, чтобы улучшать CentryAI.', accept: 'Принять', decline: 'Отклонить', privacy: 'Политика конфиденциальности' },
    ja: { msg: 'CentryAIの改善のため、匿名の分析Cookieを使用しています。', accept: '同意する', decline: '拒否する', privacy: 'プライバシーポリシー' },
    ko: { msg: 'CentryAI 개선을 위해 익명 분석 쿠키를 사용합니다.', accept: '동의', decline: '거부', privacy: '개인정보 처리방침' },
    zh: { msg: '我们使用匿名分析Cookie来改进CentryAI。', accept: '接受', decline: '拒绝', privacy: '隐私政策' },
    ar: { msg: 'نستخدم ملفات تعريف الارتباط للتحليلات المجهولة لتحسين CentryAI.', accept: 'قبول', decline: 'رفض', privacy: 'سياسة الخصوصية' },
    hi: { msg: 'CentryAI को बेहतर बनाने के लिए हम गुमनाम एनालिटिक्स कुकीज़ का उपयोग करते हैं।', accept: 'स्वीकार करें', decline: 'अस्वीकार करें', privacy: 'गोपनीयता नीति' },
    id: { msg: 'Kami menggunakan cookie analitik anonim untuk meningkatkan CentryAI.', accept: 'Terima', decline: 'Tolak', privacy: 'Kebijakan Privasi' },
    sv: { msg: 'Vi använder cookies för anonym analys för att förbättra CentryAI.', accept: 'Acceptera', decline: 'Avvisa', privacy: 'Integritetspolicy' },
    vi: { msg: 'Chúng tôi dùng cookie phân tích ẩn danh để cải thiện CentryAI.', accept: 'Chấp nhận', decline: 'Từ chối', privacy: 'Chính sách quyền riêng tư' },
  };

  function lang() {
    var url = new URLSearchParams(location.search).get('lang');
    var saved = null;
    try { saved = localStorage.getItem('sr_lang'); } catch (e) { /* private mode */ }
    var doc = (document.documentElement.lang || '').slice(0, 2);
    var nav = (navigator.language || '').slice(0, 2);
    var code = url || saved || doc || nav || 'en';
    return I18N[code] ? code : 'en';
  }

  function updateConsent(granted) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    }
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* private mode */ }

  if (stored === 'granted') { updateConsent(true); return; }
  if (stored === 'denied') { return; } // default is already denied

  // First visit → banner
  function choose(granted) {
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied'); } catch (e) { /* ignore */ }
    updateConsent(granted);
    var el = document.getElementById('sr-consent');
    if (el) el.remove();
  }

  function mount() {
    var code = lang();
    var s = I18N[code];
    var rtl = code === 'ar';

    var style = document.createElement('style');
    style.textContent =
      '#sr-consent{position:fixed;bottom:16px;left:16px;right:16px;z-index:9999;max-width:420px;margin:0 auto;' +
      'background:#12141d;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:16px 18px;' +
      "box-shadow:0 8px 32px rgba(0,0,0,.5);font-family:'Inter',system-ui,sans-serif;color:#eceef4;font-size:14px;line-height:1.5}" +
      '@media(min-width:640px){#sr-consent{left:24px;right:auto;margin:0}}' +
      '#sr-consent p{margin:0 0 12px}' +
      '#sr-consent a{color:#8f87ff;text-decoration:none}' +
      '#sr-consent .sr-c-row{display:flex;gap:8px}' +
      '#sr-consent button{flex:1;padding:9px 14px;border-radius:9px;border:none;font-size:14px;font-weight:600;cursor:pointer}' +
      '#sr-consent .sr-c-accept{background:#675DF9;color:#fff}' +
      '#sr-consent .sr-c-decline{background:rgba(255,255,255,.08);color:#eceef4}';
    document.head.appendChild(style);

    var box = document.createElement('div');
    box.id = 'sr-consent';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    if (rtl) box.dir = 'rtl';
    box.innerHTML =
      '<p>' + s.msg + ' <a href="/privacy">' + s.privacy + '</a></p>' +
      '<div class="sr-c-row">' +
      '<button type="button" class="sr-c-decline">' + s.decline + '</button>' +
      '<button type="button" class="sr-c-accept">' + s.accept + '</button>' +
      '</div>';
    box.querySelector('.sr-c-accept').addEventListener('click', function () { choose(true); });
    box.querySelector('.sr-c-decline').addEventListener('click', function () { choose(false); });
    document.body.appendChild(box);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
