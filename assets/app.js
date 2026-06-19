const {
  useState,
  useEffect,
  useRef
} = React;

/* ── Screenshots data ── */
const SCREENSHOTS = [{
  src: 'uploads/phone-dark-dashboard@sm.webp',
  srcSet: 'uploads/phone-dark-dashboard@xs.webp 325w, uploads/phone-dark-dashboard@sm.webp 650w, uploads/phone-dark-dashboard.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.dashboard')
}, {
  src: 'uploads/phone-dark-list@sm.webp',
  srcSet: 'uploads/phone-dark-list@xs.webp 325w, uploads/phone-dark-list@sm.webp 650w, uploads/phone-dark-list.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.subscriptions')
}, {
  src: 'uploads/phone-dark-calendar@sm.webp',
  srcSet: 'uploads/phone-dark-calendar@xs.webp 325w, uploads/phone-dark-calendar@sm.webp 650w, uploads/phone-dark-calendar.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.calendar')
}, {
  src: 'uploads/phone-dark-netflix@sm.webp',
  srcSet: 'uploads/phone-dark-netflix@xs.webp 325w, uploads/phone-dark-netflix@sm.webp 650w, uploads/phone-dark-netflix.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.detailView')
}, {
  src: 'uploads/phone-dark-aicancelfinder@sm.webp',
  srcSet: 'uploads/phone-dark-aicancelfinder@xs.webp 325w, uploads/phone-dark-aicancelfinder@sm.webp 650w, uploads/phone-dark-aicancelfinder.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.aiCancelFinder')
}, {
  src: 'uploads/phone-dark-aiscanner@sm.webp',
  srcSet: 'uploads/phone-dark-aiscanner@xs.webp 325w, uploads/phone-dark-aiscanner@sm.webp 650w, uploads/phone-dark-aiscanner.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.aiScanner')
}, {
  src: 'uploads/phone-dark-emailscanner@sm.webp',
  srcSet: 'uploads/phone-dark-emailscanner@xs.webp 325w, uploads/phone-dark-emailscanner@sm.webp 650w, uploads/phone-dark-emailscanner.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.emailScanner')
}, {
  src: 'uploads/phone-dark-googlesearch@sm.webp',
  srcSet: 'uploads/phone-dark-googlesearch@xs.webp 325w, uploads/phone-dark-googlesearch@sm.webp 650w, uploads/phone-dark-googlesearch.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.googleSearch')
}, {
  src: 'uploads/phone-dark-language@sm.webp',
  srcSet: 'uploads/phone-dark-language@xs.webp 325w, uploads/phone-dark-language@sm.webp 650w, uploads/phone-dark-language.webp 1300w',sizes:"(max-width:480px) 220px, 260px",
  caption: t('screenshots.captions.languageSupport')
}];

/* ── Pricing data ── */
const PLAN_KEYS = ['free', 'pro'];
const PLAN_MONTHLY = ['0', '7.99'];
const PLAN_ANNUAL = [null, '59.99'];
const PLAN_ANNUAL_MONTHLY = [null, '4.99'];
const PLAN_CLASSES = ['pricing-cta-free', 'pricing-cta-paid'];
const PLAN_FEATURED = [false, true];
const PLAN_FEATURE_KEYS = [['upTo3Subs', 'manualEntry', 'renewalCalendar', 'darkLight', 'aiEmailScanner', 'spendingAnalytics', 'aiCancelFinder', 'emailReminders', 'prioritySupport'], ['unlimitedSubs', 'manualEntry', 'renewalCalendar', 'darkLight', 'aiEmailScanner', 'spendingAnalytics', 'aiCancelFinder', 'emailReminders', 'prioritySupport']];
const PLAN_FEATURES_YES = [[true, true, true, true, false, false, false, false, false], [true, true, true, true, true, true, true, true, true]];
function getPlans() {
  return PLAN_KEYS.map((key, i) => ({
    key,
    name: t('pricing.plans.' + key + '.name'),
    desc: t('pricing.plans.' + key + '.desc'),
    cta: t('pricing.plans.' + key + '.cta'),
    ctaClass: PLAN_CLASSES[i],
    href: '#download',
    featured: PLAN_FEATURED[i],
    badge: i === 1 ? t('pricing.mostPopular') : null,
    features: PLAN_FEATURE_KEYS[i].map((fk, j) => ({
      label: t('pricing.features.' + fk),
      yes: PLAN_FEATURES_YES[i][j]
    }))
  }));
}

