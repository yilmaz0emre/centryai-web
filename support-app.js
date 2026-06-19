const {
  useState,
  useMemo
} = React;
const ALL_FAQS = [{
  category: t("support.categories.gettingStarted"),
  items: tArr("support.faqs.gettingStarted")
}, {
  category: t("support.categories.subscriptionsDetection"),
  items: tArr("support.faqs.subscriptionsDetection")
}, {
  category: t("support.categories.cancellation"),
  items: tArr("support.faqs.cancellation")
}, {
  category: t("support.categories.privacySecurity"),
  items: tArr("support.faqs.privacySecurity")
}, {
  category: t("support.categories.premium"),
  items: tArr("support.faqs.premium")
}, {
  category: t("support.categories.troubleshooting"),
  items: tArr("support.faqs.troubleshooting")
}];
const CATEGORIES = ALL_FAQS.map(g => g.category);
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "faq-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-question",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    className: `faq-chevron ${open ? 'open' : ''}`
  }, "▾")), /*#__PURE__*/React.createElement("div", {
    className: `faq-answer ${open ? 'open' : ''}`
  }, /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: a
    }
  })));
}
function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ALL_FAQS.map(group => ({
      ...group,
      items: group.items.filter(item => (activeCategory === 'All' || group.category === activeCategory) && (!q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)))
    })).filter(g => g.items.length > 0);
  }, [query, activeCategory]);
  const totalResults = filtered.reduce((sum, g) => sum + g.items.length, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "support-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: '0.75rem'
    }
  }, t("support.hero.label")), /*#__PURE__*/React.createElement("h1", null, t("support.hero.title")), /*#__PURE__*/React.createElement("p", null, t("support.hero.sub")), /*#__PURE__*/React.createElement("div", {
    className: "search-wrap"
  }, /*#__PURE__*/React.createElement("input", {
    className: "search-input",
    type: "text",
    placeholder: t("support.hero.searchPlaceholder"),
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setActiveCategory('All');
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "search-icon"
  }, "🔍"))), /*#__PURE__*/React.createElement("div", {
    className: "support-body"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "support-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-label"
  }, t("support.sidebar.categoriesLabel")), /*#__PURE__*/React.createElement("ul", {
    className: "sidebar-nav"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: activeCategory === 'All' ? 'active' : '',
    onClick: () => setActiveCategory('All')
  }, t("support.sidebar.allTopics"))), CATEGORIES.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, /*#__PURE__*/React.createElement("button", {
    className: activeCategory === c ? 'active' : '',
    onClick: () => {
      setActiveCategory(c);
      setQuery('');
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "support-contact"
  }, /*#__PURE__*/React.createElement("h4", null, t("support.sidebar.stuckTitle")), /*#__PURE__*/React.createElement("p", null, t("support.sidebar.stuckDesc")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@centryai.app",
    style: {
      display: 'inline-block',
      padding: '12px 0',
      minHeight: '44px'
    }
  }, t("support.sidebar.emailSupport")), /*#__PURE__*/React.createElement("a", {
    href: "feedback",
    style: {
      display: 'inline-block',
      padding: '12px 0',
      minHeight: '44px'
    }
  }, t("support.sidebar.reportBug")))), /*#__PURE__*/React.createElement("main", null, query && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg3)',
      fontSize: '0.82rem',
      marginBottom: '1.5rem'
    }
  }, t("support.results", {
    count: totalResults,
    query: query
  })), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "no-results"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem'
    }
  }, "🔍"), /*#__PURE__*/React.createElement("p", null, t("support.noResults", {
    query: query
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '0.35rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "feedback",
    style: {
      color: 'var(--accent)'
    }
  }, t("support.submitRequest"), " →"))) : filtered.map(group => /*#__PURE__*/React.createElement("div", {
    className: "faq-group",
    key: group.category
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-section-title"
  }, group.category), group.items.map((item, i) => /*#__PURE__*/React.createElement(FAQItem, {
    key: i,
    q: item.q,
    a: item.a
  })))))), /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom",
    style: {
      marginTop: 0,
      paddingTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    "data-i18n": "footer.copyright"
  }, "\xA9 2026 CentryAI. All rights reserved."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "privacy",
    style: {
      color: 'var(--fg3)',
      textDecoration: 'none'
    },
    "data-i18n": "footer.footerPrivacy"
  }, "Privacy"), ' \xB7 ', /*#__PURE__*/React.createElement("a", {
    href: "terms",
    style: {
      color: 'var(--fg3)',
      textDecoration: 'none'
    },
    "data-i18n": "footer.footerTerms"
  }, "Terms")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
