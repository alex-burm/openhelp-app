var _e = Object.defineProperty;
var ze = (r, e, t) => e in r ? _e(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var he = (r, e, t) => ze(r, typeof e != "symbol" ? e + "" : e, t);
class We {
  constructor(e, t, s) {
    this.eventTarget = e, this.eventName = t, this.eventOptions = s, this.unorderedBindings = /* @__PURE__ */ new Set();
  }
  connect() {
    this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
  }
  disconnect() {
    this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
  }
  bindingConnected(e) {
    this.unorderedBindings.add(e);
  }
  bindingDisconnected(e) {
    this.unorderedBindings.delete(e);
  }
  handleEvent(e) {
    const t = Je(e);
    for (const s of this.bindings) {
      if (t.immediatePropagationStopped)
        break;
      s.handleEvent(t);
    }
  }
  hasBindings() {
    return this.unorderedBindings.size > 0;
  }
  get bindings() {
    return Array.from(this.unorderedBindings).sort((e, t) => {
      const s = e.index, n = t.index;
      return s < n ? -1 : s > n ? 1 : 0;
    });
  }
}
function Je(r) {
  if ("immediatePropagationStopped" in r)
    return r;
  {
    const { stopImmediatePropagation: e } = r;
    return Object.assign(r, {
      immediatePropagationStopped: !1,
      stopImmediatePropagation() {
        this.immediatePropagationStopped = !0, e.call(this);
      }
    });
  }
}
class Ge {
  constructor(e) {
    this.application = e, this.eventListenerMaps = /* @__PURE__ */ new Map(), this.started = !1;
  }
  start() {
    this.started || (this.started = !0, this.eventListeners.forEach((e) => e.connect()));
  }
  stop() {
    this.started && (this.started = !1, this.eventListeners.forEach((e) => e.disconnect()));
  }
  get eventListeners() {
    return Array.from(this.eventListenerMaps.values()).reduce((e, t) => e.concat(Array.from(t.values())), []);
  }
  bindingConnected(e) {
    this.fetchEventListenerForBinding(e).bindingConnected(e);
  }
  bindingDisconnected(e, t = !1) {
    this.fetchEventListenerForBinding(e).bindingDisconnected(e), t && this.clearEventListenersForBinding(e);
  }
  handleError(e, t, s = {}) {
    this.application.handleError(e, `Error ${t}`, s);
  }
  clearEventListenersForBinding(e) {
    const t = this.fetchEventListenerForBinding(e);
    t.hasBindings() || (t.disconnect(), this.removeMappedEventListenerFor(e));
  }
  removeMappedEventListenerFor(e) {
    const { eventTarget: t, eventName: s, eventOptions: n } = e, i = this.fetchEventListenerMapForEventTarget(t), o = this.cacheKey(s, n);
    i.delete(o), i.size == 0 && this.eventListenerMaps.delete(t);
  }
  fetchEventListenerForBinding(e) {
    const { eventTarget: t, eventName: s, eventOptions: n } = e;
    return this.fetchEventListener(t, s, n);
  }
  fetchEventListener(e, t, s) {
    const n = this.fetchEventListenerMapForEventTarget(e), i = this.cacheKey(t, s);
    let o = n.get(i);
    return o || (o = this.createEventListener(e, t, s), n.set(i, o)), o;
  }
  createEventListener(e, t, s) {
    const n = new We(e, t, s);
    return this.started && n.connect(), n;
  }
  fetchEventListenerMapForEventTarget(e) {
    let t = this.eventListenerMaps.get(e);
    return t || (t = /* @__PURE__ */ new Map(), this.eventListenerMaps.set(e, t)), t;
  }
  cacheKey(e, t) {
    const s = [e];
    return Object.keys(t).sort().forEach((n) => {
      s.push(`${t[n] ? "" : "!"}${n}`);
    }), s.join(":");
  }
}
const Xe = {
  stop({ event: r, value: e }) {
    return e && r.stopPropagation(), !0;
  },
  prevent({ event: r, value: e }) {
    return e && r.preventDefault(), !0;
  },
  self({ event: r, value: e, element: t }) {
    return e ? t === r.target : !0;
  }
}, Qe = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
function Ye(r) {
  const t = r.trim().match(Qe) || [];
  let s = t[2], n = t[3];
  return n && !["keydown", "keyup", "keypress"].includes(s) && (s += `.${n}`, n = ""), {
    eventTarget: Ze(t[4]),
    eventName: s,
    eventOptions: t[7] ? et(t[7]) : {},
    identifier: t[5],
    methodName: t[6],
    keyFilter: t[1] || n
  };
}
function Ze(r) {
  if (r == "window")
    return window;
  if (r == "document")
    return document;
}
function et(r) {
  return r.split(":").reduce((e, t) => Object.assign(e, { [t.replace(/^!/, "")]: !/^!/.test(t) }), {});
}
function tt(r) {
  if (r == window)
    return "window";
  if (r == document)
    return "document";
}
function ne(r) {
  return r.replace(/(?:[_-])([a-z0-9])/g, (e, t) => t.toUpperCase());
}
function Z(r) {
  return ne(r.replace(/--/g, "-").replace(/__/g, "_"));
}
function j(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Oe(r) {
  return r.replace(/([A-Z])/g, (e, t) => `-${t.toLowerCase()}`);
}
function st(r) {
  return r.match(/[^\s]+/g) || [];
}
function ue(r) {
  return r != null;
}
function ee(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
const de = ["meta", "ctrl", "alt", "shift"];
class rt {
  constructor(e, t, s, n) {
    this.element = e, this.index = t, this.eventTarget = s.eventTarget || e, this.eventName = s.eventName || nt(e) || W("missing event name"), this.eventOptions = s.eventOptions || {}, this.identifier = s.identifier || W("missing identifier"), this.methodName = s.methodName || W("missing method name"), this.keyFilter = s.keyFilter || "", this.schema = n;
  }
  static forToken(e, t) {
    return new this(e.element, e.index, Ye(e.content), t);
  }
  toString() {
    const e = this.keyFilter ? `.${this.keyFilter}` : "", t = this.eventTargetName ? `@${this.eventTargetName}` : "";
    return `${this.eventName}${e}${t}->${this.identifier}#${this.methodName}`;
  }
  shouldIgnoreKeyboardEvent(e) {
    if (!this.keyFilter)
      return !1;
    const t = this.keyFilter.split("+");
    if (this.keyFilterDissatisfied(e, t))
      return !0;
    const s = t.filter((n) => !de.includes(n))[0];
    return s ? (ee(this.keyMappings, s) || W(`contains unknown key filter: ${this.keyFilter}`), this.keyMappings[s].toLowerCase() !== e.key.toLowerCase()) : !1;
  }
  shouldIgnoreMouseEvent(e) {
    if (!this.keyFilter)
      return !1;
    const t = [this.keyFilter];
    return !!this.keyFilterDissatisfied(e, t);
  }
  get params() {
    const e = {}, t = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
    for (const { name: s, value: n } of Array.from(this.element.attributes)) {
      const i = s.match(t), o = i && i[1];
      o && (e[ne(o)] = it(n));
    }
    return e;
  }
  get eventTargetName() {
    return tt(this.eventTarget);
  }
  get keyMappings() {
    return this.schema.keyMappings;
  }
  keyFilterDissatisfied(e, t) {
    const [s, n, i, o] = de.map((d) => t.includes(d));
    return e.metaKey !== s || e.ctrlKey !== n || e.altKey !== i || e.shiftKey !== o;
  }
}
const fe = {
  a: () => "click",
  button: () => "click",
  form: () => "submit",
  details: () => "toggle",
  input: (r) => r.getAttribute("type") == "submit" ? "click" : "input",
  select: () => "change",
  textarea: () => "input"
};
function nt(r) {
  const e = r.tagName.toLowerCase();
  if (e in fe)
    return fe[e](r);
}
function W(r) {
  throw new Error(r);
}
function it(r) {
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}
class ot {
  constructor(e, t) {
    this.context = e, this.action = t;
  }
  get index() {
    return this.action.index;
  }
  get eventTarget() {
    return this.action.eventTarget;
  }
  get eventOptions() {
    return this.action.eventOptions;
  }
  get identifier() {
    return this.context.identifier;
  }
  handleEvent(e) {
    const t = this.prepareActionEvent(e);
    this.willBeInvokedByEvent(e) && this.applyEventModifiers(t) && this.invokeWithEvent(t);
  }
  get eventName() {
    return this.action.eventName;
  }
  get method() {
    const e = this.controller[this.methodName];
    if (typeof e == "function")
      return e;
    throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
  }
  applyEventModifiers(e) {
    const { element: t } = this.action, { actionDescriptorFilters: s } = this.context.application, { controller: n } = this.context;
    let i = !0;
    for (const [o, d] of Object.entries(this.eventOptions))
      if (o in s) {
        const h = s[o];
        i = i && h({ name: o, value: d, event: e, element: t, controller: n });
      } else
        continue;
    return i;
  }
  prepareActionEvent(e) {
    return Object.assign(e, { params: this.action.params });
  }
  invokeWithEvent(e) {
    const { target: t, currentTarget: s } = e;
    try {
      this.method.call(this.controller, e), this.context.logDebugActivity(this.methodName, { event: e, target: t, currentTarget: s, action: this.methodName });
    } catch (n) {
      const { identifier: i, controller: o, element: d, index: h } = this, u = { identifier: i, controller: o, element: d, index: h, event: e };
      this.context.handleError(n, `invoking action "${this.action}"`, u);
    }
  }
  willBeInvokedByEvent(e) {
    const t = e.target;
    return e instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(e) || e instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(e) ? !1 : this.element === t ? !0 : t instanceof Element && this.element.contains(t) ? this.scope.containsElement(t) : this.scope.containsElement(this.action.element);
  }
  get controller() {
    return this.context.controller;
  }
  get methodName() {
    return this.action.methodName;
  }
  get element() {
    return this.scope.element;
  }
  get scope() {
    return this.context.scope;
  }
}
class ke {
  constructor(e, t) {
    this.mutationObserverInit = { attributes: !0, childList: !0, subtree: !0 }, this.element = e, this.started = !1, this.delegate = t, this.elements = /* @__PURE__ */ new Set(), this.mutationObserver = new MutationObserver((s) => this.processMutations(s));
  }
  start() {
    this.started || (this.started = !0, this.mutationObserver.observe(this.element, this.mutationObserverInit), this.refresh());
  }
  pause(e) {
    this.started && (this.mutationObserver.disconnect(), this.started = !1), e(), this.started || (this.mutationObserver.observe(this.element, this.mutationObserverInit), this.started = !0);
  }
  stop() {
    this.started && (this.mutationObserver.takeRecords(), this.mutationObserver.disconnect(), this.started = !1);
  }
  refresh() {
    if (this.started) {
      const e = new Set(this.matchElementsInTree());
      for (const t of Array.from(this.elements))
        e.has(t) || this.removeElement(t);
      for (const t of Array.from(e))
        this.addElement(t);
    }
  }
  processMutations(e) {
    if (this.started)
      for (const t of e)
        this.processMutation(t);
  }
  processMutation(e) {
    e.type == "attributes" ? this.processAttributeChange(e.target, e.attributeName) : e.type == "childList" && (this.processRemovedNodes(e.removedNodes), this.processAddedNodes(e.addedNodes));
  }
  processAttributeChange(e, t) {
    this.elements.has(e) ? this.delegate.elementAttributeChanged && this.matchElement(e) ? this.delegate.elementAttributeChanged(e, t) : this.removeElement(e) : this.matchElement(e) && this.addElement(e);
  }
  processRemovedNodes(e) {
    for (const t of Array.from(e)) {
      const s = this.elementFromNode(t);
      s && this.processTree(s, this.removeElement);
    }
  }
  processAddedNodes(e) {
    for (const t of Array.from(e)) {
      const s = this.elementFromNode(t);
      s && this.elementIsActive(s) && this.processTree(s, this.addElement);
    }
  }
  matchElement(e) {
    return this.delegate.matchElement(e);
  }
  matchElementsInTree(e = this.element) {
    return this.delegate.matchElementsInTree(e);
  }
  processTree(e, t) {
    for (const s of this.matchElementsInTree(e))
      t.call(this, s);
  }
  elementFromNode(e) {
    if (e.nodeType == Node.ELEMENT_NODE)
      return e;
  }
  elementIsActive(e) {
    return e.isConnected != this.element.isConnected ? !1 : this.element.contains(e);
  }
  addElement(e) {
    this.elements.has(e) || this.elementIsActive(e) && (this.elements.add(e), this.delegate.elementMatched && this.delegate.elementMatched(e));
  }
  removeElement(e) {
    this.elements.has(e) && (this.elements.delete(e), this.delegate.elementUnmatched && this.delegate.elementUnmatched(e));
  }
}
class Ce {
  constructor(e, t, s) {
    this.attributeName = t, this.delegate = s, this.elementObserver = new ke(e, this);
  }
  get element() {
    return this.elementObserver.element;
  }
  get selector() {
    return `[${this.attributeName}]`;
  }
  start() {
    this.elementObserver.start();
  }
  pause(e) {
    this.elementObserver.pause(e);
  }
  stop() {
    this.elementObserver.stop();
  }
  refresh() {
    this.elementObserver.refresh();
  }
  get started() {
    return this.elementObserver.started;
  }
  matchElement(e) {
    return e.hasAttribute(this.attributeName);
  }
  matchElementsInTree(e) {
    const t = this.matchElement(e) ? [e] : [], s = Array.from(e.querySelectorAll(this.selector));
    return t.concat(s);
  }
  elementMatched(e) {
    this.delegate.elementMatchedAttribute && this.delegate.elementMatchedAttribute(e, this.attributeName);
  }
  elementUnmatched(e) {
    this.delegate.elementUnmatchedAttribute && this.delegate.elementUnmatchedAttribute(e, this.attributeName);
  }
  elementAttributeChanged(e, t) {
    this.delegate.elementAttributeValueChanged && this.attributeName == t && this.delegate.elementAttributeValueChanged(e, t);
  }
}
function at(r, e, t) {
  Te(r, e).add(t);
}
function lt(r, e, t) {
  Te(r, e).delete(t), ct(r, e);
}
function Te(r, e) {
  let t = r.get(e);
  return t || (t = /* @__PURE__ */ new Set(), r.set(e, t)), t;
}
function ct(r, e) {
  const t = r.get(e);
  t != null && t.size == 0 && r.delete(e);
}
class S {
  constructor() {
    this.valuesByKey = /* @__PURE__ */ new Map();
  }
  get keys() {
    return Array.from(this.valuesByKey.keys());
  }
  get values() {
    return Array.from(this.valuesByKey.values()).reduce((t, s) => t.concat(Array.from(s)), []);
  }
  get size() {
    return Array.from(this.valuesByKey.values()).reduce((t, s) => t + s.size, 0);
  }
  add(e, t) {
    at(this.valuesByKey, e, t);
  }
  delete(e, t) {
    lt(this.valuesByKey, e, t);
  }
  has(e, t) {
    const s = this.valuesByKey.get(e);
    return s != null && s.has(t);
  }
  hasKey(e) {
    return this.valuesByKey.has(e);
  }
  hasValue(e) {
    return Array.from(this.valuesByKey.values()).some((s) => s.has(e));
  }
  getValuesForKey(e) {
    const t = this.valuesByKey.get(e);
    return t ? Array.from(t) : [];
  }
  getKeysForValue(e) {
    return Array.from(this.valuesByKey).filter(([t, s]) => s.has(e)).map(([t, s]) => t);
  }
}
class ht {
  constructor(e, t, s, n) {
    this._selector = t, this.details = n, this.elementObserver = new ke(e, this), this.delegate = s, this.matchesByElement = new S();
  }
  get started() {
    return this.elementObserver.started;
  }
  get selector() {
    return this._selector;
  }
  set selector(e) {
    this._selector = e, this.refresh();
  }
  start() {
    this.elementObserver.start();
  }
  pause(e) {
    this.elementObserver.pause(e);
  }
  stop() {
    this.elementObserver.stop();
  }
  refresh() {
    this.elementObserver.refresh();
  }
  get element() {
    return this.elementObserver.element;
  }
  matchElement(e) {
    const { selector: t } = this;
    if (t) {
      const s = e.matches(t);
      return this.delegate.selectorMatchElement ? s && this.delegate.selectorMatchElement(e, this.details) : s;
    } else
      return !1;
  }
  matchElementsInTree(e) {
    const { selector: t } = this;
    if (t) {
      const s = this.matchElement(e) ? [e] : [], n = Array.from(e.querySelectorAll(t)).filter((i) => this.matchElement(i));
      return s.concat(n);
    } else
      return [];
  }
  elementMatched(e) {
    const { selector: t } = this;
    t && this.selectorMatched(e, t);
  }
  elementUnmatched(e) {
    const t = this.matchesByElement.getKeysForValue(e);
    for (const s of t)
      this.selectorUnmatched(e, s);
  }
  elementAttributeChanged(e, t) {
    const { selector: s } = this;
    if (s) {
      const n = this.matchElement(e), i = this.matchesByElement.has(s, e);
      n && !i ? this.selectorMatched(e, s) : !n && i && this.selectorUnmatched(e, s);
    }
  }
  selectorMatched(e, t) {
    this.delegate.selectorMatched(e, t, this.details), this.matchesByElement.add(t, e);
  }
  selectorUnmatched(e, t) {
    this.delegate.selectorUnmatched(e, t, this.details), this.matchesByElement.delete(t, e);
  }
}
class ut {
  constructor(e, t) {
    this.element = e, this.delegate = t, this.started = !1, this.stringMap = /* @__PURE__ */ new Map(), this.mutationObserver = new MutationObserver((s) => this.processMutations(s));
  }
  start() {
    this.started || (this.started = !0, this.mutationObserver.observe(this.element, { attributes: !0, attributeOldValue: !0 }), this.refresh());
  }
  stop() {
    this.started && (this.mutationObserver.takeRecords(), this.mutationObserver.disconnect(), this.started = !1);
  }
  refresh() {
    if (this.started)
      for (const e of this.knownAttributeNames)
        this.refreshAttribute(e, null);
  }
  processMutations(e) {
    if (this.started)
      for (const t of e)
        this.processMutation(t);
  }
  processMutation(e) {
    const t = e.attributeName;
    t && this.refreshAttribute(t, e.oldValue);
  }
  refreshAttribute(e, t) {
    const s = this.delegate.getStringMapKeyForAttribute(e);
    if (s != null) {
      this.stringMap.has(e) || this.stringMapKeyAdded(s, e);
      const n = this.element.getAttribute(e);
      if (this.stringMap.get(e) != n && this.stringMapValueChanged(n, s, t), n == null) {
        const i = this.stringMap.get(e);
        this.stringMap.delete(e), i && this.stringMapKeyRemoved(s, e, i);
      } else
        this.stringMap.set(e, n);
    }
  }
  stringMapKeyAdded(e, t) {
    this.delegate.stringMapKeyAdded && this.delegate.stringMapKeyAdded(e, t);
  }
  stringMapValueChanged(e, t, s) {
    this.delegate.stringMapValueChanged && this.delegate.stringMapValueChanged(e, t, s);
  }
  stringMapKeyRemoved(e, t, s) {
    this.delegate.stringMapKeyRemoved && this.delegate.stringMapKeyRemoved(e, t, s);
  }
  get knownAttributeNames() {
    return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
  }
  get currentAttributeNames() {
    return Array.from(this.element.attributes).map((e) => e.name);
  }
  get recordedAttributeNames() {
    return Array.from(this.stringMap.keys());
  }
}
class Se {
  constructor(e, t, s) {
    this.attributeObserver = new Ce(e, t, this), this.delegate = s, this.tokensByElement = new S();
  }
  get started() {
    return this.attributeObserver.started;
  }
  start() {
    this.attributeObserver.start();
  }
  pause(e) {
    this.attributeObserver.pause(e);
  }
  stop() {
    this.attributeObserver.stop();
  }
  refresh() {
    this.attributeObserver.refresh();
  }
  get element() {
    return this.attributeObserver.element;
  }
  get attributeName() {
    return this.attributeObserver.attributeName;
  }
  elementMatchedAttribute(e) {
    this.tokensMatched(this.readTokensForElement(e));
  }
  elementAttributeValueChanged(e) {
    const [t, s] = this.refreshTokensForElement(e);
    this.tokensUnmatched(t), this.tokensMatched(s);
  }
  elementUnmatchedAttribute(e) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(e));
  }
  tokensMatched(e) {
    e.forEach((t) => this.tokenMatched(t));
  }
  tokensUnmatched(e) {
    e.forEach((t) => this.tokenUnmatched(t));
  }
  tokenMatched(e) {
    this.delegate.tokenMatched(e), this.tokensByElement.add(e.element, e);
  }
  tokenUnmatched(e) {
    this.delegate.tokenUnmatched(e), this.tokensByElement.delete(e.element, e);
  }
  refreshTokensForElement(e) {
    const t = this.tokensByElement.getValuesForKey(e), s = this.readTokensForElement(e), n = ft(t, s).findIndex(([i, o]) => !pt(i, o));
    return n == -1 ? [[], []] : [t.slice(n), s.slice(n)];
  }
  readTokensForElement(e) {
    const t = this.attributeName, s = e.getAttribute(t) || "";
    return dt(s, e, t);
  }
}
function dt(r, e, t) {
  return r.trim().split(/\s+/).filter((s) => s.length).map((s, n) => ({ element: e, attributeName: t, content: s, index: n }));
}
function ft(r, e) {
  const t = Math.max(r.length, e.length);
  return Array.from({ length: t }, (s, n) => [r[n], e[n]]);
}
function pt(r, e) {
  return r && e && r.index == e.index && r.content == e.content;
}
class Fe {
  constructor(e, t, s) {
    this.tokenListObserver = new Se(e, t, this), this.delegate = s, this.parseResultsByToken = /* @__PURE__ */ new WeakMap(), this.valuesByTokenByElement = /* @__PURE__ */ new WeakMap();
  }
  get started() {
    return this.tokenListObserver.started;
  }
  start() {
    this.tokenListObserver.start();
  }
  stop() {
    this.tokenListObserver.stop();
  }
  refresh() {
    this.tokenListObserver.refresh();
  }
  get element() {
    return this.tokenListObserver.element;
  }
  get attributeName() {
    return this.tokenListObserver.attributeName;
  }
  tokenMatched(e) {
    const { element: t } = e, { value: s } = this.fetchParseResultForToken(e);
    s && (this.fetchValuesByTokenForElement(t).set(e, s), this.delegate.elementMatchedValue(t, s));
  }
  tokenUnmatched(e) {
    const { element: t } = e, { value: s } = this.fetchParseResultForToken(e);
    s && (this.fetchValuesByTokenForElement(t).delete(e), this.delegate.elementUnmatchedValue(t, s));
  }
  fetchParseResultForToken(e) {
    let t = this.parseResultsByToken.get(e);
    return t || (t = this.parseToken(e), this.parseResultsByToken.set(e, t)), t;
  }
  fetchValuesByTokenForElement(e) {
    let t = this.valuesByTokenByElement.get(e);
    return t || (t = /* @__PURE__ */ new Map(), this.valuesByTokenByElement.set(e, t)), t;
  }
  parseToken(e) {
    try {
      return { value: this.delegate.parseValueForToken(e) };
    } catch (t) {
      return { error: t };
    }
  }
}
class gt {
  constructor(e, t) {
    this.context = e, this.delegate = t, this.bindingsByAction = /* @__PURE__ */ new Map();
  }
  start() {
    this.valueListObserver || (this.valueListObserver = new Fe(this.element, this.actionAttribute, this), this.valueListObserver.start());
  }
  stop() {
    this.valueListObserver && (this.valueListObserver.stop(), delete this.valueListObserver, this.disconnectAllActions());
  }
  get element() {
    return this.context.element;
  }
  get identifier() {
    return this.context.identifier;
  }
  get actionAttribute() {
    return this.schema.actionAttribute;
  }
  get schema() {
    return this.context.schema;
  }
  get bindings() {
    return Array.from(this.bindingsByAction.values());
  }
  connectAction(e) {
    const t = new ot(this.context, e);
    this.bindingsByAction.set(e, t), this.delegate.bindingConnected(t);
  }
  disconnectAction(e) {
    const t = this.bindingsByAction.get(e);
    t && (this.bindingsByAction.delete(e), this.delegate.bindingDisconnected(t));
  }
  disconnectAllActions() {
    this.bindings.forEach((e) => this.delegate.bindingDisconnected(e, !0)), this.bindingsByAction.clear();
  }
  parseValueForToken(e) {
    const t = rt.forToken(e, this.schema);
    if (t.identifier == this.identifier)
      return t;
  }
  elementMatchedValue(e, t) {
    this.connectAction(t);
  }
  elementUnmatchedValue(e, t) {
    this.disconnectAction(t);
  }
}
class mt {
  constructor(e, t) {
    this.context = e, this.receiver = t, this.stringMapObserver = new ut(this.element, this), this.valueDescriptorMap = this.controller.valueDescriptorMap;
  }
  start() {
    this.stringMapObserver.start(), this.invokeChangedCallbacksForDefaultValues();
  }
  stop() {
    this.stringMapObserver.stop();
  }
  get element() {
    return this.context.element;
  }
  get controller() {
    return this.context.controller;
  }
  getStringMapKeyForAttribute(e) {
    if (e in this.valueDescriptorMap)
      return this.valueDescriptorMap[e].name;
  }
  stringMapKeyAdded(e, t) {
    const s = this.valueDescriptorMap[t];
    this.hasValue(e) || this.invokeChangedCallback(e, s.writer(this.receiver[e]), s.writer(s.defaultValue));
  }
  stringMapValueChanged(e, t, s) {
    const n = this.valueDescriptorNameMap[t];
    e !== null && (s === null && (s = n.writer(n.defaultValue)), this.invokeChangedCallback(t, e, s));
  }
  stringMapKeyRemoved(e, t, s) {
    const n = this.valueDescriptorNameMap[e];
    this.hasValue(e) ? this.invokeChangedCallback(e, n.writer(this.receiver[e]), s) : this.invokeChangedCallback(e, n.writer(n.defaultValue), s);
  }
  invokeChangedCallbacksForDefaultValues() {
    for (const { key: e, name: t, defaultValue: s, writer: n } of this.valueDescriptors)
      s != null && !this.controller.data.has(e) && this.invokeChangedCallback(t, n(s), void 0);
  }
  invokeChangedCallback(e, t, s) {
    const n = `${e}Changed`, i = this.receiver[n];
    if (typeof i == "function") {
      const o = this.valueDescriptorNameMap[e];
      try {
        const d = o.reader(t);
        let h = s;
        s && (h = o.reader(s)), i.call(this.receiver, d, h);
      } catch (d) {
        throw d instanceof TypeError && (d.message = `Stimulus Value "${this.context.identifier}.${o.name}" - ${d.message}`), d;
      }
    }
  }
  get valueDescriptors() {
    const { valueDescriptorMap: e } = this;
    return Object.keys(e).map((t) => e[t]);
  }
  get valueDescriptorNameMap() {
    const e = {};
    return Object.keys(this.valueDescriptorMap).forEach((t) => {
      const s = this.valueDescriptorMap[t];
      e[s.name] = s;
    }), e;
  }
  hasValue(e) {
    const t = this.valueDescriptorNameMap[e], s = `has${j(t.name)}`;
    return this.receiver[s];
  }
}
class bt {
  constructor(e, t) {
    this.context = e, this.delegate = t, this.targetsByName = new S();
  }
  start() {
    this.tokenListObserver || (this.tokenListObserver = new Se(this.element, this.attributeName, this), this.tokenListObserver.start());
  }
  stop() {
    this.tokenListObserver && (this.disconnectAllTargets(), this.tokenListObserver.stop(), delete this.tokenListObserver);
  }
  tokenMatched({ element: e, content: t }) {
    this.scope.containsElement(e) && this.connectTarget(e, t);
  }
  tokenUnmatched({ element: e, content: t }) {
    this.disconnectTarget(e, t);
  }
  connectTarget(e, t) {
    var s;
    this.targetsByName.has(t, e) || (this.targetsByName.add(t, e), (s = this.tokenListObserver) === null || s === void 0 || s.pause(() => this.delegate.targetConnected(e, t)));
  }
  disconnectTarget(e, t) {
    var s;
    this.targetsByName.has(t, e) && (this.targetsByName.delete(t, e), (s = this.tokenListObserver) === null || s === void 0 || s.pause(() => this.delegate.targetDisconnected(e, t)));
  }
  disconnectAllTargets() {
    for (const e of this.targetsByName.keys)
      for (const t of this.targetsByName.getValuesForKey(e))
        this.disconnectTarget(t, e);
  }
  get attributeName() {
    return `data-${this.context.identifier}-target`;
  }
  get element() {
    return this.context.element;
  }
  get scope() {
    return this.context.scope;
  }
}
function x(r, e) {
  const t = Ie(r);
  return Array.from(t.reduce((s, n) => (yt(n, e).forEach((i) => s.add(i)), s), /* @__PURE__ */ new Set()));
}
function vt(r, e) {
  return Ie(r).reduce((s, n) => (s.push(...Et(n, e)), s), []);
}
function Ie(r) {
  const e = [];
  for (; r; )
    e.push(r), r = Object.getPrototypeOf(r);
  return e.reverse();
}
function yt(r, e) {
  const t = r[e];
  return Array.isArray(t) ? t : [];
}
function Et(r, e) {
  const t = r[e];
  return t ? Object.keys(t).map((s) => [s, t[s]]) : [];
}
class At {
  constructor(e, t) {
    this.started = !1, this.context = e, this.delegate = t, this.outletsByName = new S(), this.outletElementsByName = new S(), this.selectorObserverMap = /* @__PURE__ */ new Map(), this.attributeObserverMap = /* @__PURE__ */ new Map();
  }
  start() {
    this.started || (this.outletDefinitions.forEach((e) => {
      this.setupSelectorObserverForOutlet(e), this.setupAttributeObserverForOutlet(e);
    }), this.started = !0, this.dependentContexts.forEach((e) => e.refresh()));
  }
  refresh() {
    this.selectorObserverMap.forEach((e) => e.refresh()), this.attributeObserverMap.forEach((e) => e.refresh());
  }
  stop() {
    this.started && (this.started = !1, this.disconnectAllOutlets(), this.stopSelectorObservers(), this.stopAttributeObservers());
  }
  stopSelectorObservers() {
    this.selectorObserverMap.size > 0 && (this.selectorObserverMap.forEach((e) => e.stop()), this.selectorObserverMap.clear());
  }
  stopAttributeObservers() {
    this.attributeObserverMap.size > 0 && (this.attributeObserverMap.forEach((e) => e.stop()), this.attributeObserverMap.clear());
  }
  selectorMatched(e, t, { outletName: s }) {
    const n = this.getOutlet(e, s);
    n && this.connectOutlet(n, e, s);
  }
  selectorUnmatched(e, t, { outletName: s }) {
    const n = this.getOutletFromMap(e, s);
    n && this.disconnectOutlet(n, e, s);
  }
  selectorMatchElement(e, { outletName: t }) {
    const s = this.selector(t), n = this.hasOutlet(e, t), i = e.matches(`[${this.schema.controllerAttribute}~=${t}]`);
    return s ? n && i && e.matches(s) : !1;
  }
  elementMatchedAttribute(e, t) {
    const s = this.getOutletNameFromOutletAttributeName(t);
    s && this.updateSelectorObserverForOutlet(s);
  }
  elementAttributeValueChanged(e, t) {
    const s = this.getOutletNameFromOutletAttributeName(t);
    s && this.updateSelectorObserverForOutlet(s);
  }
  elementUnmatchedAttribute(e, t) {
    const s = this.getOutletNameFromOutletAttributeName(t);
    s && this.updateSelectorObserverForOutlet(s);
  }
  connectOutlet(e, t, s) {
    var n;
    this.outletElementsByName.has(s, t) || (this.outletsByName.add(s, e), this.outletElementsByName.add(s, t), (n = this.selectorObserverMap.get(s)) === null || n === void 0 || n.pause(() => this.delegate.outletConnected(e, t, s)));
  }
  disconnectOutlet(e, t, s) {
    var n;
    this.outletElementsByName.has(s, t) && (this.outletsByName.delete(s, e), this.outletElementsByName.delete(s, t), (n = this.selectorObserverMap.get(s)) === null || n === void 0 || n.pause(() => this.delegate.outletDisconnected(e, t, s)));
  }
  disconnectAllOutlets() {
    for (const e of this.outletElementsByName.keys)
      for (const t of this.outletElementsByName.getValuesForKey(e))
        for (const s of this.outletsByName.getValuesForKey(e))
          this.disconnectOutlet(s, t, e);
  }
  updateSelectorObserverForOutlet(e) {
    const t = this.selectorObserverMap.get(e);
    t && (t.selector = this.selector(e));
  }
  setupSelectorObserverForOutlet(e) {
    const t = this.selector(e), s = new ht(document.body, t, this, { outletName: e });
    this.selectorObserverMap.set(e, s), s.start();
  }
  setupAttributeObserverForOutlet(e) {
    const t = this.attributeNameForOutletName(e), s = new Ce(this.scope.element, t, this);
    this.attributeObserverMap.set(e, s), s.start();
  }
  selector(e) {
    return this.scope.outlets.getSelectorForOutletName(e);
  }
  attributeNameForOutletName(e) {
    return this.scope.schema.outletAttributeForScope(this.identifier, e);
  }
  getOutletNameFromOutletAttributeName(e) {
    return this.outletDefinitions.find((t) => this.attributeNameForOutletName(t) === e);
  }
  get outletDependencies() {
    const e = new S();
    return this.router.modules.forEach((t) => {
      const s = t.definition.controllerConstructor;
      x(s, "outlets").forEach((i) => e.add(i, t.identifier));
    }), e;
  }
  get outletDefinitions() {
    return this.outletDependencies.getKeysForValue(this.identifier);
  }
  get dependentControllerIdentifiers() {
    return this.outletDependencies.getValuesForKey(this.identifier);
  }
  get dependentContexts() {
    const e = this.dependentControllerIdentifiers;
    return this.router.contexts.filter((t) => e.includes(t.identifier));
  }
  hasOutlet(e, t) {
    return !!this.getOutlet(e, t) || !!this.getOutletFromMap(e, t);
  }
  getOutlet(e, t) {
    return this.application.getControllerForElementAndIdentifier(e, t);
  }
  getOutletFromMap(e, t) {
    return this.outletsByName.getValuesForKey(t).find((s) => s.element === e);
  }
  get scope() {
    return this.context.scope;
  }
  get schema() {
    return this.context.schema;
  }
  get identifier() {
    return this.context.identifier;
  }
  get application() {
    return this.context.application;
  }
  get router() {
    return this.application.router;
  }
}
class wt {
  constructor(e, t) {
    this.logDebugActivity = (s, n = {}) => {
      const { identifier: i, controller: o, element: d } = this;
      n = Object.assign({ identifier: i, controller: o, element: d }, n), this.application.logDebugActivity(this.identifier, s, n);
    }, this.module = e, this.scope = t, this.controller = new e.controllerConstructor(this), this.bindingObserver = new gt(this, this.dispatcher), this.valueObserver = new mt(this, this.controller), this.targetObserver = new bt(this, this), this.outletObserver = new At(this, this);
    try {
      this.controller.initialize(), this.logDebugActivity("initialize");
    } catch (s) {
      this.handleError(s, "initializing controller");
    }
  }
  connect() {
    this.bindingObserver.start(), this.valueObserver.start(), this.targetObserver.start(), this.outletObserver.start();
    try {
      this.controller.connect(), this.logDebugActivity("connect");
    } catch (e) {
      this.handleError(e, "connecting controller");
    }
  }
  refresh() {
    this.outletObserver.refresh();
  }
  disconnect() {
    try {
      this.controller.disconnect(), this.logDebugActivity("disconnect");
    } catch (e) {
      this.handleError(e, "disconnecting controller");
    }
    this.outletObserver.stop(), this.targetObserver.stop(), this.valueObserver.stop(), this.bindingObserver.stop();
  }
  get application() {
    return this.module.application;
  }
  get identifier() {
    return this.module.identifier;
  }
  get schema() {
    return this.application.schema;
  }
  get dispatcher() {
    return this.application.dispatcher;
  }
  get element() {
    return this.scope.element;
  }
  get parentElement() {
    return this.element.parentElement;
  }
  handleError(e, t, s = {}) {
    const { identifier: n, controller: i, element: o } = this;
    s = Object.assign({ identifier: n, controller: i, element: o }, s), this.application.handleError(e, `Error ${t}`, s);
  }
  targetConnected(e, t) {
    this.invokeControllerMethod(`${t}TargetConnected`, e);
  }
  targetDisconnected(e, t) {
    this.invokeControllerMethod(`${t}TargetDisconnected`, e);
  }
  outletConnected(e, t, s) {
    this.invokeControllerMethod(`${Z(s)}OutletConnected`, e, t);
  }
  outletDisconnected(e, t, s) {
    this.invokeControllerMethod(`${Z(s)}OutletDisconnected`, e, t);
  }
  invokeControllerMethod(e, ...t) {
    const s = this.controller;
    typeof s[e] == "function" && s[e](...t);
  }
}
function Mt(r) {
  return Ot(r, kt(r));
}
function Ot(r, e) {
  const t = Ft(r), s = Ct(r.prototype, e);
  return Object.defineProperties(t.prototype, s), t;
}
function kt(r) {
  return x(r, "blessings").reduce((t, s) => {
    const n = s(r);
    for (const i in n) {
      const o = t[i] || {};
      t[i] = Object.assign(o, n[i]);
    }
    return t;
  }, {});
}
function Ct(r, e) {
  return St(e).reduce((t, s) => {
    const n = Tt(r, e, s);
    return n && Object.assign(t, { [s]: n }), t;
  }, {});
}
function Tt(r, e, t) {
  const s = Object.getOwnPropertyDescriptor(r, t);
  if (!(s && "value" in s)) {
    const i = Object.getOwnPropertyDescriptor(e, t).value;
    return s && (i.get = s.get || i.get, i.set = s.set || i.set), i;
  }
}
const St = typeof Object.getOwnPropertySymbols == "function" ? (r) => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)] : Object.getOwnPropertyNames, Ft = (() => {
  function r(t) {
    function s() {
      return Reflect.construct(t, arguments, new.target);
    }
    return s.prototype = Object.create(t.prototype, {
      constructor: { value: s }
    }), Reflect.setPrototypeOf(s, t), s;
  }
  function e() {
    const s = r(function() {
      this.a.call(this);
    });
    return s.prototype.a = function() {
    }, new s();
  }
  try {
    return e(), r;
  } catch {
    return (s) => class extends s {
    };
  }
})();
function It(r) {
  return {
    identifier: r.identifier,
    controllerConstructor: Mt(r.controllerConstructor)
  };
}
class Dt {
  constructor(e, t) {
    this.application = e, this.definition = It(t), this.contextsByScope = /* @__PURE__ */ new WeakMap(), this.connectedContexts = /* @__PURE__ */ new Set();
  }
  get identifier() {
    return this.definition.identifier;
  }
  get controllerConstructor() {
    return this.definition.controllerConstructor;
  }
  get contexts() {
    return Array.from(this.connectedContexts);
  }
  connectContextForScope(e) {
    const t = this.fetchContextForScope(e);
    this.connectedContexts.add(t), t.connect();
  }
  disconnectContextForScope(e) {
    const t = this.contextsByScope.get(e);
    t && (this.connectedContexts.delete(t), t.disconnect());
  }
  fetchContextForScope(e) {
    let t = this.contextsByScope.get(e);
    return t || (t = new wt(this, e), this.contextsByScope.set(e, t)), t;
  }
}
class Lt {
  constructor(e) {
    this.scope = e;
  }
  has(e) {
    return this.data.has(this.getDataKey(e));
  }
  get(e) {
    return this.getAll(e)[0];
  }
  getAll(e) {
    const t = this.data.get(this.getDataKey(e)) || "";
    return st(t);
  }
  getAttributeName(e) {
    return this.data.getAttributeNameForKey(this.getDataKey(e));
  }
  getDataKey(e) {
    return `${e}-class`;
  }
  get data() {
    return this.scope.data;
  }
}
class Pt {
  constructor(e) {
    this.scope = e;
  }
  get element() {
    return this.scope.element;
  }
  get identifier() {
    return this.scope.identifier;
  }
  get(e) {
    const t = this.getAttributeNameForKey(e);
    return this.element.getAttribute(t);
  }
  set(e, t) {
    const s = this.getAttributeNameForKey(e);
    return this.element.setAttribute(s, t), this.get(e);
  }
  has(e) {
    const t = this.getAttributeNameForKey(e);
    return this.element.hasAttribute(t);
  }
  delete(e) {
    if (this.has(e)) {
      const t = this.getAttributeNameForKey(e);
      return this.element.removeAttribute(t), !0;
    } else
      return !1;
  }
  getAttributeNameForKey(e) {
    return `data-${this.identifier}-${Oe(e)}`;
  }
}
class Nt {
  constructor(e) {
    this.warnedKeysByObject = /* @__PURE__ */ new WeakMap(), this.logger = e;
  }
  warn(e, t, s) {
    let n = this.warnedKeysByObject.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.warnedKeysByObject.set(e, n)), n.has(t) || (n.add(t), this.logger.warn(s, e));
  }
}
function te(r, e) {
  return `[${r}~="${e}"]`;
}
class $t {
  constructor(e) {
    this.scope = e;
  }
  get element() {
    return this.scope.element;
  }
  get identifier() {
    return this.scope.identifier;
  }
  get schema() {
    return this.scope.schema;
  }
  has(e) {
    return this.find(e) != null;
  }
  find(...e) {
    return e.reduce((t, s) => t || this.findTarget(s) || this.findLegacyTarget(s), void 0);
  }
  findAll(...e) {
    return e.reduce((t, s) => [
      ...t,
      ...this.findAllTargets(s),
      ...this.findAllLegacyTargets(s)
    ], []);
  }
  findTarget(e) {
    const t = this.getSelectorForTargetName(e);
    return this.scope.findElement(t);
  }
  findAllTargets(e) {
    const t = this.getSelectorForTargetName(e);
    return this.scope.findAllElements(t);
  }
  getSelectorForTargetName(e) {
    const t = this.schema.targetAttributeForScope(this.identifier);
    return te(t, e);
  }
  findLegacyTarget(e) {
    const t = this.getLegacySelectorForTargetName(e);
    return this.deprecate(this.scope.findElement(t), e);
  }
  findAllLegacyTargets(e) {
    const t = this.getLegacySelectorForTargetName(e);
    return this.scope.findAllElements(t).map((s) => this.deprecate(s, e));
  }
  getLegacySelectorForTargetName(e) {
    const t = `${this.identifier}.${e}`;
    return te(this.schema.targetAttribute, t);
  }
  deprecate(e, t) {
    if (e) {
      const { identifier: s } = this, n = this.schema.targetAttribute, i = this.schema.targetAttributeForScope(s);
      this.guide.warn(e, `target:${t}`, `Please replace ${n}="${s}.${t}" with ${i}="${t}". The ${n} attribute is deprecated and will be removed in a future version of Stimulus.`);
    }
    return e;
  }
  get guide() {
    return this.scope.guide;
  }
}
class Bt {
  constructor(e, t) {
    this.scope = e, this.controllerElement = t;
  }
  get element() {
    return this.scope.element;
  }
  get identifier() {
    return this.scope.identifier;
  }
  get schema() {
    return this.scope.schema;
  }
  has(e) {
    return this.find(e) != null;
  }
  find(...e) {
    return e.reduce((t, s) => t || this.findOutlet(s), void 0);
  }
  findAll(...e) {
    return e.reduce((t, s) => [...t, ...this.findAllOutlets(s)], []);
  }
  getSelectorForOutletName(e) {
    const t = this.schema.outletAttributeForScope(this.identifier, e);
    return this.controllerElement.getAttribute(t);
  }
  findOutlet(e) {
    const t = this.getSelectorForOutletName(e);
    if (t)
      return this.findElement(t, e);
  }
  findAllOutlets(e) {
    const t = this.getSelectorForOutletName(e);
    return t ? this.findAllElements(t, e) : [];
  }
  findElement(e, t) {
    return this.scope.queryElements(e).filter((n) => this.matchesElement(n, e, t))[0];
  }
  findAllElements(e, t) {
    return this.scope.queryElements(e).filter((n) => this.matchesElement(n, e, t));
  }
  matchesElement(e, t, s) {
    const n = e.getAttribute(this.scope.schema.controllerAttribute) || "";
    return e.matches(t) && n.split(" ").includes(s);
  }
}
class ie {
  constructor(e, t, s, n) {
    this.targets = new $t(this), this.classes = new Lt(this), this.data = new Pt(this), this.containsElement = (i) => i.closest(this.controllerSelector) === this.element, this.schema = e, this.element = t, this.identifier = s, this.guide = new Nt(n), this.outlets = new Bt(this.documentScope, t);
  }
  findElement(e) {
    return this.element.matches(e) ? this.element : this.queryElements(e).find(this.containsElement);
  }
  findAllElements(e) {
    return [
      ...this.element.matches(e) ? [this.element] : [],
      ...this.queryElements(e).filter(this.containsElement)
    ];
  }
  queryElements(e) {
    return Array.from(this.element.querySelectorAll(e));
  }
  get controllerSelector() {
    return te(this.schema.controllerAttribute, this.identifier);
  }
  get isDocumentScope() {
    return this.element === document.documentElement;
  }
  get documentScope() {
    return this.isDocumentScope ? this : new ie(this.schema, document.documentElement, this.identifier, this.guide.logger);
  }
}
class Vt {
  constructor(e, t, s) {
    this.element = e, this.schema = t, this.delegate = s, this.valueListObserver = new Fe(this.element, this.controllerAttribute, this), this.scopesByIdentifierByElement = /* @__PURE__ */ new WeakMap(), this.scopeReferenceCounts = /* @__PURE__ */ new WeakMap();
  }
  start() {
    this.valueListObserver.start();
  }
  stop() {
    this.valueListObserver.stop();
  }
  get controllerAttribute() {
    return this.schema.controllerAttribute;
  }
  parseValueForToken(e) {
    const { element: t, content: s } = e;
    return this.parseValueForElementAndIdentifier(t, s);
  }
  parseValueForElementAndIdentifier(e, t) {
    const s = this.fetchScopesByIdentifierForElement(e);
    let n = s.get(t);
    return n || (n = this.delegate.createScopeForElementAndIdentifier(e, t), s.set(t, n)), n;
  }
  elementMatchedValue(e, t) {
    const s = (this.scopeReferenceCounts.get(t) || 0) + 1;
    this.scopeReferenceCounts.set(t, s), s == 1 && this.delegate.scopeConnected(t);
  }
  elementUnmatchedValue(e, t) {
    const s = this.scopeReferenceCounts.get(t);
    s && (this.scopeReferenceCounts.set(t, s - 1), s == 1 && this.delegate.scopeDisconnected(t));
  }
  fetchScopesByIdentifierForElement(e) {
    let t = this.scopesByIdentifierByElement.get(e);
    return t || (t = /* @__PURE__ */ new Map(), this.scopesByIdentifierByElement.set(e, t)), t;
  }
}
class Rt {
  constructor(e) {
    this.application = e, this.scopeObserver = new Vt(this.element, this.schema, this), this.scopesByIdentifier = new S(), this.modulesByIdentifier = /* @__PURE__ */ new Map();
  }
  get element() {
    return this.application.element;
  }
  get schema() {
    return this.application.schema;
  }
  get logger() {
    return this.application.logger;
  }
  get controllerAttribute() {
    return this.schema.controllerAttribute;
  }
  get modules() {
    return Array.from(this.modulesByIdentifier.values());
  }
  get contexts() {
    return this.modules.reduce((e, t) => e.concat(t.contexts), []);
  }
  start() {
    this.scopeObserver.start();
  }
  stop() {
    this.scopeObserver.stop();
  }
  loadDefinition(e) {
    this.unloadIdentifier(e.identifier);
    const t = new Dt(this.application, e);
    this.connectModule(t);
    const s = e.controllerConstructor.afterLoad;
    s && s.call(e.controllerConstructor, e.identifier, this.application);
  }
  unloadIdentifier(e) {
    const t = this.modulesByIdentifier.get(e);
    t && this.disconnectModule(t);
  }
  getContextForElementAndIdentifier(e, t) {
    const s = this.modulesByIdentifier.get(t);
    if (s)
      return s.contexts.find((n) => n.element == e);
  }
  proposeToConnectScopeForElementAndIdentifier(e, t) {
    const s = this.scopeObserver.parseValueForElementAndIdentifier(e, t);
    s ? this.scopeObserver.elementMatchedValue(s.element, s) : console.error(`Couldn't find or create scope for identifier: "${t}" and element:`, e);
  }
  handleError(e, t, s) {
    this.application.handleError(e, t, s);
  }
  createScopeForElementAndIdentifier(e, t) {
    return new ie(this.schema, e, t, this.logger);
  }
  scopeConnected(e) {
    this.scopesByIdentifier.add(e.identifier, e);
    const t = this.modulesByIdentifier.get(e.identifier);
    t && t.connectContextForScope(e);
  }
  scopeDisconnected(e) {
    this.scopesByIdentifier.delete(e.identifier, e);
    const t = this.modulesByIdentifier.get(e.identifier);
    t && t.disconnectContextForScope(e);
  }
  connectModule(e) {
    this.modulesByIdentifier.set(e.identifier, e), this.scopesByIdentifier.getValuesForKey(e.identifier).forEach((s) => e.connectContextForScope(s));
  }
  disconnectModule(e) {
    this.modulesByIdentifier.delete(e.identifier), this.scopesByIdentifier.getValuesForKey(e.identifier).forEach((s) => e.disconnectContextForScope(s));
  }
}
const jt = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: (r) => `data-${r}-target`,
  outletAttributeForScope: (r, e) => `data-${r}-${e}-outlet`,
  keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, pe("abcdefghijklmnopqrstuvwxyz".split("").map((r) => [r, r]))), pe("0123456789".split("").map((r) => [r, r])))
};
function pe(r) {
  return r.reduce((e, [t, s]) => Object.assign(Object.assign({}, e), { [t]: s }), {});
}
class xt {
  constructor(e = document.documentElement, t = jt) {
    this.logger = console, this.debug = !1, this.logDebugActivity = (s, n, i = {}) => {
      this.debug && this.logFormattedMessage(s, n, i);
    }, this.element = e, this.schema = t, this.dispatcher = new Ge(this), this.router = new Rt(this), this.actionDescriptorFilters = Object.assign({}, Xe);
  }
  static start(e, t) {
    const s = new this(e, t);
    return s.start(), s;
  }
  async start() {
    await Ut(), this.logDebugActivity("application", "starting"), this.dispatcher.start(), this.router.start(), this.logDebugActivity("application", "start");
  }
  stop() {
    this.logDebugActivity("application", "stopping"), this.dispatcher.stop(), this.router.stop(), this.logDebugActivity("application", "stop");
  }
  register(e, t) {
    this.load({ identifier: e, controllerConstructor: t });
  }
  registerActionOption(e, t) {
    this.actionDescriptorFilters[e] = t;
  }
  load(e, ...t) {
    (Array.isArray(e) ? e : [e, ...t]).forEach((n) => {
      n.controllerConstructor.shouldLoad && this.router.loadDefinition(n);
    });
  }
  unload(e, ...t) {
    (Array.isArray(e) ? e : [e, ...t]).forEach((n) => this.router.unloadIdentifier(n));
  }
  get controllers() {
    return this.router.contexts.map((e) => e.controller);
  }
  getControllerForElementAndIdentifier(e, t) {
    const s = this.router.getContextForElementAndIdentifier(e, t);
    return s ? s.controller : null;
  }
  handleError(e, t, s) {
    var n;
    this.logger.error(`%s

%o

%o`, t, e, s), (n = window.onerror) === null || n === void 0 || n.call(window, t, "", 0, 0, e);
  }
  logFormattedMessage(e, t, s = {}) {
    s = Object.assign({ application: this }, s), this.logger.groupCollapsed(`${e} #${t}`), this.logger.log("details:", Object.assign({}, s)), this.logger.groupEnd();
  }
}
function Ut() {
  return new Promise((r) => {
    document.readyState == "loading" ? document.addEventListener("DOMContentLoaded", () => r()) : r();
  });
}
function qt(r) {
  return x(r, "classes").reduce((t, s) => Object.assign(t, Ht(s)), {});
}
function Ht(r) {
  return {
    [`${r}Class`]: {
      get() {
        const { classes: e } = this;
        if (e.has(r))
          return e.get(r);
        {
          const t = e.getAttributeName(r);
          throw new Error(`Missing attribute "${t}"`);
        }
      }
    },
    [`${r}Classes`]: {
      get() {
        return this.classes.getAll(r);
      }
    },
    [`has${j(r)}Class`]: {
      get() {
        return this.classes.has(r);
      }
    }
  };
}
function Kt(r) {
  return x(r, "outlets").reduce((t, s) => Object.assign(t, _t(s)), {});
}
function ge(r, e, t) {
  return r.application.getControllerForElementAndIdentifier(e, t);
}
function me(r, e, t) {
  let s = ge(r, e, t);
  if (s || (r.application.router.proposeToConnectScopeForElementAndIdentifier(e, t), s = ge(r, e, t), s))
    return s;
}
function _t(r) {
  const e = Z(r);
  return {
    [`${e}Outlet`]: {
      get() {
        const t = this.outlets.find(r), s = this.outlets.getSelectorForOutletName(r);
        if (t) {
          const n = me(this, t, r);
          if (n)
            return n;
          throw new Error(`The provided outlet element is missing an outlet controller "${r}" instance for host controller "${this.identifier}"`);
        }
        throw new Error(`Missing outlet element "${r}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${s}".`);
      }
    },
    [`${e}Outlets`]: {
      get() {
        const t = this.outlets.findAll(r);
        return t.length > 0 ? t.map((s) => {
          const n = me(this, s, r);
          if (n)
            return n;
          console.warn(`The provided outlet element is missing an outlet controller "${r}" instance for host controller "${this.identifier}"`, s);
        }).filter((s) => s) : [];
      }
    },
    [`${e}OutletElement`]: {
      get() {
        const t = this.outlets.find(r), s = this.outlets.getSelectorForOutletName(r);
        if (t)
          return t;
        throw new Error(`Missing outlet element "${r}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${s}".`);
      }
    },
    [`${e}OutletElements`]: {
      get() {
        return this.outlets.findAll(r);
      }
    },
    [`has${j(e)}Outlet`]: {
      get() {
        return this.outlets.has(r);
      }
    }
  };
}
function zt(r) {
  return x(r, "targets").reduce((t, s) => Object.assign(t, Wt(s)), {});
}
function Wt(r) {
  return {
    [`${r}Target`]: {
      get() {
        const e = this.targets.find(r);
        if (e)
          return e;
        throw new Error(`Missing target element "${r}" for "${this.identifier}" controller`);
      }
    },
    [`${r}Targets`]: {
      get() {
        return this.targets.findAll(r);
      }
    },
    [`has${j(r)}Target`]: {
      get() {
        return this.targets.has(r);
      }
    }
  };
}
function Jt(r) {
  const e = vt(r, "values"), t = {
    valueDescriptorMap: {
      get() {
        return e.reduce((s, n) => {
          const i = De(n, this.identifier), o = this.data.getAttributeNameForKey(i.key);
          return Object.assign(s, { [o]: i });
        }, {});
      }
    }
  };
  return e.reduce((s, n) => Object.assign(s, Gt(n)), t);
}
function Gt(r, e) {
  const t = De(r, e), { key: s, name: n, reader: i, writer: o } = t;
  return {
    [n]: {
      get() {
        const d = this.data.get(s);
        return d !== null ? i(d) : t.defaultValue;
      },
      set(d) {
        d === void 0 ? this.data.delete(s) : this.data.set(s, o(d));
      }
    },
    [`has${j(n)}`]: {
      get() {
        return this.data.has(s) || t.hasCustomDefaultValue;
      }
    }
  };
}
function De([r, e], t) {
  return Zt({
    controller: t,
    token: r,
    typeDefinition: e
  });
}
function J(r) {
  switch (r) {
    case Array:
      return "array";
    case Boolean:
      return "boolean";
    case Number:
      return "number";
    case Object:
      return "object";
    case String:
      return "string";
  }
}
function V(r) {
  switch (typeof r) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
  }
  if (Array.isArray(r))
    return "array";
  if (Object.prototype.toString.call(r) === "[object Object]")
    return "object";
}
function Xt(r) {
  const { controller: e, token: t, typeObject: s } = r, n = ue(s.type), i = ue(s.default), o = n && i, d = n && !i, h = !n && i, u = J(s.type), f = V(r.typeObject.default);
  if (d)
    return u;
  if (h)
    return f;
  if (u !== f) {
    const b = e ? `${e}.${t}` : t;
    throw new Error(`The specified default value for the Stimulus Value "${b}" must match the defined type "${u}". The provided default value of "${s.default}" is of type "${f}".`);
  }
  if (o)
    return u;
}
function Qt(r) {
  const { controller: e, token: t, typeDefinition: s } = r, i = Xt({ controller: e, token: t, typeObject: s }), o = V(s), d = J(s), h = i || o || d;
  if (h)
    return h;
  const u = e ? `${e}.${s}` : t;
  throw new Error(`Unknown value type "${u}" for "${t}" value`);
}
function Yt(r) {
  const e = J(r);
  if (e)
    return be[e];
  const t = ee(r, "default"), s = ee(r, "type"), n = r;
  if (t)
    return n.default;
  if (s) {
    const { type: i } = n, o = J(i);
    if (o)
      return be[o];
  }
  return r;
}
function Zt(r) {
  const { token: e, typeDefinition: t } = r, s = `${Oe(e)}-value`, n = Qt(r);
  return {
    type: n,
    key: s,
    name: ne(s),
    get defaultValue() {
      return Yt(t);
    },
    get hasCustomDefaultValue() {
      return V(t) !== void 0;
    },
    reader: es[n],
    writer: ve[n] || ve.default
  };
}
const be = {
  get array() {
    return [];
  },
  boolean: !1,
  number: 0,
  get object() {
    return {};
  },
  string: ""
}, es = {
  array(r) {
    const e = JSON.parse(r);
    if (!Array.isArray(e))
      throw new TypeError(`expected value of type "array" but instead got value "${r}" of type "${V(e)}"`);
    return e;
  },
  boolean(r) {
    return !(r == "0" || String(r).toLowerCase() == "false");
  },
  number(r) {
    return Number(r.replace(/_/g, ""));
  },
  object(r) {
    const e = JSON.parse(r);
    if (e === null || typeof e != "object" || Array.isArray(e))
      throw new TypeError(`expected value of type "object" but instead got value "${r}" of type "${V(e)}"`);
    return e;
  },
  string(r) {
    return r;
  }
}, ve = {
  default: ts,
  array: ye,
  object: ye
};
function ye(r) {
  return JSON.stringify(r);
}
function ts(r) {
  return `${r}`;
}
class F {
  constructor(e) {
    this.context = e;
  }
  static get shouldLoad() {
    return !0;
  }
  static afterLoad(e, t) {
  }
  get application() {
    return this.context.application;
  }
  get scope() {
    return this.context.scope;
  }
  get element() {
    return this.scope.element;
  }
  get identifier() {
    return this.scope.identifier;
  }
  get targets() {
    return this.scope.targets;
  }
  get outlets() {
    return this.scope.outlets;
  }
  get classes() {
    return this.scope.classes;
  }
  get data() {
    return this.scope.data;
  }
  initialize() {
  }
  connect() {
  }
  disconnect() {
  }
  dispatch(e, { target: t = this.element, detail: s = {}, prefix: n = this.identifier, bubbles: i = !0, cancelable: o = !0 } = {}) {
    const d = n ? `${n}:${e}` : e, h = new CustomEvent(d, { detail: s, bubbles: i, cancelable: o });
    return t.dispatchEvent(h), h;
  }
}
F.blessings = [
  qt,
  zt,
  Jt,
  Kt
];
F.targets = [];
F.outlets = [];
F.values = {};
class ss {
  constructor(e, t, s) {
    this.isResolved = !1, this.promise = e, this.promise.then((n) => (this.isResolved = !0, n)), this.actions = t, this.updatedModels = s;
  }
  containsOneOfActions(e) {
    return this.actions.filter((t) => e.includes(t)).length > 0;
  }
  areAnyModelsUpdated(e) {
    return this.updatedModels.filter((t) => e.includes(t)).length > 0;
  }
}
class rs {
  constructor(e, t = "post") {
    this.url = e, this.method = t;
  }
  buildRequest(e, t, s, n, i, o) {
    const d = this.url.split("?");
    let [h] = d;
    const [, u] = d, f = new URLSearchParams(u || ""), b = {};
    b.headers = {
      Accept: "application/vnd.live-component+html",
      "X-Requested-With": "XMLHttpRequest"
    };
    const y = Object.entries(o).reduce((w, M) => w + M.length, 0), k = Object.keys(n).length > 0;
    if (t.length === 0 && y === 0 && this.method === "get" && this.willDataFitInUrl(JSON.stringify(e), JSON.stringify(s), f, JSON.stringify(n), JSON.stringify(i)))
      f.set("props", JSON.stringify(e)), f.set("updated", JSON.stringify(s)), Object.keys(i).length > 0 && f.set("propsFromParent", JSON.stringify(i)), k && f.set("children", JSON.stringify(n)), b.method = "GET";
    else {
      b.method = "POST";
      const w = { props: e, updated: s };
      Object.keys(i).length > 0 && (w.propsFromParent = i), k && (w.children = n), t.length > 0 && (t.length === 1 ? (w.args = t[0].args, h += `/${encodeURIComponent(t[0].name)}`) : (h += "/_batch", w.actions = t));
      const M = new FormData();
      M.append("data", JSON.stringify(w));
      for (const [_, z] of Object.entries(o)) {
        const X = z.length;
        for (let P = 0; P < X; ++P)
          M.append(_, z[P]);
      }
      b.body = M;
    }
    const K = f.toString();
    return {
      url: `${h}${K.length > 0 ? `?${K}` : ""}`,
      fetchOptions: b
    };
  }
  willDataFitInUrl(e, t, s, n, i) {
    return (new URLSearchParams(e + t + n + i).toString() + s.toString()).length < 1500;
  }
}
class ns {
  constructor(e, t = "post") {
    this.requestBuilder = new rs(e, t);
  }
  makeRequest(e, t, s, n, i, o) {
    const { url: d, fetchOptions: h } = this.requestBuilder.buildRequest(e, t, s, n, i, o);
    return new ss(fetch(d, h), t.map((u) => u.name), Object.keys(s));
  }
}
class is {
  constructor(e) {
    this.response = e;
  }
  async getBody() {
    return this.body || (this.body = await this.response.text()), this.body;
  }
}
function B(r) {
  return r.innerHTML ? r.outerHTML.slice(0, r.outerHTML.indexOf(r.innerHTML)) : r.outerHTML;
}
let G = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new Map();
const os = (r) => {
  G.set(r.element, r), R.set(r, r.name);
}, as = (r) => {
  G.delete(r.element), R.delete(r);
}, ls = (r) => new Promise((e, t) => {
  let s = 0;
  const n = 10, i = setInterval(() => {
    const o = G.get(r);
    o && (clearInterval(i), e(o)), s++, s > n && (clearInterval(i), t(new Error(`Component not found for element ${B(r)}`)));
  }, 5);
}), cs = (r, e, t) => {
  const s = [];
  return R.forEach((n, i) => {
    e && (r === i || !i.element.contains(r.element)) || t && n !== t || s.push(i);
  }), s;
}, hs = (r) => {
  const e = [];
  return R.forEach((t, s) => {
    if (r === s || !r.element.contains(s.element))
      return;
    let n = !1;
    R.forEach((i, o) => {
      n || o !== s && o.element.contains(s.element) && (n = !0);
    }), e.push(s);
  }), e;
}, us = (r) => {
  let e = r.element.parentElement;
  for (; e; ) {
    const t = G.get(e);
    if (t)
      return t;
    e = e.parentElement;
  }
  return null;
};
class ds {
  constructor() {
    this.hooks = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    const s = this.hooks.get(e) || [];
    s.push(t), this.hooks.set(e, s);
  }
  unregister(e, t) {
    const s = this.hooks.get(e) || [], n = s.indexOf(t);
    n !== -1 && (s.splice(n, 1), this.hooks.set(e, s));
  }
  triggerHook(e, ...t) {
    (this.hooks.get(e) || []).forEach((n) => n(...t));
  }
}
class Ee {
  constructor() {
    this.changedItems = /* @__PURE__ */ new Map(), this.removedItems = /* @__PURE__ */ new Map();
  }
  setItem(e, t, s) {
    if (this.removedItems.has(e)) {
      const n = this.removedItems.get(e);
      if (this.removedItems.delete(e), n.original === t)
        return;
    }
    if (this.changedItems.has(e)) {
      const n = this.changedItems.get(e);
      if (n.original === t) {
        this.changedItems.delete(e);
        return;
      }
      this.changedItems.set(e, { original: n.original, new: t });
      return;
    }
    this.changedItems.set(e, { original: s, new: t });
  }
  removeItem(e, t) {
    let s = t;
    this.changedItems.has(e) && (s = this.changedItems.get(e).original, this.changedItems.delete(e), s === null) || this.removedItems.has(e) || this.removedItems.set(e, { original: s });
  }
  getChangedItems() {
    return Array.from(this.changedItems, ([e, { new: t }]) => ({ name: e, value: t }));
  }
  getRemovedItems() {
    return Array.from(this.removedItems.keys());
  }
  isEmpty() {
    return this.changedItems.size === 0 && this.removedItems.size === 0;
  }
}
class fs {
  constructor() {
    this.addedClasses = /* @__PURE__ */ new Set(), this.removedClasses = /* @__PURE__ */ new Set(), this.styleChanges = new Ee(), this.attributeChanges = new Ee();
  }
  addClass(e) {
    this.removedClasses.delete(e) || this.addedClasses.add(e);
  }
  removeClass(e) {
    this.addedClasses.delete(e) || this.removedClasses.add(e);
  }
  addStyle(e, t, s) {
    this.styleChanges.setItem(e, t, s);
  }
  removeStyle(e, t) {
    this.styleChanges.removeItem(e, t);
  }
  addAttribute(e, t, s) {
    this.attributeChanges.setItem(e, t, s);
  }
  removeAttribute(e, t) {
    this.attributeChanges.removeItem(e, t);
  }
  getAddedClasses() {
    return [...this.addedClasses];
  }
  getRemovedClasses() {
    return [...this.removedClasses];
  }
  getChangedStyles() {
    return this.styleChanges.getChangedItems();
  }
  getRemovedStyles() {
    return this.styleChanges.getRemovedItems();
  }
  getChangedAttributes() {
    return this.attributeChanges.getChangedItems();
  }
  getRemovedAttributes() {
    return this.attributeChanges.getRemovedItems();
  }
  applyToElement(e) {
    e.classList.add(...this.addedClasses), e.classList.remove(...this.removedClasses), this.styleChanges.getChangedItems().forEach((t) => {
      e.style.setProperty(t.name, t.value);
    }), this.styleChanges.getRemovedItems().forEach((t) => {
      e.style.removeProperty(t);
    }), this.attributeChanges.getChangedItems().forEach((t) => {
      e.setAttribute(t.name, t.value);
    }), this.attributeChanges.getRemovedItems().forEach((t) => {
      e.removeAttribute(t);
    });
  }
  isEmpty() {
    return this.addedClasses.size === 0 && this.removedClasses.size === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
  }
}
class ps {
  constructor(e, t) {
    this.changedElements = /* @__PURE__ */ new WeakMap(), this.changedElementsCount = 0, this.addedElements = [], this.removedElements = [], this.isStarted = !1, this.element = e, this.shouldTrackChangeCallback = t, this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  start() {
    this.isStarted || (this.mutationObserver.observe(this.element, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeOldValue: !0
    }), this.isStarted = !0);
  }
  stop() {
    this.isStarted && (this.mutationObserver.disconnect(), this.isStarted = !1);
  }
  getChangedElement(e) {
    return this.changedElements.has(e) ? this.changedElements.get(e) : null;
  }
  getAddedElements() {
    return this.addedElements;
  }
  wasElementAdded(e) {
    return this.addedElements.includes(e);
  }
  handlePendingChanges() {
    this.onMutations(this.mutationObserver.takeRecords());
  }
  onMutations(e) {
    const t = /* @__PURE__ */ new WeakMap();
    for (const s of e) {
      const n = s.target;
      if (!this.shouldTrackChangeCallback(n) || this.isElementAddedByTranslation(n))
        continue;
      let i = !1;
      for (const o of this.addedElements)
        if (o.contains(n)) {
          i = !0;
          break;
        }
      if (!i)
        switch (s.type) {
          case "childList":
            this.handleChildListMutation(s);
            break;
          case "attributes":
            t.has(n) || t.set(n, []), t.get(n).includes(s.attributeName) || (this.handleAttributeMutation(s), t.set(n, [
              ...t.get(n),
              s.attributeName
            ]));
            break;
        }
    }
  }
  handleChildListMutation(e) {
    e.addedNodes.forEach((t) => {
      if (t instanceof Element) {
        if (this.removedElements.includes(t)) {
          this.removedElements.splice(this.removedElements.indexOf(t), 1);
          return;
        }
        this.isElementAddedByTranslation(t) || this.addedElements.push(t);
      }
    }), e.removedNodes.forEach((t) => {
      if (t instanceof Element) {
        if (this.addedElements.includes(t)) {
          this.addedElements.splice(this.addedElements.indexOf(t), 1);
          return;
        }
        this.removedElements.push(t);
      }
    });
  }
  handleAttributeMutation(e) {
    const t = e.target;
    this.changedElements.has(t) || (this.changedElements.set(t, new fs()), this.changedElementsCount++);
    const s = this.changedElements.get(t);
    switch (e.attributeName) {
      case "class":
        this.handleClassAttributeMutation(e, s);
        break;
      case "style":
        this.handleStyleAttributeMutation(e, s);
        break;
      default:
        this.handleGenericAttributeMutation(e, s);
    }
    s.isEmpty() && (this.changedElements.delete(t), this.changedElementsCount--);
  }
  handleClassAttributeMutation(e, t) {
    const s = e.target, i = (e.oldValue || "").match(/(\S+)/gu) || [], o = [].slice.call(s.classList), d = o.filter((u) => !i.includes(u)), h = i.filter((u) => !o.includes(u));
    d.forEach((u) => {
      t.addClass(u);
    }), h.forEach((u) => {
      t.removeClass(u);
    });
  }
  handleStyleAttributeMutation(e, t) {
    const s = e.target, n = e.oldValue || "", i = this.extractStyles(n), o = s.getAttribute("style") || "", d = this.extractStyles(o), h = Object.keys(d).filter((f) => i[f] === void 0 || i[f] !== d[f]), u = Object.keys(i).filter((f) => !d[f]);
    h.forEach((f) => {
      t.addStyle(f, d[f], i[f] === void 0 ? null : i[f]);
    }), u.forEach((f) => {
      t.removeStyle(f, i[f]);
    });
  }
  handleGenericAttributeMutation(e, t) {
    const s = e.attributeName, n = e.target;
    let i = e.oldValue, o = n.getAttribute(s);
    if (i === s && (i = ""), o === s && (o = ""), !n.hasAttribute(s)) {
      if (i === null)
        return;
      t.removeAttribute(s, e.oldValue);
      return;
    }
    o !== i && t.addAttribute(s, n.getAttribute(s), e.oldValue);
  }
  extractStyles(e) {
    const t = {};
    return e.split(";").forEach((s) => {
      const n = s.split(":");
      if (n.length === 1)
        return;
      const i = n[0].trim();
      t[i] = n.slice(1).join(":").trim();
    }), t;
  }
  isElementAddedByTranslation(e) {
    return e.tagName === "FONT" && e.getAttribute("style") === "vertical-align: inherit;";
  }
}
function I(r) {
  const e = [];
  if (!r)
    return e;
  let t = "", s = "", n = [], i = [], o = "action";
  const d = () => {
    if (t)
      return t;
    if (e.length === 0)
      throw new Error("Could not find any directives");
    return e[e.length - 1].action;
  }, h = () => {
    e.push({
      action: t,
      args: n,
      modifiers: i,
      getString: () => r
    }), t = "", s = "", n = [], i = [], o = "action";
  }, u = () => {
    n.push(s.trim()), s = "";
  }, f = () => {
    if (n.length > 1)
      throw new Error(`The modifier "${t}()" does not support multiple arguments.`);
    i.push({
      name: t,
      value: n.length > 0 ? n[0] : null
    }), t = "", n = [], o = "action";
  };
  for (let b = 0; b < r.length; b++) {
    const y = r[b];
    switch (o) {
      case "action":
        if (y === "(") {
          o = "arguments";
          break;
        }
        if (y === " ") {
          t && h();
          break;
        }
        if (y === "|") {
          f();
          break;
        }
        t += y;
        break;
      case "arguments":
        if (y === ")") {
          u(), o = "after_arguments";
          break;
        }
        if (y === ",") {
          u();
          break;
        }
        s += y;
        break;
      case "after_arguments":
        if (y === "|") {
          f();
          break;
        }
        if (y !== " ")
          throw new Error(`Missing space after ${d()}()`);
        h();
        break;
    }
  }
  switch (o) {
    case "action":
    case "after_arguments":
      t && h();
      break;
    default:
      throw new Error(`Did you forget to add a closing ")" after "${t}"?`);
  }
  return e;
}
function Ae(r) {
  const e = [];
  return r.forEach((t) => {
    e.push(...gs(t).split(" "));
  }), e;
}
function gs(r) {
  return r.replace(/[\s]+/g, " ").trim();
}
function D(r) {
  return r.replace(/\[]$/, "").split("[").map((e) => e.replace("]", "")).join(".");
}
function oe(r, e) {
  if (r instanceof HTMLInputElement) {
    if (r.type === "checkbox") {
      const t = L(r, !1);
      if (t !== null) {
        const s = e.get(t.action);
        if (Array.isArray(s))
          return we(r, s);
        if (Object(s) === s)
          return we(r, Object.values(s));
      }
      return r.hasAttribute("value") ? r.checked ? r.getAttribute("value") : null : r.checked;
    }
    return Pe(r);
  }
  return r instanceof HTMLSelectElement ? r.multiple ? Array.from(r.selectedOptions).map((t) => t.value) : r.value : r.dataset.value ? r.dataset.value : "value" in r ? r.value : r.hasAttribute("value") ? r.getAttribute("value") : null;
}
function se(r, e) {
  if (r instanceof HTMLInputElement) {
    if (r.type === "file")
      return;
    if (r.type === "radio") {
      r.checked = r.value == e;
      return;
    }
    if (r.type === "checkbox") {
      Array.isArray(e) ? r.checked = e.some((t) => t == r.value) : r.hasAttribute("value") ? r.checked = r.value == e : r.checked = e;
      return;
    }
  }
  if (r instanceof HTMLSelectElement) {
    const t = [].concat(e).map((s) => `${s}`);
    Array.from(r.options).forEach((s) => {
      s.selected = t.includes(s.value);
    });
    return;
  }
  e = e === void 0 ? "" : e, r.value = e;
}
function Le(r) {
  if (!r.dataset.model)
    return [];
  const e = I(r.dataset.model);
  return e.forEach((t) => {
    if (t.args.length > 0)
      throw new Error(`The data-model="${r.dataset.model}" format is invalid: it does not support passing arguments to the model.`);
    t.action = D(t.action);
  }), e;
}
function L(r, e = !0) {
  const t = Le(r);
  if (t.length > 0)
    return t[0];
  if (r.getAttribute("name")) {
    const s = r.closest("form");
    if (s && "model" in s.dataset) {
      const i = I(s.dataset.model || "*")[0];
      if (i.args.length > 0)
        throw new Error(`The data-model="${s.dataset.model}" format is invalid: it does not support passing arguments to the model.`);
      return i.action = D(r.getAttribute("name")), i;
    }
  }
  if (!e)
    return null;
  throw new Error(`Cannot determine the model name for "${B(r)}": the element must either have a "data-model" (or "name" attribute living inside a <form data-model="*">).`);
}
function U(r, e) {
  return e.element === r ? !0 : e.element.contains(r) ? r.closest('[data-controller~="live"]') === e.element : !1;
}
function Y(r) {
  const e = r.cloneNode(!0);
  if (!(e instanceof HTMLElement))
    throw new Error("Could not clone element");
  return e;
}
function ms(r) {
  const e = document.createElement("template");
  if (r = r.trim(), e.innerHTML = r, e.content.childElementCount > 1)
    throw new Error(`Component HTML contains ${e.content.childElementCount} elements, but only 1 root element is allowed.`);
  const t = e.content.firstElementChild;
  if (!t)
    throw new Error("Child not found");
  if (!(t instanceof HTMLElement))
    throw new Error(`Created element is not an HTMLElement: ${r.trim()}`);
  return t;
}
const we = (r, e) => {
  const t = [...e], s = Pe(r), n = e.indexOf(s);
  return r.checked ? (n === -1 && t.push(s), t) : (n > -1 && t.splice(n, 1), t);
}, Pe = (r) => r.dataset.value ? r.dataset.value : r.value;
var Me = /* @__PURE__ */ function() {
  let r = /* @__PURE__ */ new Set(), e = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: y,
      afterNodeAdded: y,
      beforeNodeMorphed: y,
      afterNodeMorphed: y,
      beforeNodeRemoved: y,
      afterNodeRemoved: y,
      beforeAttributeUpdated: y
    },
    head: {
      style: "merge",
      shouldPreserve: function(a) {
        return a.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function(a) {
        return a.getAttribute("im-re-append") === "true";
      },
      shouldRemove: y,
      afterHeadMorphed: y
    }
  };
  function t(a, l, c = {}) {
    a instanceof Document && (a = a.documentElement), typeof l == "string" && (l = P(l));
    let p = Ve(l), g = K(a, p, c);
    return s(a, p, g);
  }
  function s(a, l, c) {
    if (c.head.block) {
      let p = a.querySelector("head"), g = l.querySelector("head");
      if (p && g) {
        let m = b(g, p, c);
        Promise.all(m).then(function() {
          s(a, l, Object.assign(c, {
            head: {
              block: !1,
              ignore: !0
            }
          }));
        });
        return;
      }
    }
    if (c.morphStyle === "innerHTML")
      return o(l, a, c), a.children;
    if (c.morphStyle === "outerHTML" || c.morphStyle == null) {
      let p = je(l, a, c), g = p == null ? void 0 : p.previousSibling, m = p == null ? void 0 : p.nextSibling, v = i(a, p, c);
      return p ? Re(g, v, m) : [];
    } else
      throw "Do not understand how to morph style " + c.morphStyle;
  }
  function n(a, l) {
    return l.ignoreActiveValue && a === document.activeElement;
  }
  function i(a, l, c) {
    if (!(c.ignoreActive && a === document.activeElement)) return l == null ? c.callbacks.beforeNodeRemoved(a) === !1 ? a : (a.remove(), c.callbacks.afterNodeRemoved(a), null) : M(a, l) ? (c.callbacks.beforeNodeMorphed(a, l) === !1 || (a instanceof HTMLHeadElement && c.head.ignore || (a instanceof HTMLHeadElement && c.head.style !== "morph" ? b(l, a, c) : (h(l, a, c), n(a, c) || o(l, a, c))), c.callbacks.afterNodeMorphed(a, l)), a) : c.callbacks.beforeNodeRemoved(a) === !1 || c.callbacks.beforeNodeAdded(l) === !1 ? a : (a.parentElement.replaceChild(l, a), c.callbacks.afterNodeAdded(l), c.callbacks.afterNodeRemoved(a), l);
  }
  function o(a, l, c) {
    let p = a.firstChild, g = l.firstChild, m;
    for (; p; ) {
      if (m = p, p = m.nextSibling, g == null) {
        if (c.callbacks.beforeNodeAdded(m) === !1) return;
        l.appendChild(m), c.callbacks.afterNodeAdded(m), C(c, m);
        continue;
      }
      if (w(m, g, c)) {
        i(g, m, c), g = g.nextSibling, C(c, m);
        continue;
      }
      let v = z(a, l, m, g, c);
      if (v) {
        g = _(g, v, c), i(v, m, c), C(c, m);
        continue;
      }
      let E = X(a, l, m, g, c);
      if (E) {
        g = _(g, E, c), i(E, m, c), C(c, m);
        continue;
      }
      if (c.callbacks.beforeNodeAdded(m) === !1) return;
      l.insertBefore(m, g), c.callbacks.afterNodeAdded(m), C(c, m);
    }
    for (; g !== null; ) {
      let v = g;
      g = g.nextSibling, ae(v, c);
    }
  }
  function d(a, l, c, p) {
    return a === "value" && p.ignoreActiveValue && l === document.activeElement ? !0 : p.callbacks.beforeAttributeUpdated(a, l, c) === !1;
  }
  function h(a, l, c) {
    let p = a.nodeType;
    if (p === 1) {
      const g = a.attributes, m = l.attributes;
      for (const v of g)
        d(v.name, l, "update", c) || l.getAttribute(v.name) !== v.value && l.setAttribute(v.name, v.value);
      for (let v = m.length - 1; 0 <= v; v--) {
        const E = m[v];
        d(E.name, l, "remove", c) || a.hasAttribute(E.name) || l.removeAttribute(E.name);
      }
    }
    (p === 8 || p === 3) && l.nodeValue !== a.nodeValue && (l.nodeValue = a.nodeValue), n(l, c) || f(a, l, c);
  }
  function u(a, l, c, p) {
    if (a[c] !== l[c]) {
      let g = d(c, l, "update", p);
      g || (l[c] = a[c]), a[c] ? g || l.setAttribute(c, a[c]) : d(c, l, "remove", p) || l.removeAttribute(c);
    }
  }
  function f(a, l, c) {
    if (a instanceof HTMLInputElement && l instanceof HTMLInputElement && a.type !== "file") {
      let p = a.value, g = l.value;
      u(a, l, "checked", c), u(a, l, "disabled", c), a.hasAttribute("value") ? p !== g && (d("value", l, "update", c) || (l.setAttribute("value", p), l.value = p)) : d("value", l, "remove", c) || (l.value = "", l.removeAttribute("value"));
    } else if (a instanceof HTMLOptionElement)
      u(a, l, "selected", c);
    else if (a instanceof HTMLTextAreaElement && l instanceof HTMLTextAreaElement) {
      let p = a.value, g = l.value;
      if (d("value", l, "update", c))
        return;
      p !== g && (l.value = p), l.firstChild && l.firstChild.nodeValue !== p && (l.firstChild.nodeValue = p);
    }
  }
  function b(a, l, c) {
    let p = [], g = [], m = [], v = [], E = c.head.style, T = /* @__PURE__ */ new Map();
    for (const A of a.children)
      T.set(A.outerHTML, A);
    for (const A of l.children) {
      let O = T.has(A.outerHTML), $ = c.head.shouldReAppend(A), Q = c.head.shouldPreserve(A);
      O || Q ? $ ? g.push(A) : (T.delete(A.outerHTML), m.push(A)) : E === "append" ? $ && (g.push(A), v.push(A)) : c.head.shouldRemove(A) !== !1 && g.push(A);
    }
    v.push(...T.values());
    let ce = [];
    for (const A of v) {
      let O = document.createRange().createContextualFragment(A.outerHTML).firstChild;
      if (c.callbacks.beforeNodeAdded(O) !== !1) {
        if (O.href || O.src) {
          let $ = null, Q = new Promise(function(Ke) {
            $ = Ke;
          });
          O.addEventListener("load", function() {
            $();
          }), ce.push(Q);
        }
        l.appendChild(O), c.callbacks.afterNodeAdded(O), p.push(O);
      }
    }
    for (const A of g)
      c.callbacks.beforeNodeRemoved(A) !== !1 && (l.removeChild(A), c.callbacks.afterNodeRemoved(A));
    return c.head.afterHeadMorphed(l, { added: p, kept: m, removed: g }), ce;
  }
  function y() {
  }
  function k(a) {
    let l = {};
    return Object.assign(l, e), Object.assign(l, a), l.callbacks = {}, Object.assign(l.callbacks, e.callbacks), Object.assign(l.callbacks, a.callbacks), l.head = {}, Object.assign(l.head, e.head), Object.assign(l.head, a.head), l;
  }
  function K(a, l, c) {
    return c = k(c), {
      target: a,
      newContent: l,
      config: c,
      morphStyle: c.morphStyle,
      ignoreActive: c.ignoreActive,
      ignoreActiveValue: c.ignoreActiveValue,
      idMap: He(a, l),
      deadIds: /* @__PURE__ */ new Set(),
      callbacks: c.callbacks,
      head: c.head
    };
  }
  function w(a, l, c) {
    return a == null || l == null ? !1 : a.nodeType === l.nodeType && a.tagName === l.tagName ? a.id !== "" && a.id === l.id ? !0 : N(c, a, l) > 0 : !1;
  }
  function M(a, l) {
    return a == null || l == null ? !1 : a.nodeType === l.nodeType && a.tagName === l.tagName;
  }
  function _(a, l, c) {
    for (; a !== l; ) {
      let p = a;
      a = a.nextSibling, ae(p, c);
    }
    return C(c, l), l.nextSibling;
  }
  function z(a, l, c, p, g) {
    let m = N(g, c, l), v = null;
    if (m > 0) {
      let E = p, T = 0;
      for (; E != null; ) {
        if (w(c, E, g))
          return E;
        if (T += N(g, E, a), T > m)
          return null;
        E = E.nextSibling;
      }
    }
    return v;
  }
  function X(a, l, c, p, g) {
    let m = p, v = c.nextSibling, E = 0;
    for (; m != null; ) {
      if (N(g, m, a) > 0)
        return null;
      if (M(c, m))
        return m;
      if (M(v, m) && (E++, v = v.nextSibling, E >= 2))
        return null;
      m = m.nextSibling;
    }
    return m;
  }
  function P(a) {
    let l = new DOMParser(), c = a.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
    if (c.match(/<\/html>/) || c.match(/<\/head>/) || c.match(/<\/body>/)) {
      let p = l.parseFromString(a, "text/html");
      if (c.match(/<\/html>/))
        return p.generatedByIdiomorph = !0, p;
      {
        let g = p.firstChild;
        return g ? (g.generatedByIdiomorph = !0, g) : null;
      }
    } else {
      let g = l.parseFromString("<body><template>" + a + "</template></body>", "text/html").body.querySelector("template").content;
      return g.generatedByIdiomorph = !0, g;
    }
  }
  function Ve(a) {
    if (a == null)
      return document.createElement("div");
    if (a.generatedByIdiomorph)
      return a;
    if (a instanceof Node) {
      const l = document.createElement("div");
      return l.append(a), l;
    } else {
      const l = document.createElement("div");
      for (const c of [...a])
        l.append(c);
      return l;
    }
  }
  function Re(a, l, c) {
    let p = [], g = [];
    for (; a != null; )
      p.push(a), a = a.previousSibling;
    for (; p.length > 0; ) {
      let m = p.pop();
      g.push(m), l.parentElement.insertBefore(m, l);
    }
    for (g.push(l); c != null; )
      p.push(c), g.push(c), c = c.nextSibling;
    for (; p.length > 0; )
      l.parentElement.insertBefore(p.pop(), l.nextSibling);
    return g;
  }
  function je(a, l, c) {
    let p;
    p = a.firstChild;
    let g = p, m = 0;
    for (; p; ) {
      let v = xe(p, l, c);
      v > m && (g = p, m = v), p = p.nextSibling;
    }
    return g;
  }
  function xe(a, l, c) {
    return M(a, l) ? 0.5 + N(c, a, l) : 0;
  }
  function ae(a, l) {
    C(l, a), l.callbacks.beforeNodeRemoved(a) !== !1 && (a.remove(), l.callbacks.afterNodeRemoved(a));
  }
  function Ue(a, l) {
    return !a.deadIds.has(l);
  }
  function qe(a, l, c) {
    return (a.idMap.get(c) || r).has(l);
  }
  function C(a, l) {
    let c = a.idMap.get(l) || r;
    for (const p of c)
      a.deadIds.add(p);
  }
  function N(a, l, c) {
    let p = a.idMap.get(l) || r, g = 0;
    for (const m of p)
      Ue(a, m) && qe(a, m, c) && ++g;
    return g;
  }
  function le(a, l) {
    let c = a.parentElement, p = a.querySelectorAll("[id]");
    for (const g of p) {
      let m = g;
      for (; m !== c && m != null; ) {
        let v = l.get(m);
        v == null && (v = /* @__PURE__ */ new Set(), l.set(m, v)), v.add(g.id), m = m.parentElement;
      }
    }
  }
  function He(a, l) {
    let c = /* @__PURE__ */ new Map();
    return le(a, c), le(l, c), c;
  }
  return {
    morph: t,
    defaults: e
  };
}();
function re(r) {
  r instanceof HTMLInputElement && r.type === "file" || ("value" in r ? r.setAttribute("value", r.value) : r.hasAttribute("value") && r.setAttribute("value", "")), Array.from(r.children).forEach((t) => {
    re(t);
  });
}
const bs = (r, e) => {
  for (let t = 0; t < r.attributes.length; t++) {
    const s = r.attributes[t];
    e.setAttribute(s.name, s.value);
  }
};
function vs(r, e, t, s, n) {
  const i = [], o = /* @__PURE__ */ new Map(), d = (h, u) => {
    const f = o.get(h);
    if (!(f instanceof HTMLElement))
      throw new Error(`Original element with id ${h} not found`);
    if (i.push(h), !u)
      return null;
    const b = Y(f);
    return f.replaceWith(b), b;
  };
  e.querySelectorAll("[data-live-preserve]").forEach((h) => {
    const u = h.id;
    if (!u)
      throw new Error("The data-live-preserve attribute requires an id attribute to be set on the element");
    const f = r.querySelector(`#${u}`);
    if (!(f instanceof HTMLElement))
      throw new Error(`The element with id "${u}" was not found in the original HTML`);
    h.removeAttribute("data-live-preserve"), o.set(u, f), bs(h, f);
  }), Me.morph(r, e, {
    callbacks: {
      beforeNodeMorphed: (h, u) => {
        var f;
        if (!(h instanceof Element) || !(u instanceof Element) || h === r)
          return !0;
        if (h.id && o.has(h.id)) {
          if (h.id === u.id)
            return !1;
          const b = d(h.id, !0);
          if (!b)
            throw new Error("missing clone");
          return Me.morph(b, u), !1;
        }
        if (h instanceof HTMLElement && u instanceof HTMLElement) {
          if (typeof h.__x < "u") {
            if (!window.Alpine)
              throw new Error("Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.");
            if (typeof window.Alpine.morph != "function")
              throw new Error("Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.");
            window.Alpine.morph(h.__x, u);
          }
          if (n.wasElementAdded(h))
            return h.insertAdjacentElement("afterend", u), !1;
          t.includes(h) && se(u, s(h)), h === document.activeElement && h !== document.body && L(h, !1) !== null && se(u, s(h));
          const b = n.getChangedElement(h);
          if (b && b.applyToElement(u), h.nodeName.toUpperCase() !== "OPTION" && h.isEqualNode(u)) {
            const y = Y(h);
            re(y);
            const k = Y(u);
            if (re(k), y.isEqualNode(k))
              return !1;
          }
        }
        return h.hasAttribute("data-skip-morph") || h.id && h.id !== u.id ? (h.innerHTML = u.innerHTML, !0) : (f = h.parentElement) != null && f.hasAttribute("data-skip-morph") ? !1 : !h.hasAttribute("data-live-ignore");
      },
      beforeNodeRemoved(h) {
        return h instanceof HTMLElement ? h.id && o.has(h.id) ? (d(h.id, !1), !0) : n.wasElementAdded(h) ? !1 : !h.hasAttribute("data-live-ignore") : !0;
      }
    }
  }), i.forEach((h) => {
    const u = r.querySelector(`#${h}`), f = o.get(h);
    if (!(u instanceof HTMLElement) || !(f instanceof HTMLElement))
      throw new Error("Missing elements.");
    u.replaceWith(f);
  });
}
class ys {
  constructor(e, t) {
    this.elementEventListeners = [
      { event: "input", callback: (s) => this.handleInputEvent(s) }
    ], this.component = e, this.modelElementResolver = t, this.unsyncedInputs = new Es();
  }
  activate() {
    this.elementEventListeners.forEach(({ event: e, callback: t }) => {
      this.component.element.addEventListener(e, t);
    });
  }
  deactivate() {
    this.elementEventListeners.forEach(({ event: e, callback: t }) => {
      this.component.element.removeEventListener(e, t);
    });
  }
  markModelAsSynced(e) {
    this.unsyncedInputs.markModelAsSynced(e);
  }
  handleInputEvent(e) {
    const t = e.target;
    t && this.updateModelFromElement(t);
  }
  updateModelFromElement(e) {
    if (!U(e, this.component))
      return;
    if (!(e instanceof HTMLElement))
      throw new Error("Could not update model for non HTMLElement");
    const t = this.modelElementResolver.getModelName(e);
    this.unsyncedInputs.add(e, t);
  }
  getUnsyncedInputs() {
    return this.unsyncedInputs.allUnsyncedInputs();
  }
  getUnsyncedModels() {
    return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
  }
  resetUnsyncedFields() {
    this.unsyncedInputs.resetUnsyncedFields();
  }
}
class Es {
  constructor() {
    this.unsyncedNonModelFields = [], this.unsyncedModelNames = [], this.unsyncedModelFields = /* @__PURE__ */ new Map();
  }
  add(e, t = null) {
    if (t) {
      this.unsyncedModelFields.set(t, e), this.unsyncedModelNames.includes(t) || this.unsyncedModelNames.push(t);
      return;
    }
    this.unsyncedNonModelFields.push(e);
  }
  resetUnsyncedFields() {
    this.unsyncedModelFields.forEach((e, t) => {
      this.unsyncedModelNames.includes(t) || this.unsyncedModelFields.delete(t);
    });
  }
  allUnsyncedInputs() {
    return [...this.unsyncedNonModelFields, ...this.unsyncedModelFields.values()];
  }
  markModelAsSynced(e) {
    const t = this.unsyncedModelNames.indexOf(e);
    t !== -1 && this.unsyncedModelNames.splice(t, 1);
  }
  getUnsyncedModelNames() {
    return this.unsyncedModelNames;
  }
}
function As(r, e) {
  const { currentLevelData: t, finalKey: s } = ws(r, e);
  if (t !== void 0)
    return t[s];
}
const ws = (r, e) => {
  const t = JSON.parse(JSON.stringify(r));
  let s = t;
  const n = e.split(".");
  for (let o = 0; o < n.length - 1; o++)
    s = s[n[o]];
  const i = n[n.length - 1];
  return {
    currentLevelData: s,
    finalData: t,
    finalKey: i,
    parts: n
  };
};
class Ms {
  constructor(e) {
    this.props = {}, this.dirtyProps = {}, this.pendingProps = {}, this.updatedPropsFromParent = {}, this.props = e;
  }
  get(e) {
    const t = D(e);
    return this.dirtyProps[t] !== void 0 ? this.dirtyProps[t] : this.pendingProps[t] !== void 0 ? this.pendingProps[t] : this.props[t] !== void 0 ? this.props[t] : As(this.props, t);
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, t) {
    const s = D(e);
    return this.get(s) === t ? !1 : (this.dirtyProps[s] = t, !0);
  }
  getOriginalProps() {
    return { ...this.props };
  }
  getDirtyProps() {
    return { ...this.dirtyProps };
  }
  getUpdatedPropsFromParent() {
    return { ...this.updatedPropsFromParent };
  }
  flushDirtyPropsToPending() {
    this.pendingProps = { ...this.dirtyProps }, this.dirtyProps = {};
  }
  reinitializeAllProps(e) {
    this.props = e, this.updatedPropsFromParent = {}, this.pendingProps = {};
  }
  pushPendingPropsBackToDirty() {
    this.dirtyProps = { ...this.pendingProps, ...this.dirtyProps }, this.pendingProps = {};
  }
  storeNewPropsFromParent(e) {
    let t = !1;
    for (const [s, n] of Object.entries(e))
      this.get(s) !== n && (t = !0);
    return t && (this.updatedPropsFromParent = e), t;
  }
}
class Os {
  constructor(e, t, s, n, i, o, d) {
    this.fingerprint = "", this.defaultDebounce = 150, this.backendRequest = null, this.pendingActions = [], this.pendingFiles = {}, this.isRequestPending = !1, this.requestDebounceTimeout = null, this.element = e, this.name = t, this.backend = o, this.elementDriver = d, this.id = i, this.listeners = /* @__PURE__ */ new Map(), n.forEach((h) => {
      var u;
      this.listeners.has(h.event) || this.listeners.set(h.event, []), (u = this.listeners.get(h.event)) == null || u.push(h.action);
    }), this.valueStore = new Ms(s), this.unsyncedInputsTracker = new ys(this, d), this.hooks = new ds(), this.resetPromise(), this.externalMutationTracker = new ps(this.element, (h) => U(h, this)), this.externalMutationTracker.start();
  }
  addPlugin(e) {
    e.attachToComponent(this);
  }
  connect() {
    os(this), this.hooks.triggerHook("connect", this), this.unsyncedInputsTracker.activate(), this.externalMutationTracker.start();
  }
  disconnect() {
    as(this), this.hooks.triggerHook("disconnect", this), this.clearRequestDebounceTimeout(), this.unsyncedInputsTracker.deactivate(), this.externalMutationTracker.stop();
  }
  on(e, t) {
    this.hooks.register(e, t);
  }
  off(e, t) {
    this.hooks.unregister(e, t);
  }
  set(e, t, s = !1, n = !1) {
    const i = this.nextRequestPromise, o = D(e);
    if (!this.valueStore.has(o))
      throw new Error(`Invalid model name "${e}".`);
    const d = this.valueStore.set(o, t);
    return this.hooks.triggerHook("model:set", e, t, this), this.unsyncedInputsTracker.markModelAsSynced(o), s && d && this.debouncedStartRequest(n), i;
  }
  getData(e) {
    const t = D(e);
    if (!this.valueStore.has(t))
      throw new Error(`Invalid model "${e}".`);
    return this.valueStore.get(t);
  }
  action(e, t = {}, s = !1) {
    const n = this.nextRequestPromise;
    return this.pendingActions.push({
      name: e,
      args: t
    }), this.debouncedStartRequest(s), n;
  }
  files(e, t) {
    this.pendingFiles[e] = t;
  }
  render() {
    const e = this.nextRequestPromise;
    return this.tryStartingRequest(), e;
  }
  getUnsyncedModels() {
    return this.unsyncedInputsTracker.getUnsyncedModels();
  }
  emit(e, t, s = null) {
    this.performEmit(e, t, !1, s);
  }
  emitUp(e, t, s = null) {
    this.performEmit(e, t, !0, s);
  }
  emitSelf(e, t) {
    this.doEmit(e, t);
  }
  performEmit(e, t, s, n) {
    cs(this, s, n).forEach((o) => {
      o.doEmit(e, t);
    });
  }
  doEmit(e, t) {
    if (!this.listeners.has(e))
      return;
    (this.listeners.get(e) || []).forEach((n) => {
      this.action(n, t, 1);
    });
  }
  isTurboEnabled() {
    return typeof Turbo < "u" && !this.element.closest('[data-turbo="false"]');
  }
  tryStartingRequest() {
    if (!this.backendRequest) {
      this.performRequest();
      return;
    }
    this.isRequestPending = !0;
  }
  performRequest() {
    const e = this.nextRequestPromiseResolve;
    this.resetPromise(), this.unsyncedInputsTracker.resetUnsyncedFields();
    const t = {};
    for (const [n, i] of Object.entries(this.pendingFiles))
      i.files && (t[n] = i.files);
    const s = {
      props: this.valueStore.getOriginalProps(),
      actions: this.pendingActions,
      updated: this.valueStore.getDirtyProps(),
      children: {},
      updatedPropsFromParent: this.valueStore.getUpdatedPropsFromParent(),
      files: t
    };
    this.hooks.triggerHook("request:started", s), this.backendRequest = this.backend.makeRequest(s.props, s.actions, s.updated, s.children, s.updatedPropsFromParent, s.files), this.hooks.triggerHook("loading.state:started", this.element, this.backendRequest), this.pendingActions = [], this.valueStore.flushDirtyPropsToPending(), this.isRequestPending = !1, this.backendRequest.promise.then(async (n) => {
      var h;
      const i = new is(n), o = await i.getBody();
      for (const u of Object.values(this.pendingFiles))
        u.value = "";
      const d = i.response.headers;
      if (!((h = d.get("Content-Type")) != null && h.includes("application/vnd.live-component+html")) && !d.get("X-Live-Redirect")) {
        const u = { displayError: !0 };
        return this.valueStore.pushPendingPropsBackToDirty(), this.hooks.triggerHook("response:error", i, u), u.displayError && this.renderError(o), this.backendRequest = null, e(i), n;
      }
      return this.processRerender(o, i), this.backendRequest = null, e(i), this.isRequestPending && (this.isRequestPending = !1, this.performRequest()), n;
    });
  }
  processRerender(e, t) {
    const s = { shouldRender: !0 };
    if (this.hooks.triggerHook("render:started", e, t, s), !s.shouldRender)
      return;
    if (t.response.headers.get("Location")) {
      this.isTurboEnabled() ? Turbo.visit(t.response.headers.get("Location")) : window.location.href = t.response.headers.get("Location") || "";
      return;
    }
    this.hooks.triggerHook("loading.state:finished", this.element);
    const n = {};
    Object.keys(this.valueStore.getDirtyProps()).forEach((u) => {
      n[u] = this.valueStore.get(u);
    });
    let i;
    try {
      if (i = ms(e), !i.matches("[data-controller~=live]"))
        throw new Error("A live component template must contain a single root controller element.");
    } catch (u) {
      throw console.error(`There was a problem with the '${this.name}' component HTML returned:`, {
        id: this.id
      }), u;
    }
    this.externalMutationTracker.handlePendingChanges(), this.externalMutationTracker.stop(), vs(this.element, i, this.unsyncedInputsTracker.getUnsyncedInputs(), (u) => oe(u, this.valueStore), this.externalMutationTracker), this.externalMutationTracker.start();
    const o = this.elementDriver.getComponentProps();
    this.valueStore.reinitializeAllProps(o);
    const d = this.elementDriver.getEventsToEmit(), h = this.elementDriver.getBrowserEventsToDispatch();
    Object.keys(n).forEach((u) => {
      this.valueStore.set(u, n[u]);
    }), d.forEach(({ event: u, data: f, target: b, componentName: y }) => {
      if (b === "up") {
        this.emitUp(u, f, y);
        return;
      }
      if (b === "self") {
        this.emitSelf(u, f);
        return;
      }
      this.emit(u, f, y);
    }), h.forEach(({ event: u, payload: f }) => {
      this.element.dispatchEvent(new CustomEvent(u, {
        detail: f,
        bubbles: !0
      }));
    }), this.hooks.triggerHook("render:finished", this);
  }
  calculateDebounce(e) {
    return e === !0 ? this.defaultDebounce : e === !1 ? 0 : e;
  }
  clearRequestDebounceTimeout() {
    this.requestDebounceTimeout && (clearTimeout(this.requestDebounceTimeout), this.requestDebounceTimeout = null);
  }
  debouncedStartRequest(e) {
    this.clearRequestDebounceTimeout(), this.requestDebounceTimeout = window.setTimeout(() => {
      this.render();
    }, this.calculateDebounce(e));
  }
  renderError(e) {
    let t = document.getElementById("live-component-error");
    t ? t.innerHTML = "" : (t = document.createElement("div"), t.id = "live-component-error", t.style.padding = "50px", t.style.backgroundColor = "rgba(0, 0, 0, .5)", t.style.zIndex = "100000", t.style.position = "fixed", t.style.top = "0px", t.style.bottom = "0px", t.style.left = "0px", t.style.right = "0px", t.style.display = "flex", t.style.flexDirection = "column");
    const s = document.createElement("iframe");
    s.style.borderRadius = "5px", s.style.flexGrow = "1", t.appendChild(s), document.body.prepend(t), document.body.style.overflow = "hidden", s.contentWindow && (s.contentWindow.document.open(), s.contentWindow.document.write(e), s.contentWindow.document.close());
    const n = (i) => {
      i && (i.outerHTML = ""), document.body.style.overflow = "visible";
    };
    t.addEventListener("click", () => n(t)), t.setAttribute("tabindex", "0"), t.addEventListener("keydown", (i) => {
      i.key === "Escape" && n(t);
    }), t.focus();
  }
  resetPromise() {
    this.nextRequestPromise = new Promise((e) => {
      this.nextRequestPromiseResolve = e;
    });
  }
  _updateFromParentProps(e) {
    this.valueStore.storeNewPropsFromParent(e) && this.render();
  }
}
function ks(r) {
  return new Proxy(r, {
    get(e, t) {
      if (t in e || typeof t != "string") {
        if (typeof e[t] == "function") {
          const s = e[t];
          return (...n) => s.apply(e, n);
        }
        return Reflect.get(e, t);
      }
      return e.valueStore.has(t) ? e.getData(t) : (s) => e.action.apply(e, [t, s]);
    },
    set(e, t, s) {
      return t in e ? (e[t] = s, !0) : (e.set(t, s), !0);
    }
  });
}
class Cs {
  constructor(e) {
    this.controller = e;
  }
  getModelName(e) {
    const t = L(e, !1);
    return t ? t.action : null;
  }
  getComponentProps() {
    return this.controller.propsValue;
  }
  getEventsToEmit() {
    return this.controller.eventsToEmitValue;
  }
  getBrowserEventsToDispatch() {
    return this.controller.eventsToDispatchValue;
  }
}
function Ne(r) {
  let e = !0, t = null, s = !1;
  r.modifiers.forEach((o) => {
    switch (o.name) {
      case "on":
        if (!o.value)
          throw new Error(`The "on" modifier in ${r.getString()} requires a value - e.g. on(change).`);
        if (!["input", "change"].includes(o.value))
          throw new Error(`The "on" modifier in ${r.getString()} only accepts the arguments "input" or "change".`);
        t = o.value;
        break;
      case "norender":
        e = !1;
        break;
      case "debounce":
        s = o.value ? Number.parseInt(o.value) : !0;
        break;
      default:
        throw new Error(`Unknown modifier "${o.name}" in data-model="${r.getString()}".`);
    }
  });
  const [n, i] = r.action.split(":");
  return {
    modelName: n,
    innerModelName: i || null,
    shouldRender: e,
    debounce: s,
    targetEventName: t
  };
}
class Ts {
  constructor(e) {
    this.parentModelBindings = [], this.component = e;
    const t = Le(this.component.element);
    this.parentModelBindings = t.map(Ne);
  }
  attachToComponent(e) {
    e.on("request:started", (t) => {
      t.children = this.getChildrenFingerprints();
    }), e.on("model:set", (t, s) => {
      this.notifyParentModelChange(t, s);
    });
  }
  getChildrenFingerprints() {
    const e = {};
    return this.getChildren().forEach((t) => {
      if (!t.id)
        throw new Error("missing id");
      e[t.id] = {
        fingerprint: t.fingerprint,
        tag: t.element.tagName.toLowerCase()
      };
    }), e;
  }
  notifyParentModelChange(e, t) {
    const s = us(this.component);
    s && this.parentModelBindings.forEach((n) => {
      (n.innerModelName || "value") === e && s.set(n.modelName, t, n.shouldRender, n.debounce);
    });
  }
  getChildren() {
    return hs(this.component);
  }
}
class Ss {
  constructor() {
    this.intersectionObserver = null;
  }
  attachToComponent(e) {
    var t;
    ((t = e.element.attributes.getNamedItem("loading")) == null ? void 0 : t.value) === "lazy" && (e.on("connect", () => {
      this.getObserver().observe(e.element);
    }), e.on("disconnect", () => {
      var s;
      (s = this.intersectionObserver) == null || s.unobserve(e.element);
    }));
  }
  getObserver() {
    return this.intersectionObserver || (this.intersectionObserver = new IntersectionObserver((e, t) => {
      e.forEach((s) => {
        s.isIntersecting && (s.target.dispatchEvent(new CustomEvent("live:appear")), t.unobserve(s.target));
      });
    })), this.intersectionObserver;
  }
}
class Fs {
  attachToComponent(e) {
    e.on("loading.state:started", (t, s) => {
      this.startLoading(e, t, s);
    }), e.on("loading.state:finished", (t) => {
      this.finishLoading(e, t);
    }), this.finishLoading(e, e.element);
  }
  startLoading(e, t, s) {
    this.handleLoadingToggle(e, !0, t, s);
  }
  finishLoading(e, t) {
    this.handleLoadingToggle(e, !1, t, null);
  }
  handleLoadingToggle(e, t, s, n) {
    t ? this.addAttributes(s, ["busy"]) : this.removeAttributes(s, ["busy"]), this.getLoadingDirectives(e, s).forEach(({ element: i, directives: o }) => {
      t ? this.addAttributes(i, ["data-live-is-loading"]) : this.removeAttributes(i, ["data-live-is-loading"]), o.forEach((d) => {
        this.handleLoadingDirective(i, t, d, n);
      });
    });
  }
  handleLoadingDirective(e, t, s, n) {
    const i = Is(s.action, t), o = [], d = [];
    let h = 0;
    const u = /* @__PURE__ */ new Map();
    if (u.set("delay", (b) => {
      t && (h = b.value ? Number.parseInt(b.value) : 200);
    }), u.set("action", (b) => {
      if (!b.value)
        throw new Error(`The "action" in data-loading must have an action name - e.g. action(foo). It's missing for "${s.getString()}"`);
      o.push(b.value);
    }), u.set("model", (b) => {
      if (!b.value)
        throw new Error(`The "model" in data-loading must have an action name - e.g. model(foo). It's missing for "${s.getString()}"`);
      d.push(b.value);
    }), s.modifiers.forEach((b) => {
      if (u.has(b.name)) {
        (u.get(b.name) ?? (() => {
        }))(b);
        return;
      }
      throw new Error(`Unknown modifier "${b.name}" used in data-loading="${s.getString()}". Available modifiers are: ${Array.from(u.keys()).join(", ")}.`);
    }), t && o.length > 0 && n && !n.containsOneOfActions(o) || t && d.length > 0 && n && !n.areAnyModelsUpdated(d))
      return;
    let f;
    switch (i) {
      case "show":
        f = () => this.showElement(e);
        break;
      case "hide":
        f = () => this.hideElement(e);
        break;
      case "addClass":
        f = () => this.addClass(e, s.args);
        break;
      case "removeClass":
        f = () => this.removeClass(e, s.args);
        break;
      case "addAttribute":
        f = () => this.addAttributes(e, s.args);
        break;
      case "removeAttribute":
        f = () => this.removeAttributes(e, s.args);
        break;
      default:
        throw new Error(`Unknown data-loading action "${i}"`);
    }
    if (h) {
      window.setTimeout(() => {
        n && !n.isResolved && f();
      }, h);
      return;
    }
    f();
  }
  getLoadingDirectives(e, t) {
    const s = [];
    let n = [...Array.from(t.querySelectorAll("[data-loading]"))];
    return n = n.filter((i) => U(i, e)), t.hasAttribute("data-loading") && (n = [t, ...n]), n.forEach((i) => {
      if (!(i instanceof HTMLElement) && !(i instanceof SVGElement))
        throw new Error("Invalid Element Type");
      const o = I(i.dataset.loading || "show");
      s.push({
        element: i,
        directives: o
      });
    }), s;
  }
  showElement(e) {
    e.style.display = "revert";
  }
  hideElement(e) {
    e.style.display = "none";
  }
  addClass(e, t) {
    e.classList.add(...Ae(t));
  }
  removeClass(e, t) {
    e.classList.remove(...Ae(t)), e.classList.length === 0 && e.removeAttribute("class");
  }
  addAttributes(e, t) {
    t.forEach((s) => {
      e.setAttribute(s, "");
    });
  }
  removeAttributes(e, t) {
    t.forEach((s) => {
      e.removeAttribute(s);
    });
  }
}
const Is = (r, e) => {
  switch (r) {
    case "show":
      return e ? "show" : "hide";
    case "hide":
      return e ? "hide" : "show";
    case "addClass":
      return e ? "addClass" : "removeClass";
    case "removeClass":
      return e ? "removeClass" : "addClass";
    case "addAttribute":
      return e ? "addAttribute" : "removeAttribute";
    case "removeAttribute":
      return e ? "removeAttribute" : "addAttribute";
  }
  throw new Error(`Unknown data-loading action "${r}"`);
};
class Ds {
  constructor() {
    this.isConnected = !1;
  }
  attachToComponent(e) {
    e.on("render:started", (t, s, n) => {
      this.isConnected || (n.shouldRender = !1);
    }), e.on("connect", () => {
      this.isConnected = !0;
    }), e.on("disconnect", () => {
      this.isConnected = !1;
    });
  }
}
class Ls {
  constructor(e) {
    this.isPollingActive = !0, this.pollingIntervals = [], this.component = e;
  }
  addPoll(e, t) {
    this.polls.push({ actionName: e, duration: t }), this.isPollingActive && this.initiatePoll(e, t);
  }
  startAllPolling() {
    this.isPollingActive || (this.isPollingActive = !0, this.polls.forEach(({ actionName: e, duration: t }) => {
      this.initiatePoll(e, t);
    }));
  }
  stopAllPolling() {
    this.isPollingActive = !1, this.pollingIntervals.forEach((e) => {
      clearInterval(e);
    });
  }
  clearPolling() {
    this.stopAllPolling(), this.polls = [], this.startAllPolling();
  }
  initiatePoll(e, t) {
    let s;
    e === "$render" ? s = () => {
      this.component.render();
    } : s = () => {
      this.component.action(e, {}, 0);
    };
    const n = window.setInterval(() => {
      s();
    }, t);
    this.pollingIntervals.push(n);
  }
}
class Ps {
  attachToComponent(e) {
    this.element = e.element, this.pollingDirector = new Ls(e), this.initializePolling(), e.on("connect", () => {
      this.pollingDirector.startAllPolling();
    }), e.on("disconnect", () => {
      this.pollingDirector.stopAllPolling();
    }), e.on("render:finished", () => {
      this.initializePolling();
    });
  }
  addPoll(e, t) {
    this.pollingDirector.addPoll(e, t);
  }
  clearPolling() {
    this.pollingDirector.clearPolling();
  }
  initializePolling() {
    if (this.clearPolling(), this.element.dataset.poll === void 0)
      return;
    const e = this.element.dataset.poll;
    I(e || "$render").forEach((s) => {
      let n = 2e3;
      s.modifiers.forEach((i) => {
        switch (i.name) {
          case "delay":
            i.value && (n = Number.parseInt(i.value));
            break;
          default:
            console.warn(`Unknown modifier "${i.name}" in data-poll "${e}".`);
        }
      }), this.addPoll(s.action, n);
    });
  }
}
function $e(r) {
  if (r === null || r === "" || r === void 0 || Array.isArray(r) && r.length === 0)
    return !0;
  if (typeof r != "object")
    return !1;
  for (const e of Object.keys(r))
    if (!$e(r[e]))
      return !1;
  return !0;
}
function Ns(r) {
  const e = (s, n = {}, i = "") => (Object.entries(s).forEach(([o, d]) => {
    const h = i === "" ? o : `${i}[${o}]`;
    i === "" && $e(d) ? n[h] = "" : d !== null && (typeof d == "object" ? n = { ...n, ...e(d, n, h) } : n[h] = encodeURIComponent(d).replace(/%20/g, "+").replace(/%2C/g, ","));
  }), n), t = e(r);
  return Object.entries(t).map(([s, n]) => `${s}=${n}`).join("&");
}
function $s(r) {
  if (r = r.replace("?", ""), r === "")
    return {};
  const e = (n, i, o) => {
    const [d, h, ...u] = n.split(".");
    if (!h)
      return o[n] = i, i;
    o[d] === void 0 && (o[d] = Number.isNaN(Number.parseInt(h)) ? {} : []), e([h, ...u].join("."), i, o[d]);
  }, t = r.split("&").map((n) => n.split("=")), s = {};
  return t.forEach(([n, i]) => {
    if (i = decodeURIComponent(i.replace(/\+/g, "%20")), !n.includes("["))
      s[n] = i;
    else {
      if (i === "")
        return;
      const o = n.replace(/\[/g, ".").replace(/]/g, "");
      e(o, i, s);
    }
  }), s;
}
class Bs extends URL {
  has(e) {
    const t = this.getData();
    return Object.keys(t).includes(e);
  }
  set(e, t) {
    const s = this.getData();
    s[e] = t, this.setData(s);
  }
  get(e) {
    return this.getData()[e];
  }
  remove(e) {
    const t = this.getData();
    delete t[e], this.setData(t);
  }
  getData() {
    return this.search ? $s(this.search) : {};
  }
  setData(e) {
    this.search = Ns(e);
  }
}
class Vs {
  static replace(e) {
    history.replaceState(history.state, "", e);
  }
}
class Rs {
  constructor(e) {
    this.mapping = e;
  }
  attachToComponent(e) {
    e.on("render:finished", (t) => {
      const s = new Bs(window.location.href), n = s.toString();
      Object.entries(this.mapping).forEach(([i, o]) => {
        const d = t.valueStore.get(i);
        s.set(o.name, d);
      }), n !== s.toString() && Vs.replace(s);
    });
  }
}
class js {
  attachToComponent(e) {
    this.synchronizeValueOfModelFields(e), e.on("render:finished", () => {
      this.synchronizeValueOfModelFields(e);
    });
  }
  synchronizeValueOfModelFields(e) {
    e.element.querySelectorAll("[data-model]").forEach((t) => {
      if (!(t instanceof HTMLElement))
        throw new Error("Invalid element using data-model.");
      if (t instanceof HTMLFormElement || !U(t, e))
        return;
      const s = L(t);
      if (!s)
        return;
      const n = s.action;
      e.getUnsyncedModels().includes(n) || (e.valueStore.has(n) && se(t, e.valueStore.get(n)), t instanceof HTMLSelectElement && !t.multiple && e.valueStore.set(n, oe(t, e.valueStore)));
    });
  }
}
class xs {
  attachToComponent(e) {
    e.on("model:set", (t) => {
      this.handleModelSet(t, e.valueStore);
    });
  }
  handleModelSet(e, t) {
    if (t.has("validatedFields")) {
      const s = [...t.get("validatedFields")];
      s.includes(e) || s.push(e), t.set("validatedFields", s);
    }
  }
}
class q extends F {
  constructor() {
    super(...arguments), this.pendingActionTriggerModelElement = null, this.elementEventListeners = [
      { event: "input", callback: (e) => this.handleInputEvent(e) },
      { event: "change", callback: (e) => this.handleChangeEvent(e) }
    ], this.pendingFiles = {};
  }
  initialize() {
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this)), this.createComponent();
  }
  connect() {
    this.connectComponent(), this.mutationObserver.observe(this.element, {
      attributes: !0
    });
  }
  disconnect() {
    this.disconnectComponent(), this.mutationObserver.disconnect();
  }
  update(e) {
    if (e.type === "input" || e.type === "change")
      throw new Error(`Since LiveComponents 2.3, you no longer need data-action="live#update" on form elements. Found on element: ${B(e.currentTarget)}`);
    this.updateModelFromElementEvent(e.currentTarget, null);
  }
  action(e) {
    const t = e.params;
    if (!t.action)
      throw new Error(`No action name provided on element: ${B(e.currentTarget)}. Did you forget to add the "data-live-action-param" attribute?`);
    const s = t.action, n = { ...t };
    delete n.action;
    const i = I(s);
    let o = !1;
    i.forEach((d) => {
      let h = {};
      const u = /* @__PURE__ */ new Map();
      u.set("stop", () => {
        e.stopPropagation();
      }), u.set("self", () => {
        e.target, e.currentTarget;
      }), u.set("debounce", (f) => {
        o = f.value ? Number.parseInt(f.value) : !0;
      }), u.set("files", (f) => {
        f.value ? this.pendingFiles[f.value] && (h[f.value] = this.pendingFiles[f.value]) : h = this.pendingFiles;
      }), d.modifiers.forEach((f) => {
        if (u.has(f.name)) {
          (u.get(f.name) ?? (() => {
          }))(f);
          return;
        }
        console.warn(`Unknown modifier ${f.name} in action "${s}". Available modifiers are: ${Array.from(u.keys()).join(", ")}.`);
      });
      for (const [f, b] of Object.entries(h))
        b.files && this.component.files(f, b), delete this.pendingFiles[f];
      this.component.action(d.action, n, o), L(e.currentTarget, !1) && (this.pendingActionTriggerModelElement = e.currentTarget);
    });
  }
  $render() {
    return this.component.render();
  }
  emit(e) {
    this.getEmitDirectives(e).forEach(({ name: t, data: s, nameMatch: n }) => {
      this.component.emit(t, s, n);
    });
  }
  emitUp(e) {
    this.getEmitDirectives(e).forEach(({ name: t, data: s, nameMatch: n }) => {
      this.component.emitUp(t, s, n);
    });
  }
  emitSelf(e) {
    this.getEmitDirectives(e).forEach(({ name: t, data: s }) => {
      this.component.emitSelf(t, s);
    });
  }
  $updateModel(e, t, s = !0, n = !0) {
    return this.component.set(e, t, s, n);
  }
  propsUpdatedFromParentValueChanged() {
    this.component._updateFromParentProps(this.propsUpdatedFromParentValue);
  }
  fingerprintValueChanged() {
    this.component.fingerprint = this.fingerprintValue;
  }
  getEmitDirectives(e) {
    const t = e.params;
    if (!t.event)
      throw new Error(`No event name provided on element: ${B(e.currentTarget)}. Did you forget to add the "data-live-event-param" attribute?`);
    const s = t.event, n = { ...t };
    delete n.event;
    const i = I(s), o = [];
    return i.forEach((d) => {
      let h = null;
      d.modifiers.forEach((u) => {
        switch (u.name) {
          case "name":
            h = u.value;
            break;
          default:
            throw new Error(`Unknown modifier ${u.name} in event "${s}".`);
        }
      }), o.push({
        name: d.action,
        data: n,
        nameMatch: h
      });
    }), o;
  }
  createComponent() {
    const e = this.element.id || null;
    this.component = new Os(this.element, this.nameValue, this.propsValue, this.listenersValue, e, q.backendFactory(this), new Cs(this)), this.proxiedComponent = ks(this.component), Object.defineProperty(this.element, "__component", {
      value: this.proxiedComponent,
      writable: !0
    }), this.hasDebounceValue && (this.component.defaultDebounce = this.debounceValue), [
      new Fs(),
      new Ss(),
      new xs(),
      new Ds(),
      new Ps(),
      new js(),
      new Rs(this.queryMappingValue),
      new Ts(this.component)
    ].forEach((s) => {
      this.component.addPlugin(s);
    });
  }
  connectComponent() {
    this.component.connect(), this.mutationObserver.observe(this.element, {
      attributes: !0
    }), this.elementEventListeners.forEach(({ event: e, callback: t }) => {
      this.component.element.addEventListener(e, t);
    }), this.dispatchEvent("connect");
  }
  disconnectComponent() {
    this.component.disconnect(), this.elementEventListeners.forEach(({ event: e, callback: t }) => {
      this.component.element.removeEventListener(e, t);
    }), this.dispatchEvent("disconnect");
  }
  handleInputEvent(e) {
    const t = e.target;
    t && this.updateModelFromElementEvent(t, "input");
  }
  handleChangeEvent(e) {
    const t = e.target;
    t && this.updateModelFromElementEvent(t, "change");
  }
  updateModelFromElementEvent(e, t) {
    var o;
    if (!U(e, this.component))
      return;
    if (!(e instanceof HTMLElement))
      throw new Error("Could not update model for non HTMLElement");
    if (e instanceof HTMLInputElement && e.type === "file") {
      const d = e.name;
      (o = e.files) != null && o.length ? this.pendingFiles[d] = e : this.pendingFiles[d] && delete this.pendingFiles[d];
    }
    const s = L(e, !1);
    if (!s)
      return;
    const n = Ne(s);
    if (n.targetEventName || (n.targetEventName = "input"), this.pendingActionTriggerModelElement === e && (n.shouldRender = !1), t === "change" && n.targetEventName === "input" && (n.targetEventName = "change"), t && n.targetEventName !== t)
      return;
    n.debounce === !1 && (n.targetEventName === "input" ? n.debounce = !0 : n.debounce = 0);
    const i = oe(e, this.component.valueStore);
    this.component.set(n.modelName, i, n.shouldRender, n.debounce);
  }
  dispatchEvent(e, t = {}, s = !0, n = !1) {
    t.controller = this, t.component = this.proxiedComponent, this.dispatch(e, { detail: t, prefix: "live", cancelable: n, bubbles: s });
  }
  onMutations(e) {
    e.forEach((t) => {
      t.type === "attributes" && t.attributeName === "id" && this.element.id !== this.component.id && (this.disconnectComponent(), this.createComponent(), this.connectComponent());
    });
  }
}
q.values = {
  name: String,
  url: String,
  props: { type: Object, default: {} },
  propsUpdatedFromParent: { type: Object, default: {} },
  listeners: { type: Array, default: [] },
  eventsToEmit: { type: Array, default: [] },
  eventsToDispatch: { type: Array, default: [] },
  debounce: { type: Number, default: 150 },
  fingerprint: { type: String, default: "" },
  requestMethod: { type: String, default: "post" },
  queryMapping: { type: Object, default: {} }
};
q.backendFactory = (r) => new ns(r.urlValue, r.requestMethodValue);
class Us extends F {
  async initialize() {
    this.component = await ls(this.element);
  }
  open(e) {
    e.preventDefault();
    const { ticketId: t } = e.currentTarget.dataset;
    this.component.action("details", { ticketId: t }).then((s) => {
      OpenHelpChat.subscribe(t), console.log(this.component.getData("selected"));
    });
  }
}
function qs(r, e = 300) {
  let t = null;
  return (...s) => {
    clearTimeout(t), t = setTimeout(() => r(...s), e);
  };
}
class Be extends F {
  // static values = {
  //     url: String
  // }
  connect() {
    this.debouncedSearch = qs(this.search.bind(this), 300);
  }
  async search(e) {
    const t = this.inputTarget.value.trim();
    if (t.length < 3)
      return;
    const s = new URL(this.resultsTarget.dataset.url, window.location.origin);
    s.searchParams.set("query", t);
    try {
      const i = await (await fetch(s, {
        headers: { "X-Requested-With": "XMLHttpRequest" }
      })).json();
      let o = "";
      if (i.length === 0)
        o = '<span class="dropdown__item-empty">There are no matching agents.</span>';
      else
        for (let d in i)
          o += `
                        <div class="dropdown__item">
                            <a class="btn__primary"
                                data-action="click->UserAutocomplete#setUser"
                                data-UserAutocomplete-user-id-param="${d}"
                                data-user-id="${d}"
                            >
                                <i class="icon-agent"></i>
                                <span class="btn__text">
                                    ${i[d]}
                                </span>
                            </a>
                        </div>
                    `;
      this.resultsTarget.innerHTML = `<div class="dropdown__menu-bot">${o}</div>`;
    } catch (n) {
      console.error("Autocomplete fetch failed:", n), this.resultsTarget.innerHTML = '<div class="dropdown__item-empty">Error</div>';
    }
  }
  setUser(e) {
    const { userId: t } = e.params, s = document.querySelector(this.resultsTarget.dataset.parentElementQuery), n = this.application.getControllerForElementAndIdentifier(s, s.dataset.controller);
    let { parentActionName: i, parentActionParams: o } = this.resultsTarget.dataset;
    o = Object.assign({}, JSON.parse(o) || {}, { userId: t }), n.component.action(i, o);
  }
  onInput(e) {
    this.debouncedSearch(e);
  }
}
he(Be, "targets", ["input", "results"]);
const H = xt.start();
H.register("live", q);
H.register("TicketList", Us);
H.register("UserAutocomplete", Be);
H.debug = !0;
window.Stimulus = H;
console.log("Stimulus started");
//# sourceMappingURL=live.js.map