/* ── FAQ data ── */
const FAQ_ITEMS = [{
  q: 'How does CentryAI detect my subscriptions?',
  a: 'CentryAI lets you manually add subscriptions or import them. It uses pattern recognition to identify recurring charges without ever storing sensitive data.'
}, {
  q: 'What are "zombie" subscriptions?',
  a: 'Zombie subscriptions are services you\'re actively paying for but haven\'t marked as used in over 30 days. CentryAI tracks usage (with your permission) to flag these automatically.'
}, {
  q: 'Is my data safe?',
  a: 'Absolutely. CentryAI never connects to your bank account. All data is encrypted and stored locally on your device by default.'
}, {
  q: 'Can CentryAI actually cancel subscriptions for me?',
  a: 'CentryAI finds the fastest cancellation path for each service — direct cancel link, phone number, or step-by-step instructions. One-tap cancellation is coming in v2.'
}, {
  q: 'Does it work with family sharing plans?',
  a: 'Yes. CentryAI can detect shared subscriptions and split-cost services, showing you the per-person cost for family plans.'
}, {
  q: 'Is CentryAI free?',
  a: 'The core tracking features are free. CentryAI Premium unlocks zombie detection, advanced analytics, and renewal alerts.'
}];

/* ── Apple App Store SVG logo ── */
const AppleLogo = () => /*#__PURE__*/React.createElement("svg", {
  className: "btn-store-logo",
  viewBox: "0 0 22 22",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18.07 16.93c-.42.96-.62 1.39-1.16 2.24-.75 1.15-1.8 2.58-3.1 2.59-1.16.01-1.46-.75-3.04-.74-1.58.01-1.91.76-3.08.75-1.3-.01-2.28-1.3-3.04-2.44C2.1 16.29 1.5 12.7 2.79 10.8c.89-1.33 2.3-2.11 3.62-2.11 1.35 0 2.2.74 3.32.74 1.08 0 1.74-.74 3.3-.74 1.16 0 2.42.63 3.31 1.73-.29.18-2.93 1.71-2.9 5.1.04 4.05 3.55 5.39 3.63 5.41zM13.5 5.64c.62-.79 1.09-1.9 .92-3.04-1 .07-2.17.71-2.85 1.54-.62.76-1.14 1.88-.94 2.97 1.09.04 2.22-.61 2.87-1.47z",
  fill: "currentColor"
}));

/* ── Google Play SVG logo ── */
const PlayLogo = () => /*#__PURE__*/React.createElement("svg", {
  className: "btn-store-logo",
  viewBox: "0 0 22 22",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3.18 1.55a1.16 1.16 0 0 0-.59 1.02v16.86c0 .43.23.82.59 1.02l.08.05 9.44-9.44v-.22L3.26 1.5l-.08.05z",
  fill: "#4285F4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.85 14.27l-3.14-3.14v-.22l3.14-3.14.07.04 3.72 2.12c1.06.6 1.06 1.59 0 2.19l-3.72 2.12-.07.03z",
  fill: "#FBBC04"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.93 14.23L12.7 11 3.18 20.45c.35.37.92.42 1.55.05l11.2-6.27",
  fill: "#34A853"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.93 7.77L4.73 1.5C4.1 1.13 3.53 1.18 3.18 1.55L12.7 11l3.23-3.23z",
  fill: "#EA4335"
}));

/* ── Feature section icons ── */
const SparklesIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75L19 3z"
}));
const GhostIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 10h.01M15 10h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
}));
const ChartIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "20",
  x2: "18",
  y2: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "20",
  x2: "6",
  y2: "14"
}), /*#__PURE__*/React.createElement("line", {
  x1: "2",
  y1: "20",
  x2: "22",
  y2: "20"
}));
const LinkIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
}));

/* ── Theme icons ── */
const SunIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
}));
const MoonIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
}));

