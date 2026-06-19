const {
  useState,
  useRef
} = React;
const TYPES = [{
  id: 'bug',
  icon: '🐛',
  label: window.t('feedback.types.bug.label'),
  sub: window.t('feedback.types.bug.sub')
}, {
  id: 'feature',
  icon: '✨',
  label: window.t('feedback.types.feature.label'),
  sub: window.t('feedback.types.feature.sub')
}, {
  id: 'other',
  icon: '💬',
  label: window.t('feedback.types.other.label'),
  sub: window.t('feedback.types.other.sub')
}];
const PLATFORMS = ['iOS', 'Android', 'Both', 'Web / Other'];
const VERSIONS = ['1.0.1 (Latest)', '1.0.0', 'Earlier'];
function genRef() {
  return 'SR-' + Math.random().toString(36).toUpperCase().slice(2, 8);
}
function App() {
  const [type, setType] = useState('bug');
  const [form, setForm] = useState({
    name: '',
    email: '',
    platform: '',
    version: '',
    title: '',
    message: '',
    priority: 'med'
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId] = useState(genRef);
  const MAX = 1000;
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const msgLen = form.message.length;
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = window.t('feedback.form.errors.nameRequired');
    if (!form.email.trim()) e.email = window.t('feedback.form.errors.emailRequired');else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = window.t('feedback.form.errors.emailInvalid');
    if (!form.title.trim()) e.title = window.t('feedback.form.errors.titleRequired');
    if (!form.message.trim()) e.message = window.t('feedback.form.errors.messageRequired');else if (msgLen > MAX) e.message = window.t('feedback.form.errors.messageTooLong', {
      max: MAX
    });
    return e;
  };
  const encode = data => {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "feedback",
        type,
        ...form
      })
    }).then(() => {
      setSubmitting(false);
      setSubmitted(true);
    }).catch(error => {
      console.error(error);
      alert(window.t('feedback.form.errors.submitError') || "Something went wrong. Please try again.");
      setSubmitting(false);
    });
  };
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      className: "feedback-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "success-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "success-icon"
    }, "✓"), /*#__PURE__*/React.createElement("h2", null, t("feedback.success.title")), /*#__PURE__*/React.createElement("p", null, type === 'bug' ? t("feedback.success.descBug") : type === 'feature' ? t("feedback.success.descFeature") : t("feedback.success.descFeedback")), /*#__PURE__*/React.createElement("div", {
      className: "success-ref"
    }, "Ref: ", refId), /*#__PURE__*/React.createElement("div", {
      className: "success-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: () => {
        setSubmitted(false);
        setForm({
          name: '',
          email: '',
          platform: '',
          version: '',
          title: '',
          message: '',
          priority: 'med'
        });
        setErrors({});
      }
    }, t("feedback.success.submitAnother")), /*#__PURE__*/React.createElement("a", {
      href: "/",
      className: "btn btn-primary"
    }, t("feedback.success.backHome"))))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "feedback-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feedback-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: '0.75rem'
    }
  }, t("feedback.header.label")), /*#__PURE__*/React.createElement("h1", null, t("feedback.header.title")), /*#__PURE__*/React.createElement("p", null, t("feedback.header.sub"))), /*#__PURE__*/React.createElement("form", {
    className: "form-card",
    onSubmit: handleSubmit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "type-grid"
  }, TYPES.map(t => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: t.id,
    className: `type-btn ${type === t.id ? 'active' : ''}`,
    onClick: () => setType(t.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "type-icon"
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    className: "type-label"
  }, t.label), /*#__PURE__*/React.createElement("span", {
    className: "type-sub"
  }, t.sub)))), /*#__PURE__*/React.createElement("div", {
    className: "form-row-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, t("feedback.form.name"), " ", /*#__PURE__*/React.createElement("span", null, "*")), /*#__PURE__*/React.createElement("input", {
    className: `form-input ${errors.name ? 'error' : ''}`,
    type: "text",
    placeholder: t("feedback.form.placeholders.name"),
    value: form.name,
    onChange: e => set('name', e.target.value)
  }), errors.name && /*#__PURE__*/React.createElement("div", {
    className: "field-error"
  }, errors.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, t("feedback.form.email"), " ", /*#__PURE__*/React.createElement("span", null, "*")), /*#__PURE__*/React.createElement("input", {
    className: `form-input ${errors.email ? 'error' : ''}`,
    type: "email",
    placeholder: t("feedback.form.placeholders.email"),
    value: form.email,
    onChange: e => set('email', e.target.value)
  }), errors.email && /*#__PURE__*/React.createElement("div", {
    className: "field-error"
  }, errors.email))), type === 'bug' && /*#__PURE__*/React.createElement("div", {
    className: "form-row-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, t("feedback.form.platform")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    value: form.platform,
    onChange: e => set('platform', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, t("feedback.form.selectPlatform")), PLATFORMS.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, t("feedback.form.appVersion")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    value: form.version,
    onChange: e => set('version', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, t("feedback.form.selectVersion")), VERSIONS.map(v => /*#__PURE__*/React.createElement("option", {
    key: v,
    value: v
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, type === 'bug' ? t('feedback.form.bugSummary') : type === 'feature' ? t('feedback.form.featureTitle') : t('feedback.form.subject'), " ", /*#__PURE__*/React.createElement("span", null, "*")), /*#__PURE__*/React.createElement("input", {
    className: `form-input ${errors.title ? 'error' : ''}`,
    type: "text",
    placeholder: type === 'bug' ? t('feedback.form.placeholders.bugSummary') : type === 'feature' ? t('feedback.form.placeholders.featureTitle') : t('feedback.form.placeholders.subject'),
    value: form.title,
    onChange: e => set('title', e.target.value)
  }), errors.title && /*#__PURE__*/React.createElement("div", {
    className: "field-error"
  }, errors.title)), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, type === 'bug' ? t('feedback.form.stepsToReproduce') : type === 'feature' ? t('feedback.form.describeFeature') : t('feedback.form.messageLabel'), " ", /*#__PURE__*/React.createElement("span", null, "*")), /*#__PURE__*/React.createElement("textarea", {
    className: `form-textarea ${errors.message ? 'error' : ''}`,
    placeholder: type === 'bug' ? t('feedback.form.placeholders.bugDetails') : type === 'feature' ? t('feedback.form.placeholders.featureDetails') : t('feedback.form.placeholders.message'),
    value: form.message,
    onChange: e => set('message', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: `char-count ${msgLen > MAX ? 'over' : msgLen > MAX * 0.85 ? 'warn' : ''}`
  }, msgLen, "/", MAX), errors.message && /*#__PURE__*/React.createElement("div", {
    className: "field-error"
  }, errors.message)), type === 'bug' && /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, t("feedback.form.severity")), /*#__PURE__*/React.createElement("div", {
    className: "priority-row"
  }, [['low', t('feedback.form.severityLevels.low.label'), t('feedback.form.severityLevels.low.sub')], ['med', t('feedback.form.severityLevels.med.label'), t('feedback.form.severityLevels.med.sub')], ['high', t('feedback.form.severityLevels.high.label'), t('feedback.form.severityLevels.high.sub')]].map(([id, label, sub]) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: id,
    className: `priority-opt ${form.priority === id ? `active-${id}` : ''}`,
    onClick: () => set('priority', id)
  }, /*#__PURE__*/React.createElement("div", null, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.65rem',
      opacity: 0.7,
      marginTop: 2
    }
  }, sub))))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "submit-btn",
    disabled: submitting
  }, submitting ? t('feedback.form.sending') : type === 'bug' ? t('feedback.form.submitBug') : type === 'feature' ? t('feedback.form.submitFeature') : t('feedback.form.sendFeedback')), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: '0.75rem',
      color: 'var(--fg3)',
      marginTop: '0.75rem'
    }
  }, t("feedback.form.directEmail"), " ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@centryai.app",
    style: {
      color: 'var(--accent)'
    }
  }, "support@centryai.app"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
