/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = Object.freeze({}), fn = Object.freeze([]), Ce = () => {
}, rl = () => !1, ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xs = (e) => e.startsWith("onUpdate:"), me = Object.assign, ni = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, il = Object.prototype.hasOwnProperty, Y = (e, t) => il.call(e, t), V = Array.isArray, Ht = (e) => Gs(e) === "[object Map]", Uu = (e) => Gs(e) === "[object Set]", B = (e) => typeof e == "function", de = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", si = (e) => (te(e) || B(e)) && B(e.then) && B(e.catch), Fu = Object.prototype.toString, Gs = (e) => Fu.call(e), ri = (e) => Gs(e).slice(8, -1), Mu = (e) => Gs(e) === "[object Object]", ii = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ yt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ol = /* @__PURE__ */ yt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ul = /-(\w)/g, Je = qs(
  (e) => e.replace(ul, (t, n) => n ? n.toUpperCase() : "")
), al = /\B([A-Z])/g, Rt = qs(
  (e) => e.replace(al, "-$1").toLowerCase()
), Ys = qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Mt = qs(
  (e) => e ? `on${Ys(e)}` : ""
), Pt = (e, t) => !Object.is(e, t), on = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Is = (e, t, n, s = !1) => {
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
let Vi;
const ns = () => Vi || (Vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function oi(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = de(s) ? dl(s) : oi(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (de(e) || te(e))
    return e;
}
const cl = /;(?![^(]*\))/g, ll = /:([^]+)/, fl = /\/\*[^]*?\*\//g;
function dl(e) {
  const t = {};
  return e.replace(fl, "").split(cl).forEach((n) => {
    if (n) {
      const s = n.split(ll);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function pn(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = pn(e[n]);
      s && (t += s + " ");
    }
  else if (te(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const hl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", pl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", _l = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", gl = /* @__PURE__ */ yt(hl), ml = /* @__PURE__ */ yt(pl), bl = /* @__PURE__ */ yt(_l), vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yl = /* @__PURE__ */ yt(vl);
function Vu(e) {
  return !!e || e === "";
}
const $u = (e) => !!(e && e.__v_isRef === !0), Ln = (e) => de(e) ? e : e == null ? "" : V(e) || te(e) && (e.toString === Fu || !B(e.toString)) ? $u(e) ? Ln(e.value) : JSON.stringify(e, ju, 2) : String(e), ju = (e, t) => $u(t) ? ju(e, t.value) : Ht(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[dr(s, i) + " =>"] = r, n),
    {}
  )
} : Uu(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => dr(n))
} : Nt(t) ? dr(t) : te(t) && !V(t) && !Mu(t) ? String(t) : t, dr = (e, t = "") => {
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
let Pe;
class Bu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Pe, !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(
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
      const n = Pe;
      try {
        return Pe = this, t();
      } finally {
        Pe = n;
      }
    } else
      Ge("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Pe = this.parent;
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
function Hu(e) {
  return new Bu(e);
}
function Ku() {
  return Pe;
}
function El(e, t = !1) {
  Pe ? Pe.cleanups.push(e) : t || Ge(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Z;
const hr = /* @__PURE__ */ new WeakSet();
class zu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pe && Pe.active && Pe.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $i(this), qu(this);
    const t = Z, n = Ze;
    Z = this, Ze = !0;
    try {
      return this.fn();
    } finally {
      Z !== this && Ge(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Yu(this), Z = t, Ze = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ci(t);
      this.deps = this.depsTail = void 0, $i(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Wu = 0, Nn, Un;
function Gu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Un, Un = e;
    return;
  }
  e.next = Nn, Nn = e;
}
function ui() {
  Wu++;
}
function ai() {
  if (--Wu > 0)
    return;
  if (Un) {
    let t = Un;
    for (Un = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nn; ) {
    let t = Nn;
    for (Nn = void 0; t; ) {
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
function qu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yu(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), ci(s), Sl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Ir(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ju(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ju(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn))
    return;
  e.globalVersion = Hn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ir(e)) {
    e.flags &= -3;
    return;
  }
  const n = Z, s = Ze;
  Z = e, Ze = !0;
  try {
    qu(e);
    const r = e.fn(e._value);
    (t.version === 0 || Pt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Z = n, Ze = s, Yu(e), e.flags &= -3;
  }
}
function ci(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ci(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Sl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ze = !0;
const Zu = [];
function Et() {
  Zu.push(Ze), Ze = !1;
}
function St() {
  const e = Zu.pop();
  Ze = e === void 0 ? !0 : e;
}
function $i(e) {
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
let Hn = 0;
class wl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class li {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!Z || !Ze || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new wl(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, Xu(n);
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
    this.version++, Hn++, this.notify(t);
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
function Xu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Xu(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ks = /* @__PURE__ */ new WeakMap(), Kt = Symbol(
  "Object iterate"
), kr = Symbol(
  "Map keys iterate"
), Kn = Symbol(
  "Array iterate"
);
function Ee(e, t, n) {
  if (Ze && Z) {
    let s = ks.get(e);
    s || ks.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new li()), r.map = s, r.key = n), r.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function it(e, t, n, s, r, i) {
  const o = ks.get(e);
  if (!o) {
    Hn++;
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
    const a = V(e), l = a && ii(n);
    if (a && n === "length") {
      const d = Number(s);
      o.forEach((c, h) => {
        (h === "length" || h === Kn || !Nt(h) && h >= d) && u(c);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && u(o.get(n)), l && u(o.get(Kn)), t) {
        case "add":
          a ? l && u(o.get("length")) : (u(o.get(Kt)), Ht(e) && u(o.get(kr)));
          break;
        case "delete":
          a || (u(o.get(Kt)), Ht(e) && u(o.get(kr)));
          break;
        case "set":
          Ht(e) && u(o.get(Kt));
          break;
      }
  }
  ai();
}
function Tl(e, t) {
  const n = ks.get(e);
  return n && n.get(t);
}
function tn(e) {
  const t = H(e);
  return t === e ? t : (Ee(t, "iterate", Kn), Ne(e) ? t : t.map(we));
}
function Js(e) {
  return Ee(e = H(e), "iterate", Kn), e;
}
const Cl = {
  __proto__: null,
  [Symbol.iterator]() {
    return pr(this, Symbol.iterator, we);
  },
  concat(...e) {
    return tn(this).concat(
      ...e.map((t) => V(t) ? tn(t) : t)
    );
  },
  entries() {
    return pr(this, "entries", (e) => (e[1] = we(e[1]), e));
  },
  every(e, t) {
    return ht(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ht(this, "filter", e, t, (n) => n.map(we), arguments);
  },
  find(e, t) {
    return ht(this, "find", e, t, we, arguments);
  },
  findIndex(e, t) {
    return ht(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ht(this, "findLast", e, t, we, arguments);
  },
  findLastIndex(e, t) {
    return ht(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ht(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _r(this, "includes", e);
  },
  indexOf(...e) {
    return _r(this, "indexOf", e);
  },
  join(e) {
    return tn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return _r(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return On(this, "pop");
  },
  push(...e) {
    return On(this, "push", e);
  },
  reduce(e, ...t) {
    return ji(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ji(this, "reduceRight", e, t);
  },
  shift() {
    return On(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return On(this, "splice", e);
  },
  toReversed() {
    return tn(this).toReversed();
  },
  toSorted(e) {
    return tn(this).toSorted(e);
  },
  toSpliced(...e) {
    return tn(this).toSpliced(...e);
  },
  unshift(...e) {
    return On(this, "unshift", e);
  },
  values() {
    return pr(this, "values", we);
  }
};
function pr(e, t, n) {
  const s = Js(e), r = s[t]();
  return s !== e && !Ne(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Ol = Array.prototype;
function ht(e, t, n, s, r, i) {
  const o = Js(e), u = o !== e && !Ne(e), a = o[t];
  if (a !== Ol[t]) {
    const c = a.apply(e, i);
    return u ? we(c) : c;
  }
  let l = n;
  o !== e && (u ? l = function(c, h) {
    return n.call(this, we(c), h, e);
  } : n.length > 2 && (l = function(c, h) {
    return n.call(this, c, h, e);
  }));
  const d = a.call(o, l, s);
  return u && r ? r(d) : d;
}
function ji(e, t, n, s) {
  const r = Js(e);
  let i = n;
  return r !== e && (Ne(e) ? n.length > 3 && (i = function(o, u, a) {
    return n.call(this, o, u, a, e);
  }) : i = function(o, u, a) {
    return n.call(this, o, we(u), a, e);
  }), r[t](i, ...s);
}
function _r(e, t, n) {
  const s = H(e);
  Ee(s, "iterate", Kn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && zn(n[0]) ? (n[0] = H(n[0]), s[t](...n)) : r;
}
function On(e, t, n = []) {
  Et(), ui();
  const s = H(e)[t].apply(e, n);
  return ai(), St(), s;
}
const Al = /* @__PURE__ */ yt("__proto__,__v_isRef,__isVue"), Qu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function xl(e) {
  Nt(e) || (e = String(e));
  const t = H(this);
  return Ee(t, "has", e), t.hasOwnProperty(e);
}
class ea {
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
      return s === (r ? i ? oa : ia : i ? ra : sa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = V(t);
    if (!r) {
      let a;
      if (o && (a = Cl[n]))
        return a;
      if (n === "hasOwnProperty")
        return xl;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      oe(t) ? t : s
    );
    return (Nt(n) ? Qu.has(n) : Al(n)) || (r || Ee(t, "get", n), i) ? u : oe(u) ? o && ii(n) ? u : u.value : te(u) ? r ? ua(u) : ss(u) : u;
  }
}
class ta extends ea {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = vt(i);
      if (!Ne(s) && !vt(s) && (i = H(i), s = H(s)), !V(t) && oe(i) && !oe(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = V(t) && ii(n) ? Number(n) < t.length : Y(t, n), u = Reflect.set(
      t,
      n,
      s,
      oe(t) ? t : r
    );
    return t === H(r) && (o ? Pt(s, i) && it(t, "set", n, s, i) : it(t, "add", n, s)), u;
  }
  deleteProperty(t, n) {
    const s = Y(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && it(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Nt(n) || !Qu.has(n)) && Ee(t, "has", n), s;
  }
  ownKeys(t) {
    return Ee(
      t,
      "iterate",
      V(t) ? "length" : Kt
    ), Reflect.ownKeys(t);
  }
}
class na extends ea {
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
const Il = /* @__PURE__ */ new ta(), kl = /* @__PURE__ */ new na(), Pl = /* @__PURE__ */ new ta(!0), Rl = /* @__PURE__ */ new na(!0), Pr = (e) => e, ds = (e) => Reflect.getPrototypeOf(e);
function Dl(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = H(r), o = Ht(i), u = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, l = r[e](...s), d = n ? Pr : t ? Rr : we;
    return !t && Ee(
      i,
      "iterate",
      a ? kr : Kt
    ), {
      // iterator protocol
      next() {
        const { value: c, done: h } = l.next();
        return h ? { value: c, done: h } : {
          value: u ? [d(c[0]), d(c[1])] : d(c),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function hs(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ge(
        `${Ys(e)} operation ${n}failed: target is readonly.`,
        H(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ll(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = H(i), u = H(r);
      e || (Pt(r, u) && Ee(o, "get", r), Ee(o, "get", u));
      const { has: a } = ds(o), l = t ? Pr : e ? Rr : we;
      if (a.call(o, r))
        return l(i.get(r));
      if (a.call(o, u))
        return l(i.get(u));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ee(H(r), "iterate", Kt), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = H(i), u = H(r);
      return e || (Pt(r, u) && Ee(o, "has", r), Ee(o, "has", u)), r === u ? i.has(r) : i.has(r) || i.has(u);
    },
    forEach(r, i) {
      const o = this, u = o.__v_raw, a = H(u), l = t ? Pr : e ? Rr : we;
      return !e && Ee(a, "iterate", Kt), u.forEach((d, c) => r.call(i, l(d), l(c), o));
    }
  };
  return me(
    n,
    e ? {
      add: hs("add"),
      set: hs("set"),
      delete: hs("delete"),
      clear: hs("clear")
    } : {
      add(r) {
        !t && !Ne(r) && !vt(r) && (r = H(r));
        const i = H(this);
        return ds(i).has.call(i, r) || (i.add(r), it(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Ne(i) && !vt(i) && (i = H(i));
        const o = H(this), { has: u, get: a } = ds(o);
        let l = u.call(o, r);
        l ? Bi(o, u, r) : (r = H(r), l = u.call(o, r));
        const d = a.call(o, r);
        return o.set(r, i), l ? Pt(i, d) && it(o, "set", r, i, d) : it(o, "add", r, i), this;
      },
      delete(r) {
        const i = H(this), { has: o, get: u } = ds(i);
        let a = o.call(i, r);
        a ? Bi(i, o, r) : (r = H(r), a = o.call(i, r));
        const l = u ? u.call(i, r) : void 0, d = i.delete(r);
        return a && it(i, "delete", r, void 0, l), d;
      },
      clear() {
        const r = H(this), i = r.size !== 0, o = Ht(r) ? new Map(r) : new Set(r), u = r.clear();
        return i && it(
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
    n[r] = Dl(r, e, t);
  }), n;
}
function Zs(e, t) {
  const n = Ll(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    Y(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Nl = {
  get: /* @__PURE__ */ Zs(!1, !1)
}, Ul = {
  get: /* @__PURE__ */ Zs(!1, !0)
}, Fl = {
  get: /* @__PURE__ */ Zs(!0, !1)
}, Ml = {
  get: /* @__PURE__ */ Zs(!0, !0)
};
function Bi(e, t, n) {
  const s = H(n);
  if (s !== n && t.call(e, s)) {
    const r = ri(e);
    Ge(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sa = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap();
function Vl(e) {
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
function $l(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vl(ri(e));
}
function ss(e) {
  return vt(e) ? e : Xs(
    e,
    !1,
    Il,
    Nl,
    sa
  );
}
function jl(e) {
  return Xs(
    e,
    !1,
    Pl,
    Ul,
    ra
  );
}
function ua(e) {
  return Xs(
    e,
    !0,
    kl,
    Fl,
    ia
  );
}
function at(e) {
  return Xs(
    e,
    !0,
    Rl,
    Ml,
    oa
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
  const o = $l(e);
  if (o === 0)
    return e;
  const u = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, u), u;
}
function lt(e) {
  return vt(e) ? lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
function zn(e) {
  return e ? !!e.__v_raw : !1;
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function xt(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && Is(e, "__v_skip", !0), e;
}
const we = (e) => te(e) ? ss(e) : e, Rr = (e) => te(e) ? ua(e) : e;
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ke(e) {
  return Bl(e, !1);
}
function Bl(e, t) {
  return oe(e) ? e : new Hl(e, t);
}
class Hl {
  constructor(t, n) {
    this.dep = new li(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : H(t), this._value = n ? t : we(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Ne(t) || vt(t);
    t = s ? t : H(t), Pt(t, n) && (this._rawValue = t, this._value = s ? t : we(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }));
  }
}
function ot(e) {
  return oe(e) ? e.value : e;
}
const Kl = {
  get: (e, t, n) => t === "__v_raw" ? e : ot(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return oe(r) && !oe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function aa(e) {
  return lt(e) ? e : new Proxy(e, Kl);
}
function Hi(e) {
  zn(e) || Ge("toRefs() expects a reactive object but received a plain one.");
  const t = V(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ca(e, n);
  return t;
}
class zl {
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
    return Tl(H(this._object), this._key);
  }
}
class Wl {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function gr(e, t, n) {
  return oe(e) ? e : B(e) ? new Wl(e) : te(e) && arguments.length > 1 ? ca(e, t, n) : Ke(e);
}
function ca(e, t, n) {
  const s = e[t];
  return oe(s) ? s : new zl(e, t, n);
}
class Gl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new li(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return Gu(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return Ju(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ge("Write operation failed: computed value is readonly");
  }
}
function ql(e, t, n = !1) {
  let s, r;
  return B(e) ? s = e : (s = e.get, r = e.set), new Gl(s, r, n);
}
const ps = {}, Ps = /* @__PURE__ */ new WeakMap();
let Vt;
function Yl(e, t = !1, n = Vt) {
  if (n) {
    let s = Ps.get(n);
    s || Ps.set(n, s = []), s.push(e);
  } else t || Ge(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jl(e, t, n = X) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: u, call: a } = n, l = (U) => {
    (n.onWarn || Ge)(
      "Invalid watch source: ",
      U,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (U) => r ? U : Ne(U) || r === !1 || r === 0 ? gt(U, 1) : gt(U);
  let c, h, p, g, b = !1, E = !1;
  if (oe(e) ? (h = () => e.value, b = Ne(e)) : lt(e) ? (h = () => d(e), b = !0) : V(e) ? (E = !0, b = e.some((U) => lt(U) || Ne(U)), h = () => e.map((U) => {
    if (oe(U))
      return U.value;
    if (lt(U))
      return d(U);
    if (B(U))
      return a ? a(U, 2) : U();
    l(U);
  })) : B(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (p) {
      Et();
      try {
        p();
      } finally {
        St();
      }
    }
    const U = Vt;
    Vt = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Vt = U;
    }
  } : (h = Ce, l(e)), t && r) {
    const U = h, J = r === !0 ? 1 / 0 : r;
    h = () => gt(U(), J);
  }
  const C = Ku(), $ = () => {
    c.stop(), C && C.active && ni(C.effects, c);
  };
  if (i && t) {
    const U = t;
    t = (...J) => {
      U(...J), $();
    };
  }
  let N = E ? new Array(e.length).fill(ps) : ps;
  const ne = (U) => {
    if (!(!(c.flags & 1) || !c.dirty && !U))
      if (t) {
        const J = c.run();
        if (r || b || (E ? J.some((F, he) => Pt(F, N[he])) : Pt(J, N))) {
          p && p();
          const F = Vt;
          Vt = c;
          try {
            const he = [
              J,
              // pass undefined as the old value when it's changed for the first time
              N === ps ? void 0 : E && N[0] === ps ? [] : N,
              g
            ];
            a ? a(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            ), N = J;
          } finally {
            Vt = F;
          }
        }
      } else
        c.run();
  };
  return u && u(ne), c = new zu(h), c.scheduler = o ? () => o(ne, !1) : ne, g = (U) => Yl(U, !1, c), p = c.onStop = () => {
    const U = Ps.get(c);
    if (U) {
      if (a)
        a(U, 4);
      else
        for (const J of U) J();
      Ps.delete(c);
    }
  }, c.onTrack = n.onTrack, c.onTrigger = n.onTrigger, t ? s ? ne(!0) : N = c.run() : o ? o(ne.bind(null, !0), !0) : c.run(), $.pause = c.pause.bind(c), $.resume = c.resume.bind(c), $.stop = $, $;
}
function gt(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, oe(e))
    gt(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      gt(e[s], t, n);
  else if (Uu(e) || Ht(e))
    e.forEach((s) => {
      gt(s, t, n);
    });
  else if (Mu(e)) {
    for (const s in e)
      gt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && gt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const zt = [];
function gs(e) {
  zt.push(e);
}
function ms() {
  zt.pop();
}
let mr = !1;
function x(e, ...t) {
  if (mr) return;
  mr = !0, Et();
  const n = zt.length ? zt[zt.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Zl();
  if (s)
    vn(
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
`, ...Xl(r)), console.warn(...i);
  }
  St(), mr = !1;
}
function Zl() {
  let e = zt[zt.length - 1];
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
function Xl(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Ql(n));
  }), t;
}
function Ql({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${rr(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...ef(e.props), i] : [r + i];
}
function ef(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...la(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function la(e, t, n) {
  return de(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : oe(t) ? (t = la(e, H(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = H(t), n ? t : [`${e}=`, t]);
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
function vn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    rs(r, t, n);
  }
}
function dt(e, t, n, s) {
  if (B(e)) {
    const r = vn(e, t, n, s);
    return r && si(r) && r.catch((i) => {
      rs(i, t, n);
    }), r;
  }
  if (V(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(dt(e[i], t, n, s));
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
    const a = t.proxy, l = fi[n];
    for (; u; ) {
      const d = u.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, a, l) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      Et(), vn(i, null, 10, [
        e,
        a,
        l
      ]), St();
      return;
    }
  }
  tf(e, n, r, s, o);
}
function tf(e, t, n, s = !0, r = !1) {
  {
    const i = fi[t];
    if (n && gs(n), x(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ms(), s)
      throw e;
    console.error(e);
  }
}
const De = [];
let rt = -1;
const dn = [];
let Tt = null, un = 0;
const fa = /* @__PURE__ */ Promise.resolve();
let Rs = null;
const nf = 100;
function _n(e) {
  const t = Rs || fa;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sf(e) {
  let t = rt + 1, n = De.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = De[s], i = Wn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Qs(e) {
  if (!(e.flags & 1)) {
    const t = Wn(e), n = De[De.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wn(n) ? De.push(e) : De.splice(sf(t), 0, e), e.flags |= 1, da();
  }
}
function da() {
  Rs || (Rs = fa.then(_a));
}
function ha(e) {
  V(e) ? dn.push(...e) : Tt && e.id === -1 ? Tt.splice(un + 1, 0, e) : e.flags & 1 || (dn.push(e), e.flags |= 1), da();
}
function Ki(e, t, n = rt + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < De.length; n++) {
    const s = De[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || di(t, s))
        continue;
      De.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function pa(e) {
  if (dn.length) {
    const t = [...new Set(dn)].sort(
      (n, s) => Wn(n) - Wn(s)
    );
    if (dn.length = 0, Tt) {
      Tt.push(...t);
      return;
    }
    for (Tt = t, e = e || /* @__PURE__ */ new Map(), un = 0; un < Tt.length; un++) {
      const n = Tt[un];
      di(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Tt = null, un = 0;
  }
}
const Wn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _a(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => di(e, n);
  try {
    for (rt = 0; rt < De.length; rt++) {
      const n = De[rt];
      if (n && !(n.flags & 8)) {
        if (t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), vn(
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
    rt = -1, De.length = 0, pa(e), Rs = null, (De.length || dn.length) && _a(e);
  }
}
function di(e, t) {
  const n = e.get(t) || 0;
  if (n > nf) {
    const s = t.i, r = s && Xa(s.type);
    return rs(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let ct = !1;
const bs = /* @__PURE__ */ new Map();
ns().__VUE_HMR_RUNTIME__ = {
  createRecord: br(ga),
  rerender: br(uf),
  reload: br(af)
};
const Zt = /* @__PURE__ */ new Map();
function rf(e) {
  const t = e.type.__hmrId;
  let n = Zt.get(t);
  n || (ga(t, e.type), n = Zt.get(t)), n.instances.add(e);
}
function of(e) {
  Zt.get(e.type.__hmrId).instances.delete(e);
}
function ga(e, t) {
  return Zt.has(e) ? !1 : (Zt.set(e, {
    initialDef: Ds(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ds(e) {
  return Qa(e) ? e.__vccOpts : e;
}
function uf(e, t) {
  const n = Zt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Ds(s.type).render = t), s.renderCache = [], ct = !0, s.update(), ct = !1;
  }));
}
function af(e, t) {
  const n = Zt.get(e);
  if (!n) return;
  t = Ds(t), zi(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const i = s[r], o = Ds(i.type);
    let u = bs.get(o);
    u || (o !== n.initialDef && zi(o, t), bs.set(o, u = /* @__PURE__ */ new Set())), u.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (u.add(i), i.ceReload(t.styles), u.delete(i)) : i.parent ? Qs(() => {
      ct = !0, i.parent.update(), ct = !1, u.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  ha(() => {
    bs.clear();
  });
}
function zi(e, t) {
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
let ut, In = [], Dr = !1;
function is(e, ...t) {
  ut ? ut.emit(e, ...t) : Dr || In.push({ event: e, args: t });
}
function ma(e, t) {
  var n, s;
  ut = e, ut ? (ut.enabled = !0, In.forEach(({ event: r, args: i }) => ut.emit(r, ...i)), In = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    ma(i, t);
  }), setTimeout(() => {
    ut || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Dr = !0, In = []);
  }, 3e3)) : (Dr = !0, In = []);
}
function cf(e, t) {
  is("app:init", e, t, {
    Fragment: Te,
    Text: os,
    Comment: ze,
    Static: Mn
  });
}
function lf(e) {
  is("app:unmount", e);
}
const ff = /* @__PURE__ */ hi(
  "component:added"
  /* COMPONENT_ADDED */
), ba = /* @__PURE__ */ hi(
  "component:updated"
  /* COMPONENT_UPDATED */
), df = /* @__PURE__ */ hi(
  "component:removed"
  /* COMPONENT_REMOVED */
), hf = (e) => {
  ut && typeof ut.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ut.cleanupBuffer(e) && df(e);
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
const pf = /* @__PURE__ */ va(
  "perf:start"
  /* PERFORMANCE_START */
), _f = /* @__PURE__ */ va(
  "perf:end"
  /* PERFORMANCE_END */
);
function va(e) {
  return (t, n, s) => {
    is(e, t.appContext.app, t.uid, t, n, s);
  };
}
function gf(e, t, n) {
  is(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Oe = null, ya = null;
function Ls(e) {
  const t = Oe;
  return Oe = e, ya = e && e.type.__scopeId || null, t;
}
function mf(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && so(-1);
    const i = Ls(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Ls(i), s._d && so(1);
    }
    return ba(t), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ea(e) {
  ol(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function bf(e, t) {
  if (Oe === null)
    return x("withDirectives can only be used inside render functions."), e;
  const n = sr(Oe), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, u, a = X] = t[r];
    i && (B(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && gt(o), s.push({
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
function Ut(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const u = r[o];
    i && (u.oldValue = i[o].value);
    let a = u.dir[s];
    a && (Et(), dt(a, n, 8, [
      e.el,
      u,
      e,
      t
    ]), St());
  }
}
const vf = Symbol("_vte"), yf = (e) => e.__isTeleport;
function pi(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Sa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ef = /* @__PURE__ */ new WeakSet();
function Ns(e, t, n, s, r = !1) {
  if (V(e)) {
    e.forEach(
      (g, b) => Ns(
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
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ns(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? sr(s.component) : s.el, o = r ? null : i, { i: u, r: a } = e;
  if (!u) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const l = t && t.r, d = u.refs === X ? u.refs = {} : u.refs, c = u.setupState, h = H(c), p = c === X ? () => !1 : (g) => (Y(h, g) && !oe(h[g]) && x(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), Ef.has(h[g]) ? !1 : Y(h, g));
  if (l != null && l !== a && (de(l) ? (d[l] = null, p(l) && (c[l] = null)) : oe(l) && (l.value = null)), B(a))
    vn(a, u, 12, [o, d]);
  else {
    const g = de(a), b = oe(a);
    if (g || b) {
      const E = () => {
        if (e.f) {
          const C = g ? p(a) ? c[a] : d[a] : a.value;
          r ? V(C) && ni(C, i) : V(C) ? C.includes(i) || C.push(i) : g ? (d[a] = [i], p(a) && (c[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else g ? (d[a] = o, p(a) && (c[a] = o)) : b ? (a.value = o, e.k && (d[e.k] = o)) : x("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (E.id = -1, je(E, n)) : E();
    } else
      x("Invalid template ref type:", a, `(${typeof a})`);
  }
}
ns().requestIdleCallback;
ns().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, _i = (e) => e.type.__isKeepAlive;
function Sf(e, t) {
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
      _i(r.parent.vnode) && Tf(s, t, n, r), r = r.parent;
  }
}
function Tf(e, t, n, s) {
  const r = er(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Oa(() => {
    ni(s[t], r);
  }, n);
}
function er(e, t, n = _e, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Et();
      const u = us(n), a = dt(t, n, e, o);
      return u(), St(), a;
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
  (!Yn || e === "sp") && er(e, (...s) => t(...s), n);
}, Cf = wt("bm"), Ta = wt("m"), Of = wt(
  "bu"
), Ca = wt("u"), Af = wt(
  "bum"
), Oa = wt("um"), xf = wt(
  "sp"
), If = wt("rtg"), kf = wt("rtc");
function Pf(e, t = _e) {
  er("ec", e, t);
}
const Rf = Symbol.for("v-ndc");
function Df(e, t, n, s) {
  let r;
  const i = n, o = V(e);
  if (o || de(e)) {
    const u = o && lt(e);
    let a = !1;
    u && (a = !Ne(e), e = Js(e)), r = new Array(e.length);
    for (let l = 0, d = e.length; l < d; l++)
      r[l] = t(
        a ? we(e[l]) : e[l],
        l,
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
      for (let a = 0, l = u.length; a < l; a++) {
        const d = u[a];
        r[a] = t(e[d], d, a, i);
      }
    }
  else
    r = [];
  return r;
}
const Lr = (e) => e ? Ja(e) ? sr(e) : Lr(e.parent) : null, Wt = (
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
    $options: (e) => Ia(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _n.bind(e.proxy)),
    $watch: (e) => hd.bind(e)
  })
), gi = (e) => e === "_" || e === "$", vr = (e, t) => e !== X && !e.__isScriptSetup && Y(e, t), Aa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: u, appContext: a } = e;
    if (t === "__isVue")
      return !0;
    let l;
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
          (l = e.propsOptions[0]) && Y(l, t)
        )
          return o[t] = 3, i[t];
        if (n !== X && Y(n, t))
          return o[t] = 4, n[t];
        Nr && (o[t] = 0);
      }
    }
    const d = Wt[t];
    let c, h;
    if (d)
      return t === "$attrs" ? (Ee(e.attrs, "get", ""), Ms()) : t === "$slots" && Ee(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (c = u.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== X && Y(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, Y(h, t)
    )
      return h[t];
    Oe && (!de(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== X && gi(t[0]) && Y(r, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Oe && x(
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
    return !!n[o] || e !== X && Y(e, o) || vr(t, o) || (u = i[0]) && Y(u, o) || Y(s, o) || Y(Wt, o) || Y(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
Aa.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function Lf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Wt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Wt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ce
    });
  }), t;
}
function Nf(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Ce
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
        set: Ce
      });
    }
  });
}
function Wi(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ff() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Nr = !0;
function Mf(e) {
  const t = Ia(e), n = e.proxy, s = e.ctx;
  Nr = !1, t.beforeCreate && Gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: u,
    provide: a,
    inject: l,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: h,
    beforeUpdate: p,
    updated: g,
    activated: b,
    deactivated: E,
    beforeDestroy: C,
    beforeUnmount: $,
    destroyed: N,
    unmounted: ne,
    render: U,
    renderTracked: J,
    renderTriggered: F,
    errorCaptured: he,
    serverPrefetch: Q,
    // public API
    expose: D,
    inheritAttrs: P,
    // assets
    components: W,
    directives: le,
    filters: Ae
  } = t, xe = Ff();
  {
    const [R] = e.propsOptions;
    if (R)
      for (const K in R)
        xe("Props", K);
  }
  if (l && Vf(l, s, xe), o)
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
      e.data = ss(R);
      for (const K in R)
        xe("Data", K), gi(K[0]) || Object.defineProperty(s, K, {
          configurable: !0,
          enumerable: !0,
          get: () => R[K],
          set: Ce
        });
    }
  }
  if (Nr = !0, i)
    for (const R in i) {
      const K = i[R], G = B(K) ? K.bind(n, n) : B(K.get) ? K.get.bind(n, n) : Ce;
      G === Ce && x(`Computed property "${R}" has no getter.`);
      const Xe = !B(K) && B(K.set) ? K.set.bind(n) : () => {
        x(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      }, Ue = ir({
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
      xa(u[R], s, n, R);
  if (a) {
    const R = B(a) ? a.call(n) : a;
    Reflect.ownKeys(R).forEach((K) => {
      zf(K, R[K]);
    });
  }
  d && Gi(d, e, "c");
  function ue(R, K) {
    V(K) ? K.forEach((G) => R(G.bind(n))) : K && R(K.bind(n));
  }
  if (ue(Cf, c), ue(Ta, h), ue(Of, p), ue(Ca, g), ue(Sf, b), ue(wf, E), ue(Pf, he), ue(kf, J), ue(If, F), ue(Af, $), ue(Oa, ne), ue(xf, Q), V(D))
    if (D.length) {
      const R = e.exposed || (e.exposed = {});
      D.forEach((K) => {
        Object.defineProperty(R, K, {
          get: () => n[K],
          set: (G) => n[K] = G
        });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === Ce && (e.render = U), P != null && (e.inheritAttrs = P), W && (e.components = W), le && (e.directives = le), Q && Sa(e);
}
function Vf(e, t, n = Ce) {
  V(e) && (e = Ur(e));
  for (const s in e) {
    const r = e[s];
    let i;
    te(r) ? "default" in r ? i = qt(
      r.from || s,
      r.default,
      !0
    ) : i = qt(r.from || s) : i = qt(r), oe(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i, n("Inject", s);
  }
}
function Gi(e, t, n) {
  dt(
    V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xa(e, t, n, s) {
  let r = s.includes(".") ? Ba(n, s) : () => n[s];
  if (de(e)) {
    const i = t[e];
    B(i) ? Yt(r, i) : x(`Invalid watch handler specified by key "${e}"`, i);
  } else if (B(e))
    Yt(r, e.bind(n));
  else if (te(e))
    if (V(e))
      e.forEach((i) => xa(i, t, n, s));
    else {
      const i = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(i) ? Yt(r, i, e) : x(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    x(`Invalid watch option: "${s}"`, e);
}
function Ia(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = i.get(t);
  let a;
  return u ? a = u : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (l) => Us(a, l, o, !0)
  ), Us(a, t, o)), te(t) && i.set(t, a), a;
}
function Us(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Us(e, i, n, !0), r && r.forEach(
    (o) => Us(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const u = $f[o] || n && n[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const $f = {
  data: qi,
  props: Yi,
  emits: Yi,
  // objects
  methods: kn,
  computed: kn,
  // lifecycle
  beforeCreate: ke,
  created: ke,
  beforeMount: ke,
  mounted: ke,
  beforeUpdate: ke,
  updated: ke,
  beforeDestroy: ke,
  beforeUnmount: ke,
  destroyed: ke,
  unmounted: ke,
  activated: ke,
  deactivated: ke,
  errorCaptured: ke,
  serverPrefetch: ke,
  // assets
  components: kn,
  directives: kn,
  // watch
  watch: Bf,
  // provide / inject
  provide: qi,
  inject: jf
};
function qi(e, t) {
  return t ? e ? function() {
    return me(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jf(e, t) {
  return kn(Ur(e), Ur(t));
}
function Ur(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ke(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kn(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yi(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    Wi(e),
    Wi(t ?? {})
  ) : t;
}
function Bf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ke(e[s], t[s]);
  return n;
}
function ka() {
  return {
    app: null,
    config: {
      isNativeTag: rl,
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
let Hf = 0;
function Kf(e, t) {
  return function(s, r = null) {
    B(s) || (s = me({}, s)), r != null && !te(r) && (x("root props passed to app.mount() must be an object."), r = null);
    const i = ka(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let a = !1;
    const l = i.app = {
      _uid: Hf++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: oo,
      get config() {
        return i.config;
      },
      set config(d) {
        x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return o.has(d) ? x("Plugin has already been applied to target app.") : d && B(d.install) ? (o.add(d), d.install(l, ...c)) : B(d) ? (o.add(d), d(l, ...c)) : x(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(d) {
        return i.mixins.includes(d) ? x(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), l;
      },
      component(d, c) {
        return Br(d, i.config), c ? (i.components[d] && x(`Component "${d}" has already been registered in target app.`), i.components[d] = c, l) : i.components[d];
      },
      directive(d, c) {
        return Ea(d), c ? (i.directives[d] && x(`Directive "${d}" has already been registered in target app.`), i.directives[d] = c, l) : i.directives[d];
      },
      mount(d, c, h) {
        if (a)
          x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = l._ceVNode || Ve(s, r);
          return p.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), i.reload = () => {
            e(
              Dt(p),
              d,
              h
            );
          }, e(p, d, h), a = !0, l._container = d, d.__vue_app__ = l, l._instance = p.component, cf(l, oo), sr(p.component);
        }
      },
      onUnmount(d) {
        typeof d != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), u.push(d);
      },
      unmount() {
        a ? (dt(
          u,
          l._instance,
          16
        ), e(null, l._container), l._instance = null, lf(l), delete l._container.__vue_app__) : x("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return d in i.provides && x(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = c, l;
      },
      runWithContext(d) {
        const c = Gt;
        Gt = l;
        try {
          return d();
        } finally {
          Gt = c;
        }
      }
    };
    return l;
  };
}
let Gt = null;
function zf(e, t) {
  if (!_e)
    x("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const s = _e.parent && _e.parent.provides;
    s === n && (n = _e.provides = Object.create(s)), n[e] = t;
  }
}
function qt(e, t, n = !1) {
  const s = _e || Oe;
  if (s || Gt) {
    const r = Gt ? Gt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(s && s.proxy) : t;
    x(`injection "${String(e)}" not found.`);
  } else
    x("inject() can only be used inside setup() or functional components.");
}
function Wf() {
  return !!(_e || Oe || Gt);
}
const Pa = {}, Ra = () => Object.create(Pa), Da = (e) => Object.getPrototypeOf(e) === Pa;
function Gf(e, t, n, s = !1) {
  const r = {}, i = Ra();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), La(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  Ua(t || {}, r, e), n ? e.props = s ? r : jl(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function qf(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Yf(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, u = H(r), [a] = e.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !qf(e) && (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let h = d[c];
        if (tr(e.emitsOptions, h))
          continue;
        const p = t[h];
        if (a)
          if (Y(i, h))
            p !== i[h] && (i[h] = p, l = !0);
          else {
            const g = Je(h);
            r[g] = Fr(
              a,
              u,
              g,
              p,
              e,
              !1
            );
          }
        else
          p !== i[h] && (i[h] = p, l = !0);
      }
    }
  } else {
    La(e, t, r, i) && (l = !0);
    let d;
    for (const c in u)
      (!t || // for camelCase
      !Y(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Rt(c)) === c || !Y(t, d))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[c] = Fr(
        a,
        u,
        c,
        void 0,
        e,
        !0
      )) : delete r[c]);
    if (i !== u)
      for (const c in i)
        (!t || !Y(t, c)) && (delete i[c], l = !0);
  }
  l && it(e.attrs, "set", ""), Ua(t || {}, r, e);
}
function La(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let a in t) {
      if (Dn(a))
        continue;
      const l = t[a];
      let d;
      r && Y(r, d = Je(a)) ? !i || !i.includes(d) ? n[d] = l : (u || (u = {}))[d] = l : tr(e.emitsOptions, a) || (!(a in s) || l !== s[a]) && (s[a] = l, o = !0);
    }
  if (i) {
    const a = H(n), l = u || X;
    for (let d = 0; d < i.length; d++) {
      const c = i[d];
      n[c] = Fr(
        r,
        a,
        c,
        l[c],
        e,
        !Y(l, c)
      );
    }
  }
  return o;
}
function Fr(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const u = Y(o, "default");
    if (u && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && B(a)) {
        const { propsDefaults: l } = r;
        if (n in l)
          s = l[n];
        else {
          const d = us(r);
          s = l[n] = a.call(
            null,
            t
          ), d();
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
const Jf = /* @__PURE__ */ new WeakMap();
function Na(e, t, n = !1) {
  const s = n ? Jf : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, u = [];
  let a = !1;
  if (!B(e)) {
    const d = (c) => {
      a = !0;
      const [h, p] = Na(c, t, !0);
      me(o, h), p && u.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return te(e) && s.set(e, fn), fn;
  if (V(i))
    for (let d = 0; d < i.length; d++) {
      de(i[d]) || x("props must be strings when using array syntax.", i[d]);
      const c = Je(i[d]);
      Ji(c) && (o[c] = X);
    }
  else if (i) {
    te(i) || x("invalid props options", i);
    for (const d in i) {
      const c = Je(d);
      if (Ji(c)) {
        const h = i[d], p = o[c] = V(h) || B(h) ? { type: h } : me({}, h), g = p.type;
        let b = !1, E = !0;
        if (V(g))
          for (let C = 0; C < g.length; ++C) {
            const $ = g[C], N = B($) && $.name;
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
        ] = E, (b || Y(p, "default")) && u.push(c);
      }
    }
  }
  const l = [o, u];
  return te(e) && s.set(e, l), l;
}
function Ji(e) {
  return e[0] !== "$" && !Dn(e) ? !0 : (x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Zf(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ua(e, t, n) {
  const s = H(t), r = n.propsOptions[0], i = Object.keys(e).map((o) => Je(o));
  for (const o in r) {
    let u = r[o];
    u != null && Xf(
      o,
      s[o],
      u,
      at(s),
      !i.includes(o)
    );
  }
}
function Xf(e, t, n, s, r) {
  const { type: i, required: o, validator: u, skipCheck: a } = n;
  if (o && r) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (i != null && i !== !0 && !a) {
      let l = !1;
      const d = V(i) ? i : [i], c = [];
      for (let h = 0; h < d.length && !l; h++) {
        const { valid: p, expectedType: g } = ed(t, d[h]);
        c.push(g || ""), l = p;
      }
      if (!l) {
        x(td(e, t, c));
        return;
      }
    }
    u && !u(t, s) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Qf = /* @__PURE__ */ yt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ed(e, t) {
  let n;
  const s = Zf(t);
  if (s === "null")
    n = e === null;
  else if (Qf(s)) {
    const r = typeof e;
    n = r === s.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else s === "Object" ? n = te(e) : s === "Array" ? n = V(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function td(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ys).join(" | ")}`;
  const r = n[0], i = ri(t), o = Zi(t, r), u = Zi(t, i);
  return n.length === 1 && Xi(r) && !nd(r, i) && (s += ` with value ${o}`), s += `, got ${i} `, Xi(i) && (s += `with value ${u}.`), s;
}
function Zi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Xi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function nd(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Fa = (e) => e[0] === "_" || e === "$stable", mi = (e) => V(e) ? e.map(Ye) : [Ye(e)], sd = (e, t, n) => {
  if (t._n)
    return t;
  const s = mf((...r) => (_e && (!n || n.root === _e.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), mi(t(...r))), n);
  return s._c = !1, s;
}, Ma = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Fa(r)) continue;
    const i = e[r];
    if (B(i))
      t[r] = sd(r, i, s);
    else if (i != null) {
      x(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const o = mi(i);
      t[r] = () => o;
    }
  }
}, Va = (e, t) => {
  _i(e.vnode) || x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = mi(t);
  e.slots.default = () => n;
}, Mr = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, rd = (e, t, n) => {
  const s = e.slots = Ra();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Mr(s, t, n), n && Is(s, "_", r, !0)) : Ma(t, s);
  } else t && Va(e, t);
}, id = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = X;
  if (s.shapeFlag & 32) {
    const u = t._;
    u ? ct ? (Mr(r, t, n), it(e, "set", "$slots")) : n && u === 1 ? i = !1 : Mr(r, t, n) : (i = !t.$stable, Ma(t, r)), o = t;
  } else t && (Va(e, t), o = { default: 1 });
  if (i)
    for (const u in r)
      !Fa(u) && o[u] == null && delete r[u];
};
let An, Ot;
function nn(e, t) {
  e.appContext.config.performance && Fs() && Ot.mark(`vue-${t}-${e.uid}`), pf(e, t, Fs() ? Ot.now() : Date.now());
}
function sn(e, t) {
  if (e.appContext.config.performance && Fs()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Ot.mark(s), Ot.measure(
      `<${rr(e, e.type)}> ${t}`,
      n,
      s
    ), Ot.clearMarks(n), Ot.clearMarks(s);
  }
  _f(e, t, Fs() ? Ot.now() : Date.now());
}
function Fs() {
  return An !== void 0 || (typeof window < "u" && window.performance ? (An = !0, Ot = window.performance) : An = !1), An;
}
function od() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const je = yd;
function ud(e) {
  return ad(e);
}
function ad(e, t) {
  od();
  const n = ns();
  n.__VUE__ = !0, ma(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: u,
    createComment: a,
    setText: l,
    setElementText: d,
    parentNode: c,
    nextSibling: h,
    setScopeId: p = Ce,
    insertStaticContent: g
  } = e, b = (f, _, m, w = null, v = null, S = null, I = void 0, A = null, O = ct ? !1 : !!_.dynamicChildren) => {
    if (f === _)
      return;
    f && !xn(f, _) && (w = fs(f), Fe(f, v, S, !0), f = null), _.patchFlag === -2 && (O = !1, _.dynamicChildren = null);
    const { type: T, ref: j, shapeFlag: k } = _;
    switch (T) {
      case os:
        E(f, _, m, w);
        break;
      case ze:
        C(f, _, m, w);
        break;
      case Mn:
        f == null ? $(_, m, w, I) : N(f, _, m, I);
        break;
      case Te:
        le(
          f,
          _,
          m,
          w,
          v,
          S,
          I,
          A,
          O
        );
        break;
      default:
        k & 1 ? J(
          f,
          _,
          m,
          w,
          v,
          S,
          I,
          A,
          O
        ) : k & 6 ? Ae(
          f,
          _,
          m,
          w,
          v,
          S,
          I,
          A,
          O
        ) : k & 64 || k & 128 ? T.process(
          f,
          _,
          m,
          w,
          v,
          S,
          I,
          A,
          O,
          Tn
        ) : x("Invalid VNode type:", T, `(${typeof T})`);
    }
    j != null && v && Ns(j, f && f.ref, S, _ || f, !_);
  }, E = (f, _, m, w) => {
    if (f == null)
      s(
        _.el = u(_.children),
        m,
        w
      );
    else {
      const v = _.el = f.el;
      _.children !== f.children && l(v, _.children);
    }
  }, C = (f, _, m, w) => {
    f == null ? s(
      _.el = a(_.children || ""),
      m,
      w
    ) : _.el = f.el;
  }, $ = (f, _, m, w) => {
    [f.el, f.anchor] = g(
      f.children,
      _,
      m,
      w,
      f.el,
      f.anchor
    );
  }, N = (f, _, m, w) => {
    if (_.children !== f.children) {
      const v = h(f.anchor);
      U(f), [_.el, _.anchor] = g(
        _.children,
        m,
        v,
        w
      );
    } else
      _.el = f.el, _.anchor = f.anchor;
  }, ne = ({ el: f, anchor: _ }, m, w) => {
    let v;
    for (; f && f !== _; )
      v = h(f), s(f, m, w), f = v;
    s(_, m, w);
  }, U = ({ el: f, anchor: _ }) => {
    let m;
    for (; f && f !== _; )
      m = h(f), r(f), f = m;
    r(_);
  }, J = (f, _, m, w, v, S, I, A, O) => {
    _.type === "svg" ? I = "svg" : _.type === "math" && (I = "mathml"), f == null ? F(
      _,
      m,
      w,
      v,
      S,
      I,
      A,
      O
    ) : D(
      f,
      _,
      v,
      S,
      I,
      A,
      O
    );
  }, F = (f, _, m, w, v, S, I, A) => {
    let O, T;
    const { props: j, shapeFlag: k, transition: M, dirs: z } = f;
    if (O = f.el = o(
      f.type,
      S,
      j && j.is,
      j
    ), k & 8 ? d(O, f.children) : k & 16 && Q(
      f.children,
      O,
      null,
      w,
      v,
      yr(f, S),
      I,
      A
    ), z && Ut(f, null, w, "created"), he(O, f, f.scopeId, I, w), j) {
      for (const re in j)
        re !== "value" && !Dn(re) && i(O, re, null, j[re], S, w);
      "value" in j && i(O, "value", null, j.value, S), (T = j.onVnodeBeforeMount) && nt(T, w, f);
    }
    Is(O, "__vnode", f, !0), Is(O, "__vueParentComponent", w, !0), z && Ut(f, null, w, "beforeMount");
    const q = cd(v, M);
    q && M.beforeEnter(O), s(O, _, m), ((T = j && j.onVnodeMounted) || q || z) && je(() => {
      T && nt(T, w, f), q && M.enter(O), z && Ut(f, null, w, "mounted");
    }, v);
  }, he = (f, _, m, w, v) => {
    if (m && p(f, m), w)
      for (let S = 0; S < w.length; S++)
        p(f, w[S]);
    if (v) {
      let S = v.subTree;
      if (S.patchFlag > 0 && S.patchFlag & 2048 && (S = bi(S.children) || S), _ === S || za(S.type) && (S.ssContent === _ || S.ssFallback === _)) {
        const I = v.vnode;
        he(
          f,
          I,
          I.scopeId,
          I.slotScopeIds,
          v.parent
        );
      }
    }
  }, Q = (f, _, m, w, v, S, I, A, O = 0) => {
    for (let T = O; T < f.length; T++) {
      const j = f[T] = A ? Ct(f[T]) : Ye(f[T]);
      b(
        null,
        j,
        _,
        m,
        w,
        v,
        S,
        I,
        A
      );
    }
  }, D = (f, _, m, w, v, S, I) => {
    const A = _.el = f.el;
    A.__vnode = _;
    let { patchFlag: O, dynamicChildren: T, dirs: j } = _;
    O |= f.patchFlag & 16;
    const k = f.props || X, M = _.props || X;
    let z;
    if (m && Ft(m, !1), (z = M.onVnodeBeforeUpdate) && nt(z, m, _, f), j && Ut(_, f, m, "beforeUpdate"), m && Ft(m, !0), ct && (O = 0, I = !1, T = null), (k.innerHTML && M.innerHTML == null || k.textContent && M.textContent == null) && d(A, ""), T ? (P(
      f.dynamicChildren,
      T,
      A,
      m,
      w,
      yr(_, v),
      S
    ), Vr(f, _)) : I || G(
      f,
      _,
      A,
      null,
      m,
      w,
      yr(_, v),
      S,
      !1
    ), O > 0) {
      if (O & 16)
        W(A, k, M, m, v);
      else if (O & 2 && k.class !== M.class && i(A, "class", null, M.class, v), O & 4 && i(A, "style", k.style, M.style, v), O & 8) {
        const q = _.dynamicProps;
        for (let re = 0; re < q.length; re++) {
          const ee = q[re], $e = k[ee], Me = M[ee];
          (Me !== $e || ee === "value") && i(A, ee, $e, Me, v, m);
        }
      }
      O & 1 && f.children !== _.children && d(A, _.children);
    } else !I && T == null && W(A, k, M, m, v);
    ((z = M.onVnodeUpdated) || j) && je(() => {
      z && nt(z, m, _, f), j && Ut(_, f, m, "updated");
    }, w);
  }, P = (f, _, m, w, v, S, I) => {
    for (let A = 0; A < _.length; A++) {
      const O = f[A], T = _[A], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(O, T) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? c(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      b(
        O,
        T,
        j,
        null,
        w,
        v,
        S,
        I,
        !0
      );
    }
  }, W = (f, _, m, w, v) => {
    if (_ !== m) {
      if (_ !== X)
        for (const S in _)
          !Dn(S) && !(S in m) && i(
            f,
            S,
            _[S],
            null,
            v,
            w
          );
      for (const S in m) {
        if (Dn(S)) continue;
        const I = m[S], A = _[S];
        I !== A && S !== "value" && i(f, S, A, I, v, w);
      }
      "value" in m && i(f, "value", _.value, m.value, v);
    }
  }, le = (f, _, m, w, v, S, I, A, O) => {
    const T = _.el = f ? f.el : u(""), j = _.anchor = f ? f.anchor : u("");
    let { patchFlag: k, dynamicChildren: M, slotScopeIds: z } = _;
    // #5523 dev root fragment may inherit directives
    (ct || k & 2048) && (k = 0, O = !1, M = null), z && (A = A ? A.concat(z) : z), f == null ? (s(T, m, w), s(j, m, w), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      m,
      j,
      v,
      S,
      I,
      A,
      O
    )) : k > 0 && k & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (P(
      f.dynamicChildren,
      M,
      m,
      v,
      S,
      I,
      A
    ), Vr(f, _)) : G(
      f,
      _,
      m,
      j,
      v,
      S,
      I,
      A,
      O
    );
  }, Ae = (f, _, m, w, v, S, I, A, O) => {
    _.slotScopeIds = A, f == null ? _.shapeFlag & 512 ? v.ctx.activate(
      _,
      m,
      w,
      I,
      O
    ) : xe(
      _,
      m,
      w,
      v,
      S,
      I,
      O
    ) : ue(f, _, O);
  }, xe = (f, _, m, w, v, S, I) => {
    const A = f.component = Id(
      f,
      w,
      v
    );
    if (A.type.__hmrId && rf(A), gs(f), nn(A, "mount"), _i(f) && (A.ctx.renderer = Tn), nn(A, "init"), Pd(A, !1, I), sn(A, "init"), A.asyncDep) {
      if (ct && (f.el = null), v && v.registerDep(A, R, I), !f.el) {
        const O = A.subTree = Ve(ze);
        C(null, O, _, m);
      }
    } else
      R(
        A,
        f,
        _,
        m,
        v,
        S,
        I
      );
    ms(), sn(A, "mount");
  }, ue = (f, _, m) => {
    const w = _.component = f.component;
    if (bd(f, _, m))
      if (w.asyncDep && !w.asyncResolved) {
        gs(_), K(w, _, m), ms();
        return;
      } else
        w.next = _, w.update();
    else
      _.el = f.el, w.vnode = _;
  }, R = (f, _, m, w, v, S, I) => {
    const A = () => {
      if (f.isMounted) {
        let { next: k, bu: M, u: z, parent: q, vnode: re } = f;
        {
          const et = $a(f);
          if (et) {
            k && (k.el = re.el, K(f, k, I)), et.asyncDep.then(() => {
              f.isUnmounted || A();
            });
            return;
          }
        }
        let ee = k, $e;
        gs(k || f.vnode), Ft(f, !1), k ? (k.el = re.el, K(f, k, I)) : k = re, M && on(M), ($e = k.props && k.props.onVnodeBeforeUpdate) && nt($e, q, k, re), Ft(f, !0), nn(f, "render");
        const Me = eo(f);
        sn(f, "render");
        const Qe = f.subTree;
        f.subTree = Me, nn(f, "patch"), b(
          Qe,
          Me,
          // parent may have changed if it's in a teleport
          c(Qe.el),
          // anchor may have changed if it's in a fragment
          fs(Qe),
          f,
          v,
          S
        ), sn(f, "patch"), k.el = Me.el, ee === null && vd(f, Me.el), z && je(z, v), ($e = k.props && k.props.onVnodeUpdated) && je(
          () => nt($e, q, k, re),
          v
        ), ba(f), ms();
      } else {
        let k;
        const { el: M, props: z } = _, { bm: q, m: re, parent: ee, root: $e, type: Me } = f, Qe = Fn(_);
        Ft(f, !1), q && on(q), !Qe && (k = z && z.onVnodeBeforeMount) && nt(k, ee, _), Ft(f, !0);
        {
          $e.ce && $e.ce._injectChildStyle(Me), nn(f, "render");
          const et = f.subTree = eo(f);
          sn(f, "render"), nn(f, "patch"), b(
            null,
            et,
            m,
            w,
            f,
            v,
            S
          ), sn(f, "patch"), _.el = et.el;
        }
        if (re && je(re, v), !Qe && (k = z && z.onVnodeMounted)) {
          const et = _;
          je(
            () => nt(k, ee, et),
            v
          );
        }
        (_.shapeFlag & 256 || ee && Fn(ee.vnode) && ee.vnode.shapeFlag & 256) && f.a && je(f.a, v), f.isMounted = !0, ff(f), _ = m = w = null;
      }
    };
    f.scope.on();
    const O = f.effect = new zu(A);
    f.scope.off();
    const T = f.update = O.run.bind(O), j = f.job = O.runIfDirty.bind(O);
    j.i = f, j.id = f.uid, O.scheduler = () => Qs(j), Ft(f, !0), O.onTrack = f.rtc ? (k) => on(f.rtc, k) : void 0, O.onTrigger = f.rtg ? (k) => on(f.rtg, k) : void 0, T();
  }, K = (f, _, m) => {
    _.component = f;
    const w = f.vnode.props;
    f.vnode = _, f.next = null, Yf(f, _.props, w, m), id(f, _.children, m), Et(), Ki(f), St();
  }, G = (f, _, m, w, v, S, I, A, O = !1) => {
    const T = f && f.children, j = f ? f.shapeFlag : 0, k = _.children, { patchFlag: M, shapeFlag: z } = _;
    if (M > 0) {
      if (M & 128) {
        Ue(
          T,
          k,
          m,
          w,
          v,
          S,
          I,
          A,
          O
        );
        return;
      } else if (M & 256) {
        Xe(
          T,
          k,
          m,
          w,
          v,
          S,
          I,
          A,
          O
        );
        return;
      }
    }
    z & 8 ? (j & 16 && wn(T, v, S), k !== T && d(m, k)) : j & 16 ? z & 16 ? Ue(
      T,
      k,
      m,
      w,
      v,
      S,
      I,
      A,
      O
    ) : wn(T, v, S, !0) : (j & 8 && d(m, ""), z & 16 && Q(
      k,
      m,
      w,
      v,
      S,
      I,
      A,
      O
    ));
  }, Xe = (f, _, m, w, v, S, I, A, O) => {
    f = f || fn, _ = _ || fn;
    const T = f.length, j = _.length, k = Math.min(T, j);
    let M;
    for (M = 0; M < k; M++) {
      const z = _[M] = O ? Ct(_[M]) : Ye(_[M]);
      b(
        f[M],
        z,
        m,
        null,
        v,
        S,
        I,
        A,
        O
      );
    }
    T > j ? wn(
      f,
      v,
      S,
      !0,
      !1,
      k
    ) : Q(
      _,
      m,
      w,
      v,
      S,
      I,
      A,
      O,
      k
    );
  }, Ue = (f, _, m, w, v, S, I, A, O) => {
    let T = 0;
    const j = _.length;
    let k = f.length - 1, M = j - 1;
    for (; T <= k && T <= M; ) {
      const z = f[T], q = _[T] = O ? Ct(_[T]) : Ye(_[T]);
      if (xn(z, q))
        b(
          z,
          q,
          m,
          null,
          v,
          S,
          I,
          A,
          O
        );
      else
        break;
      T++;
    }
    for (; T <= k && T <= M; ) {
      const z = f[k], q = _[M] = O ? Ct(_[M]) : Ye(_[M]);
      if (xn(z, q))
        b(
          z,
          q,
          m,
          null,
          v,
          S,
          I,
          A,
          O
        );
      else
        break;
      k--, M--;
    }
    if (T > k) {
      if (T <= M) {
        const z = M + 1, q = z < j ? _[z].el : w;
        for (; T <= M; )
          b(
            null,
            _[T] = O ? Ct(_[T]) : Ye(_[T]),
            m,
            q,
            v,
            S,
            I,
            A,
            O
          ), T++;
      }
    } else if (T > M)
      for (; T <= k; )
        Fe(f[T], v, S, !0), T++;
    else {
      const z = T, q = T, re = /* @__PURE__ */ new Map();
      for (T = q; T <= M; T++) {
        const Ie = _[T] = O ? Ct(_[T]) : Ye(_[T]);
        Ie.key != null && (re.has(Ie.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(Ie.key),
          "Make sure keys are unique."
        ), re.set(Ie.key, T));
      }
      let ee, $e = 0;
      const Me = M - q + 1;
      let Qe = !1, et = 0;
      const Cn = new Array(Me);
      for (T = 0; T < Me; T++) Cn[T] = 0;
      for (T = z; T <= k; T++) {
        const Ie = f[T];
        if ($e >= Me) {
          Fe(Ie, v, S, !0);
          continue;
        }
        let tt;
        if (Ie.key != null)
          tt = re.get(Ie.key);
        else
          for (ee = q; ee <= M; ee++)
            if (Cn[ee - q] === 0 && xn(Ie, _[ee])) {
              tt = ee;
              break;
            }
        tt === void 0 ? Fe(Ie, v, S, !0) : (Cn[tt - q] = T + 1, tt >= et ? et = tt : Qe = !0, b(
          Ie,
          _[tt],
          m,
          null,
          v,
          S,
          I,
          A,
          O
        ), $e++);
      }
      const Fi = Qe ? ld(Cn) : fn;
      for (ee = Fi.length - 1, T = Me - 1; T >= 0; T--) {
        const Ie = q + T, tt = _[Ie], Mi = Ie + 1 < j ? _[Ie + 1].el : w;
        Cn[T] === 0 ? b(
          null,
          tt,
          m,
          Mi,
          v,
          S,
          I,
          A,
          O
        ) : Qe && (ee < 0 || T !== Fi[ee] ? be(tt, m, Mi, 2) : ee--);
      }
    }
  }, be = (f, _, m, w, v = null) => {
    const { el: S, type: I, transition: A, children: O, shapeFlag: T } = f;
    if (T & 6) {
      be(f.component.subTree, _, m, w);
      return;
    }
    if (T & 128) {
      f.suspense.move(_, m, w);
      return;
    }
    if (T & 64) {
      I.move(f, _, m, Tn);
      return;
    }
    if (I === Te) {
      s(S, _, m);
      for (let k = 0; k < O.length; k++)
        be(O[k], _, m, w);
      s(f.anchor, _, m);
      return;
    }
    if (I === Mn) {
      ne(f, _, m);
      return;
    }
    if (w !== 2 && T & 1 && A)
      if (w === 0)
        A.beforeEnter(S), s(S, _, m), je(() => A.enter(S), v);
      else {
        const { leave: k, delayLeave: M, afterLeave: z } = A, q = () => s(S, _, m), re = () => {
          k(S, () => {
            q(), z && z();
          });
        };
        M ? M(S, q, re) : re();
      }
    else
      s(S, _, m);
  }, Fe = (f, _, m, w = !1, v = !1) => {
    const {
      type: S,
      props: I,
      ref: A,
      children: O,
      dynamicChildren: T,
      shapeFlag: j,
      patchFlag: k,
      dirs: M,
      cacheIndex: z
    } = f;
    if (k === -2 && (v = !1), A != null && Ns(A, null, m, f, !0), z != null && (_.renderCache[z] = void 0), j & 256) {
      _.ctx.deactivate(f);
      return;
    }
    const q = j & 1 && M, re = !Fn(f);
    let ee;
    if (re && (ee = I && I.onVnodeBeforeUnmount) && nt(ee, _, f), j & 6)
      sl(f.component, m, w);
    else {
      if (j & 128) {
        f.suspense.unmount(m, w);
        return;
      }
      q && Ut(f, null, _, "beforeUnmount"), j & 64 ? f.type.remove(
        f,
        _,
        m,
        Tn,
        w
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== Te || k > 0 && k & 64) ? wn(
        T,
        _,
        m,
        !1,
        !0
      ) : (S === Te && k & 384 || !v && j & 16) && wn(O, _, m), w && en(f);
    }
    (re && (ee = I && I.onVnodeUnmounted) || q) && je(() => {
      ee && nt(ee, _, f), q && Ut(f, null, _, "unmounted");
    }, m);
  }, en = (f) => {
    const { type: _, el: m, anchor: w, transition: v } = f;
    if (_ === Te) {
      f.patchFlag > 0 && f.patchFlag & 2048 && v && !v.persisted ? f.children.forEach((I) => {
        I.type === ze ? r(I.el) : en(I);
      }) : Sn(m, w);
      return;
    }
    if (_ === Mn) {
      U(f);
      return;
    }
    const S = () => {
      r(m), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (f.shapeFlag & 1 && v && !v.persisted) {
      const { leave: I, delayLeave: A } = v, O = () => I(m, S);
      A ? A(f.el, S, O) : O();
    } else
      S();
  }, Sn = (f, _) => {
    let m;
    for (; f !== _; )
      m = h(f), r(f), f = m;
    r(_);
  }, sl = (f, _, m) => {
    f.type.__hmrId && of(f);
    const { bum: w, scope: v, job: S, subTree: I, um: A, m: O, a: T } = f;
    Qi(O), Qi(T), w && on(w), v.stop(), S && (S.flags |= 8, Fe(I, f, _, m)), A && je(A, _), je(() => {
      f.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve()), hf(f);
  }, wn = (f, _, m, w = !1, v = !1, S = 0) => {
    for (let I = S; I < f.length; I++)
      Fe(f[I], _, m, w, v);
  }, fs = (f) => {
    if (f.shapeFlag & 6)
      return fs(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const _ = h(f.anchor || f.el), m = _ && _[vf];
    return m ? h(m) : _;
  };
  let fr = !1;
  const Ui = (f, _, m) => {
    f == null ? _._vnode && Fe(_._vnode, null, null, !0) : b(
      _._vnode || null,
      f,
      _,
      null,
      null,
      null,
      m
    ), _._vnode = f, fr || (fr = !0, Ki(), pa(), fr = !1);
  }, Tn = {
    p: b,
    um: Fe,
    m: be,
    r: en,
    mt: xe,
    mc: Q,
    pc: G,
    pbc: P,
    n: fs,
    o: e
  };
  return {
    render: Ui,
    hydrate: void 0,
    createApp: Kf(Ui)
  };
}
function yr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ft({ effect: e, job: t }, n) {
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
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = r[i] = Ct(r[i]), u.el = o.el), !n && u.patchFlag !== -2 && Vr(o, u)), u.type === os && (u.el = o.el), u.type === ze && !u.el && (u.el = o.el);
    }
}
function ld(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, u;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const l = e[s];
    if (l !== 0) {
      if (r = n[n.length - 1], e[r] < l) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        u = i + o >> 1, e[n[u]] < l ? i = u + 1 : o = u;
      l < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function $a(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : $a(t);
}
function Qi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const fd = Symbol.for("v-scx"), dd = () => {
  {
    const e = qt(fd);
    return e || x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Yt(e, t, n) {
  return B(t) || x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ja(e, t, n);
}
function ja(e, t, n = X) {
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
  let l;
  if (Yn) {
    if (i === "sync") {
      const p = dd();
      l = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {
      };
      return p.stop = Ce, p.resume = Ce, p.pause = Ce, p;
    }
  }
  const d = _e;
  u.call = (p, g, b) => dt(p, d, g, b);
  let c = !1;
  i === "post" ? u.scheduler = (p) => {
    je(p, d && d.suspense);
  } : i !== "sync" && (c = !0, u.scheduler = (p, g) => {
    g ? p() : Qs(p);
  }), u.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const h = Jl(e, t, u);
  return Yn && (l ? l.push(h) : a && h()), h;
}
function hd(e, t, n) {
  const s = this.proxy, r = de(e) ? e.includes(".") ? Ba(s, e) : () => s[e] : e.bind(s, s);
  let i;
  B(t) ? i = t : (i = t.handler, n = t);
  const o = us(this), u = ja(r, i.bind(s), n);
  return o(), u;
}
function Ba(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const pd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Je(t)}Modifiers`] || e[`${Rt(t)}Modifiers`];
function _d(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  {
    const {
      emitsOptions: d,
      propsOptions: [c]
    } = e;
    if (d)
      if (!(t in d))
        (!c || !(Mt(Je(t)) in c)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Mt(Je(t))}" prop.`
        );
      else {
        const h = d[t];
        B(h) && (h(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), o = i && pd(s, t.slice(7));
  o && (o.trim && (r = n.map((d) => de(d) ? d.trim() : d)), o.number && (r = n.map(xr))), gf(e, t, r);
  {
    const d = t.toLowerCase();
    d !== t && s[Mt(d)] && x(
      `Event "${d}" is emitted in component ${rr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Rt(
        t
      )}" instead of "${t}".`
    );
  }
  let u, a = s[u = Mt(t)] || // also try camelCase event handler (#2249)
  s[u = Mt(Je(t))];
  !a && i && (a = s[u = Mt(Rt(t))]), a && dt(
    a,
    e,
    6,
    r
  );
  const l = s[u + "Once"];
  if (l) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, dt(
      l,
      e,
      6,
      r
    );
  }
}
function Ha(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, u = !1;
  if (!B(e)) {
    const a = (l) => {
      const d = Ha(l, t, !0);
      d && (u = !0, me(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !u ? (te(e) && s.set(e, null), null) : (V(i) ? i.forEach((a) => o[a] = null) : me(o, i), te(e) && s.set(e, o), o);
}
function tr(e, t) {
  return !e || !ts(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Rt(t)) || Y(e, t));
}
let $r = !1;
function Ms() {
  $r = !0;
}
function eo(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: u,
    emit: a,
    render: l,
    renderCache: d,
    props: c,
    data: h,
    setupState: p,
    ctx: g,
    inheritAttrs: b
  } = e, E = Ls(e);
  let C, $;
  $r = !1;
  try {
    if (n.shapeFlag & 4) {
      const U = r || s, J = p.__isScriptSetup ? new Proxy(U, {
        get(F, he, Q) {
          return x(
            `Property '${String(
              he
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(F, he, Q);
        }
      }) : U;
      C = Ye(
        l.call(
          J,
          U,
          d,
          at(c),
          p,
          h,
          g
        )
      ), $ = u;
    } else {
      const U = t;
      u === c && Ms(), C = Ye(
        U.length > 1 ? U(
          at(c),
          {
            get attrs() {
              return Ms(), at(u);
            },
            slots: o,
            emit: a
          }
        ) : U(
          at(c),
          null
        )
      ), $ = t.props ? u : gd(u);
    }
  } catch (U) {
    Vn.length = 0, rs(U, e, 1), C = Ve(ze);
  }
  let N = C, ne;
  if (C.patchFlag > 0 && C.patchFlag & 2048 && ([N, ne] = Ka(C)), $ && b !== !1) {
    const U = Object.keys($), { shapeFlag: J } = N;
    if (U.length) {
      if (J & 7)
        i && U.some(xs) && ($ = md(
          $,
          i
        )), N = Dt(N, $, !1, !0);
      else if (!$r && N.type !== ze) {
        const F = Object.keys(u), he = [], Q = [];
        for (let D = 0, P = F.length; D < P; D++) {
          const W = F[D];
          ts(W) ? xs(W) || he.push(W[2].toLowerCase() + W.slice(3)) : Q.push(W);
        }
        Q.length && x(
          `Extraneous non-props attributes (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), he.length && x(
          `Extraneous non-emits event listeners (${he.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (to(N) || x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), N = Dt(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && (to(N) || x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), pi(N, n.transition)), ne ? ne(N) : C = N, Ls(E), C;
}
const Ka = (e) => {
  const t = e.children, n = e.dynamicChildren, s = bi(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return Ka(s);
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
      if (r.type !== ze || r.children === "v-if") {
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
const gd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ts(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, md = (e, t) => {
  const n = {};
  for (const s in e)
    (!xs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, to = (e) => e.shapeFlag & 7 || e.type === ze;
function bd(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: u, patchFlag: a } = t, l = i.emitsOptions;
  if ((r || u) && ct || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? no(s, o, l) : !!o;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const h = d[c];
        if (o[h] !== s[h] && !tr(l, h))
          return !0;
      }
    }
  } else
    return (r || u) && (!u || !u.$stable) ? !0 : s === o ? !1 : s ? o ? no(s, o, l) : !0 : !!o;
  return !1;
}
function no(e, t, n) {
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
function vd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const za = (e) => e.__isSuspense;
function yd(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : ha(e);
}
const Te = Symbol.for("v-fgt"), os = Symbol.for("v-txt"), ze = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), Vn = [];
let He = null;
function fe(e = !1) {
  Vn.push(He = e ? null : []);
}
function Ed() {
  Vn.pop(), He = Vn[Vn.length - 1] || null;
}
let Gn = 1;
function so(e, t = !1) {
  Gn += e, e < 0 && He && t && (He.hasOnce = !0);
}
function Wa(e) {
  return e.dynamicChildren = Gn > 0 ? He || fn : null, Ed(), Gn > 0 && He && He.push(e), e;
}
function ve(e, t, n, s, r, i) {
  return Wa(
    ie(
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
function qn(e, t, n, s, r) {
  return Wa(
    Ve(
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
function xn(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = bs.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Sd = (...e) => wd(
  ...e
), Ga = ({ key: e }) => e ?? null, vs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || oe(e) || B(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, s = 0, r = null, i = e === Te ? 0 : 1, o = !1, u = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ga(t),
    ref: t && vs(t),
    scopeId: ya,
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
    ctx: Oe
  };
  return u ? (vi(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), a.key !== a.key && x("VNode created with invalid key (NaN). VNode type:", a.type), Gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  He && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && He.push(a), a;
}
const Ve = Sd;
function wd(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Rf) && (e || x(`Invalid vnode type when creating vnode: ${e}.`), e = ze), nr(e)) {
    const u = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vi(u, n), Gn > 0 && !i && He && (u.shapeFlag & 6 ? He[He.indexOf(e)] = u : He.push(u)), u.patchFlag = -2, u;
  }
  if (Qa(e) && (e = e.__vccOpts), t) {
    t = Td(t);
    let { class: u, style: a } = t;
    u && !de(u) && (t.class = pn(u)), te(a) && (zn(a) && !V(a) && (a = me({}, a)), t.style = oi(a));
  }
  const o = de(e) ? 1 : za(e) ? 128 : yf(e) ? 64 : te(e) ? 4 : B(e) ? 2 : 0;
  return o & 4 && zn(e) && (e = H(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ie(
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
function Td(e) {
  return e ? zn(e) || Da(e) ? me({}, e) : e : null;
}
function Dt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: u, transition: a } = e, l = t ? Od(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ga(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? V(i) ? i.concat(vs(t)) : [i, vs(t)] : vs(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o === -1 && V(u) ? u.map(qa) : u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? o === -1 ? 16 : o | 16 : o,
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
    d,
    a.clone(d)
  ), d;
}
function qa(e) {
  const t = Dt(e);
  return V(e.children) && (t.children = e.children.map(qa)), t;
}
function $n(e = " ", t = 0) {
  return Ve(os, null, e, t);
}
function Cd(e, t) {
  const n = Ve(Mn, null, e);
  return n.staticCount = t, n;
}
function It(e = "", t = !1) {
  return t ? (fe(), qn(ze, null, e)) : Ve(ze, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean" ? Ve(ze) : V(e) ? Ve(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : nr(e) ? Ct(e) : Ve(os, null, String(e));
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
      !r && !Da(t) ? t._ctx = Oe : r === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$n(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Od(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = pn([t.class, s.class]));
      else if (r === "style")
        t.style = oi([t.style, s.style]);
      else if (ts(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(V(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function nt(e, t, n, s = null) {
  dt(e, t, 7, [
    n,
    s
  ]);
}
const Ad = ka();
let xd = 0;
function Id(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Ad, i = {
    uid: xd++,
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
    scope: new Bu(
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
    propsOptions: Na(s, r),
    emitsOptions: Ha(s, r),
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
  return i.ctx = Lf(i), i.root = t ? t.root : i, i.emit = _d.bind(null, i), e.ce && e.ce(i), i;
}
let _e = null;
const Ya = () => _e || Oe;
let Vs, jr;
{
  const e = ns(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), jr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const us = (e) => {
  const t = _e;
  return Vs(e), e.scope.on(), () => {
    e.scope.off(), Vs(t);
  };
}, ro = () => {
  _e && _e.scope.off(), Vs(null);
}, kd = /* @__PURE__ */ yt("slot,component");
function Br(e, { isNativeTag: t }) {
  (kd(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ja(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function Pd(e, t = !1, n = !1) {
  t && jr(t);
  const { props: s, children: r } = e.vnode, i = Ja(e);
  Gf(e, s, i, t), rd(e, r, n);
  const o = i ? Rd(e, t) : void 0;
  return t && jr(!1), o;
}
function Rd(e, t) {
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
        Ea(i[o]);
    }
    s.compilerOptions && Dd() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Aa), Nf(e);
  const { setup: r } = s;
  if (r) {
    Et();
    const i = e.setupContext = r.length > 1 ? Ud(e) : null, o = us(e), u = vn(
      r,
      e,
      0,
      [
        at(e.props),
        i
      ]
    ), a = si(u);
    if (St(), o(), (a || e.sp) && !Fn(e) && Sa(e), a) {
      if (u.then(ro, ro), t)
        return u.then((l) => {
          io(e, l, t);
        }).catch((l) => {
          rs(l, e, 0);
        });
      if (e.asyncDep = u, !e.suspense) {
        const l = (n = s.name) != null ? n : "Anonymous";
        x(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      io(e, u, t);
  } else
    Za(e, t);
}
function io(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) ? (nr(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = aa(t), Uf(e)) : t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Za(e, n);
}
const Dd = () => !0;
function Za(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ce);
  {
    const r = us(e);
    Et();
    try {
      Mf(e);
    } finally {
      St(), r();
    }
  }
  !s.render && e.render === Ce && !t && (s.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", s));
}
const Ld = {
  get(e, t) {
    return Ms(), Ee(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
};
function Nd(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Ee(e, "get", "$slots"), t[n];
    }
  });
}
function Ud(e) {
  const t = (n) => {
    if (e.exposed && x("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (V(n) ? s = "array" : oe(n) && (s = "ref")), s !== "object" && x(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ld));
      },
      get slots() {
        return s || (s = Nd(e));
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  }
}
function sr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(aa(xt(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Wt)
        return Wt[n](e);
    },
    has(t, n) {
      return n in t || n in Wt;
    }
  })) : e.proxy;
}
const Fd = /(?:^|[-_])(\w)/g, Md = (e) => e.replace(Fd, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Xa(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rr(e, t, n = !1) {
  let s = Xa(t);
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
  return s ? Md(s) : n ? "App" : "Anonymous";
}
function Qa(e) {
  return B(e) && "__vccOpts" in e;
}
const ir = (e, t) => {
  const n = ql(e, t, Yn);
  {
    const s = Ya();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Vd() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      return te(c) ? c.__isVue ? ["div", e, "VueInstance"] : oe(c) ? [
        "div",
        {},
        ["span", e, d(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        u("_value" in c ? c._value : c),
        ">"
      ] : lt(c) ? [
        "div",
        {},
        ["span", e, Ne(c) ? "ShallowReactive" : "Reactive"],
        "<",
        u(c),
        `>${vt(c) ? " (readonly)" : ""}`
      ] : vt(c) ? [
        "div",
        {},
        ["span", e, Ne(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        u(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const h = [];
    c.type.props && c.props && h.push(o("props", H(c.props))), c.setupState !== X && h.push(o("setup", c.setupState)), c.data !== X && h.push(o("data", H(c.data)));
    const p = a(c, "computed");
    p && h.push(o("computed", p));
    const g = a(c, "inject");
    return g && h.push(o("injected", g)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), h;
  }
  function o(c, h) {
    return h = me({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((p) => [
          "div",
          {},
          ["span", s, p + ": "],
          u(h[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function u(c, h = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : te(c) ? ["object", { object: h ? H(c) : c }] : ["span", n, String(c)];
  }
  function a(c, h) {
    const p = c.type;
    if (B(p))
      return;
    const g = {};
    for (const b in c.ctx)
      l(p, b, h) && (g[b] = c.ctx[b]);
    return g;
  }
  function l(c, h, p) {
    const g = c[p];
    if (V(g) && g.includes(h) || te(g) && h in g || c.extends && l(c.extends, h, p) || c.mixins && c.mixins.some((b) => l(b, h, p)))
      return !0;
  }
  function d(c) {
    return Ne(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const oo = "3.5.13", bt = x;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hr;
const uo = typeof window < "u" && window.trustedTypes;
if (uo)
  try {
    Hr = /* @__PURE__ */ uo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    bt(`Error creating trusted types policy: ${e}`);
  }
const ec = Hr ? (e) => Hr.createHTML(e) : (e) => e, $d = "http://www.w3.org/2000/svg", jd = "http://www.w3.org/1998/Math/MathML", _t = typeof document < "u" ? document : null, ao = _t && /* @__PURE__ */ _t.createElement("template"), Bd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? _t.createElementNS($d, e) : t === "mathml" ? _t.createElementNS(jd, e) : n ? _t.createElement(e, { is: n }) : _t.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => _t.createTextNode(e),
  createComment: (e) => _t.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _t.querySelector(e),
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
      ao.innerHTML = ec(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ao.content;
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
}, Hd = Symbol("_vtc");
function Kd(e, t, n) {
  const s = e[Hd];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const co = Symbol("_vod"), zd = Symbol("_vsh"), Wd = Symbol("CSS_VAR_TEXT"), Gd = /(^|;)\s*display\s*:/;
function qd(e, t, n) {
  const s = e.style, r = de(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (de(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          n[u] == null && ys(s, u, "");
        }
      else
        for (const o in t)
          n[o] == null && ys(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), ys(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Wd];
      o && (n += ";" + o), s.cssText = n, i = Gd.test(n);
    }
  } else t && e.removeAttribute("style");
  co in e && (e[co] = i ? s.display : "", e[zd] && (s.display = "none"));
}
const Yd = /[^\\];\s*$/, lo = /\s*!important$/;
function ys(e, t, n) {
  if (V(n))
    n.forEach((s) => ys(e, t, s));
  else if (n == null && (n = ""), Yd.test(n) && bt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Jd(e, t);
    lo.test(n) ? e.setProperty(
      Rt(s),
      n.replace(lo, ""),
      "important"
    ) : e[s] = n;
  }
}
const fo = ["Webkit", "Moz", "ms"], Er = {};
function Jd(e, t) {
  const n = Er[t];
  if (n)
    return n;
  let s = Je(t);
  if (s !== "filter" && s in e)
    return Er[t] = s;
  s = Ys(s);
  for (let r = 0; r < fo.length; r++) {
    const i = fo[r] + s;
    if (i in e)
      return Er[t] = i;
  }
  return t;
}
const ho = "http://www.w3.org/1999/xlink";
function po(e, t, n, s, r, i = yl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ho, t.slice(6, t.length)) : e.setAttributeNS(ho, t, n) : n == null || i && !Vu(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Nt(n) ? String(n) : n
  );
}
function _o(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ec(n) : n);
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
    u === "boolean" ? n = Vu(n) : n == null && u === "string" ? (n = "", o = !0) : u === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    o || bt(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      u
    );
  }
  o && e.removeAttribute(r || t);
}
function an(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Zd(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const go = Symbol("_vei");
function Xd(e, t, n, s, r = null) {
  const i = e[go] || (e[go] = {}), o = i[t];
  if (s && o)
    o.value = bo(s, t);
  else {
    const [u, a] = Qd(t);
    if (s) {
      const l = i[t] = nh(
        bo(s, t),
        r
      );
      an(e, u, l, a);
    } else o && (Zd(e, u, o, a), i[t] = void 0);
  }
}
const mo = /(?:Once|Passive|Capture)$/;
function Qd(e) {
  let t;
  if (mo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(mo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rt(e.slice(2)), t];
}
let Sr = 0;
const eh = /* @__PURE__ */ Promise.resolve(), th = () => Sr || (eh.then(() => Sr = 0), Sr = Date.now());
function nh(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    dt(
      sh(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = th(), n;
}
function bo(e, t) {
  return B(e) || V(e) ? e : (bt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ce);
}
function sh(e, t) {
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
const vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, rh = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Kd(e, s, o) : t === "style" ? qd(e, n, s) : ts(t) ? xs(t) || Xd(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ih(e, t, s, o)) ? (_o(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && po(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !de(s)) ? _o(e, Je(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), po(e, t, s, o));
};
function ih(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vo(t) && B(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return vo(t) && de(n) ? !1 : t in e;
}
const yo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (n) => on(t, n) : t;
};
function oh(e) {
  e.target.composing = !0;
}
function Eo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const wr = Symbol("_assign"), uh = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[wr] = yo(r);
    const i = s || r.props && r.props.type === "number";
    an(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let u = e.value;
      n && (u = u.trim()), i && (u = xr(u)), e[wr](u);
    }), n && an(e, "change", () => {
      e.value = e.value.trim();
    }), t || (an(e, "compositionstart", oh), an(e, "compositionend", Eo), an(e, "change", Eo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[wr] = yo(o), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, a = t ?? "";
    u !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, ah = ["ctrl", "shift", "alt", "meta"], ch = {
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
  exact: (e, t) => ah.some((n) => e[`${n}Key`] && !t.includes(n))
}, lh = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const u = ch[t[o]];
      if (u && u(r, t)) return;
    }
    return e(r, ...i);
  });
}, fh = /* @__PURE__ */ me({ patchProp: rh }, Bd);
let So;
function dh() {
  return So || (So = ud(fh));
}
const hh = (...e) => {
  const t = dh().createApp(...e);
  _h(t), gh(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = mh(s);
    if (!r) return;
    const i = t._component;
    !B(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, ph(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function ph(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _h(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => gl(t) || ml(t) || bl(t),
    writable: !1
  });
}
function gh(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        bt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return bt(s), n;
      },
      set() {
        bt(s);
      }
    });
  }
}
function mh(e) {
  if (de(e)) {
    const t = document.querySelector(e);
    return t || bt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && bt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bh() {
  Vd();
}
bh();
var vh = Object.create, tc = Object.defineProperty, yh = Object.getOwnPropertyDescriptor, yi = Object.getOwnPropertyNames, Eh = Object.getPrototypeOf, Sh = Object.prototype.hasOwnProperty, wh = (e, t) => function() {
  return e && (t = (0, e[yi(e)[0]])(e = 0)), t;
}, Th = (e, t) => function() {
  return t || (0, e[yi(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Ch = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of yi(t))
      !Sh.call(e, r) && r !== n && tc(e, r, { get: () => t[r], enumerable: !(s = yh(t, r)) || s.enumerable });
  return e;
}, Oh = (e, t, n) => (n = e != null ? vh(Eh(e)) : {}, Ch(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  tc(n, "default", { value: e, enumerable: !0 }),
  e
)), as = wh({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Ah = Th({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    as(), t.exports = s;
    function n(i) {
      return i instanceof Buffer ? Buffer.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
    }
    function s(i) {
      if (i = i || {}, i.circles) return r(i);
      const o = /* @__PURE__ */ new Map();
      if (o.set(Date, (c) => new Date(c)), o.set(Map, (c, h) => new Map(a(Array.from(c), h))), o.set(Set, (c, h) => new Set(a(Array.from(c), h))), i.constructorHandlers)
        for (const c of i.constructorHandlers)
          o.set(c[0], c[1]);
      let u = null;
      return i.proto ? d : l;
      function a(c, h) {
        const p = Object.keys(c), g = new Array(p.length);
        for (let b = 0; b < p.length; b++) {
          const E = p[b], C = c[E];
          typeof C != "object" || C === null ? g[E] = C : C.constructor !== Object && (u = o.get(C.constructor)) ? g[E] = u(C, h) : ArrayBuffer.isView(C) ? g[E] = n(C) : g[E] = h(C);
        }
        return g;
      }
      function l(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return a(c, l);
        if (c.constructor !== Object && (u = o.get(c.constructor)))
          return u(c, l);
        const h = {};
        for (const p in c) {
          if (Object.hasOwnProperty.call(c, p) === !1) continue;
          const g = c[p];
          typeof g != "object" || g === null ? h[p] = g : g.constructor !== Object && (u = o.get(g.constructor)) ? h[p] = u(g, l) : ArrayBuffer.isView(g) ? h[p] = n(g) : h[p] = l(g);
        }
        return h;
      }
      function d(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return a(c, d);
        if (c.constructor !== Object && (u = o.get(c.constructor)))
          return u(c, d);
        const h = {};
        for (const p in c) {
          const g = c[p];
          typeof g != "object" || g === null ? h[p] = g : g.constructor !== Object && (u = o.get(g.constructor)) ? h[p] = u(g, d) : ArrayBuffer.isView(g) ? h[p] = n(g) : h[p] = d(g);
        }
        return h;
      }
    }
    function r(i) {
      const o = [], u = [], a = /* @__PURE__ */ new Map();
      if (a.set(Date, (p) => new Date(p)), a.set(Map, (p, g) => new Map(d(Array.from(p), g))), a.set(Set, (p, g) => new Set(d(Array.from(p), g))), i.constructorHandlers)
        for (const p of i.constructorHandlers)
          a.set(p[0], p[1]);
      let l = null;
      return i.proto ? h : c;
      function d(p, g) {
        const b = Object.keys(p), E = new Array(b.length);
        for (let C = 0; C < b.length; C++) {
          const $ = b[C], N = p[$];
          if (typeof N != "object" || N === null)
            E[$] = N;
          else if (N.constructor !== Object && (l = a.get(N.constructor)))
            E[$] = l(N, g);
          else if (ArrayBuffer.isView(N))
            E[$] = n(N);
          else {
            const ne = o.indexOf(N);
            ne !== -1 ? E[$] = u[ne] : E[$] = g(N);
          }
        }
        return E;
      }
      function c(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return d(p, c);
        if (p.constructor !== Object && (l = a.get(p.constructor)))
          return l(p, c);
        const g = {};
        o.push(p), u.push(g);
        for (const b in p) {
          if (Object.hasOwnProperty.call(p, b) === !1) continue;
          const E = p[b];
          if (typeof E != "object" || E === null)
            g[b] = E;
          else if (E.constructor !== Object && (l = a.get(E.constructor)))
            g[b] = l(E, c);
          else if (ArrayBuffer.isView(E))
            g[b] = n(E);
          else {
            const C = o.indexOf(E);
            C !== -1 ? g[b] = u[C] : g[b] = c(E);
          }
        }
        return o.pop(), u.pop(), g;
      }
      function h(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return d(p, h);
        if (p.constructor !== Object && (l = a.get(p.constructor)))
          return l(p, h);
        const g = {};
        o.push(p), u.push(g);
        for (const b in p) {
          const E = p[b];
          if (typeof E != "object" || E === null)
            g[b] = E;
          else if (E.constructor !== Object && (l = a.get(E.constructor)))
            g[b] = l(E, h);
          else if (ArrayBuffer.isView(E))
            g[b] = n(E);
          else {
            const C = o.indexOf(E);
            C !== -1 ? g[b] = u[C] : g[b] = h(E);
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
var nc = typeof navigator < "u", L = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof L.chrome < "u" && L.chrome.devtools;
nc && (L.self, L.top);
var wo;
typeof navigator < "u" && ((wo = navigator.userAgent) == null || wo.toLowerCase().includes("electron"));
as();
var xh = Oh(Ah()), Ih = /(?:^|[-_/])(\w)/g;
function kh(e, t) {
  return t ? t.toUpperCase() : "";
}
function Ph(e) {
  return e && `${e}`.replace(Ih, kh);
}
function Rh(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), r = n.substring(s + 1);
  {
    const i = r.lastIndexOf(t);
    return r.substring(0, i);
  }
}
var To = (0, xh.default)({ circles: !0 });
const Dh = {
  trailing: !0
};
function gn(e, t = 25, n = {}) {
  if (n = { ...Dh, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, r, i = [], o, u;
  const a = (l, d) => (o = Lh(e, l, d), o.finally(() => {
    if (o = null, n.trailing && u && !r) {
      const c = a(l, u);
      return u = null, c;
    }
  }), o);
  return function(...l) {
    return o ? (n.trailing && (u = l), o) : new Promise((d) => {
      const c = !r && n.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const h = n.leading ? s : a(this, l);
        for (const p of i)
          p(h);
        i = [];
      }, t), c ? (s = a(this, l), d(s)) : i.push(d);
    });
  };
}
async function Lh(e, t, n) {
  return await e.apply(t, n);
}
function Kr(e, t = {}, n) {
  for (const s in e) {
    const r = e[s], i = n ? `${n}:${s}` : s;
    typeof r == "object" && r !== null ? Kr(r, t, i) : typeof r == "function" && (t[i] = r);
  }
  return t;
}
const Nh = { run: (e) => e() }, Uh = () => Nh, sc = typeof console.createTask < "u" ? console.createTask : Uh;
function Fh(e, t) {
  const n = t.shift(), s = sc(n);
  return e.reduce(
    (r, i) => r.then(() => s.run(() => i(...t))),
    Promise.resolve()
  );
}
function Mh(e, t) {
  const n = t.shift(), s = sc(n);
  return Promise.all(e.map((r) => s.run(() => r(...t))));
}
function Tr(e, t) {
  for (const n of [...e])
    n(t);
}
class Vh {
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
    return n.unshift(t), this.callHookWith(Fh, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Mh, t, ...n);
  }
  callHookWith(t, n, ...s) {
    const r = this._before || this._after ? { name: n, args: s, context: {} } : void 0;
    this._before && Tr(this._before, r);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      s
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && r && Tr(this._after, r);
    }) : (this._after && r && Tr(this._after, r), i);
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
function rc() {
  return new Vh();
}
var $h = Object.create, ic = Object.defineProperty, jh = Object.getOwnPropertyDescriptor, Ei = Object.getOwnPropertyNames, Bh = Object.getPrototypeOf, Hh = Object.prototype.hasOwnProperty, Kh = (e, t) => function() {
  return e && (t = (0, e[Ei(e)[0]])(e = 0)), t;
}, oc = (e, t) => function() {
  return t || (0, e[Ei(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, zh = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Ei(t))
      !Hh.call(e, r) && r !== n && ic(e, r, { get: () => t[r], enumerable: !(s = jh(t, r)) || s.enumerable });
  return e;
}, Wh = (e, t, n) => (n = e != null ? $h(Bh(e)) : {}, zh(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ic(n, "default", { value: e, enumerable: !0 }),
  e
)), y = Kh({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Gh = oc({
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
      }, a = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), l = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), d = [".", "!", "~", "*", "'", "(", ")"].join(""), c = function(E, C) {
        var $ = "-", N = "", ne = "", U = !0, J = {}, F, he, Q, D, P, W, le, Ae, xe, ue, R, K, G, Xe, Ue = "";
        if (typeof E != "string")
          return "";
        if (typeof C == "string" && ($ = C), le = u.en, Ae = o.en, typeof C == "object") {
          F = C.maintainCase || !1, J = C.custom && typeof C.custom == "object" ? C.custom : J, Q = +C.truncate > 1 && C.truncate || !1, D = C.uric || !1, P = C.uricNoSlash || !1, W = C.mark || !1, U = !(C.symbols === !1 || C.lang === !1), $ = C.separator || $, D && (Ue += a), P && (Ue += l), W && (Ue += d), le = C.lang && u[C.lang] && U ? u[C.lang] : U ? u.en : {}, Ae = C.lang && o[C.lang] ? o[C.lang] : C.lang === !1 || C.lang === !0 ? {} : o.en, C.titleCase && typeof C.titleCase.length == "number" && Array.prototype.toString.call(C.titleCase) ? (C.titleCase.forEach(function(be) {
            J[be + ""] = be + "";
          }), he = !0) : he = !!C.titleCase, C.custom && typeof C.custom.length == "number" && Array.prototype.toString.call(C.custom) && C.custom.forEach(function(be) {
            J[be + ""] = be + "";
          }), Object.keys(J).forEach(function(be) {
            var Fe;
            be.length > 1 ? Fe = new RegExp("\\b" + p(be) + "\\b", "gi") : Fe = new RegExp(p(be), "gi"), E = E.replace(Fe, J[be]);
          });
          for (R in J)
            Ue += R;
        }
        for (Ue += $, Ue = p(Ue), E = E.replace(/(^\s+|\s+$)/g, ""), G = !1, Xe = !1, ue = 0, K = E.length; ue < K; ue++)
          R = E[ue], g(R, J) ? G = !1 : Ae[R] ? (R = G && Ae[R].match(/[A-Za-z0-9]/) ? " " + Ae[R] : Ae[R], G = !1) : R in s ? (ue + 1 < K && r.indexOf(E[ue + 1]) >= 0 ? (ne += R, R = "") : Xe === !0 ? (R = i[ne] + s[R], ne = "") : R = G && s[R].match(/[A-Za-z0-9]/) ? " " + s[R] : s[R], G = !1, Xe = !1) : R in i ? (ne += R, R = "", ue === K - 1 && (R = i[ne]), Xe = !0) : /* process symbol chars */ le[R] && !(D && a.indexOf(R) !== -1) && !(P && l.indexOf(R) !== -1) ? (R = G || N.substr(-1).match(/[A-Za-z0-9]/) ? $ + le[R] : le[R], R += E[ue + 1] !== void 0 && E[ue + 1].match(/[A-Za-z0-9]/) ? $ : "", G = !0) : (Xe === !0 ? (R = i[ne] + R, ne = "", Xe = !1) : G && (/[A-Za-z0-9]/.test(R) || N.substr(-1).match(/A-Za-z0-9]/)) && (R = " " + R), G = !1), N += R.replace(new RegExp("[^\\w\\s" + Ue + "_-]", "g"), $);
        return he && (N = N.replace(/(\w)(\S*)/g, function(be, Fe, en) {
          var Sn = Fe.toUpperCase() + (en !== null ? en : "");
          return Object.keys(J).indexOf(Sn.toLowerCase()) < 0 ? Sn : Sn.toLowerCase();
        })), N = N.replace(/\s+/g, $).replace(new RegExp("\\" + $ + "+", "g"), $).replace(new RegExp("(^\\" + $ + "+|\\" + $ + "+$)", "g"), ""), Q && N.length > Q && (xe = N.charAt(Q) === $, N = N.slice(0, Q), xe || (N = N.slice(0, N.lastIndexOf($)))), !F && !he && (N = N.toLowerCase()), N;
      }, h = function(E) {
        return function($) {
          return c($, E);
        };
      }, p = function(E) {
        return E.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, g = function(b, E) {
        for (var C in E)
          if (E[C] === b)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = c, t.exports.createSlug = h;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return c;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = c, n.createSlug = h;
        } catch {
        }
    }(e);
  }
}), qh = oc({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    y(), t.exports = Gh();
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
function Yh(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function Jh(e) {
  const t = e.__file;
  if (t)
    return Ph(Rh(t, ".vue"));
}
function Co(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Si(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function uc(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, r = Si(e);
  return r ? ((n = r == null ? void 0 : r.types) == null ? void 0 : n.Fragment) === s : !1;
}
function or(e) {
  var t, n, s;
  const r = Yh((e == null ? void 0 : e.type) || {});
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
  const i = Jh((e == null ? void 0 : e.type) || {});
  return i || "Anonymous Component";
}
function Zh(e) {
  var t, n, s;
  const r = (s = (n = (t = e == null ? void 0 : e.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, i = e === (e == null ? void 0 : e.root) ? "root" : e.uid;
  return `${r}:${i}`;
}
function zr(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Xh() {
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
var _s;
function Qh(e) {
  return _s || (_s = document.createRange()), _s.selectNode(e), _s.getBoundingClientRect();
}
function ep(e) {
  const t = Xh();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const r = e.children[n];
    let i;
    if (r.component)
      i = Xt(r.component);
    else if (r.el) {
      const o = r.el;
      o.nodeType === 1 || o.getBoundingClientRect ? i = o.getBoundingClientRect() : o.nodeType === 3 && o.data.trim() && (i = Qh(o));
    }
    i && tp(t, i);
  }
  return t;
}
function tp(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Oo = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Xt(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Oo : uc(e) ? ep(e.subTree) : (t == null ? void 0 : t.nodeType) === 1 ? t == null ? void 0 : t.getBoundingClientRect() : e.subTree.component ? Xt(e.subTree.component) : Oo;
}
y();
function wi(e) {
  return uc(e) ? np(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function np(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...wi(n.component)) : n != null && n.el && t.push(n.el);
  }), t;
}
var ac = "__vue-devtools-component-inspector__", cc = "__vue-devtools-component-inspector__card__", lc = "__vue-devtools-component-inspector__name__", fc = "__vue-devtools-component-inspector__indicator__", dc = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, sp = {
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
}, rp = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function yn() {
  return document.getElementById(ac);
}
function ip() {
  return document.getElementById(cc);
}
function op() {
  return document.getElementById(fc);
}
function up() {
  return document.getElementById(lc);
}
function Ti(e) {
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
  n.id = (t = e.elementId) != null ? t : ac, Object.assign(n.style, {
    ...dc,
    ...Ti(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = cc, Object.assign(s.style, {
    ...sp,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = lc, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const i = document.createElement("i");
  return i.id = fc, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, rp), s.appendChild(r), s.appendChild(i), n.appendChild(s), document.body.appendChild(n), n;
}
function Oi(e) {
  const t = yn(), n = ip(), s = up(), r = op();
  t && (Object.assign(t.style, {
    ...dc,
    ...Ti(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function ap(e) {
  const t = Xt(e);
  if (!t.width && !t.height)
    return;
  const n = or(e);
  yn() ? Oi({ bounds: t, name: n }) : Ci({ bounds: t, name: n });
}
function hc() {
  const e = yn();
  e && (e.style.display = "none");
}
var Wr = null;
function Gr(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Wr = n, n.vnode.el)) {
      const r = Xt(n), i = or(n);
      yn() ? Oi({ bounds: r, name: i }) : Ci({ bounds: r, name: i });
    }
  }
}
function cp(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Wr) {
    const n = Zh(Wr);
    t(n);
  }
}
var $s = null;
function lp() {
  hc(), window.removeEventListener("mouseover", Gr), window.removeEventListener("click", $s, !0), $s = null;
}
function fp() {
  return window.addEventListener("mouseover", Gr), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), cp(n, (s) => {
        window.removeEventListener("click", t, !0), $s = null, window.removeEventListener("mouseover", Gr);
        const r = yn();
        r && (r.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    $s = t, window.addEventListener("click", t, !0);
  });
}
function dp(e) {
  const t = zr(Le.value, e.id);
  if (t) {
    const [n] = wi(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Xt(t), r = document.createElement("div"), i = {
        ...Ti(s),
        position: "absolute"
      };
      Object.assign(r.style, i), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const s = Xt(t);
      if (s.width || s.height) {
        const r = or(t), i = yn();
        i ? Oi({ ...e, name: r, bounds: s }) : Ci({ ...e, name: r, bounds: s }), setTimeout(() => {
          i && (i.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
y();
var Ao, xo;
(xo = (Ao = L).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Ao.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function hp(e) {
  let t = 0;
  const n = setInterval(() => {
    L.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function pp() {
  const e = L.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function _p() {
  return new Promise((e) => {
    function t() {
      pp(), e(L.__VUE_INSPECTOR__);
    }
    L.__VUE_INSPECTOR__ ? t() : hp(() => {
      t();
    });
  });
}
y();
y();
function gp(e) {
  return !!(e && e.__v_isReadonly);
}
function pc(e) {
  return gp(e) ? pc(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Cr(e) {
  return !!(e && e.__v_isRef === !0);
}
function Pn(e) {
  const t = e && e.__v_raw;
  return t ? Pn(t) : e;
}
var mp = class {
  constructor() {
    this.refEditor = new bp();
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
}, bp = class {
  set(e, t) {
    if (Cr(e))
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
    return Cr(e) ? e.value : e;
  }
  isRef(e) {
    return Cr(e) || pc(e);
  }
};
y();
y();
y();
var vp = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function yp() {
  if (!nc || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(vp);
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
var Io, ko;
(ko = (Io = L).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Io.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var Ep = new Proxy(L.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Sp(e, t) {
  ge.timelineLayersState[t.id] = !1, Ep.push({
    ...e,
    descriptorId: t.id,
    appRecord: Si(t.app)
  });
}
var Po, Ro;
(Ro = (Po = L).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Po.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Ai = new Proxy(L.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), _c = gn(() => {
  En.hooks.callHook("sendInspectorToClient", gc());
});
function wp(e, t) {
  var n, s;
  Ai.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Si(t.app)
  }), _c();
}
function gc() {
  return Ai.filter((e) => e.descriptor.app === Le.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function Es(e, t) {
  return Ai.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function Tp() {
  const e = rc();
  e.hook("addInspector", ({ inspector: s, plugin: r }) => {
    wp(s, r.descriptor);
  });
  const t = gn(async ({ inspectorId: s, plugin: r }) => {
    var i;
    if (!s || !((i = r == null ? void 0 : r.descriptor) != null && i.app) || ge.highPerfModeEnabled)
      return;
    const o = Es(s, r.descriptor.app), u = {
      app: r.descriptor.app,
      inspectorId: s,
      filter: (o == null ? void 0 : o.treeFilter) || "",
      rootNodes: []
    };
    await new Promise((a) => {
      e.callHookWith(
        async (l) => {
          await Promise.all(l.map((d) => d(u))), a();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (a) => {
        await Promise.all(a.map((l) => l({
          inspectorId: s,
          rootNodes: u.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = gn(async ({ inspectorId: s, plugin: r }) => {
    var i;
    if (!s || !((i = r == null ? void 0 : r.descriptor) != null && i.app) || ge.highPerfModeEnabled)
      return;
    const o = Es(s, r.descriptor.app), u = {
      app: r.descriptor.app,
      inspectorId: s,
      nodeId: (o == null ? void 0 : o.selectedNodeId) || "",
      state: null
    }, a = {
      currentTab: `custom-inspector:${s}`
    };
    u.nodeId && await new Promise((l) => {
      e.callHookWith(
        async (d) => {
          await Promise.all(d.map((c) => c(u, a))), l();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (l) => {
        await Promise.all(l.map((d) => d({
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
    const o = Es(s, i.descriptor.app);
    o && (o.selectedNodeId = r);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: r }) => {
    Sp(s, r.descriptor);
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
  }), e.hook("getComponentBounds", async ({ instance: s }) => Xt(s)), e.hook("getComponentName", ({ instance: s }) => or(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const r = Le.value.instanceMap.get(s);
    r && ap(r);
  }), e.hook("componentUnhighlight", () => {
    hc();
  }), e;
}
var Do, Lo;
(Lo = (Do = L).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Do.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var No, Uo;
(Uo = (No = L).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (No.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Fo, Mo;
(Mo = (Fo = L).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Fo.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Vo, $o;
($o = (Vo = L).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Vo.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var jo, Bo;
(Bo = (jo = L).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (jo.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Bt = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
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
    timelineLayersState: yp()
  };
}
var Ho, Ko;
(Ko = (Ho = L)[Bt]) != null || (Ho[Bt] = Cp());
var Op = gn((e) => {
  En.hooks.callHook("devtoolsStateUpdated", { state: e });
});
gn((e, t) => {
  En.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var ur = new Proxy(L.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? L.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : L.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), Le = new Proxy(L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function mc() {
  Op({
    ...L[Bt],
    appRecords: ur.value,
    activeAppRecordId: Le.id,
    tabs: L.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: L.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Ap(e) {
  L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, mc();
}
function xp(e) {
  L.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, mc();
}
var ge = new Proxy(L[Bt], {
  get(e, t) {
    return t === "appRecords" ? ur : t === "activeAppRecordId" ? Le.id : t === "tabs" ? L.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? L.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : L[Bt][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...L[Bt] }, e[t] = n, L[Bt][t] = n, !0;
  }
});
function Ip(e = {}) {
  var t, n, s;
  const { file: r, host: i, baseUrl: o = window.location.origin, line: u = 0, column: a = 0 } = e;
  if (r) {
    if (i === "chrome-extension") {
      const l = r.replace(/\\/g, "\\\\"), d = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${d}__open-in-editor?file=${encodeURI(r)}`).then((c) => {
        if (!c.ok) {
          const h = `Opening component ${l} failed`;
          console.log(`%c${h}`, "color:red");
        }
      });
    } else if (ge.vitePluginDetected) {
      const l = (s = L.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : o;
      L.__VUE_INSPECTOR__.openInEditor(l, r, u, a);
    }
  }
}
y();
y();
y();
y();
y();
var zo, Wo;
(Wo = (zo = L).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (zo.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var xi = new Proxy(L.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
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
function Ii(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function kp(e) {
  var t, n, s;
  const r = (n = (t = xi.find((i) => {
    var o;
    return i[0].id === e && !!((o = i[0]) != null && o.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = r == null ? void 0 : r.settings) != null ? s : null;
}
function bc(e, t) {
  var n, s, r;
  const i = Ii(e);
  if (i) {
    const o = localStorage.getItem(i);
    if (o)
      return JSON.parse(o);
  }
  if (e) {
    const o = (s = (n = xi.find((u) => u[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return qr((r = o == null ? void 0 : o.settings) != null ? r : {});
  }
  return qr(t);
}
function Pp(e, t) {
  const n = Ii(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(qr(t)));
}
function Rp(e, t, n) {
  const s = Ii(e), r = localStorage.getItem(s), i = JSON.parse(r || "{}"), o = {
    ...i,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(o)), En.hooks.callHookWith(
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
var Go, qo, Be = (qo = (Go = L).__VUE_DEVTOOLS_HOOK) != null ? qo : Go.__VUE_DEVTOOLS_HOOK = rc(), Dp = {
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
}, vc = {
  on: Dp,
  setupDevToolsPlugin(e, t) {
    return Be.callHook("devtools-plugin:setup", e, t);
  }
}, Lp = class {
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
    const n = gc().find((s) => s.packageName === this.plugin.descriptor.packageName);
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
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Pp(e.id, this.plugin.descriptor.settings);
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
    return bc(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, Np = Lp;
y();
y();
y();
y();
var Up = "__vue_devtool_undefined__", Fp = "__vue_devtool_infinity__", Mp = "__vue_devtool_negative_infinity__", Vp = "__vue_devtool_nan__";
y();
y();
var $p = {
  [Up]: "undefined",
  [Vp]: "NaN",
  [Fp]: "Infinity",
  [Mp]: "-Infinity"
};
Object.entries($p).reduce((e, [t, n]) => (e[n] = t, e), {});
y();
y();
y();
y();
y();
var Yo, Jo;
(Jo = (Yo = L).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Yo.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function yc(e, t) {
  return vc.setupDevToolsPlugin(e, t);
}
function jp(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const r = new Np({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: En
  });
  n.packageName === "vuex" && r.on.editInspectorState((i) => {
    r.sendInspectorState(i.inspectorId);
  }), s(r);
}
function Ec(e, t) {
  L.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ge.highPerfModeEnabled && !(t != null && t.inspectingComponent) || (L.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), xi.forEach((n) => {
    jp(n, e);
  }));
}
y();
y();
var Jn = "__VUE_DEVTOOLS_ROUTER__", mn = "__VUE_DEVTOOLS_ROUTER_INFO__", Zo, Xo;
(Xo = (Zo = L)[mn]) != null || (Zo[mn] = {
  currentRoute: null,
  routes: []
});
var Qo, eu;
(eu = (Qo = L)[Jn]) != null || (Qo[Jn] = {});
new Proxy(L[mn], {
  get(e, t) {
    return L[mn][t];
  }
});
new Proxy(L[Jn], {
  get(e, t) {
    if (t === "value")
      return L[Jn];
  }
});
function Bp(e) {
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
function Hp(e) {
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
function Kp(e, t) {
  function n() {
    var s;
    const r = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, i = Hp(r == null ? void 0 : r.currentRoute.value), o = ki(Bp(r)), u = console.warn;
    console.warn = () => {
    }, L[mn] = {
      currentRoute: i ? To(i) : {},
      routes: To(o)
    }, L[Jn] = r, console.warn = u;
  }
  n(), vc.on.componentUpdated(gn(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ge.highPerfModeEnabled && En.hooks.callHook("routerInfoUpdated", { state: L[mn] }));
  }, 200));
}
function zp(e) {
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
      const n = new mp(), s = {
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
      const n = Es(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return fp();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return lp();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = zr(Le.value, t);
      if (n)
        return (n == null ? void 0 : n.type) instanceof Function ? n.type.toString() : n.render.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return dp({ id: t });
    },
    // open in editor
    openInEditor: Ip,
    // get vue inspector
    getVueInspector: _p,
    // toggle app
    toggleApp(t, n) {
      const s = ur.value.find((r) => r.id === t);
      s && (xp(t), Ap(s), Kp(s, Le), _c(), Ec(s.app, n));
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
      Rp(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: kp(t),
        values: bc(t)
      };
    }
  };
}
y();
var tu, nu;
(nu = (tu = L).__VUE_DEVTOOLS_ENV__) != null || (tu.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var su = Tp(), ru, iu;
(iu = (ru = L).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (ru.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: su,
  get state() {
    return {
      ...ge,
      activeAppRecordId: Le.id,
      activeAppRecord: Le.value,
      appRecords: ur.value
    };
  },
  api: zp(su)
});
var En = L.__VUE_DEVTOOLS_KIT_CONTEXT__;
y();
Wh(qh());
var ou, uu;
(uu = (ou = L).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (ou.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
y();
function Wp(e) {
  ge.highPerfModeEnabled = e ?? !ge.highPerfModeEnabled, !e && Le.value && Ec(Le.value.app);
}
y();
y();
y();
function Gp(e) {
  ge.devtoolsClientDetected = {
    ...ge.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ge.devtoolsClientDetected).some(Boolean);
  Wp(!t);
}
var au, cu;
(cu = (au = L).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (au.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = Gp);
y();
y();
y();
y();
y();
y();
y();
var qp = class {
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
}, Sc = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new qp();
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
}, Yp = class extends Sc {
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
function Jp(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function Zp(e, t) {
  const n = Jp(e);
  if ("find" in n)
    return n.find(t);
  const s = n;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t(i))
      return i;
  }
}
function bn(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function Ss(e, t) {
  return e.indexOf(t) !== -1;
}
function lu(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var Xp = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return Zp(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
y();
y();
var Qp = (e) => Object.prototype.toString.call(e).slice(8, -1), wc = (e) => typeof e > "u", e_ = (e) => e === null, Zn = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Yr = (e) => Zn(e) && Object.keys(e).length === 0, Lt = (e) => Array.isArray(e), t_ = (e) => typeof e == "string", n_ = (e) => typeof e == "number" && !isNaN(e), s_ = (e) => typeof e == "boolean", r_ = (e) => e instanceof RegExp, Xn = (e) => e instanceof Map, Qn = (e) => e instanceof Set, Tc = (e) => Qp(e) === "Symbol", i_ = (e) => e instanceof Date && !isNaN(e.valueOf()), o_ = (e) => e instanceof Error, fu = (e) => typeof e == "number" && isNaN(e), u_ = (e) => s_(e) || e_(e) || wc(e) || n_(e) || t_(e) || Tc(e), a_ = (e) => typeof e == "bigint", c_ = (e) => e === 1 / 0 || e === -1 / 0, l_ = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), f_ = (e) => e instanceof URL;
y();
var Cc = (e) => e.replace(/\./g, "\\."), Or = (e) => e.map(String).map(Cc).join("."), jn = (e) => {
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
var Oc = [
  st(wc, "undefined", () => null, () => {
  }),
  st(a_, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  st(i_, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  st(o_, "Error", (e, t) => {
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
  st(r_, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  st(
    Qn,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  st(Xn, "map", (e) => [...e.entries()], (e) => new Map(e)),
  st((e) => fu(e) || c_(e), "number", (e) => fu(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  st((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  st(f_, "URL", (e) => e.toString(), (e) => new URL(e))
];
function ar(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Ac = ar((e, t) => Tc(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), d_ = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), xc = ar(l_, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = d_[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Ic(e, t) {
  return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var kc = ar(Ic, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Pc = ar((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), h_ = [kc, Ac, Pc, xc], du = (e, t) => {
  const n = lu(h_, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = lu(Oc, (r) => r.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, Rc = {};
Oc.forEach((e) => {
  Rc[e.annotation] = e;
});
var p_ = (e, t, n) => {
  if (Lt(t))
    switch (t[0]) {
      case "symbol":
        return Ac.untransform(e, t, n);
      case "class":
        return kc.untransform(e, t, n);
      case "custom":
        return Pc.untransform(e, t, n);
      case "typed-array":
        return xc.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = Rc[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
};
y();
var cn = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function Dc(e) {
  if (Ss(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Ss(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Ss(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var __ = (e, t) => {
  Dc(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Qn(e))
      e = cn(e, +s);
    else if (Xn(e)) {
      const r = +s, i = +t[++n] == 0 ? "key" : "value", o = cn(e, r);
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
  if (Dc(t), t.length === 0)
    return n(e);
  let s = e;
  for (let i = 0; i < t.length - 1; i++) {
    const o = t[i];
    if (Lt(s)) {
      const u = +o;
      s = s[u];
    } else if (Zn(s))
      s = s[o];
    else if (Qn(s)) {
      const u = +o;
      s = cn(s, u);
    } else if (Xn(s)) {
      if (i === t.length - 2)
        break;
      const a = +o, l = +t[++i] == 0 ? "key" : "value", d = cn(s, a);
      switch (l) {
        case "key":
          s = d;
          break;
        case "value":
          s = s.get(d);
          break;
      }
    }
  }
  const r = t[t.length - 1];
  if (Lt(s) ? s[+r] = n(s[+r]) : Zn(s) && (s[r] = n(s[r])), Qn(s)) {
    const i = cn(s, +r), o = n(i);
    i !== o && (s.delete(i), s.add(o));
  }
  if (Xn(s)) {
    const i = +t[t.length - 2], o = cn(s, i);
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
    bn(e, (i, o) => Zr(i, t, [...n, ...jn(o)]));
    return;
  }
  const [s, r] = e;
  r && bn(r, (i, o) => {
    Zr(i, t, [...n, ...jn(o)]);
  }), t(s, n);
}
function g_(e, t, n) {
  return Zr(t, (s, r) => {
    e = Jr(e, r, (i) => p_(i, s, n));
  }), e;
}
function m_(e, t) {
  function n(s, r) {
    const i = __(e, jn(r));
    s.map(jn).forEach((o) => {
      e = Jr(e, o, () => i);
    });
  }
  if (Lt(t)) {
    const [s, r] = t;
    s.forEach((i) => {
      e = Jr(e, jn(i), () => e);
    }), r && bn(r, n);
  } else
    bn(t, n);
  return e;
}
var b_ = (e, t) => Zn(e) || Lt(e) || Xn(e) || Qn(e) || Ic(e, t);
function v_(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function y_(e, t) {
  const n = {};
  let s;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((u) => u.map(String)).sort((u, a) => u.length - a.length));
    const [i, ...o] = r;
    i.length === 0 ? s = o.map(Or) : n[Or(i)] = o.map(Or);
  }), s ? Yr(n) ? [s] : [s, n] : Yr(n) ? void 0 : n;
}
var Lc = (e, t, n, s, r = [], i = [], o = /* @__PURE__ */ new Map()) => {
  var u;
  const a = u_(e);
  if (!a) {
    v_(e, r, t);
    const g = o.get(e);
    if (g)
      return s ? {
        transformedValue: null
      } : g;
  }
  if (!b_(e, n)) {
    const g = du(e, n), b = g ? {
      transformedValue: g.value,
      annotations: [g.type]
    } : {
      transformedValue: e
    };
    return a || o.set(e, b), b;
  }
  if (Ss(i, e))
    return {
      transformedValue: null
    };
  const l = du(e, n), d = (u = l == null ? void 0 : l.value) != null ? u : e, c = Lt(d) ? [] : {}, h = {};
  bn(d, (g, b) => {
    if (b === "__proto__" || b === "constructor" || b === "prototype")
      throw new Error(`Detected property ${b}. This is a prototype pollution risk, please remove it from your object.`);
    const E = Lc(g, t, n, s, [...r, b], [...i, e], o);
    c[b] = E.transformedValue, Lt(E.annotations) ? h[b] = E.annotations : Zn(E.annotations) && bn(E.annotations, (C, $) => {
      h[Cc(b) + "." + $] = C;
    });
  });
  const p = Yr(h) ? {
    transformedValue: c,
    annotations: l ? [l.type] : void 0
  } : {
    transformedValue: c,
    annotations: l ? [l.type, h] : h
  };
  return a || o.set(e, p), p;
};
y();
y();
function Nc(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function hu(e) {
  return Nc(e) === "Array";
}
function E_(e) {
  if (Nc(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function S_(e, t, n, s, r) {
  const i = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = n), r && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Xr(e, t = {}) {
  if (hu(e))
    return e.map((r) => Xr(r, t));
  if (!E_(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((r, i) => {
    if (hu(t.props) && !t.props.includes(i))
      return r;
    const o = e[i], u = Xr(o, t);
    return S_(r, i, u, e, t.nonenumerable), r;
  }, {});
}
var ae = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new Yp(), this.symbolRegistry = new Sc((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new Xp(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = Lc(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const r = y_(t, this.dedupe);
    return r && (s.meta = {
      ...s.meta,
      referentialEqualities: r
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Xr(t);
    return n != null && n.values && (s = g_(s, n.values, this)), n != null && n.referentialEqualities && (s = m_(s, n.referentialEqualities)), s;
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
var pu, _u;
(_u = (pu = L).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (pu.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var gu, mu;
(mu = (gu = L).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (gu.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var bu, vu;
(vu = (bu = L).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (bu.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var yu, Eu;
(Eu = (yu = L).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (yu.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Su, wu;
(wu = (Su = L).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Su.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Tu, Cu;
(Cu = (Tu = L).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Tu.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
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
const es = (e) => Qr = e, Uc = Symbol("pinia");
function Qt(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ft;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ft || (ft = {}));
const Jt = typeof window < "u", Ou = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function w_(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Pi(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    Vc(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function Fc(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function ws(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Ts = typeof navigator == "object" ? navigator : { userAgent: "" }, Mc = /Macintosh/.test(Ts.userAgent) && /AppleWebKit/.test(Ts.userAgent) && !/Safari/.test(Ts.userAgent), Vc = Jt ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Mc ? T_ : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ts ? C_ : (
      // Fallback to using FileReader and a popup
      O_
    )
  )
) : () => {
};
function T_(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? Fc(s.href) ? Pi(e, t, n) : (s.target = "_blank", ws(s)) : ws(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    ws(s);
  }, 0));
}
function C_(e, t = "download", n) {
  if (typeof e == "string")
    if (Fc(e))
      Pi(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        ws(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(w_(e, n), t);
}
function O_(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Pi(e, t, n);
  const r = e.type === "application/octet-stream", i = /constructor/i.test(String(Ou.HTMLElement)) || "safari" in Ou, o = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((o || r && i || Mc) && typeof FileReader < "u") {
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
function ye(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Ri(e) {
  return "_a" in e && "install" in e;
}
function $c() {
  if (!("clipboard" in navigator))
    return ye("Your browser doesn't support the Clipboard API", "error"), !0;
}
function jc(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (ye('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function A_(e) {
  if (!$c())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), ye("Global state copied to clipboard.");
    } catch (t) {
      if (jc(t))
        return;
      ye("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function x_(e) {
  if (!$c())
    try {
      Bc(e, JSON.parse(await navigator.clipboard.readText())), ye("Global state pasted from clipboard.");
    } catch (t) {
      if (jc(t))
        return;
      ye("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function I_(e) {
  try {
    Vc(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    ye("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let pt;
function k_() {
  pt || (pt = document.createElement("input"), pt.type = "file", pt.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      pt.onchange = async () => {
        const s = pt.files;
        if (!s)
          return t(null);
        const r = s.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, pt.oncancel = () => t(null), pt.onerror = n, pt.click();
    });
  }
  return e;
}
async function P_(e) {
  try {
    const n = await k_()();
    if (!n)
      return;
    const { text: s, file: r } = n;
    Bc(e, JSON.parse(s)), ye(`Global state imported from "${r.name}".`);
  } catch (t) {
    ye("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Bc(e, t) {
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
const Hc = "🍍 Pinia (root)", Cs = "_root";
function R_(e) {
  return Ri(e) ? {
    id: Cs,
    label: Hc
  } : {
    id: e.$id,
    label: e.$id
  };
}
function D_(e) {
  if (Ri(e)) {
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
function L_(e) {
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
function N_(e) {
  switch (e) {
    case ft.direct:
      return "mutation";
    case ft.patchFunction:
      return "$patch";
    case ft.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let ln = !0;
const Os = [], $t = "pinia:mutations", Se = "pinia", { assign: U_ } = Object, js = (e) => "🍍 " + e;
function F_(e, t) {
  yc({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Os,
    app: e
  }, (n) => {
    typeof n.now != "function" && ye("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: $t,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Se,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            A_(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await x_(t), n.sendInspectorTree(Se), n.sendInspectorState(Se);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            I_(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await P_(t), n.sendInspectorTree(Se), n.sendInspectorState(Se);
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
            r ? typeof r.$reset != "function" ? ye(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), ye(`Store "${s}" reset.`)) : ye(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s) => {
      const r = s.componentInstance && s.componentInstance.proxy;
      if (r && r._pStores) {
        const i = s.componentInstance.proxy._pStores;
        Object.values(i).forEach((o) => {
          s.instanceData.state.push({
            type: js(o.$id),
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
            type: js(o.$id),
            key: "getters",
            editable: !1,
            value: o._getters.reduce((u, a) => {
              try {
                u[a] = o[a];
              } catch (l) {
                u[a] = l;
              }
              return u;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === Se) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? r.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(s.filter.toLowerCase()) : Hc.toLowerCase().includes(s.filter.toLowerCase())) : r).map(R_);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === Se) {
        const r = s.nodeId === Cs ? t : t._s.get(s.nodeId);
        if (!r)
          return;
        r && (s.nodeId !== Cs && (globalThis.$store = H(r)), s.state = D_(r));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === Se) {
        const r = s.nodeId === Cs ? t : t._s.get(s.nodeId);
        if (!r)
          return ye(`store "${s.nodeId}" not found`, "error");
        const { path: i } = s;
        Ri(r) ? i.unshift("state") : (i.length !== 1 || !r._customProperties.has(i[0]) || i[0] in r.$state) && i.unshift("$state"), ln = !1, s.set(r, i, s.state.value), ln = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const r = s.type.replace(/^🍍\s*/, ""), i = t._s.get(r);
        if (!i)
          return ye(`store "${r}" not found`, "error");
        const { path: o } = s;
        if (o[0] !== "state")
          return ye(`Invalid path for store "${r}":
${o}
Only state can be modified.`);
        o[0] = "$state", ln = !1, s.set(i, o, s.state.value), ln = !0;
      }
    });
  });
}
function M_(e, t) {
  Os.includes(js(t.$id)) || Os.push(js(t.$id)), yc({
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
    t.$onAction(({ after: o, onError: u, name: a, args: l }) => {
      const d = Kc++;
      n.addTimelineEvent({
        layerId: $t,
        event: {
          time: s(),
          title: "🛫 " + a,
          subtitle: "start",
          data: {
            store: qe(t.$id),
            action: qe(a),
            args: l
          },
          groupId: d
        }
      }), o((c) => {
        kt = void 0, n.addTimelineEvent({
          layerId: $t,
          event: {
            time: s(),
            title: "🛬 " + a,
            subtitle: "end",
            data: {
              store: qe(t.$id),
              action: qe(a),
              args: l,
              result: c
            },
            groupId: d
          }
        });
      }), u((c) => {
        kt = void 0, n.addTimelineEvent({
          layerId: $t,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + a,
            subtitle: "end",
            data: {
              store: qe(t.$id),
              action: qe(a),
              args: l,
              error: c
            },
            groupId: d
          }
        });
      });
    }, !0), t._customProperties.forEach((o) => {
      Yt(() => ot(t[o]), (u, a) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Se), ln && n.addTimelineEvent({
          layerId: $t,
          event: {
            time: s(),
            title: "Change",
            subtitle: o,
            data: {
              newValue: u,
              oldValue: a
            },
            groupId: kt
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: o, type: u }, a) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Se), !ln)
        return;
      const l = {
        time: s(),
        title: N_(u),
        data: U_({ store: qe(t.$id) }, L_(o)),
        groupId: kt
      };
      u === ft.patchFunction ? l.subtitle = "⤵️" : u === ft.patchObject ? l.subtitle = "🧩" : o && !Array.isArray(o) && (l.subtitle = o.type), o && (l.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: o
        }
      }), n.addTimelineEvent({
        layerId: $t,
        event: l
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = xt((o) => {
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
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Se), n.sendInspectorState(Se);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(Se), n.sendInspectorState(Se), n.getSettings().logStoreChanges && ye(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Se), n.sendInspectorState(Se), n.getSettings().logStoreChanges && ye(`"${t.$id}" store installed 🆕`);
  });
}
let Kc = 0, kt;
function Au(e, t, n) {
  const s = t.reduce((r, i) => (r[i] = H(e)[i], r), {});
  for (const r in s)
    e[r] = function() {
      const i = Kc, o = n ? new Proxy(e, {
        get(...a) {
          return kt = i, Reflect.get(...a);
        },
        set(...a) {
          return kt = i, Reflect.set(...a);
        }
      }) : e;
      kt = i;
      const u = s[r].apply(o, arguments);
      return kt = void 0, u;
    };
}
function V_({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      Au(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      H(t)._hotUpdate = function(r) {
        s.apply(this, arguments), Au(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    M_(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function $_() {
  const e = Hu(!0), t = e.run(() => Ke({}));
  let n = [], s = [];
  const r = xt({
    install(i) {
      es(r), r._a = i, i.provide(Uc, r), i.config.globalProperties.$pinia = r, Jt && F_(i, r), s.forEach((o) => n.push(o)), s = [];
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
  return Jt && typeof Proxy < "u" && r.use(V_), r;
}
function zc(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Qt(r) && Qt(s) && !oe(s) && !lt(s) ? e[n] = zc(r, s) : e[n] = s;
  }
  return e;
}
const j_ = () => {
};
function xu(e, t, n, s = j_) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && Ku() && El(r), r;
}
function rn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const B_ = (e) => e(), Iu = Symbol(), Ar = Symbol();
function ei(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    Qt(r) && Qt(s) && e.hasOwnProperty(n) && !oe(s) && !lt(s) ? e[n] = ei(r, s) : e[n] = s;
  }
  return e;
}
const H_ = Symbol("pinia:skipHydration");
function K_(e) {
  return !Qt(e) || !e.hasOwnProperty(H_);
}
const { assign: We } = Object;
function ku(e) {
  return !!(oe(e) && e.effect);
}
function Pu(e, t, n, s) {
  const { state: r, actions: i, getters: o } = t, u = n.state.value[e];
  let a;
  function l() {
    !u && !s && (n.state.value[e] = r ? r() : {});
    const d = /* use ref() to unwrap refs inside state TODO: check if this is still necessary */ Hi(s ? Ke(r ? r() : {}).value : n.state.value[e]);
    return We(d, i, Object.keys(o || {}).reduce((c, h) => (h in d && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${e}".`), c[h] = xt(ir(() => {
      es(n);
      const p = n._s.get(e);
      return o[h].call(p, p);
    })), c), {}));
  }
  return a = ti(e, l, t, n, s, !0), a;
}
function ti(e, t, n = {}, s, r, i) {
  let o;
  const u = We({ actions: {} }, n);
  if (!s._e.active)
    throw new Error("Pinia destroyed");
  const a = { deep: !0 };
  a.onTrigger = (D) => {
    l ? p = D : l == !1 && !F._hotUpdating && (Array.isArray(p) ? p.push(D) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  };
  let l, d, c = [], h = [], p;
  const g = s.state.value[e];
  !i && !g && !r && (s.state.value[e] = {});
  const b = Ke({});
  let E;
  function C(D) {
    let P;
    l = d = !1, p = [], typeof D == "function" ? (D(s.state.value[e]), P = {
      type: ft.patchFunction,
      storeId: e,
      events: p
    }) : (ei(s.state.value[e], D), P = {
      type: ft.patchObject,
      payload: D,
      storeId: e,
      events: p
    });
    const W = E = Symbol();
    _n().then(() => {
      E === W && (l = !0);
    }), d = !0, rn(c, P, s.state.value[e]);
  }
  const $ = i ? function() {
    const { state: P } = n, W = P ? P() : {};
    this.$patch((le) => {
      We(le, W);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function N() {
    o.stop(), c = [], h = [], s._s.delete(e);
  }
  const ne = (D, P = "") => {
    if (Iu in D)
      return D[Ar] = P, D;
    const W = function() {
      es(s);
      const le = Array.from(arguments), Ae = [], xe = [];
      function ue(G) {
        Ae.push(G);
      }
      function R(G) {
        xe.push(G);
      }
      rn(h, {
        args: le,
        name: W[Ar],
        store: F,
        after: ue,
        onError: R
      });
      let K;
      try {
        K = D.apply(this && this.$id === e ? this : F, le);
      } catch (G) {
        throw rn(xe, G), G;
      }
      return K instanceof Promise ? K.then((G) => (rn(Ae, G), G)).catch((G) => (rn(xe, G), Promise.reject(G))) : (rn(Ae, K), K);
    };
    return W[Iu] = !0, W[Ar] = P, W;
  }, U = /* @__PURE__ */ xt({
    actions: {},
    getters: {},
    state: [],
    hotState: b
  }), J = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: xu.bind(null, h),
    $patch: C,
    $reset: $,
    $subscribe(D, P = {}) {
      const W = xu(c, D, P.detached, () => le()), le = o.run(() => Yt(() => s.state.value[e], (Ae) => {
        (P.flush === "sync" ? d : l) && D({
          storeId: e,
          type: ft.direct,
          events: p
        }, Ae);
      }, We({}, a, P)));
      return W;
    },
    $dispose: N
  }, F = ss(We(
    {
      _hmrPayload: U,
      _customProperties: xt(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    J
    // must be added later
    // setupStore
  ));
  s._s.set(e, F);
  const Q = (s._a && s._a.runWithContext || B_)(() => s._e.run(() => (o = Hu()).run(() => t({ action: ne }))));
  for (const D in Q) {
    const P = Q[D];
    if (oe(P) && !ku(P) || lt(P))
      r ? b.value[D] = gr(Q, D) : i || (g && K_(P) && (oe(P) ? P.value = g[D] : ei(P, g[D])), s.state.value[e][D] = P), U.state.push(D);
    else if (typeof P == "function") {
      const W = r ? P : ne(P, D);
      Q[D] = W, U.actions[D] = P, u.actions[D] = P;
    } else
      ku(P) && (U.getters[D] = i ? (
        // @ts-expect-error
        n.getters[D]
      ) : P, Jt && (Q._getters || // @ts-expect-error: same
      (Q._getters = xt([]))).push(D));
  }
  if (We(F, Q), We(H(F), Q), Object.defineProperty(F, "$state", {
    get: () => r ? b.value : s.state.value[e],
    set: (D) => {
      if (r)
        throw new Error("cannot set hotState");
      C((P) => {
        We(P, D);
      });
    }
  }), F._hotUpdate = xt((D) => {
    F._hotUpdating = !0, D._hmrPayload.state.forEach((P) => {
      if (P in F.$state) {
        const W = D.$state[P], le = F.$state[P];
        typeof W == "object" && Qt(W) && Qt(le) ? zc(W, le) : D.$state[P] = le;
      }
      F[P] = gr(D.$state, P);
    }), Object.keys(F.$state).forEach((P) => {
      P in D.$state || delete F[P];
    }), l = !1, d = !1, s.state.value[e] = gr(D._hmrPayload, "hotState"), d = !0, _n().then(() => {
      l = !0;
    });
    for (const P in D._hmrPayload.actions) {
      const W = D[P];
      F[P] = //
      ne(W, P);
    }
    for (const P in D._hmrPayload.getters) {
      const W = D._hmrPayload.getters[P], le = i ? (
        // special handling of options api
        ir(() => (es(s), W.call(F, F)))
      ) : W;
      F[P] = //
      le;
    }
    Object.keys(F._hmrPayload.getters).forEach((P) => {
      P in D._hmrPayload.getters || delete F[P];
    }), Object.keys(F._hmrPayload.actions).forEach((P) => {
      P in D._hmrPayload.actions || delete F[P];
    }), F._hmrPayload = D._hmrPayload, F._getters = D._getters, F._hotUpdating = !1;
  }), Jt) {
    const D = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((P) => {
      Object.defineProperty(F, P, We({ value: F[P] }, D));
    });
  }
  return s._p.forEach((D) => {
    if (Jt) {
      const P = o.run(() => D({
        store: F,
        app: s._a,
        pinia: s,
        options: u
      }));
      Object.keys(P || {}).forEach((W) => F._customProperties.add(W)), We(F, P);
    } else
      We(F, o.run(() => D({
        store: F,
        app: s._a,
        pinia: s,
        options: u
      })));
  }), F.$state && typeof F.$state == "object" && typeof F.$state.constructor == "function" && !F.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${F.$id}".`), g && i && n.hydrate && n.hydrate(F.$state, g), l = !0, d = !0, F;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Di(e, t, n) {
  let s;
  const r = typeof t == "function";
  s = r ? n : t;
  function i(o, u) {
    const a = Wf();
    if (o = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    o || (a ? qt(Uc, null) : null), o && es(o), !Qr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = Qr, o._s.has(e) || (r ? ti(e, t, s, o) : Pu(e, s, o), i._pinia = o);
    const l = o._s.get(e);
    if (u) {
      const d = "__hot:" + e, c = r ? ti(d, t, s, o, !0) : Pu(d, We({}, s), o, !0);
      u._hotUpdate(c), delete o.state.value[d], o._s.delete(d);
    }
    if (Jt) {
      const d = Ya();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !u) {
        const c = d.proxy, h = "_pStores" in c ? c._pStores : c._pStores = {};
        h[e] = l;
      }
    }
    return l;
  }
  return i.$id = e, i;
}
const z_ = /* @__PURE__ */ Di("user", () => {
  const e = Ke(""), t = Ke("");
  function n({ name: s, email: r }) {
    e.value = s || "", t.value = r || "";
  }
  return { name: e, email: t, init: n };
}), Bs = {
  MESSAGE: "message",
  SYSTEM: "system",
  FORM: "form",
  DATE: "date"
}, Wc = {
  INCOMING: "incoming",
  OUTGOING: "outgoing"
}, jt = {
  SENT: "sent",
  SENDING: "sending",
  WAITING: "waiting",
  FAILED: "failed",
  RECEIVED: "received"
}, cs = /* @__PURE__ */ Di("chat", () => {
  const e = Ke(!1), t = Ke(!1), n = Ke([]);
  function s({ history: i = [] } = {}) {
    n.value = i;
  }
  function r(i) {
    let o = -1;
    const u = i.clientId || i.id || null, a = i.serverId || null;
    if (u && (o = n.value.findIndex(
      (l) => l.id === u || l.clientId === u
    )), o === -1 && a && (o = n.value.findIndex((l) => l.id === a)), o !== -1) {
      const l = n.value[o];
      n.value[o] = {
        ...l,
        ...i,
        clientId: u,
        id: a || u
      };
    } else
      n.value.push({
        ...i,
        clientId: u,
        id: a || u
      });
  }
  return {
    isStarted: t,
    isLoading: e,
    items: n,
    init: s,
    add: r
  };
});
function Rn(e, t, n, s) {
  function r(i) {
    return i instanceof n ? i : new n(function(o) {
      o(i);
    });
  }
  return new (n || (n = Promise))(function(i, o) {
    function u(d) {
      try {
        l(s.next(d));
      } catch (c) {
        o(c);
      }
    }
    function a(d) {
      try {
        l(s.throw(d));
      } catch (c) {
        o(c);
      }
    }
    function l(d) {
      d.done ? i(d.value) : r(d.value).then(u, a);
    }
    l((s = s.apply(e, [])).next());
  });
}
function W_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Li = { exports: {} }, hn = typeof Reflect == "object" ? Reflect : null, Ru = hn && typeof hn.apply == "function" ? hn.apply : function(t, n, s) {
  return Function.prototype.apply.call(t, n, s);
}, As;
hn && typeof hn.ownKeys == "function" ? As = hn.ownKeys : Object.getOwnPropertySymbols ? As = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : As = function(t) {
  return Object.getOwnPropertyNames(t);
};
function G_(e) {
  console && console.warn && console.warn(e);
}
var Gc = Number.isNaN || function(t) {
  return t !== t;
};
function se() {
  se.init.call(this);
}
Li.exports = se;
Li.exports.once = Z_;
se.EventEmitter = se;
se.prototype._events = void 0;
se.prototype._eventsCount = 0;
se.prototype._maxListeners = void 0;
var Du = 10;
function cr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(se, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Du;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Gc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Du = e;
  }
});
se.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
se.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Gc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function qc(e) {
  return e._maxListeners === void 0 ? se.defaultMaxListeners : e._maxListeners;
}
se.prototype.getMaxListeners = function() {
  return qc(this);
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
    Ru(a, this, n);
  else
    for (var l = a.length, d = Qc(a, l), s = 0; s < l; ++s)
      Ru(d[s], this, n);
  return !0;
};
function Yc(e, t, n, s) {
  var r, i, o;
  if (cr(n), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), i = e._events), o = i[t]), o === void 0)
    o = i[t] = n, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[t] = s ? [n, o] : [o, n] : s ? o.unshift(n) : o.push(n), r = qc(e), r > 0 && o.length > r && !o.warned) {
    o.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, G_(u);
  }
  return e;
}
se.prototype.addListener = function(t, n) {
  return Yc(this, t, n, !1);
};
se.prototype.on = se.prototype.addListener;
se.prototype.prependListener = function(t, n) {
  return Yc(this, t, n, !0);
};
function q_() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Jc(e, t, n) {
  var s = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, r = q_.bind(s);
  return r.listener = n, s.wrapFn = r, r;
}
se.prototype.once = function(t, n) {
  return cr(n), this.on(t, Jc(this, t, n)), this;
};
se.prototype.prependOnceListener = function(t, n) {
  return cr(n), this.prependListener(t, Jc(this, t, n)), this;
};
se.prototype.removeListener = function(t, n) {
  var s, r, i, o, u;
  if (cr(n), r = this._events, r === void 0)
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
    i === 0 ? s.shift() : Y_(s, i), s.length === 1 && (r[t] = s[0]), r.removeListener !== void 0 && this.emit("removeListener", t, u || n);
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
function Zc(e, t, n) {
  var s = e._events;
  if (s === void 0)
    return [];
  var r = s[t];
  return r === void 0 ? [] : typeof r == "function" ? n ? [r.listener || r] : [r] : n ? J_(r) : Qc(r, r.length);
}
se.prototype.listeners = function(t) {
  return Zc(this, t, !0);
};
se.prototype.rawListeners = function(t) {
  return Zc(this, t, !1);
};
se.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Xc.call(e, t);
};
se.prototype.listenerCount = Xc;
function Xc(e) {
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
  return this._eventsCount > 0 ? As(this._events) : [];
};
function Qc(e, t) {
  for (var n = new Array(t), s = 0; s < t; ++s)
    n[s] = e[s];
  return n;
}
function Y_(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function J_(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function Z_(e, t) {
  return new Promise(function(n, s) {
    function r(o) {
      e.removeListener(t, i), s(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", r), n([].slice.call(arguments));
    }
    el(e, t, i, { once: !0 }), t !== "error" && X_(e, r, { once: !0 });
  });
}
function X_(e, t, n) {
  typeof e.on == "function" && el(e, "error", t, n);
}
function el(e, t, n, s) {
  if (typeof e.on == "function")
    s.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function r(i) {
      s.once && e.removeEventListener(t, r), n(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Q_ = Li.exports, tl = /* @__PURE__ */ W_(Q_), ce;
(function(e) {
  e[e.timeout = 1] = "timeout", e[e.transportClosed = 2] = "transportClosed", e[e.clientDisconnected = 3] = "clientDisconnected", e[e.clientClosed = 4] = "clientClosed", e[e.clientConnectToken = 5] = "clientConnectToken", e[e.clientRefreshToken = 6] = "clientRefreshToken", e[e.subscriptionUnsubscribed = 7] = "subscriptionUnsubscribed", e[e.subscriptionSubscribeToken = 8] = "subscriptionSubscribeToken", e[e.subscriptionRefreshToken = 9] = "subscriptionRefreshToken", e[e.transportWriteError = 10] = "transportWriteError", e[e.connectionClosed = 11] = "connectionClosed", e[e.badConfiguration = 12] = "badConfiguration";
})(ce || (ce = {}));
var At;
(function(e) {
  e[e.connectCalled = 0] = "connectCalled", e[e.transportClosed = 1] = "transportClosed", e[e.noPing = 2] = "noPing", e[e.subscribeTimeout = 3] = "subscribeTimeout", e[e.unsubscribeError = 4] = "unsubscribeError";
})(At || (At = {}));
var Bn;
(function(e) {
  e[e.disconnectCalled = 0] = "disconnectCalled", e[e.unauthorized = 1] = "unauthorized", e[e.badProtocol = 2] = "badProtocol", e[e.messageSizeLimit = 3] = "messageSizeLimit";
})(Bn || (Bn = {}));
var Hs;
(function(e) {
  e[e.subscribeCalled = 0] = "subscribeCalled", e[e.transportClosed = 1] = "transportClosed";
})(Hs || (Hs = {}));
var Ks;
(function(e) {
  e[e.unsubscribeCalled = 0] = "unsubscribeCalled", e[e.unauthorized = 1] = "unauthorized", e[e.clientClosed = 2] = "clientClosed";
})(Ks || (Ks = {}));
var pe;
(function(e) {
  e.Disconnected = "disconnected", e.Connecting = "connecting", e.Connected = "connected";
})(pe || (pe = {}));
var Re;
(function(e) {
  e.Unsubscribed = "unsubscribed", e.Subscribing = "subscribing", e.Subscribed = "subscribed";
})(Re || (Re = {}));
function eg(e, t) {
  return e.lastIndexOf(t, 0) === 0;
}
function nl(e) {
  return e == null ? !1 : typeof e == "function";
}
function tg(e, t) {
  if (globalThis.console) {
    const n = globalThis.console[e];
    nl(n) && n.apply(globalThis.console, t);
  }
}
function ng(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function zs(e, t, n) {
  e > 31 && (e = 31);
  const s = ng(0, Math.min(n, t * Math.pow(2, e)));
  return Math.min(n, t + s);
}
function sg(e) {
  return "error" in e && e.error !== null;
}
function Ws(e) {
  return Math.min(e * 1e3, 2147483647);
}
class rg extends tl {
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
    return this.state === Re.Unsubscribed ? Promise.reject({ code: ce.subscriptionUnsubscribed, message: this.state }) : this.state === Re.Subscribed ? Promise.resolve() : new Promise((n, s) => {
      const r = {
        resolve: n,
        reject: s
      };
      t && (r.timeout = setTimeout(function() {
        s({ code: ce.timeout, message: "timeout" });
      }, t)), this._promises[this._nextPromiseId()] = r;
    });
  }
  /** subscribe to a channel.*/
  subscribe() {
    this._isSubscribed() || (this._resubscribeAttempts = 0, this._setSubscribing(Hs.subscribeCalled, "subscribe called"));
  }
  /** unsubscribe from a channel, keeping position state.*/
  unsubscribe() {
    this._unsubPromise = this._setUnsubscribed(Ks.unsubscribeCalled, "unsubscribe called", !0);
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
    return this._isSubscribed() ? Promise.resolve() : this._isUnsubscribed() ? Promise.reject({ code: ce.subscriptionUnsubscribed, message: this.state }) : new Promise((t, n) => {
      const s = setTimeout(function() {
        n({ code: ce.timeout, message: "timeout" });
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
    t.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), Ws(t.ttl)));
  }
  _setSubscribing(t, n) {
    return Rn(this, void 0, void 0, function* () {
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
    if (t instanceof mt) {
      this._inflight = !1, this._failUnauthorized();
      return;
    }
    this.emit("error", {
      type: "subscribeData",
      channel: this.channel,
      error: {
        code: ce.badConfiguration,
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
    if (t instanceof mt) {
      this._inflight = !1, this._failUnauthorized();
      return;
    }
    this.emit("error", {
      type: "subscribeToken",
      channel: this.channel,
      error: {
        code: ce.subscriptionSubscribeToken,
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
      if (t.code === ce.timeout) {
        this._centrifuge._disconnect(At.subscribeTimeout, "subscribe timeout", !0);
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
    return this._isSubscribed() ? (s && (r = this._centrifuge._unsubscribe(this)), this._clearSubscribedState()) : this._isSubscribing() && (this._inflight && s && (r = this._centrifuge._unsubscribe(this)), this._clearSubscribingState()), this._inflight = !1, this._setState(Re.Unsubscribed) && this.emit("unsubscribed", { channel: this.channel, code: t, reason: n }), this._rejectPromises({ code: ce.subscriptionUnsubscribed, message: this.state }), r;
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
    const t = zs(this._resubscribeAttempts, this._minResubscribeDelay, this._maxResubscribeDelay);
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
          code: ce.badConfiguration,
          message: "provide a function to get channel subscription token"
        }
      }), new mt("");
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
      if (n instanceof mt) {
        t._failUnauthorized();
        return;
      }
      t.emit("error", {
        type: "refreshToken",
        channel: t.channel,
        error: {
          code: ce.subscriptionRefreshToken,
          message: n !== void 0 ? n.toString() : ""
        }
      }), t._refreshTimeout = setTimeout(() => t._refresh(), t._getRefreshRetryDelay());
    });
  }
  _refreshResponse(t) {
    this._isSubscribed() && (this._debug("subscription token refreshed, channel", this.channel), this._clearRefreshTimeout(), t.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), Ws(t.ttl))));
  }
  _refreshError(t) {
    this._isSubscribed() && (t.code < 100 || t.temporary === !0 ? (this.emit("error", {
      type: "refresh",
      channel: this.channel,
      error: t
    }), this._refreshTimeout = setTimeout(() => this._refresh(), this._getRefreshRetryDelay())) : this._setUnsubscribed(t.code, t.message, !0));
  }
  _getRefreshRetryDelay() {
    return zs(0, 1e4, 2e4);
  }
  _failUnauthorized() {
    this._setUnsubscribed(Ks.unauthorized, "unauthorized", !0);
  }
}
class ig {
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
class Lu {
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
class og {
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
      let u = "", a = 0, l = new Uint8Array();
      const d = o.body.getReader();
      return new t.options.readableStream({
        start(c) {
          function h() {
            return d.read().then(({ done: p, value: g }) => {
              if (p) {
                r.dispatchEvent(new Event("close")), c.close();
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
                  const b = new Uint8Array(l.length + g.length);
                  for (b.set(l), b.set(g, l.length), l = b; ; ) {
                    const E = t.options.decoder.decodeReply(l);
                    if (E.ok) {
                      const C = l.slice(0, E.pos);
                      r.dispatchEvent(new MessageEvent("message", { data: C })), l = l.slice(E.pos);
                      continue;
                    }
                    break;
                  }
                }
              } catch (b) {
                r.dispatchEvent(new Event("error", { detail: b })), r.dispatchEvent(new Event("close")), c.close();
                return;
              }
              h();
            }).catch(function(p) {
              r.dispatchEvent(new Event("error", { detail: p })), r.dispatchEvent(new Event("close")), c.close();
            });
          }
          return h();
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
class ug {
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
class ag {
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
    return Rn(this, void 0, void 0, function* () {
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
    return Rn(this, void 0, void 0, function* () {
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
                const l = this.options.decoder.decodeReply(i);
                if (l.ok) {
                  const d = i.slice(0, l.pos);
                  t.dispatchEvent(new MessageEvent("message", { data: d })), i = i.slice(l.pos);
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
    return Rn(this, void 0, void 0, function* () {
      try {
        this._writer && (yield this._writer.close()), this._transport.close();
      } catch {
      }
    });
  }
  send(t) {
    return Rn(this, void 0, void 0, function* () {
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
class lg {
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
class fg {
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
function dg(e) {
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
function hg(e, t) {
  let n = 0;
  const s = new lg(t), r = e.length, i = t.length, o = s.getInt();
  if (s.getChar() !== `
`)
    throw new Error("size integer not terminated by '\\n'");
  const u = new fg();
  for (; s.haveBytes(); ) {
    const a = s.getInt();
    let l;
    switch (s.getChar()) {
      case "@":
        if (l = s.getInt(), s.haveBytes() && s.getChar() !== ",")
          throw new Error("copy command not terminated by ','");
        if (n += a, n > o)
          throw new Error("copy exceeds output file size");
        if (l + a > r)
          throw new Error("copy extends past end of input");
        u.putArray(e, l, l + a);
        break;
      case ":":
        if (n += a, n > o)
          throw new Error("insert command gives an output larger than predicted");
        if (a > i)
          throw new Error("insert count exceeds size of delta");
        u.putArray(s.a, s.pos, s.pos + a), s.pos += a;
        break;
      case ";": {
        const d = u.toByteArray(e);
        if (a !== dg(d))
          throw new Error("bad checksum");
        if (n !== o)
          throw new Error("generated size does not match predicted size");
        return d;
      }
      default:
        throw new Error("unknown delta operator");
    }
  }
  throw new Error("unterminated delta");
}
class Nu {
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
      const i = hg(n, new TextEncoder().encode(t.data));
      s = JSON.parse(new TextDecoder().decode(i)), r = i;
    } else
      s = JSON.parse(t.data), r = new TextEncoder().encode(t.data);
    return { newData: s, newPrevValue: r };
  }
}
const pg = {
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
class mt extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name;
  }
}
class lr extends tl {
  /** Constructs Centrifuge client. Call connect() method to start connecting. */
  constructor(t, n) {
    super(), this._reconnectTimeout = null, this._refreshTimeout = null, this._serverPingTimeout = null, this.state = pe.Disconnected, this._transportIsOpen = !1, this._endpoint = t, this._emulation = !1, this._transports = [], this._currentTransportIndex = 0, this._triedAllTransports = !1, this._transportWasOpen = !1, this._transport = null, this._transportId = 0, this._deviceWentOffline = !1, this._transportClosed = !0, this._codec = new Nu(), this._reconnecting = !1, this._reconnectTimeout = null, this._reconnectAttempts = 0, this._client = null, this._session = "", this._node = "", this._subs = {}, this._serverSubs = {}, this._commandId = 0, this._commands = [], this._batching = !1, this._refreshRequired = !1, this._refreshTimeout = null, this._callbacks = {}, this._token = "", this._data = null, this._dispatchPromise = Promise.resolve(), this._serverPing = 0, this._serverPingTimeout = null, this._sendPong = !1, this._promises = {}, this._promiseId = 0, this._debugEnabled = !1, this._networkEventsSet = !1, this._config = Object.assign(Object.assign({}, pg), n), this._configure(), this._debugEnabled ? (this.on("state", (s) => {
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
    const s = new rg(this, t, n);
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
    return this.state === pe.Disconnected ? Promise.reject({ code: ce.clientDisconnected, message: "client disconnected" }) : this.state === pe.Connected ? Promise.resolve() : new Promise((n, s) => {
      const r = {
        resolve: n,
        reject: s
      };
      t && (r.timeout = setTimeout(function() {
        s({ code: ce.timeout, message: "timeout" });
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
      return s._transportSendCommands([n]) ? Promise.resolve() : Promise.reject(s._createErrorObject(ce.transportWriteError, "transport write error"));
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
    this._debugEnabled && tg("debug", t);
  }
  /** @internal */
  _formatOverride() {
  }
  _configure() {
    if (!("Promise" in globalThis))
      throw new Error("Promise polyfill required");
    if (!this._endpoint)
      throw new Error("endpoint configuration required");
    if (this._config.token !== null && (this._token = this._config.token), this._config.data !== null && (this._data = this._config.data), this._codec = new Nu(), this._formatOverride(), (this._config.debug === !0 || typeof localStorage < "u" && localStorage.getItem("centrifuge.debug")) && (this._debugEnabled = !0), this._debug("config", this._config), typeof this._endpoint != "string") if (typeof this._endpoint == "object" && this._endpoint instanceof Array) {
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
      this._debug("offline event triggered"), (this.state === pe.Connected || this.state === pe.Connecting) && (this._disconnect(At.transportClosed, "transport closed", !0), this._deviceWentOffline = !0);
    }), t.addEventListener("online", () => {
      this._debug("online event triggered"), this.state === pe.Connecting && (this._deviceWentOffline && !this._transportClosed && (this._deviceWentOffline = !1, this._transportClosed = !0), this._clearReconnectTimeout(), this._startReconnecting());
    }), this._networkEventsSet = !0);
  }
  _getReconnectDelay() {
    const t = zs(this._reconnectAttempts, this._config.minReconnectDelay, this._config.maxReconnectDelay);
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
        s({ error: this._createErrorObject(ce.connectionClosed, "connection closed") });
      }
    this._callbacks = {};
  }
  _clearConnectedState() {
    this._client = null, this._clearServerPingTimeout(), this._clearRefreshTimeout();
    for (const t in this._subs) {
      if (!this._subs.hasOwnProperty(t))
        continue;
      const n = this._subs[t];
      n.state === Re.Subscribed && n._setSubscribing(Hs.transportClosed, "transport closed");
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
      i({ error: this._createErrorObject(ce.transportWriteError, "transport write error") });
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
          if (this._debug("trying websocket transport"), this._transport = new Lu(E, {
            websocket: t
          }), !this._transport.supported()) {
            this._debug("websocket transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else if (b === "webtransport") {
          if (this._debug("trying webtransport transport"), this._transport = new ag(E, {
            webtransport: globalThis.WebTransport,
            decoder: this._codec,
            encoder: this._codec
          }), !this._transport.supported()) {
            this._debug("webtransport transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else if (b === "http_stream") {
          if (this._debug("trying http_stream transport"), this._transport = new og(E, {
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
          if (this._debug("trying sse transport"), this._transport = new ug(E, {
            eventsource: s,
            fetch: r,
            emulationEndpoint: this._config.emulationEndpoint
          }), !this._transport.supported()) {
            this._debug("sse transport not available"), this._currentTransportIndex++, p++;
            continue;
          }
        } else if (b === "sockjs") {
          if (this._debug("trying sockjs"), this._transport = new ig(E, {
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
      if (eg(this._endpoint, "http"))
        throw new Error("Provide explicit transport endpoints configuration in case of using HTTP (i.e. using array of TransportEndpoint instead of a single string), or use ws(s):// scheme in an endpoint if you aimed using WebSocket transport");
      if (this._debug("client will use websocket"), this._transport = new Lu(this._endpoint, {
        websocket: t
      }), !this._transport.supported())
        throw new Error("WebSocket constructor not found, make sure it is available globally or passed as a dependency in Centrifuge options");
    }
    const o = this, u = this._transport, a = this._nextTransportId();
    o._debug("id of transport", a);
    let l = !1;
    const d = [];
    if (this._transport.emulation()) {
      const p = o._sendConnect(!0);
      d.push(p);
    }
    this._setNetworkEvents();
    const c = this._codec.encodeCommands(d);
    this._transportClosed = !1;
    let h;
    h = setTimeout(function() {
      u.close();
    }, this._config.timeout), this._transport.initialize(this._codec.name(), {
      onOpen: function() {
        if (h && (clearTimeout(h), h = null), o._transportId != a) {
          o._debug("open callback from non-actual transport"), u.close();
          return;
        }
        l = !0, o._debug(u.subName(), "transport open"), !u.emulation() && (o._transportIsOpen = !0, o._transportWasOpen = !0, o.startBatching(), o._sendConnect(!1), o._sendSubscribeCommands(), o.stopBatching(), o.emit("__centrifuge_debug:connect_frame_sent", {}));
      },
      onError: function(p) {
        if (o._transportId != a) {
          o._debug("error callback from non-actual transport");
          return;
        }
        o._debug("transport level error", p);
      },
      onClose: function(p) {
        if (h && (clearTimeout(h), h = null), o._transportId != a) {
          o._debug("close callback from non-actual transport");
          return;
        }
        o._debug(u.subName(), "transport closed"), o._transportClosed = !0, o._transportIsOpen = !1;
        let g = "connection closed", b = !0, E = 0;
        if (p && "code" in p && p.code && (E = p.code), p && p.reason)
          try {
            const C = JSON.parse(p.reason);
            g = C.reason, b = C.reconnect;
          } catch {
            g = p.reason, (E >= 3500 && E < 4e3 || E >= 4500 && E < 5e3) && (b = !1);
          }
        E < 3e3 ? (E === 1009 ? (E = Bn.messageSizeLimit, g = "message size limit exceeded", b = !1) : (E = At.transportClosed, g = "transport closed"), o._emulation && !o._transportWasOpen && (o._currentTransportIndex++, o._currentTransportIndex >= o._transports.length && (o._triedAllTransports = !0, o._currentTransportIndex = 0))) : o._transportWasOpen = !0, o._isConnecting() && !l && o.emit("error", {
          type: "transport",
          error: {
            code: ce.transportClosed,
            message: "transport closed"
          },
          transport: u.name()
        }), o._reconnecting = !1, o._disconnect(E, g, b);
      },
      onMessage: function(p) {
        o._dataReceived(p);
      }
    }, c), o.emit("__centrifuge_debug:transport_initialized", {});
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
      if (r instanceof mt) {
        s._failUnauthorized();
        return;
      }
      s.emit("error", {
        type: "connectToken",
        error: {
          code: ce.clientConnectToken,
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
    if (t instanceof mt) {
      this._failUnauthorized();
      return;
    }
    this.emit("error", {
      type: "connectData",
      error: {
        code: ce.badConfiguration,
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
        n({ code: ce.timeout, message: "timeout" });
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
    this._debug("start connecting"), this._setState(pe.Connecting) && this.emit("connecting", { code: At.connectCalled, reason: "connect called" }), this._client = null, this._startReconnecting();
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
    if (s ? o = this._setState(pe.Connecting) : (o = this._setState(pe.Disconnected), this._rejectPromises({ code: ce.clientDisconnected, message: "disconnected" })), this._clearOutgoingRequests(), r === pe.Connecting && this._clearReconnectTimeout(), r === pe.Connected && this._clearConnectedState(), o && (this._isConnecting() ? this.emit("connecting", i) : this.emit("disconnected", i)), this._transport) {
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
          code: ce.badConfiguration,
          message: "token expired but no getToken function set in the configuration"
        }
      }), new mt("");
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
        if (s instanceof mt) {
          n._failUnauthorized();
          return;
        }
        n.emit("error", {
          type: "refreshToken",
          error: {
            code: ce.clientRefreshToken,
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
    return zs(0, 5e3, 1e4);
  }
  _refreshResponse(t) {
    this._refreshTimeout && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null), t.expires && (this._client = t.client, this._refreshTimeout = setTimeout(() => this._refresh(), Ws(t.ttl)));
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
        o(), a.next && a.next(), r._disconnect(At.unsubscribeError, "unsubscribe error", !0);
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
    this._client = t.client, this._setState(pe.Connected), this._refreshTimeout && clearTimeout(this._refreshTimeout), t.expires && (this._refreshTimeout = setTimeout(() => this._refresh(), Ws(t.ttl))), this._session = t.session, this._node = t.node, this.startBatching(), this._sendSubscribeCommands(), this.stopBatching();
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
      this._isConnected() && this._disconnect(At.noPing, "no ping", !0);
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
    if (clearTimeout(this._callbacks[s].timeout), delete this._callbacks[s], sg(t)) {
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
      delete this._callbacks[t], nl(s) && s({ error: this._createErrorObject(ce.timeout, "timeout") });
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
lr.UnauthorizedError = mt;
const _g = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), gg = () => new Intl.DateTimeFormat("sv-SE", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: !1
}).format(/* @__PURE__ */ new Date()).replace(",", " "), mg = (e) => ({
  text: e,
  id: _g(),
  type: Bs.MESSAGE,
  status: jt.SENDING,
  direction: Wc.OUTGOING,
  datetime: gg()
}), ls = /* @__PURE__ */ Di("connection", () => {
  const e = ss({
    isConnected: !1,
    isReconnected: !1,
    centrifuge: null,
    subscription: null,
    sendUrl: null,
    tokenUrl: null,
    historyUrl: null,
    channelUrl: null,
    channel: null,
    token: null
  }), t = cs();
  function n(h = {}) {
    Object.assign(e, {
      socketUrl: h.socketUrl,
      sendUrl: h.sendUrl,
      historyUrl: h.historyUrl,
      tokenUrl: h.tokenUrl,
      channelUrl: h.channelUrl,
      channel: h.channel
    });
  }
  async function s(h) {
    t.isStarted = !0, e.channel = e.channel ?? await i(), e.centrifuge = new lr(e.socketUrl, {
      getToken: r()
    }), e.centrifuge.on("connecting", () => {
      e.isConnected = !1, t.isLoading = !0;
    }), e.centrifuge.on("connected", async () => {
      t.isLoading = !1, e.isConnected = !0;
    }), e.centrifuge.on("disconnected", () => {
      e.isConnected = !1, e.isReconnected = !0;
    }), e.centrifuge.on("subscribed", () => {
      console.log("subscribed"), t.isLoading = !1;
    }), e.centrifuge.on("state", (p) => {
      console.log("state", p);
    }), e.centrifuge.connect();
  }
  function r() {
    return async () => {
      const p = await (await fetch(e.tokenUrl + "?channel=" + e.channel, {
        headers: { "Content-Type": "application/json" }
      })).json();
      return e.token = p.token, p.token;
    };
  }
  async function i() {
    const h = "__OPEN-HELP__";
    let { channel: p } = JSON.parse(localStorage.getItem(h) || "{}");
    return p || (p = (await (await fetch(e.channelUrl, {
      headers: { "Content-Type": "application/json" }
    })).json()).channel, localStorage.setItem(h, JSON.stringify({ channel: p })), p);
  }
  async function o() {
    const h = await fetch(e.historyUrl + "?channel=" + e.channel, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + e.token
      }
    }), { history: p } = await h.json();
    return p;
  }
  function u(h) {
    t.add(h), setTimeout(() => {
      h.status === jt.SENDING && (h.status = jt.WAITING, t.add(h));
    }, 2e3), fetch(e.sendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + e.token
      },
      body: JSON.stringify({
        id: h.id,
        text: h.text,
        channel: e.channel,
        datetime: (/* @__PURE__ */ new Date()).toISOString()
      })
    }).then(async (p) => {
      const g = await p.json();
      if (!p.ok)
        throw new Error(g == null ? void 0 : g.message);
      h.status = jt.SENT, t.add(h);
    }).catch((p) => {
      h.status = jt.FAILED, t.add(h);
    });
  }
  async function a(h) {
    e.centrifuge ?? await s(), t.isLoading = !0, e.subscription && (e.subscription.unsubscribe(), e.centrifuge.removeSubscription(e.subscription), e.subscription = null), e.channel = h ?? e.channel;
    const p = await o();
    t.init({ history: p }), e.subscription = e.centrifuge.newSubscription(e.channel), e.subscription.on("publication", (g) => {
      t.add(g.data);
    }), e.subscription.subscribe(), t.isLoading = !1;
  }
  function l(h) {
    const p = mg(h);
    u(p);
  }
  function d(h) {
    h.status = jt.SENDING, u(h);
  }
  function c() {
    e.centrifuge && e.centrifuge.disconnect(), e.isConnected = !1;
  }
  return {
    isConnected: e.isConnected,
    isReconnected: e.isReconnected,
    init: n,
    send: l,
    resend: d,
    subscribe: a,
    disconnect: c
  };
}), Ni = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, bg = {}, vg = { class: "chat__header" };
function yg(e, t) {
  return fe(), ve("div", vg, t[0] || (t[0] = [
    Cd('<div class="item"><div class="item__left"><div class="avatar"><span class="avatar__name"> AB </span><i class="icon-profile-agent"></i></div></div><div class="item__inner"><span class="item__heading"> Alex Burm </span><span class="item__text"> Customer support </span></div></div>', 1)
  ]));
}
const Eg = /* @__PURE__ */ Ni(bg, [["render", yg]]), Sg = {
  computed: {
    USER_MESSAGE_DIRECTION() {
      return Wc;
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
      return typeof e.id == "string" && typeof e.name == "string" && typeof e.text == "string" && typeof e.time == "string" && typeof e.direction == "string" && typeof e.status == "string" && typeof e.showAvatar == "boolean";
    }
  },
  methods: {
    resend() {
      ls().resend(this.item);
    }
  }
}, wg = { class: "item" }, Tg = { class: "item__status" }, Cg = { class: "avatar" }, Og = { class: "avatar__name" }, Ag = {
  key: 0,
  class: "loader"
}, xg = { class: "item__box" }, Ig = { class: "item__inner" }, kg = { class: "item__text" }, Pg = { class: "item__time" };
function Rg(e, t, n, s, r, i) {
  return fe(), ve("li", {
    class: pn(["message", i.USER_MESSAGE_DIRECTION.INCOMING === n.item.direction ? "" : "message--outgoing"])
  }, [
    ie("div", wg, [
      ie("div", Tg, [
        ie("div", Cg, [
          n.item.showAvatar ? (fe(), ve(Te, { key: 0 }, [
            ie("i", {
              class: pn([i.USER_MESSAGE_DIRECTION.INCOMING === n.item.direction ? "icon-profile-customer" : "icon-profile-agent"])
            }, null, 2),
            ie("span", Og, Ln(i.USER_MESSAGE_DIRECTION.OUTGOING === n.item.direction ? "ME" : i.initials), 1)
          ], 64)) : It("", !0)
        ]),
        i.USER_MESSAGE_STATUSES.WAITING === n.item.status ? (fe(), ve("div", Ag, t[1] || (t[1] = [
          ie("span", { class: "loader__circle" }, null, -1)
        ]))) : It("", !0),
        i.USER_MESSAGE_STATUSES.FAILED === n.item.status ? (fe(), ve("a", {
          key: 1,
          href: "javascript:void(0)",
          class: "btn__primary",
          onClick: t[0] || (t[0] = lh((...o) => i.resend && i.resend(...o), ["prevent"]))
        }, t[2] || (t[2] = [
          ie("i", { class: "icon-send-again" }, null, -1)
        ]))) : It("", !0)
      ]),
      ie("div", xg, [
        ie("div", Ig, [
          ie("span", kg, Ln(n.item.text), 1),
          ie("span", Pg, [
            n.item.status === i.USER_MESSAGE_STATUSES.WAITING ? (fe(), ve(Te, { key: 0 }, [
              $n(" Sending... ")
            ], 64)) : (fe(), ve(Te, { key: 1 }, [
              $n(Ln(n.item.time) + " ", 1),
              i.USER_MESSAGE_STATUSES.FAILED === n.item.status ? (fe(), ve(Te, { key: 0 }, [
                t[3] || (t[3] = $n(" • ")),
                t[4] || (t[4] = ie("span", { class: "item__send-failed" }, "Failed to send", -1))
              ], 64)) : It("", !0)
            ], 64))
          ])
        ])
      ])
    ])
  ], 2);
}
const Dg = /* @__PURE__ */ Ni(Sg, [["render", Rg]]), Lg = { class: "system" }, Ng = {
  __name: "SystemMessage",
  props: {
    item: Object
  },
  setup(e) {
    return (t, n) => (fe(), ve("li", Lg, Ln(e.item.text), 1));
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
    return (t, n) => (fe(), ve(Te, null, [
      ot(Bs).MESSAGE === e.item.type ? (fe(), qn(Dg, {
        key: 0,
        item: e.item
      }, null, 8, ["item"])) : It("", !0),
      ot(Bs).SYSTEM === e.item.type ? (fe(), qn(Ng, {
        key: 1,
        item: e.item
      }, null, 8, ["item"])) : It("", !0)
    ], 64));
  }
}, Fg = {
  __name: "ChatItemList",
  setup(e) {
    const t = Ke(null), n = cs();
    Ca(() => {
      _n(() => s());
    }), Ta(() => {
      _n(() => s());
    });
    function s() {
      t.value && (t.value.scrollTop = t.value.scrollHeight);
    }
    function r(u) {
      const a = [];
      let l = null, d = null;
      for (let c = 0; c < u.length; c++) {
        const h = u[c], p = new Date(h.datetime).toDateString();
        p !== d && (a.push({
          type: Bs.DATE,
          date: i(h.datetime)
        }), d = p);
        const g = h.direction !== l;
        a.push({
          ...h,
          showAvatar: g,
          time: o(h.datetime)
        }), l = h.direction;
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
    return (u, a) => (fe(), ve("ul", {
      class: "messages",
      ref_key: "container",
      ref: t
    }, [
      (fe(!0), ve(Te, null, Df(r(ot(n).items), (l, d) => (fe(), qn(Ug, {
        key: d,
        item: l
      }, null, 8, ["item"]))), 128))
    ], 512));
  }
}, Mg = {
  key: 0,
  class: "lost-connection"
}, Vg = {
  __name: "ConnectionError",
  setup(e) {
    const t = ls(), n = cs(), s = ir(
      () => n.isLoading === !1 && t.isConnected === !1 && t.isReconnected === !0
    );
    return (r, i) => s.value ? (fe(), ve("div", Mg, i[0] || (i[0] = [
      ie("i", { class: "icon-weak-connection" }, null, -1),
      $n(" The internet connection was lost. ")
    ]))) : It("", !0);
  }
}, $g = { class: "send" }, jg = { class: "send__left" }, Bg = { class: "send__left-inner" }, Hg = {
  class: "autoresizable",
  "data-replicated-value": ""
}, Kg = { class: "send__actions" }, zg = ["disabled"], Wg = {
  __name: "MessageInput",
  setup(e) {
    const t = Ke(null), n = Ke(""), s = ls();
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
    return (u, a) => (fe(), ve("div", $g, [
      ie("div", jg, [
        ie("div", Bg, [
          ie("div", Hg, [
            bf(ie("textarea", {
              ref_key: "textarea",
              ref: t,
              "onUpdate:modelValue": a[0] || (a[0] = (l) => n.value = l),
              rows: "1",
              name: "text",
              onKeydown: i,
              onInput: o,
              placeholder: "Write your message..."
            }, null, 544), [
              [uh, n.value]
            ])
          ])
        ])
      ]),
      ie("div", Kg, [
        ie("button", {
          type: "button",
          class: "btn__send",
          onClick: r,
          disabled: !n.value.trim()
        }, a[1] || (a[1] = [
          ie("i", { class: "icon-send" }, null, -1)
        ]), 8, zg)
      ])
    ]));
  }
}, Gg = {}, qg = { class: "empty" };
function Yg(e, t) {
  return fe(), ve("div", qg, t[0] || (t[0] = [
    ie("div", { class: "empty__inner" }, [
      ie("div", { class: "loader" }, [
        ie("span", { class: "loader__circle" })
      ]),
      ie("span", { class: "empty__text" }, " Please wait, we are loading the chat... ")
    ], -1)
  ]));
}
const Jg = /* @__PURE__ */ Ni(Gg, [["render", Yg]]), Zg = { class: "chat__body" }, Xg = ["innerHTML"], Qg = {
  __name: "index",
  setup(e) {
    const t = qt("customHeaderHtml", ""), n = qt("customHeaderElement", null), s = Ke(null), r = cs();
    return Yt(() => r.isLoading, async (i) => {
      !i && r.isStarted && (await _n(), window.dispatchEvent(new CustomEvent("chat:ready")));
    }), Yt(s, () => {
      s.value && (s.value.appendChild(n), console.log("Header moved into container"));
    }), (i, o) => ot(r).isStarted ? (fe(), ve("div", {
      key: 0,
      class: pn({ chat__loading: ot(r).isLoading })
    }, [
      Ve(Jg),
      ie("div", Zg, [
        ot(n) ? (fe(), ve("div", {
          key: 0,
          ref_key: "container",
          ref: s
        }, null, 512)) : ot(t) ? (fe(), ve("div", {
          key: 1,
          innerHTML: ot(t)
        }, null, 8, Xg)) : (fe(), qn(Eg, { key: 2 })),
        Ve(Fg),
        Ve(Vg),
        Ve(Wg)
      ])
    ], 2)) : It("", !0);
  }
};
function em(e) {
  const t = hh(Qg);
  t.config.devtools = !0, t.use($_());
  const n = z_(), s = cs(), r = ls();
  n.init(e.user), s.init(e.chat), r.init(e.connection), t.provide("customHeaderHtml", e == null ? void 0 : e.customHeaderHtml), t.provide("customHeaderElement", e == null ? void 0 : e.customHeaderElement), t.mount(document.querySelector((e == null ? void 0 : e.target) || "#app")), document.querySelector((e == null ? void 0 : e.target) || "#app").classList.add("chat");
}
function tm(e) {
  ls().subscribe(e);
}
window.OpenHelpChat = {
  init: em,
  subscribe: tm
};
//# sourceMappingURL=public-chat.js.map