/* ── iPhone 17 Pro Max SVG frame component ── */
function IPhone17({
  src,
  alt = '',
  className = '',
  style = {}
}) {
  // Unique ID for each instance (needed for SVG defs)
  const uid = React.useId ? React.useId().replace(/:/g, '') : Math.random().toString(36).slice(2);
  const W = 260,
    H = 547;
  const R = 52; // outer corner radius
  const BW = 9; // bezel width (titanium frame)
  const IBW = 3; // inner black border
  // Screen clip area
  const sx = BW + IBW,
    sy = BW + IBW;
  const sw = W - (BW + IBW) * 2;
  const sh = H - (BW + IBW) * 2;
  const sr = R - BW - IBW; // screen corner radius

  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    style: style,
    role: "img",
    "aria-label": alt,
    overflow: "visible"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: `sc-${uid}`
  }, /*#__PURE__*/React.createElement("rect", {
    x: sx,
    y: sy,
    width: sw,
    height: sh,
    rx: sr,
    ry: sr
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `ti-${uid}`,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#3A3A3C"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "12%",
    stopColor: "#545456"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "28%",
    stopColor: "#6E6E73"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "42%",
    stopColor: "#8E8E93"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "58%",
    stopColor: "#8E8E93"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "72%",
    stopColor: "#6E6E73"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "88%",
    stopColor: "#545456"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3A3A3C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `eh-${uid}`,
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(255,255,255,0.18)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "rgba(255,255,255,0.04)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(255,255,255,0.1)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `bn-${uid}`,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#3A3A3C"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#6E6E73"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3A3A3C"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: W,
    height: H,
    rx: R,
    ry: R,
    fill: `url(#ti-${uid})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: W,
    height: H,
    rx: R,
    ry: R,
    fill: "none",
    stroke: `url(#eh-${uid})`,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: BW,
    y: BW,
    width: W - BW * 2,
    height: H - BW * 2,
    rx: R - BW,
    ry: R - BW,
    fill: "#000"
  }), /*#__PURE__*/React.createElement("rect", {
    x: sx,
    y: sy,
    width: sw,
    height: sh,
    rx: sr,
    ry: sr,
    fill: "#000"
  }), src && /*#__PURE__*/React.createElement("image", {
    href: src,
    x: sx,
    y: sy,
    width: sw,
    height: sh,
    clipPath: `url(#sc-${uid})`,
    preserveAspectRatio: "xMidYMin slice"
  }), /*#__PURE__*/React.createElement("rect", {
    x: sx,
    y: sy,
    width: sw,
    height: sh,
    rx: sr,
    ry: sr,
    fill: "none",
    stroke: "rgba(255,255,255,0.07)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: W / 2 - 46,
    y: sy + 10,
    width: 92,
    height: 28,
    rx: 14,
    ry: 14,
    fill: "#000"
  }), /*#__PURE__*/React.createElement("rect", {
    x: W / 2 - 44,
    y: sy + 12,
    width: 88,
    height: 24,
    rx: 12,
    ry: 12,
    fill: "none",
    stroke: "rgba(255,255,255,0.04)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W / 2 + 28,
    cy: sy + 24,
    r: 4,
    fill: "#1a1a1a"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W / 2 + 28,
    cy: sy + 24,
    r: 2.5,
    fill: "#0D0D0F"
  }), /*#__PURE__*/React.createElement("text", {
    x: sx + 14,
    y: sy + 30,
    fontSize: "11",
    fontWeight: "700",
    fill: "rgba(255,255,255,0.85)",
    fontFamily: "-apple-system, sans-serif"
  }, "9:41"), /*#__PURE__*/React.createElement("text", {
    x: W - sx - 14,
    y: sy + 30,
    fontSize: "9",
    fontWeight: "600",
    fill: "rgba(255,255,255,0.6)",
    fontFamily: "-apple-system, sans-serif",
    textAnchor: "end"
  }, "\u25CF\u25CF\u25CF \u3012 \u2588\u258B"), /*#__PURE__*/React.createElement("rect", {
    x: W / 2 - 38,
    y: H - BW - IBW - 10,
    width: 76,
    height: 5,
    rx: 2.5,
    ry: 2.5,
    fill: "rgba(255,255,255,0.35)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: W / 2 - 22,
    y: H - 7,
    width: 44,
    height: 6,
    rx: 3,
    ry: 3,
    fill: "#2C2C2E"
  }), /*#__PURE__*/React.createElement("rect", {
    x: W / 2 - 20,
    y: H - 6,
    width: 40,
    height: 4,
    rx: 2,
    ry: 2,
    fill: "none",
    stroke: "rgba(255,255,255,0.08)",
    strokeWidth: "0.5"
  }), [-32, -24, -16, 16, 24, 32].map((ox, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: W / 2 + ox,
    cy: H - 5,
    r: 1.8,
    fill: "#2C2C2E"
  })), /*#__PURE__*/React.createElement("rect", {
    x: -5,
    y: 104,
    width: 8,
    height: 30,
    rx: 4,
    ry: 4,
    fill: `url(#bn-${uid})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: -4,
    y: 105,
    width: 6,
    height: 28,
    rx: 3,
    ry: 3,
    fill: "none",
    stroke: "rgba(255,255,255,0.1)",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: -5,
    y: 150,
    width: 8,
    height: 50,
    rx: 4,
    ry: 4,
    fill: `url(#bn-${uid})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: -4,
    y: 151,
    width: 6,
    height: 48,
    rx: 3,
    ry: 3,
    fill: "none",
    stroke: "rgba(255,255,255,0.1)",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: -5,
    y: 212,
    width: 8,
    height: 50,
    rx: 4,
    ry: 4,
    fill: `url(#bn-${uid})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: -4,
    y: 213,
    width: 6,
    height: 48,
    rx: 3,
    ry: 3,
    fill: "none",
    stroke: "rgba(255,255,255,0.1)",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: W - 3,
    y: 168,
    width: 8,
    height: 80,
    rx: 4,
    ry: 4,
    fill: `url(#bn-${uid})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: W - 2,
    y: 169,
    width: 6,
    height: 78,
    rx: 3,
    ry: 3,
    fill: "none",
    stroke: "rgba(255,255,255,0.1)",
    strokeWidth: "0.5"
  }));
}

