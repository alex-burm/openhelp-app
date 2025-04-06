/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = Object.freeze({}), cn = Object.freeze([]), Oe = () => {
}, ic = () => !1, ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), As = (e) => e.startsWith("onUpdate:"), me = Object.assign, ni = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, oc = Object.prototype.hasOwnProperty, Y = (e, t) => oc.call(e, t), V = Array.isArray, Kt = (e) => Ws(e) === "[object Map]", Uu = (e) => Ws(e) === "[object Set]", B = (e) => typeof e == "function", de = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", si = (e) => (te(e) || B(e)) && B(e.then) && B(e.catch), Mu = Object.prototype.toString, Ws = (e) => Mu.call(e), ri = (e) => Ws(e).slice(8, -1), Vu = (e) => Ws(e) === "[object Object]", ii = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rn = /* @__PURE__ */ Et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), uc = /* @__PURE__ */ Et(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Gs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ac = /-(\w)/g, Je = Gs(
  (e) => e.replace(ac, (t, n) => n ? n.toUpperCase() : "")
), lc = /\B([A-Z])/g, Rt = Gs(
  (e) => e.replace(lc, "-$1").toLowerCase()
), qs = Gs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Mt = Gs(
  (e) => e ? `on${qs(e)}` : ""
), kt = (e, t) => !Object.is(e, t), rn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, xs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, xr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let $i;
const ss = () => $i || ($i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function oi(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = de(s) ? hc(s) : oi(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (de(e) || te(e))
    return e;
}
const cc = /;(?![^(]*\))/g, fc = /:([^]+)/, dc = /\/\*[^]*?\*\//g;
function hc(e) {
  const t = {};
  return e.replace(dc, "").split(cc).forEach((n) => {
    if (n) {
      const s = n.split(fc);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Hn(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = Hn(e[n]);
      s && (t += s + " ");
    }
  else if (te(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const pc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", _c = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", gc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", mc = /* @__PURE__ */ Et(pc), bc = /* @__PURE__ */ Et(_c), vc = /* @__PURE__ */ Et(gc), yc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ec = /* @__PURE__ */ Et(yc);
function $u(e) {
  return !!e || e === "";
}
const ju = (e) => !!(e && e.__v_isRef === !0), Dn = (e) => de(e) ? e : e == null ? "" : V(e) || te(e) && (e.toString === Mu || !B(e.toString)) ? ju(e) ? Dn(e.value) : JSON.stringify(e, Bu, 2) : String(e), Bu = (e, t) => ju(t) ? Bu(e, t.value) : Kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[dr(s, i) + " =>"] = r, n),
    {}
  )
} : Uu(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => dr(n))
} : Nt(t) ? dr(t) : te(t) && !V(t) && !Vu(t) ? String(t) : t, dr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ge(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ke;
class Hu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ke, !t && ke && (this.index = (ke.scopes || (ke.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ke;
      try {
        return ke = this, t();
      } finally {
        ke = n;
      }
    } else
      Ge("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ke = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ke = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ku(e) {
  return new Hu(e);
}
function zu() {
  return ke;
}
function Sc(e, t = !1) {
  ke ? ke.cleanups.push(e) : t || Ge(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Z;
const hr = /* @__PURE__ */ new WeakSet();
class Wu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && ke.active && ke.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hr.has(this) && (hr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ji(this), Yu(this);
    const t = Z, n = Ze;
    Z = this, Ze = !0;
    try {
      return this.fn();
    } finally {
      Z !== this && Ge(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ju(this), Z = t, Ze = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        li(t);
      this.deps = this.depsTail = void 0, ji(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ir(this) && this.run();
  }
  get dirty() {
    return Ir(this);
  }
}
let Gu = 0, Ln, Nn;
function qu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Nn, Nn = e;
    return;
  }
  e.next = Ln, Ln = e;
}
function ui() {
  Gu++;
}
function ai() {
  if (--Gu > 0)
    return;
  if (Nn) {
    let t = Nn;
    for (Nn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ln; ) {
    let t = Ln;
    for (Ln = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Yu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ju(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), li(s), Tc(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Ir(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zu(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Kn))
    return;
  e.globalVersion = Kn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ir(e)) {
    e.flags &= -3;
    return;
  }
  const n = Z, s = Ze;
  Z = e, Ze = !0;
  try {
    Yu(e);
    const r = e.fn(e._value);
    (t.version === 0 || kt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Z = n, Ze = s, Ju(e), e.flags &= -3;
  }
}
function li(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      li(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Tc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ze = !0;
const Xu = [];
function St() {
  Xu.push(Ze), Ze = !1;
}
function Tt() {
  const e = Xu.pop();
  Ze = e === void 0 ? !0 : e;
}
function ji(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = n;
    }
  }
}
let Kn = 0;
class wc {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ci {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!Z || !Ze || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new wc(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, Qu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = s);
    }
    return Z.onTrack && Z.onTrack(
      me(
        {
          effect: Z
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Kn++, this.notify(t);
  }
  notify(t) {
    ui();
    try {
      for (let n = this.subsHead; n; n = n.nextSub)
        n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
          me(
            {
              effect: n.sub
            },
            t
          )
        );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ai();
    }
  }
}
function Qu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Qu(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Is = /* @__PURE__ */ new WeakMap(), zt = Symbol(
  "Object iterate"
), Pr = Symbol(
  "Map keys iterate"
), zn = Symbol(
  "Array iterate"
);
function ye(e, t, n) {
  if (Ze && Z) {
    let s = Is.get(e);
    s || Is.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new ci()), r.map = s, r.key = n), r.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function ot(e, t, n, s, r, i) {
  const o = Is.get(e);
  if (!o) {
    Kn++;
    return;
  }
  const u = (a) => {
    a && a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: i
    });
  };
  if (ui(), t === "clear")
    o.forEach(u);
  else {
    const a = V(e), c = a && ii(n);
    if (a && n === "length") {
      const f = Number(s);
      o.forEach((l, _) => {
        (_ === "length" || _ === zn || !Nt(_) && _ >= f) && u(l);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && u(o.get(n)), c && u(o.get(zn)), t) {
        case "add":
          a ? c && u(o.get("length")) : (u(o.get(zt)), Kt(e) && u(o.get(Pr)));
          break;
        case "delete":
          a || (u(o.get(zt)), Kt(e) && u(o.get(Pr)));
          break;
        case "set":
          Kt(e) && u(o.get(zt));
          break;
      }
  }
  ai();
}
function Oc(e, t) {
  const n = Is.get(e);
  return n && n.get(t);
}
function en(e) {
  const t = H(e);
  return t === e ? t : (ye(t, "iterate", zn), Fe(e) ? t : t.map(we));
}
function Ys(e) {
  return ye(e = H(e), "iterate", zn), e;
}
const Cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return pr(this, Symbol.iterator, we);
  },
  concat(...e) {
    return en(this).concat(
      ...e.map((t) => V(t) ? en(t) : t)
    );
  },
  entries() {
    return pr(this, "entries", (e) => (e[1] = we(e[1]), e));
  },
  every(e, t) {
    return pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pt(this, "filter", e, t, (n) => n.map(we), arguments);
  },
  find(e, t) {
    return pt(this, "find", e, t, we, arguments);
  },
  findIndex(e, t) {
    return pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pt(this, "findLast", e, t, we, arguments);
  },
  findLastIndex(e, t) {
    return pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _r(this, "includes", e);
  },
  indexOf(...e) {
    return _r(this, "indexOf", e);
  },
  join(e) {
    return en(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return _r(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return On(this, "pop");
  },
  push(...e) {
    return On(this, "push", e);
  },
  reduce(e, ...t) {
    return Bi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bi(this, "reduceRight", e, t);
  },
  shift() {
    return On(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return On(this, "splice", e);
  },
  toReversed() {
    return en(this).toReversed();
  },
  toSorted(e) {
    return en(this).toSorted(e);
  },
  toSpliced(...e) {
    return en(this).toSpliced(...e);
  },
  unshift(...e) {
    return On(this, "unshift", e);
  },
  values() {
    return pr(this, "values", we);
  }
};
function pr(e, t, n) {
  const s = Ys(e), r = s[t]();
  return s !== e && !Fe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Ac = Array.prototype;
function pt(e, t, n, s, r, i) {
  const o = Ys(e), u = o !== e && !Fe(e), a = o[t];
  if (a !== Ac[t]) {
    const l = a.apply(e, i);
    return u ? we(l) : l;
  }
  let c = n;
  o !== e && (u ? c = function(l, _) {
    return n.call(this, we(l), _, e);
  } : n.length > 2 && (c = function(l, _) {
    return n.call(this, l, _, e);
  }));
  const f = a.call(o, c, s);
  return u && r ? r(f) : f;
}
function Bi(e, t, n, s) {
  const r = Ys(e);
  let i = n;
  return r !== e && (Fe(e) ? n.length > 3 && (i = function(o, u, a) {
    return n.call(this, o, u, a, e);
  }) : i = function(o, u, a) {
    return n.call(this, o, we(u), a, e);
  }), r[t](i, ...s);
}
function _r(e, t, n) {
  const s = H(e);
  ye(s, "iterate", zn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Wn(n[0]) ? (n[0] = H(n[0]), s[t](...n)) : r;
}
function On(e, t, n = []) {
  St(), ui();
  const s = H(e)[t].apply(e, n);
  return ai(), Tt(), s;
}
const xc = /* @__PURE__ */ Et("__proto__,__v_isRef,__isVue"), ea = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function Ic(e) {
  Nt(e) || (e = String(e));
  const t = H(this);
  return ye(t, "has", e), t.hasOwnProperty(e);
}
class ta {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? ua : oa : i ? ia : ra).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = V(t);
    if (!r) {
      let a;
      if (o && (a = Cc[n]))
        return a;
      if (n === "hasOwnProperty")
        return Ic;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ie(t) ? t : s
    );
    return (Nt(n) ? ea.has(n) : xc(n)) || (r || ye(t, "get", n), i) ? u : ie(u) ? o && ii(n) ? u : u.value : te(u) ? r ? aa(u) : Zs(u) : u;
  }
}
class na extends ta {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = yt(i);
      if (!Fe(s) && !yt(s) && (i = H(i), s = H(s)), !V(t) && ie(i) && !ie(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = V(t) && ii(n) ? Number(n) < t.length : Y(t, n), u = Reflect.set(
      t,
      n,
      s,
      ie(t) ? t : r
    );
    return t === H(r) && (o ? kt(s, i) && ot(t, "set", n, s, i) : ot(t, "add", n, s)), u;
  }
  deleteProperty(t, n) {
    const s = Y(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && ot(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Nt(n) || !ea.has(n)) && ye(t, "has", n), s;
  }
  ownKeys(t) {
    return ye(
      t,
      "iterate",
      V(t) ? "length" : zt
    ), Reflect.ownKeys(t);
  }
}
class sa extends ta {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ge(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ge(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Pc = /* @__PURE__ */ new na(), kc = /* @__PURE__ */ new sa(), Rc = /* @__PURE__ */ new na(!0), Dc = /* @__PURE__ */ new sa(!0), kr = (e) => e, cs = (e) => Reflect.getPrototypeOf(e);
function Lc(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = H(r), o = Kt(i), u = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), f = n ? kr : t ? Rr : we;
    return !t && ye(
      i,
      "iterate",
      a ? Pr : zt
    ), {
      // iterator protocol
      next() {
        const { value: l, done: _ } = c.next();
        return _ ? { value: l, done: _ } : {
          value: u ? [f(l[0]), f(l[1])] : f(l),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function fs(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ge(
        `${qs(e)} operation ${n}failed: target is readonly.`,
        H(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Nc(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = H(i), u = H(r);
      e || (kt(r, u) && ye(o, "get", r), ye(o, "get", u));
      const { has: a } = cs(o), c = t ? kr : e ? Rr : we;
      if (a.call(o, r))
        return c(i.get(r));
      if (a.call(o, u))
        return c(i.get(u));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ye(H(r), "iterate", zt), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = H(i), u = H(r);
      return e || (kt(r, u) && ye(o, "has", r), ye(o, "has", u)), r === u ? i.has(r) : i.has(r) || i.has(u);
    },
    forEach(r, i) {
      const o = this, u = o.__v_raw, a = H(u), c = t ? kr : e ? Rr : we;
      return !e && ye(a, "iterate", zt), u.forEach((f, l) => r.call(i, c(f), c(l), o));
    }
  };
  return me(
    n,
    e ? {
      add: fs("add"),
      set: fs("set"),
      delete: fs("delete"),
      clear: fs("clear")
    } : {
      add(r) {
        !t && !Fe(r) && !yt(r) && (r = H(r));
        const i = H(this);
        return cs(i).has.call(i, r) || (i.add(r), ot(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Fe(i) && !yt(i) && (i = H(i));
        const o = H(this), { has: u, get: a } = cs(o);
        let c = u.call(o, r);
        c ? Hi(o, u, r) : (r = H(r), c = u.call(o, r));
        const f = a.call(o, r);
        return o.set(r, i), c ? kt(i, f) && ot(o, "set", r, i, f) : ot(o, "add", r, i), this;
      },
      delete(r) {
        const i = H(this), { has: o, get: u } = cs(i);
        let a = o.call(i, r);
        a ? Hi(i, o, r) : (r = H(r), a = o.call(i, r));
        const c = u ? u.call(i, r) : void 0, f = i.delete(r);
        return a && ot(i, "delete", r, void 0, c), f;
      },
      clear() {
        const r = H(this), i = r.size !== 0, o = Kt(r) ? new Map(r) : new Set(r), u = r.clear();
        return i && ot(
          r,
          "clear",
          void 0,
          void 0,
          o
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Lc(r, e, t);
  }), n;
}
function Js(e, t) {
  const n = Nc(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    Y(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Fc = {
  get: /* @__PURE__ */ Js(!1, !1)
}, Uc = {
  get: /* @__PURE__ */ Js(!1, !0)
}, Mc = {
  get: /* @__PURE__ */ Js(!0, !1)
}, Vc = {
  get: /* @__PURE__ */ Js(!0, !0)
};
function Hi(e, t, n) {
  const s = H(n);
  if (s !== n && t.call(e, s)) {
    const r = ri(e);
    Ge(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ra = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap();
function $c(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function jc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $c(ri(e));
}
function Zs(e) {
  return yt(e) ? e : Xs(
    e,
    !1,
    Pc,
    Fc,
    ra
  );
}
function Bc(e) {
  return Xs(
    e,
    !1,
    Rc,
    Uc,
    ia
  );
}
function aa(e) {
  return Xs(
    e,
    !0,
    kc,
    Mc,
    oa
  );
}
function at(e) {
  return Xs(
    e,
    !0,
    Dc,
    Vc,
    ua
  );
}
function Xs(e, t, n, s, r) {
  if (!te(e))
    return Ge(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = jc(e);
  if (o === 0)
    return e;
  const u = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, u), u;
}
function ct(e) {
  return yt(e) ? ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yt(e) {
  return !!(e && e.__v_isReadonly);
}
function Fe(e) {
  return !!(e && e.__v_isShallow);
}
function Wn(e) {
  return e ? !!e.__v_raw : !1;
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function It(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && xs(e, "__v_skip", !0), e;
}
const we = (e) => te(e) ? Zs(e) : e, Rr = (e) => te(e) ? aa(e) : e;
function ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ne(e) {
  return Hc(e, !1);
}
function Hc(e, t) {
  return ie(e) ? e : new Kc(e, t);
}
class Kc {
  constructor(t, n) {
    this.dep = new ci(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : H(t), this._value = n ? t : we(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Fe(t) || yt(t);
    t = s ? t : H(t), kt(t, n) && (this._rawValue = t, this._value = s ? t : we(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }));
  }
}
function ft(e) {
  return ie(e) ? e.value : e;
}
const zc = {
  get: (e, t, n) => t === "__v_raw" ? e : ft(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ie(r) && !ie(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function la(e) {
  return ct(e) ? e : new Proxy(e, zc);
}
function Ki(e) {
  Wn(e) || Ge("toRefs() expects a reactive object but received a plain one.");
  const t = V(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ca(e, n);
  return t;
}
class Wc {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Oc(H(this._object), this._key);
  }
}
class Gc {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function gr(e, t, n) {
  return ie(e) ? e : B(e) ? new Gc(e) : te(e) && arguments.length > 1 ? ca(e, t, n) : Ne(e);
}
function ca(e, t, n) {
  const s = e[t];
  return ie(s) ? s : new Wc(e, t, n);
}
class qc {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ci(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Kn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return qu(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return Zu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ge("Write operation failed: computed value is readonly");
  }
}
function Yc(e, t, n = !1) {
  let s, r;
  return B(e) ? s = e : (s = e.get, r = e.set), new qc(s, r, n);
}
const ds = {}, Ps = /* @__PURE__ */ new WeakMap();
let Vt;
function Jc(e, t = !1, n = Vt) {
  if (n) {
    let s = Ps.get(n);
    s || Ps.set(n, s = []), s.push(e);
  } else t || Ge(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Zc(e, t, n = X) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: u, call: a } = n, c = (F) => {
    (n.onWarn || Ge)(
      "Invalid watch source: ",
      F,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (F) => r ? F : Fe(F) || r === !1 || r === 0 ? mt(F, 1) : mt(F);
  let l, _, p, g, b = !1, E = !1;
  if (ie(e) ? (_ = () => e.value, b = Fe(e)) : ct(e) ? (_ = () => f(e), b = !0) : V(e) ? (E = !0, b = e.some((F) => ct(F) || Fe(F)), _ = () => e.map((F) => {
    if (ie(F))
      return F.value;
    if (ct(F))
      return f(F);
    if (B(F))
      return a ? a(F, 2) : F();
    c(F);
  })) : B(e) ? t ? _ = a ? () => a(e, 2) : e : _ = () => {
    if (p) {
      St();
      try {
        p();
      } finally {
        Tt();
      }
    }
    const F = Vt;
    Vt = l;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Vt = F;
    }
  } : (_ = Oe, c(e)), t && r) {
    const F = _, J = r === !0 ? 1 / 0 : r;
    _ = () => mt(F(), J);
  }
  const O = zu(), $ = () => {
    l.stop(), O && O.active && ni(O.effects, l);
  };
  if (i && t) {
    const F = t;
    t = (...J) => {
      F(...J), $();
    };
  }
  let N = E ? new Array(e.length).fill(ds) : ds;
  const ne = (F) => {
    if (!(!(l.flags & 1) || !l.dirty && !F))
      if (t) {
        const J = l.run();
        if (r || b || (E ? J.some((U, he) => kt(U, N[he])) : kt(J, N))) {
          p && p();
          const U = Vt;
          Vt = l;
          try {
            const he = [
              J,
              // pass undefined as the old value when it's changed for the first time
              N === ds ? void 0 : E && N[0] === ds ? [] : N,
              g
            ];
            a ? a(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            ), N = J;
          } finally {
            Vt = U;
          }
        }
      } else
        l.run();
  };
  return u && u(ne), l = new Wu(_), l.scheduler = o ? () => o(ne, !1) : ne, g = (F) => Jc(F, !1, l), p = l.onStop = () => {
    const F = Ps.get(l);
    if (F) {
      if (a)
        a(F, 4);
      else
        for (const J of F) J();
      Ps.delete(l);
    }
  }, l.onTrack = n.onTrack, l.onTrigger = n.onTrigger, t ? s ? ne(!0) : N = l.run() : o ? o(ne.bind(null, !0), !0) : l.run(), $.pause = l.pause.bind(l), $.resume = l.resume.bind(l), $.stop = $, $;
}
function mt(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ie(e))
    mt(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      mt(e[s], t, n);
  else if (Uu(e) || Kt(e))
    e.forEach((s) => {
      mt(s, t, n);
    });
  else if (Vu(e)) {
    for (const s in e)
      mt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && mt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Wt = [];
function _s(e) {
  Wt.push(e);
}
function gs() {
  Wt.pop();
}
let mr = !1;
function x(e, ...t) {
  if (mr) return;
  mr = !0, St();
  const n = Wt.length ? Wt[Wt.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Xc();
  if (s)
    bn(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, u;
          return (u = (o = i.toString) == null ? void 0 : o.call(i)) != null ? u : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${rr(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Qc(r)), console.warn(...i);
  }
  Tt(), mr = !1;
}
function Xc() {
  let e = Wt[Wt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Qc(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...ef(n));
  }), t;
}
function ef({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${rr(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...tf(e.props), i] : [r + i];
}
function tf(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...fa(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fa(e, t, n) {
  return de(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ie(t) ? (t = fa(e, H(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = H(t), n ? t : [`${e}=`, t]);
}
const fi = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function bn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    rs(r, t, n);
  }
}
function ht(e, t, n, s) {
  if (B(e)) {
    const r = bn(e, t, n, s);
    return r && si(r) && r.catch((i) => {
      rs(i, t, n);
    }), r;
  }
  if (V(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ht(e[i], t, n, s));
    return r;
  } else
    x(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function rs(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || X;
  if (t) {
    let u = t.parent;
    const a = t.proxy, c = fi[n];
    for (; u; ) {
      const f = u.ec;
      if (f) {
        for (let l = 0; l < f.length; l++)
          if (f[l](e, a, c) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      St(), bn(i, null, 10, [
        e,
        a,
        c
      ]), Tt();
      return;
    }
  }
  nf(e, n, r, s, o);
}
function nf(e, t, n, s = !0, r = !1) {
  {
    const i = fi[t];
    if (n && _s(n), x(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && gs(), s)
      throw e;
    console.error(e);
  }
}
const De = [];
let rt = -1;
const fn = [];
let Ot = null, on = 0;
const da = /* @__PURE__ */ Promise.resolve();
let ks = null;
const sf = 100;
function Gn(e) {
  const t = ks || da;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rf(e) {
  let t = rt + 1, n = De.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = De[s], i = qn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Qs(e) {
  if (!(e.flags & 1)) {
    const t = qn(e), n = De[De.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qn(n) ? De.push(e) : De.splice(rf(t), 0, e), e.flags |= 1, ha();
  }
}
function ha() {
  ks || (ks = da.then(ga));
}
function pa(e) {
  V(e) ? fn.push(...e) : Ot && e.id === -1 ? Ot.splice(on + 1, 0, e) : e.flags & 1 || (fn.push(e), e.flags |= 1), ha();
}
function zi(e, t, n = rt + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < De.length; n++) {
    const s = De[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || di(t, s))
        continue;
      De.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function _a(e) {
  if (fn.length) {
    const t = [...new Set(fn)].sort(
      (n, s) => qn(n) - qn(s)
    );
    if (fn.length = 0, Ot) {
      Ot.push(...t);
      return;
    }
    for (Ot = t, e = e || /* @__PURE__ */ new Map(), on = 0; on < Ot.length; on++) {
      const n = Ot[on];
      di(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ot = null, on = 0;
  }
}
const qn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ga(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => di(e, n);
  try {
    for (rt = 0; rt < De.length; rt++) {
      const n = De[rt];
      if (n && !(n.flags & 8)) {
        if (t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), bn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; rt < De.length; rt++) {
      const n = De[rt];
      n && (n.flags &= -2);
    }
    rt = -1, De.length = 0, _a(e), ks = null, (De.length || fn.length) && ga(e);
  }
}
function di(e, t) {
  const n = e.get(t) || 0;
  if (n > sf) {
    const s = t.i, r = s && Qa(s.type);
    return rs(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let lt = !1;
const ms = /* @__PURE__ */ new Map();
ss().__VUE_HMR_RUNTIME__ = {
  createRecord: br(ma),
  rerender: br(af),
  reload: br(lf)
};
const Jt = /* @__PURE__ */ new Map();
function of(e) {
  const t = e.type.__hmrId;
  let n = Jt.get(t);
  n || (ma(t, e.type), n = Jt.get(t)), n.instances.add(e);
}
function uf(e) {
  Jt.get(e.type.__hmrId).instances.delete(e);
}
function ma(e, t) {
  return Jt.has(e) ? !1 : (Jt.set(e, {
    initialDef: Rs(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rs(e) {
  return el(e) ? e.__vccOpts : e;
}
function af(e, t) {
  const n = Jt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Rs(s.type).render = t), s.renderCache = [], lt = !0, s.update(), lt = !1;
  }));
}
function lf(e, t) {
  const n = Jt.get(e);
  if (!n) return;
  t = Rs(t), Wi(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const i = s[r], o = Rs(i.type);
    let u = ms.get(o);
    u || (o !== n.initialDef && Wi(o, t), ms.set(o, u = /* @__PURE__ */ new Set())), u.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (u.add(i), i.ceReload(t.styles), u.delete(i)) : i.parent ? Qs(() => {
      lt = !0, i.parent.update(), lt = !1, u.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  pa(() => {
    ms.clear();
  });
}
function Wi(e, t) {
  me(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function br(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ut, xn = [], Dr = !1;
function is(e, ...t) {
  ut ? ut.emit(e, ...t) : Dr || xn.push({ event: e, args: t });
}
function ba(e, t) {
  var n, s;
  ut = e, ut ? (ut.enabled = !0, xn.forEach(({ event: r, args: i }) => ut.emit(r, ...i)), xn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    ba(i, t);
  }), setTimeout(() => {
    ut || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Dr = !0, xn = []);
  }, 3e3)) : (Dr = !0, xn = []);
}
function cf(e, t) {
  is("app:init", e, t, {
    Fragment: Se,
    Text: os,
    Comment: Ke,
    Static: Mn
  });
}
function ff(e) {
  is("app:unmount", e);
}
const df = /* @__PURE__ */ hi(
  "component:added"
  /* COMPONENT_ADDED */
), va = /* @__PURE__ */ hi(
  "component:updated"
  /* COMPONENT_UPDATED */
), hf = /* @__PURE__ */ hi(
  "component:removed"
  /* COMPONENT_REMOVED */
), pf = (e) => {
  ut && typeof ut.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ut.cleanupBuffer(e) && hf(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return (t) => {
    is(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const _f = /* @__PURE__ */ ya(
  "perf:start"
  /* PERFORMANCE_START */
), gf = /* @__PURE__ */ ya(
  "perf:end"
  /* PERFORMANCE_END */
);
function ya(e) {
  return (t, n, s) => {
    is(e, t.appContext.app, t.uid, t, n, s);
  };
}
function mf(e, t, n) {
  is(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ce = null, Ea = null;
function Ds(e) {
  const t = Ce;
  return Ce = e, Ea = e && e.type.__scopeId || null, t;
}
function bf(e, t = Ce, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ro(-1);
    const i = Ds(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Ds(i), s._d && ro(1);
    }
    return va(t), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Sa(e) {
  uc(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function vf(e, t) {
  if (Ce === null)
    return x("withDirectives can only be used inside render functions."), e;
  const n = sr(Ce), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, u, a = X] = t[r];
    i && (B(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && mt(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: a
    }));
  }
  return e;
}
function Ft(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const u = r[o];
    i && (u.oldValue = i[o].value);
    let a = u.dir[s];
    a && (St(), ht(a, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Tt());
  }
}
const yf = Symbol("_vte"), Ef = (e) => e.__isTeleport;
function pi(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ta(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Sf = /* @__PURE__ */ new WeakSet();
function Ls(e, t, n, s, r = !1) {
  if (V(e)) {
    e.forEach(
      (g, b) => Ls(
        g,
        t && (V(t) ? t[b] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Fn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ls(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? sr(s.component) : s.el, o = r ? null : i, { i: u, r: a } = e;
  if (!u) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, f = u.refs === X ? u.refs = {} : u.refs, l = u.setupState, _ = H(l), p = l === X ? () => !1 : (g) => (Y(_, g) && !ie(_[g]) && x(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), Sf.has(_[g]) ? !1 : Y(_, g));
  if (c != null && c !== a && (de(c) ? (f[c] = null, p(c) && (l[c] = null)) : ie(c) && (c.value = null)), B(a))
    bn(a, u, 12, [o, f]);
  else {
    const g = de(a), b = ie(a);
    if (g || b) {
      const E = () => {
        if (e.f) {
          const O = g ? p(a) ? l[a] : f[a] : a.value;
          r ? V(O) && ni(O, i) : V(O) ? O.includes(i) || O.push(i) : g ? (f[a] = [i], p(a) && (l[a] = f[a])) : (a.value = [i], e.k && (f[e.k] = a.value));
        } else g ? (f[a] = o, p(a) && (l[a] = o)) : b ? (a.value = o, e.k && (f[e.k] = o)) : x("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (E.id = -1, je(E, n)) : E();
    } else
      x("Invalid template ref type:", a, `(${typeof a})`);
  }
}
ss().requestIdleCallback;
ss().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, _i = (e) => e.type.__isKeepAlive;
function Tf(e, t) {
  wa(e, "a", t);
}
function wf(e, t) {
  wa(e, "da", t);
}
function wa(e, t, n = _e) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (er(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      _i(r.parent.vnode) && Of(s, t, n, r), r = r.parent;
  }
}
function Of(e, t, n, s) {
  const r = er(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Aa(() => {
    ni(s[t], r);
  }, n);
}
function er(e, t, n = _e, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      St();
      const u = us(n), a = ht(t, n, e, o);
      return u(), Tt(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  } else {
    const r = Mt(fi[e].replace(/ hook$/, ""));
    x(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const wt = (e) => (t, n = _e) => {
  (!Jn || e === "sp") && er(e, (...s) => t(...s), n);
}, Cf = wt("bm"), Oa = wt("m"), Af = wt(
  "bu"
), Ca = wt("u"), xf = wt(
  "bum"
), Aa = wt("um"), If = wt(
  "sp"
), Pf = wt("rtg"), kf = wt("rtc");
function Rf(e, t = _e) {
  er("ec", e, t);
}
const Df = Symbol.for("v-ndc");
function Lf(e, t, n, s) {
  let r;
  const i = n, o = V(e);
  if (o || de(e)) {
    const u = o && ct(e);
    let a = !1;
    u && (a = !Fe(e), e = Ys(e)), r = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      r[c] = t(
        a ? we(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || x(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let u = 0; u < e; u++)
      r[u] = t(u + 1, u, void 0, i);
  } else if (te(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (u, a) => t(u, a, void 0, i)
      );
    else {
      const u = Object.keys(e);
      r = new Array(u.length);
      for (let a = 0, c = u.length; a < c; a++) {
        const f = u[a];
        r[a] = t(e[f], f, a, i);
      }
    }
  else
    r = [];
  return r;
}
const Lr = (e) => e ? Za(e) ? sr(e) : Lr(e.parent) : null, Gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ me(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => at(e.props),
    $attrs: (e) => at(e.attrs),
    $slots: (e) => at(e.slots),
    $refs: (e) => at(e.refs),
    $parent: (e) => Lr(e.parent),
    $root: (e) => Lr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Pa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Gn.bind(e.proxy)),
    $watch: (e) => pd.bind(e)
  })
), gi = (e) => e === "_" || e === "$", vr = (e, t) => e !== X && !e.__isScriptSetup && Y(e, t), xa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: u, appContext: a } = e;
    if (t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (vr(s, t))
          return o[t] = 1, s[t];
        if (r !== X && Y(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && Y(c, t)
        )
          return o[t] = 3, i[t];
        if (n !== X && Y(n, t))
          return o[t] = 4, n[t];
        Nr && (o[t] = 0);
      }
    }
    const f = Gt[t];
    let l, _;
    if (f)
      return t === "$attrs" ? (ye(e.attrs, "get", ""), Us()) : t === "$slots" && ye(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (l = u.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== X && Y(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      _ = a.config.globalProperties, Y(_, t)
    )
      return _[t];
    Ce && (!de(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== X && gi(t[0]) && Y(r, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ce && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return vr(r, t) ? (r[t] = n, !0) : r.__isScriptSetup && Y(r, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== X && Y(s, t) ? (s[t] = n, !0) : Y(e.props, t) ? (x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let u;
    return !!n[o] || e !== X && Y(e, o) || vr(t, o) || (u = i[0]) && Y(u, o) || Y(s, o) || Y(Gt, o) || Y(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
xa.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function Nf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Gt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Gt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Oe
    });
  }), t;
}
function Ff(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Oe
    });
  });
}
function Uf(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(H(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (gi(s[0])) {
        x(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: Oe
      });
    }
  });
}
function Gi(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Mf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Nr = !0;
function Vf(e) {
  const t = Pa(e), n = e.proxy, s = e.ctx;
  Nr = !1, t.beforeCreate && qi(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: u,
    provide: a,
    inject: c,
    // lifecycle
    created: f,
    beforeMount: l,
    mounted: _,
    beforeUpdate: p,
    updated: g,
    activated: b,
    deactivated: E,
    beforeDestroy: O,
    beforeUnmount: $,
    destroyed: N,
    unmounted: ne,
    render: F,
    renderTracked: J,
    renderTriggered: U,
    errorCaptured: he,
    serverPrefetch: Q,
    // public API
    expose: D,
    inheritAttrs: k,
    // assets
    components: W,
    directives: ce,
    filters: Ae
  } = t, xe = Mf();
  {
    const [R] = e.propsOptions;
    if (R)
      for (const K in R)
        xe("Props", K);
  }
  if (c && $f(c, s, xe), o)
    for (const R in o) {
      const K = o[R];
      B(K) ? (Object.defineProperty(s, R, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), xe("Methods", R)) : x(
        `Method "${R}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    B(r) || x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = r.call(n, n);
    if (si(R) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !te(R))
      x("data() should return an object.");
    else {
      e.data = Zs(R);
      for (const K in R)
        xe("Data", K), gi(K[0]) || Object.defineProperty(s, K, {
          configurable: !0,
          enumerable: !0,
          get: () => R[K],
          set: Oe
        });
    }
  }
  if (Nr = !0, i)
    for (const R in i) {
      const K = i[R], G = B(K) ? K.bind(n, n) : B(K.get) ? K.get.bind(n, n) : Oe;
      G === Oe && x(`Computed property "${R}" has no getter.`);
      const Xe = !B(K) && B(K.set) ? K.set.bind(n) : () => {
        x(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      }, Ue = yi({
        get: G,
        set: Xe
      });
      Object.defineProperty(s, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: (be) => Ue.value = be
      }), xe("Computed", R);
    }
  if (u)
    for (const R in u)
      Ia(u[R], s, n, R);
  if (a) {
    const R = B(a) ? a.call(n) : a;
    Reflect.ownKeys(R).forEach((K) => {
      Wf(K, R[K]);
    });
  }
  f && qi(f, e, "c");
  function oe(R, K) {
    V(K) ? K.forEach((G) => R(G.bind(n))) : K && R(K.bind(n));
  }
  if (oe(Cf, l), oe(Oa, _), oe(Af, p), oe(Ca, g), oe(Tf, b), oe(wf, E), oe(Rf, he), oe(kf, J), oe(Pf, U), oe(xf, $), oe(Aa, ne), oe(If, Q), V(D))
    if (D.length) {
      const R = e.exposed || (e.exposed = {});
      D.forEach((K) => {
        Object.defineProperty(R, K, {
          get: () => n[K],
          set: (G) => n[K] = G
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Oe && (e.render = F), k != null && (e.inheritAttrs = k), W && (e.components = W), ce && (e.directives = ce), Q && Ta(e);
}
function $f(e, t, n = Oe) {
  V(e) && (e = Fr(e));
  for (const s in e) {
    const r = e[s];
    let i;
    te(r) ? "default" in r ? i = dn(
      r.from || s,
      r.default,
      !0
    ) : i = dn(r.from || s) : i = dn(r), ie(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i, n("Inject", s);
  }
}
function qi(e, t, n) {
  ht(
    V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ia(e, t, n, s) {
  let r = s.includes(".") ? Ha(n, s) : () => n[s];
  if (de(e)) {
    const i = t[e];
    B(i) ? Un(r, i) : x(`Invalid watch handler specified by key "${e}"`, i);
  } else if (B(e))
    Un(r, e.bind(n));
  else if (te(e))
    if (V(e))
      e.forEach((i) => Ia(i, t, n, s));
    else {
      const i = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(i) ? Un(r, i, e) : x(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    x(`Invalid watch option: "${s}"`, e);
}
function Pa(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = i.get(t);
  let a;
  return u ? a = u : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (c) => Ns(a, c, o, !0)
  ), Ns(a, t, o)), te(t) && i.set(t, a), a;
}
function Ns(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Ns(e, i, n, !0), r && r.forEach(
    (o) => Ns(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const u = jf[o] || n && n[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const jf = {
  data: Yi,
  props: Ji,
  emits: Ji,
  // objects
  methods: In,
  computed: In,
  // lifecycle
  beforeCreate: Pe,
  created: Pe,
  beforeMount: Pe,
  mounted: Pe,
  beforeUpdate: Pe,
  updated: Pe,
  beforeDestroy: Pe,
  beforeUnmount: Pe,
  destroyed: Pe,
  unmounted: Pe,
  activated: Pe,
  deactivated: Pe,
  errorCaptured: Pe,
  serverPrefetch: Pe,
  // assets
  components: In,
  directives: In,
  // watch
  watch: Hf,
  // provide / inject
  provide: Yi,
  inject: Bf
};
function Yi(e, t) {
  return t ? e ? function() {
    return me(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bf(e, t) {
  return In(Fr(e), Fr(t));
}
function Fr(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function In(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ji(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    Gi(e),
    Gi(t ?? {})
  ) : t;
}
function Hf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Pe(e[s], t[s]);
  return n;
}
function ka() {
  return {
    app: null,
    config: {
      isNativeTag: ic,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Kf = 0;
function zf(e, t) {
  return function(s, r = null) {
    B(s) || (s = me({}, s)), r != null && !te(r) && (x("root props passed to app.mount() must be an object."), r = null);
    const i = ka(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let a = !1;
    const c = i.app = {
      _uid: Kf++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: uo,
      get config() {
        return i.config;
      },
      set config(f) {
        x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...l) {
        return o.has(f) ? x("Plugin has already been applied to target app.") : f && B(f.install) ? (o.add(f), f.install(c, ...l)) : B(f) ? (o.add(f), f(c, ...l)) : x(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(f) {
        return i.mixins.includes(f) ? x(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), c;
      },
      component(f, l) {
        return Br(f, i.config), l ? (i.components[f] && x(`Component "${f}" has already been registered in target app.`), i.components[f] = l, c) : i.components[f];
      },
      directive(f, l) {
        return Sa(f), l ? (i.directives[f] && x(`Directive "${f}" has already been registered in target app.`), i.directives[f] = l, c) : i.directives[f];
      },
      mount(f, l, _) {
        if (a)
          x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          f.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = c._ceVNode || ze(s, r);
          return p.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), i.reload = () => {
            e(
              Dt(p),
              f,
              _
            );
          }, e(p, f, _), a = !0, c._container = f, f.__vue_app__ = c, c._instance = p.component, cf(c, uo), sr(p.component);
        }
      },
      onUnmount(f) {
        typeof f != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), u.push(f);
      },
      unmount() {
        a ? (ht(
          u,
          c._instance,
          16
        ), e(null, c._container), c._instance = null, ff(c), delete c._container.__vue_app__) : x("Cannot unmount an app that is not mounted.");
      },
      provide(f, l) {
        return f in i.provides && x(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ), i.provides[f] = l, c;
      },
      runWithContext(f) {
        const l = qt;
        qt = c;
        try {
          return f();
        } finally {
          qt = l;
        }
      }
    };
    return c;
  };
}
let qt = null;
function Wf(e, t) {
  if (!_e)
    x("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const s = _e.parent && _e.parent.provides;
    s === n && (n = _e.provides = Object.create(s)), n[e] = t;
  }
}
function dn(e, t, n = !1) {
  const s = _e || Ce;
  if (s || qt) {
    const r = qt ? qt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(s && s.proxy) : t;
    x(`injection "${String(e)}" not found.`);
  } else
    x("inject() can only be used inside setup() or functional components.");
}
function Gf() {
  return !!(_e || Ce || qt);
}
const Ra = {}, Da = () => Object.create(Ra), La = (e) => Object.getPrototypeOf(e) === Ra;
function qf(e, t, n, s = !1) {
  const r = {}, i = Da();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Na(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  Ua(t || {}, r, e), n ? e.props = s ? r : Bc(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Yf(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Jf(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, u = H(r), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Yf(e) && (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let l = 0; l < f.length; l++) {
        let _ = f[l];
        if (tr(e.emitsOptions, _))
          continue;
        const p = t[_];
        if (a)
          if (Y(i, _))
            p !== i[_] && (i[_] = p, c = !0);
          else {
            const g = Je(_);
            r[g] = Ur(
              a,
              u,
              g,
              p,
              e,
              !1
            );
          }
        else
          p !== i[_] && (i[_] = p, c = !0);
      }
    }
  } else {
    Na(e, t, r, i) && (c = !0);
    let f;
    for (const l in u)
      (!t || // for camelCase
      !Y(t, l) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Rt(l)) === l || !Y(t, f))) && (a ? n && // for camelCase
      (n[l] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[l] = Ur(
        a,
        u,
        l,
        void 0,
        e,
        !0
      )) : delete r[l]);
    if (i !== u)
      for (const l in i)
        (!t || !Y(t, l)) && (delete i[l], c = !0);
  }
  c && ot(e.attrs, "set", ""), Ua(t || {}, r, e);
}
function Na(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let a in t) {
      if (Rn(a))
        continue;
      const c = t[a];
      let f;
      r && Y(r, f = Je(a)) ? !i || !i.includes(f) ? n[f] = c : (u || (u = {}))[f] = c : tr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (i) {
    const a = H(n), c = u || X;
    for (let f = 0; f < i.length; f++) {
      const l = i[f];
      n[l] = Ur(
        r,
        a,
        l,
        c[l],
        e,
        !Y(c, l)
      );
    }
  }
  return o;
}
function Ur(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const u = Y(o, "default");
    if (u && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && B(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          s = c[n];
        else {
          const f = us(r);
          s = c[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !u ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Rt(n)) && (s = !0));
  }
  return s;
}
const Zf = /* @__PURE__ */ new WeakMap();
function Fa(e, t, n = !1) {
  const s = n ? Zf : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, u = [];
  let a = !1;
  if (!B(e)) {
    const f = (l) => {
      a = !0;
      const [_, p] = Fa(l, t, !0);
      me(o, _), p && u.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !a)
    return te(e) && s.set(e, cn), cn;
  if (V(i))
    for (let f = 0; f < i.length; f++) {
      de(i[f]) || x("props must be strings when using array syntax.", i[f]);
      const l = Je(i[f]);
      Zi(l) && (o[l] = X);
    }
  else if (i) {
    te(i) || x("invalid props options", i);
    for (const f in i) {
      const l = Je(f);
      if (Zi(l)) {
        const _ = i[f], p = o[l] = V(_) || B(_) ? { type: _ } : me({}, _), g = p.type;
        let b = !1, E = !0;
        if (V(g))
          for (let O = 0; O < g.length; ++O) {
            const $ = g[O], N = B($) && $.name;
            if (N === "Boolean") {
              b = !0;
              break;
            } else N === "String" && (E = !1);
          }
        else
          b = B(g) && g.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = b, p[
          1
          /* shouldCastTrue */
        ] = E, (b || Y(p, "default")) && u.push(l);
      }
    }
  }
  const c = [o, u];
  return te(e) && s.set(e, c), c;
}
function Zi(e) {
  return e[0] !== "$" && !Rn(e) ? !0 : (x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Xf(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ua(e, t, n) {
  const s = H(t), r = n.propsOptions[0], i = Object.keys(e).map((o) => Je(o));
  for (const o in r) {
    let u = r[o];
    u != null && Qf(
      o,
      s[o],
      u,
      at(s),
      !i.includes(o)
    );
  }
}
function Qf(e, t, n, s, r) {
  const { type: i, required: o, validator: u, skipCheck: a } = n;
  if (o && r) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (i != null && i !== !0 && !a) {
      let c = !1;
      const f = V(i) ? i : [i], l = [];
      for (let _ = 0; _ < f.length && !c; _++) {
        const { valid: p, expectedType: g } = td(t, f[_]);
        l.push(g || ""), c = p;
      }
      if (!c) {
        x(nd(e, t, l));
        return;
      }
    }
    u && !u(t, s) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ed = /* @__PURE__ */ Et(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function td(e, t) {
  let n;
  const s = Xf(t);
  if (s === "null")
    n = e === null;
  else if (ed(s)) {
    const r = typeof e;
    n = r === s.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else s === "Object" ? n = te(e) : s === "Array" ? n = V(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function nd(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(qs).join(" | ")}`;
  const r = n[0], i = ri(t), o = Xi(t, r), u = Xi(t, i);
  return n.length === 1 && Qi(r) && !sd(r, i) && (s += ` with value ${o}`), s += `, got ${i} `, Qi(i) && (s += `with value ${u}.`), s;
}
function Xi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Qi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function sd(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ma = (e) => e[0] === "_" || e === "$stable", mi = (e) => V(e) ? e.map(Ye) : [Ye(e)], rd = (e, t, n) => {
  if (t._n)
    return t;
  const s = bf((...r) => (_e && (!n || n.root === _e.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), mi(t(...r))), n);
  return s._c = !1, s;
}, Va = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Ma(r)) continue;
    const i = e[r];
    if (B(i))
      t[r] = rd(r, i, s);
    else if (i != null) {
      x(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const o = mi(i);
      t[r] = () => o;
    }
  }
}, $a = (e, t) => {
  _i(e.vnode) || x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = mi(t);
  e.slots.default = () => n;
}, Mr = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, id = (e, t, n) => {
  const s = e.slots = Da();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Mr(s, t, n), n && xs(s, "_", r, !0)) : Va(t, s);
  } else t && $a(e, t);
}, od = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = X;
  if (s.shapeFlag & 32) {
    const u = t._;
    u ? lt ? (Mr(r, t, n), ot(e, "set", "$slots")) : n && u === 1 ? i = !1 : Mr(r, t, n) : (i = !t.$stable, Va(t, r)), o = t;
  } else t && ($a(e, t), o = { default: 1 });
  if (i)
    for (const u in r)
      !Ma(u) && o[u] == null && delete r[u];
};
let Cn, At;
function tn(e, t) {
  e.appContext.config.performance && Fs() && At.mark(`vue-${t}-${e.uid}`), _f(e, t, Fs() ? At.now() : Date.now());
}
function nn(e, t) {
  if (e.appContext.config.performance && Fs()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    At.mark(s), At.measure(
      `<${rr(e, e.type)}> ${t}`,
      n,
      s
    ), At.clearMarks(n), At.clearMarks(s);
  }
  gf(e, t, Fs() ? At.now() : Date.now());
}
function Fs() {
  return Cn !== void 0 || (typeof window < "u" && window.performance ? (Cn = !0, At = window.performance) : Cn = !1), Cn;
}
function ud() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const je = Ed;
function ad(e) {
  return ld(e);
}
function ld(e, t) {
  ud();
  const n = ss();
  n.__VUE__ = !0, ba(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: u,
    createComment: a,
    setText: c,
    setElementText: f,
    parentNode: l,
    nextSibling: _,
    setScopeId: p = Oe,
    insertStaticContent: g
  } = e, b = (d, h, m, T = null, v = null, S = null, I = void 0, A = null, C = lt ? !1 : !!h.dynamicChildren) => {
    if (d === h)
      return;
    d && !An(d, h) && (T = ls(d), Me(d, v, S, !0), d = null), h.patchFlag === -2 && (C = !1, h.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: P } = h;
    switch (w) {
      case os:
        E(d, h, m, T);
        break;
      case Ke:
        O(d, h, m, T);
        break;
      case Mn:
        d == null ? $(h, m, T, I) : N(d, h, m, I);
        break;
      case Se:
        ce(
          d,
          h,
          m,
          T,
          v,
          S,
          I,
          A,
          C
        );
        break;
      default:
        P & 1 ? J(
          d,
          h,
          m,
          T,
          v,
          S,
          I,
          A,
          C
        ) : P & 6 ? Ae(
          d,
          h,
          m,
          T,
          v,
          S,
          I,
          A,
          C
        ) : P & 64 || P & 128 ? w.process(
          d,
          h,
          m,
          T,
          v,
          S,
          I,
          A,
          C,
          Tn
        ) : x("Invalid VNode type:", w, `(${typeof w})`);
    }
    j != null && v && Ls(j, d && d.ref, S, h || d, !h);
  }, E = (d, h, m, T) => {
    if (d == null)
      s(
        h.el = u(h.children),
        m,
        T
      );
    else {
      const v = h.el = d.el;
      h.children !== d.children && c(v, h.children);
    }
  }, O = (d, h, m, T) => {
    d == null ? s(
      h.el = a(h.children || ""),
      m,
      T
    ) : h.el = d.el;
  }, $ = (d, h, m, T) => {
    [d.el, d.anchor] = g(
      d.children,
      h,
      m,
      T,
      d.el,
      d.anchor
    );
  }, N = (d, h, m, T) => {
    if (h.children !== d.children) {
      const v = _(d.anchor);
      F(d), [h.el, h.anchor] = g(
        h.children,
        m,
        v,
        T
      );
    } else
      h.el = d.el, h.anchor = d.anchor;
  }, ne = ({ el: d, anchor: h }, m, T) => {
    let v;
    for (; d && d !== h; )
      v = _(d), s(d, m, T), d = v;
    s(h, m, T);
  }, F = ({ el: d, anchor: h }) => {
    let m;
    for (; d && d !== h; )
      m = _(d), r(d), d = m;
    r(h);
  }, J = (d, h, m, T, v, S, I, A, C) => {
    h.type === "svg" ? I = "svg" : h.type === "math" && (I = "mathml"), d == null ? U(
      h,
      m,
      T,
      v,
      S,
      I,
      A,
      C
    ) : D(
      d,
      h,
      v,
      S,
      I,
      A,
      C
    );
  }, U = (d, h, m, T, v, S, I, A) => {
    let C, w;
    const { props: j, shapeFlag: P, transition: M, dirs: z } = d;
    if (C = d.el = o(
      d.type,
      S,
      j && j.is,
      j
    ), P & 8 ? f(C, d.children) : P & 16 && Q(
      d.children,
      C,
      null,
      T,
      v,
      yr(d, S),
      I,
      A
    ), z && Ft(d, null, T, "created"), he(C, d, d.scopeId, I, T), j) {
      for (const re in j)
        re !== "value" && !Rn(re) && i(C, re, null, j[re], S, T);
      "value" in j && i(C, "value", null, j.value, S), (w = j.onVnodeBeforeMount) && nt(w, T, d);
    }
    xs(C, "__vnode", d, !0), xs(C, "__vueParentComponent", T, !0), z && Ft(d, null, T, "beforeMount");
    const q = cd(v, M);
    q && M.beforeEnter(C), s(C, h, m), ((w = j && j.onVnodeMounted) || q || z) && je(() => {
      w && nt(w, T, d), q && M.enter(C), z && Ft(d, null, T, "mounted");
    }, v);
  }, he = (d, h, m, T, v) => {
    if (m && p(d, m), T)
      for (let S = 0; S < T.length; S++)
        p(d, T[S]);
    if (v) {
      let S = v.subTree;
      if (S.patchFlag > 0 && S.patchFlag & 2048 && (S = bi(S.children) || S), h === S || Wa(S.type) && (S.ssContent === h || S.ssFallback === h)) {
        const I = v.vnode;
        he(
          d,
          I,
          I.scopeId,
          I.slotScopeIds,
          v.parent
        );
      }
    }
  }, Q = (d, h, m, T, v, S, I, A, C = 0) => {
    for (let w = C; w < d.length; w++) {
      const j = d[w] = A ? Ct(d[w]) : Ye(d[w]);
      b(
        null,
        j,
        h,
        m,
        T,
        v,
        S,
        I,
        A
      );
    }
  }, D = (d, h, m, T, v, S, I) => {
    const A = h.el = d.el;
    A.__vnode = h;
    let { patchFlag: C, dynamicChildren: w, dirs: j } = h;
    C |= d.patchFlag & 16;
    const P = d.props || X, M = h.props || X;
    let z;
    if (m && Ut(m, !1), (z = M.onVnodeBeforeUpdate) && nt(z, m, h, d), j && Ft(h, d, m, "beforeUpdate"), m && Ut(m, !0), lt && (C = 0, I = !1, w = null), (P.innerHTML && M.innerHTML == null || P.textContent && M.textContent == null) && f(A, ""), w ? (k(
      d.dynamicChildren,
      w,
      A,
      m,
      T,
      yr(h, v),
      S
    ), Vr(d, h)) : I || G(
      d,
      h,
      A,
      null,
      m,
      T,
      yr(h, v),
      S,
      !1
    ), C > 0) {
      if (C & 16)
        W(A, P, M, m, v);
      else if (C & 2 && P.class !== M.class && i(A, "class", null, M.class, v), C & 4 && i(A, "style", P.style, M.style, v), C & 8) {
        const q = h.dynamicProps;
        for (let re = 0; re < q.length; re++) {
          const ee = q[re], $e = P[ee], Ve = M[ee];
          (Ve !== $e || ee === "value") && i(A, ee, $e, Ve, v, m);
        }
      }
      C & 1 && d.children !== h.children && f(A, h.children);
    } else !I && w == null && W(A, P, M, m, v);
    ((z = M.onVnodeUpdated) || j) && je(() => {
      z && nt(z, m, h, d), j && Ft(h, d, m, "updated");
    }, T);
  }, k = (d, h, m, T, v, S, I) => {
    for (let A = 0; A < h.length; A++) {
      const C = d[A], w = h[A], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !An(C, w) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? l(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      b(
        C,
        w,
        j,
        null,
        T,
        v,
        S,
        I,
        !0
      );
    }
  }, W = (d, h, m, T, v) => {
    if (h !== m) {
      if (h !== X)
        for (const S in h)
          !Rn(S) && !(S in m) && i(
            d,
            S,
            h[S],
            null,
            v,
            T
          );
      for (const S in m) {
        if (Rn(S)) continue;
        const I = m[S], A = h[S];
        I !== A && S !== "value" && i(d, S, A, I, v, T);
      }
      "value" in m && i(d, "value", h.value, m.value, v);
    }
  }, ce = (d, h, m, T, v, S, I, A, C) => {
    const w = h.el = d ? d.el : u(""), j = h.anchor = d ? d.anchor : u("");
    let { patchFlag: P, dynamicChildren: M, slotScopeIds: z } = h;
    // #5523 dev root fragment may inherit directives
    (lt || P & 2048) && (P = 0, C = !1, M = null), z && (A = A ? A.concat(z) : z), d == null ? (s(w, m, T), s(j, m, T), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      m,
      j,
      v,
      S,
      I,
      A,
      C
    )) : P > 0 && P & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (k(
      d.dynamicChildren,
      M,
      m,
      v,
      S,
      I,
      A
    ), Vr(d, h)) : G(
      d,
      h,
      m,
      j,
      v,
      S,
      I,
      A,
      C
    );
  }, Ae = (d, h, m, T, v, S, I, A, C) => {
    h.slotScopeIds = A, d == null ? h.shapeFlag & 512 ? v.ctx.activate(
      h,
      m,
      T,
      I,
      C
    ) : xe(
      h,
      m,
      T,
      v,
      S,
      I,
      C
    ) : oe(d, h, C);
  }, xe = (d, h, m, T, v, S, I) => {
    const A = d.component = Pd(
      d,
      T,
      v
    );
    if (A.type.__hmrId && of(A), _s(d), tn(A, "mount"), _i(d) && (A.ctx.renderer = Tn), tn(A, "init"), Rd(A, !1, I), nn(A, "init"), A.asyncDep) {
      if (lt && (d.el = null), v && v.registerDep(A, R, I), !d.el) {
        const C = A.subTree = ze(Ke);
        O(null, C, h, m);
      }
    } else
      R(
        A,
        d,
        h,
        m,
        v,
        S,
        I
      );
    gs(), nn(A, "mount");
  }, oe = (d, h, m) => {
    const T = h.component = d.component;
    if (vd(d, h, m))
      if (T.asyncDep && !T.asyncResolved) {
        _s(h), K(T, h, m), gs();
        return;
      } else
        T.next = h, T.update();
    else
      h.el = d.el, T.vnode = h;
  }, R = (d, h, m, T, v, S, I) => {
    const A = () => {
      if (d.isMounted) {
        let { next: P, bu: M, u: z, parent: q, vnode: re } = d;
        {
          const et = ja(d);
          if (et) {
            P && (P.el = re.el, K(d, P, I)), et.asyncDep.then(() => {
              d.isUnmounted || A();
            });
            return;
          }
        }
        let ee = P, $e;
        _s(P || d.vnode), Ut(d, !1), P ? (P.el = re.el, K(d, P, I)) : P = re, M && rn(M), ($e = P.props && P.props.onVnodeBeforeUpdate) && nt($e, q, P, re), Ut(d, !0), tn(d, "render");
        const Ve = to(d);
        nn(d, "render");
        const Qe = d.subTree;
        d.subTree = Ve, tn(d, "patch"), b(
          Qe,
          Ve,
          // parent may have changed if it's in a teleport
          l(Qe.el),
          // anchor may have changed if it's in a fragment
          ls(Qe),
          d,
          v,
          S
        ), nn(d, "patch"), P.el = Ve.el, ee === null && yd(d, Ve.el), z && je(z, v), ($e = P.props && P.props.onVnodeUpdated) && je(
          () => nt($e, q, P, re),
          v
        ), va(d), gs();
      } else {
        let P;
        const { el: M, props: z } = h, { bm: q, m: re, parent: ee, root: $e, type: Ve } = d, Qe = Fn(h);
        Ut(d, !1), q && rn(q), !Qe && (P = z && z.onVnodeBeforeMount) && nt(P, ee, h), Ut(d, !0);
        {
          $e.ce && $e.ce._injectChildStyle(Ve), tn(d, "render");
          const et = d.subTree = to(d);
          nn(d, "render"), tn(d, "patch"), b(
            null,
            et,
            m,
            T,
            d,
            v,
            S
          ), nn(d, "patch"), h.el = et.el;
        }
        if (re && je(re, v), !Qe && (P = z && z.onVnodeMounted)) {
          const et = h;
          je(
            () => nt(P, ee, et),
            v
          );
        }
        (h.shapeFlag & 256 || ee && Fn(ee.vnode) && ee.vnode.shapeFlag & 256) && d.a && je(d.a, v), d.isMounted = !0, df(d), h = m = T = null;
      }
    };
    d.scope.on();
    const C = d.effect = new Wu(A);
    d.scope.off();
    const w = d.update = C.run.bind(C), j = d.job = C.runIfDirty.bind(C);
    j.i = d, j.id = d.uid, C.scheduler = () => Qs(j), Ut(d, !0), C.onTrack = d.rtc ? (P) => rn(d.rtc, P) : void 0, C.onTrigger = d.rtg ? (P) => rn(d.rtg, P) : void 0, w();
  }, K = (d, h, m) => {
    h.component = d;
    const T = d.vnode.props;
    d.vnode = h, d.next = null, Jf(d, h.props, T, m), od(d, h.children, m), St(), zi(d), Tt();
  }, G = (d, h, m, T, v, S, I, A, C = !1) => {
    const w = d && d.children, j = d ? d.shapeFlag : 0, P = h.children, { patchFlag: M, shapeFlag: z } = h;
    if (M > 0) {
      if (M & 128) {
        Ue(
          w,
          P,
          m,
          T,
          v,
          S,
          I,
          A,
          C
        );
        return;
      } else if (M & 256) {
        Xe(
          w,
          P,
          m,
          T,
          v,
          S,
          I,
          A,
          C
        );
        return;
      }
    }
    z & 8 ? (j & 16 && Sn(w, v, S), P !== w && f(m, P)) : j & 16 ? z & 16 ? Ue(
      w,
      P,
      m,
      T,
      v,
      S,
      I,
      A,
      C
    ) : Sn(w, v, S, !0) : (j & 8 && f(m, ""), z & 16 && Q(
      P,
      m,
      T,
      v,
      S,
      I,
      A,
      C
    ));
  }, Xe = (d, h, m, T, v, S, I, A, C) => {
    d = d || cn, h = h || cn;
    const w = d.length, j = h.length, P = Math.min(w, j);
    let M;
    for (M = 0; M < P; M++) {
      const z = h[M] = C ? Ct(h[M]) : Ye(h[M]);
      b(
        d[M],
        z,
        m,
        null,
        v,
        S,
        I,
        A,
        C
      );
    }
    w > j ? Sn(
      d,
      v,
      S,
      !0,
      !1,
      P
    ) : Q(
      h,
      m,
      T,
      v,
      S,
      I,
      A,
      C,
      P
    );
  }, Ue = (d, h, m, T, v, S, I, A, C) => {
    let w = 0;
    const j = h.length;
    let P = d.length - 1, M = j - 1;
    for (; w <= P && w <= M; ) {
      const z = d[w], q = h[w] = C ? Ct(h[w]) : Ye(h[w]);
      if (An(z, q))
        b(
          z,
          q,
          m,
          null,
          v,
          S,
          I,
          A,
          C
        );
      else
        break;
      w++;
    }
    for (; w <= P && w <= M; ) {
      const z = d[P], q = h[M] = C ? Ct(h[M]) : Ye(h[M]);
      if (An(z, q))
        b(
          z,
          q,
          m,
          null,
          v,
          S,
          I,
          A,
          C
        );
      else
        break;
      P--, M--;
    }
    if (w > P) {
      if (w <= M) {
        const z = M + 1, q = z < j ? h[z].el : T;
        for (; w <= M; )
          b(
            null,
            h[w] = C ? Ct(h[w]) : Ye(h[w]),
            m,
            q,
            v,
            S,
            I,
            A,
            C
          ), w++;
      }
    } else if (w > M)
      for (; w <= P; )
        Me(d[w], v, S, !0), w++;
    else {
      const z = w, q = w, re = /* @__PURE__ */ new Map();
      for (w = q; w <= M; w++) {
        const Ie = h[w] = C ? Ct(h[w]) : Ye(h[w]);
        Ie.key != null && (re.has(Ie.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(Ie.key),
          "Make sure keys are unique."
        ), re.set(Ie.key, w));
      }
      let ee, $e = 0;
      const Ve = M - q + 1;
      let Qe = !1, et = 0;
      const wn = new Array(Ve);
      for (w = 0; w < Ve; w++) wn[w] = 0;
      for (w = z; w <= P; w++) {
        const Ie = d[w];
        if ($e >= Ve) {
          Me(Ie, v, S, !0);
          continue;
        }
        let tt;
        if (Ie.key != null)
          tt = re.get(Ie.key);
        else
          for (ee = q; ee <= M; ee++)
            if (wn[ee - q] === 0 && An(Ie, h[ee])) {
              tt = ee;
              break;
            }
        tt === void 0 ? Me(Ie, v, S, !0) : (wn[tt - q] = w + 1, tt >= et ? et = tt : Qe = !0, b(
          Ie,
          h[tt],
          m,
          null,
          v,
          S,
          I,
          A,
          C
        ), $e++);
      }
      const Mi = Qe ? fd(wn) : cn;
      for (ee = Mi.length - 1, w = Ve - 1; w >= 0; w--) {
        const Ie = q + w, tt = h[Ie], Vi = Ie + 1 < j ? h[Ie + 1].el : T;
        wn[w] === 0 ? b(
          null,
          tt,
          m,
          Vi,
          v,
          S,
          I,
          A,
          C
        ) : Qe && (ee < 0 || w !== Mi[ee] ? be(tt, m, Vi, 2) : ee--);
      }
    }
  }, be = (d, h, m, T, v = null) => {
    const { el: S, type: I, transition: A, children: C, shapeFlag: w } = d;
    if (w & 6) {
      be(d.component.subTree, h, m, T);
      return;
    }
    if (w & 128) {
      d.suspense.move(h, m, T);
      return;
    }
    if (w & 64) {
      I.move(d, h, m, Tn);
      return;
    }
    if (I === Se) {
      s(S, h, m);
      for (let P = 0; P < C.length; P++)
        be(C[P], h, m, T);
      s(d.anchor, h, m);
      return;
    }
    if (I === Mn) {
      ne(d, h, m);
      return;
    }
    if (T !== 2 && w & 1 && A)
      if (T === 0)
        A.beforeEnter(S), s(S, h, m), je(() => A.enter(S), v);
      else {
        const { leave: P, delayLeave: M, afterLeave: z } = A, q = () => s(S, h, m), re = () => {
          P(S, () => {
            q(), z && z();
          });
        };
        M ? M(S, q, re) : re();
      }
    else
      s(S, h, m);
  }, Me = (d, h, m, T = !1, v = !1) => {
    const {
      type: S,
      props: I,
      ref: A,
      children: C,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: P,
      dirs: M,
      cacheIndex: z
    } = d;
    if (P === -2 && (v = !1), A != null && Ls(A, null, m, d, !0), z != null && (h.renderCache[z] = void 0), j & 256) {
      h.ctx.deactivate(d);
      return;
    }
    const q = j & 1 && M, re = !Fn(d);
    let ee;
    if (re && (ee = I && I.onVnodeBeforeUnmount) && nt(ee, h, d), j & 6)
      rc(d.component, m, T);
    else {
      if (j & 128) {
        d.suspense.unmount(m, T);
        return;
      }
      q && Ft(d, null, h, "beforeUnmount"), j & 64 ? d.type.remove(
        d,
        h,
        m,
        Tn,
        T
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== Se || P > 0 && P & 64) ? Sn(
        w,
        h,
        m,
        !1,
        !0
      ) : (S === Se && P & 384 || !v && j & 16) && Sn(C, h, m), T && Qt(d);
    }
    (re && (ee = I && I.onVnodeUnmounted) || q) && je(() => {
      ee && nt(ee, h, d), q && Ft(d, null, h, "unmounted");
    }, m);
  }, Qt = (d) => {
    const { type: h, el: m, anchor: T, transition: v } = d;
    if (h === Se) {
      d.patchFlag > 0 && d.patchFlag & 2048 && v && !v.persisted ? d.children.forEach((I) => {
        I.type === Ke ? r(I.el) : Qt(I);
      }) : En(m, T);
      return;
    }
    if (h === Mn) {
      F(d);
      return;
    }
    const S = () => {
      r(m), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (d.shapeFlag & 1 && v && !v.persisted) {
      const { leave: I, delayLeave: A } = v, C = () => I(m, S);
      A ? A(d.el, S, C) : C();
    } else
      S();
  }, En = (d, h) => {
    let m;
    for (; d !== h; )
      m = _(d), r(d), d = m;
    r(h);
  }, rc = (d, h, m) => {
    d.type.__hmrId && uf(d);
    const { bum: T, scope: v, job: S, subTree: I, um: A, m: C, a: w } = d;
    eo(C), eo(w), T && rn(T), v.stop(), S && (S.flags |= 8, Me(I, d, h, m)), A && je(A, h), je(() => {
      d.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), pf(d);
  }, Sn = (d, h, m, T = !1, v = !1, S = 0) => {
    for (let I = S; I < d.length; I++)
      Me(d[I], h, m, T, v);
  }, ls = (d) => {
    if (d.shapeFlag & 6)
      return ls(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const h = _(d.anchor || d.el), m = h && h[yf];
    return m ? _(m) : h;
  };
  let fr = !1;
  const Ui = (d, h, m) => {
    d == null ? h._vnode && Me(h._vnode, null, null, !0) : b(
      h._vnode || null,
      d,
      h,
      null,
      null,
      null,
      m
    ), h._vnode = d, fr || (fr = !0, zi(), _a(), fr = !1);
  }, Tn = {
    p: b,
    um: Me,
    m: be,
    r: Qt,
    mt: xe,
    mc: Q,
    pc: G,
    pbc: k,
    n: ls,
    o: e
  };
  return {
    render: Ui,
    hydrate: void 0,
    createApp: zf(Ui)
  };
}
function yr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ut({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (V(s) && V(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let u = r[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = r[i] = Ct(r[i]), u.el = o.el), !n && u.patchFlag !== -2 && Vr(o, u)), u.type === os && (u.el = o.el), u.type === Ke && !u.el && (u.el = o.el);
    }
}
function fd(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, u;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        u = i + o >> 1, e[n[u]] < c ? i = u + 1 : o = u;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function ja(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ja(t);
}
function eo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const dd = Symbol.for("v-scx"), hd = () => {
  {
    const e = dn(dd);
    return e || x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Un(e, t, n) {
  return B(t) || x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ba(e, t, n);
}
function Ba(e, t, n = X) {
  const { immediate: s, deep: r, flush: i, once: o } = n;
  t || (s !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = me({}, n);
  u.onWarn = x;
  const a = t && s || !t && i !== "post";
  let c;
  if (Jn) {
    if (i === "sync") {
      const p = hd();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {
      };
      return p.stop = Oe, p.resume = Oe, p.pause = Oe, p;
    }
  }
  const f = _e;
  u.call = (p, g, b) => ht(p, f, g, b);
  let l = !1;
  i === "post" ? u.scheduler = (p) => {
    je(p, f && f.suspense);
  } : i !== "sync" && (l = !0, u.scheduler = (p, g) => {
    g ? p() : Qs(p);
  }), u.augmentJob = (p) => {
    t && (p.flags |= 4), l && (p.flags |= 2, f && (p.id = f.uid, p.i = f));
  };
  const _ = Zc(e, t, u);
  return Jn && (c ? c.push(_) : a && _()), _;
}
function pd(e, t, n) {
  const s = this.proxy, r = de(e) ? e.includes(".") ? Ha(s, e) : () => s[e] : e.bind(s, s);
  let i;
  B(t) ? i = t : (i = t.handler, n = t);
  const o = us(this), u = Ba(r, i.bind(s), n);
  return o(), u;
}
function Ha(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const _d = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Je(t)}Modifiers`] || e[`${Rt(t)}Modifiers`];
function gd(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  {
    const {
      emitsOptions: f,
      propsOptions: [l]
    } = e;
    if (f)
      if (!(t in f))
        (!l || !(Mt(Je(t)) in l)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Mt(Je(t))}" prop.`
        );
      else {
        const _ = f[t];
        B(_) && (_(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), o = i && _d(s, t.slice(7));
  o && (o.trim && (r = n.map((f) => de(f) ? f.trim() : f)), o.number && (r = n.map(xr))), mf(e, t, r);
  {
    const f = t.toLowerCase();
    f !== t && s[Mt(f)] && x(
      `Event "${f}" is emitted in component ${rr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Rt(
        t
      )}" instead of "${t}".`
    );
  }
  let u, a = s[u = Mt(t)] || // also try camelCase event handler (#2249)
  s[u = Mt(Je(t))];
  !a && i && (a = s[u = Mt(Rt(t))]), a && ht(
    a,
    e,
    6,
    r
  );
  const c = s[u + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ht(
      c,
      e,
      6,
      r
    );
  }
}
function Ka(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, u = !1;
  if (!B(e)) {
    const a = (c) => {
      const f = Ka(c, t, !0);
      f && (u = !0, me(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !u ? (te(e) && s.set(e, null), null) : (V(i) ? i.forEach((a) => o[a] = null) : me(o, i), te(e) && s.set(e, o), o);
}
function tr(e, t) {
  return !e || !ns(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Rt(t)) || Y(e, t));
}
let $r = !1;
function Us() {
  $r = !0;
}
function to(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: u,
    emit: a,
    render: c,
    renderCache: f,
    props: l,
    data: _,
    setupState: p,
    ctx: g,
    inheritAttrs: b
  } = e, E = Ds(e);
  let O, $;
  $r = !1;
  try {
    if (n.shapeFlag & 4) {
      const F = r || s, J = p.__isScriptSetup ? new Proxy(F, {
        get(U, he, Q) {
          return x(
            `Property '${String(
              he
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(U, he, Q);
        }
      }) : F;
      O = Ye(
        c.call(
          J,
          F,
          f,
          at(l),
          p,
          _,
          g
        )
      ), $ = u;
    } else {
      const F = t;
      u === l && Us(), O = Ye(
        F.length > 1 ? F(
          at(l),
          {
            get attrs() {
              return Us(), at(u);
            },
            slots: o,
            emit: a
          }
        ) : F(
          at(l),
          null
        )
      ), $ = t.props ? u : md(u);
    }
  } catch (F) {
    Vn.length = 0, rs(F, e, 1), O = ze(Ke);
  }
  let N = O, ne;
  if (O.patchFlag > 0 && O.patchFlag & 2048 && ([N, ne] = za(O)), $ && b !== !1) {
    const F = Object.keys($), { shapeFlag: J } = N;
    if (F.length) {
      if (J & 7)
        i && F.some(As) && ($ = bd(
          $,
          i
        )), N = Dt(N, $, !1, !0);
      else if (!$r && N.type !== Ke) {
        const U = Object.keys(u), he = [], Q = [];
        for (let D = 0, k = U.length; D < k; D++) {
          const W = U[D];
          ns(W) ? As(W) || he.push(W[2].toLowerCase() + W.slice(3)) : Q.push(W);
        }
        Q.length && x(
          `Extraneous non-props attributes (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), he.length && x(
          `Extraneous non-emits event listeners (${he.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (no(N) || x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), N = Dt(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && (no(N) || x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), pi(N, n.transition)), ne ? ne(N) : O = N, Ds(E), O;
}
const za = (e) => {
  const t = e.children, n = e.dynamicChildren, s = bi(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return za(s);
  } else return [e, void 0];
  const r = t.indexOf(s), i = n ? n.indexOf(s) : -1, o = (u) => {
    t[r] = u, n && (i > -1 ? n[i] = u : u.patchFlag > 0 && (e.dynamicChildren = [...n, u]));
  };
  return [Ye(s), o];
};
function bi(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (nr(r)) {
      if (r.type !== Ke || r.children === "v-if") {
        if (n)
          return;
        if (n = r, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return bi(n.children);
      }
    } else
      return;
  }
  return n;
}
const md = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ns(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, bd = (e, t) => {
  const n = {};
  for (const s in e)
    (!As(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, no = (e) => e.shapeFlag & 7 || e.type === Ke;
function vd(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: u, patchFlag: a } = t, c = i.emitsOptions;
  if ((r || u) && lt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? so(s, o, c) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let l = 0; l < f.length; l++) {
        const _ = f[l];
        if (o[_] !== s[_] && !tr(c, _))
          return !0;
      }
    }
  } else
    return (r || u) && (!u || !u.$stable) ? !0 : s === o ? !1 : s ? o ? so(s, o, c) : !0 : !!o;
  return !1;
}
function so(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !tr(n, i))
      return !0;
  }
  return !1;
}
function yd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Wa = (e) => e.__isSuspense;
function Ed(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : pa(e);
}
const Se = Symbol.for("v-fgt"), os = Symbol.for("v-txt"), Ke = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), Vn = [];
let He = null;
function fe(e = !1) {
  Vn.push(He = e ? null : []);
}
function Sd() {
  Vn.pop(), He = Vn[Vn.length - 1] || null;
}
let Yn = 1;
function ro(e, t = !1) {
  Yn += e, e < 0 && He && t && (He.hasOnce = !0);
}
function Ga(e) {
  return e.dynamicChildren = Yn > 0 ? He || cn : null, Sd(), Yn > 0 && He && He.push(e), e;
}
function Ee(e, t, n, s, r, i) {
  return Ga(
    ue(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function pn(e, t, n, s, r) {
  return Ga(
    ze(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function nr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function An(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = ms.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Td = (...e) => wd(
  ...e
), qa = ({ key: e }) => e ?? null, bs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || ie(e) || B(e) ? { i: Ce, r: e, k: t, f: !!n } : e : null);
function ue(e, t = null, n = null, s = 0, r = null, i = e === Se ? 0 : 1, o = !1, u = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qa(t),
    ref: t && bs(t),
    scopeId: Ea,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return u ? (vi(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), a.key !== a.key && x("VNode created with invalid key (NaN). VNode type:", a.type), Yn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  He && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && He.push(a), a;
}
const ze = Td;
function wd(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Df) && (e || x(`Invalid vnode type when creating vnode: ${e}.`), e = Ke), nr(e)) {
    const u = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vi(u, n), Yn > 0 && !i && He && (u.shapeFlag & 6 ? He[He.indexOf(e)] = u : He.push(u)), u.patchFlag = -2, u;
  }
  if (el(e) && (e = e.__vccOpts), t) {
    t = Od(t);
    let { class: u, style: a } = t;
    u && !de(u) && (t.class = Hn(u)), te(a) && (Wn(a) && !V(a) && (a = me({}, a)), t.style = oi(a));
  }
  const o = de(e) ? 1 : Wa(e) ? 128 : Ef(e) ? 64 : te(e) ? 4 : B(e) ? 2 : 0;
  return o & 4 && Wn(e) && (e = H(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ue(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Od(e) {
  return e ? Wn(e) || La(e) ? me({}, e) : e : null;
}
function Dt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: u, transition: a } = e, c = t ? Ad(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && qa(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? V(i) ? i.concat(bs(t)) : [i, bs(t)] : bs(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o === -1 && V(u) ? u.map(Ya) : u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && pi(
    f,
    a.clone(f)
  ), f;
}
function Ya(e) {
  const t = Dt(e);
  return V(e.children) && (t.children = e.children.map(Ya)), t;
}
function $n(e = " ", t = 0) {
  return ze(os, null, e, t);
}
function Cd(e, t) {
  const n = ze(Mn, null, e);
  return n.staticCount = t, n;
}
function Bt(e = "", t = !1) {
  return t ? (fe(), pn(Ke, null, e)) : ze(Ke, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean" ? ze(Ke) : V(e) ? ze(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : nr(e) ? Ct(e) : ze(os, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
}
function vi(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), vi(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !La(t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: Ce }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$n(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ad(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Hn([t.class, s.class]));
      else if (r === "style")
        t.style = oi([t.style, s.style]);
      else if (ns(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(V(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function nt(e, t, n, s = null) {
  ht(e, t, 7, [
    n,
    s
  ]);
}
const xd = ka();
let Id = 0;
function Pd(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || xd, i = {
    uid: Id++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Hu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Fa(s, r),
    emitsOptions: Ka(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = Nf(i), i.root = t ? t.root : i, i.emit = gd.bind(null, i), e.ce && e.ce(i), i;
}
let _e = null;
const Ja = () => _e || Ce;
let Ms, jr;
{
  const e = ss(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), jr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jn = n
  );
}
const us = (e) => {
  const t = _e;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, io = () => {
  _e && _e.scope.off(), Ms(null);
}, kd = /* @__PURE__ */ Et("slot,component");
function Br(e, { isNativeTag: t }) {
  (kd(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Za(e) {
  return e.vnode.shapeFlag & 4;
}
let Jn = !1;
function Rd(e, t = !1, n = !1) {
  t && jr(t);
  const { props: s, children: r } = e.vnode, i = Za(e);
  qf(e, s, i, t), id(e, r, n);
  const o = i ? Dd(e, t) : void 0;
  return t && jr(!1), o;
}
function Dd(e, t) {
  var n;
  const s = e.type;
  {
    if (s.name && Br(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let o = 0; o < i.length; o++)
        Br(i[o], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let o = 0; o < i.length; o++)
        Sa(i[o]);
    }
    s.compilerOptions && Ld() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xa), Ff(e);
  const { setup: r } = s;
  if (r) {
    St();
    const i = e.setupContext = r.length > 1 ? Ud(e) : null, o = us(e), u = bn(
      r,
      e,
      0,
      [
        at(e.props),
        i
      ]
    ), a = si(u);
    if (Tt(), o(), (a || e.sp) && !Fn(e) && Ta(e), a) {
      if (u.then(io, io), t)
        return u.then((c) => {
          oo(e, c, t);
        }).catch((c) => {
          rs(c, e, 0);
        });
      if (e.asyncDep = u, !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        x(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      oo(e, u, t);
  } else
    Xa(e, t);
}
function oo(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) ? (nr(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = la(t), Uf(e)) : t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Xa(e, n);
}
const Ld = () => !0;
function Xa(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Oe);
  {
    const r = us(e);
    St();
    try {
      Vf(e);
    } finally {
      Tt(), r();
    }
  }
  !s.render && e.render === Oe && !t && (s.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", s));
}
const Nd = {
  get(e, t) {
    return Us(), ye(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
};
function Fd(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ye(e, "get", "$slots"), t[n];
    }
  });
}
function Ud(e) {
  const t = (n) => {
    if (e.exposed && x("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (V(n) ? s = "array" : ie(n) && (s = "ref")), s !== "object" && x(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Nd));
      },
      get slots() {
        return s || (s = Fd(e));
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  }
}
function sr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(la(It(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Gt)
        return Gt[n](e);
    },
    has(t, n) {
      return n in t || n in Gt;
    }
  })) : e.proxy;
}
const Md = /(?:^|[-_])(\w)/g, Vd = (e) => e.replace(Md, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Qa(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rr(e, t, n = !1) {
  let s = Qa(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Vd(s) : n ? "App" : "Anonymous";
}
function el(e) {
  return B(e) && "__vccOpts" in e;
}
const yi = (e, t) => {
  const n = Yc(e, t, Jn);
  {
    const s = Ja();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function $d() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(l) {
      return te(l) ? l.__isVue ? ["div", e, "VueInstance"] : ie(l) ? [
        "div",
        {},
        ["span", e, f(l)],
        "<",
        // avoid debugger accessing value affecting behavior
        u("_value" in l ? l._value : l),
        ">"
      ] : ct(l) ? [
        "div",
        {},
        ["span", e, Fe(l) ? "ShallowReactive" : "Reactive"],
        "<",
        u(l),
        `>${yt(l) ? " (readonly)" : ""}`
      ] : yt(l) ? [
        "div",
        {},
        ["span", e, Fe(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        u(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...i(l.$)
        ];
    }
  };
  function i(l) {
    const _ = [];
    l.type.props && l.props && _.push(o("props", H(l.props))), l.setupState !== X && _.push(o("setup", l.setupState)), l.data !== X && _.push(o("data", H(l.data)));
    const p = a(l, "computed");
    p && _.push(o("computed", p));
    const g = a(l, "inject");
    return g && _.push(o("injected", g)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), _;
  }
  function o(l, _) {
    return _ = me({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((p) => [
          "div",
          {},
          ["span", s, p + ": "],
          u(_[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function u(l, _ = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : te(l) ? ["object", { object: _ ? H(l) : l }] : ["span", n, String(l)];
  }
  function a(l, _) {
    const p = l.type;
    if (B(p))
      return;
    const g = {};
    for (const b in l.ctx)
      c(p, b, _) && (g[b] = l.ctx[b]);
    return g;
  }
  function c(l, _, p) {
    const g = l[p];
    if (V(g) && g.includes(_) || te(g) && _ in g || l.extends && c(l.extends, _, p) || l.mixins && l.mixins.some((b) => c(b, _, p)))
      return !0;
  }
  function f(l) {
    return Fe(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const uo = "3.5.13", vt = x;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hr;
const ao = typeof window < "u" && window.trustedTypes;
if (ao)
  try {
    Hr = /* @__PURE__ */ ao.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    vt(`Error creating trusted types policy: ${e}`);
  }
const tl = Hr ? (e) => Hr.createHTML(e) : (e) => e, jd = "http://www.w3.org/2000/svg", Bd = "http://www.w3.org/1998/Math/MathML", gt = typeof document < "u" ? document : null, lo = gt && /* @__PURE__ */ gt.createElement("template"), Hd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? gt.createElementNS(jd, e) : t === "mathml" ? gt.createElementNS(Bd, e) : n ? gt.createElement(e, { is: n }) : gt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => gt.createTextNode(e),
  createComment: (e) => gt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => gt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      lo.innerHTML = tl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const u = lo.content;
      if (s === "svg" || s === "mathml") {
        const a = u.firstChild;
        for (; a.firstChild; )
          u.appendChild(a.firstChild);
        u.removeChild(a);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Kd = Symbol("_vtc");
function zd(e, t, n) {
  const s = e[Kd];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const co = Symbol("_vod"), Wd = Symbol("_vsh"), Gd = Symbol("CSS_VAR_TEXT"), qd = /(^|;)\s*display\s*:/;
function Yd(e, t, n) {
  const s = e.style, r = de(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (de(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          n[u] == null && vs(s, u, "");
        }
      else
        for (const o in t)
          n[o] == null && vs(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), vs(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Gd];
      o && (n += ";" + o), s.cssText = n, i = qd.test(n);
    }
  } else t && e.removeAttribute("style");
  co in e && (e[co] = i ? s.display : "", e[Wd] && (s.display = "none"));
}
const Jd = /[^\\];\s*$/, fo = /\s*!important$/;
function vs(e, t, n) {
  if (V(n))
    n.forEach((s) => vs(e, t, s));
  else if (n == null && (n = ""), Jd.test(n) && vt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Zd(e, t);
    fo.test(n) ? e.setProperty(
      Rt(s),
      n.replace(fo, ""),
      "important"
    ) : e[s] = n;
  }
}
const ho = ["Webkit", "Moz", "ms"], Er = {};
function Zd(e, t) {
  const n = Er[t];
  if (n)
    return n;
  let s = Je(t);
  if (s !== "filter" && s in e)
    return Er[t] = s;
  s = qs(s);
  for (let r = 0; r < ho.length; r++) {
    const i = ho[r] + s;
    if (i in e)
      return Er[t] = i;
  }
  return t;
}
const po = "http://www.w3.org/1999/xlink";
function _o(e, t, n, s, r, i = Ec(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(po, t.slice(6, t.length)) : e.setAttributeNS(po, t, n) : n == null || i && !$u(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Nt(n) ? String(n) : n
  );
}
function go(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? tl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = $u(n) : n == null && u === "string" ? (n = "", o = !0) : u === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    o || vt(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      u
    );
  }
  o && e.removeAttribute(r || t);
}
function un(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Xd(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const mo = Symbol("_vei");
function Qd(e, t, n, s, r = null) {
  const i = e[mo] || (e[mo] = {}), o = i[t];
  if (s && o)
    o.value = vo(s, t);
  else {
    const [u, a] = eh(t);
    if (s) {
      const c = i[t] = sh(
        vo(s, t),
        r
      );
      un(e, u, c, a);
    } else o && (Xd(e, u, o, a), i[t] = void 0);
  }
}
const bo = /(?:Once|Passive|Capture)$/;
function eh(e) {
  let t;
  if (bo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(bo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rt(e.slice(2)), t];
}
let Sr = 0;
const th = /* @__PURE__ */ Promise.resolve(), nh = () => Sr || (th.then(() => Sr = 0), Sr = Date.now());
function sh(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ht(
      rh(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = nh(), n;
}
function vo(e, t) {
  return B(e) || V(e) ? e : (vt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Oe);
}
function rh(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ih = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? zd(e, s, o) : t === "style" ? Yd(e, n, s) : ns(t) ? As(t) || Qd(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : oh(e, t, s, o)) ? (go(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _o(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !de(s)) ? go(e, Je(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), _o(e, t, s, o));
};
function oh(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yo(t) && B(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return yo(t) && de(n) ? !1 : t in e;
}
const Eo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (n) => rn(t, n) : t;
};
function uh(e) {
  e.target.composing = !0;
}
function So(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tr = Symbol("_assign"), ah = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Tr] = Eo(r);
    const i = s || r.props && r.props.type === "number";
    un(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let u = e.value;
      n && (u = u.trim()), i && (u = xr(u)), e[Tr](u);
    }), n && un(e, "change", () => {
      e.value = e.value.trim();
    }), t || (un(e, "compositionstart", uh), un(e, "compositionend", So), un(e, "change", So));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Tr] = Eo(o), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, a = t ?? "";
    u !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, lh = ["ctrl", "shift", "alt", "meta"], ch = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => lh.some((n) => e[`${n}Key`] && !t.includes(n))
}, fh = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const u = ch[t[o]];
      if (u && u(r, t)) return;
    }
    return e(r, ...i);
  });
}, dh = /* @__PURE__ */ me({ patchProp: ih }, Hd);
let To;
function hh() {
  return To || (To = ad(dh));
}
const ph = (...e) => {
  const t = hh().createApp(...e);
  gh(t), mh(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = bh(s);
    if (!r) return;
    const i = t._component;
    !B(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, _h(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function _h(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gh(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => mc(t) || bc(t) || vc(t),
    writable: !1
  });
}
function mh(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        vt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return vt(s), n;
      },
      set() {
        vt(s);
      }
    });
  }
}
function bh(e) {
  if (de(e)) {
    const t = document.querySelector(e);
    return t || vt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && vt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vh() {
  $d();
}
vh();
var yh = Object.create, nl = Object.defineProperty, Eh = Object.getOwnPropertyDescriptor, Ei = Object.getOwnPropertyNames, Sh = Object.getPrototypeOf, Th = Object.prototype.hasOwnProperty, wh = (e, t) => function() {
  return e && (t = (0, e[Ei(e)[0]])(e = 0)), t;
}, Oh = (e, t) => function() {
  return t || (0, e[Ei(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Ch = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Ei(t))
      !Th.call(e, r) && r !== n && nl(e, r, { get: () => t[r], enumerable: !(s = Eh(t, r)) || s.enumerable });
  return e;
}, Ah = (e, t, n) => (n = e != null ? yh(Sh(e)) : {}, Ch(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  nl(n, "default", { value: e, enumerable: !0 }),
  e
)), as = wh({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/esm_shims.js"() {
  }
}), xh = Oh({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    as(), t.exports = s;
    function n(i) {
      return i instanceof Buffer ? Buffer.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
    }
    function s(i) {
      if (i = i || {}, i.circles) return r(i);
      const o = /* @__PURE__ */ new Map();
      if (o.set(Date, (l) => new Date(l)), o.set(Map, (l, _) => new Map(a(Array.from(l), _))), o.set(Set, (l, _) => new Set(a(Array.from(l), _))), i.constructorHandlers)
        for (const l of i.constructorHandlers)
          o.set(l[0], l[1]);
      let u = null;
      return i.proto ? f : c;
      function a(l, _) {
        const p = Object.keys(l), g = new Array(p.length);
        for (let b = 0; b < p.length; b++) {
          const E = p[b], O = l[E];
          typeof O != "object" || O === null ? g[E] = O : O.constructor !== Object && (u = o.get(O.constructor)) ? g[E] = u(O, _) : ArrayBuffer.isView(O) ? g[E] = n(O) : g[E] = _(O);
        }
        return g;
      }
      function c(l) {
        if (typeof l != "object" || l === null) return l;
        if (Array.isArray(l)) return a(l, c);
        if (l.constructor !== Object && (u = o.get(l.constructor)))
          return u(l, c);
        const _ = {};
        for (const p in l) {
          if (Object.hasOwnProperty.call(l, p) === !1) continue;
          const g = l[p];
          typeof g != "object" || g === null ? _[p] = g : g.constructor !== Object && (u = o.get(g.constructor)) ? _[p] = u(g, c) : ArrayBuffer.isView(g) ? _[p] = n(g) : _[p] = c(g);
        }
        return _;
      }
      function f(l) {
        if (typeof l != "object" || l === null) return l;
        if (Array.isArray(l)) return a(l, f);
        if (l.constructor !== Object && (u = o.get(l.constructor)))
          return u(l, f);
        const _ = {};
        for (const p in l) {
          const g = l[p];
          typeof g != "object" || g === null ? _[p] = g : g.constructor !== Object && (u = o.get(g.constructor)) ? _[p] = u(g, f) : ArrayBuffer.isView(g) ? _[p] = n(g) : _[p] = f(g);
        }
        return _;
      }
    }
    function r(i) {
      const o = [], u = [], a = /* @__PURE__ */ new Map();
      if (a.set(Date, (p) => new Date(p)), a.set(Map, (p, g) => new Map(f(Array.from(p), g))), a.set(Set, (p, g) => new Set(f(Array.from(p), g))), i.constructorHandlers)
        for (const p of i.constructorHandlers)
          a.set(p[0], p[1]);
      let c = null;
      return i.proto ? _ : l;
      function f(p, g) {
        const b = Object.keys(p), E = new Array(b.length);
        for (let O = 0; O < b.length; O++) {
          const $ = b[O], N = p[$];
          if (typeof N != "object" || N === null)
            E[$] = N;
          else if (N.constructor !== Object && (c = a.get(N.constructor)))
            E[$] = c(N, g);
          else if (ArrayBuffer.isView(N))
            E[$] = n(N);
          else {
            const ne = o.indexOf(N);
            ne !== -1 ? E[$] = u[ne] : E[$] = g(N);
          }
        }
        return E;
      }
      function l(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return f(p, l);
        if (p.constructor !== Object && (c = a.get(p.constructor)))
          return c(p, l);
        const g = {};
        o.push(p), u.push(g);
        for (const b in p) {
          if (Object.hasOwnProperty.call(p, b) === !1) continue;
          const E = p[b];
          if (typeof E != "object" || E === null)
            g[b] = E;
          else if (E.constructor !== Object && (c = a.get(E.constructor)))
            g[b] = c(E, l);
          else if (ArrayBuffer.isView(E))
            g[b] = n(E);
          else {
            const O = o.indexOf(E);
            O !== -1 ? g[b] = u[O] : g[b] = l(E);
          }
        }
        return o.pop(), u.pop(), g;
      }
      function _(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return f(p, _);
        if (p.constructor !== Object && (c = a.get(p.constructor)))
          return c(p, _);
        const g = {};
        o.push(p), u.push(g);
        for (const b in p) {
          const E = p[b];
          if (typeof E != "object" || E === null)
            g[b] = E;
          else if (E.constructor !== Object && (c = a.get(E.constructor)))
            g[b] = c(E, _);
          else if (ArrayBuffer.isView(E))
            g[b] = n(E);
          else {
            const O = o.indexOf(E);
            O !== -1 ? g[b] = u[O] : g[b] = _(E);
          }
        }
        return o.pop(), u.pop(), g;
      }
    }
  }
});
as();
as();
as();
var sl = typeof navigator < "u", L = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof L.chrome < "u" && L.chrome.devtools;
sl && (L.self, L.top);
var wo;
typeof navigator < "u" && ((wo = navigator.userAgent) == null || wo.toLowerCase().includes("electron"));
as();
var Ih = Ah(xh()), Ph = /(?:^|[-_/])(\w)/g;
function kh(e, t) {
  return t ? t.toUpperCase() : "";
}
function Rh(e) {
  return e && `${e}`.replace(Ph, kh);
}
function Dh(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), r = n.substring(s + 1);
  {
    const i = r.lastIndexOf(t);
    return r.substring(0, i);
  }
}
var Oo = (0, Ih.default)({ circles: !0 });
const Lh = {
  trailing: !0
};
function _n(e, t = 25, n = {}) {
  if (n = { ...Lh, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, r, i = [], o, u;
  const a = (c, f) => (o = Nh(e, c, f), o.finally(() => {
    if (o = null, n.trailing && u && !r) {
      const l = a(c, u);
      return u = null, l;
    }
  }), o);
  return function(...c) {
    return o ? (n.trailing && (u = c), o) : new Promise((f) => {
      const l = !r && n.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const _ = n.leading ? s : a(this, c);
        for (const p of i)
          p(_);
        i = [];
      }, t), l ? (s = a(this, c), f(s)) : i.push(f);
    });
  };
}
async function Nh(e, t, n) {
  return await e.apply(t, n);
}
function Kr(e, t = {}, n) {
  for (const s in e) {
    const r = e[s], i = n ? `${n}:${s}` : s;
    typeof r == "object" && r !== null ? Kr(r, t, i) : typeof r == "function" && (t[i] = r);
  }
  return t;
}
const Fh = { run: (e) => e() }, Uh = () => Fh, rl = typeof console.createTask < "u" ? console.createTask : Uh;
function Mh(e, t) {
  const n = t.shift(), s = rl(n);
  return e.reduce(
    (r, i) => r.then(() => s.run(() => i(...t))),
    Promise.resolve()
  );
}
function Vh(e, t) {
  const n = t.shift(), s = rl(n);
  return Promise.all(e.map((r) => s.run(() => r(...t))));
}
function wr(e, t) {
  for (const n of [...e])
    n(t);
}
class $h {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, s = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const r = t;
    let i;
    for (; this._deprecatedHooks[t]; )
      i = this._deprecatedHooks[t], t = i.to;
    if (i && !s.allowDeprecated) {
      let o = i.message;
      o || (o = `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0);
    };
  }
  hookOnce(t, n) {
    let s, r = (...i) => (typeof s == "function" && s(), s = void 0, r = void 0, n(...i));
    return s = this.hook(t, r), s;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const s = this._hooks[t].indexOf(n);
      s !== -1 && this._hooks[t].splice(s, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const s = this._hooks[t] || [];
    delete this._hooks[t];
    for (const r of s)
      this.hook(t, r);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = Kr(t), s = Object.keys(n).map(
      (r) => this.hook(r, n[r])
    );
    return () => {
      for (const r of s.splice(0, s.length))
        r();
    };
  }
  removeHooks(t) {
    const n = Kr(t);
    for (const s in n)
      this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Mh, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Vh, t, ...n);
  }
  callHookWith(t, n, ...s) {
    const r = this._before || this._after ? { name: n, args: s, context: {} } : void 0;
    this._before && wr(this._before, r);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      s
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && r && wr(this._after, r);
    }) : (this._after && r && wr(this._after, r), i);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    };
  }
}
function il() {
  return new $h();
}
var jh = Object.create, ol = Object.defineProperty, Bh = Object.getOwnPropertyDescriptor, Si = Object.getOwnPropertyNames, Hh = Object.getPrototypeOf, Kh = Object.prototype.hasOwnProperty, zh = (e, t) => function() {
  return e && (t = (0, e[Si(e)[0]])(e = 0)), t;
}, ul = (e, t) => function() {
  return t || (0, e[Si(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Wh = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Si(t))
      !Kh.call(e, r) && r !== n && ol(e, r, { get: () => t[r], enumerable: !(s = Bh(t, r)) || s.enumerable });
  return e;
}, Gh = (e, t, n) => (n = e != null ? jh(Hh(e)) : {}, Wh(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ol(n, "default", { value: e, enumerable: !0 }),
  e
)), y = zh({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/esm_shims.js"() {
  }
}), qh = ul({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    y(), function(n) {
      var s = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, r = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], i = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, o = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, u = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, a = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), c = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), f = [".", "!", "~", "*", "'", "(", ")"].join(""), l = function(E, O) {
        var $ = "-", N = "", ne = "", F = !0, J = {}, U, he, Q, D, k, W, ce, Ae, xe, oe, R, K, G, Xe, Ue = "";
        if (typeof E != "string")
          return "";
        if (typeof O == "string" && ($ = O), ce = u.en, Ae = o.en, typeof O == "object") {
          U = O.maintainCase || !1, J = O.custom && typeof O.custom == "object" ? O.custom : J, Q = +O.truncate > 1 && O.truncate || !1, D = O.uric || !1, k = O.uricNoSlash || !1, W = O.mark || !1, F = !(O.symbols === !1 || O.lang === !1), $ = O.separator || $, D && (Ue += a), k && (Ue += c), W && (Ue += f), ce = O.lang && u[O.lang] && F ? u[O.lang] : F ? u.en : {}, Ae = O.lang && o[O.lang] ? o[O.lang] : O.lang === !1 || O.lang === !0 ? {} : o.en, O.titleCase && typeof O.titleCase.length == "number" && Array.prototype.toString.call(O.titleCase) ? (O.titleCase.forEach(function(be) {
            J[be + ""] = be + "";
          }), he = !0) : he = !!O.titleCase, O.custom && typeof O.custom.length == "number" && Array.prototype.toString.call(O.custom) && O.custom.forEach(function(be) {
            J[be + ""] = be + "";
          }), Object.keys(J).forEach(function(be) {
            var Me;
            be.length > 1 ? Me = new RegExp("\\b" + p(be) + "\\b", "gi") : Me = new RegExp(p(be), "gi"), E = E.replace(Me, J[be]);
          });
          for (R in J)
            Ue += R;
        }
        for (Ue += $, Ue = p(Ue), E = E.replace(/(^\s+|\s+$)/g, ""), G = !1, Xe = !1, oe = 0, K = E.length; oe < K; oe++)
          R = E[oe], g(R, J) ? G = !1 : Ae[R] ? (R = G && Ae[R].match(/[A-Za-z0-9]/) ? " " + Ae[R] : Ae[R], G = !1) : R in s ? (oe + 1 < K && r.indexOf(E[oe + 1]) >= 0 ? (ne += R, R = "") : Xe === !0 ? (R = i[ne] + s[R], ne = "") : R = G && s[R].match(/[A-Za-z0-9]/) ? " " + s[R] : s[R], G = !1, Xe = !1) : R in i ? (ne += R, R = "", oe === K - 1 && (R = i[ne]), Xe = !0) : /* process symbol chars */ ce[R] && !(D && a.indexOf(R) !== -1) && !(k && c.indexOf(R) !== -1) ? (R = G || N.substr(-1).match(/[A-Za-z0-9]/) ? $ + ce[R] : ce[R], R += E[oe + 1] !== void 0 && E[oe + 1].match(/[A-Za-z0-9]/) ? $ : "", G = !0) : (Xe === !0 ? (R = i[ne] + R, ne = "", Xe = !1) : G && (/[A-Za-z0-9]/.test(R) || N.substr(-1).match(/A-Za-z0-9]/)) && (R = " " + R), G = !1), N += R.replace(new RegExp("[^\\w\\s" + Ue + "_-]", "g"), $);
        return he && (N = N.replace(/(\w)(\S*)/g, function(be, Me, Qt) {
          var En = Me.toUpperCase() + (Qt !== null ? Qt : "");
          return Object.keys(J).indexOf(En.toLowerCase()) < 0 ? En : En.toLowerCase();
        })), N = N.replace(/\s+/g, $).replace(new RegExp("\\" + $ + "+", "g"), $).replace(new RegExp("(^\\" + $ + "+|\\" + $ + "+$)", "g"), ""), Q && N.length > Q && (xe = N.charAt(Q) === $, N = N.slice(0, Q), xe || (N = N.slice(0, N.lastIndexOf($)))), !U && !he && (N = N.toLowerCase()), N;
      }, _ = function(E) {
        return function($) {
          return l($, E);
        };
      }, p = function(E) {
        return E.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, g = function(b, E) {
        for (var O in E)
          if (E[O] === b)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = l, t.exports.createSlug = _;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return l;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = l, n.createSlug = _;
        } catch {
        }
    }(e);
  }
}), Yh = ul({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    y(), t.exports = qh();
  }
});
y();
y();
y();
y();
y();
y();
y();
y();
function Jh(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function Zh(e) {
  const t = e.__file;
  if (t)
    return Rh(Dh(t, ".vue"));
}
function Co(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Ti(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function al(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, r = Ti(e);
  return r ? ((n = r == null ? void 0 : r.types) == null ? void 0 : n.Fragment) === s : !1;
}
function ir(e) {
  var t, n, s;
  const r = Jh((e == null ? void 0 : e.type) || {});
  if (r)
    return r;
  if ((e == null ? void 0 : e.root) === e)
    return "Root";
  for (const o in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[o] === (e == null ? void 0 : e.type))
      return Co(e, o);
  for (const o in (s = e.appContext) == null ? void 0 : s.components)
    if (e.appContext.components[o] === (e == null ? void 0 : e.type))
      return Co(e, o);
  const i = Zh((e == null ? void 0 : e.type) || {});
  return i || "Anonymous Component";
}
function Xh(e) {
  var t, n, s;
  const r = (s = (n = (t = e == null ? void 0 : e.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, i = e === (e == null ? void 0 : e.root) ? "root" : e.uid;
  return `${r}:${i}`;
}
function zr(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Qh() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
var hs;
function ep(e) {
  return hs || (hs = document.createRange()), hs.selectNode(e), hs.getBoundingClientRect();
}
function tp(e) {
  const t = Qh();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const r = e.children[n];
    let i;
    if (r.component)
      i = Zt(r.component);
    else if (r.el) {
      const o = r.el;
      o.nodeType === 1 || o.getBoundingClientRect ? i = o.getBoundingClientRect() : o.nodeType === 3 && o.data.trim() && (i = ep(o));
    }
    i && np(t, i);
  }
  return t;
}
function np(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ao = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Zt(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Ao : al(e) ? tp(e.subTree) : (t == null ? void 0 : t.nodeType) === 1 ? t == null ? void 0 : t.getBoundingClientRect() : e.subTree.component ? Zt(e.subTree.component) : Ao;
}
y();
function wi(e) {
  return al(e) ? sp(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function sp(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...wi(n.component)) : n != null && n.el && t.push(n.el);
  }), t;
}
var ll = "__vue-devtools-component-inspector__", cl = "__vue-devtools-component-inspector__card__", fl = "__vue-devtools-component-inspector__name__", dl = "__vue-devtools-component-inspector__indicator__", hl = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, rp = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, ip = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function vn() {
  return document.getElementById(ll);
}
function op() {
  return document.getElementById(cl);
}
function up() {
  return document.getElementById(dl);
}
function ap() {
  return document.getElementById(fl);
}
function Oi(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Ci(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : ll, Object.assign(n.style, {
    ...hl,
    ...Oi(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = cl, Object.assign(s.style, {
    ...rp,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = fl, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const i = document.createElement("i");
  return i.id = dl, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, ip), s.appendChild(r), s.appendChild(i), n.appendChild(s), document.body.appendChild(n), n;
}
function Ai(e) {
  const t = vn(), n = op(), s = ap(), r = up();
  t && (Object.assign(t.style, {
    ...hl,
    ...Oi(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function lp(e) {
  const t = Zt(e);
  if (!t.width && !t.height)
    return;
  const n = ir(e);
  vn() ? Ai({ bounds: t, name: n }) : Ci({ bounds: t, name: n });
}
function pl() {
  const e = vn();
  e && (e.style.display = "none");
}
var Wr = null;
function Gr(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Wr = n, n.vnode.el)) {
      const r = Zt(n), i = ir(n);
      vn() ? Ai({ bounds: r, name: i }) : Ci({ bounds: r, name: i });
    }
  }
}
function cp(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Wr) {
    const n = Xh(Wr);
    t(n);
  }
}
var Vs = null;
function fp() {
  pl(), window.removeEventListener("mouseover", Gr), window.removeEventListener("click", Vs, !0), Vs = null;
}
function dp() {
  return window.addEventListener("mouseover", Gr), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), cp(n, (s) => {
        window.removeEventListener("click", t, !0), Vs = null, window.removeEventListener("mouseover", Gr);
        const r = vn();
        r && (r.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    Vs = t, window.addEventListener("click", t, !0);
  });
}
function hp(e) {
  const t = zr(Le.value, e.id);
  if (t) {
    const [n] = wi(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Zt(t), r = document.createElement("div"), i = {
        ...Oi(s),
        position: "absolute"
      };
      Object.assign(r.style, i), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const s = Zt(t);
      if (s.width || s.height) {
        const r = ir(t), i = vn();
        i ? Ai({ ...e, name: r, bounds: s }) : Ci({ ...e, name: r, bounds: s }), setTimeout(() => {
          i && (i.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
y();
var xo, Io;
(Io = (xo = L).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (xo.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function pp(e) {
  let t = 0;
  const n = setInterval(() => {
    L.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function _p() {
  const e = L.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function gp() {
  return new Promise((e) => {
    function t() {
      _p(), e(L.__VUE_INSPECTOR__);
    }
    L.__VUE_INSPECTOR__ ? t() : pp(() => {
      t();
    });
  });
}
y();
y();
function mp(e) {
  return !!(e && e.__v_isReadonly);
}
function _l(e) {
  return mp(e) ? _l(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Or(e) {
  return !!(e && e.__v_isRef === !0);
}
function Pn(e) {
  const t = e && e.__v_raw;
  return t ? Pn(t) : e;
}
var bp = class {
  constructor() {
    this.refEditor = new vp();
  }
  set(e, t, n, s) {
    const r = Array.isArray(t) ? t : t.split(".");
    for (; r.length > 1; ) {
      const u = r.shift();
      e instanceof Map && (e = e.get(u)), e instanceof Set ? e = Array.from(e.values())[u] : e = e[u], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const i = r[0], o = this.refEditor.get(e)[i];
    s ? s(e, i, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[i] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let s = 0; s < n.length; s++)
      if (e instanceof Map ? e = e.get(n[s]) : e = e[n[s]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, n = !1) {
    if (typeof e > "u")
      return !1;
    const s = Array.isArray(t) ? t.slice() : t.split("."), r = n ? 2 : 1;
    for (; e && s.length > r; ) {
      const i = s.shift();
      e = e[i], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, s[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, s) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Pn(t) instanceof Map ? t.delete(n) : Pn(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const r = t[e.newKey || n];
        this.refEditor.isRef(r) ? this.refEditor.set(r, s) : Pn(t) instanceof Map ? t.set(e.newKey || n, s) : Pn(t) instanceof Set ? t.add(s) : t[e.newKey || n] = s;
      }
    };
  }
}, vp = class {
  set(e, t) {
    if (Or(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((r) => e.add(r));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const r = new Set(e.keys());
        n.forEach((i) => {
          e.set(i, Reflect.get(t, i)), r.delete(i);
        }), r.forEach((i) => e.delete(i));
        return;
      }
      const s = new Set(Object.keys(e));
      n.forEach((r) => {
        Reflect.set(e, r, Reflect.get(t, r)), s.delete(r);
      }), s.forEach((r) => Reflect.deleteProperty(e, r));
    }
  }
  get(e) {
    return Or(e) ? e.value : e;
  }
  isRef(e) {
    return Or(e) || _l(e);
  }
};
y();
y();
y();
var yp = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Ep() {
  if (!sl || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(yp);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
y();
y();
y();
var Po, ko;
(ko = (Po = L).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Po.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var Sp = new Proxy(L.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Tp(e, t) {
  ge.timelineLayersState[t.id] = !1, Sp.push({
    ...e,
    descriptorId: t.id,
    appRecord: Ti(t.app)
  });
}
var Ro, Do;
(Do = (Ro = L).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Ro.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var xi = new Proxy(L.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), gl = _n(() => {
  yn.hooks.callHook("sendInspectorToClient", ml());
});
function wp(e, t) {
  var n, s;
  xi.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Ti(t.app)
  }), gl();
}
function ml() {
  return xi.filter((e) => e.descriptor.app === Le.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const n = e.descriptor, s = e.options;
    return {
      id: s.id,
      label: s.label,
      logo: n.logo,
      icon: `custom-ic-baseline-${(t = s == null ? void 0 : s.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: n.packageName,
      homepage: n.homepage,
      pluginId: n.id
    };
  });
}
function ys(e, t) {
  return xi.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function Op() {
  const e = il();
  e.hook("addInspector", ({ inspector: s, plugin: r }) => {
    wp(s, r.descriptor);
  });
  const t = _n(async ({ inspectorId: s, plugin: r }) => {
    var i;
    if (!s || !((i = r == null ? void 0 : r.descriptor) != null && i.app) || ge.highPerfModeEnabled)
      return;
    const o = ys(s, r.descriptor.app), u = {
      app: r.descriptor.app,
      inspectorId: s,
      filter: (o == null ? void 0 : o.treeFilter) || "",
      rootNodes: []
    };
    await new Promise((a) => {
      e.callHookWith(
        async (c) => {
          await Promise.all(c.map((f) => f(u))), a();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (a) => {
        await Promise.all(a.map((c) => c({
          inspectorId: s,
          rootNodes: u.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = _n(async ({ inspectorId: s, plugin: r }) => {
    var i;
    if (!s || !((i = r == null ? void 0 : r.descriptor) != null && i.app) || ge.highPerfModeEnabled)
      return;
    const o = ys(s, r.descriptor.app), u = {
      app: r.descriptor.app,
      inspectorId: s,
      nodeId: (o == null ? void 0 : o.selectedNodeId) || "",
      state: null
    }, a = {
      currentTab: `custom-inspector:${s}`
    };
    u.nodeId && await new Promise((c) => {
      e.callHookWith(
        async (f) => {
          await Promise.all(f.map((l) => l(u, a))), c();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (c) => {
        await Promise.all(c.map((f) => f({
          inspectorId: s,
          nodeId: u.nodeId,
          state: u.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: s, nodeId: r, plugin: i }) => {
    const o = ys(s, i.descriptor.app);
    o && (o.selectedNodeId = r);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: r }) => {
    Tp(s, r.descriptor);
  }), e.hook("timelineEventAdded", ({ options: s, plugin: r }) => {
    var i;
    const o = ["performance", "component-event", "keyboard", "mouse"];
    ge.highPerfModeEnabled || !((i = ge.timelineLayersState) != null && i[r.descriptor.id]) && !o.includes(s.layerId) || e.callHookWith(
      async (u) => {
        await Promise.all(u.map((a) => a(s)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: s }) => {
    const r = s.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!r)
      return null;
    const i = r.id.toString();
    return [...r.instanceMap].filter(([u]) => u.split(":")[0] === i).map(([, u]) => u);
  }), e.hook("getComponentBounds", async ({ instance: s }) => Zt(s)), e.hook("getComponentName", ({ instance: s }) => ir(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const r = Le.value.instanceMap.get(s);
    r && lp(r);
  }), e.hook("componentUnhighlight", () => {
    pl();
  }), e;
}
var Lo, No;
(No = (Lo = L).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Lo.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Fo, Uo;
(Uo = (Fo = L).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Fo.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Mo, Vo;
(Vo = (Mo = L).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Mo.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var $o, jo;
(jo = ($o = L).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || ($o.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Bo, Ho;
(Ho = (Bo = L).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Bo.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Ht = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Cp() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: Ep()
  };
}
var Ko, zo;
(zo = (Ko = L)[Ht]) != null || (Ko[Ht] = Cp());
var Ap = _n((e) => {
  yn.hooks.callHook("devtoolsStateUpdated", { state: e });
});
_n((e, t) => {
  yn.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var or = new Proxy(L.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? L.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : L.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), Le = new Proxy(L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function bl() {
  Ap({
    ...L[Ht],
    appRecords: or.value,
    activeAppRecordId: Le.id,
    tabs: L.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: L.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function xp(e) {
  L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, bl();
}
function Ip(e) {
  L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, bl();
}
var ge = new Proxy(L[Ht], {
  get(e, t) {
    return t === "appRecords" ? or : t === "activeAppRecordId" ? Le.id : t === "tabs" ? L.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? L.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : L[Ht][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...L[Ht] }, e[t] = n, L[Ht][t] = n, !0;
  }
});
function Pp(e = {}) {
  var t, n, s;
  const { file: r, host: i, baseUrl: o = window.location.origin, line: u = 0, column: a = 0 } = e;
  if (r) {
    if (i === "chrome-extension") {
      const c = r.replace(/\\/g, "\\\\"), f = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${f}__open-in-editor?file=${encodeURI(r)}`).then((l) => {
        if (!l.ok) {
          const _ = `Opening component ${c} failed`;
          console.log(`%c${_}`, "color:red");
        }
      });
    } else if (ge.vitePluginDetected) {
      const c = (s = L.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : o;
      L.__VUE_INSPECTOR__.openInEditor(c, r, u, a);
    }
  }
}
y();
y();
y();
y();
y();
var Wo, Go;
(Go = (Wo = L).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Wo.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Ii = new Proxy(L.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function qr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Pi(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function kp(e) {
  var t, n, s;
  const r = (n = (t = Ii.find((i) => {
    var o;
    return i[0].id === e && !!((o = i[0]) != null && o.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = r == null ? void 0 : r.settings) != null ? s : null;
}
function vl(e, t) {
  var n, s, r;
  const i = Pi(e);
  if (i) {
    const o = localStorage.getItem(i);
    if (o)
      return JSON.parse(o);
  }
  if (e) {
    const o = (s = (n = Ii.find((u) => u[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return qr((r = o == null ? void 0 : o.settings) != null ? r : {});
  }
  return qr(t);
}
function Rp(e, t) {
  const n = Pi(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(qr(t)));
}
function Dp(e, t, n) {
  const s = Pi(e), r = localStorage.getItem(s), i = JSON.parse(r || "{}"), o = {
    ...i,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(o)), yn.hooks.callHookWith(
    (u) => {
      u.forEach((a) => a({
        pluginId: e,
        key: t,
        oldValue: i[t],
        newValue: n,
        settings: o
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
var qo, Yo, Be = (Yo = (qo = L).__VUE_DEVTOOLS_HOOK) != null ? Yo : qo.__VUE_DEVTOOLS_HOOK = il(), Lp = {
  vueAppInit(e) {
    Be.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Be.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Be.hook("app:connected", e);
  },
  componentAdded(e) {
    return Be.hook("component:added", e);
  },
  componentEmit(e) {
    return Be.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Be.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Be.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Be.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Be.hook("perf:start", e);
  },
  perfEnd(e) {
    return Be.hook("perf:end", e);
  }
}, yl = {
  on: Lp,
  setupDevToolsPlugin(e, t) {
    return Be.callHook("devtools-plugin:setup", e, t);
  }
}, Np = class {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (e) => {
        this.hooks.hook("visitComponentTree", e);
      },
      inspectComponent: (e) => {
        this.hooks.hook("inspectComponent", e);
      },
      editComponentState: (e) => {
        this.hooks.hook("editComponentState", e);
      },
      // custom inspector
      getInspectorTree: (e) => {
        this.hooks.hook("getInspectorTree", e);
      },
      getInspectorState: (e) => {
        this.hooks.hook("getInspectorState", e);
      },
      editInspectorState: (e) => {
        this.hooks.hook("editInspectorState", e);
      },
      // timeline
      inspectTimelineEvent: (e) => {
        this.hooks.hook("inspectTimelineEvent", e);
      },
      timelineCleared: (e) => {
        this.hooks.hook("timelineCleared", e);
      },
      // settings
      setPluginSettings: (e) => {
        this.hooks.hook("setPluginSettings", e);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(e) {
    var t;
    if (ge.highPerfModeEnabled)
      return;
    const n = ml().find((s) => s.packageName === this.plugin.descriptor.packageName);
    if (n != null && n.id) {
      if (e) {
        const s = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        Be.callHook("component:updated", ...s);
      } else
        Be.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Rp(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    ge.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    ge.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return ge.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    ge.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return vl(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(e) {
    return this.hooks.callHook("getComponentInstances", { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook("getComponentBounds", { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook("getComponentName", { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, Fp = Np;
y();
y();
y();
y();
var Up = "__vue_devtool_undefined__", Mp = "__vue_devtool_infinity__", Vp = "__vue_devtool_negative_infinity__", $p = "__vue_devtool_nan__";
y();
y();
var jp = {
  [Up]: "undefined",
  [$p]: "NaN",
  [Mp]: "Infinity",
  [Vp]: "-Infinity"
};
Object.entries(jp).reduce((e, [t, n]) => (e[n] = t, e), {});
y();
y();
y();
y();
y();
var Jo, Zo;
(Zo = (Jo = L).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Jo.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function El(e, t) {
  return yl.setupDevToolsPlugin(e, t);
}
function Bp(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const r = new Fp({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: yn
  });
  n.packageName === "vuex" && r.on.editInspectorState((i) => {
    r.sendInspectorState(i.inspectorId);
  }), s(r);
}
function Sl(e, t) {
  L.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ge.highPerfModeEnabled && !(t != null && t.inspectingComponent) || (L.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Ii.forEach((n) => {
    Bp(n, e);
  }));
}
y();
y();
var Zn = "__VUE_DEVTOOLS_ROUTER__", gn = "__VUE_DEVTOOLS_ROUTER_INFO__", Xo, Qo;
(Qo = (Xo = L)[gn]) != null || (Xo[gn] = {
  currentRoute: null,
  routes: []
});
var eu, tu;
(tu = (eu = L)[Zn]) != null || (eu[Zn] = {});
new Proxy(L[gn], {
  get(e, t) {
    return L[gn][t];
  }
});
new Proxy(L[Zn], {
  get(e, t) {
    if (t === "value")
      return L[Zn];
  }
});
function Hp(e) {
  const t = /* @__PURE__ */ new Map();
  return ((e == null ? void 0 : e.getRoutes()) || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function ki(e) {
  return e.map((t) => {
    let { path: n, name: s, children: r, meta: i } = t;
    return r != null && r.length && (r = ki(r)), {
      path: n,
      name: s,
      children: r,
      meta: i
    };
  });
}
function Kp(e) {
  if (e) {
    const { fullPath: t, hash: n, href: s, path: r, name: i, matched: o, params: u, query: a } = e;
    return {
      fullPath: t,
      hash: n,
      href: s,
      path: r,
      name: i,
      params: u,
      query: a,
      matched: ki(o)
    };
  }
  return e;
}
function zp(e, t) {
  function n() {
    var s;
    const r = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, i = Kp(r == null ? void 0 : r.currentRoute.value), o = ki(Hp(r)), u = console.warn;
    console.warn = () => {
    }, L[gn] = {
      currentRoute: i ? Oo(i) : {},
      routes: Oo(o)
    }, L[Zn] = r, console.warn = u;
  }
  n(), yl.on.componentUpdated(_n(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ge.highPerfModeEnabled && yn.hooks.callHook("routerInfoUpdated", { state: L[gn] }));
  }, 200));
}
function Wp(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: Le.value.app,
        rootNodes: []
      };
      return await new Promise((s) => {
        e.callHookWith(
          async (r) => {
            await Promise.all(r.map((i) => i(n))), s();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), n.rootNodes;
    },
    // get inspector state
    async getInspectorState(t) {
      const n = {
        ...t,
        app: Le.value.app,
        state: null
      }, s = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((r) => {
        e.callHookWith(
          async (i) => {
            await Promise.all(i.map((o) => o(n, s))), r();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new bp(), s = {
        ...t,
        app: Le.value.app,
        set: (r, i = t.path, o = t.state.value, u) => {
          n.set(r, i, o, u || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (r) => {
          r.forEach((i) => i(s));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = ys(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return dp();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return fp();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = zr(Le.value, t);
      if (n)
        return (n == null ? void 0 : n.type) instanceof Function ? n.type.toString() : n.render.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return hp({ id: t });
    },
    // open in editor
    openInEditor: Pp,
    // get vue inspector
    getVueInspector: gp,
    // toggle app
    toggleApp(t, n) {
      const s = or.value.find((r) => r.id === t);
      s && (Ip(t), xp(s), zp(s, Le), gl(), Sl(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = zr(Le.value, t);
      if (n) {
        const [s] = wi(n);
        s && (L.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      Dp(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: kp(t),
        values: vl(t)
      };
    }
  };
}
y();
var nu, su;
(su = (nu = L).__VUE_DEVTOOLS_ENV__) != null || (nu.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var ru = Op(), iu, ou;
(ou = (iu = L).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (iu.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: ru,
  get state() {
    return {
      ...ge,
      activeAppRecordId: Le.id,
      activeAppRecord: Le.value,
      appRecords: or.value
    };
  },
  api: Wp(ru)
});
var yn = L.__VUE_DEVTOOLS_KIT_CONTEXT__;
y();
Gh(Yh());
var uu, au;
(au = (uu = L).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (uu.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
y();
function Gp(e) {
  ge.highPerfModeEnabled = e ?? !ge.highPerfModeEnabled, !e && Le.value && Sl(Le.value.app);
}
y();
y();
y();
function qp(e) {
  ge.devtoolsClientDetected = {
    ...ge.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ge.devtoolsClientDetected).some(Boolean);
  Gp(!t);
}
var lu, cu;
(cu = (lu = L).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (lu.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = qp);
y();
y();
y();
y();
y();
y();
y();
var Yp = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, Tl = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new Yp();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, Jp = class extends Tl {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
y();
y();
function Zp(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function Xp(e, t) {
  const n = Zp(e);
  if ("find" in n)
    return n.find(t);
  const s = n;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t(i))
      return i;
  }
}
function mn(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function Es(e, t) {
  return e.indexOf(t) !== -1;
}
function fu(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var Qp = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return Xp(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
y();
y();
var e_ = (e) => Object.prototype.toString.call(e).slice(8, -1), wl = (e) => typeof e > "u", t_ = (e) => e === null, Xn = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Yr = (e) => Xn(e) && Object.keys(e).length === 0, Lt = (e) => Array.isArray(e), n_ = (e) => typeof e == "string", s_ = (e) => typeof e == "number" && !isNaN(e), r_ = (e) => typeof e == "boolean", i_ = (e) => e instanceof RegExp, Qn = (e) => e instanceof Map, es = (e) => e instanceof Set, Ol = (e) => e_(e) === "Symbol", o_ = (e) => e instanceof Date && !isNaN(e.valueOf()), u_ = (e) => e instanceof Error, du = (e) => typeof e == "number" && isNaN(e), a_ = (e) => r_(e) || t_(e) || wl(e) || s_(e) || n_(e) || Ol(e), l_ = (e) => typeof e == "bigint", c_ = (e) => e === 1 / 0 || e === -1 / 0, f_ = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), d_ = (e) => e instanceof URL;
y();
var Cl = (e) => e.replace(/\./g, "\\."), Cr = (e) => e.map(String).map(Cl).join("."), jn = (e) => {
  const t = [];
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let i = e.charAt(r);
    if (i === "\\" && e.charAt(r + 1) === ".") {
      n += ".", r++;
      continue;
    }
    if (i === ".") {
      t.push(n), n = "";
      continue;
    }
    n += i;
  }
  const s = n;
  return t.push(s), t;
};
y();
function st(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Al = [
  st(wl, "undefined", () => null, () => {
  }),
  st(l_, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  st(o_, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  st(u_, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((s) => {
      n[s] = e[s];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((s) => {
      n[s] = e[s];
    }), n;
  }),
  st(i_, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  st(
    es,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  st(Qn, "map", (e) => [...e.entries()], (e) => new Map(e)),
  st((e) => du(e) || c_(e), "number", (e) => du(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  st((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  st(d_, "URL", (e) => e.toString(), (e) => new URL(e))
];
function ur(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var xl = ur((e, t) => Ol(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), h_ = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Il = ur(f_, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = h_[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Pl(e, t) {
  return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var kl = ur(Pl, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const s = {};
  return n.forEach((r) => {
    s[r] = e[r];
  }), s;
}, (e, t, n) => {
  const s = n.classRegistry.getValue(t[1]);
  if (!s)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(s.prototype), e);
}), Rl = ur((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), p_ = [kl, xl, Rl, Il], hu = (e, t) => {
  const n = fu(p_, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = fu(Al, (r) => r.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, Dl = {};
Al.forEach((e) => {
  Dl[e.annotation] = e;
});
var __ = (e, t, n) => {
  if (Lt(t))
    switch (t[0]) {
      case "symbol":
        return xl.untransform(e, t, n);
      case "class":
        return kl.untransform(e, t, n);
      case "custom":
        return Rl.untransform(e, t, n);
      case "typed-array":
        return Il.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = Dl[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
};
y();
var an = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function Ll(e) {
  if (Es(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Es(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Es(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var g_ = (e, t) => {
  Ll(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (es(e))
      e = an(e, +s);
    else if (Qn(e)) {
      const r = +s, i = +t[++n] == 0 ? "key" : "value", o = an(e, r);
      switch (i) {
        case "key":
          e = o;
          break;
        case "value":
          e = e.get(o);
          break;
      }
    } else
      e = e[s];
  }
  return e;
}, Jr = (e, t, n) => {
  if (Ll(t), t.length === 0)
    return n(e);
  let s = e;
  for (let i = 0; i < t.length - 1; i++) {
    const o = t[i];
    if (Lt(s)) {
      const u = +o;
      s = s[u];
    } else if (Xn(s))
      s = s[o];
    else if (es(s)) {
      const u = +o;
      s = an(s, u);
    } else if (Qn(s)) {
      if (i === t.length - 2)
        break;
      const a = +o, c = +t[++i] == 0 ? "key" : "value", f = an(s, a);
      switch (c) {
        case "key":
          s = f;
          break;
        case "value":
          s = s.get(f);
          break;
      }
    }
  }
  const r = t[t.length - 1];
  if (Lt(s) ? s[+r] = n(s[+r]) : Xn(s) && (s[r] = n(s[r])), es(s)) {
    const i = an(s, +r), o = n(i);
    i !== o && (s.delete(i), s.add(o));
  }
  if (Qn(s)) {
    const i = +t[t.length - 2], o = an(s, i);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const a = n(o);
        s.set(a, s.get(o)), a !== o && s.delete(o);
        break;
      }
      case "value": {
        s.set(o, n(s.get(o)));
        break;
      }
    }
  }
  return e;
};
function Zr(e, t, n = []) {
  if (!e)
    return;
  if (!Lt(e)) {
    mn(e, (i, o) => Zr(i, t, [...n, ...jn(o)]));
    return;
  }
  const [s, r] = e;
  r && mn(r, (i, o) => {
    Zr(i, t, [...n, ...jn(o)]);
  }), t(s, n);
}
function m_(e, t, n) {
  return Zr(t, (s, r) => {
    e = Jr(e, r, (i) => __(i, s, n));
  }), e;
}
function b_(e, t) {
  function n(s, r) {
    const i = g_(e, jn(r));
    s.map(jn).forEach((o) => {
      e = Jr(e, o, () => i);
    });
  }
  if (Lt(t)) {
    const [s, r] = t;
    s.forEach((i) => {
      e = Jr(e, jn(i), () => e);
    }), r && mn(r, n);
  } else
    mn(t, n);
  return e;
}
var v_ = (e, t) => Xn(e) || Lt(e) || Qn(e) || es(e) || Pl(e, t);
function y_(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function E_(e, t) {
  const n = {};
  let s;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((u) => u.map(String)).sort((u, a) => u.length - a.length));
    const [i, ...o] = r;
    i.length === 0 ? s = o.map(Cr) : n[Cr(i)] = o.map(Cr);
  }), s ? Yr(n) ? [s] : [s, n] : Yr(n) ? void 0 : n;
}
var Nl = (e, t, n, s, r = [], i = [], o = /* @__PURE__ */ new Map()) => {
  var u;
  const a = a_(e);
  if (!a) {
    y_(e, r, t);
    const g = o.get(e);
    if (g)
      return s ? {
        transformedValue: null
      } : g;
  }
  if (!v_(e, n)) {
    const g = hu(e, n), b = g ? {
      transformedValue: g.value,
      annotations: [g.type]
    } : {
      transformedValue: e
    };
    return a || o.set(e, b), b;
  }
  if (Es(i, e))
    return {
      transformedValue: null
    };
  const c = hu(e, n), f = (u = c == null ? void 0 : c.value) != null ? u : e, l = Lt(f) ? [] : {}, _ = {};
  mn(f, (g, b) => {
    if (b === "__proto__" || b === "constructor" || b === "prototype")
      throw new Error(`Detected property ${b}. This is a prototype pollution risk, please remove it from your object.`);
    const E = Nl(g, t, n, s, [...r, b], [...i, e], o);
    l[b] = E.transformedValue, Lt(E.annotations) ? _[b] = E.annotations : Xn(E.annotations) && mn(E.annotations, (O, $) => {
      _[Cl(b) + "." + $] = O;
    });
  });
  const p = Yr(_) ? {
    transformedValue: l,
    annotations: c ? [c.type] : void 0
  } : {
    transformedValue: l,
    annotations: c ? [c.type, _] : _
  };
  return a || o.set(e, p), p;
};
y();
y();
function Fl(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function pu(e) {
  return Fl(e) === "Array";
}
function S_(e) {
  if (Fl(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function T_(e, t, n, s, r) {
  const i = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = n), r && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Xr(e, t = {}) {
  if (pu(e))
    return e.map((r) => Xr(r, t));
  if (!S_(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((r, i) => {
    if (pu(t.props) && !t.props.includes(i))
      return r;
    const o = e[i], u = Xr(o, t);
    return T_(r, i, u, e, t.nonenumerable), r;
  }, {});
}
var ae = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new Jp(), this.symbolRegistry = new Tl((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new Qp(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = Nl(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const r = E_(t, this.dedupe);
    return r && (s.meta = {
      ...s.meta,
      referentialEqualities: r
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Xr(t);
    return n != null && n.values && (s = m_(s, n.values, this)), n != null && n.referentialEqualities && (s = b_(s, n.referentialEqualities)), s;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
ae.defaultInstance = new ae();
ae.serialize = ae.defaultInstance.serialize.bind(ae.defaultInstance);
ae.deserialize = ae.defaultInstance.deserialize.bind(ae.defaultInstance);
ae.stringify = ae.defaultInstance.stringify.bind(ae.defaultInstance);
ae.parse = ae.defaultInstance.parse.bind(ae.defaultInstance);
ae.registerClass = ae.defaultInstance.registerClass.bind(ae.defaultInstance);
ae.registerSymbol = ae.defaultInstance.registerSymbol.bind(ae.defaultInstance);
ae.registerCustom = ae.defaultInstance.registerCustom.bind(ae.defaultInstance);
ae.allowErrorProps = ae.defaultInstance.allowErrorProps.bind(ae.defaultInstance);
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
y();
var _u, gu;
(gu = (_u = L).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (_u.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var mu, bu;
(bu = (mu = L).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (mu.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var vu, yu;
(yu = (vu = L).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (vu.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var Eu, Su;
(Su = (Eu = L).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (Eu.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Tu, wu;
(wu = (Tu = L).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Tu.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Ou, Cu;
(Cu = (Ou = L).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Ou.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
y();
y();
y();
y();
y();
y();
y();
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Qr;
const ts = (e) => Qr = e, Ul = Symbol("pinia");
function Xt(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var dt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(dt || (dt = {}));
const Yt = typeof window < "u", Au = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function w_(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Ri(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    $l(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function Ml(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ss(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Ts = typeof navigator == "object" ? navigator : { userAgent: "" }, Vl = /Macintosh/.test(Ts.userAgent) && /AppleWebKit/.test(Ts.userAgent) && !/Safari/.test(Ts.userAgent), $l = Yt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Vl ? O_ : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ts ? C_ : (
      // Fallback to using FileReader and a popup
      A_
    )
  )
) : () => {
};
function O_(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? Ml(s.href) ? Ri(e, t, n) : (s.target = "_blank", Ss(s)) : Ss(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Ss(s);
  }, 0));
}
function C_(e, t = "download", n) {
  if (typeof e == "string")
    if (Ml(e))
      Ri(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        Ss(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(w_(e, n), t);
}
function A_(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Ri(e, t, n);
  const r = e.type === "application/octet-stream", i = /constructor/i.test(String(Au.HTMLElement)) || "safari" in Au, o = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((o || r && i || Vl) && typeof FileReader < "u") {
    const u = new FileReader();
    u.onloadend = function() {
      let a = u.result;
      if (typeof a != "string")
        throw s = null, new Error("Wrong reader.result type");
      a = o ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = a : location.assign(a), s = null;
    }, u.readAsDataURL(e);
  } else {
    const u = URL.createObjectURL(e);
    s ? s.location.assign(u) : location.href = u, s = null, setTimeout(function() {
      URL.revokeObjectURL(u);
    }, 4e4);
  }
}
function ve(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Di(e) {
  return "_a" in e && "install" in e;
}
function jl() {
  if (!("clipboard" in navigator))
    return ve("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Bl(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (ve('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function x_(e) {
  if (!jl())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), ve("Global state copied to clipboard.");
    } catch (t) {
      if (Bl(t))
        return;
      ve("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function I_(e) {
  if (!jl())
    try {
      Hl(e, JSON.parse(await navigator.clipboard.readText())), ve("Global state pasted from clipboard.");
    } catch (t) {
      if (Bl(t))
        return;
      ve("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function P_(e) {
  try {
    $l(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    ve("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let _t;
function k_() {
  _t || (_t = document.createElement("input"), _t.type = "file", _t.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      _t.onchange = async () => {
        const s = _t.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, _t.oncancel = () => t(null), _t.onerror = n, _t.click();
    });
  }
  return e;
}
async function R_(e) {
  try {
    const n = await k_()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    Hl(e, JSON.parse(s)), ve(`Global state imported from "${r.name}".`);
  } catch (t) {
    ve("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Hl(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s ? Object.assign(s, t[n]) : e.state.value[n] = t[n];
  }
}
function qe(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Kl = "🍍 Pinia (root)", ws = "_root";
function D_(e) {
  return Di(e) ? {
    id: ws,
    label: Kl
  } : {
    id: e.$id,
    label: e.$id
  };
}
function L_(e) {
  if (Di(e)) {
    const n = Array.from(e._s.keys()), s = e._s;
    return {
      state: n.map((i) => ({
        editable: !0,
        key: i,
        value: e.state.value[i]
      })),
      getters: n.filter((i) => s.get(i)._getters).map((i) => {
        const o = s.get(i);
        return {
          editable: !1,
          key: i,
          value: o._getters.reduce((u, a) => (u[a] = o[a], u), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function N_(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: qe(e.type),
    key: qe(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function F_(e) {
  switch (e) {
    case dt.direct:
      return "mutation";
    case dt.patchFunction:
      return "$patch";
    case dt.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let ln = !0;
const Os = [], $t = "pinia:mutations", Te = "pinia", { assign: U_ } = Object, $s = (e) => "🍍 " + e;
function M_(e, t) {
  El({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Os,
    app: e
  }, (n) => {
    typeof n.now != "function" && ve("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: $t,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Te,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            x_(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await I_(t), n.sendInspectorTree(Te), n.sendInspectorState(Te);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            P_(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await R_(t), n.sendInspectorTree(Te), n.sendInspectorState(Te);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (s) => {
            const r = t._s.get(s);
            r ? typeof r.$reset != "function" ? ve(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), ve(`Store "${s}" reset.`)) : ve(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s) => {
      const r = s.componentInstance && s.componentInstance.proxy;
      if (r && r._pStores) {
        const i = s.componentInstance.proxy._pStores;
        Object.values(i).forEach((o) => {
          s.instanceData.state.push({
            type: $s(o.$id),
            key: "state",
            editable: !0,
            value: o._isOptionsAPI ? {
              _custom: {
                value: H(o.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => o.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(o.$state).reduce((u, a) => (u[a] = o.$state[a], u), {})
            )
          }), o._getters && o._getters.length && s.instanceData.state.push({
            type: $s(o.$id),
            key: "getters",
            editable: !1,
            value: o._getters.reduce((u, a) => {
              try {
                u[a] = o[a];
              } catch (c) {
                u[a] = c;
              }
              return u;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === Te) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(s.filter.toLowerCase()) : Kl.toLowerCase().includes(s.filter.toLowerCase())) : r).map(D_);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === Te) {
        const r = s.nodeId === ws ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.nodeId !== ws && (globalThis.$store = H(r)), s.state = L_(r));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === Te) {
        const r = s.nodeId === ws ? t : t._s.get(s.nodeId);
        if (!r)
          return ve(`store "${s.nodeId}" not found`, "error");
        const { path: i } = s;
        Di(r) ? i.unshift("state") : (i.length !== 1 || !r._customProperties.has(i[0]) || i[0] in r.$state) && i.unshift("$state"), ln = !1, s.set(r, i, s.state.value), ln = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const r = s.type.replace(/^🍍\s*/, ""), i = t._s.get(r);
        if (!i)
          return ve(`store "${r}" not found`, "error");
        const { path: o } = s;
        if (o[0] !== "state")
          return ve(`Invalid path for store "${r}":
${o}
Only state can be modified.`);
        o[0] = "$state", ln = !1, s.set(i, o, s.state.value), ln = !0;
      }
    });
  });
}
function V_(e, t) {
  Os.includes($s(t.$id)) || Os.push($s(t.$id)), El({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Os,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const s = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: o, onError: u, name: a, args: c }) => {
      const f = zl++;
      n.addTimelineEvent({
        layerId: $t,
        event: {
          time: s(),
          title: "🛫 " + a,
          subtitle: "start",
          data: {
            store: qe(t.$id),
            action: qe(a),
            args: c
          },
          groupId: f
        }
      }), o((l) => {
        Pt = void 0, n.addTimelineEvent({
          layerId: $t,
          event: {
            time: s(),
            title: "🛬 " + a,
            subtitle: "end",
            data: {
              store: qe(t.$id),
              action: qe(a),
              args: c,
              result: l
            },
            groupId: f
          }
        });
      }), u((l) => {
        Pt = void 0, n.addTimelineEvent({
          layerId: $t,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + a,
            subtitle: "end",
            data: {
              store: qe(t.$id),
              action: qe(a),
              args: c,
              error: l
            },
            groupId: f
          }
        });
      });
    }, !0), t._customProperties.forEach((o) => {
      Un(() => ft(t[o]), (u, a) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Te), ln && n.addTimelineEvent({
          layerId: $t,
          event: {
            time: s(),
            title: "Change",
            subtitle: o,
            data: {
              newValue: u,
              oldValue: a
            },
            groupId: Pt
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: o, type: u }, a) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Te), !ln)
        return;
      const c = {
        time: s(),
        title: F_(u),
        data: U_({ store: qe(t.$id) }, N_(o)),
        groupId: Pt
      };
      u === dt.patchFunction ? c.subtitle = "⤵️" : u === dt.patchObject ? c.subtitle = "🧩" : o && !Array.isArray(o) && (c.subtitle = o.type), o && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: o
        }
      }), n.addTimelineEvent({
        layerId: $t,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = It((o) => {
      r(o), n.addTimelineEvent({
        layerId: $t,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: qe(t.$id),
            info: qe("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Te), n.sendInspectorState(Te);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(Te), n.sendInspectorState(Te), n.getSettings().logStoreChanges && ve(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Te), n.sendInspectorState(Te), n.getSettings().logStoreChanges && ve(`"${t.$id}" store installed 🆕`);
  });
}
let zl = 0, Pt;
function xu(e, t, n) {
  const s = t.reduce((r, i) => (r[i] = H(e)[i], r), {});
  for (const r in s)
    e[r] = function() {
      const i = zl, o = n ? new Proxy(e, {
        get(...a) {
          return Pt = i, Reflect.get(...a);
        },
        set(...a) {
          return Pt = i, Reflect.set(...a);
        }
      }) : e;
      Pt = i;
      const u = s[r].apply(o, arguments);
      return Pt = void 0, u;
    };
}
function $_({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      xu(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      H(t)._hotUpdate = function(r) {
        s.apply(this, arguments), xu(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    V_(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function j_() {
  const e = Ku(!0), t = e.run(() => Ne({}));
  let n = [], s = [];
  const r = It({
    install(i) {
      ts(r), r._a = i, i.provide(Ul, r), i.config.globalProperties.$pinia = r, Yt && M_(i, r), s.forEach((o) => n.push(o)), s = [];
    },
    use(i) {
      return this._a ? n.push(i) : s.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Yt && typeof Proxy < "u" && r.use($_), r;
}
function Wl(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Xt(r) && Xt(s) && !ie(s) && !ct(s) ? e[n] = Wl(r, s) : e[n] = s;
  }
  return e;
}
const B_ = () => {
};
function Iu(e, t, n, s = B_) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && zu() && Sc(r), r;
}
function sn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const H_ = (e) => e(), Pu = Symbol(), Ar = Symbol();
function ei(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    Xt(r) && Xt(s) && e.hasOwnProperty(n) && !ie(s) && !ct(s) ? e[n] = ei(r, s) : e[n] = s;
  }
  return e;
}
const K_ = Symbol("pinia:skipHydration");
function z_(e) {
  return !Xt(e) || !e.hasOwnProperty(K_);
}
const { assign: We } = Object;
function ku(e) {
  return !!(ie(e) && e.effect);
}
function Ru(e, t, n, s) {
  const { state: r, actions: i, getters: o } = t, u = n.state.value[e];
  let a;
  function c() {
    !u && !s && (n.state.value[e] = r ? r() : {});
    const f = /* use ref() to unwrap refs inside state TODO: check if this is still necessary */ Ki(s ? Ne(r ? r() : {}).value : n.state.value[e]);
    return We(f, i, Object.keys(o || {}).reduce((l, _) => (_ in f && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${_}" in store "${e}".`), l[_] = It(yi(() => {
      ts(n);
      const p = n._s.get(e);
      return o[_].call(p, p);
    })), l), {}));
  }
  return a = ti(e, c, t, n, s, !0), a;
}
function ti(e, t, n = {}, s, r, i) {
  let o;
  const u = We({ actions: {} }, n);
  if (!s._e.active)
    throw new Error("Pinia destroyed");
  const a = { deep: !0 };
  a.onTrigger = (D) => {
    c ? p = D : c == !1 && !U._hotUpdating && (Array.isArray(p) ? p.push(D) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  };
  let c, f, l = [], _ = [], p;
  const g = s.state.value[e];
  !i && !g && !r && (s.state.value[e] = {});
  const b = Ne({});
  let E;
  function O(D) {
    let k;
    c = f = !1, p = [], typeof D == "function" ? (D(s.state.value[e]), k = {
      type: dt.patchFunction,
      storeId: e,
      events: p
    }) : (ei(s.state.value[e], D), k = {
      type: dt.patchObject,
      payload: D,
      storeId: e,
      events: p
    });
    const W = E = Symbol();
    Gn().then(() => {
      E === W && (c = !0);
    }), f = !0, sn(l, k, s.state.value[e]);
  }
  const $ = i ? function() {
    const { state: k } = n, W = k ? k() : {};
    this.$patch((ce) => {
      We(ce, W);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function N() {
    o.stop(), l = [], _ = [], s._s.delete(e);
  }
  const ne = (D, k = "") => {
    if (Pu in D)
      return D[Ar] = k, D;
    const W = function() {
      ts(s);
      const ce = Array.from(arguments), Ae = [], xe = [];
      function oe(G) {
        Ae.push(G);
      }
      function R(G) {
        xe.push(G);
      }
      sn(_, {
        args: ce,
        name: W[Ar],
        store: U,
        after: oe,
        onError: R
      });
      let K;
      try {
        K = D.apply(this && this.$id === e ? this : U, ce);
      } catch (G) {
        throw sn(xe, G), G;
      }
      return K instanceof Promise ? K.then((G) => (sn(Ae, G), G)).catch((G) => (sn(xe, G), Promise.reject(G))) : (sn(Ae, K), K);
    };
    return W[Pu] = !0, W[Ar] = k, W;
  }, F = /* @__PURE__ */ It({
    actions: {},
    getters: {},
    state: [],
    hotState: b
  }), J = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Iu.bind(null, _),
    $patch: O,
    $reset: $,
    $subscribe(D, k = {}) {
      const W = Iu(l, D, k.detached, () => ce()), ce = o.run(() => Un(() => s.state.value[e], (Ae) => {
        (k.flush === "sync" ? f : c) && D({
          storeId: e,
          type: dt.direct,
          events: p
        }, Ae);
      }, We({}, a, k)));
      return W;
    },
    $dispose: N
  }, U = Zs(We(
    {
      _hmrPayload: F,
      _customProperties: It(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    J
    // must be added later
    // setupStore
  ));
  s._s.set(e, U);
  const Q = (s._a && s._a.runWithContext || H_)(() => s._e.run(() => (o = Ku()).run(() => t({ action: ne }))));
  for (const D in Q) {
    const k = Q[D];
    if (ie(k) && !ku(k) || ct(k))
      r ? b.value[D] = gr(Q, D) : i || (g && z_(k) && (ie(k) ? k.value = g[D] : ei(k, g[D])), s.state.value[e][D] = k), F.state.push(D);
    else if (typeof k == "function") {
      const W = r ? k : ne(k, D);
      Q[D] = W, F.actions[D] = k, u.actions[D] = k;
    } else
      ku(k) && (F.getters[D] = i ? (
        // @ts-expect-error
        n.getters[D]
      ) : k, Yt && (Q._getters || // @ts-expect-error: same
      (Q._getters = It([]))).push(D));
  }
  if (We(U, Q), We(H(U), Q), Object.defineProperty(U, "$state", {
    get: () => r ? b.value : s.state.value[e],
    set: (D) => {
      if (r)
        throw new Error("cannot set hotState");
      O((k) => {
        We(k, D);
      });
    }
  }), U._hotUpdate = It((D) => {
    U._hotUpdating = !0, D._hmrPayload.state.forEach((k) => {
      if (k in U.$state) {
        const W = D.$state[k], ce = U.$state[k];
        typeof W == "object" && Xt(W) && Xt(ce) ? Wl(W, ce) : D.$state[k] = ce;
      }
      U[k] = gr(D.$state, k);
    }), Object.keys(U.$state).forEach((k) => {
      k in D.$state || delete U[k];
    }), c = !1, f = !1, s.state.value[e] = gr(D._hmrPayload, "hotState"), f = !0, Gn().then(() => {
      c = !0;
    });
    for (const k in D._hmrPayload.actions) {
      const W = D[k];
      U[k] = //
      ne(W, k);
    }
    for (const k in D._hmrPayload.getters) {
      const W = D._hmrPayload.getters[k], ce = i ? (
        // special handling of options api
        yi(() => (ts(s), W.call(U, U)))
      ) : W;
      U[k] = //
      ce;
    }
    Object.keys(U._hmrPayload.getters).forEach((k) => {
      k in D._hmrPayload.getters || delete U[k];
    }), Object.keys(U._hmrPayload.actions).forEach((k) => {
      k in D._hmrPayload.actions || delete U[k];
    }), U._hmrPayload = D._hmrPayload, U._getters = D._getters, U._hotUpdating = !1;
  }), Yt) {
    const D = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((k) => {
      Object.defineProperty(U, k, We({ value: U[k] }, D));
    });
  }
  return s._p.forEach((D) => {
    if (Yt) {
      const k = o.run(() => D({
        store: U,
        app: s._a,
        pinia: s,
        options: u
      }));
      Object.keys(k || {}).forEach((W) => U._customProperties.add(W)), We(U, k);
    } else
      We(U, o.run(() => D({
        store: U,
        app: s._a,
        pinia: s,
        options: u
      })));
  }), U.$state && typeof U.$state == "object" && typeof U.$state.constructor == "function" && !U.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${U.$id}".`), g && i && n.hydrate && n.hydrate(U.$state, g), c = !0, f = !0, U;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Li(e, t, n) {
  let s;
  const r = typeof t == "function";
  s = r ? n : t;
  function i(o, u) {
    const a = Gf();
    if (o = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    o || (a ? dn(Ul, null) : null), o && ts(o), !Qr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = Qr, o._s.has(e) || (r ? ti(e, t, s, o) : Ru(e, s, o), i._pinia = o);
    const c = o._s.get(e);
    if (u) {
      const f = "__hot:" + e, l = r ? ti(f, t, s, o, !0) : Ru(f, We({}, s), o, !0);
      u._hotUpdate(l), delete o.state.value[f], o._s.delete(f);
    }
    if (Yt) {
      const f = Ja();
      if (f && f.proxy && // avoid adding stores that are just built for hot module replacement
      !u) {
        const l = f.proxy, _ = "_pStores" in l ? l._pStores : l._pStores = {};
        _[e] = c;
      }
    }
    return c;
  }
  return i.$id = e, i;
}
const W_ = /* @__PURE__ */ Li("user", () => {
  const e = Ne(""), t = Ne("");
  function n({ name: s, email: r }) {
    e.value = s || "", t.value = r || "";
  }
  return { name: e, email: t, init: n };
}), it = /* @__PURE__ */ Li("chat", () => {
  const e = Ne(!0), t = Ne([]);
  function n({ history: r = [] } = {}) {
    t.value = r;
  }
  function s(r) {
    const i = t.value.findIndex((o) => o.clientId === r.clientId);
    i !== -1 ? t.value[i] = {
      ...t.value[i],
      ...r
    } : t.value.push({
      ...r
    });
  }
  return {
    isLoading: e,
    items: t,
    init: n,
    add: s
  };
});
function kn(e, t, n, s) {
  function r(i) {
    return i instanceof n ? i : new n(function(o) {
      o(i);
    });
  }
  return new (n || (n = Promise))(function(i, o) {
    function u(f) {
      try {
        c(s.next(f));
      } catch (l) {
        o(l);
      }
    }
    function a(f) {
      try {
        c(s.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function c(f) {
      f.done ? i(f.value) : r(f.value).then(u, a);
    }
    c((s = s.apply(e, [])).next());
  });
}
function G_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ni = { exports: {} }, hn = typeof Reflect == "object" ? Reflect : null, Du = hn && typeof hn.apply == "function" ? hn.apply : function(t, n, s) {
  return Function.prototype.apply.call(t, n, s);
}, Cs;
hn && typeof hn.ownKeys == "function" ? Cs = hn.ownKeys : Object.getOwnPropertySymbols ? Cs = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Cs = function(t) {
  return Object.getOwnPropertyNames(t);
};
function q_(e) {
  console && console.warn && console.warn(e);
}
var Gl = Number.isNaN || function(t) {
  return t !== t;
};
function se() {
  se.init.call(this);
}
Ni.exports = se;
Ni.exports.once = X_;
se.EventEmitter = se;
se.prototype._events = void 0;
se.prototype._eventsCount = 0;
se.prototype._maxListeners = void 0;
var Lu = 10;
function ar(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(se, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Lu;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Gl(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Lu = e;
  }
});
se.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
se.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Gl(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function ql(e) {
  return e._maxListeners === void 0 ? se.defaultMaxListeners : e._maxListeners;
}
se.prototype.getMaxListeners = function() {
  return ql(this);
};
se.prototype.emit = function(t) {
  for (var n = [], s = 1; s < arguments.length; s++) n.push(arguments[s]);
  var r = t === "error", i = this._events;
  if (i !== void 0)
    r = r && i.error === void 0;
  else if (!r)
    return !1;
  if (r) {
    var o;
    if (n.length > 0 && (o = n[0]), o instanceof Error)
      throw o;
    var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw u.context = o, u;
  }
  var a = i[t];
  if (a === void 0)
    return !1;
  if (typeof a == "function")
    Du(a, this, n);
  else
    for (var c = a.length, f = Ql(a, c), s = 0; s < c; ++s)
      Du(f[s], this, n);
  return !0;
};
function Yl(e, t, n, s) {
  var r, i, o;
  if (ar(n), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), i = e._events), o = i[t]), o === void 0)
    o = i[t] = n, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[t] = s ? [n, o] : [o, n] : s ? o.unshift(n) : o.push(n), r = ql(e), r > 0 && o.length > r && !o.warned) {
    o.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, q_(u);
  }
  return e;
}
se.prototype.addListener = function(t, n) {
  return Yl(this, t, n, !1);
};
se.prototype.on = se.prototype.addListener;
se.prototype.prependListener = function(t, n) {
  return Yl(this, t, n, !0);
};
function Y_() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Jl(e, t, n) {
  var s = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, r = Y_.bind(s);
  return r.listener = n, s.wrapFn = r, r;
}
se.prototype.once = function(t, n) {
  return ar(n), this.on(t, Jl(this, t, n)), this;
};
se.prototype.prependOnceListener = function(t, n) {
  return ar(n), this.prependListener(t, Jl(this, t, n)), this;
};
se.prototype.removeListener = function(t, n) {
  var s, r, i, o, u;
  if (ar(n), r = this._events, r === void 0)
    return this;
  if (s = r[t], s === void 0)
    return this;
  if (s === n || s.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, s.listener || n));
  else if (typeof s != "function") {
    for (i = -1, o = s.length - 1; o >= 0; o--)
      if (s[o] === n || s[o].listener === n) {
        u = s[o].listener, i = o;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? s.shift() : J_(s, i), s.length === 1 && (r[t] = s[0]), r.removeListener !== void 0 && this.emit("removeListener", t, u || n);
  }
  return this;
};
se.prototype.off = se.prototype.removeListener;
se.prototype.removeAllListeners = function(t) {
  var n, s, r;
  if (s = this._events, s === void 0)
    return this;
  if (s.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : s[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete s[t]), this;
  if (arguments.length === 0) {
    var i = Object.keys(s), o;
    for (r = 0; r < i.length; ++r)
      o = i[r], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = s[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (r = n.length - 1; r >= 0; r--)
      this.removeListener(t, n[r]);
  return this;
};
function Zl(e, t, n) {
  var s = e._events;
  if (s === void 0)
    return [];
  var r = s[t];
  return r === void 0 ? [] : typeof r == "function" ? n ? [r.listener || r] : [r] : n ? Z_(r) : Ql(r, r.length);
}
se.prototype.listeners = function(t) {
  return Zl(this, t, !0);
};
se.prototype.rawListeners = function(t) {
  return Zl(this, t, !1);
};
se.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Xl.call(e, t);
};
se.prototype.listenerCount = Xl;
function Xl(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
se.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Cs(this._events) : [];
};
function Ql(e, t) {
  for (var n = new Array(t), s = 0; s < t; ++s)
    n[s] = e[s];
  return n;
}
function J_(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Z_(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function X_(e, t) {
  return new Promise(function(n, s) {
    function r(o) {
      e.removeListener(t, i), s(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", r), n([].slice.call(arguments));
    }
    ec(e, t, i, { once: !0 }), t !== "error" && Q_(e, r, { once: !0 });
  });
}
function Q_(e, t, n) {
  typeof e.on == "function" && ec(e, "error", t, n);
}
function ec(e, t, n, s) {
  if (typeof e.on == "function")
    s.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function r(i) {
      s.once && e.removeEventListener(t, r), n(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var eg = Ni.exports, tc = /* @__PURE__ */ G_(eg), le;
(function(e) {
  e[e.timeout = 1] = "timeout", e[e.transportClosed = 2] = "transportClosed", e[e.clientDisconnected = 3] = "clientDisconnected", e[e.clientClosed = 4] = "clientClosed", e[e.clientConnectToken = 5] = "clientConnectToken", e[e.clientRefreshToken = 6] = "clientRefreshToken", e[e.subscriptionUnsubscribed = 7] = "subscriptionUnsubscribed", e[e.subscriptionSubscribeToken = 8] = "subscriptionSubscribeToken", e[e.subscriptionRefreshToken = 9] = "subscriptionRefreshToken", e[e.transportWriteError = 10] = "transportWriteError", e[e.connectionClosed = 11] = "connectionClosed", e[e.badConfiguration = 12] = "badConfiguration";
})(le || (le = {}));
var xt;
(function(e) {
  e[e.connectCalled = 0] = "connectCalled", e[e.transportClosed = 1] = "transportClosed", e[e.noPing = 2] = "noPing", e[e.subscribeTimeout = 3] = "subscribeTimeout", e[e.unsubscribeError = 4] = "unsubscribeError";
})(xt || (xt = {}));
var Bn;
(function(e) {
  e[e.disconnectCalled = 0] = "disconnectCalled", e[e.unauthorized = 1] = "unauthorized", e[e.badProtocol = 2] = "badProtocol", e[e.messageSizeLimit = 3] = "messageSizeLimit";
})(Bn || (Bn = {}));
var js;
(function(e) {
  e[e.subscribeCalled = 0] = "subscribeCalled", e[e.transportClosed = 1] = "transportClosed";
})(js || (js = {}));
var Bs;
(function(e) {
  e[e.unsubscribeCalled = 0] = "unsubscribeCalled", e[e.unauthorized = 1] = "unauthorized", e[e.clientClosed = 2] = "clientClosed";
})(Bs || (Bs = {}));
var pe;
(function(e) {
  e.Disconnected = "disconnected", e.Connecting = "connecting", e.Connected = "connected";
})(pe || (pe = {}));
var Re;
(function(e) {
  e.Unsubscribed = "unsubscribed", e.Subscribing = "subscribing", e.Subscribed = "subscribed";
})(Re || (Re = {}));
function tg(e, t) {
  return e.lastIndexOf(t, 0) === 0;
}
function nc(e) {
  return e == null ? !1 : typeof e == "function";
}
function ng(e, t) {
  if (globalThis.console) {
    const n = globalThis.console[e];
    nc(n) && n.apply(globalThis.console, t);
  }
}
function sg(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function Hs(e, t, n) {
  e > 31 && (e = 31);
  const s = sg(0, Math.min(n, t * Math.pow(2, e)));
  return Math.min(n, t + s);
}
function rg(e) {
  return "error" in e && e.error !== null;
}
function Ks(e) {
  return Math.min(e * 1e3, 2147483647);
}
class ig extends tc {
  /** Subscription constructor should not be used directly, create subscriptions using Client method. */
  constructor(t, n, s) {
    super(), this._resubscribeTimeout = null, this._refreshTimeout = null, this.channel = n, this.state = Re.Unsubscribed, this._centrifuge = t, this._token = "", this._getToken = null, this._data = null, this._getData = null, this._recover = !1, this._offset = null, this._epoch = null, this._recoverable = !1, this._positioned = !1, this._joinLeave = !1, this._minResubscribeDelay = 500, this._maxResubscribeDelay = 2e4, this._resubscribeTimeout = null, this._resubscribeAttempts = 0, this._promises = {}, this._promiseId = 0, this._inflight = !1, this._refreshTimeout = null, this._delta = "", this._delta_negotiated = !1, this._prevValue = null, this._unsubPromise = Promise.resolve(), this._setOptions(s), this._centrifuge._debugEnabled ? (this.on("state", (r) => {
      this._debug("subscription state", n, r.oldState, "->", r.newState);
    }), this.on("error", (r) => {
      this._debug("subscription error", n, r);
    })) : this.on("error", function() {
      Function.prototype();
    });
  }
  /** ready returns a Promise which resolves upon subscription goes to Subscribed
   * state and rejects in case of subscription goes to Unsubscribed state.
   * Optional timeout can be passed.*/
  ready(t) {
    return this.state === Re.Unsubscribed ? Promise.reject({ code: le.subscriptionUnsubscribed, message: this.state }) : this.state === Re.Subscribed ? Promise.resolve() : new Promise((n, s) => {
      const r = {
        resolve: n,
        reject: s
      };
      t && (r.timeout = setTimeout(function() {
        s({ code: le.timeout, message: "timeout" });
      }, t)), this._promises[this._nextPromiseId()] = r;
    });
  }
  /** subscribe to a channel.*/
  subscribe() {
    this._isSubscribed() || (this._resubscribeAttempts = 0, this._setSubscribing(js.subscribeCalled, "subscribe called"));
  }
  /** unsubscribe from a channel, keeping position state.*/
  unsubscribe() {
    this._unsubPromise = this._setUnsubscribed(Bs.unsubscribeCalled, "unsubscribe called", !0);
  }
  /** publish data to a channel.*/
  publish(t) {
    const n = this;
    return this._methodCall().then(function() {
      return n._centrifuge.publish(n.channel, t);
    });
  }
  /** get online presence for a channel.*/
  presence() {
    const t = this;
    return this._methodCall().then(function() {
      return t._centrifuge.presence(t.channel);
    });
  }
  /** presence stats for a channel (num clients and unique users).*/
  presenceStats() {
    const t = this;
    return this._methodCall().then(function() {
      return t._centrifuge.presenceStats(t.channel);
    });
  }
  /** history for a channel. By default it does not return publications (only current
   *  StreamPosition data) – provide an explicit limit > 0 to load publications.*/
  history(t) {
    const n = this;
    return this._methodCall().then(function() {
      return n._centrifuge.history(n.channel, t);
    });
  }
  _methodCall() {
    return this._isSubscribed() ? Promise.resolve() : this._isUnsubscribed() ? Promise.reject({ code: le.subscriptionUnsubscribed, message: this.state }) : new Promise((t, n) => {
      const s = setTimeout(function() {
        n({ code: le.timeout, message: "timeout" });
      }, this._centrifuge._config.timeout);
      this._promises[this._nextPromiseId()] = {
        timeout: s,
        resolve: t,
        reject: n
      };
    });
  }
  _nextPromiseId() {
    return ++this._promiseId;
  }
  _needRecover() {
    return this._recover === !0;
  }
  _isUnsubscribed() {
    return this.state === Re.Unsubscribed;
  }
  _isSubscribing() {
    return this.state === Re.Subscribing;
  }
  _isSubscribed() {
    return this.state === Re.Subscribed;
  }
  _setState(t) {
    if (this.state !== t) {
      const n = this.state;
      return this.state = t, this.emit("state", { newState: t, oldState: n, channel: this.channel }), !0;
    }
    return !1;
  }
  _usesToken() {
    return this._token !== "" || this._getToken !== null;
  }
  _clearSubscribingState() {
    this._resubscribeAttempts = 0, this._clearResubscribeTimeout();
  }
  _clearSubscribedState() {
    this._clearRefreshTimeout();
  }
  _setSubscribed(t) {
    if (!this._isSubscribing())
      return;
    this._clearSubscribingState(), t.recoverable && (this._recover = !0, this._offset = t.offset || 0, this._epoch = t.epoch || ""), t.delta ? this._delta_negotiated = !0 : this._delta_negotiated = !1, this._setState(Re.Subscribed);
    const n = this._centrifuge._getSubscribeContext(this.channel, t);
    this.emit("subscribed", n), this._resolvePromises();
    const s = t.publications;
    if (s && s.length > 0)
      for (const r in s)
        s.hasOwnProperty(r) && this._handlePublication(s[r]);
    t.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), Ks(t.ttl)));
  }
  _setSubscribing(t, n) {
    return kn(this, void 0, void 0, function* () {
      this._isSubscribing() || (this._isSubscribed() && this._clearSubscribedState(), this._setState(Re.Subscribing) && this.emit("subscribing", { channel: this.channel, code: t, reason: n }), this._centrifuge._transport && this._centrifuge._transport.emulation() && (yield this._unsubPromise), this._isSubscribing() && this._subscribe());
    });
  }
  _subscribe() {
    return this._debug("subscribing on", this.channel), this._isTransportOpen() ? this._inflight ? null : (this._inflight = !0, this._canSubscribeWithoutGettingToken() ? this._subscribeWithoutToken() : (this._getSubscriptionToken().then((t) => this._handleTokenResponse(t)).catch((t) => this._handleTokenError(t)), null)) : (this._debug("delay subscribe on", this.channel, "till connected"), null);
  }
  _isTransportOpen() {
    return this._centrifuge._transportIsOpen;
  }
  _canSubscribeWithoutGettingToken() {
    return !this._usesToken() || !!this._token;
  }
  _subscribeWithoutToken() {
    return this._getData ? (this._getDataAndSubscribe(this._token), null) : this._sendSubscribe(this._token);
  }
  _getDataAndSubscribe(t) {
    if (!this._getData) {
      this._inflight = !1;
      return;
    }
    this._getData({ channel: this.channel }).then((n) => {
      if (!this._isSubscribing()) {
        this._inflight = !1;
        return;
      }
      this._data = n, this._sendSubscribe(t);
    }).catch((n) => this._handleGetDataError(n));
  }
  _handleGetDataError(t) {
    if (!this._isSubscribing()) {
      this._inflight = !1;
      return;
    }
    if (t instanceof bt) {
      this._inflight = !1, this._failUnauthorized();
      return;
    }
    this.emit("error", {
      type: "subscribeData",
      channel: this.channel,
      error: {
        code: le.badConfiguration,
        message: (t == null ? void 0 : t.toString()) || ""
      }
    }), this._inflight = !1, this._scheduleResubscribe();
  }
  _handleTokenResponse(t) {
    if (!this._isSubscribing()) {
      this._inflight = !1;
      return;
    }
    if (!t) {
      this._inflight = !1, this._failUnauthorized();
      return;
    }
    this._token = t, this._getData ? this._getDataAndSubscribe(t) : this._sendSubscribe(t);
  }
  _handleTokenError(t) {
    if (!this._isSubscribing()) {
      this._inflight = !1;
      return;
    }
    if (t instanceof bt) {
      this._inflight = !1, this._failUnauthorized();
      return;
    }
    this.emit("error", {
      type: "subscribeToken",
      channel: this.channel,
      error: {
        code: le.subscriptionSubscribeToken,
        message: (t == null ? void 0 : t.toString()) || ""
      }
    }), this._inflight = !1, this._scheduleResubscribe();
  }
  _sendSubscribe(t) {
    if (!this._isTransportOpen())
      return this._inflight = !1, null;
    const n = this._buildSubscribeCommand(t);
    return this._centrifuge._call(n).then((s) => {
      this._inflight = !1;
      const r = s.reply.subscribe;
      this._handleSubscribeResponse(r), s.next && s.next();
    }, (s) => {
      this._inflight = !1, this._handleSubscribeError(s.error), s.next && s.next();
    }), n;
  }
  _buildSubscribeCommand(t) {
    const n = { channel: this.channel };
    if (t && (n.token = t), this._data && (n.data = this._data), this._positioned && (n.positioned = !0), this._recoverable && (n.recoverable = !0), this._joinLeave && (n.join_leave = !0), this._needRecover()) {
      n.recover = !0;
      const s = this._getOffset();
      s && (n.offset = s);
      const r = this._getEpoch();
      r && (n.epoch = r);
    }
    return this._delta && (n.delta = this._delta), { subscribe: n };
  }
  _debug(...t) {
    this._centrifuge._debug(...t);
  }
  _handleSubscribeError(t) {
    if (this._isSubscribing()) {
      if (t.code === le.timeout) {
        this._centrifuge._disconnect(xt.subscribeTimeout, "subscribe timeout", !0);
        return;
      }
      this._subscribeError(t);
    }
  }
  _handleSubscribeResponse(t) {
    this._isSubscribing() && this._setSubscribed(t);
  }
  _setUnsubscribed(t, n, s) {
    if (this._isUnsubscribed())
      return Promise.resolve();
    let r = Promise.resolve();
    return this._isSubscribed() ? (s && (r = this._centrifuge._unsubscribe(this)), this._clearSubscribedState()) : this._isSubscribing() && (this._inflight && s && (r = this._centrifuge._unsubscribe(this)), this._clearSubscribingState()), this._inflight = !1, this._setState(Re.Unsubscribed) && this.emit("unsubscribed", { channel: this.channel, code: t, reason: n }), this._rejectPromises({ code: le.subscriptionUnsubscribed, message: this.state }), r;
  }
  _handlePublication(t) {
    if (this._delta && this._delta_negotiated) {
      const { newData: s, newPrevValue: r } = this._centrifuge._codec.applyDeltaIfNeeded(t, this._prevValue);
      t.data = s, this._prevValue = r;
    }
    const n = this._centrifuge._getPublicationContext(this.channel, t);
    this.emit("publication", n), t.offset && (this._offset = t.offset);
  }
  _handleJoin(t) {
    const n = this._centrifuge._getJoinLeaveContext(t.info);
    this.emit("join", { channel: this.channel, info: n });
  }
  _handleLeave(t) {
    const n = this._centrifuge._getJoinLeaveContext(t.info);
    this.emit("leave", { channel: this.channel, info: n });
  }
  _resolvePromises() {
    for (const t in this._promises)
      this._promises.hasOwnProperty(t) && (this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].resolve(), delete this._promises[t]);
  }
  _rejectPromises(t) {
    for (const n in this._promises)
      this._promises.hasOwnProperty(n) && (this._promises[n].timeout && clearTimeout(this._promises[n].timeout), this._promises[n].reject(t), delete this._promises[n]);
  }
  _scheduleResubscribe() {
    if (!this._isSubscribing()) {
      this._debug("not in subscribing state, skip resubscribe scheduling", this.channel);
      return;
    }
    const t = this, n = this._getResubscribeDelay();
    this._resubscribeTimeout = setTimeout(function() {
      t._isSubscribing() && t._subscribe();
    }, n), this._debug("resubscribe scheduled after " + n, this.channel);
  }
  _subscribeError(t) {
    if (this._isSubscribing())
      if (t.code < 100 || t.code === 109 || t.temporary === !0) {
        t.code === 109 && (this._token = "");
        const n = {
          channel: this.channel,
          type: "subscribe",
          error: t
        };
        this._centrifuge.state === pe.Connected && this.emit("error", n), this._scheduleResubscribe();
      } else
        this._setUnsubscribed(t.code, t.message, !1);
  }
  _getResubscribeDelay() {
    const t = Hs(this._resubscribeAttempts, this._minResubscribeDelay, this._maxResubscribeDelay);
    return this._resubscribeAttempts++, t;
  }
  _setOptions(t) {
    if (t && (t.since && (this._offset = t.since.offset, this._epoch = t.since.epoch, this._recover = !0), t.data && (this._data = t.data), t.getData && (this._getData = t.getData), t.minResubscribeDelay !== void 0 && (this._minResubscribeDelay = t.minResubscribeDelay), t.maxResubscribeDelay !== void 0 && (this._maxResubscribeDelay = t.maxResubscribeDelay), t.token && (this._token = t.token), t.getToken && (this._getToken = t.getToken), t.positioned === !0 && (this._positioned = !0), t.recoverable === !0 && (this._recoverable = !0), t.joinLeave === !0 && (this._joinLeave = !0), t.delta)) {
      if (t.delta !== "fossil")
        throw new Error("unsupported delta format");
      this._delta = t.delta;
    }
  }
  _getOffset() {
    const t = this._offset;
    return t !== null ? t : 0;
  }
  _getEpoch() {
    const t = this._epoch;
    return t !== null ? t : "";
  }
  _clearRefreshTimeout() {
    this._refreshTimeout !== null && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null);
  }
  _clearResubscribeTimeout() {
    this._resubscribeTimeout !== null && (clearTimeout(this._resubscribeTimeout), this._resubscribeTimeout = null);
  }
  _getSubscriptionToken() {
    this._debug("get subscription token for channel", this.channel);
    const t = {
      channel: this.channel
    }, n = this._getToken;
    if (n === null)
      throw this.emit("error", {
        type: "configuration",
        channel: this.channel,
        error: {
          code: le.badConfiguration,
          message: "provide a function to get channel subscription token"
        }
      }), new bt("");
    return n(t);
  }
  _refresh() {
    this._clearRefreshTimeout();
    const t = this;
    this._getSubscriptionToken().then(function(n) {
      if (!t._isSubscribed())
        return;
      if (!n) {
        t._failUnauthorized();
        return;
      }
      t._token = n;
      const r = {
        sub_refresh: {
          channel: t.channel,
          token: n
        }
      };
      t._centrifuge._call(r).then((i) => {
        const o = i.reply.sub_refresh;
        t._refreshResponse(o), i.next && i.next();
      }, (i) => {
        t._refreshError(i.error), i.next && i.next();
      });
    }).catch(function(n) {
      if (n instanceof bt) {
        t._failUnauthorized();
        return;
      }
      t.emit("error", {
        type: "refreshToken",
        channel: t.channel,
        error: {
          code: le.subscriptionRefreshToken,
          message: n !== void 0 ? n.toString() : ""
        }
      }), t._refreshTimeout = setTimeout(() => t._refresh(), t._getRefreshRetryDelay());
    });
  }
  _refreshResponse(t) {
    this._isSubscribed() && (this._debug("subscription token refreshed, channel", this.channel), this._clearRefreshTimeout(), t.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), Ks(t.ttl))));
  }
  _refreshError(t) {
    this._isSubscribed() && (t.code < 100 || t.temporary === !0 ? (this.emit("error", {
      type: "refresh",
      channel: this.channel,
      error: t
    }), this._refreshTimeout = setTimeout(() => this._refresh(), this._getRefreshRetryDelay())) : this._setUnsubscribed(t.code, t.message, !0));
  }
  _getRefreshRetryDelay() {
    return Hs(0, 1e4, 2e4);
  }
  _failUnauthorized() {
    this._setUnsubscribed(Bs.unauthorized, "unauthorized", !0);
  }
}
class og {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._transport = null;
  }
  name() {
    return "sockjs";
  }
  subName() {
    return "sockjs-" + this._transport.transport;
  }
  emulation() {
    return !1;
  }
  supported() {
    return this.options.sockjs !== null;
  }
  initialize(t, n) {
    this._transport = new this.options.sockjs(this.endpoint, null, this.options.sockjsOptions), this._transport.onopen = () => {
      n.onOpen();
    }, this._transport.onerror = (s) => {
      n.onError(s);
    }, this._transport.onclose = (s) => {
      n.onClose(s);
    }, this._transport.onmessage = (s) => {
      n.onMessage(s.data);
    };
  }
  close() {
    this._transport.close();
  }
  send(t) {
    this._transport.send(t);
  }
}
class Nu {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._transport = null;
  }
  name() {
    return "websocket";
  }
  subName() {
    return "websocket";
  }
  emulation() {
    return !1;
  }
  supported() {
    return this.options.websocket !== void 0 && this.options.websocket !== null;
  }
  initialize(t, n) {
    let s = "";
    t === "protobuf" && (s = "centrifuge-protobuf"), s !== "" ? this._transport = new this.options.websocket(this.endpoint, s) : this._transport = new this.options.websocket(this.endpoint), t === "protobuf" && (this._transport.binaryType = "arraybuffer"), this._transport.onopen = () => {
      n.onOpen();
    }, this._transport.onerror = (r) => {
      n.onError(r);
    }, this._transport.onclose = (r) => {
      n.onClose(r);
    }, this._transport.onmessage = (r) => {
      n.onMessage(r.data);
    };
  }
  close() {
    this._transport.close();
  }
  send(t) {
    this._transport.send(t);
  }
}
class ug {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._abortController = null, this._utf8decoder = new TextDecoder(), this._protocol = "json";
  }
  name() {
    return "http_stream";
  }
  subName() {
    return "http_stream";
  }
  emulation() {
    return !0;
  }
  _handleErrors(t) {
    if (!t.ok)
      throw new Error(t.status);
    return t;
  }
  _fetchEventTarget(t, n, s) {
    const r = new EventTarget(), i = t.options.fetch;
    return i(n, s).then(t._handleErrors).then((o) => {
      r.dispatchEvent(new Event("open"));
      let u = "", a = 0, c = new Uint8Array();
      const f = o.body.getReader();
      return new t.options.readableStream({
        start(l) {
          function _() {
            return f.read().then(({ done: p, value: g }) => {
              if (p) {
                r.dispatchEvent(new Event("close")), l.close();
                return;
              }
              try {
                if (t._protocol === "json")
                  for (u += t._utf8decoder.decode(g); a < u.length; )
                    if (u[a] === `
`) {
                      const b = u.substring(0, a);
                      r.dispatchEvent(new MessageEvent("message", { data: b })), u = u.substring(a + 1), a = 0;
                    } else
                      ++a;
                else {
                  const b = new Uint8Array(c.length + g.length);
                  for (b.set(c), b.set(g, c.length), c = b; ; ) {
                    const E = t.options.decoder.decodeReply(c);
                    if (E.ok) {
                      const O = c.slice(0, E.pos);
                      r.dispatchEvent(new MessageEvent("message", { data: O })), c = c.slice(E.pos);
                      continue;
                    }
                    break;
                  }
                }
              } catch (b) {
                r.dispatchEvent(new Event("error", { detail: b })), r.dispatchEvent(new Event("close")), l.close();
                return;
              }
              _();
            }).catch(function(p) {
              r.dispatchEvent(new Event("error", { detail: p })), r.dispatchEvent(new Event("close")), l.close();
            });
          }
          return _();
        }
      });
    }).catch((o) => {
      r.dispatchEvent(new Event("error", { detail: o })), r.dispatchEvent(new Event("close"));
    }), r;
  }
  supported() {
    return this.options.fetch !== null && this.options.readableStream !== null && typeof TextDecoder < "u" && typeof AbortController < "u" && typeof EventTarget < "u" && typeof Event < "u" && typeof MessageEvent < "u" && typeof Error < "u";
  }
  initialize(t, n, s) {
    this._protocol = t, this._abortController = new AbortController();
    let r, i;
    t === "json" ? (r = {
      Accept: "application/json",
      "Content-Type": "application/json"
    }, i = s) : (r = {
      Accept: "application/octet-stream",
      "Content-Type": "application/octet-stream"
    }, i = s);
    const o = {
      method: "POST",
      headers: r,
      body: i,
      mode: "cors",
      credentials: "same-origin",
      signal: this._abortController.signal
    }, u = this._fetchEventTarget(this, this.endpoint, o);
    u.addEventListener("open", () => {
      n.onOpen();
    }), u.addEventListener("error", (a) => {
      this._abortController.abort(), n.onError(a);
    }), u.addEventListener("close", () => {
      this._abortController.abort(), n.onClose({
        code: 4,
        reason: "connection closed"
      });
    }), u.addEventListener("message", (a) => {
      n.onMessage(a.data);
    });
  }
  close() {
    this._abortController.abort();
  }
  send(t, n, s) {
    let r, i;
    const o = {
      session: n,
      node: s,
      data: t
    };
    this._protocol === "json" ? (r = {
      "Content-Type": "application/json"
    }, i = JSON.stringify(o)) : (r = {
      "Content-Type": "application/octet-stream"
    }, i = this.options.encoder.encodeEmulationRequest(o));
    const u = this.options.fetch, a = {
      method: "POST",
      headers: r,
      body: i,
      mode: "cors",
      credentials: "same-origin"
    };
    u(this.options.emulationEndpoint, a);
  }
}
class ag {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._protocol = "json", this._transport = null, this._onClose = null;
  }
  name() {
    return "sse";
  }
  subName() {
    return "sse";
  }
  emulation() {
    return !0;
  }
  supported() {
    return this.options.eventsource !== null && this.options.fetch !== null;
  }
  initialize(t, n, s) {
    let r;
    globalThis && globalThis.document && globalThis.document.baseURI ? r = new URL(this.endpoint, globalThis.document.baseURI) : r = new URL(this.endpoint), r.searchParams.append("cf_connect", s);
    const i = {}, o = new this.options.eventsource(r.toString(), i);
    this._transport = o;
    const u = this;
    o.onopen = function() {
      n.onOpen();
    }, o.onerror = function(a) {
      o.close(), n.onError(a), n.onClose({
        code: 4,
        reason: "connection closed"
      });
    }, o.onmessage = function(a) {
      n.onMessage(a.data);
    }, u._onClose = function() {
      n.onClose({
        code: 4,
        reason: "connection closed"
      });
    };
  }
  close() {
    this._transport.close(), this._onClose !== null && this._onClose();
  }
  send(t, n, s) {
    const r = {
      session: n,
      node: s,
      data: t
    }, i = {
      "Content-Type": "application/json"
    }, o = JSON.stringify(r), u = this.options.fetch, a = {
      method: "POST",
      headers: i,
      body: o,
      mode: "cors",
      credentials: "same-origin"
    };
    u(this.options.emulationEndpoint, a);
  }
}
class lg {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._transport = null, this._stream = null, this._writer = null, this._utf8decoder = new TextDecoder(), this._protocol = "json";
  }
  name() {
    return "webtransport";
  }
  subName() {
    return "webtransport";
  }
  emulation() {
    return !1;
  }
  supported() {
    return this.options.webtransport !== void 0 && this.options.webtransport !== null;
  }
  initialize(t, n) {
    return kn(this, void 0, void 0, function* () {
      let s;
      globalThis && globalThis.document && globalThis.document.baseURI ? s = new URL(this.endpoint, globalThis.document.baseURI) : s = new URL(this.endpoint), t === "protobuf" && s.searchParams.append("cf_protocol", "protobuf"), this._protocol = t;
      const r = new EventTarget();
      this._transport = new this.options.webtransport(s.toString()), this._transport.closed.then(() => {
        n.onClose({
          code: 4,
          reason: "connection closed"
        });
      }).catch(() => {
        n.onClose({
          code: 4,
          reason: "connection closed"
        });
      });
      try {
        yield this._transport.ready;
      } catch {
        this.close();
        return;
      }
      let i;
      try {
        i = yield this._transport.createBidirectionalStream();
      } catch {
        this.close();
        return;
      }
      this._stream = i, this._writer = this._stream.writable.getWriter(), r.addEventListener("close", () => {
        n.onClose({
          code: 4,
          reason: "connection closed"
        });
      }), r.addEventListener("message", (o) => {
        n.onMessage(o.data);
      }), this._startReading(r), n.onOpen();
    });
  }
  _startReading(t) {
    return kn(this, void 0, void 0, function* () {
      const n = this._stream.readable.getReader();
      let s = "", r = 0, i = new Uint8Array();
      try {
        for (; ; ) {
          const { done: o, value: u } = yield n.read();
          if (u.length > 0)
            if (this._protocol === "json")
              for (s += this._utf8decoder.decode(u); r < s.length; )
                if (s[r] === `
`) {
                  const a = s.substring(0, r);
                  t.dispatchEvent(new MessageEvent("message", { data: a })), s = s.substring(r + 1), r = 0;
                } else
                  ++r;
            else {
              const a = new Uint8Array(i.length + u.length);
              for (a.set(i), a.set(u, i.length), i = a; ; ) {
                const c = this.options.decoder.decodeReply(i);
                if (c.ok) {
                  const f = i.slice(0, c.pos);
                  t.dispatchEvent(new MessageEvent("message", { data: f })), i = i.slice(c.pos);
                  continue;
                }
                break;
              }
            }
          if (o)
            break;
        }
      } catch {
        t.dispatchEvent(new Event("close"));
      }
    });
  }
  close() {
    return kn(this, void 0, void 0, function* () {
      try {
        this._writer && (yield this._writer.close()), this._transport.close();
      } catch {
      }
    });
  }
  send(t) {
    return kn(this, void 0, void 0, function* () {
      let n;
      this._protocol === "json" ? n = new TextEncoder().encode(t + `
`) : n = t;
      try {
        yield this._writer.write(n);
      } catch {
        this.close();
      }
    });
  }
}
const cg = [
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  -1,
  -1,
  -1,
  -1,
  36,
  -1,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  -1,
  -1,
  -1,
  63,
  -1
];
class fg {
  constructor(t) {
    this.a = t, this.pos = 0;
  }
  haveBytes() {
    return this.pos < this.a.length;
  }
  getByte() {
    const t = this.a[this.pos];
    if (this.pos++, this.pos > this.a.length)
      throw new RangeError("out of bounds");
    return t;
  }
  getChar() {
    return String.fromCharCode(this.getByte());
  }
  // Read base64-encoded unsigned integer.
  getInt() {
    let t = 0, n;
    for (; this.haveBytes() && (n = cg[127 & this.getByte()]) >= 0; )
      t = (t << 6) + n;
    return this.pos--, t >>> 0;
  }
}
class dg {
  constructor() {
    this.a = [];
  }
  toByteArray(t) {
    return Array.isArray(t) ? this.a : new Uint8Array(this.a);
  }
  // Copy from array at start to end.
  putArray(t, n, s) {
    for (let r = n; r < s; r++)
      this.a.push(t[r]);
  }
}
function hg(e) {
  let t = 0, n = 0, s = 0, r = 0, i = 0, o = e.length;
  for (; o >= 16; )
    t = t + e[i + 0] | 0, n = n + e[i + 1] | 0, s = s + e[i + 2] | 0, r = r + e[i + 3] | 0, t = t + e[i + 4] | 0, n = n + e[i + 5] | 0, s = s + e[i + 6] | 0, r = r + e[i + 7] | 0, t = t + e[i + 8] | 0, n = n + e[i + 9] | 0, s = s + e[i + 10] | 0, r = r + e[i + 11] | 0, t = t + e[i + 12] | 0, n = n + e[i + 13] | 0, s = s + e[i + 14] | 0, r = r + e[i + 15] | 0, i += 16, o -= 16;
  for (; o >= 4; )
    t = t + e[i + 0] | 0, n = n + e[i + 1] | 0, s = s + e[i + 2] | 0, r = r + e[i + 3] | 0, i += 4, o -= 4;
  switch (r = ((r + (s << 8) | 0) + (n << 16) | 0) + (t << 24) | 0, o) {
    //@ts-ignore fallthrough is needed.
    case 3:
      r = r + (e[i + 2] << 8) | 0;
    /* falls through */
    //@ts-ignore fallthrough is needed.
    case 2:
      r = r + (e[i + 1] << 16) | 0;
    /* falls through */
    case 1:
      r = r + (e[i + 0] << 24) | 0;
  }
  return r >>> 0;
}
function pg(e, t) {
  let n = 0;
  const s = new fg(t), r = e.length, i = t.length, o = s.getInt();
  if (s.getChar() !== `
`)
    throw new Error("size integer not terminated by '\\n'");
  const u = new dg();
  for (; s.haveBytes(); ) {
    const a = s.getInt();
    let c;
    switch (s.getChar()) {
      case "@":
        if (c = s.getInt(), s.haveBytes() && s.getChar() !== ",")
          throw new Error("copy command not terminated by ','");
        if (n += a, n > o)
          throw new Error("copy exceeds output file size");
        if (c + a > r)
          throw new Error("copy extends past end of input");
        u.putArray(e, c, c + a);
        break;
      case ":":
        if (n += a, n > o)
          throw new Error("insert command gives an output larger than predicted");
        if (a > i)
          throw new Error("insert count exceeds size of delta");
        u.putArray(s.a, s.pos, s.pos + a), s.pos += a;
        break;
      case ";": {
        const f = u.toByteArray(e);
        if (a !== hg(f))
          throw new Error("bad checksum");
        if (n !== o)
          throw new Error("generated size does not match predicted size");
        return f;
      }
      default:
        throw new Error("unknown delta operator");
    }
  }
  throw new Error("unterminated delta");
}
class Fu {
  name() {
    return "json";
  }
  encodeCommands(t) {
    return t.map((n) => JSON.stringify(n)).join(`
`);
  }
  decodeReplies(t) {
    return t.trim().split(`
`).map((n) => JSON.parse(n));
  }
  applyDeltaIfNeeded(t, n) {
    let s, r;
    if (t.delta) {
      const i = pg(n, new TextEncoder().encode(t.data));
      s = JSON.parse(new TextDecoder().decode(i)), r = i;
    } else
      s = JSON.parse(t.data), r = new TextEncoder().encode(t.data);
    return { newData: s, newPrevValue: r };
  }
}
const _g = {
  headers: {},
  token: "",
  getToken: null,
  data: null,
  getData: null,
  debug: !1,
  name: "js",
  version: "",
  fetch: null,
  readableStream: null,
  websocket: null,
  eventsource: null,
  sockjs: null,
  sockjsOptions: {},
  emulationEndpoint: "/emulation",
  minReconnectDelay: 500,
  maxReconnectDelay: 2e4,
  timeout: 5e3,
  maxServerPingDelay: 1e4,
  networkEventTarget: null
};
class bt extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name;
  }
}
class lr extends tc {
  /** Constructs Centrifuge client. Call connect() method to start connecting. */
  constructor(t, n) {
    super(), this._reconnectTimeout = null, this._refreshTimeout = null, this._serverPingTimeout = null, this.state = pe.Disconnected, this._transportIsOpen = !1, this._endpoint = t, this._emulation = !1, this._transports = [], this._currentTransportIndex = 0, this._triedAllTransports = !1, this._transportWasOpen = !1, this._transport = null, this._transportId = 0, this._deviceWentOffline = !1, this._transportClosed = !0, this._codec = new Fu(), this._reconnecting = !1, this._reconnectTimeout = null, this._reconnectAttempts = 0, this._client = null, this._session = "", this._node = "", this._subs = {}, this._serverSubs = {}, this._commandId = 0, this._commands = [], this._batching = !1, this._refreshRequired = !1, this._refreshTimeout = null, this._callbacks = {}, this._token = "", this._data = null, this._dispatchPromise = Promise.resolve(), this._serverPing = 0, this._serverPingTimeout = null, this._sendPong = !1, this._promises = {}, this._promiseId = 0, this._debugEnabled = !1, this._networkEventsSet = !1, this._config = Object.assign(Object.assign({}, _g), n), this._configure(), this._debugEnabled ? (this.on("state", (s) => {
      this._debug("client state", s.oldState, "->", s.newState);
    }), this.on("error", (s) => {
      this._debug("client error", s);
    })) : this.on("error", function() {
      Function.prototype();
    });
  }
  /** newSubscription allocates new Subscription to a channel. Since server only allows
   * one subscription per channel per client this method throws if client already has
   * channel subscription in internal registry.
   * */
  newSubscription(t, n) {
    if (this.getSubscription(t) !== null)
      throw new Error("Subscription to the channel " + t + " already exists");
    const s = new ig(this, t, n);
    return this._subs[t] = s, s;
  }
  /** getSubscription returns Subscription if it's registered in the internal
   * registry or null. */
  getSubscription(t) {
    return this._getSub(t);
  }
  /** removeSubscription allows removing Subcription from the internal registry. Subscrption
   * must be in unsubscribed state. */
  removeSubscription(t) {
    t && (t.state !== Re.Unsubscribed && t.unsubscribe(), this._removeSubscription(t));
  }
  /** Get a map with all current client-side subscriptions. */
  subscriptions() {
    return this._subs;
  }
  /** ready returns a Promise which resolves upon client goes to Connected
   * state and rejects in case of client goes to Disconnected or Failed state.
   * Users can provide optional timeout in milliseconds. */
  ready(t) {
    return this.state === pe.Disconnected ? Promise.reject({ code: le.clientDisconnected, message: "client disconnected" }) : this.state === pe.Connected ? Promise.resolve() : new Promise((n, s) => {
      const r = {
        resolve: n,
        reject: s
      };
      t && (r.timeout = setTimeout(function() {
        s({ code: le.timeout, message: "timeout" });
      }, t)), this._promises[this._nextPromiseId()] = r;
    });
  }
  /** connect to a server. */
  connect() {
    if (this._isConnected()) {
      this._debug("connect called when already connected");
      return;
    }
    if (this._isConnecting()) {
      this._debug("connect called when already connecting");
      return;
    }
    this._debug("connect called"), this._reconnectAttempts = 0, this._startConnecting();
  }
  /** disconnect from a server. */
  disconnect() {
    this._disconnect(Bn.disconnectCalled, "disconnect called", !1);
  }
  /** setToken allows setting connection token. Or resetting used token to be empty.  */
  setToken(t) {
    this._token = t;
  }
  /** setHeaders allows setting connection emulated headers. */
  setHeaders(t) {
    this._config.headers = t;
  }
  /** send asynchronous data to a server (without any response from a server
   * expected, see rpc method if you need response). */
  send(t) {
    const n = {
      send: {
        data: t
      }
    }, s = this;
    return this._methodCall().then(function() {
      return s._transportSendCommands([n]) ? Promise.resolve() : Promise.reject(s._createErrorObject(le.transportWriteError, "transport write error"));
    });
  }
  /** rpc to a server - i.e. a call which waits for a response with data. */
  rpc(t, n) {
    const s = {
      rpc: {
        method: t,
        data: n
      }
    }, r = this;
    return this._methodCall().then(function() {
      return r._callPromise(s, function(i) {
        return {
          data: i.rpc.data
        };
      });
    });
  }
  /** publish data to a channel. */
  publish(t, n) {
    const s = {
      publish: {
        channel: t,
        data: n
      }
    }, r = this;
    return this._methodCall().then(function() {
      return r._callPromise(s, function() {
        return {};
      });
    });
  }
  /** history for a channel. By default it does not return publications (only current
   *  StreamPosition data) – provide an explicit limit > 0 to load publications.*/
  history(t, n) {
    const s = {
      history: this._getHistoryRequest(t, n)
    }, r = this;
    return this._methodCall().then(function() {
      return r._callPromise(s, function(i) {
        const o = i.history, u = [];
        if (o.publications)
          for (let a = 0; a < o.publications.length; a++)
            u.push(r._getPublicationContext(t, o.publications[a]));
        return {
          publications: u,
          epoch: o.epoch || "",
          offset: o.offset || 0
        };
      });
    });
  }
  /** presence for a channel. */
  presence(t) {
    const n = {
      presence: {
        channel: t
      }
    }, s = this;
    return this._methodCall().then(function() {
      return s._callPromise(n, function(r) {
        const i = r.presence.presence;
        for (const o in i)
          if (i.hasOwnProperty(o)) {
            const u = i[o].conn_info, a = i[o].chan_info;
            u && (i[o].connInfo = u), a && (i[o].chanInfo = a);
          }
        return {
          clients: i
        };
      });
    });
  }
  /** presence stats for a channel. */
  presenceStats(t) {
    const n = {
      presence_stats: {
        channel: t
      }
    }, s = this;
    return this._methodCall().then(function() {
      return s._callPromise(n, function(r) {
        const i = r.presence_stats;
        return {
          numUsers: i.num_users,
          numClients: i.num_clients
        };
      });
    });
  }
  /** start command batching (collect into temporary buffer without sending to a server)
   * until stopBatching called.*/
  startBatching() {
    this._batching = !0;
  }
  /** stop batching commands and flush collected commands to the
   * network (all in one request/frame).*/
  stopBatching() {
    const t = this;
    Promise.resolve().then(function() {
      Promise.resolve().then(function() {
        t._batching = !1, t._flush();
      });
    });
  }
  _debug(...t) {
    this._debugEnabled && ng("debug", t);
  }
  /** @internal */
  _formatOverride() {
  }
  _configure() {
    if (!("Promise" in globalThis))
      throw new Error("Promise polyfill required");
    if (!this._endpoint)
      throw new Error("endpoint configuration required");
    if (this._config.token !== null && (this._token = this._config.token), this._config.data !== null && (this._data = this._config.data), this._codec = new Fu(), this._formatOverride(), (this._config.debug === !0 || typeof localStorage < "u" && localStorage.getItem("centrifuge.debug")) && (this._debugEnabled = !0), this._debug("config", this._config), typeof this._endpoint != "string") if (typeof this._endpoint == "object" && this._endpoint instanceof Array) {
      this._transports = this._endpoint, this._emulation = !0;
      for (const t in this._transports)
        if (this._transports.hasOwnProperty(t)) {
          const n = this._transports[t];
          if (!n.endpoint || !n.transport)
            throw new Error("malformed transport configuration");
          const s = n.transport;
          if (["websocket", "http_stream", "sse", "sockjs", "webtransport"].indexOf(s) < 0)
            throw new Error("unsupported transport name: " + s);
        }
    } else
      throw new Error("unsupported url configuration type: only string or array of objects are supported");
  }
  _setState(t) {
    if (this.state !== t) {
      this._reconnecting = !1;
      const n = this.state;
      return this.state = t, this.emit("state", { newState: t, oldState: n }), !0;
    }
    return !1;
  }
  _isDisconnected() {
    return this.state === pe.Disconnected;
  }
  _isConnecting() {
    return this.state === pe.Connecting;
  }
  _isConnected() {
    return this.state === pe.Connected;
  }
  _nextCommandId() {
    return ++this._commandId;
  }
  _setNetworkEvents() {
    if (this._networkEventsSet)
      return;
    let t = null;
    this._config.networkEventTarget !== null ? t = this._config.networkEventTarget : typeof globalThis.addEventListener < "u" && (t = globalThis), t && (t.addEventListener("offline", () => {
      this._debug("offline event triggered"), (this.state === pe.Connected || this.state === pe.Connecting) && (this._disconnect(xt.transportClosed, "transport closed", !0), this._deviceWentOffline = !0);
    }), t.addEventListener("online", () => {
      this._debug("online event triggered"), this.state === pe.Connecting && (this._deviceWentOffline && !this._transportClosed && (this._deviceWentOffline = !1, this._transportClosed = !0), this._clearReconnectTimeout(), this._startReconnecting());
    }), this._networkEventsSet = !0);
  }
  _getReconnectDelay() {
    const t = Hs(this._reconnectAttempts, this._config.minReconnectDelay, this._config.maxReconnectDelay);
    return this._reconnectAttempts += 1, t;
  }
  _clearOutgoingRequests() {
    for (const t in this._callbacks)
      if (this._callbacks.hasOwnProperty(t)) {
        const n = this._callbacks[t];
        clearTimeout(n.timeout);
        const s = n.errback;
        if (!s)
          continue;
        s({ error: this._createErrorObject(le.connectionClosed, "connection closed") });
      }
    this._callbacks = {};
  }
  _clearConnectedState() {
    this._client = null, this._clearServerPingTimeout(), this._clearRefreshTimeout();
    for (const t in this._subs) {
      if (!this._subs.hasOwnProperty(t))
        continue;
      const n = this._subs[t];
      n.state === Re.Subscribed && n._setSubscribing(js.transportClosed, "transport closed");
    }
    for (const t in this._serverSubs)
      this._serverSubs.hasOwnProperty(t) && this.emit("subscribing", { channel: t });
  }
  _handleWriteError(t) {
    for (const n of t) {
      const s = n.id;
      if (!(s in this._callbacks))
        continue;
      const r = this._callbacks[s];
      clearTimeout(this._callbacks[s].timeout), delete this._callbacks[s];
      const i = r.errback;
      i({ error: this._createErrorObject(le.transportWriteError, "transport write error") });
    }
  }
  _transportSendCommands(t) {
    if (!t.length)
      return !0;
    if (!this._transport)
      return !1;
    try {
      this._transport.send(this._codec.encodeCommands(t), this._session, this._node);
    } catch (n) {
      return this._debug("error writing commands", n), this._handleWriteError(t), !1;
    }
    return !0;
  }
  _initializeTransport() {
    let t;
    this._config.websocket !== null ? t = this._config.websocket : typeof globalThis.WebSocket != "function" && typeof globalThis.WebSocket != "object" || (t = globalThis.WebSocket);
    let n = null;
    this._config.sockjs !== null ? n = this._config.sockjs : typeof globalThis.SockJS < "u" && (n = globalThis.SockJS);
    let s = null;
    this._config.eventsource !== null ? s = this._config.eventsource : typeof globalThis.EventSource < "u" && (s = globalThis.EventSource);
    let r = null;
    this._config.fetch !== null ? r = this._config.fetch : typeof globalThis.fetch < "u" && (r = globalThis.fetch);
    let i = null;
    if (this._config.readableStream !== null ? i = this._config.readableStream : typeof globalThis.ReadableStream < "u" && (i = globalThis.ReadableStream), this._emulation) {
      this._currentTransportIndex >= this._transports.length && (this._triedAllTransports = !0, this._currentTransportIndex = 0);
      let p = 0;
      for (; ; ) {
        if (p >= this._transports.length)
          throw new Error("no supported transport found");
        const g = this._transports[this._currentTransportIndex], b = g.transport, E = g.endpoint;
        if (b === "websocket") {
          if (this._debug("trying websocket transport"), this._transport = new Nu(E, {
            websocket: t
          }), !this._transport.supported()) {
            this._debug("websocket transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else if (b === "webtransport") {
          if (this._debug("trying webtransport transport"), this._transport = new lg(E, {
            webtransport: globalThis.WebTransport,
            decoder: this._codec,
            encoder: this._codec
          }), !this._transport.supported()) {
            this._debug("webtransport transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else if (b === "http_stream") {
          if (this._debug("trying http_stream transport"), this._transport = new ug(E, {
            fetch: r,
            readableStream: i,
            emulationEndpoint: this._config.emulationEndpoint,
            decoder: this._codec,
            encoder: this._codec
          }), !this._transport.supported()) {
            this._debug("http_stream transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else if (b === "sse") {
          if (this._debug("trying sse transport"), this._transport = new ag(E, {
            eventsource: s,
            fetch: r,
            emulationEndpoint: this._config.emulationEndpoint
          }), !this._transport.supported()) {
            this._debug("sse transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else if (b === "sockjs") {
          if (this._debug("trying sockjs"), this._transport = new og(E, {
            sockjs: n,
            sockjsOptions: this._config.sockjsOptions
          }), !this._transport.supported()) {
            this._debug("sockjs transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else
          throw new Error("unknown transport " + b);
        break;
      }
    } else {
      if (tg(this._endpoint, "http"))
        throw new Error("Provide explicit transport endpoints configuration in case of using HTTP (i.e. using array of TransportEndpoint instead of a single string), or use ws(s):// scheme in an endpoint if you aimed using WebSocket transport");
      if (this._debug("client will use websocket"), this._transport = new Nu(this._endpoint, {
        websocket: t
      }), !this._transport.supported())
        throw new Error("WebSocket constructor not found, make sure it is available globally or passed as a dependency in Centrifuge options");
    }
    const o = this, u = this._transport, a = this._nextTransportId();
    o._debug("id of transport", a);
    let c = !1;
    const f = [];
    if (this._transport.emulation()) {
      const p = o._sendConnect(!0);
      f.push(p);
    }
    this._setNetworkEvents();
    const l = this._codec.encodeCommands(f);
    this._transportClosed = !1;
    let _;
    _ = setTimeout(function() {
      u.close();
    }, this._config.timeout), this._transport.initialize(this._codec.name(), {
      onOpen: function() {
        if (_ && (clearTimeout(_), _ = null), o._transportId != a) {
          o._debug("open callback from non-actual transport"), u.close();
          return;
        }
        c = !0, o._debug(u.subName(), "transport open"), !u.emulation() && (o._transportIsOpen = !0, o._transportWasOpen = !0, o.startBatching(), o._sendConnect(!1), o._sendSubscribeCommands(), o.stopBatching(), o.emit("__centrifuge_debug:connect_frame_sent", {}));
      },
      onError: function(p) {
        if (o._transportId != a) {
          o._debug("error callback from non-actual transport");
          return;
        }
        o._debug("transport level error", p);
      },
      onClose: function(p) {
        if (_ && (clearTimeout(_), _ = null), o._transportId != a) {
          o._debug("close callback from non-actual transport");
          return;
        }
        o._debug(u.subName(), "transport closed"), o._transportClosed = !0, o._transportIsOpen = !1;
        let g = "connection closed", b = !0, E = 0;
        if (p && "code" in p && p.code && (E = p.code), p && p.reason)
          try {
            const O = JSON.parse(p.reason);
            g = O.reason, b = O.reconnect;
          } catch {
            g = p.reason, (E >= 3500 && E < 4e3 || E >= 4500 && E < 5e3) && (b = !1);
          }
        E < 3e3 ? (E === 1009 ? (E = Bn.messageSizeLimit, g = "message size limit exceeded", b = !1) : (E = xt.transportClosed, g = "transport closed"), o._emulation && !o._transportWasOpen && (o._currentTransportIndex++, o._currentTransportIndex >= o._transports.length && (o._triedAllTransports = !0, o._currentTransportIndex = 0))) : o._transportWasOpen = !0, o._isConnecting() && !c && o.emit("error", {
          type: "transport",
          error: {
            code: le.transportClosed,
            message: "transport closed"
          },
          transport: u.name()
        }), o._reconnecting = !1, o._disconnect(E, g, b);
      },
      onMessage: function(p) {
        o._dataReceived(p);
      }
    }, l), o.emit("__centrifuge_debug:transport_initialized", {});
  }
  _sendConnect(t) {
    const n = this._constructConnectCommand(), s = this;
    return this._call(n, t).then((r) => {
      const i = r.reply.connect;
      s._connectResponse(i), r.next && r.next();
    }, (r) => {
      s._connectError(r.error), r.next && r.next();
    }), n;
  }
  _startReconnecting() {
    if (this._debug("start reconnecting"), !this._isConnecting()) {
      this._debug("stop reconnecting: client not in connecting state");
      return;
    }
    if (this._reconnecting) {
      this._debug("reconnect already in progress, return from reconnect routine");
      return;
    }
    if (this._transportClosed === !1) {
      this._debug("waiting for transport close");
      return;
    }
    this._reconnecting = !0;
    const t = this._token === "";
    if (!(this._refreshRequired || t && this._config.getToken !== null)) {
      this._config.getData ? this._config.getData().then((r) => {
        this._isConnecting() && (this._data = r, this._initializeTransport());
      }).catch((r) => this._handleGetDataError(r)) : this._initializeTransport();
      return;
    }
    const s = this;
    this._getToken().then(function(r) {
      if (s._isConnecting()) {
        if (r == null || r == null) {
          s._failUnauthorized();
          return;
        }
        s._token = r, s._debug("connection token refreshed"), s._config.getData ? s._config.getData().then(function(i) {
          s._isConnecting() && (s._data = i, s._initializeTransport());
        }).catch((i) => s._handleGetDataError(i)) : s._initializeTransport();
      }
    }).catch(function(r) {
      if (!s._isConnecting())
        return;
      if (r instanceof bt) {
        s._failUnauthorized();
        return;
      }
      s.emit("error", {
        type: "connectToken",
        error: {
          code: le.clientConnectToken,
          message: r !== void 0 ? r.toString() : ""
        }
      });
      const i = s._getReconnectDelay();
      s._debug("error on getting connection token, reconnect after " + i + " milliseconds", r), s._reconnecting = !1, s._reconnectTimeout = setTimeout(() => {
        s._startReconnecting();
      }, i);
    });
  }
  _handleGetDataError(t) {
    if (t instanceof bt) {
      this._failUnauthorized();
      return;
    }
    this.emit("error", {
      type: "connectData",
      error: {
        code: le.badConfiguration,
        message: (t == null ? void 0 : t.toString()) || ""
      }
    });
    const n = this._getReconnectDelay();
    this._debug("error on getting connect data, reconnect after " + n + " milliseconds", t), this._reconnecting = !1, this._reconnectTimeout = setTimeout(() => {
      this._startReconnecting();
    }, n);
  }
  _connectError(t) {
    this.state === pe.Connecting && (t.code === 109 && (this._refreshRequired = !0), t.code < 100 || t.temporary === !0 || t.code === 109 ? (this.emit("error", {
      type: "connect",
      error: t
    }), this._debug("closing transport due to connect error"), this._disconnect(t.code, t.message, !0)) : this._disconnect(t.code, t.message, !1));
  }
  _scheduleReconnect() {
    if (!this._isConnecting())
      return;
    let t = !1;
    this._emulation && !this._transportWasOpen && !this._triedAllTransports && (t = !0);
    let n = this._getReconnectDelay();
    t && (n = 0), this._debug("reconnect after " + n + " milliseconds"), this._clearReconnectTimeout(), this._reconnectTimeout = setTimeout(() => {
      this._startReconnecting();
    }, n);
  }
  _constructConnectCommand() {
    const t = {};
    this._token && (t.token = this._token), this._data && (t.data = this._data), this._config.name && (t.name = this._config.name), this._config.version && (t.version = this._config.version), Object.keys(this._config.headers).length > 0 && (t.headers = this._config.headers);
    const n = {};
    let s = !1;
    for (const r in this._serverSubs)
      if (this._serverSubs.hasOwnProperty(r) && this._serverSubs[r].recoverable) {
        s = !0;
        const i = {
          recover: !0
        };
        this._serverSubs[r].offset && (i.offset = this._serverSubs[r].offset), this._serverSubs[r].epoch && (i.epoch = this._serverSubs[r].epoch), n[r] = i;
      }
    return s && (t.subs = n), {
      connect: t
    };
  }
  _getHistoryRequest(t, n) {
    const s = {
      channel: t
    };
    return n !== void 0 && (n.since && (s.since = {
      offset: n.since.offset
    }, n.since.epoch && (s.since.epoch = n.since.epoch)), n.limit !== void 0 && (s.limit = n.limit), n.reverse === !0 && (s.reverse = !0)), s;
  }
  _methodCall() {
    return this._isConnected() ? Promise.resolve() : new Promise((t, n) => {
      const s = setTimeout(function() {
        n({ code: le.timeout, message: "timeout" });
      }, this._config.timeout);
      this._promises[this._nextPromiseId()] = {
        timeout: s,
        resolve: t,
        reject: n
      };
    });
  }
  _callPromise(t, n) {
    return new Promise((s, r) => {
      this._call(t, !1).then((i) => {
        s(n(i.reply)), i.next && i.next();
      }, (i) => {
        r(i.error), i.next && i.next();
      });
    });
  }
  _dataReceived(t) {
    this._serverPing > 0 && this._waitServerPing();
    const n = this._codec.decodeReplies(t);
    this._dispatchPromise = this._dispatchPromise.then(() => {
      let s;
      this._dispatchPromise = new Promise((r) => {
        s = r;
      }), this._dispatchSynchronized(n, s);
    });
  }
  _dispatchSynchronized(t, n) {
    let s = Promise.resolve();
    for (const r in t)
      t.hasOwnProperty(r) && (s = s.then(() => this._dispatchReply(t[r])));
    s = s.then(() => {
      n();
    });
  }
  _dispatchReply(t) {
    let n;
    const s = new Promise((i) => {
      n = i;
    });
    if (t == null)
      return this._debug("dispatch: got undefined or null reply"), n(), s;
    const r = t.id;
    return r && r > 0 ? this._handleReply(t, n) : t.push ? this._handlePush(t.push, n) : this._handleServerPing(n), s;
  }
  _call(t, n) {
    return new Promise((s, r) => {
      t.id = this._nextCommandId(), this._registerCall(t.id, s, r), n || this._addCommand(t);
    });
  }
  _startConnecting() {
    this._debug("start connecting"), this._setState(pe.Connecting) && this.emit("connecting", { code: xt.connectCalled, reason: "connect called" }), this._client = null, this._startReconnecting();
  }
  _disconnect(t, n, s) {
    if (this._isDisconnected())
      return;
    this._transportIsOpen = !1;
    const r = this.state;
    this._reconnecting = !1;
    const i = {
      code: t,
      reason: n
    };
    let o = !1;
    if (s ? o = this._setState(pe.Connecting) : (o = this._setState(pe.Disconnected), this._rejectPromises({ code: le.clientDisconnected, message: "disconnected" })), this._clearOutgoingRequests(), r === pe.Connecting && this._clearReconnectTimeout(), r === pe.Connected && this._clearConnectedState(), o && (this._isConnecting() ? this.emit("connecting", i) : this.emit("disconnected", i)), this._transport) {
      this._debug("closing existing transport");
      const u = this._transport;
      this._transport = null, u.close(), this._transportClosed = !0, this._nextTransportId();
    } else
      this._debug("no transport to close");
    this._scheduleReconnect();
  }
  _failUnauthorized() {
    this._disconnect(Bn.unauthorized, "unauthorized", !1);
  }
  _getToken() {
    if (this._debug("get connection token"), !this._config.getToken)
      throw this.emit("error", {
        type: "configuration",
        error: {
          code: le.badConfiguration,
          message: "token expired but no getToken function set in the configuration"
        }
      }), new bt("");
    return this._config.getToken({});
  }
  _refresh() {
    const t = this._client, n = this;
    this._getToken().then(function(s) {
      if (t !== n._client)
        return;
      if (!s) {
        n._failUnauthorized();
        return;
      }
      if (n._token = s, n._debug("connection token refreshed"), !n._isConnected())
        return;
      const r = {
        refresh: { token: n._token }
      };
      n._call(r, !1).then((i) => {
        const o = i.reply.refresh;
        n._refreshResponse(o), i.next && i.next();
      }, (i) => {
        n._refreshError(i.error), i.next && i.next();
      });
    }).catch(function(s) {
      if (n._isConnected()) {
        if (s instanceof bt) {
          n._failUnauthorized();
          return;
        }
        n.emit("error", {
          type: "refreshToken",
          error: {
            code: le.clientRefreshToken,
            message: s !== void 0 ? s.toString() : ""
          }
        }), n._refreshTimeout = setTimeout(() => n._refresh(), n._getRefreshRetryDelay());
      }
    });
  }
  _refreshError(t) {
    t.code < 100 || t.temporary === !0 ? (this.emit("error", {
      type: "refresh",
      error: t
    }), this._refreshTimeout = setTimeout(() => this._refresh(), this._getRefreshRetryDelay())) : this._disconnect(t.code, t.message, !1);
  }
  _getRefreshRetryDelay() {
    return Hs(0, 5e3, 1e4);
  }
  _refreshResponse(t) {
    this._refreshTimeout && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null), t.expires && (this._client = t.client, this._refreshTimeout = setTimeout(() => this._refresh(), Ks(t.ttl)));
  }
  _removeSubscription(t) {
    t !== null && delete this._subs[t.channel];
  }
  _unsubscribe(t) {
    if (!this._transportIsOpen)
      return Promise.resolve();
    const s = { unsubscribe: {
      channel: t.channel
    } }, r = this;
    return new Promise((o, u) => {
      this._call(s, !1).then((a) => {
        o(), a.next && a.next();
      }, (a) => {
        o(), a.next && a.next(), r._disconnect(xt.unsubscribeError, "unsubscribe error", !0);
      });
    });
  }
  _getSub(t) {
    const n = this._subs[t];
    return n || null;
  }
  _isServerSub(t) {
    return this._serverSubs[t] !== void 0;
  }
  _sendSubscribeCommands() {
    const t = [];
    for (const n in this._subs) {
      if (!this._subs.hasOwnProperty(n))
        continue;
      const s = this._subs[n];
      if (s._inflight !== !0 && s.state === Re.Subscribing) {
        const r = s._subscribe();
        r && t.push(r);
      }
    }
    return t;
  }
  _connectResponse(t) {
    if (this._transportIsOpen = !0, this._transportWasOpen = !0, this._reconnectAttempts = 0, this._refreshRequired = !1, this._isConnected())
      return;
    this._client = t.client, this._setState(pe.Connected), this._refreshTimeout && clearTimeout(this._refreshTimeout), t.expires && (this._refreshTimeout = setTimeout(() => this._refresh(), Ks(t.ttl))), this._session = t.session, this._node = t.node, this.startBatching(), this._sendSubscribeCommands(), this.stopBatching();
    const n = {
      client: t.client,
      transport: this._transport.subName()
    };
    t.data && (n.data = t.data), this.emit("connected", n), this._resolvePromises(), this._processServerSubs(t.subs || {}), t.ping && t.ping > 0 ? (this._serverPing = t.ping * 1e3, this._sendPong = t.pong === !0, this._waitServerPing()) : this._serverPing = 0;
  }
  _processServerSubs(t) {
    for (const n in t) {
      if (!t.hasOwnProperty(n))
        continue;
      const s = t[n];
      this._serverSubs[n] = {
        offset: s.offset,
        epoch: s.epoch,
        recoverable: s.recoverable || !1
      };
      const r = this._getSubscribeContext(n, s);
      this.emit("subscribed", r);
    }
    for (const n in t) {
      if (!t.hasOwnProperty(n))
        continue;
      const s = t[n];
      if (s.recovered) {
        const r = s.publications;
        if (r && r.length > 0)
          for (const i in r)
            r.hasOwnProperty(i) && this._handlePublication(n, r[i]);
      }
    }
    for (const n in this._serverSubs)
      this._serverSubs.hasOwnProperty(n) && (t[n] || (this.emit("unsubscribed", { channel: n }), delete this._serverSubs[n]));
  }
  _clearRefreshTimeout() {
    this._refreshTimeout !== null && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null);
  }
  _clearReconnectTimeout() {
    this._reconnectTimeout !== null && (clearTimeout(this._reconnectTimeout), this._reconnectTimeout = null);
  }
  _clearServerPingTimeout() {
    this._serverPingTimeout !== null && (clearTimeout(this._serverPingTimeout), this._serverPingTimeout = null);
  }
  _waitServerPing() {
    this._config.maxServerPingDelay !== 0 && this._isConnected() && (this._clearServerPingTimeout(), this._serverPingTimeout = setTimeout(() => {
      this._isConnected() && this._disconnect(xt.noPing, "no ping", !0);
    }, this._serverPing + this._config.maxServerPingDelay));
  }
  _getSubscribeContext(t, n) {
    const s = {
      channel: t,
      positioned: !1,
      recoverable: !1,
      wasRecovering: !1,
      recovered: !1
    };
    n.recovered && (s.recovered = !0), n.positioned && (s.positioned = !0), n.recoverable && (s.recoverable = !0), n.was_recovering && (s.wasRecovering = !0);
    let r = "";
    "epoch" in n && (r = n.epoch);
    let i = 0;
    return "offset" in n && (i = n.offset), (s.positioned || s.recoverable) && (s.streamPosition = {
      offset: i,
      epoch: r
    }), n.data && (s.data = n.data), s;
  }
  _handleReply(t, n) {
    const s = t.id;
    if (!(s in this._callbacks)) {
      n();
      return;
    }
    const r = this._callbacks[s];
    if (clearTimeout(this._callbacks[s].timeout), delete this._callbacks[s], rg(t)) {
      const i = r.errback;
      if (!i) {
        n();
        return;
      }
      const o = t.error;
      i({ error: o, next: n });
    } else {
      const i = r.callback;
      if (!i)
        return;
      i({ reply: t, next: n });
    }
  }
  _handleJoin(t, n) {
    const s = this._getSub(t);
    if (!s) {
      if (this._isServerSub(t)) {
        const r = { channel: t, info: this._getJoinLeaveContext(n.info) };
        this.emit("join", r);
      }
      return;
    }
    s._handleJoin(n);
  }
  _handleLeave(t, n) {
    const s = this._getSub(t);
    if (!s) {
      if (this._isServerSub(t)) {
        const r = { channel: t, info: this._getJoinLeaveContext(n.info) };
        this.emit("leave", r);
      }
      return;
    }
    s._handleLeave(n);
  }
  _handleUnsubscribe(t, n) {
    const s = this._getSub(t);
    if (!s) {
      this._isServerSub(t) && (delete this._serverSubs[t], this.emit("unsubscribed", { channel: t }));
      return;
    }
    n.code < 2500 ? s._setUnsubscribed(n.code, n.reason, !1) : s._setSubscribing(n.code, n.reason);
  }
  _handleSubscribe(t, n) {
    this._serverSubs[t] = {
      offset: n.offset,
      epoch: n.epoch,
      recoverable: n.recoverable || !1
    }, this.emit("subscribed", this._getSubscribeContext(t, n));
  }
  _handleDisconnect(t) {
    const n = t.code;
    let s = !0;
    (n >= 3500 && n < 4e3 || n >= 4500 && n < 5e3) && (s = !1), this._disconnect(n, t.reason, s);
  }
  _getPublicationContext(t, n) {
    const s = {
      channel: t,
      data: n.data
    };
    return n.offset && (s.offset = n.offset), n.info && (s.info = this._getJoinLeaveContext(n.info)), n.tags && (s.tags = n.tags), s;
  }
  _getJoinLeaveContext(t) {
    const n = {
      client: t.client,
      user: t.user
    };
    return t.conn_info && (n.connInfo = t.conn_info), t.chan_info && (n.chanInfo = t.chan_info), n;
  }
  _handlePublication(t, n) {
    const s = this._getSub(t);
    if (!s) {
      if (this._isServerSub(t)) {
        const r = this._getPublicationContext(t, n);
        this.emit("publication", r), n.offset !== void 0 && (this._serverSubs[t].offset = n.offset);
      }
      return;
    }
    s._handlePublication(n);
  }
  _handleMessage(t) {
    this.emit("message", { data: t.data });
  }
  _handleServerPing(t) {
    if (this._sendPong) {
      const n = {};
      this._transportSendCommands([n]);
    }
    t();
  }
  _handlePush(t, n) {
    const s = t.channel;
    t.pub ? this._handlePublication(s, t.pub) : t.message ? this._handleMessage(t.message) : t.join ? this._handleJoin(s, t.join) : t.leave ? this._handleLeave(s, t.leave) : t.unsubscribe ? this._handleUnsubscribe(s, t.unsubscribe) : t.subscribe ? this._handleSubscribe(s, t.subscribe) : t.disconnect && this._handleDisconnect(t.disconnect), n();
  }
  _flush() {
    const t = this._commands.slice(0);
    this._commands = [], this._transportSendCommands(t);
  }
  _createErrorObject(t, n, s) {
    const r = {
      code: t,
      message: n
    };
    return s && (r.temporary = !0), r;
  }
  _registerCall(t, n, s) {
    this._callbacks[t] = {
      callback: n,
      errback: s,
      timeout: null
    }, this._callbacks[t].timeout = setTimeout(() => {
      delete this._callbacks[t], nc(s) && s({ error: this._createErrorObject(le.timeout, "timeout") });
    }, this._config.timeout);
  }
  _addCommand(t) {
    this._batching ? this._commands.push(t) : this._transportSendCommands([t]);
  }
  _nextPromiseId() {
    return ++this._promiseId;
  }
  _nextTransportId() {
    return ++this._transportId;
  }
  _resolvePromises() {
    for (const t in this._promises)
      this._promises.hasOwnProperty(t) && (this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].resolve(), delete this._promises[t]);
  }
  _rejectPromises(t) {
    for (const n in this._promises)
      this._promises.hasOwnProperty(n) && (this._promises[n].timeout && clearTimeout(this._promises[n].timeout), this._promises[n].reject(t), delete this._promises[n]);
  }
}
lr.SubscriptionState = Re;
lr.State = pe;
lr.UnauthorizedError = bt;
const zs = {
  MESSAGE: "message",
  SYSTEM: "system",
  FORM: "form",
  DATE: "date"
}, sc = {
  INCOMING: "incoming",
  OUTGOING: "outgoing"
}, jt = {
  SENT: "sent",
  SENDING: "sending",
  WAITING: "waiting",
  FAILED: "failed"
}, gg = (e) => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (t) => (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16)
), mg = () => new Intl.DateTimeFormat("sv-SE", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: !1
}).format(/* @__PURE__ */ new Date()).replace(",", " "), bg = (e) => ({
  text: e,
  clientId: gg(),
  type: zs.MESSAGE,
  status: jt.SENDING,
  direction: sc.OUTGOING,
  datetime: mg()
});
let ps = null;
const cr = /* @__PURE__ */ Li("connection", () => {
  const e = Ne(!1), t = Ne(null), n = Ne(null), s = Ne(null);
  async function r(c = {}) {
    let f = {
      socketUrl: null,
      sendUrl: null,
      channel: null,
      token: null,
      getToken: null,
      ...c
    };
    if ((f.channel || "").toString().length === 0)
      return;
    const l = {
      ...f.token && { token: f.token },
      ...f.getToken && { getToken: f.getToken }
    };
    s.value = f.sendUrl, t.value = new lr(f.socketUrl, l), t.value.on("connecting", () => e.value = !1), t.value.on("connected", () => {
      console.log("connected"), e.value = !0;
    }), t.value.on("disconnected", () => {
      console.log("disconnected"), e.value = !1;
    }), t.value.on("state", (_) => {
      console.log("[state]", _);
    }), t.value.connect(), it().isLoading = !1, ps = f.channel, console.log("subscribedChannel", ps), it().isLoading = !1, n.value = t.value.newSubscription(ps), n.value.on("publication", (_) => {
      console.log("publication", _);
    });
  }
  function i(c) {
    it().add(c), setTimeout(() => {
      c.status === jt.SENDING && (c.status = jt.WAITING, it().add(c));
    }, 2e3), fetch(s.value, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        clientId: c.clientId,
        datetime: (/* @__PURE__ */ new Date()).toISOString(),
        channel: ps,
        text: c.text
      })
    }).then(async (f) => {
      const l = await f.json();
      if (!f.ok)
        throw new Error(l == null ? void 0 : l.message);
      c.status = jt.SENT, it().add(c);
    }).catch((f) => {
      c.status = jt.FAILED, it().add(c);
    });
  }
  function o(c) {
    const f = bg(c);
    i(f);
  }
  function u(c) {
    c.status = jt.SENDING, i(c);
  }
  function a() {
    t.value && t.value.disconnect(), e.value = !1;
  }
  return {
    isConnected: e,
    init: r,
    send: o,
    resend: u,
    disconnect: a
  };
}), Fi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, vg = {}, yg = { class: "chat__header" };
function Eg(e, t) {
  return fe(), Ee("div", yg, t[0] || (t[0] = [
    Cd('<div class="item"><div class="item__left"><div class="avatar"><span class="avatar__name"> AB </span><i class="icon-profile-agent"></i></div></div><div class="item__inner"><span class="item__heading"> Alex Burm </span><span class="item__text"> Customer support </span></div></div>', 1)
  ]));
}
const Sg = /* @__PURE__ */ Fi(vg, [["render", Eg]]), Tg = {
  computed: {
    USER_MESSAGE_DIRECTION() {
      return sc;
    },
    USER_MESSAGE_STATUSES() {
      return jt;
    },
    initials() {
      return this.item.name ? this.item.name.split(" ").map((e) => {
        var t;
        return (t = e[0]) == null ? void 0 : t.toUpperCase();
      }).join("") : "?";
    }
  },
  props: {
    item: {
      type: Object,
      required: !0
    },
    validator(e) {
      return typeof e.clientId == "string" && typeof e.serverId == "string" && typeof e.name == "string" && typeof e.text == "string" && typeof e.time == "string" && typeof e.direction == "string" && typeof e.status == "string" && typeof e.showAvatar == "boolean";
    }
  },
  methods: {
    resend() {
      cr().resend(this.item);
    }
  }
}, wg = { class: "item" }, Og = { class: "item__status" }, Cg = { class: "avatar" }, Ag = { class: "avatar__name" }, xg = {
  key: 0,
  class: "loader"
}, Ig = { class: "item__box" }, Pg = { class: "item__inner" }, kg = { class: "item__text" }, Rg = { class: "item__time" };
function Dg(e, t, n, s, r, i) {
  return fe(), Ee("li", {
    class: Hn(["message", i.USER_MESSAGE_DIRECTION.INCOMING === n.item.direction ? "" : "message--outgoing"])
  }, [
    ue("div", wg, [
      ue("div", Og, [
        ue("div", Cg, [
          n.item.showAvatar ? (fe(), Ee(Se, { key: 0 }, [
            ue("i", {
              class: Hn([i.USER_MESSAGE_DIRECTION.INCOMING === n.item.direction ? "icon-profile-customer" : "icon-profile-agent"])
            }, null, 2),
            ue("span", Ag, Dn(i.USER_MESSAGE_DIRECTION.OUTGOING === n.item.direction ? "ME" : i.initials), 1)
          ], 64)) : Bt("", !0)
        ]),
        i.USER_MESSAGE_STATUSES.WAITING === n.item.status ? (fe(), Ee("div", xg, t[1] || (t[1] = [
          ue("span", { class: "loader__circle" }, null, -1)
        ]))) : Bt("", !0),
        i.USER_MESSAGE_STATUSES.FAILED === n.item.status ? (fe(), Ee("a", {
          key: 1,
          href: "javascript:void(0)",
          class: "btn__primary",
          onClick: t[0] || (t[0] = fh((...o) => i.resend && i.resend(...o), ["prevent"]))
        }, t[2] || (t[2] = [
          ue("i", { class: "icon-send-again" }, null, -1)
        ]))) : Bt("", !0)
      ]),
      ue("div", Ig, [
        ue("div", Pg, [
          ue("span", kg, Dn(n.item.text), 1),
          ue("span", Rg, [
            n.item.status === i.USER_MESSAGE_STATUSES.WAITING ? (fe(), Ee(Se, { key: 0 }, [
              $n(" Sending... ")
            ], 64)) : (fe(), Ee(Se, { key: 1 }, [
              $n(Dn(n.item.time) + " ", 1),
              i.USER_MESSAGE_STATUSES.FAILED === n.item.status ? (fe(), Ee(Se, { key: 0 }, [
                t[3] || (t[3] = $n(" • ")),
                t[4] || (t[4] = ue("span", { class: "item__send-failed" }, "Failed to send", -1))
              ], 64)) : Bt("", !0)
            ], 64))
          ])
        ])
      ])
    ])
  ], 2);
}
const Lg = /* @__PURE__ */ Fi(Tg, [["render", Dg]]), Ng = { class: "system" }, Fg = {
  __name: "SystemMessage",
  props: {
    item: Object
  },
  setup(e) {
    return (t, n) => (fe(), Ee("li", Ng, Dn(e.item.text), 1));
  }
}, Ug = {
  __name: "ChatItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (fe(), Ee(Se, null, [
      ft(zs).MESSAGE === e.item.type ? (fe(), pn(Lg, {
        key: 0,
        item: e.item
      }, null, 8, ["item"])) : Bt("", !0),
      ft(zs).SYSTEM === e.item.type ? (fe(), pn(Fg, {
        key: 1,
        item: e.item
      }, null, 8, ["item"])) : Bt("", !0)
    ], 64));
  }
}, Mg = {
  __name: "ChatItemList",
  setup(e) {
    const t = Ne(null), n = it();
    Ca(() => {
      Gn(() => s());
    }), Oa(() => {
      Gn(() => s());
    });
    function s() {
      t.value && (t.value.scrollTop = t.value.scrollHeight);
    }
    function r(u) {
      const a = [];
      let c = null, f = null;
      for (let l = 0; l < u.length; l++) {
        const _ = u[l], p = new Date(_.datetime).toDateString();
        p !== f && (a.push({
          type: zs.DATE,
          date: i(_.datetime)
        }), f = p);
        const g = _.direction !== c;
        a.push({
          ..._,
          showAvatar: g,
          time: o(_.datetime)
        }), c = _.direction;
      }
      return a;
    }
    function i(u) {
      return new Date(u).toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    function o(u) {
      return new Date(u).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    return (u, a) => (fe(), Ee("ul", {
      class: "messages",
      ref_key: "container",
      ref: t
    }, [
      (fe(!0), Ee(Se, null, Lf(r(ft(n).items), (c, f) => (fe(), pn(Ug, {
        key: f,
        item: c
      }, null, 8, ["item"]))), 128))
    ], 512));
  }
}, Vg = {
  key: 0,
  class: "lost-connection"
}, $g = {
  __name: "ConnectionError",
  setup(e) {
    const t = cr(), n = it();
    return (s, r) => ft(n).isLoading === !1 && ft(t).isConnected === !1 ? (fe(), Ee("div", Vg, r[0] || (r[0] = [
      ue("i", { class: "icon-weak-connection" }, null, -1),
      $n(" The internet connection was lost. ")
    ]))) : Bt("", !0);
  }
}, jg = { class: "send" }, Bg = { class: "send__left" }, Hg = { class: "send__left-inner" }, Kg = {
  class: "autoresizable",
  "data-replicated-value": ""
}, zg = { class: "send__actions" }, Wg = ["disabled"], Gg = {
  __name: "MessageInput",
  setup(e) {
    const t = Ne(null), n = Ne(""), s = cr();
    function r() {
      n.value.trim().length > 0 && (s.send(n.value), n.value = ""), o();
    }
    function i(u) {
      if (u.keyCode !== 13)
        return;
      !(u.metaKey || u.ctrlKey) && !u.shiftKey && (u.preventDefault(), r());
    }
    function o() {
      t.value.parentNode.dataset.replicatedValue = n.value;
    }
    return (u, a) => (fe(), Ee("div", jg, [
      ue("div", Bg, [
        ue("div", Hg, [
          ue("div", Kg, [
            vf(ue("textarea", {
              ref_key: "textarea",
              ref: t,
              "onUpdate:modelValue": a[0] || (a[0] = (c) => n.value = c),
              rows: "1",
              name: "text",
              onKeydown: i,
              onInput: o,
              placeholder: "Write your message..."
            }, null, 544), [
              [ah, n.value]
            ])
          ])
        ])
      ]),
      ue("div", zg, [
        ue("button", {
          type: "button",
          class: "btn__send",
          onClick: r,
          disabled: !n.value.trim()
        }, a[1] || (a[1] = [
          ue("i", { class: "icon-send" }, null, -1)
        ]), 8, Wg)
      ])
    ]));
  }
}, qg = {}, Yg = { class: "empty" };
function Jg(e, t) {
  return fe(), Ee("div", Yg, t[0] || (t[0] = [
    ue("div", { class: "empty__inner" }, [
      ue("div", { class: "loader" }, [
        ue("span", { class: "loader__circle" })
      ]),
      ue("span", { class: "empty__text" }, " Please wait, we are loading the chat... ")
    ], -1)
  ]));
}
const Zg = /* @__PURE__ */ Fi(qg, [["render", Jg]]), Xg = ["innerHTML"], Qg = {
  __name: "index",
  setup(e) {
    const t = dn("customHeaderHtml", ""), n = it();
    return (s, r) => ft(n).isLoading ? (fe(), pn(Zg, { key: 0 })) : (fe(), Ee(Se, { key: 1 }, [
      ft(t) ? (fe(), Ee("div", {
        key: 0,
        innerHTML: ft(t)
      }, null, 8, Xg)) : (fe(), pn(Sg, { key: 1 })),
      ze(Mg),
      ze($g),
      ze(Gg)
    ], 64));
  }
};
function em(e) {
  const t = ph(Qg);
  t.config.devtools = !0, t.use(j_());
  const n = W_(), s = it(), r = cr();
  n.init(e.user), s.init(e.chat), r.init(e.connection), t.provide("customHeaderHtml", e == null ? void 0 : e.customHeaderHtml), t.mount(document.querySelector((e == null ? void 0 : e.target) || "#app")), document.querySelector((e == null ? void 0 : e.target) || "#app").classList.add("chat");
}
window.OpenHelpChat = {
  init: em
};
//# sourceMappingURL=public-chat.js.map