/* ── Phone Gallery — real iPhone 17 Pro Max mockup PNGs ── */
function PhoneGallery() {
  return /*#__PURE__*/React.createElement("div", {
    className: "phone-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "iphone17-side",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "uploads/phone-light-netflix@sm.webp",
    srcSet: "uploads/phone-light-netflix@xs.webp 325w, uploads/phone-light-netflix@sm.webp 650w, uploads/phone-light-netflix.webp 1300w",sizes:"(max-width:480px) 220px, 260px",
    sizes: "(max-width: 768px) 300px, 360px",
    alt: "CentryAI app \u2014 Netflix subscription light mode",
    loading: "lazy",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "iphone17-main"
  }, /*#__PURE__*/React.createElement("img", {
    src: "uploads/phone-dark-netflix.webp",
    srcSet: "uploads/phone-dark-netflix@xs.webp 325w, uploads/phone-dark-netflix@sm.webp 650w, uploads/phone-dark-netflix.webp 1300w",sizes:"(max-width:480px) 220px, 260px",
    sizes: "(max-width: 768px) 320px, 400px",
    alt: "CentryAI app \u2014 Netflix subscription detail with zombie risk score",
    fetchPriority: "high",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })));
}

/* ── StatBar ── */
function StatBar() {
  const [counted, setCounted] = useState(false);
  const ref = useRef(null);
  const [vals, setVals] = useState([0, 0, 0, 0]);
  const targets = [90, 47, 18, 0];
  const formats = [v => v + '+', v => '$' + v, v => v + '', v => v + ''];
  const labels = [t('stats.downloads'), t('stats.monthlyWaste'), t('stats.appRating'), t('stats.userSavings')];
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted) {
        setCounted(true);
        const dur = 1400,
          steps = 50,
          interval = dur / steps;
        let step = 0;
        const t = setInterval(() => {
          step++;
          const ease = 1 - Math.pow(1 - step / steps, 3);
          setVals(targets.map(t => Math.round(t * ease)));
          if (step >= steps) clearInterval(t);
        }, interval);
      }
    }, {
      threshold: 0.4
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [counted]);
  return /*#__PURE__*/React.createElement("div", {
    className: "stats-bar",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-bar-inner"
  }, labels.map((label, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, formats[i](vals[i])), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, label)))));
}

/* ── Screenshots section: infinite loop carousel ── */
function ScreenshotsSection() {
  const n = SCREENSHOTS.length;
  // klonlanmış liste: son 2 öğe başa, ilk 2 öğe sona — infinite illusion
  const slides = [...SCREENSHOTS.slice(-2), ...SCREENSHOTS, ...SCREENSHOTS.slice(0, 2)];
  const SLIDE_W = 240 + 24; // width + gap
  const OFFSET = 2; // clone count at start

  const [active, setActive] = useState(0); // 0-indexed into SCREENSHOTS
  const trackRef = useRef(null);
  const isJumping = useRef(false);

  // Position track at real slide i (without animation)
  const jumpTo = realIdx => {
    if (!trackRef.current) return;
    trackRef.current.scrollLeft = (realIdx + OFFSET) * SLIDE_W;
  };
  const scrollToReal = realIdx => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({
      left: (realIdx + OFFSET) * SLIDE_W,
      behavior: 'smooth'
    });
    setActive(realIdx);
  };

  // Jump’less wrap-around after transition ends
  const handleScroll = () => {
    if (isJumping.current || !trackRef.current) return;
    const rawIdx = Math.round(trackRef.current.scrollLeft / SLIDE_W);
    const realIdx = rawIdx - OFFSET;
    if (realIdx < 0) {
      isJumping.current = true;
      const wrapped = n + realIdx;
      jumpTo(wrapped);
      setActive((wrapped % n + n) % n);
      setTimeout(() => {
        isJumping.current = false;
      }, 50);
    } else if (realIdx >= n) {
      isJumping.current = true;
      const wrapped = realIdx - n;
      jumpTo(wrapped);
      setActive(wrapped % n);
      setTimeout(() => {
        isJumping.current = false;
      }, 50);
    } else {
      setActive(realIdx % n);
    }
  };

  // Start at position 0 (after clones)
  useEffect(() => {
    jumpTo(0);
  }, []);
  const prev = () => scrollToReal((active - 1 + n) % n);
  const next = () => scrollToReal((active + 1) % n);
  return /*#__PURE__*/React.createElement("section", {
    className: "screenshots-section",
    id: "screenshots"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t("screenshots.eyebrow")), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t("screenshots.title")), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, t("screenshots.sub"))), /*#__PURE__*/React.createElement("div", {
    className: "screenshots-scroll-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "screenshots-track",
    ref: trackRef,
    onScroll: handleScroll
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "screenshot-slide",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "screenshot-slide-frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    srcSet: s.srcSet,
    sizes: "(max-width: 768px) 320px, 400px",
    alt: s.caption,
    loading: "lazy",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "screenshot-caption"
  }, s.caption)))), /*#__PURE__*/React.createElement("div", {
    className: "screenshots-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "screenshots-arrow",
    onClick: prev,
    "aria-label": "Previous"
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    className: "screenshots-dots-row"
  }, SCREENSHOTS.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: `screenshots-dot ${active === i ? 'active' : ''}`,
    onClick: () => scrollToReal(i),
    "aria-label": `Slide ${i + 1}`
  }))), /*#__PURE__*/React.createElement("button", {
    className: "screenshots-arrow",
    onClick: next,
    "aria-label": "Next"
  }, "\u2192"))));
}

/* ── Pricing ── */
function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = getPlans();
  return /*#__PURE__*/React.createElement("section", {
    className: "pricing-section",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t("pricing.eyebrow")), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t("pricing.title")), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, t("pricing.sub")), /*#__PURE__*/React.createElement("div", {
    className: "billing-toggle"
  }, /*#__PURE__*/React.createElement("span", {
    className: `billing-label ${!annual ? 'active' : ''}`
  }, t('pricing.billing.monthly')), /*#__PURE__*/React.createElement("button", {
    className: `toggle-switch ${annual ? 'on' : ''}`,
    onClick: () => setAnnual(v => !v),
    "aria-label": "Toggle billing period"
  }, /*#__PURE__*/React.createElement("span", {
    className: "toggle-knob"
  })), /*#__PURE__*/React.createElement("span", {
    className: `billing-label ${annual ? 'active' : ''}`
  }, t('pricing.billing.annual'), /*#__PURE__*/React.createElement("span", {
    className: "billing-save-pill"
  }, t('pricing.billing.savePill')))), /*#__PURE__*/React.createElement("div", {
    className: "pricing-grid pricing-2col"
  }, plans.map((plan, i) => /*#__PURE__*/React.createElement("div", {
    className: `pricing-card reveal ${plan.featured ? 'featured' : ''}`,
    key: i
  }, plan.badge && /*#__PURE__*/React.createElement("span", {
    className: "pricing-badge"
  }, plan.badge), /*#__PURE__*/React.createElement("div", {
    className: "pricing-plan"
  }, plan.name), /*#__PURE__*/React.createElement("div", {
    className: "pricing-price"
  }, PLAN_MONTHLY[i] === '0' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("sup", null), t('pricing.plans.free.name')) : annual ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("sup", null, "$"), PLAN_ANNUAL_MONTHLY[i], /*#__PURE__*/React.createElement("sub", null, "/mo"), /*#__PURE__*/React.createElement("sup", {
    className: "price-ast"
  }, "*")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("sup", null, "$"), PLAN_MONTHLY[i], /*#__PURE__*/React.createElement("sub", null, "/mo"), /*#__PURE__*/React.createElement("sup", {
    className: "price-ast"
  }, "*"))), annual && PLAN_ANNUAL[i] && /*#__PURE__*/React.createElement("div", {
    className: "pricing-annual-note"
  }, "$", PLAN_ANNUAL[i], " ", t('pricing.billing.billedAnnually')), /*#__PURE__*/React.createElement("p", {
    className: "pricing-desc"
  }, plan.desc), /*#__PURE__*/React.createElement("div", {
    className: "pricing-divider"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "pricing-features"
  }, plan.features.map((f, j) => /*#__PURE__*/React.createElement("li", {
    className: `pricing-feature ${!f.yes ? 'dimmed' : ''}`,
    key: j
  }, /*#__PURE__*/React.createElement("span", {
    className: `pricing-feature-icon ${f.yes ? 'yes' : 'no'}`
  }, f.yes ? '✓' : '✕'), f.label))), /*#__PURE__*/React.createElement("a", {
    href: plan.href,
    className: `pricing-cta ${plan.ctaClass}`
  }, plan.cta)))), /*#__PURE__*/React.createElement("p", {
    className: "pricing-note"
  }, t("pricing.note")), /*#__PURE__*/React.createElement("p", {
    className: "pricing-region-note"
  }, t("pricing.regionNote"))));
}

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, tArr("faq.items").map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: "faq-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-question",
    onClick: () => setOpen(open === i ? null : i)
  }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
    className: `faq-chevron ${open === i ? 'open' : ''}`
  }, "\u25BE")), /*#__PURE__*/React.createElement("div", {
    className: `faq-answer ${open === i ? 'open' : ''}`
  }, /*#__PURE__*/React.createElement("p", null, item.a)))));
}

/* ── Store buttons ── */
function StoreBtns({
  id = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    className: "btn-store btn-store-apple",
    id: `${id}appstore-btn`
  }, /*#__PURE__*/React.createElement(AppleLogo, null), /*#__PURE__*/React.createElement("span", {
    className: "btn-store-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-store-small"
  }, t("hero.appStoreSmall")), /*#__PURE__*/React.createElement("span", {
    className: "btn-store-name"
  }, t("hero.appStoreName")))), /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    className: "btn-store btn-store-google",
    id: `${id}googleplay-btn`
  }, /*#__PURE__*/React.createElement(PlayLogo, null), /*#__PURE__*/React.createElement("span", {
    className: "btn-store-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-store-small",
    style: {
      color: '#1f1f1f',
      opacity: 0.65
    }
  }, t("hero.googlePlaySmall")), /*#__PURE__*/React.createElement("span", {
    className: "btn-store-name",
    style: {
      color: '#1f1f1f'
    }
  }, t("hero.googlePlayName")))));
}

/* ── Zombie items with real brand logos ── */
/* ── Real brand icons: local PNG files + CDN fallback ── */
const BrandIcon = ({
  name,
  size = 36
}) => {
  const localPaths = {
    MidJourney: 'assets/icons/midjourney.png',
    Duolingo: 'assets/icons/duolingo.png',
    Headspace: 'assets/icons/headspace.png',
    Spotify: 'assets/icons/spotify.png'
  };
  const cdnFallback = {
    MidJourney: 'https://logo.clearbit.com/midjourney.com',
    Duolingo: 'https://logo.clearbit.com/duolingo.com',
    Headspace: 'https://logo.clearbit.com/headspace.com',
    Spotify: 'https://logo.clearbit.com/spotify.com'
  };
  const [src, setSrc] = React.useState(localPaths[name]);
  const [failed, setFailed] = React.useState(false);
  const handleError = () => {
    if (!failed && src !== cdnFallback[name]) {
      setSrc(cdnFallback[name]);
      setFailed(true);
    }
  };
  if (!localPaths[name]) return null;
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    width: size,
    height: size,
    loading: "lazy",
    onError: handleError,
    style: {
      borderRadius: size * 0.22,
      display: 'block',
      objectFit: 'cover',
      imageRendering: 'crisp-edges'
    }
  });
};
function getZombieSubs() {
  const labels = tArr('zombie.subLabels');
  return [{
    name: 'MidJourney',
    sub: labels[0],
    price: '$10.00/mo',
    zombie: true,
    score: 87
  }, {
    name: 'Duolingo',
    sub: labels[1],
    price: '$6.99/mo',
    zombie: true,
    score: 94
  }, {
    name: 'Headspace',
    sub: labels[2],
    price: '$12.99/mo',
    zombie: true,
    score: 99
  }, {
    name: 'Spotify',
    sub: labels[3],
    price: '$9.99/mo',
    zombie: false,
    score: 8
  }];
}

/* ── Email Scanner Spotlight ── */
function EmailScannerSpotlight() {
  return /*#__PURE__*/React.createElement("section", {
    className: "email-scanner-section",
    id: "email-scanner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "email-scanner-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "email-scanner-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t('emailScanner.eyebrow')), /*#__PURE__*/React.createElement("h2", null, t('emailScanner.heading1'), /*#__PURE__*/React.createElement("br", null), t('emailScanner.heading2')), /*#__PURE__*/React.createElement("p", null, t('emailScanner.p1')), /*#__PURE__*/React.createElement("p", null, t('emailScanner.p2')), /*#__PURE__*/React.createElement("ul", {
    className: "email-scanner-perks"
  }, tArr('emailScanner.perks').map((perk, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, "\u2713"), perk)))), /*#__PURE__*/React.createElement("div", {
    className: "email-scanner-phone-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "email-scanner-phone-glow"
  }), /*#__PURE__*/React.createElement("img", {
    src: "uploads/phone-dark-aiscanner@sm.webp",
    srcSet: "uploads/phone-dark-aiscanner@xs.webp 325w, uploads/phone-dark-aiscanner@sm.webp 650w, uploads/phone-dark-aiscanner.webp 1300w",sizes:"(max-width:480px) 220px, 260px",
    sizes: "(max-width: 768px) 320px, 400px",
    alt: "CentryAI AI inbox scanner",
    className: "email-scanner-phone-img",
    loading: "lazy"
  }))));
}

/* ── Main App ── */
/* ── Waitlist Section ── */
function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'form-name': 'waitlist',
        email
      }).toString()
    }).then(() => setStatus('success')).catch(() => setStatus('error'));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "waitlist-section",
    id: "waitlist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waitlist-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waitlist-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-badge-dot"
  }), t('waitlist.badge')), /*#__PURE__*/React.createElement("h2", null, t('waitlist.title')), /*#__PURE__*/React.createElement("p", null, t('waitlist.desc')), status === 'success' ? /*#__PURE__*/React.createElement("div", {
    className: "waitlist-success"
  }, t('waitlist.success')) : /*#__PURE__*/React.createElement("form", {
    className: "waitlist-form",
    onSubmit: handleSubmit,
    "data-netlify": "true",
    name: "waitlist"
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "waitlist"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: t('waitlist.placeholder'),
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    className: "waitlist-input"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "waitlist-btn",
    disabled: status === 'loading'
  }, status === 'loading' ? t('waitlist.joining') : t('waitlist.cta'))), status === 'error' && /*#__PURE__*/React.createElement("p", {
    className: "waitlist-error"
  }, t('waitlist.error')), /*#__PURE__*/React.createElement("p", {
    className: "waitlist-note"
  }, t('waitlist.note'))));
}
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sr_theme') || 'dark');
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef(null);
  useEffect(() => {
    if (langRef.current && window.SR_mountLangSwitcher) window.SR_mountLangSwitcher(langRef.current);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sr_theme', theme);
  }, [theme]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-triggered reveal
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.15
    });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'scrolled' : ''}`,
    role: "navigation",
    "aria-label": "Main"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "nav-logo",
    "aria-label": "CentryAI Home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo2.svg",
    alt: "CentryAI",
    className: "nav-logo-mark",
    style: {
      height: '36px',
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, t("nav.features"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#screenshots"
  }, t("nav.appPreview"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, t("nav.howItWorks"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, t("nav.pricing"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, t("nav.faq"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "support"
  }, t("nav.support")))), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions"
  }, /*#__PURE__*/React.createElement("div", {
    ref: langRef
  }), /*#__PURE__*/React.createElement("button", {
    className: "theme-toggle",
    onClick: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
    "aria-label": "Toggle theme"
  }, theme === 'dark' ? /*#__PURE__*/React.createElement(SunIcon, null) : /*#__PURE__*/React.createElement(MoonIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "#download",
    className: "btn btn-primary btn-sm",
    id: "nav-cta"
  }, t("nav.downloadFree")), /*#__PURE__*/React.createElement("button", {
    className: "nav-hamburger",
    onClick: () => setMobileOpen(v => !v),
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, mobileOpen ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "7",
    x2: "21",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "17",
    x2: "21",
    y2: "17"
  })))))), mobileOpen && /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu open",
    onClick: () => setMobileOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, t("nav.features")), /*#__PURE__*/React.createElement("a", {
    href: "#screenshots"
  }, t("nav.appPreview")), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, t("nav.howItWorks")), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, t("nav.pricing")), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, t("nav.faq")), /*#__PURE__*/React.createElement("a", {
    href: "support"
  }, t("nav.support")), /*#__PURE__*/React.createElement("a", {
    href: "#download",
    style: {
      color: 'var(--accent)',
      borderBottom: 'none',
      marginTop: '0.5rem'
    }
  }, t("nav.downloadFree"))), /*#__PURE__*/React.createElement("section", {
    className: "hero",
    "aria-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-video-bg"
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none"
  }, /*#__PURE__*/React.createElement("source", {
    src: "assets/main.mp4",
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-badge-dot"
  }), t("hero.badge")), /*#__PURE__*/React.createElement("h1", null, t('hero.headline1'), /*#__PURE__*/React.createElement("br", null), t('hero.headline2'), " ", /*#__PURE__*/React.createElement("em", null, t('hero.headlineEm'))), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, t("hero.sub")), /*#__PURE__*/React.createElement("div", {
    id: "download"
  }, /*#__PURE__*/React.createElement(StoreBtns, {
    id: "hero-"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-trust"
  }, /*#__PURE__*/React.createElement("span", null, t("hero.trust")))), /*#__PURE__*/React.createElement(PhoneGallery, null))), /*#__PURE__*/React.createElement(StatBar, null), /*#__PURE__*/React.createElement(ScreenshotsSection, null), /*#__PURE__*/React.createElement("section", {
    className: "section how-section",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t("howItWorks.eyebrow")), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t("howItWorks.title")), /*#__PURE__*/React.createElement("div", {
    className: "steps stagger"
  }, tArr("howItWorks.steps").map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "step reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t("features.eyebrow")), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t("features.title")), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, t("features.sub")), /*#__PURE__*/React.createElement("div", {
    className: "features-grid stagger"
  }, tArr("features.cards").map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "feature-card reveal",
    key: i,
    id: `feature-card-${i}`
  }, i < 2 && /*#__PURE__*/React.createElement("div", {
    className: "feature-sig-badge"
  }, t('features.signatureBadge')), /*#__PURE__*/React.createElement("div", {
    className: "feature-icon"
  }, [/*#__PURE__*/React.createElement(SparklesIcon, null), /*#__PURE__*/React.createElement(GhostIcon, null), /*#__PURE__*/React.createElement(ChartIcon, null), /*#__PURE__*/React.createElement(LinkIcon, null)][i]), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.desc)))))), /*#__PURE__*/React.createElement(EmailScannerSpotlight, null), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zombie-callout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "zombie-label"
  }, t("zombie.label")), /*#__PURE__*/React.createElement("h2", null, t("zombie.title")), /*#__PURE__*/React.createElement("p", null, t("zombie.desc"))), /*#__PURE__*/React.createElement("div", {
    className: "zombie-subs"
  }, getZombieSubs().map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: `zombie-item ${s.zombie ? 'flagged' : ''}`,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "zombie-item-logo",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: s.name,
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    className: "zombie-item-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zombie-item-name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "zombie-item-sub"
  }, s.sub), (() => {
    const tier = s.score > 70 ? 'high' : s.score > 40 ? 'mid' : 'low';
    return /*#__PURE__*/React.createElement("div", {
      className: "zombie-score-bar-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "zombie-score-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: `zombie-score-fill ${tier}`,
      style: {
        width: `${s.score}%`
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: `zombie-score-num ${tier}`
    }, s.score));
  })()), /*#__PURE__*/React.createElement("div", {
    className: "zombie-item-price"
  }, s.price), s.zombie && /*#__PURE__*/React.createElement("span", {
    className: "zombie-flag"
  }, t("zombie.flagLabel")))))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t("testimonials.eyebrow")), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t("testimonials.title")), /*#__PURE__*/React.createElement("div", {
    className: "testimonials-grid stagger"
  }, tArr("testimonials.reviews").map((rev, i) => /*#__PURE__*/React.createElement("div", {
    className: "testimonial-card reveal",
    key: i,
    id: `testimonial-${i}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "testimonial-stars"
  }, '★'.repeat(rev.stars)), /*#__PURE__*/React.createElement("p", {
    className: "testimonial-text"
  }, "\"", rev.text, "\""), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "testimonial-avatar"
  }, rev.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "testimonial-name"
  }, rev.name), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-handle"
  }, rev.handle)))))))), /*#__PURE__*/React.createElement("section", {
    className: "section faq-section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t("faq.eyebrow")), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t("faq.title")), /*#__PURE__*/React.createElement(FAQ, null))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      paddingBottom: '5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t("googleData.eyebrow")), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    }
  }, t("googleData.title")), /*#__PURE__*/React.createElement("div", {
    className: "google-disclosure reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "google-disclosure-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, t("googleData.cardTitle")), /*#__PURE__*/React.createElement("p", null, t("googleData.cardDesc")))))), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement("section", {
    className: "cta-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-inner"
  }, /*#__PURE__*/React.createElement("h2", null, t("cta.title")), /*#__PURE__*/React.createElement("p", null, t("cta.desc")), /*#__PURE__*/React.createElement("div", {
    className: "cta-btns"
  }, /*#__PURE__*/React.createElement(StoreBtns, {
    id: "cta-"
  })))), /*#__PURE__*/React.createElement(WaitlistSection, null), /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    "aria-label": "CentryAI"
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo2.svg",
    alt: "CentryAI",
    className: "footer-brand-logo",
    style: {
      height: '28px',
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("p", null, t("footer.tagline"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, t("footer.product")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, t("nav.features"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#screenshots"
  }, t("nav.appPreview"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, t("nav.faq"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#download"
  }, t("footer.links.downloadLink"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "best-subscription-tracker"
  }, "Best Subscription Tracker Apps 2026")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "subscription-audit"
  }, "How to Audit Your Subscriptions")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "how-to-cancel-subscriptions"
  }, "How to Cancel Subscriptions")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "save-money-on-subscriptions"
  }, "Save Money on Subscriptions")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "rocket-money-alternative"
  }, "Rocket Money Alternative")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "zombie-subscriptions"
  }, "What Are Zombie Subscriptions?")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "best-subscription-tracker-no-bank-linking"
  }, "Trackers Without Bank Linking")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, t("footer.company")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "support"
  }, t("nav.support"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "feedback"
  }, t("footer.links.feedback"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "privacy"
  }, t("footer.links.privacy"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "terms"
  }, t("footer.links.terms"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, t("footer.download")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, t("footer.links.appStore"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, t("footer.links.googlePlay")))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("p", null, t("footer.copyright")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "privacy",
    style: {
      color: 'var(--fg3)',
      textDecoration: 'none'
    }
  }, t("footer.footerPrivacy")), ' · ', /*#__PURE__*/React.createElement("a", {
    href: "terms",
    style: {
      color: 'var(--fg3)',
      textDecoration: 'none'
    }
  }, t("footer.footerTerms"))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
