var th = (e) => {
  throw TypeError(e);
};
var xl = (e, t, n) => t.has(e) || th("Cannot " + n);
var k = (e, t, n) => (
    xl(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  H = (e, t, n) =>
    t.has(e)
      ? th("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  D = (e, t, n, r) => (
    xl(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  X = (e, t, n) => (xl(e, t, "access private method"), n);
var ho = (e, t, n, r) => ({
  set _(s) {
    D(e, t, s, n);
  },
  get _() {
    return k(e, t, r);
  },
});
function Z1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function vg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xg = { exports: {} },
  za = {},
  wg = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yi = Symbol.for("react.element"),
  J1 = Symbol.for("react.portal"),
  ew = Symbol.for("react.fragment"),
  tw = Symbol.for("react.strict_mode"),
  nw = Symbol.for("react.profiler"),
  rw = Symbol.for("react.provider"),
  sw = Symbol.for("react.context"),
  iw = Symbol.for("react.forward_ref"),
  ow = Symbol.for("react.suspense"),
  aw = Symbol.for("react.memo"),
  lw = Symbol.for("react.lazy"),
  nh = Symbol.iterator;
function cw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nh && e[nh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sg = Object.assign,
  Cg = {};
function Os(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cg),
    (this.updater = n || bg));
}
Os.prototype.isReactComponent = {};
Os.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Os.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kg() {}
kg.prototype = Os.prototype;
function Xu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cg),
    (this.updater = n || bg));
}
var Yu = (Xu.prototype = new kg());
Yu.constructor = Xu;
Sg(Yu, Os.prototype);
Yu.isPureReactComponent = !0;
var rh = Array.isArray,
  jg = Object.prototype.hasOwnProperty,
  Zu = { current: null },
  Pg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jg.call(t, r) && !Pg.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Yi,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Zu.current,
  };
}
function uw(e, t) {
  return {
    $$typeof: Yi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ju(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yi;
}
function dw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sh = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dw("" + e.key)
    : t.toString(36);
}
function Vo(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yi:
          case J1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + wl(o, 0) : r),
      rh(s)
        ? ((n = ""),
          e != null && (n = e.replace(sh, "$&/") + "/"),
          Vo(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (Ju(s) &&
            (s = uw(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(sh, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), rh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + wl(i, a);
      o += Vo(i, t, n, l, s);
    }
  else if (((l = cw(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + wl(i, a++)), (o += Vo(i, t, n, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function po(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Vo(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function fw(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var $e = { current: null },
  zo = { transition: null },
  hw = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: zo,
    ReactCurrentOwner: Zu,
  };
function Ng() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: po,
  forEach: function (e, t, n) {
    po(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      po(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      po(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ju(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
G.Component = Os;
G.Fragment = ew;
G.Profiler = nw;
G.PureComponent = Xu;
G.StrictMode = tw;
G.Suspense = ow;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hw;
G.act = Ng;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Sg({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Zu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      jg.call(t, l) &&
        !Pg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Yi, type: e.type, key: s, ref: i, props: r, _owner: o };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: sw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rw, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Tg;
G.createFactory = function (e) {
  var t = Tg.bind(null, e);
  return ((t.type = e), t);
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: iw, render: e };
};
G.isValidElement = Ju;
G.lazy = function (e) {
  return { $$typeof: lw, _payload: { _status: -1, _result: e }, _init: fw };
};
G.memo = function (e, t) {
  return { $$typeof: aw, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = zo.transition;
  zo.transition = {};
  try {
    e();
  } finally {
    zo.transition = t;
  }
};
G.unstable_act = Ng;
G.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
G.useContext = function (e) {
  return $e.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
G.useId = function () {
  return $e.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return $e.current.useRef(e);
};
G.useState = function (e) {
  return $e.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return $e.current.useTransition();
};
G.version = "18.3.1";
wg.exports = G;
var v = wg.exports;
const vn = vg(v),
  pw = Z1({ __proto__: null, default: vn }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mw = v,
  gw = Symbol.for("react.element"),
  yw = Symbol.for("react.fragment"),
  vw = Object.prototype.hasOwnProperty,
  xw = mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ww = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) vw.call(t, r) && !ww.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: gw,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: xw.current,
  };
}
za.Fragment = yw;
za.jsx = Eg;
za.jsxs = Eg;
xg.exports = za;
var c = xg.exports,
  Ag = { exports: {} },
  ot = {},
  Rg = { exports: {} },
  Fg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, L) {
    var I = E.length;
    E.push(L);
    e: for (; 0 < I; ) {
      var W = (I - 1) >>> 1,
        re = E[W];
      if (0 < s(re, L)) ((E[W] = L), (E[I] = re), (I = W));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0],
      I = E.pop();
    if (I !== L) {
      E[0] = I;
      e: for (var W = 0, re = E.length, z = re >>> 1; W < z; ) {
        var q = 2 * (W + 1) - 1,
          Ft = E[q],
          vt = q + 1,
          Ye = E[vt];
        if (0 > s(Ft, I))
          vt < re && 0 > s(Ye, Ft)
            ? ((E[W] = Ye), (E[vt] = I), (W = vt))
            : ((E[W] = Ft), (E[q] = I), (W = q));
        else if (vt < re && 0 > s(Ye, I)) ((E[W] = Ye), (E[vt] = I), (W = vt));
        else break e;
      }
    }
    return L;
  }
  function s(E, L) {
    var I = E.sortIndex - L.sortIndex;
    return I !== 0 ? I : E.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    f = null,
    h = 3,
    g = !1,
    w = !1,
    y = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(E) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= E)
        (r(u), (L.sortIndex = L.expirationTime), t(l, L));
      else break;
      L = n(u);
    }
  }
  function C(E) {
    if (((y = !1), x(E), !w))
      if (n(l) !== null) ((w = !0), U(S));
      else {
        var L = n(u);
        L !== null && $(C, L.startTime - E);
      }
  }
  function S(E, L) {
    ((w = !1), y && ((y = !1), m(j), (j = -1)), (g = !0));
    var I = h;
    try {
      for (
        x(L), f = n(l);
        f !== null && (!(f.expirationTime > L) || (E && !V()));
      ) {
        var W = f.callback;
        if (typeof W == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var re = W(f.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(l) && r(l),
            x(L));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var z = !0;
      else {
        var q = n(u);
        (q !== null && $(C, q.startTime - L), (z = !1));
      }
      return z;
    } finally {
      ((f = null), (h = I), (g = !1));
    }
  }
  var P = !1,
    T = null,
    j = -1,
    N = 5,
    A = -1;
  function V() {
    return !(e.unstable_now() - A < N);
  }
  function M() {
    if (T !== null) {
      var E = e.unstable_now();
      A = E;
      var L = !0;
      try {
        L = T(!0, E);
      } finally {
        L ? _() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var _;
  if (typeof p == "function")
    _ = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      K = F.port2;
    ((F.port1.onmessage = M),
      (_ = function () {
        K.postMessage(null);
      }));
  } else
    _ = function () {
      b(M, 0);
    };
  function U(E) {
    ((T = E), P || ((P = !0), _()));
  }
  function $(E, L) {
    j = b(function () {
      E(e.unstable_now());
    }, L);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), U(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (N = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var I = h;
      h = L;
      try {
        return E();
      } finally {
        h = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var I = h;
      h = E;
      try {
        return L();
      } finally {
        h = I;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, I) {
      var W = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? W + I : W))
          : (I = W),
        E)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = I + re),
        (E = {
          id: d++,
          callback: L,
          priorityLevel: E,
          startTime: I,
          expirationTime: re,
          sortIndex: -1,
        }),
        I > W
          ? ((E.sortIndex = I),
            t(u, E),
            n(l) === null &&
              E === n(u) &&
              (y ? (m(j), (j = -1)) : (y = !0), $(C, I - W)))
          : ((E.sortIndex = re), t(l, E), w || g || ((w = !0), U(S))),
        E
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (E) {
      var L = h;
      return function () {
        var I = h;
        h = L;
        try {
          return E.apply(this, arguments);
        } finally {
          h = I;
        }
      };
    }));
})(Fg);
Rg.exports = Fg;
var bw = Rg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sw = v,
  st = bw;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lg = new Set(),
  bi = {};
function Er(e, t) {
  (Ss(e, t), Ss(e + "Capture", t));
}
function Ss(e, t) {
  for (bi[e] = t, e = 0; e < t.length; e++) Lg.add(t[e]);
}
var on = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mc = Object.prototype.hasOwnProperty,
  Cw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ih = {},
  oh = {};
function kw(e) {
  return mc.call(oh, e)
    ? !0
    : mc.call(ih, e)
      ? !1
      : Cw.test(e)
        ? (oh[e] = !0)
        : ((ih[e] = !0), !1);
}
function jw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pw(e, t, n, r) {
  if (t === null || typeof t > "u" || jw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ed = /[\-:]([a-z])/g;
function td(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ed, td);
    Ne[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ed, td);
    Ne[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ed, td);
  Ne[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nd(e, t, n, r) {
  var s = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pw(t, n, s, r) && (n = null),
    r || s === null
      ? kw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = Sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mo = Symbol.for("react.element"),
  Dr = Symbol.for("react.portal"),
  _r = Symbol.for("react.fragment"),
  rd = Symbol.for("react.strict_mode"),
  gc = Symbol.for("react.profiler"),
  Mg = Symbol.for("react.provider"),
  Og = Symbol.for("react.context"),
  sd = Symbol.for("react.forward_ref"),
  yc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.suspense_list"),
  id = Symbol.for("react.memo"),
  bn = Symbol.for("react.lazy"),
  Dg = Symbol.for("react.offscreen"),
  ah = Symbol.iterator;
function Ws(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ah && e[ah]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  bl;
function ti(e) {
  if (bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bl = (t && t[1]) || "";
    }
  return (
    `
` +
    bl +
    e
  );
}
var Sl = !1;
function Cl(e, t) {
  if (!e || Sl) return "";
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Sl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? ti(e) : "";
}
function Tw(e) {
  switch (e.tag) {
    case 5:
      return ti(e.type);
    case 16:
      return ti("Lazy");
    case 13:
      return ti("Suspense");
    case 19:
      return ti("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Cl(e.type, !1)), e);
    case 11:
      return ((e = Cl(e.type.render, !1)), e);
    case 1:
      return ((e = Cl(e.type, !0)), e);
    default:
      return "";
  }
}
function xc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _r:
      return "Fragment";
    case Dr:
      return "Portal";
    case gc:
      return "Profiler";
    case rd:
      return "StrictMode";
    case yc:
      return "Suspense";
    case vc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Og:
        return (e.displayName || "Context") + ".Consumer";
      case Mg:
        return (e._context.displayName || "Context") + ".Provider";
      case sd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case id:
        return (
          (t = e.displayName || null),
          t !== null ? t : xc(e.type) || "Memo"
        );
      case bn:
        ((t = e._payload), (e = e._init));
        try {
          return xc(e(t));
        } catch {}
    }
  return null;
}
function Nw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xc(t);
    case 8:
      return t === rd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function _g(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ew(e) {
  var t = _g(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function go(e) {
  e._valueTracker || (e._valueTracker = Ew(e));
}
function Ig(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _g(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ra(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wc(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function lh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Vg(e, t) {
  ((t = t.checked), t != null && nd(e, "checked", t, !1));
}
function bc(e, t) {
  Vg(e, t);
  var n = Hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Sc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Sc(e, t.type, Hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function ch(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Sc(e, t, n) {
  (t !== "number" || ra(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ni = Array.isArray;
function Jr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Hn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function uh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (ni(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Hn(n) };
}
function zg(e, t) {
  var n = Hn(t.value),
    r = Hn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function dh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $g(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $g(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var yo,
  Bg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        yo = yo || document.createElement("div"),
          yo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yo.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Si(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var li = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Aw = ["Webkit", "ms", "Moz", "O"];
Object.keys(li).forEach(function (e) {
  Aw.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (li[t] = li[e]));
  });
});
function Ug(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (li.hasOwnProperty(e) && li[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Ug(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var Rw = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function jc(e, t) {
  if (t) {
    if (Rw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Pc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tc = null;
function od(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nc = null,
  es = null,
  ts = null;
function fh(e) {
  if ((e = eo(e))) {
    if (typeof Nc != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Ha(t)), Nc(e.stateNode, e.type, t));
  }
}
function Hg(e) {
  es ? (ts ? ts.push(e) : (ts = [e])) : (es = e);
}
function Kg() {
  if (es) {
    var e = es,
      t = ts;
    if (((ts = es = null), fh(e), t)) for (e = 0; e < t.length; e++) fh(t[e]);
  }
}
function Qg(e, t) {
  return e(t);
}
function qg() {}
var kl = !1;
function Gg(e, t, n) {
  if (kl) return e(t, n);
  kl = !0;
  try {
    return Qg(e, t, n);
  } finally {
    ((kl = !1), (es !== null || ts !== null) && (qg(), Kg()));
  }
}
function Ci(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ha(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Ec = !1;
if (on)
  try {
    var Hs = {};
    (Object.defineProperty(Hs, "passive", {
      get: function () {
        Ec = !0;
      },
    }),
      window.addEventListener("test", Hs, Hs),
      window.removeEventListener("test", Hs, Hs));
  } catch {
    Ec = !1;
  }
function Fw(e, t, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ci = !1,
  sa = null,
  ia = !1,
  Ac = null,
  Lw = {
    onError: function (e) {
      ((ci = !0), (sa = e));
    },
  };
function Mw(e, t, n, r, s, i, o, a, l) {
  ((ci = !1), (sa = null), Fw.apply(Lw, arguments));
}
function Ow(e, t, n, r, s, i, o, a, l) {
  if ((Mw.apply(this, arguments), ci)) {
    if (ci) {
      var u = sa;
      ((ci = !1), (sa = null));
    } else throw Error(R(198));
    ia || ((ia = !0), (Ac = u));
  }
}
function Ar(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hh(e) {
  if (Ar(e) !== e) throw Error(R(188));
}
function Dw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ar(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (hh(s), e);
        if (i === r) return (hh(s), t);
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Yg(e) {
  return ((e = Dw(e)), e !== null ? Zg(e) : null);
}
function Zg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jg = st.unstable_scheduleCallback,
  ph = st.unstable_cancelCallback,
  _w = st.unstable_shouldYield,
  Iw = st.unstable_requestPaint,
  ge = st.unstable_now,
  Vw = st.unstable_getCurrentPriorityLevel,
  ad = st.unstable_ImmediatePriority,
  ey = st.unstable_UserBlockingPriority,
  oa = st.unstable_NormalPriority,
  zw = st.unstable_LowPriority,
  ty = st.unstable_IdlePriority,
  $a = null,
  $t = null;
function $w(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function")
    try {
      $t.onCommitFiberRoot($a, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : Ww,
  Bw = Math.log,
  Uw = Math.LN2;
function Ww(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Bw(e) / Uw) | 0)) | 0);
}
var vo = 64,
  xo = 4194304;
function ri(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function aa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = ri(a)) : ((i &= o), i !== 0 && (r = ri(i)));
  } else ((o = n & ~s), o !== 0 ? (r = ri(o)) : i !== 0 && (r = ri(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Pt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Hw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - Pt(i),
      a = 1 << o,
      l = s[o];
    (l === -1
      ? (!(a & n) || a & r) && (s[o] = Hw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Rc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ny() {
  var e = vo;
  return ((vo <<= 1), !(vo & 4194240) && (vo = 64), e);
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pt(t)),
    (e[t] = n));
}
function Qw(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Pt(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function ld(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var ee = 0;
function ry(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var sy,
  cd,
  iy,
  oy,
  ay,
  Fc = !1,
  wo = [],
  Mn = null,
  On = null,
  Dn = null,
  ki = new Map(),
  ji = new Map(),
  Cn = [],
  qw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function mh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mn = null;
      break;
    case "dragenter":
    case "dragleave":
      On = null;
      break;
    case "mouseover":
    case "mouseout":
      Dn = null;
      break;
    case "pointerover":
    case "pointerout":
      ki.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ji.delete(t.pointerId);
  }
}
function Ks(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = eo(t)), t !== null && cd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Gw(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((Mn = Ks(Mn, e, t, n, r, s)), !0);
    case "dragenter":
      return ((On = Ks(On, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Dn = Ks(Dn, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (ki.set(i, Ks(ki.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        ji.set(i, Ks(ji.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function ly(e) {
  var t = ar(e.target);
  if (t !== null) {
    var n = Ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xg(n)), t !== null)) {
          ((e.blockedOn = t),
            ay(e.priority, function () {
              iy(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Tc = r), n.target.dispatchEvent(r), (Tc = null));
    } else return ((t = eo(n)), t !== null && cd(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function gh(e, t, n) {
  $o(e) && n.delete(t);
}
function Xw() {
  ((Fc = !1),
    Mn !== null && $o(Mn) && (Mn = null),
    On !== null && $o(On) && (On = null),
    Dn !== null && $o(Dn) && (Dn = null),
    ki.forEach(gh),
    ji.forEach(gh));
}
function Qs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fc ||
      ((Fc = !0),
      st.unstable_scheduleCallback(st.unstable_NormalPriority, Xw)));
}
function Pi(e) {
  function t(s) {
    return Qs(s, e);
  }
  if (0 < wo.length) {
    Qs(wo[0], e);
    for (var n = 1; n < wo.length; n++) {
      var r = wo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mn !== null && Qs(Mn, e),
      On !== null && Qs(On, e),
      Dn !== null && Qs(Dn, e),
      ki.forEach(t),
      ji.forEach(t),
      n = 0;
    n < Cn.length;
    n++
  )
    ((r = Cn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Cn.length && ((n = Cn[0]), n.blockedOn === null); )
    (ly(n), n.blockedOn === null && Cn.shift());
}
var ns = hn.ReactCurrentBatchConfig,
  la = !0;
function Yw(e, t, n, r) {
  var s = ee,
    i = ns.transition;
  ns.transition = null;
  try {
    ((ee = 1), ud(e, t, n, r));
  } finally {
    ((ee = s), (ns.transition = i));
  }
}
function Zw(e, t, n, r) {
  var s = ee,
    i = ns.transition;
  ns.transition = null;
  try {
    ((ee = 4), ud(e, t, n, r));
  } finally {
    ((ee = s), (ns.transition = i));
  }
}
function ud(e, t, n, r) {
  if (la) {
    var s = Lc(e, t, n, r);
    if (s === null) (Ol(e, t, r, ca, n), mh(e, r));
    else if (Gw(s, e, t, n, r)) r.stopPropagation();
    else if ((mh(e, r), t & 4 && -1 < qw.indexOf(e))) {
      for (; s !== null; ) {
        var i = eo(s);
        if (
          (i !== null && sy(i),
          (i = Lc(e, t, n, r)),
          i === null && Ol(e, t, r, ca, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Ol(e, t, r, null, n);
  }
}
var ca = null;
function Lc(e, t, n, r) {
  if (((ca = null), (e = od(r)), (e = ar(e)), e !== null))
    if (((t = Ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ca = e), null);
}
function cy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vw()) {
        case ad:
          return 1;
        case ey:
          return 4;
        case oa:
        case zw:
          return 16;
        case ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fn = null,
  dd = null,
  Bo = null;
function uy() {
  if (Bo) return Bo;
  var e,
    t = dd,
    n = t.length,
    r,
    s = "value" in Fn ? Fn.value : Fn.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (Bo = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Uo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bo() {
  return !0;
}
function yh() {
  return !1;
}
function at(e) {
  function t(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? bo
        : yh),
      (this.isPropagationStopped = yh),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = bo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = bo));
      },
      persist: function () {},
      isPersistent: bo,
    }),
    t
  );
}
var Ds = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fd = at(Ds),
  Ji = de({}, Ds, { view: 0, detail: 0 }),
  Jw = at(Ji),
  Pl,
  Tl,
  qs,
  Ba = de({}, Ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== qs &&
            (qs && e.type === "mousemove"
              ? ((Pl = e.screenX - qs.screenX), (Tl = e.screenY - qs.screenY))
              : (Tl = Pl = 0),
            (qs = e)),
          Pl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tl;
    },
  }),
  vh = at(Ba),
  eb = de({}, Ba, { dataTransfer: 0 }),
  tb = at(eb),
  nb = de({}, Ji, { relatedTarget: 0 }),
  Nl = at(nb),
  rb = de({}, Ds, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sb = at(rb),
  ib = de({}, Ds, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ob = at(ib),
  ab = de({}, Ds, { data: 0 }),
  xh = at(ab),
  lb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ub = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function db(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ub[e]) ? !!t[e] : !1;
}
function hd() {
  return db;
}
var fb = de({}, Ji, {
    key: function (e) {
      if (e.key) {
        var t = lb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? cb[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hd,
    charCode: function (e) {
      return e.type === "keypress" ? Uo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Uo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  hb = at(fb),
  pb = de({}, Ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wh = at(pb),
  mb = de({}, Ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hd,
  }),
  gb = at(mb),
  yb = de({}, Ds, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vb = at(yb),
  xb = de({}, Ba, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wb = at(xb),
  bb = [9, 13, 27, 32],
  pd = on && "CompositionEvent" in window,
  ui = null;
on && "documentMode" in document && (ui = document.documentMode);
var Sb = on && "TextEvent" in window && !ui,
  dy = on && (!pd || (ui && 8 < ui && 11 >= ui)),
  bh = " ",
  Sh = !1;
function fy(e, t) {
  switch (e) {
    case "keyup":
      return bb.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hy(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Ir = !1;
function Cb(e, t) {
  switch (e) {
    case "compositionend":
      return hy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Sh = !0), bh);
    case "textInput":
      return ((e = t.data), e === bh && Sh ? null : e);
    default:
      return null;
  }
}
function kb(e, t) {
  if (Ir)
    return e === "compositionend" || (!pd && fy(e, t))
      ? ((e = uy()), (Bo = dd = Fn = null), (Ir = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ch(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jb[e.type] : t === "textarea";
}
function py(e, t, n, r) {
  (Hg(r),
    (t = ua(t, "onChange")),
    0 < t.length &&
      ((n = new fd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var di = null,
  Ti = null;
function Pb(e) {
  jy(e, 0);
}
function Ua(e) {
  var t = $r(e);
  if (Ig(t)) return e;
}
function Tb(e, t) {
  if (e === "change") return t;
}
var my = !1;
if (on) {
  var El;
  if (on) {
    var Al = "oninput" in document;
    if (!Al) {
      var kh = document.createElement("div");
      (kh.setAttribute("oninput", "return;"),
        (Al = typeof kh.oninput == "function"));
    }
    El = Al;
  } else El = !1;
  my = El && (!document.documentMode || 9 < document.documentMode);
}
function jh() {
  di && (di.detachEvent("onpropertychange", gy), (Ti = di = null));
}
function gy(e) {
  if (e.propertyName === "value" && Ua(Ti)) {
    var t = [];
    (py(t, Ti, e, od(e)), Gg(Pb, t));
  }
}
function Nb(e, t, n) {
  e === "focusin"
    ? (jh(), (di = t), (Ti = n), di.attachEvent("onpropertychange", gy))
    : e === "focusout" && jh();
}
function Eb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ua(Ti);
}
function Ab(e, t) {
  if (e === "click") return Ua(t);
}
function Rb(e, t) {
  if (e === "input" || e === "change") return Ua(t);
}
function Fb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nt = typeof Object.is == "function" ? Object.is : Fb;
function Ni(e, t) {
  if (Nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!mc.call(t, s) || !Nt(e[s], t[s])) return !1;
  }
  return !0;
}
function Ph(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Th(e, t) {
  var n = Ph(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ph(n);
  }
}
function yy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? yy(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function vy() {
  for (var e = window, t = ra(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ra(e.document);
  }
  return t;
}
function md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Lb(e) {
  var t = vy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && md(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Th(n, i)));
        var o = Th(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Mb = on && "documentMode" in document && 11 >= document.documentMode,
  Vr = null,
  Mc = null,
  fi = null,
  Oc = !1;
function Nh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oc ||
    Vr == null ||
    Vr !== ra(r) ||
    ((r = Vr),
    "selectionStart" in r && md(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (fi && Ni(fi, r)) ||
      ((fi = r),
      (r = ua(Mc, "onSelect")),
      0 < r.length &&
        ((t = new fd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vr))));
}
function So(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var zr = {
    animationend: So("Animation", "AnimationEnd"),
    animationiteration: So("Animation", "AnimationIteration"),
    animationstart: So("Animation", "AnimationStart"),
    transitionend: So("Transition", "TransitionEnd"),
  },
  Rl = {},
  xy = {};
on &&
  ((xy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete zr.animationend.animation,
    delete zr.animationiteration.animation,
    delete zr.animationstart.animation),
  "TransitionEvent" in window || delete zr.transitionend.transition);
function Wa(e) {
  if (Rl[e]) return Rl[e];
  if (!zr[e]) return e;
  var t = zr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xy) return (Rl[e] = t[n]);
  return e;
}
var wy = Wa("animationend"),
  by = Wa("animationiteration"),
  Sy = Wa("animationstart"),
  Cy = Wa("transitionend"),
  ky = new Map(),
  Eh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Zn(e, t) {
  (ky.set(e, t), Er(t, [e]));
}
for (var Fl = 0; Fl < Eh.length; Fl++) {
  var Ll = Eh[Fl],
    Ob = Ll.toLowerCase(),
    Db = Ll[0].toUpperCase() + Ll.slice(1);
  Zn(Ob, "on" + Db);
}
Zn(wy, "onAnimationEnd");
Zn(by, "onAnimationIteration");
Zn(Sy, "onAnimationStart");
Zn("dblclick", "onDoubleClick");
Zn("focusin", "onFocus");
Zn("focusout", "onBlur");
Zn(Cy, "onTransitionEnd");
Ss("onMouseEnter", ["mouseout", "mouseover"]);
Ss("onMouseLeave", ["mouseout", "mouseover"]);
Ss("onPointerEnter", ["pointerout", "pointerover"]);
Ss("onPointerLeave", ["pointerout", "pointerover"]);
Er(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Er(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Er(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Er(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Er(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var si =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  _b = new Set("cancel close invalid load scroll toggle".split(" ").concat(si));
function Ah(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Ow(r, t, void 0, e), (e.currentTarget = null));
}
function jy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          (Ah(s, a, u), (i = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (Ah(s, a, u), (i = l));
        }
    }
  }
  if (ia) throw ((e = Ac), (ia = !1), (Ac = null), e);
}
function ie(e, t) {
  var n = t[zc];
  n === void 0 && (n = t[zc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Py(t, e, 2, !1), n.add(r));
}
function Ml(e, t, n) {
  var r = 0;
  (t && (r |= 4), Py(n, e, r, t));
}
var Co = "_reactListening" + Math.random().toString(36).slice(2);
function Ei(e) {
  if (!e[Co]) {
    ((e[Co] = !0),
      Lg.forEach(function (n) {
        n !== "selectionchange" && (_b.has(n) || Ml(n, !1, e), Ml(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Co] || ((t[Co] = !0), Ml("selectionchange", !1, t));
  }
}
function Py(e, t, n, r) {
  switch (cy(t)) {
    case 1:
      var s = Yw;
      break;
    case 4:
      s = Zw;
      break;
    default:
      s = ud;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Ec ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function Ol(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = ar(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Gg(function () {
    var u = i,
      d = od(n),
      f = [];
    e: {
      var h = ky.get(e);
      if (h !== void 0) {
        var g = fd,
          w = e;
        switch (e) {
          case "keypress":
            if (Uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = hb;
            break;
          case "focusin":
            ((w = "focus"), (g = Nl));
            break;
          case "focusout":
            ((w = "blur"), (g = Nl));
            break;
          case "beforeblur":
          case "afterblur":
            g = Nl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = vh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = tb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = gb;
            break;
          case wy:
          case by:
          case Sy:
            g = sb;
            break;
          case Cy:
            g = vb;
            break;
          case "scroll":
            g = Jw;
            break;
          case "wheel":
            g = wb;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ob;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = wh;
        }
        var y = (t & 4) !== 0,
          b = !y && e === "scroll",
          m = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var p = u, x; p !== null; ) {
          x = p;
          var C = x.stateNode;
          if (
            (x.tag === 5 &&
              C !== null &&
              ((x = C),
              m !== null && ((C = Ci(p, m)), C != null && y.push(Ai(p, C, x)))),
            b)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new g(h, w, null, n, d)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Tc &&
            (w = n.relatedTarget || n.fromElement) &&
            (ar(w) || w[an]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? ar(w) : null),
              w !== null &&
                ((b = Ar(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((y = vh),
            (C = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = wh),
              (C = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (b = g == null ? h : $r(g)),
            (x = w == null ? h : $r(w)),
            (h = new y(C, p + "leave", g, n, d)),
            (h.target = b),
            (h.relatedTarget = x),
            (C = null),
            ar(d) === u &&
              ((y = new y(m, p + "enter", w, n, d)),
              (y.target = x),
              (y.relatedTarget = b),
              (C = y)),
            (b = C),
            g && w)
          )
            t: {
              for (y = g, m = w, p = 0, x = y; x; x = Lr(x)) p++;
              for (x = 0, C = m; C; C = Lr(C)) x++;
              for (; 0 < p - x; ) ((y = Lr(y)), p--);
              for (; 0 < x - p; ) ((m = Lr(m)), x--);
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                ((y = Lr(y)), (m = Lr(m)));
              }
              y = null;
            }
          else y = null;
          (g !== null && Rh(f, h, g, y, !1),
            w !== null && b !== null && Rh(f, b, w, y, !0));
        }
      }
      e: {
        if (
          ((h = u ? $r(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var S = Tb;
        else if (Ch(h))
          if (my) S = Rb;
          else {
            S = Eb;
            var P = Nb;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Ab);
        if (S && (S = S(e, u))) {
          py(f, S, n, d);
          break e;
        }
        (P && P(e, h, u),
          e === "focusout" &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === "number" &&
            Sc(h, "number", h.value));
      }
      switch (((P = u ? $r(u) : window), e)) {
        case "focusin":
          (Ch(P) || P.contentEditable === "true") &&
            ((Vr = P), (Mc = u), (fi = null));
          break;
        case "focusout":
          fi = Mc = Vr = null;
          break;
        case "mousedown":
          Oc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Oc = !1), Nh(f, n, d));
          break;
        case "selectionchange":
          if (Mb) break;
        case "keydown":
        case "keyup":
          Nh(f, n, d);
      }
      var T;
      if (pd)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Ir
          ? fy(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      (j &&
        (dy &&
          n.locale !== "ko" &&
          (Ir || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Ir && (T = uy())
            : ((Fn = d),
              (dd = "value" in Fn ? Fn.value : Fn.textContent),
              (Ir = !0))),
        (P = ua(u, j)),
        0 < P.length &&
          ((j = new xh(j, e, null, n, d)),
          f.push({ event: j, listeners: P }),
          T ? (j.data = T) : ((T = hy(n)), T !== null && (j.data = T)))),
        (T = Sb ? Cb(e, n) : kb(e, n)) &&
          ((u = ua(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new xh("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = T))));
    }
    jy(f, t);
  });
}
function Ai(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ua(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Ci(e, n)),
      i != null && r.unshift(Ai(e, i, s)),
      (i = Ci(e, t)),
      i != null && r.push(Ai(e, i, s))),
      (e = e.return));
  }
  return r;
}
function Lr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Rh(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = Ci(n, i)), l != null && o.unshift(Ai(n, l, a)))
        : s || ((l = Ci(n, i)), l != null && o.push(Ai(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ib = /\r\n?/g,
  Vb = /\u0000|\uFFFD/g;
function Fh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ib,
      `
`,
    )
    .replace(Vb, "");
}
function ko(e, t, n) {
  if (((t = Fh(t)), Fh(e) !== t && n)) throw Error(R(425));
}
function da() {}
var Dc = null,
  _c = null;
function Ic(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vc = typeof setTimeout == "function" ? setTimeout : void 0,
  zb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lh = typeof Promise == "function" ? Promise : void 0,
  $b =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lh < "u"
        ? function (e) {
            return Lh.resolve(null).then(e).catch(Bb);
          }
        : Vc;
function Bb(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Pi(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Pi(t);
}
function _n(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Mh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var _s = Math.random().toString(36).slice(2),
  Vt = "__reactFiber$" + _s,
  Ri = "__reactProps$" + _s,
  an = "__reactContainer$" + _s,
  zc = "__reactEvents$" + _s,
  Ub = "__reactListeners$" + _s,
  Wb = "__reactHandles$" + _s;
function ar(e) {
  var t = e[Vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[an] || n[Vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mh(e); e !== null; ) {
          if ((n = e[Vt])) return n;
          e = Mh(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function eo(e) {
  return (
    (e = e[Vt] || e[an]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $r(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ha(e) {
  return e[Ri] || null;
}
var $c = [],
  Br = -1;
function Jn(e) {
  return { current: e };
}
function oe(e) {
  0 > Br || ((e.current = $c[Br]), ($c[Br] = null), Br--);
}
function ne(e, t) {
  (Br++, ($c[Br] = e.current), (e.current = t));
}
var Kn = {},
  De = Jn(Kn),
  Qe = Jn(!1),
  br = Kn;
function Cs(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function qe(e) {
  return ((e = e.childContextTypes), e != null);
}
function fa() {
  (oe(Qe), oe(De));
}
function Oh(e, t, n) {
  if (De.current !== Kn) throw Error(R(168));
  (ne(De, t), ne(Qe, n));
}
function Ty(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(R(108, Nw(e) || "Unknown", s));
  return de({}, n, r);
}
function ha(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kn),
    (br = De.current),
    ne(De, e),
    ne(Qe, Qe.current),
    !0
  );
}
function Dh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  (n
    ? ((e = Ty(e, t, br)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Qe),
      oe(De),
      ne(De, e))
    : oe(Qe),
    ne(Qe, n));
}
var Zt = null,
  Ka = !1,
  _l = !1;
function Ny(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function Hb(e) {
  ((Ka = !0), Ny(e));
}
function er() {
  if (!_l && Zt !== null) {
    _l = !0;
    var e = 0,
      t = ee;
    try {
      var n = Zt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Zt = null), (Ka = !1));
    } catch (s) {
      throw (Zt !== null && (Zt = Zt.slice(e + 1)), Jg(ad, er), s);
    } finally {
      ((ee = t), (_l = !1));
    }
  }
  return null;
}
var Ur = [],
  Wr = 0,
  pa = null,
  ma = 0,
  ft = [],
  ht = 0,
  Sr = null,
  Jt = 1,
  en = "";
function rr(e, t) {
  ((Ur[Wr++] = ma), (Ur[Wr++] = pa), (pa = e), (ma = t));
}
function Ey(e, t, n) {
  ((ft[ht++] = Jt), (ft[ht++] = en), (ft[ht++] = Sr), (Sr = e));
  var r = Jt;
  e = en;
  var s = 32 - Pt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Pt(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Jt = (1 << (32 - Pt(t) + s)) | (n << s) | r),
      (en = i + e));
  } else ((Jt = (1 << i) | (n << s) | r), (en = e));
}
function gd(e) {
  e.return !== null && (rr(e, 1), Ey(e, 1, 0));
}
function yd(e) {
  for (; e === pa; )
    ((pa = Ur[--Wr]), (Ur[Wr] = null), (ma = Ur[--Wr]), (Ur[Wr] = null));
  for (; e === Sr; )
    ((Sr = ft[--ht]),
      (ft[ht] = null),
      (en = ft[--ht]),
      (ft[ht] = null),
      (Jt = ft[--ht]),
      (ft[ht] = null));
}
var nt = null,
  tt = null,
  ae = !1,
  kt = null;
function Ay(e, t) {
  var n = pt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function _h(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (tt = _n(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sr !== null ? { id: Jt, overflow: en } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nt = e),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Uc(e) {
  if (ae) {
    var t = tt;
    if (t) {
      var n = t;
      if (!_h(e, t)) {
        if (Bc(e)) throw Error(R(418));
        t = _n(n.nextSibling);
        var r = nt;
        t && _h(e, t)
          ? Ay(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (nt = e));
      }
    } else {
      if (Bc(e)) throw Error(R(418));
      ((e.flags = (e.flags & -4097) | 2), (ae = !1), (nt = e));
    }
  }
}
function Ih(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function jo(e) {
  if (e !== nt) return !1;
  if (!ae) return (Ih(e), (ae = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ic(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (Bc(e)) throw (Ry(), Error(R(418)));
    for (; t; ) (Ay(e, t), (t = _n(t.nextSibling)));
  }
  if ((Ih(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = _n(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? _n(e.stateNode.nextSibling) : null;
  return !0;
}
function Ry() {
  for (var e = tt; e; ) e = _n(e.nextSibling);
}
function ks() {
  ((tt = nt = null), (ae = !1));
}
function vd(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var Kb = hn.ReactCurrentBatchConfig;
function Gs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Po(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Vh(e) {
  var t = e._init;
  return t(e._payload);
}
function Fy(e) {
  function t(m, p) {
    if (e) {
      var x = m.deletions;
      x === null ? ((m.deletions = [p]), (m.flags |= 16)) : x.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function s(m, p) {
    return ((m = $n(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, p, x) {
    return (
      (m.index = x),
      e
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < p ? ((m.flags |= 2), p) : x)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, p, x, C) {
    return p === null || p.tag !== 6
      ? ((p = Wl(x, m.mode, C)), (p.return = m), p)
      : ((p = s(p, x)), (p.return = m), p);
  }
  function l(m, p, x, C) {
    var S = x.type;
    return S === _r
      ? d(m, p, x.props.children, C, x.key)
      : p !== null &&
          (p.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === bn &&
              Vh(S) === p.type))
        ? ((C = s(p, x.props)), (C.ref = Gs(m, p, x)), (C.return = m), C)
        : ((C = Xo(x.type, x.key, x.props, null, m.mode, C)),
          (C.ref = Gs(m, p, x)),
          (C.return = m),
          C);
  }
  function u(m, p, x, C) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== x.containerInfo ||
      p.stateNode.implementation !== x.implementation
      ? ((p = Hl(x, m.mode, C)), (p.return = m), p)
      : ((p = s(p, x.children || [])), (p.return = m), p);
  }
  function d(m, p, x, C, S) {
    return p === null || p.tag !== 7
      ? ((p = xr(x, m.mode, C, S)), (p.return = m), p)
      : ((p = s(p, x)), (p.return = m), p);
  }
  function f(m, p, x) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = Wl("" + p, m.mode, x)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case mo:
          return (
            (x = Xo(p.type, p.key, p.props, null, m.mode, x)),
            (x.ref = Gs(m, null, p)),
            (x.return = m),
            x
          );
        case Dr:
          return ((p = Hl(p, m.mode, x)), (p.return = m), p);
        case bn:
          var C = p._init;
          return f(m, C(p._payload), x);
      }
      if (ni(p) || Ws(p))
        return ((p = xr(p, m.mode, x, null)), (p.return = m), p);
      Po(m, p);
    }
    return null;
  }
  function h(m, p, x, C) {
    var S = p !== null ? p.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return S !== null ? null : a(m, p, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case mo:
          return x.key === S ? l(m, p, x, C) : null;
        case Dr:
          return x.key === S ? u(m, p, x, C) : null;
        case bn:
          return ((S = x._init), h(m, p, S(x._payload), C));
      }
      if (ni(x) || Ws(x)) return S !== null ? null : d(m, p, x, C, null);
      Po(m, x);
    }
    return null;
  }
  function g(m, p, x, C, S) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return ((m = m.get(x) || null), a(p, m, "" + C, S));
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case mo:
          return (
            (m = m.get(C.key === null ? x : C.key) || null),
            l(p, m, C, S)
          );
        case Dr:
          return (
            (m = m.get(C.key === null ? x : C.key) || null),
            u(p, m, C, S)
          );
        case bn:
          var P = C._init;
          return g(m, p, x, P(C._payload), S);
      }
      if (ni(C) || Ws(C)) return ((m = m.get(x) || null), d(p, m, C, S, null));
      Po(p, C);
    }
    return null;
  }
  function w(m, p, x, C) {
    for (
      var S = null, P = null, T = p, j = (p = 0), N = null;
      T !== null && j < x.length;
      j++
    ) {
      T.index > j ? ((N = T), (T = null)) : (N = T.sibling);
      var A = h(m, T, x[j], C);
      if (A === null) {
        T === null && (T = N);
        break;
      }
      (e && T && A.alternate === null && t(m, T),
        (p = i(A, p, j)),
        P === null ? (S = A) : (P.sibling = A),
        (P = A),
        (T = N));
    }
    if (j === x.length) return (n(m, T), ae && rr(m, j), S);
    if (T === null) {
      for (; j < x.length; j++)
        ((T = f(m, x[j], C)),
          T !== null &&
            ((p = i(T, p, j)),
            P === null ? (S = T) : (P.sibling = T),
            (P = T)));
      return (ae && rr(m, j), S);
    }
    for (T = r(m, T); j < x.length; j++)
      ((N = g(T, m, j, x[j], C)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? j : N.key),
          (p = i(N, p, j)),
          P === null ? (S = N) : (P.sibling = N),
          (P = N)));
    return (
      e &&
        T.forEach(function (V) {
          return t(m, V);
        }),
      ae && rr(m, j),
      S
    );
  }
  function y(m, p, x, C) {
    var S = Ws(x);
    if (typeof S != "function") throw Error(R(150));
    if (((x = S.call(x)), x == null)) throw Error(R(151));
    for (
      var P = (S = null), T = p, j = (p = 0), N = null, A = x.next();
      T !== null && !A.done;
      j++, A = x.next()
    ) {
      T.index > j ? ((N = T), (T = null)) : (N = T.sibling);
      var V = h(m, T, A.value, C);
      if (V === null) {
        T === null && (T = N);
        break;
      }
      (e && T && V.alternate === null && t(m, T),
        (p = i(V, p, j)),
        P === null ? (S = V) : (P.sibling = V),
        (P = V),
        (T = N));
    }
    if (A.done) return (n(m, T), ae && rr(m, j), S);
    if (T === null) {
      for (; !A.done; j++, A = x.next())
        ((A = f(m, A.value, C)),
          A !== null &&
            ((p = i(A, p, j)),
            P === null ? (S = A) : (P.sibling = A),
            (P = A)));
      return (ae && rr(m, j), S);
    }
    for (T = r(m, T); !A.done; j++, A = x.next())
      ((A = g(T, m, j, A.value, C)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? j : A.key),
          (p = i(A, p, j)),
          P === null ? (S = A) : (P.sibling = A),
          (P = A)));
    return (
      e &&
        T.forEach(function (M) {
          return t(m, M);
        }),
      ae && rr(m, j),
      S
    );
  }
  function b(m, p, x, C) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === _r &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case mo:
          e: {
            for (var S = x.key, P = p; P !== null; ) {
              if (P.key === S) {
                if (((S = x.type), S === _r)) {
                  if (P.tag === 7) {
                    (n(m, P.sibling),
                      (p = s(P, x.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === bn &&
                    Vh(S) === P.type)
                ) {
                  (n(m, P.sibling),
                    (p = s(P, x.props)),
                    (p.ref = Gs(m, P, x)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            x.type === _r
              ? ((p = xr(x.props.children, m.mode, C, x.key)),
                (p.return = m),
                (m = p))
              : ((C = Xo(x.type, x.key, x.props, null, m.mode, C)),
                (C.ref = Gs(m, p, x)),
                (C.return = m),
                (m = C));
          }
          return o(m);
        case Dr:
          e: {
            for (P = x.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === x.containerInfo &&
                  p.stateNode.implementation === x.implementation
                ) {
                  (n(m, p.sibling),
                    (p = s(p, x.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = Hl(x, m.mode, C)), (p.return = m), (m = p));
          }
          return o(m);
        case bn:
          return ((P = x._init), b(m, p, P(x._payload), C));
      }
      if (ni(x)) return w(m, p, x, C);
      if (Ws(x)) return y(m, p, x, C);
      Po(m, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = s(p, x)), (p.return = m), (m = p))
          : (n(m, p), (p = Wl(x, m.mode, C)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return b;
}
var js = Fy(!0),
  Ly = Fy(!1),
  ga = Jn(null),
  ya = null,
  Hr = null,
  xd = null;
function wd() {
  xd = Hr = ya = null;
}
function bd(e) {
  var t = ga.current;
  (oe(ga), (e._currentValue = t));
}
function Wc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function rs(e, t) {
  ((ya = e),
    (xd = Hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null)));
}
function gt(e) {
  var t = e._currentValue;
  if (xd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hr === null)) {
      if (ya === null) throw Error(R(308));
      ((Hr = e), (ya.dependencies = { lanes: 0, firstContext: e }));
    } else Hr = Hr.next = e;
  return t;
}
var lr = null;
function Sd(e) {
  lr === null ? (lr = [e]) : lr.push(e);
}
function My(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Sd(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    ln(e, r)
  );
}
function ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Sn = !1;
function Cd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Oy(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function nn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function In(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      ln(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Sd(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    ln(e, n)
  );
}
function Wo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n));
  }
}
function zh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function va(e, t, n, r) {
  var s = e.updateQueue;
  Sn = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (i = u) : (o.next = u), (o = l));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = s.baseState;
    ((o = 0), (d = u = l = null), (a = i));
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((h = t), (g = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                f = w.call(g, f, h);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (h = typeof w == "function" ? w.call(g, f, h) : w),
                h == null)
              )
                break e;
              f = de({}, f, h);
              break e;
            case 2:
              Sn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        ((g = {
          eventTime: g,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (l = f)) : (d = d.next = g),
          (o |= h));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((kr |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function $h(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(R(191, s));
        s.call(r);
      }
    }
}
var to = {},
  Bt = Jn(to),
  Fi = Jn(to),
  Li = Jn(to);
function cr(e) {
  if (e === to) throw Error(R(174));
  return e;
}
function kd(e, t) {
  switch ((ne(Li, t), ne(Fi, e), ne(Bt, to), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kc(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = kc(t, e)));
  }
  (oe(Bt), ne(Bt, t));
}
function Ps() {
  (oe(Bt), oe(Fi), oe(Li));
}
function Dy(e) {
  cr(Li.current);
  var t = cr(Bt.current),
    n = kc(t, e.type);
  t !== n && (ne(Fi, e), ne(Bt, n));
}
function jd(e) {
  Fi.current === e && (oe(Bt), oe(Fi));
}
var le = Jn(0);
function xa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Il = [];
function Pd() {
  for (var e = 0; e < Il.length; e++)
    Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0;
}
var Ho = hn.ReactCurrentDispatcher,
  Vl = hn.ReactCurrentBatchConfig,
  Cr = 0,
  ue = null,
  ve = null,
  Se = null,
  wa = !1,
  hi = !1,
  Mi = 0,
  Qb = 0;
function Ee() {
  throw Error(R(321));
}
function Td(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Nt(e[n], t[n])) return !1;
  return !0;
}
function Nd(e, t, n, r, s, i) {
  if (
    ((Cr = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ho.current = e === null || e.memoizedState === null ? Yb : Zb),
    (e = n(r, s)),
    hi)
  ) {
    i = 0;
    do {
      if (((hi = !1), (Mi = 0), 25 <= i)) throw Error(R(301));
      ((i += 1),
        (Se = ve = null),
        (t.updateQueue = null),
        (Ho.current = Jb),
        (e = n(r, s)));
    } while (hi);
  }
  if (
    ((Ho.current = ba),
    (t = ve !== null && ve.next !== null),
    (Cr = 0),
    (Se = ve = ue = null),
    (wa = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Ed() {
  var e = Mi !== 0;
  return ((Mi = 0), e);
}
function Mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Se === null ? (ue.memoizedState = Se = e) : (Se = Se.next = e), Se);
}
function yt() {
  if (ve === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = Se === null ? ue.memoizedState : Se.next;
  if (t !== null) ((Se = t), (ve = e));
  else {
    if (e === null) throw Error(R(310));
    ((ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Se === null ? (ue.memoizedState = Se = e) : (Se = Se.next = e));
  }
  return Se;
}
function Oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zl(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ve,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((Cr & d) === d)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (ue.lanes |= d),
          (kr |= d));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (l === null ? (o = r) : (l.next = a),
      Nt(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (ue.lanes |= i), (kr |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    (Nt(i, t.memoizedState) || (Ke = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function _y() {}
function Iy(e, t) {
  var n = ue,
    r = yt(),
    s = t(),
    i = !Nt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ke = !0)),
    (r = r.queue),
    Ad($y.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Di(9, zy.bind(null, n, r, s, t), void 0, null),
      Ce === null)
    )
      throw Error(R(349));
    Cr & 30 || Vy(n, t, s);
  }
  return s;
}
function Vy(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function zy(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), By(t) && Uy(e));
}
function $y(e, t, n) {
  return n(function () {
    By(t) && Uy(e);
  });
}
function By(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nt(e, n);
  } catch {
    return !0;
  }
}
function Uy(e) {
  var t = ln(e, 1);
  t !== null && Tt(t, e, 1, -1);
}
function Bh(e) {
  var t = Mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Oi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xb.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Di(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wy() {
  return yt().memoizedState;
}
function Ko(e, t, n, r) {
  var s = Mt();
  ((ue.flags |= e),
    (s.memoizedState = Di(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Qa(e, t, n, r) {
  var s = yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ve !== null) {
    var o = ve.memoizedState;
    if (((i = o.destroy), r !== null && Td(r, o.deps))) {
      s.memoizedState = Di(t, n, i, r);
      return;
    }
  }
  ((ue.flags |= e), (s.memoizedState = Di(1 | t, n, i, r)));
}
function Uh(e, t) {
  return Ko(8390656, 8, e, t);
}
function Ad(e, t) {
  return Qa(2048, 8, e, t);
}
function Hy(e, t) {
  return Qa(4, 2, e, t);
}
function Ky(e, t) {
  return Qa(4, 4, e, t);
}
function Qy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Qa(4, 4, Qy.bind(null, t, e), n)
  );
}
function Rd() {}
function Gy(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Td(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xy(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Td(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Yy(e, t, n) {
  return Cr & 21
    ? (Nt(n, t) || ((n = ny()), (ue.lanes |= n), (kr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function qb(e, t) {
  var n = ee;
  ((ee = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Vl.transition;
  Vl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ee = n), (Vl.transition = r));
  }
}
function Zy() {
  return yt().memoizedState;
}
function Gb(e, t, n) {
  var r = zn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jy(e))
  )
    ev(t, n);
  else if (((n = My(e, t, n, r)), n !== null)) {
    var s = ze();
    (Tt(n, e, r, s), tv(n, t, r));
  }
}
function Xb(e, t, n) {
  var r = zn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jy(e)) ev(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), Nt(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), Sd(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = My(e, t, s, r)),
      n !== null && ((s = ze()), Tt(n, e, r, s), tv(n, t, r)));
  }
}
function Jy(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function ev(e, t) {
  hi = wa = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function tv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n));
  }
}
var ba = {
    readContext: gt,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  Yb = {
    readContext: gt,
    useCallback: function (e, t) {
      return ((Mt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: gt,
    useEffect: Uh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ko(4194308, 4, Qy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ko(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ko(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Mt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Gb.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Bh,
    useDebugValue: Rd,
    useDeferredValue: function (e) {
      return (Mt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bh(!1),
        t = e[0];
      return ((e = qb.bind(null, e[1])), (Mt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        s = Mt();
      if (ae) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(R(349));
        Cr & 30 || Vy(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Uh($y.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Di(9, zy.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Mt(),
        t = Ce.identifierPrefix;
      if (ae) {
        var n = en,
          r = Jt;
        ((n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Mi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Qb++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zb = {
    readContext: gt,
    useCallback: Gy,
    useContext: gt,
    useEffect: Ad,
    useImperativeHandle: qy,
    useInsertionEffect: Hy,
    useLayoutEffect: Ky,
    useMemo: Xy,
    useReducer: zl,
    useRef: Wy,
    useState: function () {
      return zl(Oi);
    },
    useDebugValue: Rd,
    useDeferredValue: function (e) {
      var t = yt();
      return Yy(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = zl(Oi)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: _y,
    useSyncExternalStore: Iy,
    useId: Zy,
    unstable_isNewReconciler: !1,
  },
  Jb = {
    readContext: gt,
    useCallback: Gy,
    useContext: gt,
    useEffect: Ad,
    useImperativeHandle: qy,
    useInsertionEffect: Hy,
    useLayoutEffect: Ky,
    useMemo: Xy,
    useReducer: $l,
    useRef: Wy,
    useState: function () {
      return $l(Oi);
    },
    useDebugValue: Rd,
    useDeferredValue: function (e) {
      var t = yt();
      return ve === null ? (t.memoizedState = e) : Yy(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Oi)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: _y,
    useSyncExternalStore: Iy,
    useId: Zy,
    unstable_isNewReconciler: !1,
  };
function bt(e, t) {
  if (e && e.defaultProps) {
    ((t = de({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var qa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      s = zn(e),
      i = nn(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = In(e, i, s)),
      t !== null && (Tt(t, e, s, r), Wo(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      s = zn(e),
      i = nn(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = In(e, i, s)),
      t !== null && (Tt(t, e, s, r), Wo(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = zn(e),
      s = nn(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = In(e, s, r)),
      t !== null && (Tt(t, e, r, n), Wo(t, e, r)));
  },
};
function Wh(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ni(n, r) || !Ni(s, i)
        : !0
  );
}
function nv(e, t, n) {
  var r = !1,
    s = Kn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = gt(i))
      : ((s = qe(t) ? br : De.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Cs(e, s) : Kn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Hh(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qa.enqueueReplaceState(t, t.state, null));
}
function Kc(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Cd(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = gt(i))
    : ((i = qe(t) ? br : De.current), (s.context = Cs(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Hc(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && qa.enqueueReplaceState(s, s.state, null),
      va(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Ts(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Tw(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var eS = typeof WeakMap == "function" ? WeakMap : Map;
function rv(e, t, n) {
  ((n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ca || ((Ca = !0), (ru = r)), Qc(e, t));
    }),
    n
  );
}
function sv(e, t, n) {
  ((n = nn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Qc(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Qc(e, t),
          typeof r != "function" &&
            (Vn === null ? (Vn = new Set([this])) : Vn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Kh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new eS();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = pS.bind(null, e, t, n)), t.then(e, e));
}
function Qh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qh(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nn(-1, 1)), (t.tag = 2), In(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tS = hn.ReactCurrentOwner,
  Ke = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? Ly(t, null, n, r) : js(t, e.child, n, r);
}
function Gh(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    rs(t, s),
    (r = Nd(e, t, n, r, i, s)),
    (n = Ed()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        cn(e, t, s))
      : (ae && n && gd(t), (t.flags |= 1), Ve(e, t, r, s), t.child)
  );
}
function Xh(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Vd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), iv(e, t, i, r, s))
      : ((e = Xo(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ni), n(o, r) && e.ref === t.ref)
    )
      return cn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = $n(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function iv(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ni(i, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return ((t.lanes = e.lanes), cn(e, t, s));
  }
  return qc(e, t, n, r, s);
}
function ov(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Qr, Je),
        (Je |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Qr, Je),
          (Je |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Qr, Je),
        (Je |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Qr, Je),
      (Je |= r));
  return (Ve(e, t, s, n), t.child);
}
function av(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qc(e, t, n, r, s) {
  var i = qe(n) ? br : De.current;
  return (
    (i = Cs(t, i)),
    rs(t, s),
    (n = Nd(e, t, n, r, i, s)),
    (r = Ed()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        cn(e, t, s))
      : (ae && r && gd(t), (t.flags |= 1), Ve(e, t, n, s), t.child)
  );
}
function Yh(e, t, n, r, s) {
  if (qe(n)) {
    var i = !0;
    ha(t);
  } else i = !1;
  if ((rs(t, s), t.stateNode === null))
    (Qo(e, t), nv(t, n, r), Kc(t, n, r, s), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = gt(u))
      : ((u = qe(n) ? br : De.current), (u = Cs(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Hh(t, o, r, u)),
      (Sn = !1));
    var h = t.memoizedState;
    ((o.state = h),
      va(t, r, o, s),
      (l = t.memoizedState),
      a !== r || h !== l || Qe.current || Sn
        ? (typeof d == "function" && (Hc(t, n, d, r), (l = t.memoizedState)),
          (a = Sn || Wh(t, n, a, r, h, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Oy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : bt(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = gt(l))
        : ((l = qe(n) ? br : De.current), (l = Cs(t, l))));
    var g = n.getDerivedStateFromProps;
    ((d =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && Hh(t, o, r, l)),
      (Sn = !1),
      (h = t.memoizedState),
      (o.state = h),
      va(t, r, o, s));
    var w = t.memoizedState;
    a !== f || h !== w || Qe.current || Sn
      ? (typeof g == "function" && (Hc(t, n, g, r), (w = t.memoizedState)),
        (u = Sn || Wh(t, n, u, r, h, w, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gc(e, t, n, r, i, s);
}
function Gc(e, t, n, r, s, i) {
  av(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (s && Dh(t, n, !1), cn(e, t, i));
  ((r = t.stateNode), (tS.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = js(t, e.child, null, i)), (t.child = js(t, null, a, i)))
      : Ve(e, t, a, i),
    (t.memoizedState = r.state),
    s && Dh(t, n, !0),
    t.child
  );
}
function lv(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Oh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Oh(e, t.context, !1),
    kd(e, t.containerInfo));
}
function Zh(e, t, n, r, s) {
  return (ks(), vd(s), (t.flags |= 256), Ve(e, t, n, r), t.child);
}
var Xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cv(e, t, n) {
  var r = t.pendingProps,
    s = le.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ne(le, s & 1),
    e === null)
  )
    return (
      Uc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ya(o, r, 0, null)),
              (e = xr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Yc(n)),
              (t.memoizedState = Xc),
              e)
            : Fd(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return nS(e, t, o, r, a, s, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = $n(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = $n(a, i)) : ((i = xr(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Yc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = $n(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fd(e, t) {
  return (
    (t = Ya({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function To(e, t, n, r) {
  return (
    r !== null && vd(r),
    js(t, e.child, null, n),
    (e = Fd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nS(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bl(Error(R(422)))), To(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = Ya({ mode: "visible", children: r.children }, s, 0, null)),
          (i = xr(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && js(t, e.child, null, o),
          (t.child.memoizedState = Yc(o)),
          (t.memoizedState = Xc),
          i);
  if (!(t.mode & 1)) return To(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(R(419))),
      (r = Bl(i, r, void 0)),
      To(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Ke || a)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), ln(e, s), Tt(r, e, s, -1)));
    }
    return (Id(), (r = Bl(Error(R(421)))), To(e, t, o, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mS.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (tt = _n(s.nextSibling)),
      (nt = t),
      (ae = !0),
      (kt = null),
      e !== null &&
        ((ft[ht++] = Jt),
        (ft[ht++] = en),
        (ft[ht++] = Sr),
        (Jt = e.id),
        (en = e.overflow),
        (Sr = t)),
      (t = Fd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Jh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Wc(e.return, t, n));
}
function Ul(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function uv(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Ve(e, t, r.children, n), (r = le.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jh(e, n, t);
        else if (e.tag === 19) Jh(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ne(le, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && xa(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ul(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && xa(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        Ul(t, !0, n, null, i);
        break;
      case "together":
        Ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = $n(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function rS(e, t, n) {
  switch (t.tag) {
    case 3:
      (lv(t), ks());
      break;
    case 5:
      Dy(t);
      break;
    case 1:
      qe(t.type) && ha(t);
      break;
    case 4:
      kd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (ne(ga, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(le, le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cv(e, t, n)
            : (ne(le, le.current & 1),
              (e = cn(e, t, n)),
              e !== null ? e.sibling : null);
      ne(le, le.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ne(le, le.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), ov(e, t, n));
  }
  return cn(e, t, n);
}
var dv, Zc, fv, hv;
dv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Zc = function () {};
fv = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), cr(Bt.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = wc(e, s)), (r = wc(e, r)), (i = []));
        break;
      case "select":
        ((s = de({}, s, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Cc(e, s)), (r = Cc(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = da);
    }
    jc(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (bi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (i || (i = []), i.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (bi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && ie("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
hv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xs(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function sS(e, t, n) {
  var r = t.pendingProps;
  switch ((yd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ae(t), null);
    case 1:
      return (qe(t.type) && fa(), Ae(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Ps(),
        oe(Qe),
        oe(De),
        Pd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (ou(kt), (kt = null)))),
        Zc(e, t),
        Ae(t),
        null
      );
    case 5:
      jd(t);
      var s = cr(Li.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (fv(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return (Ae(t), null);
        }
        if (((e = cr(Bt.current)), jo(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Vt] = t), (r[Ri] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ie("cancel", r), ie("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < si.length; s++) ie(si[s], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ie("error", r), ie("load", r));
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              (lh(r, i), ie("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                ie("invalid", r));
              break;
            case "textarea":
              (uh(r, i), ie("invalid", r));
          }
          (jc(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ko(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ko(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : bi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              (go(r), ch(r, i, !0));
              break;
            case "textarea":
              (go(r), dh(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = da);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $g(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Vt] = t),
            (e[Ri] = r),
            dv(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Pc(n, r)), n)) {
              case "dialog":
                (ie("cancel", e), ie("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ie("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < si.length; s++) ie(si[s], e);
                s = r;
                break;
              case "source":
                (ie("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (ie("error", e), ie("load", e), (s = r));
                break;
              case "details":
                (ie("toggle", e), (s = r));
                break;
              case "input":
                (lh(e, r), (s = wc(e, r)), ie("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = de({}, r, { value: void 0 })),
                  ie("invalid", e));
                break;
              case "textarea":
                (uh(e, r), (s = Cc(e, r)), ie("invalid", e));
                break;
              default:
                s = r;
            }
            (jc(n, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Wg(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Bg(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Si(e, l)
                        : typeof l == "number" && Si(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (bi.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && ie("scroll", e)
                          : l != null && nd(e, i, l, o));
              }
            switch (n) {
              case "input":
                (go(e), ch(e, r, !1));
                break;
              case "textarea":
                (go(e), dh(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = da);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ae(t), null);
    case 6:
      if (e && t.stateNode != null) hv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = cr(Li.current)), cr(Bt.current), jo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vt] = t),
            (i = r.nodeValue !== n) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ko(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ko(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vt] = t),
            (t.stateNode = r));
      }
      return (Ae(t), null);
    case 13:
      if (
        (oe(le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && tt !== null && t.mode & 1 && !(t.flags & 128))
          (Ry(), ks(), (t.flags |= 98560), (i = !1));
        else if (((i = jo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[Vt] = t;
          } else
            (ks(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ae(t), (i = !1));
        } else (kt !== null && (ou(kt), (kt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || le.current & 1 ? we === 0 && (we = 3) : Id())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        Ps(),
        Zc(e, t),
        e === null && Ei(t.stateNode.containerInfo),
        Ae(t),
        null
      );
    case 10:
      return (bd(t.type._context), Ae(t), null);
    case 17:
      return (qe(t.type) && fa(), Ae(t), null);
    case 19:
      if ((oe(le), (i = t.memoizedState), i === null)) return (Ae(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Xs(i, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = xa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Xs(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ne(le, (le.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ge() > Ns &&
            ((t.flags |= 128), (r = !0), Xs(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xs(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ae)
            )
              return (Ae(t), null);
          } else
            2 * ge() - i.renderingStartTime > Ns &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xs(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (n = le.current),
          ne(le, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        _d(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Je & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function iS(e, t) {
  switch ((yd(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && fa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ps(),
        oe(Qe),
        oe(De),
        Pd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (jd(t), null);
    case 13:
      if (
        (oe(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        ks();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (oe(le), null);
    case 4:
      return (Ps(), null);
    case 10:
      return (bd(t.type._context), null);
    case 22:
    case 23:
      return (_d(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var No = !1,
  Le = !1,
  oS = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Kr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function Jc(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var ep = !1;
function aS(e, t) {
  if (((Dc = la), (e = vy()), md(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = o + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;
            )
              ((h = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === s && (a = o),
                h === i && ++d === r && (l = o),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_c = { focusedElem: e, selectionRange: n }, la = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (O = e));
    else
      for (; O !== null; ) {
        t = O;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    b = w.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : bt(t.type, y),
                      b,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          pe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (O = e));
          break;
        }
        O = t.return;
      }
  return ((w = ep), (ep = !1), w);
}
function pi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Jc(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Ga(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function eu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pv(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), pv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vt], delete t[Ri], delete t[zc], delete t[Ub], delete t[Wb])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function mv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = da)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; )
      (tu(e, t, n), (e = e.sibling));
}
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; )
      (nu(e, t, n), (e = e.sibling));
}
var ke = null,
  Ct = !1;
function pn(e, t, n) {
  for (n = n.child; n !== null; ) (gv(e, t, n), (n = n.sibling));
}
function gv(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == "function")
    try {
      $t.onCommitFiberUnmount($a, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Kr(n, t);
    case 6:
      var r = ke,
        s = Ct;
      ((ke = null),
        pn(e, t, n),
        (ke = r),
        (Ct = s),
        ke !== null &&
          (Ct
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode)));
      break;
    case 18:
      ke !== null &&
        (Ct
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, n)
              : e.nodeType === 1 && Dl(e, n),
            Pi(e))
          : Dl(ke, n.stateNode));
      break;
    case 4:
      ((r = ke),
        (s = Ct),
        (ke = n.stateNode.containerInfo),
        (Ct = !0),
        pn(e, t, n),
        (ke = r),
        (Ct = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Jc(n, t, o),
            (s = s.next));
        } while (s !== r);
      }
      pn(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Kr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          pe(n, t, a);
        }
      pn(e, t, n);
      break;
    case 21:
      pn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), pn(e, t, n), (Le = r))
        : pn(e, t, n);
      break;
    default:
      pn(e, t, n);
  }
}
function np(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new oS()),
      t.forEach(function (r) {
        var s = gS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ke = a.stateNode), (Ct = !1));
              break e;
            case 3:
              ((ke = a.stateNode.containerInfo), (Ct = !0));
              break e;
            case 4:
              ((ke = a.stateNode.containerInfo), (Ct = !0));
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(R(160));
        (gv(i, o, s), (ke = null), (Ct = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (u) {
        pe(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (yv(t, e), (t = t.sibling));
}
function yv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xt(t, e), Lt(e), r & 4)) {
        try {
          (pi(3, e, e.return), Ga(3, e));
        } catch (y) {
          pe(e, e.return, y);
        }
        try {
          pi(5, e, e.return);
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 1:
      (xt(t, e), Lt(e), r & 512 && n !== null && Kr(n, n.return));
      break;
    case 5:
      if (
        (xt(t, e),
        Lt(e),
        r & 512 && n !== null && Kr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Si(s, "");
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && Vg(s, i),
              Pc(a, o));
            var u = Pc(a, i);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                f = l[o + 1];
              d === "style"
                ? Wg(s, f)
                : d === "dangerouslySetInnerHTML"
                  ? Bg(s, f)
                  : d === "children"
                    ? Si(s, f)
                    : nd(s, d, f, u);
            }
            switch (a) {
              case "input":
                bc(s, i);
                break;
              case "textarea":
                zg(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Jr(s, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jr(s, !!i.multiple, i.defaultValue, !0)
                      : Jr(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Ri] = i;
          } catch (y) {
            pe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((xt(t, e), Lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (xt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pi(t.containerInfo);
        } catch (y) {
          pe(e, e.return, y);
        }
      break;
    case 4:
      (xt(t, e), Lt(e));
      break;
    case 13:
      (xt(t, e),
        Lt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Od = ge())),
        r & 4 && np(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (u = Le) || d), xt(t, e), (Le = u)) : xt(t, e),
        Lt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (f = O = d; O !== null; ) {
              switch (((h = O), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pi(4, h, h.return);
                  break;
                case 1:
                  Kr(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (y) {
                      pe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Kr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    sp(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (O = g)) : sp(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((s = f.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Ug("display", o))));
              } catch (y) {
                pe(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                pe(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (xt(t, e), Lt(e), r & 4 && np(e));
      break;
    case 21:
      break;
    default:
      (xt(t, e), Lt(e));
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Si(s, ""), (r.flags &= -33));
          var i = tp(e);
          nu(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = tp(e);
          tu(e, a, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lS(e, t, n) {
  ((O = e), vv(e));
}
function vv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var s = O,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || No;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Le;
        a = No;
        var u = Le;
        if (((No = o), (Le = l) && !u))
          for (O = s; O !== null; )
            ((o = O),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ip(s)
                : l !== null
                  ? ((l.return = o), (O = l))
                  : ip(s));
        for (; i !== null; ) ((O = i), vv(i), (i = i.sibling));
        ((O = s), (No = a), (Le = u));
      }
      rp(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (O = i)) : rp(e);
  }
}
function rp(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Ga(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && $h(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $h(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Pi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Le || (t.flags & 512 && eu(t));
      } catch (h) {
        pe(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function sp(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function ip(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ga(4, t);
          } catch (l) {
            pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pe(t, s, l);
            }
          }
          var i = t.return;
          try {
            eu(t);
          } catch (l) {
            pe(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            eu(t);
          } catch (l) {
            pe(t, o, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (O = a));
      break;
    }
    O = t.return;
  }
}
var cS = Math.ceil,
  Sa = hn.ReactCurrentDispatcher,
  Ld = hn.ReactCurrentOwner,
  mt = hn.ReactCurrentBatchConfig,
  Z = 0,
  Ce = null,
  ye = null,
  Te = 0,
  Je = 0,
  Qr = Jn(0),
  we = 0,
  _i = null,
  kr = 0,
  Xa = 0,
  Md = 0,
  mi = null,
  He = null,
  Od = 0,
  Ns = 1 / 0,
  Yt = null,
  Ca = !1,
  ru = null,
  Vn = null,
  Eo = !1,
  Ln = null,
  ka = 0,
  gi = 0,
  su = null,
  qo = -1,
  Go = 0;
function ze() {
  return Z & 6 ? ge() : qo !== -1 ? qo : (qo = ge());
}
function zn(e) {
  return e.mode & 1
    ? Z & 2 && Te !== 0
      ? Te & -Te
      : Kb.transition !== null
        ? (Go === 0 && (Go = ny()), Go)
        : ((e = ee),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cy(e.type))),
          e)
    : 1;
}
function Tt(e, t, n, r) {
  if (50 < gi) throw ((gi = 0), (su = null), Error(R(185)));
  (Zi(e, n, r),
    (!(Z & 2) || e !== Ce) &&
      (e === Ce && (!(Z & 2) && (Xa |= n), we === 4 && kn(e, Te)),
      Ge(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Ns = ge() + 500), Ka && er())));
}
function Ge(e, t) {
  var n = e.callbackNode;
  Kw(e, t);
  var r = aa(e, e === Ce ? Te : 0);
  if (r === 0)
    (n !== null && ph(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ph(n), t === 1))
      (e.tag === 0 ? Hb(op.bind(null, e)) : Ny(op.bind(null, e)),
        $b(function () {
          !(Z & 6) && er();
        }),
        (n = null));
    else {
      switch (ry(r)) {
        case 1:
          n = ad;
          break;
        case 4:
          n = ey;
          break;
        case 16:
          n = oa;
          break;
        case 536870912:
          n = ty;
          break;
        default:
          n = oa;
      }
      n = Pv(n, xv.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function xv(e, t) {
  if (((qo = -1), (Go = 0), Z & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (ss() && e.callbackNode !== n) return null;
  var r = aa(e, e === Ce ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ja(e, r);
  else {
    t = r;
    var s = Z;
    Z |= 2;
    var i = bv();
    (Ce !== e || Te !== t) && ((Yt = null), (Ns = ge() + 500), vr(e, t));
    do
      try {
        fS();
        break;
      } catch (a) {
        wv(e, a);
      }
    while (!0);
    (wd(),
      (Sa.current = i),
      (Z = s),
      ye !== null ? (t = 0) : ((Ce = null), (Te = 0), (t = we)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Rc(e)), s !== 0 && ((r = s), (t = iu(e, s)))), t === 1)
    )
      throw ((n = _i), vr(e, 0), kn(e, r), Ge(e, ge()), n);
    if (t === 6) kn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !uS(s) &&
          ((t = ja(e, r)),
          t === 2 && ((i = Rc(e)), i !== 0 && ((r = i), (t = iu(e, i)))),
          t === 1))
      )
        throw ((n = _i), vr(e, 0), kn(e, r), Ge(e, ge()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          sr(e, He, Yt);
          break;
        case 3:
          if (
            (kn(e, r), (r & 130023424) === r && ((t = Od + 500 - ge()), 10 < t))
          ) {
            if (aa(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (ze(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Vc(sr.bind(null, e, He, Yt), t);
            break;
          }
          sr(e, He, Yt);
          break;
        case 4:
          if ((kn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Pt(r);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * cS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vc(sr.bind(null, e, He, Yt), r);
            break;
          }
          sr(e, He, Yt);
          break;
        case 5:
          sr(e, He, Yt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return (Ge(e, ge()), e.callbackNode === n ? xv.bind(null, e) : null);
}
function iu(e, t) {
  var n = mi;
  return (
    e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256),
    (e = ja(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && ou(t)),
    e
  );
}
function ou(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function uS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Nt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function kn(e, t) {
  for (
    t &= ~Md,
      t &= ~Xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Pt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function op(e) {
  if (Z & 6) throw Error(R(327));
  ss();
  var t = aa(e, 0);
  if (!(t & 1)) return (Ge(e, ge()), null);
  var n = ja(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rc(e);
    r !== 0 && ((t = r), (n = iu(e, r)));
  }
  if (n === 1) throw ((n = _i), vr(e, 0), kn(e, t), Ge(e, ge()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sr(e, He, Yt),
    Ge(e, ge()),
    null
  );
}
function Dd(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    ((Z = n), Z === 0 && ((Ns = ge() + 500), Ka && er()));
  }
}
function jr(e) {
  Ln !== null && Ln.tag === 0 && !(Z & 6) && ss();
  var t = Z;
  Z |= 1;
  var n = mt.transition,
    r = ee;
  try {
    if (((mt.transition = null), (ee = 1), e)) return e();
  } finally {
    ((ee = r), (mt.transition = n), (Z = t), !(Z & 6) && er());
  }
}
function _d() {
  ((Je = Qr.current), oe(Qr));
}
function vr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zb(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((yd(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && fa());
          break;
        case 3:
          (Ps(), oe(Qe), oe(De), Pd());
          break;
        case 5:
          jd(r);
          break;
        case 4:
          Ps();
          break;
        case 13:
          oe(le);
          break;
        case 19:
          oe(le);
          break;
        case 10:
          bd(r.type._context);
          break;
        case 22:
        case 23:
          _d();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ye = e = $n(e.current, null)),
    (Te = Je = t),
    (we = 0),
    (_i = null),
    (Md = Xa = kr = 0),
    (He = mi = null),
    lr !== null)
  ) {
    for (t = 0; t < lr.length; t++)
      if (((n = lr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    lr = null;
  }
  return e;
}
function wv(e, t) {
  do {
    var n = ye;
    try {
      if ((wd(), (Ho.current = ba), wa)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        wa = !1;
      }
      if (
        ((Cr = 0),
        (Se = ve = ue = null),
        (hi = !1),
        (Mi = 0),
        (Ld.current = null),
        n === null || n.return === null)
      ) {
        ((we = 1), (_i = t), (ye = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Te),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Qh(o);
          if (g !== null) {
            ((g.flags &= -257),
              qh(g, o, a, i, t),
              g.mode & 1 && Kh(i, u, t),
              (t = g),
              (l = u));
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              (y.add(l), (t.updateQueue = y));
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Kh(i, u, t), Id());
              break e;
            }
            l = Error(R(426));
          }
        } else if (ae && a.mode & 1) {
          var b = Qh(o);
          if (b !== null) {
            (!(b.flags & 65536) && (b.flags |= 256),
              qh(b, o, a, i, t),
              vd(Ts(l, a)));
            break e;
          }
        }
        ((i = l = Ts(l, a)),
          we !== 4 && (we = 2),
          mi === null ? (mi = [i]) : mi.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = rv(i, l, t);
              zh(i, m);
              break e;
            case 1:
              a = l;
              var p = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Vn === null || !Vn.has(x))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var C = sv(i, a, t);
                zh(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Cv(n);
    } catch (S) {
      ((t = S), ye === n && n !== null && (ye = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function bv() {
  var e = Sa.current;
  return ((Sa.current = ba), e === null ? ba : e);
}
function Id() {
  ((we === 0 || we === 3 || we === 2) && (we = 4),
    Ce === null || (!(kr & 268435455) && !(Xa & 268435455)) || kn(Ce, Te));
}
function ja(e, t) {
  var n = Z;
  Z |= 2;
  var r = bv();
  (Ce !== e || Te !== t) && ((Yt = null), vr(e, t));
  do
    try {
      dS();
      break;
    } catch (s) {
      wv(e, s);
    }
  while (!0);
  if ((wd(), (Z = n), (Sa.current = r), ye !== null)) throw Error(R(261));
  return ((Ce = null), (Te = 0), we);
}
function dS() {
  for (; ye !== null; ) Sv(ye);
}
function fS() {
  for (; ye !== null && !_w(); ) Sv(ye);
}
function Sv(e) {
  var t = jv(e.alternate, e, Je);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Cv(e) : (ye = t),
    (Ld.current = null));
}
function Cv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = iS(n, t)), n !== null)) {
        ((n.flags &= 32767), (ye = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((we = 6), (ye = null));
        return;
      }
    } else if (((n = sS(n, t, Je)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function sr(e, t, n) {
  var r = ee,
    s = mt.transition;
  try {
    ((mt.transition = null), (ee = 1), hS(e, t, n, r));
  } finally {
    ((mt.transition = s), (ee = r));
  }
  return null;
}
function hS(e, t, n, r) {
  do ss();
  while (Ln !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Qw(e, i),
    e === Ce && ((ye = Ce = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Eo ||
      ((Eo = !0),
      Pv(oa, function () {
        return (ss(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = mt.transition), (mt.transition = null));
    var o = ee;
    ee = 1;
    var a = Z;
    ((Z |= 4),
      (Ld.current = null),
      aS(e, n),
      yv(n, e),
      Lb(_c),
      (la = !!Dc),
      (_c = Dc = null),
      (e.current = n),
      lS(n),
      Iw(),
      (Z = a),
      (ee = o),
      (mt.transition = i));
  } else e.current = n;
  if (
    (Eo && ((Eo = !1), (Ln = e), (ka = s)),
    (i = e.pendingLanes),
    i === 0 && (Vn = null),
    $w(n.stateNode),
    Ge(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ca) throw ((Ca = !1), (e = ru), (ru = null), e);
  return (
    ka & 1 && e.tag !== 0 && ss(),
    (i = e.pendingLanes),
    i & 1 ? (e === su ? gi++ : ((gi = 0), (su = e))) : (gi = 0),
    er(),
    null
  );
}
function ss() {
  if (Ln !== null) {
    var e = ry(ka),
      t = mt.transition,
      n = ee;
    try {
      if (((mt.transition = null), (ee = 16 > e ? 16 : e), Ln === null))
        var r = !1;
      else {
        if (((e = Ln), (Ln = null), (ka = 0), Z & 6)) throw Error(R(331));
        var s = Z;
        for (Z |= 4, O = e.current; O !== null; ) {
          var i = O,
            o = i.child;
          if (O.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (O = u; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (O = f));
                  else
                    for (; O !== null; ) {
                      d = O;
                      var h = d.sibling,
                        g = d.return;
                      if ((pv(d), d === u)) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = g), (O = h));
                        break;
                      }
                      O = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var b = y.sibling;
                    ((y.sibling = null), (y = b));
                  } while (y !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (O = o));
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pi(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (O = m));
                break e;
              }
              O = i.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          o = O;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) ((x.return = o), (O = x));
          else
            e: for (o = p; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ga(9, a);
                  }
                } catch (S) {
                  pe(a, a.return, S);
                }
              if (a === o) {
                O = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                ((C.return = a.return), (O = C));
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((Z = s), er(), $t && typeof $t.onPostCommitFiberRoot == "function")
        )
          try {
            $t.onPostCommitFiberRoot($a, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ee = n), (mt.transition = t));
    }
  }
  return !1;
}
function ap(e, t, n) {
  ((t = Ts(n, t)),
    (t = rv(e, t, 1)),
    (e = In(e, t, 1)),
    (t = ze()),
    e !== null && (Zi(e, 1, t), Ge(e, t)));
}
function pe(e, t, n) {
  if (e.tag === 3) ap(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ap(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vn === null || !Vn.has(r)))
        ) {
          ((e = Ts(n, e)),
            (e = sv(t, e, 1)),
            (t = In(t, e, 1)),
            (e = ze()),
            t !== null && (Zi(t, 1, e), Ge(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function pS(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Te & n) === n &&
      (we === 4 || (we === 3 && (Te & 130023424) === Te && 500 > ge() - Od)
        ? vr(e, 0)
        : (Md |= n)),
    Ge(e, t));
}
function kv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xo), (xo <<= 1), !(xo & 130023424) && (xo = 4194304))
      : (t = 1));
  var n = ze();
  ((e = ln(e, t)), e !== null && (Zi(e, t, n), Ge(e, n)));
}
function mS(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), kv(e, n));
}
function gS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  (r !== null && r.delete(t), kv(e, n));
}
var jv;
jv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ke = !1), rS(e, t, n));
      Ke = !!(e.flags & 131072);
    }
  else ((Ke = !1), ae && t.flags & 1048576 && Ey(t, ma, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Qo(e, t), (e = t.pendingProps));
      var s = Cs(t, De.current);
      (rs(t, n), (s = Nd(null, t, r, e, s, n)));
      var i = Ed();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((i = !0), ha(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Cd(t),
            (s.updater = qa),
            (t.stateNode = s),
            (s._reactInternals = t),
            Kc(t, r, e, n),
            (t = Gc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ae && i && gd(t), Ve(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qo(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = vS(r)),
          (e = bt(r, e)),
          s)
        ) {
          case 0:
            t = qc(null, t, r, e, n);
            break e;
          case 1:
            t = Yh(null, t, r, e, n);
            break e;
          case 11:
            t = Gh(null, t, r, e, n);
            break e;
          case 14:
            t = Xh(null, t, r, bt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : bt(r, s)),
        qc(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : bt(r, s)),
        Yh(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((lv(t), e === null)) throw Error(R(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Oy(e, t),
          va(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = Ts(Error(R(423)), t)), (t = Zh(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Ts(Error(R(424)), t)), (t = Zh(e, t, r, n, s)));
            break e;
          } else
            for (
              tt = _n(t.stateNode.containerInfo.firstChild),
                nt = t,
                ae = !0,
                kt = null,
                n = Ly(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((ks(), r === s)) {
            t = cn(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dy(t),
        e === null && Uc(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Ic(r, s) ? (o = null) : i !== null && Ic(r, i) && (t.flags |= 32),
        av(e, t),
        Ve(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Uc(t), null);
    case 13:
      return cv(e, t, n);
    case 4:
      return (
        kd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = js(t, null, r, n)) : Ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : bt(r, s)),
        Gh(e, t, r, s, n)
      );
    case 7:
      return (Ve(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ve(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ve(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          ne(ga, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Nt(i.value, o)) {
            if (i.children === s.children && !Qe.current) {
              t = cn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = nn(-1, n & -n)), (l.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Wc(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(R(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Wc(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (Ve(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        rs(t, n),
        (s = gt(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = bt(r, t.pendingProps)),
        (s = bt(r.type, s)),
        Xh(e, t, r, s, n)
      );
    case 15:
      return iv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : bt(r, s)),
        Qo(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), ha(t)) : (e = !1),
        rs(t, n),
        nv(t, r, s),
        Kc(t, r, s, n),
        Gc(null, t, r, !0, e, n)
      );
    case 19:
      return uv(e, t, n);
    case 22:
      return ov(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Pv(e, t) {
  return Jg(e, t);
}
function yS(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function pt(e, t, n, r) {
  return new yS(e, t, n, r);
}
function Vd(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function vS(e) {
  if (typeof e == "function") return Vd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sd)) return 11;
    if (e === id) return 14;
  }
  return 2;
}
function $n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xo(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Vd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case _r:
        return xr(n.children, s, i, t);
      case rd:
        ((o = 8), (s |= 8));
        break;
      case gc:
        return (
          (e = pt(12, n, t, s | 2)),
          (e.elementType = gc),
          (e.lanes = i),
          e
        );
      case yc:
        return ((e = pt(13, n, t, s)), (e.elementType = yc), (e.lanes = i), e);
      case vc:
        return ((e = pt(19, n, t, s)), (e.elementType = vc), (e.lanes = i), e);
      case Dg:
        return Ya(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mg:
              o = 10;
              break e;
            case Og:
              o = 9;
              break e;
            case sd:
              o = 11;
              break e;
            case id:
              o = 14;
              break e;
            case bn:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(o, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function xr(e, t, n, r) {
  return ((e = pt(7, e, r, t)), (e.lanes = n), e);
}
function Ya(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = Dg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Wl(e, t, n) {
  return ((e = pt(6, e, null, t)), (e.lanes = n), e);
}
function Hl(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xS(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function zd(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new xS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = pt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cd(i),
    e
  );
}
function wS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tv(e) {
  if (!e) return Kn;
  e = e._reactInternals;
  e: {
    if (Ar(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Ty(e, n, t);
  }
  return t;
}
function Nv(e, t, n, r, s, i, o, a, l) {
  return (
    (e = zd(n, r, !0, e, s, i, o, a, l)),
    (e.context = Tv(null)),
    (n = e.current),
    (r = ze()),
    (s = zn(n)),
    (i = nn(r, s)),
    (i.callback = t ?? null),
    In(n, i, s),
    (e.current.lanes = s),
    Zi(e, s, r),
    Ge(e, r),
    e
  );
}
function Za(e, t, n, r) {
  var s = t.current,
    i = ze(),
    o = zn(s);
  return (
    (n = Tv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nn(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = In(s, t, o)),
    e !== null && (Tt(e, s, o, i), Wo(e, s, o)),
    o
  );
}
function Pa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $d(e, t) {
  (lp(e, t), (e = e.alternate) && lp(e, t));
}
function bS() {
  return null;
}
var Ev =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bd(e) {
  this._internalRoot = e;
}
Ja.prototype.render = Bd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Za(e, t, null, null);
};
Ja.prototype.unmount = Bd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (jr(function () {
      Za(null, e, null, null);
    }),
      (t[an] = null));
  }
};
function Ja(e) {
  this._internalRoot = e;
}
Ja.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Cn.length && t !== 0 && t < Cn[n].priority; n++);
    (Cn.splice(n, 0, e), n === 0 && ly(e));
  }
};
function Ud(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function el(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function cp() {}
function SS(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Pa(o);
        i.call(u);
      };
    }
    var o = Nv(t, r, e, 0, null, !1, !1, "", cp);
    return (
      (e._reactRootContainer = o),
      (e[an] = o.current),
      Ei(e.nodeType === 8 ? e.parentNode : e),
      jr(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Pa(l);
      a.call(u);
    };
  }
  var l = zd(e, 0, !1, null, null, !1, !1, "", cp);
  return (
    (e._reactRootContainer = l),
    (e[an] = l.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    jr(function () {
      Za(t, l, n, r);
    }),
    l
  );
}
function tl(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Pa(o);
        a.call(l);
      };
    }
    Za(t, o, e, s);
  } else o = SS(n, t, e, s, r);
  return Pa(o);
}
sy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ri(t.pendingLanes);
        n !== 0 &&
          (ld(t, n | 1), Ge(t, ge()), !(Z & 6) && ((Ns = ge() + 500), er()));
      }
      break;
    case 13:
      (jr(function () {
        var r = ln(e, 1);
        if (r !== null) {
          var s = ze();
          Tt(r, e, 1, s);
        }
      }),
        $d(e, 1));
  }
};
cd = function (e) {
  if (e.tag === 13) {
    var t = ln(e, 134217728);
    if (t !== null) {
      var n = ze();
      Tt(t, e, 134217728, n);
    }
    $d(e, 134217728);
  }
};
iy = function (e) {
  if (e.tag === 13) {
    var t = zn(e),
      n = ln(e, t);
    if (n !== null) {
      var r = ze();
      Tt(n, e, t, r);
    }
    $d(e, t);
  }
};
oy = function () {
  return ee;
};
ay = function (e, t) {
  var n = ee;
  try {
    return ((ee = e), t());
  } finally {
    ee = n;
  }
};
Nc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Ha(r);
            if (!s) throw Error(R(90));
            (Ig(r), bc(r, s));
          }
        }
      }
      break;
    case "textarea":
      zg(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Jr(e, !!n.multiple, t, !1));
  }
};
Qg = Dd;
qg = jr;
var CS = { usingClientEntryPoint: !1, Events: [eo, $r, Ha, Hg, Kg, Dd] },
  Ys = {
    findFiberByHostInstance: ar,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  kS = {
    bundleType: Ys.bundleType,
    version: Ys.version,
    rendererPackageName: Ys.rendererPackageName,
    rendererConfig: Ys.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Yg(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ys.findFiberByHostInstance || bS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ao.isDisabled && Ao.supportsFiber)
    try {
      (($a = Ao.inject(kS)), ($t = Ao));
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = CS;
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ud(t)) throw Error(R(200));
  return wS(e, t, null, n);
};
ot.createRoot = function (e, t) {
  if (!Ud(e)) throw Error(R(299));
  var n = !1,
    r = "",
    s = Ev;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = zd(e, 1, !1, null, null, n, !1, r, s)),
    (e[an] = t.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    new Bd(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return ((e = Yg(t)), (e = e === null ? null : e.stateNode), e);
};
ot.flushSync = function (e) {
  return jr(e);
};
ot.hydrate = function (e, t, n) {
  if (!el(t)) throw Error(R(200));
  return tl(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
  if (!Ud(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = Ev;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Nv(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[an] = t.current),
    Ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new Ja(t);
};
ot.render = function (e, t, n) {
  if (!el(t)) throw Error(R(200));
  return tl(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
  if (!el(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (jr(function () {
        tl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[an] = null));
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = Dd;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!el(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return tl(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function Av() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av);
    } catch (e) {
      console.error(e);
    }
}
(Av(), (Ag.exports = ot));
var no = Ag.exports;
const jS = vg(no);
var Rv,
  up = no;
((Rv = up.createRoot), up.hydrateRoot);
function PS(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    s,
    i,
    o = [],
    a = "",
    l = e.split("/");
  for (l[0] || l.shift(); (s = l.shift()); )
    ((n = s[0]),
      n === "*"
        ? (o.push(n), (a += s[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : n === ":"
          ? ((r = s.indexOf("?", 1)),
            (i = s.indexOf(".", 1)),
            o.push(s.substring(1, ~r ? r : ~i ? i : s.length)),
            (a += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~i && (a += (~r ? "?" : "") + "\\" + s.substring(i)))
          : (a += "/" + s));
  return {
    keys: o,
    pattern: new RegExp("^" + a + (t ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Fv = { exports: {} },
  Lv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Es = v;
function TS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var NS = typeof Object.is == "function" ? Object.is : TS,
  ES = Es.useState,
  AS = Es.useEffect,
  RS = Es.useLayoutEffect,
  FS = Es.useDebugValue;
function LS(e, t) {
  var n = t(),
    r = ES({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    i = r[1];
  return (
    RS(
      function () {
        ((s.value = n), (s.getSnapshot = t), Kl(s) && i({ inst: s }));
      },
      [e, n, t],
    ),
    AS(
      function () {
        return (
          Kl(s) && i({ inst: s }),
          e(function () {
            Kl(s) && i({ inst: s });
          })
        );
      },
      [e],
    ),
    FS(n),
    n
  );
}
function Kl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !NS(e, n);
  } catch {
    return !0;
  }
}
function MS(e, t) {
  return t();
}
var OS =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? MS
    : LS;
Lv.useSyncExternalStore =
  Es.useSyncExternalStore !== void 0 ? Es.useSyncExternalStore : OS;
Fv.exports = Lv;
var DS = Fv.exports;
const _S = pw.useInsertionEffect,
  IS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  VS = IS ? v.useLayoutEffect : v.useEffect,
  zS = _S || VS,
  Mv = (e) => {
    const t = v.useRef([e, (...n) => t[0](...n)]).current;
    return (
      zS(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  $S = "popstate",
  Wd = "pushState",
  Hd = "replaceState",
  BS = "hashchange",
  dp = [$S, Wd, Hd, BS],
  US = (e) => {
    for (const t of dp) addEventListener(t, e);
    return () => {
      for (const t of dp) removeEventListener(t, e);
    };
  },
  Ov = (e, t) => DS.useSyncExternalStore(US, e, t),
  WS = () => location.search,
  HS = ({ ssrSearch: e = "" } = {}) => Ov(WS, () => e),
  fp = () => location.pathname,
  KS = ({ ssrPath: e } = {}) => Ov(fp, e ? () => e : fp),
  QS = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? Hd : Wd](n, "", e),
  qS = (e = {}) => [KS(e), QS],
  hp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[hp] > "u") {
  for (const e of [Wd, Hd]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return ((r.arguments = arguments), dispatchEvent(r), n);
    };
  }
  Object.defineProperty(window, hp, { value: !0 });
}
const GS = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + t
      : t.slice(e.length) || "/",
  Dv = (e = "") => (e === "/" ? "" : e),
  XS = (e, t) => (e[0] === "~" ? e.slice(1) : Dv(t) + e),
  YS = (e = "", t) => GS(pp(Dv(e)), pp(t)),
  pp = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  _v = {
    hook: qS,
    searchHook: HS,
    parser: PS,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e,
  },
  Iv = v.createContext(_v),
  Is = () => v.useContext(Iv),
  Vv = {},
  zv = v.createContext(Vv),
  ZS = () => v.useContext(zv),
  nl = (e) => {
    const [t, n] = e.hook(e);
    return [YS(e.base, t), Mv((r, s) => n(XS(r, e.base), s))];
  },
  Rr = () => nl(Is()),
  Kd = (e, t, n, r) => {
    const { pattern: s, keys: i } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
      o = s.exec(n) || [],
      [a, ...l] = o;
    return a !== void 0
      ? [
          !0,
          (() => {
            const u =
              i !== !1
                ? Object.fromEntries(i.map((f, h) => [f, l[h]]))
                : o.groups;
            let d = { ...l };
            return (u && Object.assign(d, u), d);
          })(),
          ...(r ? [a] : []),
        ]
      : [!1, null];
  },
  JS = (e) => Kd(Is().parser, e, Rr()[0]),
  eC = ({ children: e, ...t }) => {
    var d, f;
    const n = Is(),
      r = t.hook ? _v : n;
    let s = r;
    const [i, o] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ?? [];
    (o && ((t.ssrSearch = o), (t.ssrPath = i)),
      (t.hrefs = t.hrefs ?? ((f = t.hook) == null ? void 0 : f.hrefs)));
    let a = v.useRef({}),
      l = a.current,
      u = l;
    for (let h in r) {
      const g = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      (l === u && g !== u[h] && (a.current = u = { ...u }),
        (u[h] = g),
        g !== r[h] && (s = u));
    }
    return v.createElement(Iv.Provider, { value: s, children: e });
  },
  mp = ({ children: e, component: t }, n) =>
    t ? v.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e,
  tC = (e) => {
    let t = v.useRef(Vv),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return (Object.keys(e).length === 0 && (n = e), (t.current = n));
  },
  Mr = ({ path: e, nest: t, match: n, ...r }) => {
    const s = Is(),
      [i] = nl(s),
      [o, a, l] = n ?? Kd(s.parser, e, i, t),
      u = tC({ ...ZS(), ...a });
    if (!o) return null;
    const d = l ? v.createElement(eC, { base: l }, mp(r, u)) : mp(r, u);
    return v.createElement(zv.Provider, { value: u, children: d });
  },
  Qd = v.forwardRef((e, t) => {
    const n = Is(),
      [r, s] = nl(n),
      {
        to: i = "",
        href: o = i,
        onClick: a,
        asChild: l,
        children: u,
        className: d,
        replace: f,
        state: h,
        ...g
      } = e,
      w = Mv((b) => {
        b.ctrlKey ||
          b.metaKey ||
          b.altKey ||
          b.shiftKey ||
          b.button !== 0 ||
          (a == null || a(b),
          b.defaultPrevented || (b.preventDefault(), s(o, e)));
      }),
      y = n.hrefs(o[0] === "~" ? o.slice(1) : n.base + o, n);
    return l && v.isValidElement(u)
      ? v.cloneElement(u, { onClick: w, href: y })
      : v.createElement("a", {
          ...g,
          onClick: w,
          href: y,
          className: d != null && d.call ? d(r === o) : d,
          children: u,
          ref: t,
        });
  }),
  $v = (e) =>
    Array.isArray(e)
      ? e.flatMap((t) => $v(t && t.type === v.Fragment ? t.props.children : t))
      : [e],
  nC = ({ children: e, location: t }) => {
    const n = Is(),
      [r] = nl(n);
    for (const s of $v(e)) {
      let i = 0;
      if (
        v.isValidElement(s) &&
        (i = Kd(n.parser, s.props.path, t || r, s.props.nest))[0]
      )
        return v.cloneElement(s, { match: i });
    }
    return null;
  };
var ro = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Pr = typeof window > "u" || "Deno" in globalThis;
function dt() {}
function rC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function au(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Bv(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function is(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== qd(o, t.options)) return !1;
    } else if (!Vi(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function yp(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Ii(t.options.mutationKey) !== Ii(i)) return !1;
    } else if (!Vi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function qd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ii)(e);
}
function Ii(e) {
  return JSON.stringify(e, (t, n) =>
    cu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n,
  );
}
function Vi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !Vi(e[n], t[n]))
        : !1;
}
function Uv(e, t) {
  if (e === t) return e;
  const n = vp(e) && vp(t);
  if (n || (cu(e) && cu(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const d = n ? u : i[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), l++)
        : ((a[d] = Uv(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && l++);
    }
    return s === o && l === s ? e : a;
  }
  return t;
}
function lu(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function vp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function cu(e) {
  if (!xp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !xp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function xp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function sC(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function uu(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Uv(e, t)
      : t;
}
function iC(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function oC(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Gd = Symbol();
function Wv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Gd
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var dr,
  jn,
  cs,
  cg,
  aC =
    ((cg = class extends ro {
      constructor() {
        super();
        H(this, dr);
        H(this, jn);
        H(this, cs);
        D(this, cs, (t) => {
          if (!Pr && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, jn) || this.setEventListener(k(this, cs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, jn)) == null || t.call(this), D(this, jn, void 0));
      }
      setEventListener(t) {
        var n;
        (D(this, cs, t),
          (n = k(this, jn)) == null || n.call(this),
          D(
            this,
            jn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        k(this, dr) !== t && (D(this, dr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof k(this, dr) == "boolean"
          ? k(this, dr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (dr = new WeakMap()),
    (jn = new WeakMap()),
    (cs = new WeakMap()),
    cg),
  Xd = new aC(),
  us,
  Pn,
  ds,
  ug,
  lC =
    ((ug = class extends ro {
      constructor() {
        super();
        H(this, us, !0);
        H(this, Pn);
        H(this, ds);
        D(this, ds, (t) => {
          if (!Pr && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, Pn) || this.setEventListener(k(this, ds));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, Pn)) == null || t.call(this), D(this, Pn, void 0));
      }
      setEventListener(t) {
        var n;
        (D(this, ds, t),
          (n = k(this, Pn)) == null || n.call(this),
          D(this, Pn, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        k(this, us) !== t &&
          (D(this, us, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return k(this, us);
      }
    }),
    (us = new WeakMap()),
    (Pn = new WeakMap()),
    (ds = new WeakMap()),
    ug),
  Ta = new lC();
function du() {
  let e, t;
  const n = new Promise((s, i) => {
    ((e = s), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(s) {
    (Object.assign(n, s), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (s) => {
      (r({ status: "fulfilled", value: s }), e(s));
    }),
    (n.reject = (s) => {
      (r({ status: "rejected", reason: s }), t(s));
    }),
    n
  );
}
function cC(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Hv(e) {
  return (e ?? "online") === "online" ? Ta.isOnline() : !0;
}
var Kv = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Ql(e) {
  return e instanceof Kv;
}
function Qv(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = du(),
    o = (y) => {
      var b;
      r || (h(new Kv(y)), (b = e.abort) == null || b.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Xd.isFocused() &&
      (e.networkMode === "always" || Ta.isOnline()) &&
      e.canRun(),
    d = () => Hv(e.networkMode) && e.canRun(),
    f = (y) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onSuccess) == null || b.call(e, y),
        s == null || s(),
        i.resolve(y));
    },
    h = (y) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onError) == null || b.call(e, y),
        s == null || s(),
        i.reject(y));
    },
    g = () =>
      new Promise((y) => {
        var b;
        ((s = (m) => {
          (r || u()) && y(m);
        }),
          (b = e.onPause) == null || b.call(e));
      }).then(() => {
        var y;
        ((s = void 0), r || (y = e.onContinue) == null || y.call(e));
      }),
    w = () => {
      if (r) return;
      let y;
      const b = n === 0 ? e.initialPromise : void 0;
      try {
        y = b ?? e.fn();
      } catch (m) {
        y = Promise.reject(m);
      }
      Promise.resolve(y)
        .then(f)
        .catch((m) => {
          var P;
          if (r) return;
          const p = e.retry ?? (Pr ? 0 : 3),
            x = e.retryDelay ?? cC,
            C = typeof x == "function" ? x(n, m) : x,
            S =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !S) {
            h(m);
            return;
          }
          (n++,
            (P = e.onFail) == null || P.call(e, n, m),
            sC(C)
              .then(() => (u() ? void 0 : g()))
              .then(() => {
                t ? h(m) : w();
              }));
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? w() : g().then(w), i),
  };
}
function uC() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = (a) => setTimeout(a, 0);
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      ((e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || o());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var Pe = uC(),
  fr,
  dg,
  qv =
    ((dg = class {
      constructor() {
        H(this, fr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          au(this.gcTime) &&
            D(
              this,
              fr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Pr ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        k(this, fr) && (clearTimeout(k(this, fr)), D(this, fr, void 0));
      }
    }),
    (fr = new WeakMap()),
    dg),
  fs,
  hs,
  ut,
  Re,
  Qi,
  hr,
  St,
  Xt,
  fg,
  dC =
    ((fg = class extends qv {
      constructor(t) {
        super();
        H(this, St);
        H(this, fs);
        H(this, hs);
        H(this, ut);
        H(this, Re);
        H(this, Qi);
        H(this, hr);
        (D(this, hr, !1),
          D(this, Qi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          D(this, ut, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          D(this, fs, fC(this.options)),
          (this.state = t.state ?? k(this, fs)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = k(this, Re)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...k(this, Qi), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          k(this, ut).remove(this);
      }
      setData(t, n) {
        const r = uu(this.state.data, t, this.options);
        return (
          X(this, St, Xt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        X(this, St, Xt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = k(this, Re)) == null ? void 0 : r.promise;
        return (
          (s = k(this, Re)) == null || s.cancel(t),
          n ? n.then(dt).catch(dt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(k(this, fs)));
      }
      isActive() {
        return this.observers.some((t) => jt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Gd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Bv(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Re)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Re)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          k(this, ut).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (k(this, Re) &&
              (k(this, hr)
                ? k(this, Re).cancel({ revert: !0 })
                : k(this, Re).cancelRetry()),
            this.scheduleGc()),
          k(this, ut).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          X(this, St, Xt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (k(this, Re))
            return (k(this, Re).continueRetry(), k(this, Re).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (D(this, hr, !0), r.signal),
            });
          },
          i = () => {
            const f = Wv(this.options, n),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(h),
              D(this, hr, !1),
              this.options.persister ? this.options.persister(f, h, this) : f(h)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        (s(o),
          (l = this.options.behavior) == null || l.onFetch(o, this),
          D(this, hs, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = o.fetchOptions) == null ? void 0 : u.meta)) &&
            X(this, St, Xt).call(this, {
              type: "fetch",
              meta: (d = o.fetchOptions) == null ? void 0 : d.meta,
            }));
        const a = (f) => {
          var h, g, w, y;
          ((Ql(f) && f.silent) ||
            X(this, St, Xt).call(this, { type: "error", error: f }),
            Ql(f) ||
              ((g = (h = k(this, ut).config).onError) == null ||
                g.call(h, f, this),
              (y = (w = k(this, ut).config).onSettled) == null ||
                y.call(w, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          D(
            this,
            Re,
            Qv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, g, w, y;
                if (f === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (b) {
                  a(b);
                  return;
                }
                ((g = (h = k(this, ut).config).onSuccess) == null ||
                  g.call(h, f, this),
                  (y = (w = k(this, ut).config).onSettled) == null ||
                    y.call(w, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: a,
              onFail: (f, h) => {
                X(this, St, Xt).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                X(this, St, Xt).call(this, { type: "pause" });
              },
              onContinue: () => {
                X(this, St, Xt).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            }),
          ),
          k(this, Re).start()
        );
      }
    }),
    (fs = new WeakMap()),
    (hs = new WeakMap()),
    (ut = new WeakMap()),
    (Re = new WeakMap()),
    (Qi = new WeakMap()),
    (hr = new WeakMap()),
    (St = new WeakSet()),
    (Xt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Gv(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Ql(s) && s.revert && k(this, hs)
              ? { ...k(this, hs), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Pe.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            k(this, ut).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    fg);
function Gv(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Hv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function fC(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ot,
  hg,
  hC =
    ((hg = class extends ro {
      constructor(t = {}) {
        super();
        H(this, Ot);
        ((this.config = t), D(this, Ot, new Map()));
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? qd(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new dC({
              cache: this,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        k(this, Ot).has(t.queryHash) ||
          (k(this, Ot).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = k(this, Ot).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && k(this, Ot).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Pe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return k(this, Ot).get(t);
      }
      getAll() {
        return [...k(this, Ot).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => gp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => gp(t, r)) : n;
      }
      notify(t) {
        Pe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Pe.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Pe.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ot = new WeakMap()),
    hg),
  Dt,
  _e,
  pr,
  _t,
  xn,
  pg,
  pC =
    ((pg = class extends qv {
      constructor(t) {
        super();
        H(this, _t);
        H(this, Dt);
        H(this, _e);
        H(this, pr);
        ((this.mutationId = t.mutationId),
          D(this, _e, t.mutationCache),
          D(this, Dt, []),
          (this.state = t.state || mC()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        k(this, Dt).includes(t) ||
          (k(this, Dt).push(t),
          this.clearGcTimeout(),
          k(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (D(
          this,
          Dt,
          k(this, Dt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          k(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        k(this, Dt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : k(this, _e).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = k(this, pr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, a, l, u, d, f, h, g, w, y, b, m, p, x, C, S, P, T;
        D(
          this,
          pr,
          Qv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, N) => {
              X(this, _t, xn).call(this, {
                type: "failed",
                failureCount: j,
                error: N,
              });
            },
            onPause: () => {
              X(this, _t, xn).call(this, { type: "pause" });
            },
            onContinue: () => {
              X(this, _t, xn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => k(this, _e).canRun(this),
          }),
        );
        const n = this.state.status === "pending",
          r = !k(this, pr).canStart();
        try {
          if (!n) {
            (X(this, _t, xn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (s = k(this, _e).config).onMutate) == null
                ? void 0
                : i.call(s, t, this)));
            const N = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            N !== this.state.context &&
              X(this, _t, xn).call(this, {
                type: "pending",
                context: N,
                variables: t,
                isPaused: r,
              });
          }
          const j = await k(this, pr).start();
          return (
            await ((u = (l = k(this, _e).config).onSuccess) == null
              ? void 0
              : u.call(l, j, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, j, t, this.state.context)),
            await ((g = (h = k(this, _e).config).onSettled) == null
              ? void 0
              : g.call(
                  h,
                  j,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((y = (w = this.options).onSettled) == null
              ? void 0
              : y.call(w, j, null, t, this.state.context)),
            X(this, _t, xn).call(this, { type: "success", data: j }),
            j
          );
        } catch (j) {
          try {
            throw (
              await ((m = (b = k(this, _e).config).onError) == null
                ? void 0
                : m.call(b, j, t, this.state.context, this)),
              await ((x = (p = this.options).onError) == null
                ? void 0
                : x.call(p, j, t, this.state.context)),
              await ((S = (C = k(this, _e).config).onSettled) == null
                ? void 0
                : S.call(
                    C,
                    void 0,
                    j,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((T = (P = this.options).onSettled) == null
                ? void 0
                : T.call(P, void 0, j, t, this.state.context)),
              j
            );
          } finally {
            X(this, _t, xn).call(this, { type: "error", error: j });
          }
        } finally {
          k(this, _e).runNext(this);
        }
      }
    }),
    (Dt = new WeakMap()),
    (_e = new WeakMap()),
    (pr = new WeakMap()),
    (_t = new WeakSet()),
    (xn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Pe.batch(() => {
          (k(this, Dt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            k(this, _e).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    pg);
function mC() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ze,
  qi,
  mg,
  gC =
    ((mg = class extends ro {
      constructor(t = {}) {
        super();
        H(this, Ze);
        H(this, qi);
        ((this.config = t), D(this, Ze, new Map()), D(this, qi, Date.now()));
      }
      build(t, n, r) {
        const s = new pC({
          mutationCache: this,
          mutationId: ++ho(this, qi)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(s), s);
      }
      add(t) {
        const n = Ro(t),
          r = k(this, Ze).get(n) ?? [];
        (r.push(t),
          k(this, Ze).set(n, r),
          this.notify({ type: "added", mutation: t }));
      }
      remove(t) {
        var r;
        const n = Ro(t);
        if (k(this, Ze).has(n)) {
          const s =
            (r = k(this, Ze).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          s && (s.length === 0 ? k(this, Ze).delete(n) : k(this, Ze).set(n, s));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = k(this, Ze).get(Ro(t))) == null
            ? void 0
            : r.find((s) => s.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = k(this, Ze).get(Ro(t))) == null
            ? void 0
            : r.find((s) => s !== t && s.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Pe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...k(this, Ze).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => yp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => yp(t, n));
      }
      notify(t) {
        Pe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Pe.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(dt))),
        );
      }
    }),
    (Ze = new WeakMap()),
    (qi = new WeakMap()),
    mg);
function Ro(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function wp(e) {
  return {
    onFetch: (t, n) => {
      var d, f, h, g, w;
      const r = t.options,
        s =
          (h =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((g = t.state.data) == null ? void 0 : g.pages) || [],
        o = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let y = !1;
        const b = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          m = Wv(t.options, t.fetchOptions),
          p = async (x, C, S) => {
            if (y) return Promise.reject();
            if (C == null && x.pages.length) return Promise.resolve(x);
            const P = {
              queryKey: t.queryKey,
              pageParam: C,
              direction: S ? "backward" : "forward",
              meta: t.options.meta,
            };
            b(P);
            const T = await m(P),
              { maxPages: j } = t.options,
              N = S ? oC : iC;
            return {
              pages: N(x.pages, T, j),
              pageParams: N(x.pageParams, C, j),
            };
          };
        if (s && i.length) {
          const x = s === "backward",
            C = x ? yC : bp,
            S = { pages: i, pageParams: o },
            P = C(r, S);
          a = await p(S, P, x);
        } else {
          const x = e ?? i.length;
          do {
            const C = l === 0 ? (o[0] ?? r.initialPageParam) : bp(r, a);
            if (l > 0 && C == null) break;
            ((a = await p(a, C)), l++);
          } while (l < x);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, b;
            return (b = (y = t.options).persister) == null
              ? void 0
              : b.call(
                  y,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function bp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function yC(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var fe,
  Tn,
  Nn,
  ps,
  ms,
  En,
  gs,
  ys,
  gg,
  vC =
    ((gg = class {
      constructor(e = {}) {
        H(this, fe);
        H(this, Tn);
        H(this, Nn);
        H(this, ps);
        H(this, ms);
        H(this, En);
        H(this, gs);
        H(this, ys);
        (D(this, fe, e.queryCache || new hC()),
          D(this, Tn, e.mutationCache || new gC()),
          D(this, Nn, e.defaultOptions || {}),
          D(this, ps, new Map()),
          D(this, ms, new Map()),
          D(this, En, 0));
      }
      mount() {
        (ho(this, En)._++,
          k(this, En) === 1 &&
            (D(
              this,
              gs,
              Xd.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, fe).onFocus());
              }),
            ),
            D(
              this,
              ys,
              Ta.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, fe).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (ho(this, En)._--,
          k(this, En) === 0 &&
            ((e = k(this, gs)) == null || e.call(this),
            D(this, gs, void 0),
            (t = k(this, ys)) == null || t.call(this),
            D(this, ys, void 0)));
      }
      isFetching(e) {
        return k(this, fe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return k(this, Tn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, fe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = k(this, fe).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(is(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return k(this, fe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = k(this, fe).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = rC(t, i);
        if (o !== void 0)
          return k(this, fe)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Pe.batch(() =>
          k(this, fe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, fe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = k(this, fe);
        Pe.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = k(this, fe),
          r = { type: "active", ...e };
        return Pe.batch(
          () => (
            n.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(r, t)
          ),
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Pe.batch(() =>
            k(this, fe)
              .findAll(e)
              .map((s) => s.cancel(n)),
          );
        return Promise.all(r).then(dt).catch(dt);
      }
      invalidateQueries(e = {}, t = {}) {
        return Pe.batch(() => {
          if (
            (k(this, fe)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Pe.batch(() =>
            k(this, fe)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(dt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(dt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = k(this, fe).build(this, t);
        return n.isStaleByTime(is(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(dt).catch(dt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = wp(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(dt).catch(dt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = wp(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Ta.isOnline()
          ? k(this, Tn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return k(this, fe);
      }
      getMutationCache() {
        return k(this, Tn);
      }
      getDefaultOptions() {
        return k(this, Nn);
      }
      setDefaultOptions(e) {
        D(this, Nn, e);
      }
      setQueryDefaults(e, t) {
        k(this, ps).set(Ii(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...k(this, ps).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Vi(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        k(this, ms).set(Ii(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...k(this, ms).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Vi(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...k(this, Nn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = qd(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === Gd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...k(this, Nn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (k(this, fe).clear(), k(this, Tn).clear());
      }
    }),
    (fe = new WeakMap()),
    (Tn = new WeakMap()),
    (Nn = new WeakMap()),
    (ps = new WeakMap()),
    (ms = new WeakMap()),
    (En = new WeakMap()),
    (gs = new WeakMap()),
    (ys = new WeakMap()),
    gg),
  We,
  Y,
  Gi,
  Ie,
  mr,
  vs,
  An,
  It,
  Xi,
  xs,
  ws,
  gr,
  yr,
  Rn,
  bs,
  J,
  ii,
  fu,
  hu,
  pu,
  mu,
  gu,
  yu,
  vu,
  Xv,
  yg,
  xC =
    ((yg = class extends ro {
      constructor(t, n) {
        super();
        H(this, J);
        H(this, We);
        H(this, Y);
        H(this, Gi);
        H(this, Ie);
        H(this, mr);
        H(this, vs);
        H(this, An);
        H(this, It);
        H(this, Xi);
        H(this, xs);
        H(this, ws);
        H(this, gr);
        H(this, yr);
        H(this, Rn);
        H(this, bs, new Set());
        ((this.options = n),
          D(this, We, t),
          D(this, It, null),
          D(this, An, du()),
          this.options.experimental_prefetchInRender ||
            k(this, An).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            ),
          this.bindMethods(),
          this.setOptions(n));
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (k(this, Y).addObserver(this),
          Sp(k(this, Y), this.options)
            ? X(this, J, ii).call(this)
            : this.updateResult(),
          X(this, J, mu).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return xu(k(this, Y), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return xu(k(this, Y), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        ((this.listeners = new Set()),
          X(this, J, gu).call(this),
          X(this, J, yu).call(this),
          k(this, Y).removeObserver(this));
      }
      setOptions(t, n) {
        const r = this.options,
          s = k(this, Y);
        if (
          ((this.options = k(this, We).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof jt(this.options.enabled, k(this, Y)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        (X(this, J, vu).call(this),
          k(this, Y).setOptions(this.options),
          r._defaulted &&
            !lu(this.options, r) &&
            k(this, We)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: k(this, Y),
                observer: this,
              }));
        const i = this.hasListeners();
        (i && Cp(k(this, Y), s, this.options, r) && X(this, J, ii).call(this),
          this.updateResult(n),
          i &&
            (k(this, Y) !== s ||
              jt(this.options.enabled, k(this, Y)) !==
                jt(r.enabled, k(this, Y)) ||
              is(this.options.staleTime, k(this, Y)) !==
                is(r.staleTime, k(this, Y))) &&
            X(this, J, fu).call(this));
        const o = X(this, J, hu).call(this);
        i &&
          (k(this, Y) !== s ||
            jt(this.options.enabled, k(this, Y)) !==
              jt(r.enabled, k(this, Y)) ||
            o !== k(this, Rn)) &&
          X(this, J, pu).call(this, o);
      }
      getOptimisticResult(t) {
        const n = k(this, We).getQueryCache().build(k(this, We), t),
          r = this.createResult(n, t);
        return (
          bC(this, r) &&
            (D(this, Ie, r),
            D(this, vs, this.options),
            D(this, mr, k(this, Y).state)),
          r
        );
      }
      getCurrentResult() {
        return k(this, Ie);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(r, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), n == null || n(s), t[s]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        k(this, bs).add(t);
      }
      getCurrentQuery() {
        return k(this, Y);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = k(this, We).defaultQueryOptions(t),
          r = k(this, We).getQueryCache().build(k(this, We), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return X(this, J, ii)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), k(this, Ie)));
      }
      createResult(t, n) {
        var j;
        const r = k(this, Y),
          s = this.options,
          i = k(this, Ie),
          o = k(this, mr),
          a = k(this, vs),
          u = t !== r ? t.state : k(this, Gi),
          { state: d } = t;
        let f = { ...d },
          h = !1,
          g;
        if (n._optimisticResults) {
          const N = this.hasListeners(),
            A = !N && Sp(t, n),
            V = N && Cp(t, r, n, s);
          ((A || V) && (f = { ...f, ...Gv(d.data, t.options) }),
            n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle"));
        }
        let { error: w, errorUpdatedAt: y, status: b } = f;
        if (n.select && f.data !== void 0)
          if (
            i &&
            f.data === (o == null ? void 0 : o.data) &&
            n.select === k(this, Xi)
          )
            g = k(this, xs);
          else
            try {
              (D(this, Xi, n.select),
                (g = n.select(f.data)),
                (g = uu(i == null ? void 0 : i.data, g, n)),
                D(this, xs, g),
                D(this, It, null));
            } catch (N) {
              D(this, It, N);
            }
        else g = f.data;
        if (n.placeholderData !== void 0 && g === void 0 && b === "pending") {
          let N;
          if (
            i != null &&
            i.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            N = i.data;
          else if (
            ((N =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (j = k(this, ws)) == null ? void 0 : j.state.data,
                    k(this, ws),
                  )
                : n.placeholderData),
            n.select && N !== void 0)
          )
            try {
              ((N = n.select(N)), D(this, It, null));
            } catch (A) {
              D(this, It, A);
            }
          N !== void 0 &&
            ((b = "success"),
            (g = uu(i == null ? void 0 : i.data, N, n)),
            (h = !0));
        }
        k(this, It) &&
          ((w = k(this, It)),
          (g = k(this, xs)),
          (y = Date.now()),
          (b = "error"));
        const m = f.fetchStatus === "fetching",
          p = b === "pending",
          x = b === "error",
          C = p && m,
          S = g !== void 0,
          T = {
            status: b,
            fetchStatus: f.fetchStatus,
            isPending: p,
            isSuccess: b === "success",
            isError: x,
            isInitialLoading: C,
            isLoading: C,
            data: g,
            dataUpdatedAt: f.dataUpdatedAt,
            error: w,
            errorUpdatedAt: y,
            failureCount: f.fetchFailureCount,
            failureReason: f.fetchFailureReason,
            errorUpdateCount: f.errorUpdateCount,
            isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
            isFetchedAfterMount:
              f.dataUpdateCount > u.dataUpdateCount ||
              f.errorUpdateCount > u.errorUpdateCount,
            isFetching: m,
            isRefetching: m && !p,
            isLoadingError: x && !S,
            isPaused: f.fetchStatus === "paused",
            isPlaceholderData: h,
            isRefetchError: x && S,
            isStale: Yd(t, n),
            refetch: this.refetch,
            promise: k(this, An),
          };
        if (this.options.experimental_prefetchInRender) {
          const N = (M) => {
              T.status === "error"
                ? M.reject(T.error)
                : T.data !== void 0 && M.resolve(T.data);
            },
            A = () => {
              const M = D(this, An, (T.promise = du()));
              N(M);
            },
            V = k(this, An);
          switch (V.status) {
            case "pending":
              t.queryHash === r.queryHash && N(V);
              break;
            case "fulfilled":
              (T.status === "error" || T.data !== V.value) && A();
              break;
            case "rejected":
              (T.status !== "error" || T.error !== V.reason) && A();
              break;
          }
        }
        return T;
      }
      updateResult(t) {
        const n = k(this, Ie),
          r = this.createResult(k(this, Y), this.options);
        if (
          (D(this, mr, k(this, Y).state),
          D(this, vs, this.options),
          k(this, mr).data !== void 0 && D(this, ws, k(this, Y)),
          lu(r, n))
        )
          return;
        D(this, Ie, r);
        const s = {},
          i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == "function" ? o() : o;
            if (a === "all" || (!a && !k(this, bs).size)) return !0;
            const l = new Set(a ?? k(this, bs));
            return (
              this.options.throwOnError && l.add("error"),
              Object.keys(k(this, Ie)).some((u) => {
                const d = u;
                return k(this, Ie)[d] !== n[d] && l.has(d);
              })
            );
          };
        ((t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0),
          X(this, J, Xv).call(this, { ...s, ...t }));
      }
      onQueryUpdate() {
        (this.updateResult(), this.hasListeners() && X(this, J, mu).call(this));
      }
    }),
    (We = new WeakMap()),
    (Y = new WeakMap()),
    (Gi = new WeakMap()),
    (Ie = new WeakMap()),
    (mr = new WeakMap()),
    (vs = new WeakMap()),
    (An = new WeakMap()),
    (It = new WeakMap()),
    (Xi = new WeakMap()),
    (xs = new WeakMap()),
    (ws = new WeakMap()),
    (gr = new WeakMap()),
    (yr = new WeakMap()),
    (Rn = new WeakMap()),
    (bs = new WeakMap()),
    (J = new WeakSet()),
    (ii = function (t) {
      X(this, J, vu).call(this);
      let n = k(this, Y).fetch(this.options, t);
      return ((t != null && t.throwOnError) || (n = n.catch(dt)), n);
    }),
    (fu = function () {
      X(this, J, gu).call(this);
      const t = is(this.options.staleTime, k(this, Y));
      if (Pr || k(this, Ie).isStale || !au(t)) return;
      const r = Bv(k(this, Ie).dataUpdatedAt, t) + 1;
      D(
        this,
        gr,
        setTimeout(() => {
          k(this, Ie).isStale || this.updateResult();
        }, r),
      );
    }),
    (hu = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(k(this, Y))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (pu = function (t) {
      (X(this, J, yu).call(this),
        D(this, Rn, t),
        !(
          Pr ||
          jt(this.options.enabled, k(this, Y)) === !1 ||
          !au(k(this, Rn)) ||
          k(this, Rn) === 0
        ) &&
          D(
            this,
            yr,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Xd.isFocused()) &&
                  X(this, J, ii).call(this);
              },
              k(this, Rn),
            ),
          ));
    }),
    (mu = function () {
      (X(this, J, fu).call(this),
        X(this, J, pu).call(this, X(this, J, hu).call(this)));
    }),
    (gu = function () {
      k(this, gr) && (clearTimeout(k(this, gr)), D(this, gr, void 0));
    }),
    (yu = function () {
      k(this, yr) && (clearInterval(k(this, yr)), D(this, yr, void 0));
    }),
    (vu = function () {
      const t = k(this, We).getQueryCache().build(k(this, We), this.options);
      if (t === k(this, Y)) return;
      const n = k(this, Y);
      (D(this, Y, t),
        D(this, Gi, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this)));
    }),
    (Xv = function (t) {
      Pe.batch(() => {
        (t.listeners &&
          this.listeners.forEach((n) => {
            n(k(this, Ie));
          }),
          k(this, We)
            .getQueryCache()
            .notify({ query: k(this, Y), type: "observerResultsUpdated" }));
      });
    }),
    yg);
function wC(e, t) {
  return (
    jt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Sp(e, t) {
  return wC(e, t) || (e.state.data !== void 0 && xu(e, t, t.refetchOnMount));
}
function xu(e, t, n) {
  if (jt(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Yd(e, t));
  }
  return !1;
}
function Cp(e, t, n, r) {
  return (
    (e !== t || jt(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Yd(e, n)
  );
}
function Yd(e, t) {
  return jt(t.enabled, e) !== !1 && e.isStaleByTime(is(t.staleTime, e));
}
function bC(e, t) {
  return !lu(e.getCurrentResult(), t);
}
var Yv = v.createContext(void 0),
  SC = (e) => {
    const t = v.useContext(Yv);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  CC = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    c.jsx(Yv.Provider, { value: e, children: t })
  ),
  Zv = v.createContext(!1),
  kC = () => v.useContext(Zv);
Zv.Provider;
function jC() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var PC = v.createContext(jC()),
  TC = () => v.useContext(PC);
function NC(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function kp() {}
var EC = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  AC = (e) => {
    v.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  RC = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && NC(n, [e.error, r]),
  FC = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  LC = (e, t) => e.isLoading && e.isFetching && !t,
  MC = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  jp = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function OC(e, t, n) {
  var d, f, h, g, w;
  const r = SC(),
    s = kC(),
    i = TC(),
    o = r.defaultQueryOptions(e);
  ((f =
    (d = r.getDefaultOptions().queries) == null
      ? void 0
      : d._experimental_beforeQuery) == null || f.call(d, o),
    (o._optimisticResults = s ? "isRestoring" : "optimistic"),
    FC(o),
    EC(o, i),
    AC(i));
  const a = !r.getQueryCache().get(o.queryHash),
    [l] = v.useState(() => new t(r, o)),
    u = l.getOptimisticResult(o);
  if (
    (v.useSyncExternalStore(
      v.useCallback(
        (y) => {
          const b = s ? kp : l.subscribe(Pe.batchCalls(y));
          return (l.updateResult(), b);
        },
        [l, s],
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    v.useEffect(() => {
      l.setOptions(o, { listeners: !1 });
    }, [o, l]),
    MC(o, u))
  )
    throw jp(o, l, i);
  if (
    RC({
      result: u,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
    })
  )
    throw u.error;
  if (
    ((g =
      (h = r.getDefaultOptions().queries) == null
        ? void 0
        : h._experimental_afterQuery) == null || g.call(h, o, u),
    o.experimental_prefetchInRender && !Pr && LC(u, s))
  ) {
    const y = a
      ? jp(o, l, i)
      : (w = r.getQueryCache().get(o.queryHash)) == null
        ? void 0
        : w.promise;
    y == null ||
      y.catch(kp).finally(() => {
        l.updateResult();
      });
  }
  return o.notifyOnChangeProps ? u : l.trackResult(u);
}
function Zd(e, t) {
  return OC(e, xC);
}
async function DC(e) {
  if (!e.ok) {
    const t = (await e.text()) || e.statusText;
    throw new Error(`${e.status}: ${t}`);
  }
}
const _C =
    ({ on401: e }) =>
    async ({ queryKey: t }) => {
      const n = await fetch(t.join("/"), { credentials: "include" });
      return e === "returnNull" && n.status === 401
        ? null
        : (await DC(n), await n.json());
    },
  IC = new vC({
    defaultOptions: {
      queries: {
        queryFn: _C({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  VC = 1,
  zC = 1e6;
let ql = 0;
function $C() {
  return ((ql = (ql + 1) % Number.MAX_SAFE_INTEGER), ql.toString());
}
const Gl = new Map(),
  Pp = (e) => {
    if (Gl.has(e)) return;
    const t = setTimeout(() => {
      (Gl.delete(e), yi({ type: "REMOVE_TOAST", toastId: e }));
    }, zC);
    Gl.set(e, t);
  },
  BC = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, VC) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Pp(n)
            : e.toasts.forEach((r) => {
                Pp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Yo = [];
let Zo = { toasts: [] };
function yi(e) {
  ((Zo = BC(Zo, e)),
    Yo.forEach((t) => {
      t(Zo);
    }));
}
function UC({ ...e }) {
  const t = $C(),
    n = (s) => yi({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    r = () => yi({ type: "DISMISS_TOAST", toastId: t });
  return (
    yi({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function WC() {
  const [e, t] = v.useState(Zo);
  return (
    v.useEffect(
      () => (
        Yo.push(t),
        () => {
          const n = Yo.indexOf(t);
          n > -1 && Yo.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: UC,
      dismiss: (n) => yi({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function xe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Tp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Jv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Tp(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Tp(e[s], null);
        }
      };
  };
}
function Et(...e) {
  return v.useCallback(Jv(...e), e);
}
function rl(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = v.createContext(o),
      l = n.length;
    n = [...n, o];
    const u = (f) => {
      var m;
      const { scope: h, children: g, ...w } = f,
        y = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a,
        b = v.useMemo(() => w, Object.values(w));
      return c.jsx(y.Provider, { value: b, children: g });
    };
    u.displayName = i + "Provider";
    function d(f, h) {
      var y;
      const g = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[l]) || a,
        w = v.useContext(g);
      if (w) return w;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const s = () => {
    const i = n.map((o) => v.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((s.scopeName = e), [r, HC(s, ...t)]);
}
function HC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Na(e) {
  const t = QC(e),
    n = v.forwardRef((r, s) => {
      const { children: i, ...o } = r,
        a = v.Children.toArray(i),
        l = a.find(GC);
      if (l) {
        const u = l.props.children,
          d = a.map((f) =>
            f === l
              ? v.Children.count(u) > 1
                ? v.Children.only(null)
                : v.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return c.jsx(t, {
          ...o,
          ref: s,
          children: v.isValidElement(u) ? v.cloneElement(u, void 0, d) : null,
        });
      }
      return c.jsx(t, { ...o, ref: s, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var KC = Na("Slot");
function QC(e) {
  const t = v.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (v.isValidElement(s)) {
      const o = YC(s),
        a = XC(i, s.props);
      return (
        s.type !== v.Fragment && (a.ref = r ? Jv(r, o) : o),
        v.cloneElement(s, a)
      );
    }
    return v.Children.count(s) > 1 ? v.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var ex = Symbol("radix.slottable");
function qC(e) {
  const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = ex), t);
}
function GC(e) {
  return (
    v.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === ex
  );
}
function XC(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            (i(...a), s(...a));
          })
        : s && (n[r] = s)
      : r === "style"
        ? (n[r] = { ...s, ...i })
        : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function YC(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function ZC(e) {
  const t = e + "CollectionProvider",
    [n, r] = rl(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (y) => {
      const { scope: b, children: m } = y,
        p = vn.useRef(null),
        x = vn.useRef(new Map()).current;
      return c.jsx(s, { scope: b, itemMap: x, collectionRef: p, children: m });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = Na(a),
    u = vn.forwardRef((y, b) => {
      const { scope: m, children: p } = y,
        x = i(a, m),
        C = Et(b, x.collectionRef);
      return c.jsx(l, { ref: C, children: p });
    });
  u.displayName = a;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    h = Na(d),
    g = vn.forwardRef((y, b) => {
      const { scope: m, children: p, ...x } = y,
        C = vn.useRef(null),
        S = Et(b, C),
        P = i(d, m);
      return (
        vn.useEffect(
          () => (
            P.itemMap.set(C, { ref: C, ...x }),
            () => void P.itemMap.delete(C)
          ),
        ),
        c.jsx(h, { [f]: "", ref: S, children: p })
      );
    });
  g.displayName = d;
  function w(y) {
    const b = i(e + "CollectionConsumer", y);
    return vn.useCallback(() => {
      const p = b.collectionRef.current;
      if (!p) return [];
      const x = Array.from(p.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (P, T) => x.indexOf(P.ref.current) - x.indexOf(T.ref.current),
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: o, Slot: u, ItemSlot: g }, w, r];
}
var JC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Xe = JC.reduce((e, t) => {
    const n = Na(`Primitive.${t}`),
      r = v.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function tx(e, t) {
  e && no.flushSync(() => e.dispatchEvent(t));
}
function Kt(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function ek(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Kt(e);
  v.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var tk = "DismissableLayer",
  wu = "dismissableLayer.update",
  nk = "dismissableLayer.pointerDownOutside",
  rk = "dismissableLayer.focusOutside",
  Np,
  nx = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Jd = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      u = v.useContext(nx),
      [d, f] = v.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = v.useState({}),
      w = Et(t, (T) => f(T)),
      y = Array.from(u.layers),
      [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = y.indexOf(b),
      p = d ? y.indexOf(d) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = p >= m,
      S = ik((T) => {
        const j = T.target,
          N = [...u.branches].some((A) => A.contains(j));
        !C ||
          N ||
          (s == null || s(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, h),
      P = ok((T) => {
        const j = T.target;
        [...u.branches].some((A) => A.contains(j)) ||
          (i == null || i(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, h);
    return (
      ek((T) => {
        p === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, h),
      v.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Np = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Ep(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Np);
            }
          );
      }, [d, h, n, u]),
      v.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Ep());
        },
        [d, u],
      ),
      v.useEffect(() => {
        const T = () => g({});
        return (
          document.addEventListener(wu, T),
          () => document.removeEventListener(wu, T)
        );
      }, []),
      c.jsx(Xe.div, {
        ...l,
        ref: w,
        style: {
          pointerEvents: x ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: xe(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: xe(
          e.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
Jd.displayName = tk;
var sk = "DismissableLayerBranch",
  rx = v.forwardRef((e, t) => {
    const n = v.useContext(nx),
      r = v.useRef(null),
      s = Et(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      c.jsx(Xe.div, { ...e, ref: s })
    );
  });
rx.displayName = sk;
function ik(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Kt(e),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              sx(nk, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function ok(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Kt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          sx(rk, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ep() {
  const e = new CustomEvent(wu);
  document.dispatchEvent(e);
}
function sx(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? tx(s, i) : s.dispatchEvent(i));
}
var ak = Jd,
  lk = rx,
  Tr = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  ck = "Portal",
  ix = v.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = v.useState(!1);
    Tr(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? jS.createPortal(c.jsx(Xe.div, { ...r, ref: t }), o) : null;
  });
ix.displayName = ck;
function uk(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var ef = (e) => {
  const { present: t, children: n } = e,
    r = dk(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = Et(r.ref, fk(s));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(s, { ref: i })
    : null;
};
ef.displayName = "Presence";
function dk(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    s = v.useRef(e),
    i = v.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = uk(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = Fo(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    Tr(() => {
      const u = r.current,
        d = s.current;
      if (d !== e) {
        const h = i.current,
          g = Fo(u);
        (e
          ? l("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, l]),
    Tr(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (g) => {
            const y = Fo(r.current).includes(g.animationName);
            if (g.target === t && y && (l("ANIMATION_END"), !s.current)) {
              const b = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                })));
            }
          },
          h = (g) => {
            g.target === t && (i.current = Fo(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (d.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: v.useCallback((u) => {
        (u && (r.current = getComputedStyle(u)), n(u));
      }, []),
    }
  );
}
function Fo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function fk(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function hk({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = pk({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    o = i ? e : r,
    a = Kt(n),
    l = v.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && a(f);
        } else s(u);
      },
      [i, e, s, a],
    );
  return [o, l];
}
function pk({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    s = v.useRef(r),
    i = Kt(t);
  return (
    v.useEffect(() => {
      s.current !== r && (i(r), (s.current = r));
    }, [r, s, i]),
    n
  );
}
var mk = "VisuallyHidden",
  sl = v.forwardRef((e, t) =>
    c.jsx(Xe.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
sl.displayName = mk;
var gk = sl,
  tf = "ToastProvider",
  [nf, yk, vk] = ZC("Toast"),
  [ox, aR] = rl("Toast", [vk]),
  [xk, il] = ox(tf),
  ax = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = e,
      [a, l] = v.useState(null),
      [u, d] = v.useState(0),
      f = v.useRef(!1),
      h = v.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${tf}\`. Expected non-empty \`string\`.`,
        ),
      c.jsx(nf.Provider, {
        scope: t,
        children: c.jsx(xk, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: v.useCallback(() => d((g) => g + 1), []),
          onToastRemove: v.useCallback(() => d((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: o,
        }),
      })
    );
  };
ax.displayName = tf;
var lx = "ToastViewport",
  wk = ["F8"],
  bu = "toast.viewportPause",
  Su = "toast.viewportResume",
  cx = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = wk,
        label: s = "Notifications ({hotkey})",
        ...i
      } = e,
      o = il(lx, n),
      a = yk(n),
      l = v.useRef(null),
      u = v.useRef(null),
      d = v.useRef(null),
      f = v.useRef(null),
      h = Et(t, f, o.onViewportChange),
      g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = o.toastCount > 0;
    (v.useEffect(() => {
      const b = (m) => {
        var x;
        r.length !== 0 &&
          r.every((C) => m[C] || m.code === C) &&
          ((x = f.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      v.useEffect(() => {
        const b = l.current,
          m = f.current;
        if (w && b && m) {
          const p = () => {
              if (!o.isClosePausedRef.current) {
                const P = new CustomEvent(bu);
                (m.dispatchEvent(P), (o.isClosePausedRef.current = !0));
              }
            },
            x = () => {
              if (o.isClosePausedRef.current) {
                const P = new CustomEvent(Su);
                (m.dispatchEvent(P), (o.isClosePausedRef.current = !1));
              }
            },
            C = (P) => {
              !b.contains(P.relatedTarget) && x();
            },
            S = () => {
              b.contains(document.activeElement) || x();
            };
          return (
            b.addEventListener("focusin", p),
            b.addEventListener("focusout", C),
            b.addEventListener("pointermove", p),
            b.addEventListener("pointerleave", S),
            window.addEventListener("blur", p),
            window.addEventListener("focus", x),
            () => {
              (b.removeEventListener("focusin", p),
                b.removeEventListener("focusout", C),
                b.removeEventListener("pointermove", p),
                b.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", x));
            }
          );
        }
      }, [w, o.isClosePausedRef]));
    const y = v.useCallback(
      ({ tabbingDirection: b }) => {
        const p = a().map((x) => {
          const C = x.ref.current,
            S = [C, ...Lk(C)];
          return b === "forwards" ? S : S.reverse();
        });
        return (b === "forwards" ? p.reverse() : p).flat();
      },
      [a],
    );
    return (
      v.useEffect(() => {
        const b = f.current;
        if (b) {
          const m = (p) => {
            var S, P, T;
            const x = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !x) {
              const j = document.activeElement,
                N = p.shiftKey;
              if (p.target === b && N) {
                (S = u.current) == null || S.focus();
                return;
              }
              const M = y({ tabbingDirection: N ? "backwards" : "forwards" }),
                _ = M.findIndex((F) => F === j);
              Xl(M.slice(_ + 1))
                ? p.preventDefault()
                : N
                  ? (P = u.current) == null || P.focus()
                  : (T = d.current) == null || T.focus();
            }
          };
          return (
            b.addEventListener("keydown", m),
            () => b.removeEventListener("keydown", m)
          );
        }
      }, [a, y]),
      c.jsxs(lk, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            c.jsx(Cu, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const b = y({ tabbingDirection: "forwards" });
                Xl(b);
              },
            }),
          c.jsx(nf.Slot, {
            scope: n,
            children: c.jsx(Xe.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          w &&
            c.jsx(Cu, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const b = y({ tabbingDirection: "backwards" });
                Xl(b);
              },
            }),
        ],
      })
    );
  });
cx.displayName = lx;
var ux = "ToastFocusProxy",
  Cu = v.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e,
      i = il(ux, n);
    return c.jsx(sl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var u;
        const a = o.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Cu.displayName = ux;
var ol = "Toast",
  bk = "toast.swipeStart",
  Sk = "toast.swipeMove",
  Ck = "toast.swipeCancel",
  kk = "toast.swipeEnd",
  dx = v.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: s, onOpenChange: i, ...o } = e,
      [a = !0, l] = hk({ prop: r, defaultProp: s, onChange: i });
    return c.jsx(ef, {
      present: n || a,
      children: c.jsx(Tk, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: Kt(e.onPause),
        onResume: Kt(e.onResume),
        onSwipeStart: xe(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: xe(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            ));
        }),
        onSwipeCancel: xe(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: xe(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
dx.displayName = ol;
var [jk, Pk] = ox(ol, { onClose() {} }),
  Tk = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: g,
        ...w
      } = e,
      y = il(ol, n),
      [b, m] = v.useState(null),
      p = Et(t, (F) => m(F)),
      x = v.useRef(null),
      C = v.useRef(null),
      S = s || y.duration,
      P = v.useRef(0),
      T = v.useRef(S),
      j = v.useRef(0),
      { onToastAdd: N, onToastRemove: A } = y,
      V = Kt(() => {
        var K;
        ((b == null ? void 0 : b.contains(document.activeElement)) &&
          ((K = y.viewport) == null || K.focus()),
          o());
      }),
      M = v.useCallback(
        (F) => {
          !F ||
            F === 1 / 0 ||
            (window.clearTimeout(j.current),
            (P.current = new Date().getTime()),
            (j.current = window.setTimeout(V, F)));
        },
        [V],
      );
    (v.useEffect(() => {
      const F = y.viewport;
      if (F) {
        const K = () => {
            (M(T.current), u == null || u());
          },
          U = () => {
            const $ = new Date().getTime() - P.current;
            ((T.current = T.current - $),
              window.clearTimeout(j.current),
              l == null || l());
          };
        return (
          F.addEventListener(bu, U),
          F.addEventListener(Su, K),
          () => {
            (F.removeEventListener(bu, U), F.removeEventListener(Su, K));
          }
        );
      }
    }, [y.viewport, S, l, u, M]),
      v.useEffect(() => {
        i && !y.isClosePausedRef.current && M(S);
      }, [i, S, y.isClosePausedRef, M]),
      v.useEffect(() => (N(), () => A()), [N, A]));
    const _ = v.useMemo(() => (b ? vx(b) : null), [b]);
    return y.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            _ &&
              c.jsx(Nk, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: _,
              }),
            c.jsx(jk, {
              scope: n,
              onClose: V,
              children: no.createPortal(
                c.jsx(nf.ItemSlot, {
                  scope: n,
                  children: c.jsx(ak, {
                    asChild: !0,
                    onEscapeKeyDown: xe(a, () => {
                      (y.isFocusedToastEscapeKeyDownRef.current || V(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: c.jsx(Xe.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...w,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: xe(e.onKeyDown, (F) => {
                        F.key === "Escape" &&
                          (a == null || a(F.nativeEvent),
                          F.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            V()));
                      }),
                      onPointerDown: xe(e.onPointerDown, (F) => {
                        F.button === 0 &&
                          (x.current = { x: F.clientX, y: F.clientY });
                      }),
                      onPointerMove: xe(e.onPointerMove, (F) => {
                        if (!x.current) return;
                        const K = F.clientX - x.current.x,
                          U = F.clientY - x.current.y,
                          $ = !!C.current,
                          E = ["left", "right"].includes(y.swipeDirection),
                          L = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = E ? L(0, K) : 0,
                          W = E ? 0 : L(0, U),
                          re = F.pointerType === "touch" ? 10 : 2,
                          z = { x: I, y: W },
                          q = { originalEvent: F, delta: z };
                        $
                          ? ((C.current = z), Lo(Sk, f, q, { discrete: !1 }))
                          : Ap(z, y.swipeDirection, re)
                            ? ((C.current = z),
                              Lo(bk, d, q, { discrete: !1 }),
                              F.target.setPointerCapture(F.pointerId))
                            : (Math.abs(K) > re || Math.abs(U) > re) &&
                              (x.current = null);
                      }),
                      onPointerUp: xe(e.onPointerUp, (F) => {
                        const K = C.current,
                          U = F.target;
                        if (
                          (U.hasPointerCapture(F.pointerId) &&
                            U.releasePointerCapture(F.pointerId),
                          (C.current = null),
                          (x.current = null),
                          K)
                        ) {
                          const $ = F.currentTarget,
                            E = { originalEvent: F, delta: K };
                          (Ap(K, y.swipeDirection, y.swipeThreshold)
                            ? Lo(kk, g, E, { discrete: !0 })
                            : Lo(Ck, h, E, { discrete: !0 }),
                            $.addEventListener(
                              "click",
                              (L) => L.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Nk = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      s = il(ol, t),
      [i, o] = v.useState(!1),
      [a, l] = v.useState(!1);
    return (
      Rk(() => o(!0)),
      v.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : c.jsx(ix, {
            asChild: !0,
            children: c.jsx(sl, {
              ...r,
              children:
                i && c.jsxs(c.Fragment, { children: [s.label, " ", n] }),
            }),
          })
    );
  },
  Ek = "ToastTitle",
  fx = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Xe.div, { ...r, ref: t });
  });
fx.displayName = Ek;
var Ak = "ToastDescription",
  hx = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Xe.div, { ...r, ref: t });
  });
hx.displayName = Ak;
var px = "ToastAction",
  mx = v.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(yx, {
          altText: n,
          asChild: !0,
          children: c.jsx(rf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${px}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
mx.displayName = px;
var gx = "ToastClose",
  rf = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      s = Pk(gx, n);
    return c.jsx(yx, {
      asChild: !0,
      children: c.jsx(Xe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: xe(e.onClick, s.onClose),
      }),
    });
  });
rf.displayName = gx;
var yx = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...s } = e;
  return c.jsx(Xe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t,
  });
});
function vx(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Fk(r))
      ) {
        const s = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = r.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...vx(r));
      }
    }),
    t
  );
}
function Lo(e, t, n, { discrete: r }) {
  const s = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? tx(s, i) : s.dispatchEvent(i));
}
var Ap = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    s = Math.abs(e.y),
    i = r > s;
  return t === "left" || t === "right" ? i && r > n : !i && s > n;
};
function Rk(e = () => {}) {
  const t = Kt(e);
  Tr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function Fk(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Lk(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Xl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var Mk = ax,
  xx = cx,
  wx = dx,
  bx = fx,
  Sx = hx,
  Cx = mx,
  kx = rf;
function jx(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = jx(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Px() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = jx(e)) && (r && (r += " "), (r += t));
  return r;
}
const Rp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Fp = Px,
  Tx = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Fp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (d === null) return null;
        const h = Rp(d) || Rp(f);
        return s[u][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, h] = d;
          return (h === void 0 || (u[f] = h), u);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: h, ...g } = d;
              return Object.entries(g).every((w) => {
                let [y, b] = w;
                return Array.isArray(b)
                  ? b.includes({ ...i, ...a }[y])
                  : { ...i, ...a }[y] === b;
              })
                ? [...u, f, h]
                : u;
            }, []);
    return Fp(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ok = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Nx = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Dk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _k = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    v.createElement(
      "svg",
      {
        ref: l,
        ...Dk,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Nx("lucide", s),
        ...a,
      },
      [
        ...o.map(([u, d]) => v.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = (e, t) => {
  const n = v.forwardRef(({ className: r, ...s }, i) =>
    v.createElement(_k, {
      ref: i,
      iconNode: t,
      className: Nx(`lucide-${Ok(e)}`, r),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = be("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yl = be("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ku = be("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ax = be("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ik = be("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vk = be("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zk = be("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lp = be("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = be("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ju = be("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $k = be("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bk = be("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw",
    },
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uk = be("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zi = be("ShoppingBag", [
  [
    "path",
    { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" },
  ],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sf = be("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fx = be("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mp = be("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wk = be("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const al = be("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  of = "-",
  Hk = (e) => {
    const t = Qk(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(of);
        return (a[0] === "" && a.length !== 1 && a.shift(), Lx(a, t) || Kk(o));
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  Lx = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? Lx(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(of);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Op = /^\[(.+)\]$/,
  Kk = (e) => {
    if (Op.test(e)) {
      const t = Op.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Qk = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Gk(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        Pu(o, r, i, t);
      }),
      r
    );
  },
  Pu = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Dp(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (qk(s)) {
          Pu(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Pu(o, Dp(t, i), n, r);
      });
    });
  },
  Dp = (e, t) => {
    let n = e;
    return (
      t.split(of).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  qk = (e) => e.isThemeGetter,
  Gk = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([o, a]) => [t + o, a]),
                  )
                : i,
          );
          return [n, s];
        })
      : e,
  Xk = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      (n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return (s(i, o), o);
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  Mx = "!",
  Yk = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let u = 0,
          d = 0,
          f;
        for (let b = 0; b < a.length; b++) {
          let m = a[b];
          if (u === 0) {
            if (m === s && (r || a.slice(b, b + i) === t)) {
              (l.push(a.slice(d, b)), (d = b + i));
              continue;
            }
            if (m === "/") {
              f = b;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const h = l.length === 0 ? a : a.substring(d),
          g = h.startsWith(Mx),
          w = g ? h.substring(1) : h,
          y = f && f > d ? f - d : void 0;
        return {
          modifiers: l,
          hasImportantModifier: g,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  Zk = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Jk = (e) => ({ cache: Xk(e.cacheSize), parseClassName: Yk(e), ...Hk(e) }),
  ej = /\s+/,
  tj = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(ej);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: g,
        } = n(u);
      let w = !!g,
        y = r(w ? h.substring(0, g) : h);
      if (!y) {
        if (!w) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = r(h)), !y)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const b = Zk(d).join(":"),
        m = f ? b + Mx : b,
        p = m + y;
      if (i.includes(p)) continue;
      i.push(p);
      const x = s(y, w);
      for (let C = 0; C < x.length; ++C) {
        const S = x[C];
        i.push(m + S);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function nj() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ox(t)) && (r && (r += " "), (r += n));
  return r;
}
const Ox = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ox(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function rj(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(l) {
    const u = t.reduce((d, f) => f(d), e());
    return ((n = Jk(u)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const d = tj(l, n);
    return (s(l, d), d);
  }
  return function () {
    return i(nj.apply(null, arguments));
  };
}
const se = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  Dx = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  sj = /^\d+\/\d+$/,
  ij = new Set(["px", "full", "screen"]),
  oj = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  aj =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  lj = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  cj = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  uj =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Gt = (e) => os(e) || ij.has(e) || sj.test(e),
  mn = (e) => Vs(e, "length", vj),
  os = (e) => !!e && !Number.isNaN(Number(e)),
  Zl = (e) => Vs(e, "number", os),
  Zs = (e) => !!e && Number.isInteger(Number(e)),
  dj = (e) => e.endsWith("%") && os(e.slice(0, -1)),
  Q = (e) => Dx.test(e),
  gn = (e) => oj.test(e),
  fj = new Set(["length", "size", "percentage"]),
  hj = (e) => Vs(e, fj, _x),
  pj = (e) => Vs(e, "position", _x),
  mj = new Set(["image", "url"]),
  gj = (e) => Vs(e, mj, wj),
  yj = (e) => Vs(e, "", xj),
  Js = () => !0,
  Vs = (e, t, n) => {
    const r = Dx.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  vj = (e) => aj.test(e) && !lj.test(e),
  _x = () => !1,
  xj = (e) => cj.test(e),
  wj = (e) => uj.test(e),
  bj = () => {
    const e = se("colors"),
      t = se("spacing"),
      n = se("blur"),
      r = se("brightness"),
      s = se("borderColor"),
      i = se("borderRadius"),
      o = se("borderSpacing"),
      a = se("borderWidth"),
      l = se("contrast"),
      u = se("grayscale"),
      d = se("hueRotate"),
      f = se("invert"),
      h = se("gap"),
      g = se("gradientColorStops"),
      w = se("gradientColorStopPositions"),
      y = se("inset"),
      b = se("margin"),
      m = se("opacity"),
      p = se("padding"),
      x = se("saturate"),
      C = se("scale"),
      S = se("sepia"),
      P = se("skew"),
      T = se("space"),
      j = se("translate"),
      N = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      V = () => ["auto", Q, t],
      M = () => [Q, t],
      _ = () => ["", Gt, mn],
      F = () => ["auto", os, Q],
      K = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      $ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      E = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      L = () => ["", "0", Q],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [os, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Js],
        spacing: [Gt, mn],
        blur: ["none", "", gn, Q],
        brightness: W(),
        borderColor: [e],
        borderRadius: ["none", "", "full", gn, Q],
        borderSpacing: M(),
        borderWidth: _(),
        contrast: W(),
        grayscale: L(),
        hueRotate: W(),
        invert: L(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [dj, mn],
        inset: V(),
        margin: V(),
        opacity: W(),
        padding: M(),
        saturate: W(),
        scale: W(),
        sepia: L(),
        skew: W(),
        space: M(),
        translate: M(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [gn] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...K(), Q] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: N() }],
        "overscroll-x": [{ "overscroll-x": N() }],
        "overscroll-y": [{ "overscroll-y": N() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Zs, Q] }],
        basis: [{ basis: V() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: L() }],
        shrink: [{ shrink: L() }],
        order: [{ order: ["first", "last", "none", Zs, Q] }],
        "grid-cols": [{ "grid-cols": [Js] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Zs, Q] }, Q] }],
        "col-start": [{ "col-start": F() }],
        "col-end": [{ "col-end": F() }],
        "grid-rows": [{ "grid-rows": [Js] }],
        "row-start-end": [{ row: ["auto", { span: [Zs, Q] }, Q] }],
        "row-start": [{ "row-start": F() }],
        "row-end": [{ "row-end": F() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...E()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...E(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...E(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [gn] },
              gn,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", gn, mn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Zl,
            ],
          },
        ],
        "font-family": [{ font: [Js] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", os, Zl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Gt,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Gt, mn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Gt, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: M() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...K(), pj] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", hj] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              gj,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [Gt, Q] }],
        "outline-w": [{ outline: [Gt, mn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: _() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Gt, mn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", gn, yj] }],
        "shadow-color": [{ shadow: [Js] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...$(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": $() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", gn, Q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [Zs, Q] }],
        "translate-x": [{ "translate-x": [j] }],
        "translate-y": [{ "translate-y": [j] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": M() }],
        "scroll-mx": [{ "scroll-mx": M() }],
        "scroll-my": [{ "scroll-my": M() }],
        "scroll-ms": [{ "scroll-ms": M() }],
        "scroll-me": [{ "scroll-me": M() }],
        "scroll-mt": [{ "scroll-mt": M() }],
        "scroll-mr": [{ "scroll-mr": M() }],
        "scroll-mb": [{ "scroll-mb": M() }],
        "scroll-ml": [{ "scroll-ml": M() }],
        "scroll-p": [{ "scroll-p": M() }],
        "scroll-px": [{ "scroll-px": M() }],
        "scroll-py": [{ "scroll-py": M() }],
        "scroll-ps": [{ "scroll-ps": M() }],
        "scroll-pe": [{ "scroll-pe": M() }],
        "scroll-pt": [{ "scroll-pt": M() }],
        "scroll-pr": [{ "scroll-pr": M() }],
        "scroll-pb": [{ "scroll-pb": M() }],
        "scroll-pl": [{ "scroll-pl": M() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Gt, mn, Zl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Sj = rj(bj);
function Ue(...e) {
  return Sj(Px(e));
}
const Cj = Mk,
  Ix = v.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(xx, {
      ref: n,
      className: Ue(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
Ix.displayName = xx.displayName;
const kj = Tx(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Vx = v.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(wx, { ref: r, className: Ue(kj({ variant: t }), e), ...n }),
  );
Vx.displayName = wx.displayName;
const jj = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Cx, {
    ref: n,
    className: Ue(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
jj.displayName = Cx.displayName;
const zx = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(kx, {
    ref: n,
    className: Ue(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(al, { className: "h-4 w-4" }),
  }),
);
zx.displayName = kx.displayName;
const $x = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(bx, { ref: n, className: Ue("text-sm font-semibold", e), ...t }),
);
$x.displayName = bx.displayName;
const Bx = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Sx, { ref: n, className: Ue("text-sm opacity-90", e), ...t }),
);
Bx.displayName = Sx.displayName;
function Pj() {
  const { toasts: e } = WC();
  return c.jsxs(Cj, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: s, ...i }) {
        return c.jsxs(
          Vx,
          {
            ...i,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx($x, { children: n }),
                  r && c.jsx(Bx, { children: r }),
                ],
              }),
              s,
              c.jsx(zx, {}),
            ],
          },
          t,
        );
      }),
      c.jsx(Ix, {}),
    ],
  });
}
const Tj = ["top", "right", "bottom", "left"],
  Qn = Math.min,
  et = Math.max,
  Ea = Math.round,
  Mo = Math.floor,
  Ut = (e) => ({ x: e, y: e }),
  Nj = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Ej = { start: "end", end: "start" };
function Tu(e, t, n) {
  return et(e, Qn(t, n));
}
function un(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dn(e) {
  return e.split("-")[0];
}
function zs(e) {
  return e.split("-")[1];
}
function af(e) {
  return e === "x" ? "y" : "x";
}
function lf(e) {
  return e === "y" ? "height" : "width";
}
function qn(e) {
  return ["top", "bottom"].includes(dn(e)) ? "y" : "x";
}
function cf(e) {
  return af(qn(e));
}
function Aj(e, t, n) {
  n === void 0 && (n = !1);
  const r = zs(e),
    s = cf(e),
    i = lf(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (o = Aa(o)), [o, Aa(o)]);
}
function Rj(e) {
  const t = Aa(e);
  return [Nu(e), t, Nu(t)];
}
function Nu(e) {
  return e.replace(/start|end/g, (t) => Ej[t]);
}
function Fj(e, t, n) {
  const r = ["left", "right"],
    s = ["right", "left"],
    i = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? s : r) : t ? r : s;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function Lj(e, t, n, r) {
  const s = zs(e);
  let i = Fj(dn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(Nu)))),
    i
  );
}
function Aa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Nj[t]);
}
function Mj(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ux(e) {
  return typeof e != "number"
    ? Mj(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ra(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function _p(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = qn(t),
    o = cf(t),
    a = lf(o),
    l = dn(t),
    u = i === "y",
    d = r.x + r.width / 2 - s.width / 2,
    f = r.y + r.height / 2 - s.height / 2,
    h = r[a] / 2 - s[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = { x: d, y: r.y - s.height };
      break;
    case "bottom":
      g = { x: d, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: f };
      break;
    case "left":
      g = { x: r.x - s.width, y: f };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (zs(t)) {
    case "start":
      g[o] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      g[o] += h * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Oj = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: d, y: f } = _p(u, r, l),
    h = r,
    g = {},
    w = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: b, fn: m } = a[y],
      {
        x: p,
        y: x,
        data: C,
        reset: S,
      } = await m({
        x: d,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: s,
        middlewareData: g,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    ((d = p ?? d),
      (f = x ?? f),
      (g = { ...g, [b]: { ...g[b], ...C } }),
      S &&
        w <= 50 &&
        (w++,
        typeof S == "object" &&
          (S.placement && (h = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : S.rects),
          ({ x: d, y: f } = _p(u, h, l))),
        (y = -1)));
  }
  return { x: d, y: f, placement: h, strategy: s, middlewareData: g };
};
async function $i(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: g = 0,
    } = un(t, e),
    w = Ux(g),
    b = a[h ? (f === "floating" ? "reference" : "floating") : f],
    m = Ra(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    p =
      f === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    x = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Ra(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: x,
            strategy: l,
          })
        : p,
    );
  return {
    top: (m.top - S.top + w.top) / C.y,
    bottom: (S.bottom - m.bottom + w.bottom) / C.y,
    left: (m.left - S.left + w.left) / C.x,
    right: (S.right - m.right + w.right) / C.x,
  };
}
const Dj = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: d = 0 } = un(e, t) || {};
      if (u == null) return {};
      const f = Ux(d),
        h = { x: n, y: r },
        g = cf(s),
        w = lf(g),
        y = await o.getDimensions(u),
        b = g === "y",
        m = b ? "top" : "left",
        p = b ? "bottom" : "right",
        x = b ? "clientHeight" : "clientWidth",
        C = i.reference[w] + i.reference[g] - h[g] - i.floating[w],
        S = h[g] - i.reference[g],
        P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let T = P ? P[x] : 0;
      (!T || !(await (o.isElement == null ? void 0 : o.isElement(P)))) &&
        (T = a.floating[x] || i.floating[w]);
      const j = C / 2 - S / 2,
        N = T / 2 - y[w] / 2 - 1,
        A = Qn(f[m], N),
        V = Qn(f[p], N),
        M = A,
        _ = T - y[w] - V,
        F = T / 2 - y[w] / 2 + j,
        K = Tu(M, F, _),
        U =
          !l.arrow &&
          zs(s) != null &&
          F !== K &&
          i.reference[w] / 2 - (F < M ? A : V) - y[w] / 2 < 0,
        $ = U ? (F < M ? F - M : F - _) : 0;
      return {
        [g]: h[g] + $,
        data: {
          [g]: K,
          centerOffset: F - K - $,
          ...(U && { alignmentOffset: $ }),
        },
        reset: U,
      };
    },
  }),
  _j = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: y = !0,
              ...b
            } = un(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = dn(s),
            p = qn(a),
            x = dn(a) === a,
            C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            S = h || (x || !y ? [Aa(a)] : Rj(a)),
            P = w !== "none";
          !h && P && S.push(...Lj(a, y, w, C));
          const T = [a, ...S],
            j = await $i(t, b),
            N = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && N.push(j[m]), f)) {
            const F = Aj(s, o, C);
            N.push(j[F[0]], j[F[1]]);
          }
          if (
            ((A = [...A, { placement: s, overflows: N }]),
            !N.every((F) => F <= 0))
          ) {
            var V, M;
            const F = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1,
              K = T[F];
            if (K)
              return {
                data: { index: F, overflows: A },
                reset: { placement: K },
              };
            let U =
              (M = A.filter(($) => $.overflows[0] <= 0).sort(
                ($, E) => $.overflows[1] - E.overflows[1],
              )[0]) == null
                ? void 0
                : M.placement;
            if (!U)
              switch (g) {
                case "bestFit": {
                  var _;
                  const $ =
                    (_ = A.filter((E) => {
                      if (P) {
                        const L = qn(E.placement);
                        return L === p || L === "y";
                      }
                      return !0;
                    })
                      .map((E) => [
                        E.placement,
                        E.overflows
                          .filter((L) => L > 0)
                          .reduce((L, I) => L + I, 0),
                      ])
                      .sort((E, L) => E[1] - L[1])[0]) == null
                      ? void 0
                      : _[0];
                  $ && (U = $);
                  break;
                }
                case "initialPlacement":
                  U = a;
                  break;
              }
            if (s !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function Ip(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Vp(e) {
  return Tj.some((t) => e[t] >= 0);
}
const Ij = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...s } = un(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await $i(t, { ...s, elementContext: "reference" }),
              o = Ip(i, n.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: Vp(o) },
            };
          }
          case "escaped": {
            const i = await $i(t, { ...s, altBoundary: !0 }),
              o = Ip(i, n.floating);
            return { data: { escapedOffsets: o, escaped: Vp(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Vj(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = dn(n),
    a = zs(n),
    l = qn(n) === "y",
    u = ["left", "top"].includes(o) ? -1 : 1,
    d = i && l ? -1 : 1,
    f = un(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: w,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof w == "number" && (g = a === "end" ? w * -1 : w),
    l ? { x: g * d, y: h * u } : { x: h * u, y: g * d }
  );
}
const zj = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await Vj(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  $j = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: m, y: p } = b;
                  return { x: m, y: p };
                },
              },
              ...l
            } = un(e, t),
            u = { x: n, y: r },
            d = await $i(t, l),
            f = qn(dn(s)),
            h = af(f);
          let g = u[h],
            w = u[f];
          if (i) {
            const b = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              p = g + d[b],
              x = g - d[m];
            g = Tu(p, g, x);
          }
          if (o) {
            const b = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = w + d[b],
              x = w - d[m];
            w = Tu(p, w, x);
          }
          const y = a.fn({ ...t, [h]: g, [f]: w });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: i, [f]: o } },
          };
        },
      }
    );
  },
  Bj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = un(e, t),
            d = { x: n, y: r },
            f = qn(s),
            h = af(f);
          let g = d[h],
            w = d[f];
          const y = un(a, t),
            b =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (l) {
            const x = h === "y" ? "height" : "width",
              C = i.reference[h] - i.floating[x] + b.mainAxis,
              S = i.reference[h] + i.reference[x] - b.mainAxis;
            g < C ? (g = C) : g > S && (g = S);
          }
          if (u) {
            var m, p;
            const x = h === "y" ? "width" : "height",
              C = ["top", "left"].includes(dn(s)),
              S =
                i.reference[f] -
                i.floating[x] +
                ((C && ((m = o.offset) == null ? void 0 : m[f])) || 0) +
                (C ? 0 : b.crossAxis),
              P =
                i.reference[f] +
                i.reference[x] +
                (C ? 0 : ((p = o.offset) == null ? void 0 : p[f]) || 0) -
                (C ? b.crossAxis : 0);
            w < S ? (w = S) : w > P && (w = P);
          }
          return { [h]: g, [f]: w };
        },
      }
    );
  },
  Uj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...u } = un(e, t),
            d = await $i(t, u),
            f = dn(s),
            h = zs(s),
            g = qn(s) === "y",
            { width: w, height: y } = i.floating;
          let b, m;
          f === "top" || f === "bottom"
            ? ((b = f),
              (m =
                h ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = f), (b = h === "end" ? "top" : "bottom"));
          const p = y - d.top - d.bottom,
            x = w - d.left - d.right,
            C = Qn(y - d[b], p),
            S = Qn(w - d[m], x),
            P = !t.middlewareData.shift;
          let T = C,
            j = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (j = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = p),
            P && !h)
          ) {
            const A = et(d.left, 0),
              V = et(d.right, 0),
              M = et(d.top, 0),
              _ = et(d.bottom, 0);
            g
              ? (j = w - 2 * (A !== 0 || V !== 0 ? A + V : et(d.left, d.right)))
              : (T =
                  y - 2 * (M !== 0 || _ !== 0 ? M + _ : et(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: j, availableHeight: T });
          const N = await o.getDimensions(a.floating);
          return w !== N.width || y !== N.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ll() {
  return typeof window < "u";
}
function $s(e) {
  return Wx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function rt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function qt(e) {
  var t;
  return (t = (Wx(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Wx(e) {
  return ll() ? e instanceof Node || e instanceof rt(e).Node : !1;
}
function At(e) {
  return ll() ? e instanceof Element || e instanceof rt(e).Element : !1;
}
function Qt(e) {
  return ll() ? e instanceof HTMLElement || e instanceof rt(e).HTMLElement : !1;
}
function zp(e) {
  return !ll() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof rt(e).ShadowRoot;
}
function so(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = Rt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(s)
  );
}
function Wj(e) {
  return ["table", "td", "th"].includes($s(e));
}
function cl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function uf(e) {
  const t = df(),
    n = At(e) ? Rt(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1,
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function Hj(e) {
  let t = Gn(e);
  for (; Qt(t) && !As(t); ) {
    if (uf(t)) return t;
    if (cl(t)) return null;
    t = Gn(t);
  }
  return null;
}
function df() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function As(e) {
  return ["html", "body", "#document"].includes($s(e));
}
function Rt(e) {
  return rt(e).getComputedStyle(e);
}
function ul(e) {
  return At(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Gn(e) {
  if ($s(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (zp(e) && e.host) || qt(e);
  return zp(t) ? t.host : t;
}
function Hx(e) {
  const t = Gn(e);
  return As(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Qt(t) && so(t)
      ? t
      : Hx(t);
}
function Bi(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const s = Hx(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = rt(s);
  if (i) {
    const a = Eu(o);
    return t.concat(
      o,
      o.visualViewport || [],
      so(s) ? s : [],
      a && n ? Bi(a) : [],
    );
  }
  return t.concat(s, Bi(s, [], n));
}
function Eu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kx(e) {
  const t = Rt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = Qt(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = Ea(n) !== i || Ea(r) !== o;
  return (a && ((n = i), (r = o)), { width: n, height: r, $: a });
}
function ff(e) {
  return At(e) ? e : e.contextElement;
}
function as(e) {
  const t = ff(e);
  if (!Qt(t)) return Ut(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = Kx(t);
  let o = (i ? Ea(n.width) : n.width) / r,
    a = (i ? Ea(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const Kj = Ut(0);
function Qx(e) {
  const t = rt(e);
  return !df() || !t.visualViewport
    ? Kj
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Qj(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== rt(e)) ? !1 : t);
}
function Nr(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const s = e.getBoundingClientRect(),
    i = ff(e);
  let o = Ut(1);
  t && (r ? At(r) && (o = as(r)) : (o = as(e)));
  const a = Qj(i, n, r) ? Qx(i) : Ut(0);
  let l = (s.left + a.x) / o.x,
    u = (s.top + a.y) / o.y,
    d = s.width / o.x,
    f = s.height / o.y;
  if (i) {
    const h = rt(i),
      g = r && At(r) ? rt(r) : r;
    let w = h,
      y = Eu(w);
    for (; y && r && g !== w; ) {
      const b = as(y),
        m = y.getBoundingClientRect(),
        p = Rt(y),
        x = m.left + (y.clientLeft + parseFloat(p.paddingLeft)) * b.x,
        C = m.top + (y.clientTop + parseFloat(p.paddingTop)) * b.y;
      ((l *= b.x),
        (u *= b.y),
        (d *= b.x),
        (f *= b.y),
        (l += x),
        (u += C),
        (w = rt(y)),
        (y = Eu(w)));
    }
  }
  return Ra({ width: d, height: f, x: l, y: u });
}
function hf(e, t) {
  const n = ul(e).scrollLeft;
  return t ? t.left + n : Nr(qt(e)).left + n;
}
function qx(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : hf(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function qj(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = qt(r),
    a = t ? cl(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Ut(1);
  const d = Ut(0),
    f = Qt(r);
  if (
    (f || (!f && !i)) &&
    (($s(r) !== "body" || so(o)) && (l = ul(r)), Qt(r))
  ) {
    const g = Nr(r);
    ((u = as(r)), (d.x = g.x + r.clientLeft), (d.y = g.y + r.clientTop));
  }
  const h = o && !f && !i ? qx(o, l, !0) : Ut(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + h.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + h.y,
  };
}
function Gj(e) {
  return Array.from(e.getClientRects());
}
function Xj(e) {
  const t = qt(e),
    n = ul(e),
    r = e.ownerDocument.body,
    s = et(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = et(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + hf(e);
  const a = -n.scrollTop;
  return (
    Rt(r).direction === "rtl" && (o += et(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function Yj(e, t) {
  const n = rt(e),
    r = qt(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    ((i = s.width), (o = s.height));
    const u = df();
    (!u || (u && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
function Zj(e, t) {
  const n = Nr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = Qt(e) ? as(e) : Ut(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    u = r * i.y;
  return { width: o, height: a, x: l, y: u };
}
function $p(e, t, n) {
  let r;
  if (t === "viewport") r = Yj(e, n);
  else if (t === "document") r = Xj(qt(e));
  else if (At(t)) r = Zj(t, n);
  else {
    const s = Qx(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return Ra(r);
}
function Gx(e, t) {
  const n = Gn(e);
  return n === t || !At(n) || As(n)
    ? !1
    : Rt(n).position === "fixed" || Gx(n, t);
}
function Jj(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Bi(e, [], !1).filter((a) => At(a) && $s(a) !== "body"),
    s = null;
  const i = Rt(e).position === "fixed";
  let o = i ? Gn(e) : e;
  for (; At(o) && !As(o); ) {
    const a = Rt(o),
      l = uf(o);
    (!l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (so(o) && !l && Gx(e, o))
      )
        ? (r = r.filter((d) => d !== o))
        : (s = a),
      (o = Gn(o)));
  }
  return (t.set(e, r), r);
}
function e2(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? cl(t)
          ? []
          : Jj(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce(
      (u, d) => {
        const f = $p(t, d, s);
        return (
          (u.top = et(f.top, u.top)),
          (u.right = Qn(f.right, u.right)),
          (u.bottom = Qn(f.bottom, u.bottom)),
          (u.left = et(f.left, u.left)),
          u
        );
      },
      $p(t, a, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function t2(e) {
  const { width: t, height: n } = Kx(e);
  return { width: t, height: n };
}
function n2(e, t, n) {
  const r = Qt(t),
    s = qt(t),
    i = n === "fixed",
    o = Nr(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Ut(0);
  if (r || (!r && !i))
    if ((($s(t) !== "body" || so(s)) && (a = ul(t)), r)) {
      const h = Nr(t, !0, i, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else s && (l.x = hf(s));
  const u = s && !r && !i ? qx(s, a) : Ut(0),
    d = o.left + a.scrollLeft - l.x - u.x,
    f = o.top + a.scrollTop - l.y - u.y;
  return { x: d, y: f, width: o.width, height: o.height };
}
function Jl(e) {
  return Rt(e).position === "static";
}
function Bp(e, t) {
  if (!Qt(e) || Rt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (qt(e) === n && (n = n.ownerDocument.body), n);
}
function Xx(e, t) {
  const n = rt(e);
  if (cl(e)) return n;
  if (!Qt(e)) {
    let s = Gn(e);
    for (; s && !As(s); ) {
      if (At(s) && !Jl(s)) return s;
      s = Gn(s);
    }
    return n;
  }
  let r = Bp(e, t);
  for (; r && Wj(r) && Jl(r); ) r = Bp(r, t);
  return r && As(r) && Jl(r) && !uf(r) ? n : r || Hj(e) || n;
}
const r2 = async function (e) {
  const t = this.getOffsetParent || Xx,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: n2(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function s2(e) {
  return Rt(e).direction === "rtl";
}
const i2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qj,
  getDocumentElement: qt,
  getClippingRect: e2,
  getOffsetParent: Xx,
  getElementRects: r2,
  getClientRects: Gj,
  getDimensions: t2,
  getScale: as,
  isElement: At,
  isRTL: s2,
};
function Yx(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function o2(e, t) {
  let n = null,
    r;
  const s = qt(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function o(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const u = e.getBoundingClientRect(),
      { left: d, top: f, width: h, height: g } = u;
    if ((a || t(), !h || !g)) return;
    const w = Mo(f),
      y = Mo(s.clientWidth - (d + h)),
      b = Mo(s.clientHeight - (f + g)),
      m = Mo(d),
      x = {
        rootMargin: -w + "px " + -y + "px " + -b + "px " + -m + "px",
        threshold: et(0, Qn(1, l)) || 1,
      };
    let C = !0;
    function S(P) {
      const T = P[0].intersectionRatio;
      if (T !== l) {
        if (!C) return o();
        T
          ? o(!1, T)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (T === 1 && !Yx(u, e.getBoundingClientRect()) && o(), (C = !1));
    }
    try {
      n = new IntersectionObserver(S, { ...x, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, x);
    }
    n.observe(e);
  }
  return (o(!0), i);
}
function a2(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = ff(e),
    d = s || i ? [...(u ? Bi(u) : []), ...Bi(t)] : [];
  d.forEach((m) => {
    (s && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n));
  });
  const f = u && a ? o2(u, n) : null;
  let h = -1,
    g = null;
  o &&
    ((g = new ResizeObserver((m) => {
      let [p] = m;
      (p &&
        p.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var x;
          (x = g) == null || x.observe(t);
        }))),
        n());
    })),
    u && !l && g.observe(u),
    g.observe(t));
  let w,
    y = l ? Nr(e) : null;
  l && b();
  function b() {
    const m = Nr(e);
    (y && !Yx(y, m) && n(), (y = m), (w = requestAnimationFrame(b)));
  }
  return (
    n(),
    () => {
      var m;
      (d.forEach((p) => {
        (s && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n));
      }),
        f == null || f(),
        (m = g) == null || m.disconnect(),
        (g = null),
        l && cancelAnimationFrame(w));
    }
  );
}
const l2 = zj,
  c2 = $j,
  u2 = _j,
  d2 = Uj,
  f2 = Ij,
  Up = Dj,
  h2 = Bj,
  p2 = (e, t, n) => {
    const r = new Map(),
      s = { platform: i2, ...n },
      i = { ...s.platform, _c: r };
    return Oj(e, t, { ...s, platform: i });
  };
var Jo = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function Fa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Fa(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Fa(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Zx(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wp(e, t) {
  const n = Zx(e);
  return Math.round(t * n) / n;
}
function ec(e) {
  const t = v.useRef(e);
  return (
    Jo(() => {
      t.current = e;
    }),
    t
  );
}
function m2(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [d, f] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, g] = v.useState(r);
  Fa(h, r) || g(r);
  const [w, y] = v.useState(null),
    [b, m] = v.useState(null),
    p = v.useCallback((E) => {
      E !== P.current && ((P.current = E), y(E));
    }, []),
    x = v.useCallback((E) => {
      E !== T.current && ((T.current = E), m(E));
    }, []),
    C = i || w,
    S = o || b,
    P = v.useRef(null),
    T = v.useRef(null),
    j = v.useRef(d),
    N = l != null,
    A = ec(l),
    V = ec(s),
    M = ec(u),
    _ = v.useCallback(() => {
      if (!P.current || !T.current) return;
      const E = { placement: t, strategy: n, middleware: h };
      (V.current && (E.platform = V.current),
        p2(P.current, T.current, E).then((L) => {
          const I = { ...L, isPositioned: M.current !== !1 };
          F.current &&
            !Fa(j.current, I) &&
            ((j.current = I),
            no.flushSync(() => {
              f(I);
            }));
        }));
    }, [h, t, n, V, M]);
  Jo(() => {
    u === !1 &&
      j.current.isPositioned &&
      ((j.current.isPositioned = !1), f((E) => ({ ...E, isPositioned: !1 })));
  }, [u]);
  const F = v.useRef(!1);
  (Jo(
    () => (
      (F.current = !0),
      () => {
        F.current = !1;
      }
    ),
    [],
  ),
    Jo(() => {
      if ((C && (P.current = C), S && (T.current = S), C && S)) {
        if (A.current) return A.current(C, S, _);
        _();
      }
    }, [C, S, _, A, N]));
  const K = v.useMemo(
      () => ({ reference: P, floating: T, setReference: p, setFloating: x }),
      [p, x],
    ),
    U = v.useMemo(() => ({ reference: C, floating: S }), [C, S]),
    $ = v.useMemo(() => {
      const E = { position: n, left: 0, top: 0 };
      if (!U.floating) return E;
      const L = Wp(U.floating, d.x),
        I = Wp(U.floating, d.y);
      return a
        ? {
            ...E,
            transform: "translate(" + L + "px, " + I + "px)",
            ...(Zx(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: L, top: I };
    }, [n, a, U.floating, d.x, d.y]);
  return v.useMemo(
    () => ({ ...d, update: _, refs: K, elements: U, floatingStyles: $ }),
    [d, _, K, U, $],
  );
}
const g2 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Up({ element: r.current, padding: s }).fn(n)
            : {}
          : r
            ? Up({ element: r, padding: s }).fn(n)
            : {};
      },
    };
  },
  y2 = (e, t) => ({ ...l2(e), options: [e, t] }),
  v2 = (e, t) => ({ ...c2(e), options: [e, t] }),
  x2 = (e, t) => ({ ...h2(e), options: [e, t] }),
  w2 = (e, t) => ({ ...u2(e), options: [e, t] }),
  b2 = (e, t) => ({ ...d2(e), options: [e, t] }),
  S2 = (e, t) => ({ ...f2(e), options: [e, t] }),
  C2 = (e, t) => ({ ...g2(e), options: [e, t] });
var k2 = "Arrow",
  Jx = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return c.jsx(Xe.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Jx.displayName = k2;
var j2 = Jx;
function P2(e) {
  const [t, n] = v.useState(void 0);
  return (
    Tr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((o = u.inlineSize), (a = u.blockSize));
          } else ((o = e.offsetWidth), (a = e.offsetHeight));
          n({ width: o, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var e0 = "Popper",
  [t0, n0] = rl(e0),
  [lR, r0] = t0(e0),
  s0 = "PopperAnchor",
  i0 = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = r0(s0, n),
      o = v.useRef(null),
      a = Et(t, o);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : c.jsx(Xe.div, { ...s, ref: a })
    );
  });
i0.displayName = s0;
var pf = "PopperContent",
  [T2, N2] = t0(pf),
  o0 = v.forwardRef((e, t) => {
    var Ye, Gf, Xf, Yf, Zf, Jf;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: w,
        ...y
      } = e,
      b = r0(pf, n),
      [m, p] = v.useState(null),
      x = Et(t, (Us) => p(Us)),
      [C, S] = v.useState(null),
      P = P2(C),
      T = (P == null ? void 0 : P.width) ?? 0,
      j = (P == null ? void 0 : P.height) ?? 0,
      N = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      V = Array.isArray(u) ? u : [u],
      M = V.length > 0,
      _ = { padding: A, boundary: V.filter(A2), altBoundary: M },
      {
        refs: F,
        floatingStyles: K,
        placement: U,
        isPositioned: $,
        middlewareData: E,
      } = m2({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...Us) =>
          a2(...Us, { animationFrame: g === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          y2({ mainAxis: s + j, alignmentAxis: o }),
          l &&
            v2({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? x2() : void 0,
              ..._,
            }),
          l && w2({ ..._ }),
          b2({
            ..._,
            apply: ({
              elements: Us,
              rects: eh,
              availableWidth: q1,
              availableHeight: G1,
            }) => {
              const { width: X1, height: Y1 } = eh.reference,
                fo = Us.floating.style;
              (fo.setProperty("--radix-popper-available-width", `${q1}px`),
                fo.setProperty("--radix-popper-available-height", `${G1}px`),
                fo.setProperty("--radix-popper-anchor-width", `${X1}px`),
                fo.setProperty("--radix-popper-anchor-height", `${Y1}px`));
            },
          }),
          C && C2({ element: C, padding: a }),
          R2({ arrowWidth: T, arrowHeight: j }),
          h && S2({ strategy: "referenceHidden", ..._ }),
        ],
      }),
      [L, I] = c0(U),
      W = Kt(w);
    Tr(() => {
      $ && (W == null || W());
    }, [$, W]);
    const re = (Ye = E.arrow) == null ? void 0 : Ye.x,
      z = (Gf = E.arrow) == null ? void 0 : Gf.y,
      q = ((Xf = E.arrow) == null ? void 0 : Xf.centerOffset) !== 0,
      [Ft, vt] = v.useState();
    return (
      Tr(() => {
        m && vt(window.getComputedStyle(m).zIndex);
      }, [m]),
      c.jsx("div", {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: $ ? K.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ft,
          "--radix-popper-transform-origin": [
            (Yf = E.transformOrigin) == null ? void 0 : Yf.x,
            (Zf = E.transformOrigin) == null ? void 0 : Zf.y,
          ].join(" "),
          ...(((Jf = E.hide) == null ? void 0 : Jf.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(T2, {
          scope: n,
          placedSide: L,
          onArrowChange: S,
          arrowX: re,
          arrowY: z,
          shouldHideArrow: q,
          children: c.jsx(Xe.div, {
            "data-side": L,
            "data-align": I,
            ...y,
            ref: x,
            style: { ...y.style, animation: $ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
o0.displayName = pf;
var a0 = "PopperArrow",
  E2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  l0 = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = N2(a0, r),
      o = E2[i.placedSide];
    return c.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(j2, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
l0.displayName = a0;
function A2(e) {
  return e !== null;
}
var R2 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, m, p;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((b = s.arrow) == null ? void 0 : b.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [u, d] = c0(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((m = s.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      g = (((p = s.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let w = "",
      y = "";
    return (
      u === "bottom"
        ? ((w = o ? f : `${h}px`), (y = `${-l}px`))
        : u === "top"
          ? ((w = o ? f : `${h}px`), (y = `${r.floating.height + l}px`))
          : u === "right"
            ? ((w = `${-l}px`), (y = o ? f : `${g}px`))
            : u === "left" &&
              ((w = `${r.floating.width + l}px`), (y = o ? f : `${g}px`)),
      { data: { x: w, y } }
    );
  },
});
function c0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var F2 = i0,
  L2 = o0,
  M2 = l0,
  [dl, cR] = rl("Tooltip", [n0]),
  mf = n0(),
  u0 = "TooltipProvider",
  O2 = 700,
  Hp = "tooltip.open",
  [D2, d0] = dl(u0),
  f0 = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = O2,
        skipDelayDuration: r = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = e,
      o = v.useRef(!0),
      a = v.useRef(!1),
      l = v.useRef(0);
    return (
      v.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      c.jsx(D2, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          (window.clearTimeout(l.current), (o.current = !1));
        }, []),
        onClose: v.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: v.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
f0.displayName = u0;
var h0 = "Tooltip",
  [uR, fl] = dl(h0),
  Au = "TooltipTrigger",
  _2 = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = fl(Au, n),
      i = d0(Au, n),
      o = mf(n),
      a = v.useRef(null),
      l = Et(t, a, s.onTriggerChange),
      u = v.useRef(!1),
      d = v.useRef(!1),
      f = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      c.jsx(F2, {
        asChild: !0,
        ...o,
        children: c.jsx(Xe.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: xe(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: xe(e.onPointerLeave, () => {
            (s.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: xe(e.onPointerDown, () => {
            (s.open && s.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 }));
          }),
          onFocus: xe(e.onFocus, () => {
            u.current || s.onOpen();
          }),
          onBlur: xe(e.onBlur, s.onClose),
          onClick: xe(e.onClick, s.onClose),
        }),
      })
    );
  });
_2.displayName = Au;
var I2 = "TooltipPortal",
  [dR, V2] = dl(I2, { forceMount: void 0 }),
  Rs = "TooltipContent",
  p0 = v.forwardRef((e, t) => {
    const n = V2(Rs, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: s = "top", ...i } = e,
      o = fl(Rs, e.__scopeTooltip);
    return c.jsx(ef, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? c.jsx(m0, { side: s, ...i, ref: t })
        : c.jsx(z2, { side: s, ...i, ref: t }),
    });
  }),
  z2 = v.forwardRef((e, t) => {
    const n = fl(Rs, e.__scopeTooltip),
      r = d0(Rs, e.__scopeTooltip),
      s = v.useRef(null),
      i = Et(t, s),
      [o, a] = v.useState(null),
      { trigger: l, onClose: u } = n,
      d = s.current,
      { onPointerInTransitChange: f } = r,
      h = v.useCallback(() => {
        (a(null), f(!1));
      }, [f]),
      g = v.useCallback(
        (w, y) => {
          const b = w.currentTarget,
            m = { x: w.clientX, y: w.clientY },
            p = H2(m, b.getBoundingClientRect()),
            x = K2(m, p),
            C = Q2(y.getBoundingClientRect()),
            S = G2([...x, ...C]);
          (a(S), f(!0));
        },
        [f],
      );
    return (
      v.useEffect(() => () => h(), [h]),
      v.useEffect(() => {
        if (l && d) {
          const w = (b) => g(b, d),
            y = (b) => g(b, l);
          return (
            l.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", y),
            () => {
              (l.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", y));
            }
          );
        }
      }, [l, d, g, h]),
      v.useEffect(() => {
        if (o) {
          const w = (y) => {
            const b = y.target,
              m = { x: y.clientX, y: y.clientY },
              p =
                (l == null ? void 0 : l.contains(b)) ||
                (d == null ? void 0 : d.contains(b)),
              x = !q2(m, o);
            p ? h() : x && (h(), u());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [l, d, o, u, h]),
      c.jsx(m0, { ...e, ref: i })
    );
  }),
  [$2, B2] = dl(h0, { isInside: !1 }),
  U2 = qC("TooltipContent"),
  m0 = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = fl(Rs, n),
      u = mf(n),
      { onClose: d } = l;
    return (
      v.useEffect(
        () => (
          document.addEventListener(Hp, d),
          () => document.removeEventListener(Hp, d)
        ),
        [d],
      ),
      v.useEffect(() => {
        if (l.trigger) {
          const f = (h) => {
            const g = h.target;
            g != null && g.contains(l.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [l.trigger, d]),
      c.jsx(Jd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: c.jsxs(L2, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(U2, { children: r }),
            c.jsx($2, {
              scope: n,
              isInside: !0,
              children: c.jsx(gk, {
                id: l.contentId,
                role: "tooltip",
                children: s || r,
              }),
            }),
          ],
        }),
      })
    );
  });
p0.displayName = Rs;
var g0 = "TooltipArrow",
  W2 = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = mf(n);
    return B2(g0, n).isInside ? null : c.jsx(M2, { ...s, ...r, ref: t });
  });
W2.displayName = g0;
function H2(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function K2(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Q2(e) {
  const { top: t, right: n, bottom: r, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: s, y: r },
  ];
}
function q2(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[o].x,
      d = t[o].y;
    l > r != d > r && n < ((u - a) * (r - l)) / (d - l) + a && (s = !s);
  }
  return s;
}
function G2(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    X2(t)
  );
}
function X2(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        o = n[n.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Y2 = f0,
  y0 = p0;
const Z2 = Y2,
  J2 = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(y0, {
      ref: r,
      sideOffset: t,
      className: Ue(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        e,
      ),
      ...n,
    }),
  );
J2.displayName = y0.displayName;
const Ru = {
  code: "BRL",
  symbol: "R$",
  name: "Real Brasileiro",
  symbolPosition: "before",
};
class eP {
  async convert(t, n, r) {
    return { value: t, currency: "BRL", success: !0 };
  }
  formatPrice(t, n) {
    return `R$${t.toFixed(2).replace(".", ",")}`;
  }
  getCurrencyForCountry(t) {
    return Ru;
  }
  async fetchRates() {
    return { BRL: 1 };
  }
  clearCache() {}
}
const tP = new eP(),
  nP = v.createContext(void 0);
function rP({ children: e }) {
  const t = async (r) => ({ value: r, currency: "BRL", success: !0 }),
    n = (r) => tP.formatPrice(r.value);
  return c.jsx(nP.Provider, {
    value: {
      currency: Ru,
      baseCurrency: Ru,
      convertPrice: t,
      formatPrice: n,
      isLoading: !1,
      countryCode: "BR",
    },
    children: e,
  });
}
const sP = {
  pt: {
    promoBanner:
      "Escolha até 3 produtos totalmente GRÁTIS! Aproveite suas amostras",
    searchPlaceholder: "Buscar",
    askQuestion: "Fazer uma pergunta",
    loves: "curtidas",
    value: "VALOR",
    payments: "parcelas de",
    or: "ou",
    interestFree: "sem juros",
    with: "com",
    inStock: "Em Estoque",
    outOfStock: "Fora de Estoque",
    new: "Novo",
    limitedEdition: "Edição Limitada",
    onlyAtTikTok: "Exclusivo TikTok Shop",
    aboutProduct: "Sobre o Produto",
    whatsIncluded: "O Que Está Incluído",
    ingredients: "Ingredientes",
    showMore: "Mostrar mais",
    showLess: "Mostrar menos",
    reviews: "Avaliações",
    rating: "Classificação",
    wouldRecommend: "recomendariam",
    verified: "Amostra Grátis Verificada",
    helpful: "Útil",
    blackFriday: "Black Friday",
    endsIn: "Termina em",
    addToBag: "Adicionar à Sacola",
    days: "dias",
    hours: "hrs",
    minutes: "min",
    seconds: "seg",
    checkout: "Finalizar Compra",
    orderSummary: "Resumo do Pedido",
    shippingAddress: "Endereço de Entrega",
    paymentMethod: "Método de Pagamento",
    firstName: "Nome",
    lastName: "Sobrenome",
    address: "Endereço",
    apartment: "Apartamento, conjunto, etc.",
    city: "Cidade",
    state: "Estado",
    zipCode: "CEP",
    country: "País",
    subtotal: "Subtotal",
    shipping: "Envio",
    tax: "Impostos",
    total: "Total",
    completePurchase: "Concluir Compra",
    freeShipping: "Frete Grátis",
    estimatedDelivery: "Entrega estimada",
    businessDays: "dias úteis",
    fillRequired:
      "Por favor, preencha todas as informações de envio obrigatórias acima",
    quantity: "Qtd",
    loading: "Carregando...",
    error: "Erro ao carregar produto",
    success: "Sucesso",
    playVideo: "Reproduzir vídeo",
    favorites: "Favoritos",
    basket: "Cesta",
    loveProduct: "Curtir este produto",
    goToImage: "Ir para imagem",
    whatItIs: "O que é:",
    whatElseToKnow: "O Que Mais Você Precisa Saber:",
    adventCalendarDescription:
      "Este Calendário do Advento inclui uma variedade de produtos essenciais desde cabelo e cuidados com a pele até maquiagem e fragrância—tudo das suas marcas favoritas!",
    showMoreProducts: "mais produtos",
    badgeNew: "Novo",
    badgeLimitedEdition: "Edição Limitada",
    badgeOnlyAtTikTok: "Exclusivo TikTok Shop",
    highlights: "Destaques",
    footerCopyright: "© 2025 TikTok Shop. Todos os direitos reservados.",
    footerTermsOfUse: "Termos de Uso",
    footerPrivacyPolicy: "Política de Privacidade",
    footerPhone: "1-877-737-4672",
    footerEmail: "suporte@tiktokshop.com.br",
    yourCart: "Seu Carrinho",
    secondUnitDiscount: "Adicione mais uma unidade por apenas R$67,00!",
    loadingCheckout: "Carregando checkout...",
    exclusiveOffer: "Oferta Exclusiva para Você",
    kerastaseKit: "Kit de Presente Nutritivo Kérastase",
    originalPrice: "de",
    specialPrice: "por apenas",
    addThisOffer: "Quero aproveitar esta oferta",
    proceedToCheckout: "Finalizar Pedido",
    emptyCart: "Seu carrinho está vazio",
    emptyCartMessage: "Adicione alguns produtos para começar!",
    continueShopping: "Continuar Comprando",
    makeup: "Maquiagem",
    valueGiftSets: "Valor & Conjuntos de Presente",
    adventCalendar: "Calendário do Advento",
    crueltyFree: "Livre de Crueldade",
    withoutSulfates: "Sem Sulfatos SLS & SLES",
    withoutParabens: "Sem Parabenos",
    ratingsAndReviews: "Avaliações de participantes do programa",
    writeReview: "Escrever uma avaliação",
    verifiedPurchase: "Amostra Grátis Verificada",
    peopleFoundHelpful: "pessoas acharam isso útil",
    imagesFromReviews: "Imagens das avaliações",
    reviewsDisclaimer:
      "*Avaliações de pessoas que receberam este produto como amostra grátis através do programa TikTok Shop.",
    reviewsText: "Avaliações",
    productDescription:
      "Maior e melhor que no ano passado (sim, realmente), descubra o lançamento mais quente de 2025. Repleto de 41 produtos selecionados e 24 tamanhos de luxo - nem sabemos como eles conseguiram colocar tudo. Prometendo ser um dos calendários de advento de beleza mais exclusivos do ano com 31 produtos exclusivos do TikTok Shop, descubra produtos que você não encontra em nenhum outro lugar. Pense: Glow Recipe, Merit Beauty, Tarte, Tower 28 e muito mais. Avaliado em mais de R$269, não perca isso - está esgotado há 3 anos seguidos.",
    signIn: "Entrar",
    forFreeShipping: "para FRETE GRÁTIS",
    createAccount: "criar uma conta",
    toEnjoyFreeShipping: "para aproveitar o FRETE GRÁTIS padrão.",
  },
};
function iP(e) {
  return sP.pt;
}
const v0 = v.createContext(void 0);
function oP({ children: e }) {
  const t = "pt",
    n = iP();
  return c.jsx(v0.Provider, {
    value: { language: t, t: n, isLoading: !1 },
    children: e,
  });
}
function io() {
  const e = v.useContext(v0);
  if (e === void 0)
    throw new Error("useTranslation must be used within a TranslationProvider");
  return e;
}
const tc = 3,
  x0 = v.createContext(void 0);
function aP({ children: e }) {
  const [t, n] = v.useState([]),
    [r, s] = v.useState(!1),
    i = v.useCallback(() => s(!0), []),
    o = v.useCallback(() => s(!1), []),
    a = v.useCallback(() => t.length, [t]),
    l = v.useCallback(() => tc - t.length, [t]),
    u = v.useCallback(() => t.length < tc, [t]),
    d = v.useCallback((y) => {
      (n((b) =>
        b.find((p) => p.id === y.id) || b.length >= tc
          ? b
          : [...b, { ...y, quantity: 1 }],
      ),
        s(!0));
    }, []),
    f = v.useCallback((y) => {
      n((b) => b.filter((m) => m.id !== y));
    }, []),
    h = v.useCallback((y, b) => {
      b <= 0
        ? n((m) => m.filter((p) => p.id !== y))
        : n((m) => m.map((p) => (p.id === y ? { ...p, quantity: b } : p)));
    }, []),
    g = v.useCallback(() => {
      n([]);
    }, []),
    w = v.useCallback(() => 0, []);
  return c.jsx(x0.Provider, {
    value: {
      items: t,
      isCartOpen: r,
      openCart: i,
      closeCart: o,
      addItem: d,
      removeItem: f,
      updateQuantity: h,
      clearCart: g,
      getTotalItems: a,
      getTotalPrice: w,
      getRemainingSlots: l,
      canAddMore: u,
    },
    children: e,
  });
}
function oo() {
  const e = v.useContext(x0);
  if (!e) throw new Error("useCart must be used within a CartProvider");
  return e;
}
const lP = Tx(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground border border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Bn = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...s }, i) => {
      const o = r ? KC : "button";
      return c.jsx(o, {
        className: Ue(lP({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
      });
    },
  );
Bn.displayName = "Button";
function cP(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
function hl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Fu = (e) => Array.isArray(e);
function w0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ui(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Kp(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function gf(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Kp(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Kp(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function pl(e, t, n) {
  const r = e.getProps();
  return gf(r, t, n !== void 0 ? n : r.custom, e);
}
const yf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  vf = ["initial", ...yf],
  ao = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Fr = new Set(ao),
  rn = (e) => e * 1e3,
  sn = (e) => e / 1e3,
  uP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  dP = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  fP = { type: "keyframes", duration: 0.8 },
  hP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  pP = (e, { keyframes: t }) =>
    t.length > 2
      ? fP
      : Fr.has(e)
        ? e.startsWith("scale")
          ? dP(t[1])
          : uP
        : hP;
function xf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const mP = { skipAnimations: !1, useManualTiming: !1 },
  gP = (e) => e !== null;
function ml(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(gP),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const Oe = (e) => e;
let Lu = Oe;
function yP(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    (i.has(u) && (l.schedule(u), e()), u(o));
  }
  const l = {
    schedule: (u, d = !1, f = !1) => {
      const g = f && r ? t : n;
      return (d && i.add(u), g.has(u) || g.add(u), u);
    },
    cancel: (u) => {
      (n.delete(u), i.delete(u));
    },
    process: (u) => {
      if (((o = u), r)) {
        s = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        s && ((s = !1), l.process(u)));
    },
  };
  return l;
}
const Oo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  vP = 40;
function b0(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Oo.reduce((m, p) => ((m[p] = yP(i)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: d,
      render: f,
      postRender: h,
    } = o,
    g = () => {
      const m = performance.now();
      ((n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(m - s.timestamp, vP), 1)),
        (s.timestamp = m),
        (s.isProcessing = !0),
        a.process(s),
        l.process(s),
        u.process(s),
        d.process(s),
        f.process(s),
        h.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(g)));
    },
    w = () => {
      ((n = !0), (r = !0), s.isProcessing || e(g));
    };
  return {
    schedule: Oo.reduce((m, p) => {
      const x = o[p];
      return (
        (m[p] = (C, S = !1, P = !1) => (n || w(), x.schedule(C, S, P))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Oo.length; p++) o[Oo[p]].cancel(m);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: te,
    cancel: Xn,
    state: je,
    steps: nc,
  } = b0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, !0),
  S0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  xP = 1e-7,
  wP = 12;
function bP(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (i = S0(o, r, s) - e), i > 0 ? (n = o) : (t = o));
  while (Math.abs(i) > xP && ++a < wP);
  return o;
}
function lo(e, t, n, r) {
  if (e === t && n === r) return Oe;
  const s = (i) => bP(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : S0(s(i), t, r));
}
const C0 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  k0 = (e) => (t) => 1 - e(1 - t),
  j0 = lo(0.33, 1.53, 0.69, 0.99),
  wf = k0(j0),
  P0 = C0(wf),
  T0 = (e) =>
    (e *= 2) < 1 ? 0.5 * wf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  bf = (e) => 1 - Math.sin(Math.acos(e)),
  N0 = k0(bf),
  E0 = C0(bf),
  A0 = (e) => /^0[^.\s]+$/u.test(e);
function SP(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || A0(e)
      : !0;
}
const R0 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  F0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  L0 = F0("--"),
  CP = F0("var(--"),
  Sf = (e) => (CP(e) ? kP.test(e.split("/*")[0].trim()) : !1),
  kP =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  jP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function PP(e) {
  const t = jP.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function M0(e, t, n = 1) {
  const [r, s] = PP(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return R0(o) ? parseFloat(o) : o;
  }
  return Sf(s) ? M0(s, t, n + 1) : s;
}
const fn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Bs = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Wi = { ...Bs, transform: (e) => fn(0, 1, e) },
  Do = { ...Bs, default: 1 },
  co = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wn = co("deg"),
  Wt = co("%"),
  B = co("px"),
  TP = co("vh"),
  NP = co("vw"),
  Qp = {
    ...Wt,
    parse: (e) => Wt.parse(e) / 100,
    transform: (e) => Wt.transform(e * 100),
  },
  EP = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  qp = (e) => e === Bs || e === B,
  Gp = (e, t) => parseFloat(e.split(", ")[t]),
  Xp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return Gp(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Gp(i[1], e) : 0;
      }
    },
  AP = new Set(["x", "y", "z"]),
  RP = ao.filter((e) => !AP.has(e));
function FP(e) {
  const t = [];
  return (
    RP.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Fs = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Xp(4, 13),
  y: Xp(5, 14),
};
Fs.translateX = Fs.x;
Fs.translateY = Fs.y;
const O0 = (e) => (t) => t.test(e),
  LP = { test: (e) => e === "auto", parse: (e) => e },
  D0 = [Bs, B, Wt, wn, NP, TP, LP],
  Yp = (e) => D0.find(O0(e)),
  wr = new Set();
let Mu = !1,
  Ou = !1;
function _0() {
  if (Ou) {
    const e = Array.from(wr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const s = FP(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Ou = !1), (Mu = !1), wr.forEach((e) => e.complete()), wr.clear());
}
function I0() {
  wr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Ou = !0));
  });
}
function MP() {
  (I0(), _0());
}
class Cf {
  constructor(t, n, r, s, i, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (wr.add(this),
          Mu || ((Mu = !0), te.read(I0), te.resolveKeyframes(_0)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]));
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      wr.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), wr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const vi = (e) => Math.round(e * 1e5) / 1e5,
  kf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function OP(e) {
  return e == null;
}
const DP =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  jf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && DP.test(n) && n.startsWith(e)) ||
      (t && !OP(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  V0 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(kf);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  _P = (e) => fn(0, 255, e),
  rc = { ...Bs, transform: (e) => Math.round(_P(e)) },
  ur = {
    test: jf("rgb", "red"),
    parse: V0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      rc.transform(e) +
      ", " +
      rc.transform(t) +
      ", " +
      rc.transform(n) +
      ", " +
      vi(Wi.transform(r)) +
      ")",
  };
function IP(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Du = { test: jf("#"), parse: IP, transform: ur.transform },
  qr = {
    test: jf("hsl", "hue"),
    parse: V0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Wt.transform(vi(t)) +
      ", " +
      Wt.transform(vi(n)) +
      ", " +
      vi(Wi.transform(r)) +
      ")",
  },
  Fe = {
    test: (e) => ur.test(e) || Du.test(e) || qr.test(e),
    parse: (e) =>
      ur.test(e) ? ur.parse(e) : qr.test(e) ? qr.parse(e) : Du.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? ur.transform(e)
          : qr.transform(e),
  },
  VP =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function zP(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(kf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(VP)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const z0 = "number",
  $0 = "color",
  $P = "var",
  BP = "var(",
  Zp = "${}",
  UP =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Hi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      UP,
      (l) => (
        Fe.test(l)
          ? (r.color.push(i), s.push($0), n.push(Fe.parse(l)))
          : l.startsWith(BP)
            ? (r.var.push(i), s.push($P), n.push(l))
            : (r.number.push(i), s.push(z0), n.push(parseFloat(l))),
        ++i,
        Zp
      ),
    )
    .split(Zp);
  return { values: n, split: a, indexes: r, types: s };
}
function B0(e) {
  return Hi(e).values;
}
function U0(e) {
  const { split: t, types: n } = Hi(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === z0
          ? (i += vi(s[o]))
          : a === $0
            ? (i += Fe.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
const WP = (e) => (typeof e == "number" ? 0 : e);
function HP(e) {
  const t = B0(e);
  return U0(e)(t.map(WP));
}
const Yn = {
    test: zP,
    parse: B0,
    createTransformer: U0,
    getAnimatableNone: HP,
  },
  KP = new Set(["brightness", "contrast", "saturate", "opacity"]);
function QP(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(kf) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = KP.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + s + ")");
}
const qP = /\b([a-z-]*)\(.*?\)/gu,
  _u = {
    ...Yn,
    getAnimatableNone: (e) => {
      const t = e.match(qP);
      return t ? t.map(QP).join(" ") : e;
    },
  },
  GP = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    radius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    backgroundPositionX: B,
    backgroundPositionY: B,
  },
  XP = {
    rotate: wn,
    rotateX: wn,
    rotateY: wn,
    rotateZ: wn,
    scale: Do,
    scaleX: Do,
    scaleY: Do,
    scaleZ: Do,
    skew: wn,
    skewX: wn,
    skewY: wn,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: Wi,
    originX: Qp,
    originY: Qp,
    originZ: B,
  },
  Jp = { ...Bs, transform: Math.round },
  Pf = {
    ...GP,
    ...XP,
    zIndex: Jp,
    size: B,
    fillOpacity: Wi,
    strokeOpacity: Wi,
    numOctaves: Jp,
  },
  YP = {
    ...Pf,
    color: Fe,
    backgroundColor: Fe,
    outlineColor: Fe,
    fill: Fe,
    stroke: Fe,
    borderColor: Fe,
    borderTopColor: Fe,
    borderRightColor: Fe,
    borderBottomColor: Fe,
    borderLeftColor: Fe,
    filter: _u,
    WebkitFilter: _u,
  },
  Tf = (e) => YP[e];
function W0(e, t) {
  let n = Tf(e);
  return (
    n !== _u && (n = Yn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const ZP = new Set(["auto", "none", "0"]);
function JP(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    (typeof i == "string" && !ZP.has(i) && Hi(i).values.length && (s = e[r]),
      r++);
  }
  if (s && n) for (const i of t) e[i] = W0(n, s);
}
class H0 extends Cf {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Sf(u))) {
        const d = M0(u, n.current);
        (d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !EP.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Yp(s),
      a = Yp(i);
    if (o !== a)
      if (qp(o) && qp(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) SP(t[s]) && r.push(s);
    r.length && JP(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Fs[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    ((s[o] = Fs[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function Nf(e) {
  return typeof e == "function";
}
let ea;
function eT() {
  ea = void 0;
}
const Ht = {
    now: () => (
      ea === void 0 &&
        Ht.set(
          je.isProcessing || mP.useManualTiming
            ? je.timestamp
            : performance.now(),
        ),
      ea
    ),
    set: (e) => {
      ((ea = e), queueMicrotask(eT));
    },
  },
  em = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Yn.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function tT(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function nT(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = em(s, t),
    a = em(i, t);
  return !o || !a ? !1 : tT(e) || ((n === "spring" || Nf(n)) && r);
}
const rT = 40;
class K0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Ht.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > rT
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && MP(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = Ht.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !nT(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        (l == null || l(ml(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise());
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Ls = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Q0 = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(Ls(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function q0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sT = 5;
function G0(e, t, n) {
  const r = Math.max(t - sT, 0);
  return q0(n - e(r), t - r);
}
const he = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  sc = 0.001;
function iT({
  duration: e = he.duration,
  bounce: t = he.bounce,
  velocity: n = he.velocity,
  mass: r = he.mass,
}) {
  let s,
    i,
    o = 1 - t;
  ((o = fn(he.minDamping, he.maxDamping, o)),
    (e = fn(he.minDuration, he.maxDuration, sn(e))),
    o < 1
      ? ((s = (u) => {
          const d = u * o,
            f = d * e,
            h = d - n,
            g = Iu(u, o),
            w = Math.exp(-f);
          return sc - (h / g) * w;
        }),
        (i = (u) => {
          const f = u * o * e,
            h = f * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            w = Math.exp(-f),
            y = Iu(Math.pow(u, 2), o);
          return ((-s(u) + sc > 0 ? -1 : 1) * ((h - g) * w)) / y;
        }))
      : ((s = (u) => {
          const d = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -sc + d * f;
        }),
        (i = (u) => {
          const d = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return d * f;
        })));
  const a = 5 / e,
    l = aT(s, i, a);
  if (((e = rn(e)), isNaN(l)))
    return { stiffness: he.stiffness, damping: he.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const oT = 12;
function aT(e, t, n) {
  let r = n;
  for (let s = 1; s < oT; s++) r = r - e(r) / t(r);
  return r;
}
function Iu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Vu = 2e4;
function X0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Vu; ) ((t += n), (r = e.next(t)));
  return t >= Vu ? 1 / 0 : t;
}
const lT = ["duration", "bounce"],
  cT = ["stiffness", "damping", "mass"];
function tm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function uT(e) {
  let t = {
    velocity: he.velocity,
    stiffness: he.stiffness,
    damping: he.damping,
    mass: he.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!tm(e, cT) && tm(e, lT))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * fn(0.05, 1, 1 - e.bounce) * Math.sqrt(s);
      t = { ...t, mass: he.mass, stiffness: s, damping: i };
    } else {
      const n = iT(e);
      ((t = { ...t, ...n, mass: he.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Y0(e = he.visualDuration, t = he.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: g,
    } = uT({ ...n, velocity: -sn(n.velocity || 0) }),
    w = h || 0,
    y = u / (2 * Math.sqrt(l * d)),
    b = o - i,
    m = sn(Math.sqrt(l / d)),
    p = Math.abs(b) < 5;
  (r || (r = p ? he.restSpeed.granular : he.restSpeed.default),
    s || (s = p ? he.restDelta.granular : he.restDelta.default));
  let x;
  if (y < 1) {
    const S = Iu(m, y);
    x = (P) => {
      const T = Math.exp(-y * m * P);
      return (
        o - T * (((w + y * m * b) / S) * Math.sin(S * P) + b * Math.cos(S * P))
      );
    };
  } else if (y === 1) x = (S) => o - Math.exp(-m * S) * (b + (w + m * b) * S);
  else {
    const S = m * Math.sqrt(y * y - 1);
    x = (P) => {
      const T = Math.exp(-y * m * P),
        j = Math.min(S * P, 300);
      return (
        o - (T * ((w + y * m * b) * Math.sinh(j) + S * b * Math.cosh(j))) / S
      );
    };
  }
  const C = {
    calculatedDuration: (g && f) || null,
    next: (S) => {
      const P = x(S);
      if (g) a.done = S >= f;
      else {
        let T = 0;
        y < 1 && (T = S === 0 ? rn(w) : G0(x, S, P));
        const j = Math.abs(T) <= r,
          N = Math.abs(o - P) <= s;
        a.done = j && N;
      }
      return ((a.value = a.done ? o : P), a);
    },
    toString: () => {
      const S = Math.min(X0(C), Vu),
        P = Q0((T) => C.next(S * T).value, S, 30);
      return S + "ms " + P;
    },
  };
  return C;
}
function nm({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    g = (j) => (a !== void 0 && j < a) || (l !== void 0 && j > l),
    w = (j) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - j) < Math.abs(l - j)
          ? a
          : l;
  let y = n * t;
  const b = f + y,
    m = o === void 0 ? b : o(b);
  m !== b && (y = m - f);
  const p = (j) => -y * Math.exp(-j / r),
    x = (j) => m + p(j),
    C = (j) => {
      const N = p(j),
        A = x(j);
      ((h.done = Math.abs(N) <= u), (h.value = h.done ? m : A));
    };
  let S, P;
  const T = (j) => {
    g(h.value) &&
      ((S = j),
      (P = Y0({
        keyframes: [h.value, w(h.value)],
        velocity: G0(x, j, h.value),
        damping: s,
        stiffness: i,
        restDelta: u,
        restSpeed: d,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let N = !1;
        return (
          !P && S === void 0 && ((N = !0), C(j), T(j)),
          S !== void 0 && j >= S ? P.next(j - S) : (!N && C(j), h)
        );
      },
    }
  );
}
const dT = lo(0.42, 0, 1, 1),
  fT = lo(0, 0, 0.58, 1),
  Z0 = lo(0.42, 0, 0.58, 1),
  hT = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ef = (e) => Array.isArray(e) && typeof e[0] == "number",
  rm = {
    linear: Oe,
    easeIn: dT,
    easeInOut: Z0,
    easeOut: fT,
    circIn: bf,
    circInOut: E0,
    circOut: N0,
    backIn: wf,
    backInOut: P0,
    backOut: j0,
    anticipate: T0,
  },
  sm = (e) => {
    if (Ef(e)) {
      Lu(e.length === 4);
      const [t, n, r, s] = e;
      return lo(t, n, r, s);
    } else if (typeof e == "string") return (Lu(rm[e] !== void 0), rm[e]);
    return e;
  },
  pT = (e, t) => (n) => t(e(n)),
  Un = (...e) => e.reduce(pT),
  ce = (e, t, n) => e + (t - e) * n;
function ic(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function mT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((s = ic(l, a, e + 1 / 3)), (i = ic(l, a, e)), (o = ic(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function La(e, t) {
  return (n) => (n > 0 ? t : e);
}
const oc = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  gT = [Du, ur, qr],
  yT = (e) => gT.find((t) => t.test(e));
function im(e) {
  const t = yT(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === qr && (n = mT(n)), n);
}
const om = (e, t) => {
    const n = im(e),
      r = im(t);
    if (!n || !r) return La(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = oc(n.red, r.red, i)),
      (s.green = oc(n.green, r.green, i)),
      (s.blue = oc(n.blue, r.blue, i)),
      (s.alpha = ce(n.alpha, r.alpha, i)),
      ur.transform(s)
    );
  },
  zu = new Set(["none", "hidden"]);
function vT(e, t) {
  return zu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function xT(e, t) {
  return (n) => ce(e, t, n);
}
function Af(e) {
  return typeof e == "number"
    ? xT
    : typeof e == "string"
      ? Sf(e)
        ? La
        : Fe.test(e)
          ? om
          : ST
      : Array.isArray(e)
        ? J0
        : typeof e == "object"
          ? Fe.test(e)
            ? om
            : wT
          : La;
}
function J0(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => Af(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function wT(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Af(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function bT(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[i] = l), s[o]++);
  }
  return r;
}
const ST = (e, t) => {
  const n = Yn.createTransformer(t),
    r = Hi(e),
    s = Hi(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (zu.has(e) && !s.values.length) || (zu.has(t) && !r.values.length)
      ? vT(e, t)
      : Un(J0(bT(r, s), s.values), n)
    : La(e, t);
};
function e1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ce(e, t, n)
    : Af(e)(e, t);
}
function CT(e, t, n) {
  const r = [],
    s = n || e1,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Oe : t;
      a = Un(l, a);
    }
    r.push(a);
  }
  return r;
}
function kT(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((Lu(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = CT(t, r, s),
    a = o.length,
    l = (u) => {
      let d = 0;
      if (a > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = Ls(e[d], e[d + 1], u);
      return o[d](f);
    };
  return n ? (u) => l(fn(e[0], e[i - 1], u)) : l;
}
function jT(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Ls(0, t, r);
    e.push(ce(n, 1, s));
  }
}
function PT(e) {
  const t = [0];
  return (jT(t, e.length - 1), t);
}
function TT(e, t) {
  return e.map((n) => n * t);
}
function NT(e, t) {
  return e.map(() => t || Z0).splice(0, e.length - 1);
}
function Ma({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = hT(r) ? r.map(sm) : sm(r),
    i = { done: !1, value: t[0] },
    o = TT(n && n.length === t.length ? n : PT(t), e),
    a = kT(o, t, { ease: Array.isArray(s) ? s : NT(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const ET = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => te.update(t, !0),
      stop: () => Xn(t),
      now: () => (je.isProcessing ? je.timestamp : Ht.now()),
    };
  },
  AT = { decay: nm, inertia: nm, tween: Ma, keyframes: Ma, spring: Y0 },
  RT = (e) => e / 100;
class Rf extends K0 {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || Cf,
      a = (l, u) => this.onKeyframesResolved(l, u);
    ((this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = Nf(n) ? n : AT[n] || Ma;
    let l, u;
    a !== Ma &&
      typeof t[0] != "number" &&
      ((l = Un(RT, e1(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    (i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      d.calculatedDuration === null && (d.calculatedDuration = X0(d)));
    const { calculatedDuration: f } = d,
      h = f + s,
      g = h * (r + 1) - s;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: j } = this.options;
      return { done: !0, value: j[j.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: d,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: h,
      repeat: g,
      repeatType: w,
      repeatDelay: y,
      onUpdate: b,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > d;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let x = this.currentTime,
      C = i;
    if (g) {
      const j = Math.min(this.currentTime, d) / f;
      let N = Math.floor(j),
        A = j % 1;
      (!A && j >= 1 && (A = 1),
        A === 1 && N--,
        (N = Math.min(N, g + 1)),
        !!(N % 2) &&
          (w === "reverse"
            ? ((A = 1 - A), y && (A -= y / f))
            : w === "mirror" && (C = o)),
        (x = fn(0, 1, A) * f));
    }
    const S = p ? { done: !1, value: l[0] } : C.next(x);
    a && (S.value = a(S.value));
    let { done: P } = S;
    !p &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      T && s !== void 0 && (S.value = ml(l, this.options, s)),
      b && b(S.value),
      T && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? sn(t.calculatedDuration) : 0;
  }
  get time() {
    return sn(this.currentTime);
  }
  set time(t) {
    ((t = rn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = sn(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = ET, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((i) => this.tick(i))), n && n());
    const s = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = s)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const FT = new Set(["opacity", "clipPath", "filter", "transform"]);
function Ff(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const LT = { linearEasing: void 0 };
function MT(e, t) {
  const n = Ff(e);
  return () => {
    var r;
    return (r = LT[t]) !== null && r !== void 0 ? r : n();
  };
}
const Oa = MT(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function t1(e) {
  return !!(
    (typeof e == "function" && Oa()) ||
    !e ||
    (typeof e == "string" && (e in $u || Oa())) ||
    Ef(e) ||
    (Array.isArray(e) && e.every(t1))
  );
}
const oi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  $u = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: oi([0, 0.65, 0.55, 1]),
    circOut: oi([0.55, 0, 1, 0.45]),
    backIn: oi([0.31, 0.01, 0.66, -0.59]),
    backOut: oi([0.33, 1.53, 0.69, 0.99]),
  };
function n1(e, t) {
  if (e)
    return typeof e == "function" && Oa()
      ? Q0(e, t)
      : Ef(e)
        ? oi(e)
        : Array.isArray(e)
          ? e.map((n) => n1(n, t) || $u.easeOut)
          : $u[e];
}
function OT(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const d = n1(a, s);
  return (
    Array.isArray(d) && (u.easing = d),
    e.animate(u, {
      delay: r,
      duration: s,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function am(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const DT = Ff(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Da = 10,
  _T = 2e4;
function IT(e) {
  return Nf(e.type) || e.type === "spring" || !t1(e.ease);
}
function VT(e, t) {
  const n = new Rf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < _T; ) ((r = n.sample(i)), s.push(r.value), (i += Da));
  return { times: void 0, keyframes: s, duration: i - Da, ease: "linear" };
}
const r1 = { anticipate: T0, backInOut: P0, circInOut: E0 };
function zT(e) {
  return e in r1;
}
class lm extends K0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    ((this.resolver = new H0(
      i,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      s,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: s = 300,
      times: i,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: d,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && Oa() && zT(o) && (o = r1[o]), IT(this.options))
    ) {
      const {
          onComplete: h,
          onUpdate: g,
          motionValue: w,
          element: y,
          ...b
        } = this.options,
        m = VT(t, b);
      ((t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (s = m.duration),
        (i = m.times),
        (o = m.ease),
        (a = "keyframes"));
    }
    const f = OT(l.owner.current, u, t, {
      ...this.options,
      duration: s,
      times: i,
      ease: o,
    });
    return (
      (f.startTime = d ?? this.calcStartTime()),
      this.pendingTimeline
        ? (am(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: h } = this.options;
            (l.set(ml(t, this.options, n)),
              h && h(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: f, duration: s, times: i, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return sn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return sn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = rn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Oe;
      const { animation: r } = n;
      am(r, t);
    }
    return Oe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: d,
          onComplete: f,
          element: h,
          ...g
        } = this.options,
        w = new Rf({
          ...g,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        y = rn(this.time);
      u.setWithVelocity(w.sample(y - Da).value, w.sample(y).value, Da);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    return (
      DT() &&
      r &&
      FT.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const $T = Ff(() => window.ScrollTimeline !== void 0);
class BT {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((s) =>
      $T() && s.attachTimeline ? s.attachTimeline(t) : n(s),
    );
    return () => {
      r.forEach((s, i) => {
        (s && s(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function UT({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length;
}
const Lf =
    (e, t, n, r = {}, s, i) =>
    (o) => {
      const a = xf(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - rn(l);
      let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (h) => {
          (t.set(h), a.onUpdate && a.onUpdate(h));
        },
        onComplete: () => {
          (o(), a.onComplete && a.onComplete());
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : s,
      };
      (UT(a) || (d = { ...d, ...pP(e, d) }),
        d.duration && (d.duration = rn(d.duration)),
        d.repeatDelay && (d.repeatDelay = rn(d.repeatDelay)),
        d.from !== void 0 && (d.keyframes[0] = d.from));
      let f = !1;
      if (
        ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
          ((d.duration = 0), d.delay === 0 && (f = !0)),
        f && !i && t.get() !== void 0)
      ) {
        const h = ml(d.keyframes, a);
        if (h !== void 0)
          return (
            te.update(() => {
              (d.onUpdate(h), d.onComplete());
            }),
            new BT([])
          );
      }
      return !i && lm.supports(d) ? new lm(d) : new Rf(d);
    },
  WT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  HT = (e) => (Fu(e) ? e[e.length - 1] || 0 : e);
function Mf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Of(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Df {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Mf(this.subscriptions, t), () => Of(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const cm = 30,
  KT = (e) => !isNaN(parseFloat(e));
class QT {
  constructor(t, n = {}) {
    ((this.version = "11.13.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = Ht.now();
        (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Ht.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = KT(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Df());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            te.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ht.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > cm
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, cm);
    return q0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ki(e, t) {
  return new QT(e, t);
}
function qT(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ki(n));
}
function GT(e, t) {
  const n = pl(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = HT(i[o]);
    qT(e, o, a);
  }
}
const _f = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  XT = "framerAppearId",
  s1 = "data-" + _f(XT);
function i1(e) {
  return e.props[s1];
}
const Me = (e) => !!(e && e.getVelocity);
function YT(e) {
  return !!(Me(e) && e.add);
}
function Bu(e, t) {
  const n = e.getValue("willChange");
  if (YT(n)) return n.add(t);
}
function ZT({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function o1(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const f in l) {
    const h = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null,
      ),
      g = l[f];
    if (g === void 0 || (d && ZT(d, f))) continue;
    const w = { delay: n, ...xf(o || {}, f) };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const m = i1(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, f, te);
        p !== null && ((w.startTime = p), (y = !0));
      }
    }
    (Bu(e, f),
      h.start(
        Lf(f, h, g, e.shouldReduceMotion && Fr.has(f) ? { type: !1 } : w, e, y),
      ));
    const b = h.animation;
    b && u.push(b);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        te.update(() => {
          a && GT(e, a);
        });
      }),
    u
  );
}
function Uu(e, t, n = {}) {
  var r;
  const s = pl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(o1(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = i;
            return JT(e, t, d + u, f, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, d] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => d());
  } else return Promise.all([o(), a(n.delay)]);
}
function JT(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = s === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(eN)
      .forEach((u, d) => {
        (u.notify("AnimationStart", t),
          o.push(
            Uu(u, t, { ...i, delay: n + l(d) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function eN(e, t) {
  return e.sortNodePosition(t);
}
function tN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Uu(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Uu(e, t, n);
  else {
    const s = typeof t == "function" ? pl(e, t, n.custom) : t;
    r = Promise.all(o1(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const nN = vf.length;
function a1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? a1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < nN; n++) {
    const r = vf[n],
      s = e.props[r];
    (Ui(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const rN = [...yf].reverse(),
  sN = yf.length;
function iN(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => tN(e, n, r)));
}
function oN(e) {
  let t = iN(e),
    n = um(),
    r = !0;
  const s = (l) => (u, d) => {
    var f;
    const h = pl(
      e,
      d,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const { transition: g, transitionEnd: w, ...y } = h;
      u = { ...u, ...y, ...w };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      d = a1(e.parent) || {},
      f = [],
      h = new Set();
    let g = {},
      w = 1 / 0;
    for (let b = 0; b < sN; b++) {
      const m = rN[b],
        p = n[m],
        x = u[m] !== void 0 ? u[m] : d[m],
        C = Ui(x),
        S = m === l ? p.isActive : null;
      S === !1 && (w = b);
      let P = x === d[m] && x !== u[m] && C;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (p.protectedKeys = { ...g }),
        (!p.isActive && S === null) ||
          (!x && !p.prevProp) ||
          hl(x) ||
          typeof x == "boolean")
      )
        continue;
      const T = aN(p.prevProp, x);
      let j = T || (m === l && p.isActive && !P && C) || (b > w && C),
        N = !1;
      const A = Array.isArray(x) ? x : [x];
      let V = A.reduce(s(m), {});
      S === !1 && (V = {});
      const { prevResolvedValues: M = {} } = p,
        _ = { ...M, ...V },
        F = ($) => {
          ((j = !0),
            h.has($) && ((N = !0), h.delete($)),
            (p.needsAnimating[$] = !0));
          const E = e.getValue($);
          E && (E.liveStyle = !1);
        };
      for (const $ in _) {
        const E = V[$],
          L = M[$];
        if (g.hasOwnProperty($)) continue;
        let I = !1;
        (Fu(E) && Fu(L) ? (I = !w0(E, L)) : (I = E !== L),
          I
            ? E != null
              ? F($)
              : h.add($)
            : E !== void 0 && h.has($)
              ? F($)
              : (p.protectedKeys[$] = !0));
      }
      ((p.prevProp = x),
        (p.prevResolvedValues = V),
        p.isActive && (g = { ...g, ...V }),
        r && e.blockInitialAnimation && (j = !1),
        j &&
          (!(P && T) || N) &&
          f.push(...A.map(($) => ({ animation: $, options: { type: m } }))));
    }
    if (h.size) {
      const b = {};
      (h.forEach((m) => {
        const p = e.getBaseTarget(m),
          x = e.getValue(m);
        (x && (x.liveStyle = !0), (b[m] = p ?? null));
      }),
        f.push({ animation: b }));
    }
    let y = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var g;
        return (g = h.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u));
    const f = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      ((n = um()), (r = !0));
    },
  };
}
function aN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !w0(t, e) : !1;
}
function nr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function um() {
  return {
    animate: nr(!0),
    whileInView: nr(),
    whileHover: nr(),
    whileTap: nr(),
    whileDrag: nr(),
    whileFocus: nr(),
    exit: nr(),
  };
}
class tr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class lN extends tr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = oN(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    hl(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let cN = 0;
class uN extends tr {
  constructor() {
    (super(...arguments), (this.id = cN++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const dN = { animation: { Feature: lN }, exit: { Feature: uN } };
function fN(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const wt = { x: !1, y: !1 };
function l1() {
  return wt.x || wt.y;
}
function dm(e) {
  return (t) => {
    t.pointerType === "touch" || l1() || e(t);
  };
}
function hN(e, t, n = {}) {
  const r = new AbortController(),
    s = { passive: !0, ...n, signal: r.signal },
    i = dm((o) => {
      const { target: a } = o,
        l = t(o);
      if (!l || !a) return;
      const u = dm((d) => {
        (l(d), a.removeEventListener("pointerleave", u));
      });
      a.addEventListener("pointerleave", u, s);
    });
  return (
    fN(e).forEach((o) => {
      o.addEventListener("pointerenter", i, s);
    }),
    () => r.abort()
  );
}
function pN(e) {
  return e === "x" || e === "y"
    ? wt[e]
      ? null
      : ((wt[e] = !0),
        () => {
          wt[e] = !1;
        })
    : wt.x || wt.y
      ? null
      : ((wt.x = wt.y = !0),
        () => {
          wt.x = wt.y = !1;
        });
}
const c1 = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function uo(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const mN = (e) => (t) => c1(t) && e(t, uo(t));
function tn(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Wn(e, t, n, r) {
  return tn(e, t, mN(n), r);
}
const fm = (e, t) => Math.abs(e - t);
function gN(e, t) {
  const n = fm(e.x, t.x),
    r = fm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class u1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = lc(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          g = gN(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !g) return;
        const { point: w } = f,
          { timestamp: y } = je;
        this.history.push({ ...w, timestamp: y });
        const { onStart: b, onMove: m } = this.handlers;
        (h ||
          (b && b(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, h) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ac(h, this.transformPagePoint)),
          te.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: g, onSessionEnd: w, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const b = lc(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ac(h, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && g && g(f, b), w && w(f, b));
      }),
      !c1(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window));
    const o = uo(t),
      a = ac(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = je;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: d } = n;
    (d && d(t, lc(a, this.history)),
      (this.removeListeners = Un(
        Wn(this.contextWindow, "pointermove", this.handlePointerMove),
        Wn(this.contextWindow, "pointerup", this.handlePointerUp),
        Wn(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Xn(this.updatePoint));
  }
}
function ac(e, t) {
  return t ? { point: t(e.point) } : e;
}
function hm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function lc({ point: e }, t) {
  return {
    point: e,
    delta: hm(e, d1(t)),
    offset: hm(e, yN(t)),
    velocity: vN(t, 0.1),
  };
}
function yN(e) {
  return e[0];
}
function d1(e) {
  return e[e.length - 1];
}
function vN(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = d1(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > rn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = sn(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Gr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const f1 = 1e-4,
  xN = 1 - f1,
  wN = 1 + f1,
  h1 = 0.01,
  bN = 0 - h1,
  SN = 0 + h1;
function it(e) {
  return e.max - e.min;
}
function CN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function pm(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = ce(t.min, t.max, e.origin)),
    (e.scale = it(n) / it(t)),
    (e.translate = ce(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= xN && e.scale <= wN) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= bN && e.translate <= SN) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function xi(e, t, n, r) {
  (pm(e.x, t.x, n.x, r ? r.originX : void 0),
    pm(e.y, t.y, n.y, r ? r.originY : void 0));
}
function mm(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + it(t)));
}
function kN(e, t, n) {
  (mm(e.x, t.x, n.x), mm(e.y, t.y, n.y));
}
function gm(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + it(t)));
}
function wi(e, t, n) {
  (gm(e.x, t.x, n.x), gm(e.y, t.y, n.y));
}
function jN(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ce(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ym(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function PN(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: ym(e.x, n, s), y: ym(e.y, t, r) };
}
function vm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function TN(e, t) {
  return { x: vm(e.x, t.x), y: vm(e.y, t.y) };
}
function NN(e, t) {
  let n = 0.5;
  const r = it(e),
    s = it(t);
  return (
    s > r
      ? (n = Ls(t.min, t.max - r, e.min))
      : r > s && (n = Ls(e.min, e.max - s, t.min)),
    fn(0, 1, n)
  );
}
function EN(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Wu = 0.35;
function AN(e = Wu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Wu),
    { x: xm(e, "left", "right"), y: xm(e, "top", "bottom") }
  );
}
function xm(e, t, n) {
  return { min: wm(e, t), max: wm(e, n) };
}
function wm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const bm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Xr = () => ({ x: bm(), y: bm() }),
  Sm = () => ({ min: 0, max: 0 }),
  me = () => ({ x: Sm(), y: Sm() });
function ct(e) {
  return [e("x"), e("y")];
}
function p1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function RN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function FN(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function cc(e) {
  return e === void 0 || e === 1;
}
function Hu({ scale: e, scaleX: t, scaleY: n }) {
  return !cc(e) || !cc(t) || !cc(n);
}
function ir(e) {
  return (
    Hu(e) ||
    m1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function m1(e) {
  return Cm(e.x) || Cm(e.y);
}
function Cm(e) {
  return e && e !== "0%";
}
function _a(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function km(e, t, n, r, s) {
  return (s !== void 0 && (e = _a(e, s, r)), _a(e, n, r) + t);
}
function Ku(e, t = 0, n = 1, r, s) {
  ((e.min = km(e.min, t, n, r, s)), (e.max = km(e.max, t, n, r, s)));
}
function g1(e, { x: t, y: n }) {
  (Ku(e.x, t.translate, t.scale, t.originPoint),
    Ku(e.y, n.translate, n.scale, n.originPoint));
}
const jm = 0.999999999999,
  Pm = 1.0000000000001;
function LN(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    ((i = n[a]), (o = i.projectionDelta));
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Zr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), g1(e, o)),
      r && ir(i.latestValues) && Zr(e, i.latestValues));
  }
  (t.x < Pm && t.x > jm && (t.x = 1), t.y < Pm && t.y > jm && (t.y = 1));
}
function Yr(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Tm(e, t, n, r, s = 0.5) {
  const i = ce(e.min, e.max, s);
  Ku(e, t, n, i, r);
}
function Zr(e, t) {
  (Tm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Tm(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function y1(e, t) {
  return p1(FN(e.getBoundingClientRect(), t));
}
function MN(e, t, n) {
  const r = y1(e, n),
    { scroll: s } = t;
  return (s && (Yr(r.x, s.offset.x), Yr(r.y, s.offset.y)), r);
}
const v1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ON = new WeakMap();
class DN {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = me()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(uo(d).point));
      },
      i = (d, f) => {
        const { drag: h, dragPropagation: g, onDragStart: w } = this.getProps();
        if (
          h &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = pN(h)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ct((b) => {
            let m = this.getAxisMotionValue(b).get() || 0;
            if (Wt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const x = p.layout.layoutBox[b];
                x && (m = it(x) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[b] = m;
          }),
          w && te.postRender(() => w(d, f)),
          Bu(this.visualElement, "transform"));
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: g,
          onDirectionLock: w,
          onDrag: y,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: b } = f;
        if (g && this.currentDirection === null) {
          ((this.currentDirection = _N(b)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, b),
          this.updateAxis("y", f.point, b),
          this.visualElement.render(),
          y && y(d, f));
      },
      a = (d, f) => this.stop(d, f),
      l = () =>
        ct((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new u1(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: v1(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && te.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !_o(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = jN(o, this.constraints[t], this.elastic[t])),
      i.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    (n && Gr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = PN(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = AN(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ct((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = EN(s.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Gr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = MN(r, s.root, this.visualElement.getTransformPagePoint());
    let o = TN(s.layout.layoutBox, i);
    if (n) {
      const a = n(RN(o));
      ((this.hasMutatedConstraints = !!a), a && (o = p1(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = ct((d) => {
        if (!_o(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          g = s ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(d, w);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Bu(this.visualElement, t),
      r.start(Lf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ct((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ct((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ct((n) => {
      const { drag: r } = this.getProps();
      if (!_o(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - ce(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Gr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    ct((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = NN({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ct((o) => {
        if (!_o(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(ce(l, u, s[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ON.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Wn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Gr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      te.read(r));
    const o = tn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ct((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += l[d].translate),
                f.set(f.get() + l[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), i(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = Wu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function _o(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function _N(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class IN extends tr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Oe),
      (this.removeListeners = Oe),
      (this.controls = new DN(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Oe));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Nm = (e) => (t, n) => {
  e && te.postRender(() => e(t, n));
};
class VN extends tr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Oe));
  }
  onPointerDown(t) {
    this.session = new u1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: v1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: Nm(t),
      onStart: Nm(n),
      onMove: r,
      onEnd: (i, o) => {
        (delete this.session, s && te.postRender(() => s(i, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Wn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const gl = v.createContext(null);
function zN() {
  const e = v.useContext(gl);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    s = v.useId();
  v.useEffect(() => r(s), []);
  const i = v.useCallback(() => n && n(s), [s, n]);
  return !t && n ? [!1, i] : [!0];
}
const If = v.createContext({}),
  x1 = v.createContext({}),
  ta = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Em(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ei = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (B.test(e)) e = parseFloat(e);
        else return e;
      const n = Em(e, t.target.x),
        r = Em(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  $N = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = Yn.parse(e);
      if (s.length > 5) return r;
      const i = Yn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((s[0 + o] /= a), (s[1 + o] /= l));
      const u = ce(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
      );
    },
  },
  Ia = {};
function BN(e) {
  Object.assign(Ia, e);
}
const { schedule: Vf, cancel: fR } = b0(queueMicrotask, !1);
class UN extends v.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    (BN(WN),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ta.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              te.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Vf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function w1(e) {
  const [t, n] = zN(),
    r = v.useContext(If);
  return c.jsx(UN, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: v.useContext(x1),
    isPresent: t,
    safeToRemove: n,
  });
}
const WN = {
    borderRadius: {
      ...ei,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ei,
    borderTopRightRadius: ei,
    borderBottomLeftRadius: ei,
    borderBottomRightRadius: ei,
    boxShadow: $N,
  },
  b1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  HN = b1.length,
  Am = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Rm = (e) => typeof e == "number" || B.test(e);
function KN(e, t, n, r, s, i) {
  s
    ? ((e.opacity = ce(0, n.opacity !== void 0 ? n.opacity : 1, QN(r))),
      (e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, qN(r))))
    : i &&
      (e.opacity = ce(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < HN; o++) {
    const a = `border${b1[o]}Radius`;
    let l = Fm(t, a),
      u = Fm(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Rm(l) === Rm(u)
        ? ((e[a] = Math.max(ce(Am(l), Am(u), r), 0)),
          (Wt.test(u) || Wt.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Fm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const QN = S1(0, 0.5, N0),
  qN = S1(0.5, 0.95, Oe);
function S1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ls(e, t, r)));
}
function Lm(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function lt(e, t) {
  (Lm(e.x, t.x), Lm(e.y, t.y));
}
function Mm(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Om(e, t, n, r, s) {
  return (
    (e -= t),
    (e = _a(e, 1 / n, r)),
    s !== void 0 && (e = _a(e, 1 / s, r)),
    e
  );
}
function GN(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (Wt.test(t) &&
      ((t = parseFloat(t)), (t = ce(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ce(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = Om(e.min, t, n, a, s)),
    (e.max = Om(e.max, t, n, a, s)));
}
function Dm(e, t, [n, r, s], i, o) {
  GN(e, t[n], t[r], t[s], t.scale, i, o);
}
const XN = ["x", "scaleX", "originX"],
  YN = ["y", "scaleY", "originY"];
function _m(e, t, n, r) {
  (Dm(e.x, t, XN, n ? n.x : void 0, r ? r.x : void 0),
    Dm(e.y, t, YN, n ? n.y : void 0, r ? r.y : void 0));
}
function Im(e) {
  return e.translate === 0 && e.scale === 1;
}
function C1(e) {
  return Im(e.x) && Im(e.y);
}
function Vm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ZN(e, t) {
  return Vm(e.x, t.x) && Vm(e.y, t.y);
}
function zm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function k1(e, t) {
  return zm(e.x, t.x) && zm(e.y, t.y);
}
function $m(e) {
  return it(e.x) / it(e.y);
}
function Bm(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class JN {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Mf(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Of(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function eE(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: g,
      skewY: w,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      g && (r += `skewX(${g}deg) `),
      w && (r += `skewY(${w}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const tE = (e, t) => e.depth - t.depth;
class nE {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Mf(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Of(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(tE),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function na(e) {
  const t = Me(e) ? e.get() : e;
  return WT(t) ? t.toValue() : t;
}
function rE(e, t) {
  const n = Ht.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Xn(r), e(i - t));
    };
  return (te.read(r, !0), () => Xn(r));
}
function sE(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function iE(e, t, n) {
  const r = Me(e) ? e : Ki(e);
  return (r.start(Lf("", r, t, n)), r.animation);
}
const or = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ai = typeof window < "u" && window.MotionDebug !== void 0,
  uc = ["", "X", "Y", "Z"],
  oE = { visibility: "hidden" },
  Um = 1e3;
let aE = 0;
function dc(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function j1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = i1(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", te, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && j1(r);
}
function P1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = aE++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            ai &&
              (or.totalNodes =
                or.resolvedTargetDeltas =
                or.recalculatedProjection =
                  0),
            this.nodes.forEach(uE),
            this.nodes.forEach(mE),
            this.nodes.forEach(gE),
            this.nodes.forEach(dE),
            ai && window.MotionDebug.record(or));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new nE());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Df()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = sE(o)), (this.instance = o));
      const { layoutId: l, layout: u, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = rE(h, 250)),
            ta.hasAnimatedSinceResize &&
              ((ta.hasAnimatedSinceResize = !1), this.nodes.forEach(Hm)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: g,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const y =
                  this.options.transition || d.getDefaultTransition() || bE,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: m } =
                  d.getProps(),
                p = !this.targetLayout || !k1(this.targetLayout, w) || g,
                x = !h && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                x ||
                (h && (p || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, x));
                const C = { ...xf(y, "layout"), onPlay: b, onComplete: m };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C));
              } else
                (h || Hm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = w;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Xn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(yE),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          j1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Wm));
        return;
      }
      (this.isUpdating || this.nodes.forEach(hE),
        (this.isUpdating = !1),
        this.nodes.forEach(pE),
        this.nodes.forEach(lE),
        this.nodes.forEach(cE),
        this.clearAllSnapshots());
      const a = Ht.now();
      ((je.delta = fn(0, 1e3 / 60, a - je.timestamp)),
        (je.timestamp = a),
        (je.isProcessing = !0),
        nc.update.process(je),
        nc.preRender.process(je),
        nc.render.process(je),
        (je.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Vf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(fE), this.sharedNodes.forEach(vE));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        te.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      te.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = me()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !C1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      o &&
        (a || ir(this.latestValues) || d) &&
        (s(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        SE(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return me();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(CE)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Yr(l.x, d.offset.x), Yr(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = me();
      if (
        (lt(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && lt(l, o), Yr(l.x, f.offset.x), Yr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = me();
      lt(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (!a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Zr(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          ir(d.latestValues) && Zr(l, d.latestValues));
      }
      return (ir(this.latestValues) && Zr(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = me();
      lt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ir(u.latestValues)) continue;
        Hu(u.latestValues) && u.updateSnapshot();
        const d = me(),
          f = u.measurePageBox();
        (lt(d, f),
          _m(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d));
      }
      return (ir(this.latestValues) && _m(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== je.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = je.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = me()),
              (this.relativeTargetOrigin = me()),
              wi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              lt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = me()), (this.targetWithTransforms = me())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                kN(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : lt(this.target, this.layout.layoutBox),
                  g1(this.target, this.targetDelta))
                : lt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = me()),
                (this.relativeTargetOrigin = me()),
                wi(this.relativeTargetOrigin, this.target, g.target),
                lt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ai && or.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Hu(this.parent.latestValues) ||
          m1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === je.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      lt(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        g = this.treeScale.y;
      (LN(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = me())));
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Mm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Mm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        xi(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== g ||
          !Bm(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Bm(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)),
        ai && or.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Xr()),
        (this.projectionDelta = Xr()),
        (this.projectionDeltaWithTransform = Xr()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        d = { ...this.latestValues },
        f = Xr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const h = me(),
        g = l ? l.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        y = g !== w,
        b = this.getStack(),
        m = !b || b.members.length <= 1,
        p = !!(y && !m && this.options.crossfade === !0 && !this.path.some(wE));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (C) => {
        const S = C / 1e3;
        (Km(f.x, o.x, S),
          Km(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (wi(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            xE(this.relativeTarget, this.relativeTargetOrigin, h, S),
            x && ZN(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = me()),
            lt(x, this.relativeTarget)),
          y &&
            ((this.animationValues = d), KN(d, u, this.latestValues, S, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Xn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = te.update(() => {
          ((ta.hasAnimatedSinceResize = !0),
            (this.currentAnimation = iE(0, Um, {
              ...o,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Um),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: d,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          T1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || me();
          const f = it(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const h = it(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + h));
        }
        (lt(a, l),
          Zr(a, d),
          xi(this.projectionDeltaWithTransform, this.layoutCorrected, a, d));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new JN()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && dc("z", o, u, this.animationValues);
      for (let d = 0; d < uc.length; d++)
        (dc(`rotate${uc[d]}`, o, u, this.animationValues),
          dc(`skew${uc[d]}`, o, u, this.animationValues));
      o.render();
      for (const d in u)
        (o.setStaticValue(d, u[d]),
          this.animationValues && (this.animationValues[d] = u[d]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return oE;
      const u = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = na(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = d ? d(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = na(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !ir(this.latestValues) &&
            ((y.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const h = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = eE(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h,
        )),
        d && (u.transform = d(h, u.transform)));
      const { x: g, y: w } = this.projectionDelta;
      ((u.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
          : (u.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0));
      for (const y in Ia) {
        if (h[y] === void 0) continue;
        const { correct: b, applyTo: m } = Ia[y],
          p = u.transform === "none" ? h[y] : b(h[y], f);
        if (m) {
          const x = m.length;
          for (let C = 0; C < x; C++) u[m[C]] = p;
        } else u[y] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? na(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Wm),
        this.root.sharedNodes.clear());
    }
  };
}
function lE(e) {
  e.updateLayout();
}
function cE(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? ct((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = it(h);
          ((h.min = r[f].min), (h.max = h.min + g));
        })
      : T1(i, n.layoutBox, r) &&
        ct((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = it(r[f]);
          ((h.max = h.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g)));
        });
    const a = Xr();
    xi(a, r, n.layoutBox);
    const l = Xr();
    o ? xi(l, e.applyTransform(s, !0), n.measuredBox) : xi(l, r, n.layoutBox);
    const u = !C1(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: g } = f;
        if (h && g) {
          const w = me();
          wi(w, n.layoutBox, h.layoutBox);
          const y = me();
          (wi(y, r, g.layoutBox),
            k1(w, y) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function uE(e) {
  (ai && or.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function dE(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function fE(e) {
  e.clearSnapshot();
}
function Wm(e) {
  e.clearMeasurements();
}
function hE(e) {
  e.isLayoutDirty = !1;
}
function pE(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Hm(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function mE(e) {
  e.resolveTargetDelta();
}
function gE(e) {
  e.calcProjection();
}
function yE(e) {
  e.resetSkewAndRotation();
}
function vE(e) {
  e.removeLeadSnapshot();
}
function Km(e, t, n) {
  ((e.translate = ce(t.translate, 0, n)),
    (e.scale = ce(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Qm(e, t, n, r) {
  ((e.min = ce(t.min, n.min, r)), (e.max = ce(t.max, n.max, r)));
}
function xE(e, t, n, r) {
  (Qm(e.x, t.x, n.x, r), Qm(e.y, t.y, n.y, r));
}
function wE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const bE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  qm = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Gm = qm("applewebkit/") && !qm("chrome/") ? Math.round : Oe;
function Xm(e) {
  ((e.min = Gm(e.min)), (e.max = Gm(e.max)));
}
function SE(e) {
  (Xm(e.x), Xm(e.y));
}
function T1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !CN($m(t), $m(n), 0.2))
  );
}
function CE(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const kE = P1({
    attachResizeListener: (e, t) => tn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fc = { current: void 0 },
  N1 = P1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!fc.current) {
        const e = new kE({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (fc.current = e));
      }
      return fc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  jE = {
    pan: { Feature: VN },
    drag: { Feature: IN, ProjectionNode: N1, MeasureLayout: w1 },
  };
function Ym(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n);
  const s = r[n ? "onHoverStart" : "onHoverEnd"];
  s && te.postRender(() => s(t, uo(t)));
}
class PE extends tr {
  mount() {
    const { current: t, props: n } = this.node;
    t &&
      (this.unmount = hN(
        t,
        (r) => (Ym(this.node, r, !0), (s) => Ym(this.node, s, !1)),
        { passive: !n.onHoverStart && !n.onHoverEnd },
      ));
  }
  unmount() {}
}
class TE extends tr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Un(
      tn(this.node.current, "focus", () => this.onFocus()),
      tn(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const E1 = (e, t) => (t ? (e === t ? !0 : E1(e, t.parentElement)) : !1);
function hc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, uo(n));
}
class NE extends tr {
  constructor() {
    (super(...arguments),
      (this.removeStartListeners = Oe),
      (this.removeEndListeners = Oe),
      (this.removeAccessibleListeners = Oe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Wn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: d,
                  globalTapTarget: f,
                } = this.node.getProps(),
                h = !f && !E1(this.node.current, a.target) ? d : u;
              h && te.update(() => h(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          o = Wn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        ((this.removeEndListeners = Un(i, o)), this.startPress(t, n));
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                hc("up", (l, u) => {
                  const { onTap: d } = this.node.getProps();
                  d && te.postRender(() => d(l, u));
                });
            };
            (this.removeEndListeners(),
              (this.removeEndListeners = tn(this.node.current, "keyup", o)),
              hc("down", (a, l) => {
                this.startPress(a, l);
              }));
          },
          n = tn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && hc("cancel", (i, o) => this.cancelPress(i, o));
          },
          s = tn(this.node.current, "blur", r);
        this.removeAccessibleListeners = Un(n, s);
      }));
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: s } = this.node.getProps();
    (s &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && te.postRender(() => r(t, n)));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !l1()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && te.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Wn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = tn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Un(n, r);
  }
  unmount() {
    (this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners());
  }
}
const Qu = new WeakMap(),
  pc = new WeakMap(),
  EE = (e) => {
    const t = Qu.get(e.target);
    t && t(e);
  },
  AE = (e) => {
    e.forEach(EE);
  };
function RE({ root: e, ...t }) {
  const n = e || document;
  pc.has(n) || pc.set(n, {});
  const r = pc.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(AE, { root: e, ...t })),
    r[s]
  );
}
function FE(e, t, n) {
  const r = RE(t);
  return (
    Qu.set(e, n),
    r.observe(e),
    () => {
      (Qu.delete(e), r.unobserve(e));
    }
  );
}
const LE = { some: 0, all: 1 };
class ME extends tr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : LE[s],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = u ? d : f;
        h && h(l);
      };
    return FE(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(OE(t, n)) && this.startObserver();
  }
  unmount() {}
}
function OE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const DE = {
    inView: { Feature: ME },
    tap: { Feature: NE },
    focus: { Feature: TE },
    hover: { Feature: PE },
  },
  _E = { layout: { ProjectionNode: N1, MeasureLayout: w1 } },
  zf = v.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  yl = v.createContext({}),
  $f = typeof window < "u",
  A1 = $f ? v.useLayoutEffect : v.useEffect,
  R1 = v.createContext({ strict: !1 });
function IE(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = v.useContext(yl),
    l = v.useContext(R1),
    u = v.useContext(gl),
    d = v.useContext(zf).reducedMotion,
    f = v.useRef();
  ((r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: d,
      })));
  const h = f.current,
    g = v.useContext(x1);
  h &&
    !h.projection &&
    s &&
    (h.type === "html" || h.type === "svg") &&
    VE(f.current, n, s, g);
  const w = v.useRef(!1);
  v.useInsertionEffect(() => {
    h && w.current && h.update(n, u);
  });
  const y = n[s1],
    b = v.useRef(
      !!y &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, y)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, y)),
    );
  return (
    A1(() => {
      h &&
        ((w.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        Vf.render(h.render),
        b.current && h.animationState && h.animationState.animateChanges());
    }),
    v.useEffect(() => {
      h &&
        (!b.current && h.animationState && h.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, y);
          }),
          (b.current = !1)));
    }),
    h
  );
}
function VE(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : F1(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && Gr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function F1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : F1(e.parent);
}
function zE(e, t, n) {
  return v.useCallback(
    (r) => {
      (r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Gr(n) && (n.current = r)));
    },
    [t],
  );
}
function vl(e) {
  return hl(e.animate) || vf.some((t) => Ui(e[t]));
}
function L1(e) {
  return !!(vl(e) || e.variants);
}
function $E(e, t) {
  if (vl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ui(n) ? n : void 0,
      animate: Ui(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function BE(e) {
  const { initial: t, animate: n } = $E(e, v.useContext(yl));
  return v.useMemo(() => ({ initial: t, animate: n }), [Zm(t), Zm(n)]);
}
function Zm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Jm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ms = {};
for (const e in Jm) Ms[e] = { isEnabled: (t) => Jm[e].some((n) => !!t[n]) };
function UE(e) {
  for (const t in e) Ms[t] = { ...Ms[t], ...e[t] };
}
const WE = Symbol.for("motionComponentSymbol");
function HE({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  e && UE(e);
  function i(a, l) {
    let u;
    const d = { ...v.useContext(zf), ...a, layoutId: KE(a) },
      { isStatic: f } = d,
      h = BE(a),
      g = r(a, f);
    if (!f && $f) {
      QE();
      const w = qE(d);
      ((u = w.MeasureLayout),
        (h.visualElement = IE(s, g, d, t, w.ProjectionNode)));
    }
    return c.jsxs(yl.Provider, {
      value: h,
      children: [
        u && h.visualElement
          ? c.jsx(u, { visualElement: h.visualElement, ...d })
          : null,
        n(s, a, zE(g, h.visualElement, l), g, f, h.visualElement),
      ],
    });
  }
  const o = v.forwardRef(i);
  return ((o[WE] = s), o);
}
function KE({ layoutId: e }) {
  const t = v.useContext(If).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function QE(e, t) {
  v.useContext(R1).strict;
}
function qE(e) {
  const { drag: t, layout: n } = Ms;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const GE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Bf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(GE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function M1(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const O1 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function D1(e, t, n, r) {
  M1(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(O1.has(s) ? s : _f(s), t.attrs[s]);
}
function _1(e, { layout: t, layoutId: n }) {
  return (
    Fr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ia[e] || e === "opacity"))
  );
}
function Uf(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (Me(s[o]) ||
      (t.style && Me(t.style[o])) ||
      _1(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function I1(e, t, n) {
  const r = Uf(e, t, n);
  for (const s in e)
    if (Me(e[s]) || Me(t[s])) {
      const i =
        ao.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function Wf(e) {
  const t = v.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
function XE(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  s,
  i,
) {
  const o = { latestValues: YE(r, s, i, e), renderState: t() };
  return (n && (o.mount = (a) => n(r, a, o)), o);
}
const V1 = (e) => (t, n) => {
  const r = v.useContext(yl),
    s = v.useContext(gl),
    i = () => XE(e, t, r, s);
  return n ? i() : Wf(i);
};
function YE(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const h in i) s[h] = na(i[h]);
  let { initial: o, animate: a } = e;
  const l = vl(e),
    u = L1(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  if (f && typeof f != "boolean" && !hl(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let g = 0; g < h.length; g++) {
      const w = gf(e, h[g]);
      if (w) {
        const { transitionEnd: y, transition: b, ...m } = w;
        for (const p in m) {
          let x = m[p];
          if (Array.isArray(x)) {
            const C = d ? x.length - 1 : 0;
            x = x[C];
          }
          x !== null && (s[p] = x);
        }
        for (const p in y) s[p] = y[p];
      }
    }
  }
  return s;
}
const Hf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  z1 = () => ({ ...Hf(), attrs: {} }),
  $1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  ZE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  JE = ao.length;
function eA(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < JE; i++) {
    const o = ao[i],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = $1(a, Pf[o]);
      if (!l) {
        s = !1;
        const d = ZE[o] || o;
        r += `${d}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r);
}
function Kf(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Fr.has(l)) {
      o = !0;
      continue;
    } else if (L0(l)) {
      s[l] = u;
      continue;
    } else {
      const d = $1(u, Pf[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = d)) : (r[l] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = eA(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${l} ${u} ${d}`;
  }
}
function eg(e, t, n) {
  return typeof e == "string" ? e : B.transform(t + n * e);
}
function tA(e, t, n) {
  const r = eg(t, e.x, e.width),
    s = eg(n, e.y, e.height);
  return `${r} ${s}`;
}
const nA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  rA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function sA(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? nA : rA;
  e[i.offset] = B.transform(-r);
  const o = B.transform(t),
    a = B.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Qf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  d,
  f,
) {
  if ((Kf(e, u, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: h, style: g, dimensions: w } = e;
  (h.transform && (w && (g.transform = h.transform), delete h.transform),
    w &&
      (s !== void 0 || i !== void 0 || g.transform) &&
      (g.transformOrigin = tA(
        w,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && sA(h, o, a, l, !1));
}
const qf = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  iA = {
    useVisualState: V1({
      scrapeMotionValuesFromProps: I1,
      createRenderState: z1,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        (te.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          te.render(() => {
            (Qf(n, r, qf(t.tagName), e.transformTemplate), D1(t, n));
          }));
      },
    }),
  },
  oA = {
    useVisualState: V1({
      scrapeMotionValuesFromProps: Uf,
      createRenderState: Hf,
    }),
  };
function B1(e, t, n) {
  for (const r in t) !Me(t[r]) && !_1(r, n) && (e[r] = t[r]);
}
function aA({ transformTemplate: e }, t) {
  return v.useMemo(() => {
    const n = Hf();
    return (Kf(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function lA(e, t) {
  const n = e.style || {},
    r = {};
  return (B1(r, n, e), Object.assign(r, aA(e, t)), r);
}
function cA(e, t) {
  const n = {},
    r = lA(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const uA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Va(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    uA.has(e)
  );
}
let U1 = (e) => !Va(e);
function dA(e) {
  e && (U1 = (t) => (t.startsWith("on") ? !Va(t) : e(t)));
}
try {
  dA(require("@emotion/is-prop-valid").default);
} catch {}
function fA(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((U1(s) ||
        (n === !0 && Va(s)) ||
        (!t && !Va(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function hA(e, t, n, r) {
  const s = v.useMemo(() => {
    const i = z1();
    return (
      Qf(i, t, qf(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    (B1(i, e.style, e), (s.style = { ...i, ...s.style }));
  }
  return s;
}
function pA(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (Bf(n) ? hA : cA)(r, i, o, n),
      u = fA(r, typeof n == "string", e),
      d = n !== v.Fragment ? { ...u, ...l, ref: s } : {},
      { children: f } = r,
      h = v.useMemo(() => (Me(f) ? f.get() : f), [f]);
    return v.createElement(n, { ...d, children: h });
  };
}
function mA(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Bf(r) ? iA : oA),
      preloadedFeatures: e,
      useRender: pA(s),
      createVisualElement: t,
      Component: r,
    };
    return HE(o);
  };
}
const qu = { current: null },
  W1 = { current: !1 };
function gA() {
  if (((W1.current = !0), !!$f))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (qu.current = e.matches);
      (e.addListener(t), t());
    } else qu.current = !1;
}
function yA(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Me(s)) e.addValue(r, s);
    else if (Me(i)) e.addValue(r, Ki(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Ki(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const tg = new WeakMap(),
  vA = [...D0, Fe, Yn],
  xA = (e) => vA.find(O0(e)),
  ng = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class wA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Cf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = Ht.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), te.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u } = o;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = vl(n)),
      (this.isVariantNode = L1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in f) {
      const g = f[h];
      l[h] !== void 0 && Me(g) && g.set(l[h], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      tg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      W1.current || gA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : qu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (tg.delete(this.current),
      this.projection && this.projection.unmount(),
      Xn(this.notifyUpdate),
      Xn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Fr.has(t),
      s = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && te.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (s(), i(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ms) {
      const n = Ms[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : me();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < ng.length; r++) {
      const s = ng[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    ((this.prevMotionValues = yA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ki(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (R0(s) || A0(s))
          ? (s = parseFloat(s))
          : !xA(s) && Yn.test(n) && (s = W0(t, n)),
        this.setBaseTarget(t, Me(s) ? s.get() : s)),
      Me(s) ? s.get() : s
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = gf(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Me(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Df()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class H1 extends wA {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = H0));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function bA(e) {
  return window.getComputedStyle(e);
}
class SA extends H1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = M1));
  }
  readValueFromInstance(t, n) {
    if (Fr.has(n)) {
      const r = Tf(n);
      return (r && r.default) || 0;
    } else {
      const r = bA(t),
        s = (L0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return y1(t, n);
  }
  build(t, n, r) {
    Kf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Uf(t, n, r);
  }
}
class CA extends H1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = me));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Fr.has(n)) {
      const r = Tf(n);
      return (r && r.default) || 0;
    }
    return ((n = O1.has(n) ? n : _f(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return I1(t, n, r);
  }
  build(t, n, r) {
    Qf(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    D1(t, n, r, s);
  }
  mount(t) {
    ((this.isSVGTag = qf(t.tagName)), super.mount(t));
  }
}
const kA = (e, t) =>
    Bf(e) ? new CA(t) : new SA(t, { allowProjection: e !== v.Fragment }),
  jA = mA({ ...dN, ...DE, ...jE, ..._E }, kA),
  rg = cP(jA);
class PA extends v.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function TA({ children: e, isPresent: t }) {
  const n = v.useId(),
    r = v.useRef(null),
    s = v.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = v.useContext(zf);
  return (
    v.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = s.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        i && (d.nonce = i),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    c.jsx(PA, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: v.cloneElement(e, { ref: r }),
    })
  );
}
const NA = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const a = Wf(EA),
    l = v.useId(),
    u = v.useCallback(
      (f) => {
        a.set(f, !0);
        for (const h of a.values()) if (!h) return;
        r && r();
      },
      [a, r],
    ),
    d = v.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      i ? [Math.random(), u] : [n, u],
    );
  return (
    v.useMemo(() => {
      a.forEach((f, h) => a.set(h, !1));
    }, [n]),
    v.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = c.jsx(TA, { isPresent: n, children: e })),
    c.jsx(gl.Provider, { value: d, children: e })
  );
};
function EA() {
  return new Map();
}
const Io = (e) => e.key || "";
function sg(e) {
  const t = [];
  return (
    v.Children.forEach(e, (n) => {
      v.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const AA = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: s,
  presenceAffectsLayout: i = !0,
  mode: o = "sync",
}) => {
  const a = v.useMemo(() => sg(e), [e]),
    l = a.map(Io),
    u = v.useRef(!0),
    d = v.useRef(a),
    f = Wf(() => new Map()),
    [h, g] = v.useState(a),
    [w, y] = v.useState(a);
  A1(() => {
    ((u.current = !1), (d.current = a));
    for (let p = 0; p < w.length; p++) {
      const x = Io(w[p]);
      l.includes(x) ? f.delete(x) : f.get(x) !== !0 && f.set(x, !1);
    }
  }, [w, l.length, l.join("-")]);
  const b = [];
  if (a !== h) {
    let p = [...a];
    for (let x = 0; x < w.length; x++) {
      const C = w[x],
        S = Io(C);
      l.includes(S) || (p.splice(x, 0, C), b.push(C));
    }
    (o === "wait" && b.length && (p = b), y(sg(p)), g(a));
    return;
  }
  const { forceRender: m } = v.useContext(If);
  return c.jsx(c.Fragment, {
    children: w.map((p) => {
      const x = Io(p),
        C = a === w || l.includes(x),
        S = () => {
          if (f.has(x)) f.set(x, !0);
          else return;
          let P = !0;
          (f.forEach((T) => {
            T || (P = !1);
          }),
            P && (m == null || m(), y(d.current), s && s()));
        };
      return c.jsx(
        NA,
        {
          isPresent: C,
          initial: !u.current || r ? void 0 : !1,
          custom: C ? void 0 : n,
          presenceAffectsLayout: i,
          mode: o,
          onExitComplete: C ? void 0 : S,
          children: p,
        },
        x,
      );
    }),
  });
};
function RA() {
  io();
  const {
      items: e,
      isCartOpen: t,
      closeCart: n,
      removeItem: r,
      getTotalItems: s,
      addItem: i,
      canAddMore: o,
    } = oo(),
    [, a] = Rr(),
    [l, u] = v.useState(null),
    d = v.useRef(null),
    f = v.useRef(0),
    h = s(),
    g = 3 - h;
  (v.useEffect(() => {
    (h === 3 &&
      f.current < 3 &&
      d.current &&
      d.current.scrollTo({ top: 0, behavior: "smooth" }),
      (f.current = h));
  }, [h]),
    v.useEffect(() => {
      t && d.current && d.current.scrollTo({ top: 0 });
    }, [t]));
  const { data: w } = Zd({ queryKey: ["/api/products"], enabled: t }),
    y = () => {
      (n(), a("/checkout"));
    },
    b = (S) => {
      o() &&
        (i({
          id: S.id,
          sku: S.sku,
          variantId: S.variantId || "",
          name: S.name,
          brand: S.brand,
          price: S.price,
          image: S.image,
        }),
        u(null));
    },
    m = (S) => {
      if (e.some((T) => T.id === S.id)) {
        (n(), a(`/product/${S.id}`));
        return;
      }
      u((l == null ? void 0 : l.id) === S.id ? null : S);
    },
    p = (S) => {
      (u(null), n(), a(`/product/${S.id}`));
    },
    x = (S) => (S >= 1e3 ? `${(S / 1e3).toFixed(1)}K` : S.toString()),
    C = (w == null ? void 0 : w.slice(0, 24)) || [];
  return c.jsx(AA, {
    children:
      t &&
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(rg.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: n,
            className: "fixed inset-0 bg-black/50 z-[100]",
            "data-testid": "cart-modal-backdrop",
          }),
          c.jsxs(rg.div, {
            ref: d,
            initial: { y: "100%" },
            animate: { y: 0 },
            exit: { y: "100%" },
            transition: { type: "spring", damping: 30, stiffness: 300 },
            className:
              "fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-[101] max-h-[90vh] overflow-y-auto",
            "data-testid": "cart-modal",
            children: [
              c.jsxs("div", {
                className:
                  "sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10",
                children: [
                  c.jsxs("h2", {
                    className: "text-sm font-bold text-black",
                    children: [
                      "Sua Sacola ",
                      c.jsxs("span", {
                        className: "text-gray-500 font-semibold",
                        children: ["(", h, "/3)"],
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    onClick: n,
                    className:
                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                    "data-testid": "button-close-cart",
                    children: c.jsx(al, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "p-4 space-y-4",
                children: [
                  e.length === 0
                    ? c.jsxs("div", {
                        className:
                          "flex flex-col items-center justify-center py-8 text-center",
                        children: [
                          c.jsx(zi, {
                            className: "w-12 h-12 text-gray-300 mb-3",
                          }),
                          c.jsx("p", {
                            className: "text-lg font-semibold text-black mb-1",
                            children: "Sua sacola está vazia",
                          }),
                          c.jsx("p", {
                            className: "text-sm text-gray-500 mb-4",
                            children: "Escolha até 3 amostras grátis!",
                          }),
                        ],
                      })
                    : c.jsxs(c.Fragment, {
                        children: [
                          c.jsx("div", {
                            className: "bg-[#FFE5EA] px-3 py-2 text-center",
                            style: { borderRadius: "2px" },
                            children: c.jsx("p", {
                              className: "text-sm font-semibold text-[#E10742]",
                              children:
                                g > 0
                                  ? `Você selecionou ${h} de 3 amostras · falta${g === 1 ? "" : "m"} ${g}`
                                  : "Você selecionou todas as 3 amostras!",
                            }),
                          }),
                          e.map((S) =>
                            c.jsxs(
                              "div",
                              {
                                className:
                                  "flex gap-3 pb-3 border-b border-gray-100",
                                "data-testid": `cart-item-${S.id}`,
                                children: [
                                  c.jsx("img", {
                                    src: S.image,
                                    alt: S.name,
                                    className:
                                      "w-16 h-16 object-contain rounded bg-gray-50",
                                    "data-testid": `cart-item-image-${S.id}`,
                                  }),
                                  c.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      c.jsx("p", {
                                        className:
                                          "text-[10px] text-gray-500 uppercase",
                                        children: S.brand,
                                      }),
                                      c.jsx("h3", {
                                        className:
                                          "font-semibold text-xs text-black mb-1 truncate",
                                        children: S.name,
                                      }),
                                      c.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          c.jsxs("span", {
                                            className:
                                              "font-bold text-[#FF2A52] text-sm",
                                            children: [
                                              c.jsx("span", {
                                                className: "text-[10px]",
                                                children: "R$ ",
                                              }),
                                              "0",
                                              c.jsx("span", {
                                                className:
                                                  "text-[10px] font-normal",
                                                children: ",00",
                                              }),
                                            ],
                                          }),
                                          c.jsxs("span", {
                                            className:
                                              "text-[10px] text-gray-400/70 line-through",
                                            children: [
                                              "R$",
                                              S.price
                                                .toFixed(2)
                                                .replace(".", ","),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsx("button", {
                                    onClick: () => r(S.id),
                                    className:
                                      "p-2 text-gray-400 hover:text-red-500 transition-colors self-center",
                                    "data-testid": `button-remove-${S.id}`,
                                    children: c.jsx(Fx, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                ],
                              },
                              S.id,
                            ),
                          ),
                        ],
                      }),
                  e.length > 0 &&
                    h >= 1 &&
                    c.jsx("div", {
                      className: "pt-2 space-y-3",
                      children: c.jsx("button", {
                        onClick: y,
                        className:
                          "w-full bg-[#FF2A52] text-white py-4 font-semibold transition-colors",
                        style: { borderRadius: "2px" },
                        "data-testid": "button-checkout",
                        children: "Finalizar Pedido",
                      }),
                    }),
                  c.jsxs("div", {
                    className: "border-t border-gray-200 pt-4 mt-4",
                    children: [
                      c.jsx("h3", {
                        className: "text-[16px] font-bold text-black mb-3",
                        children: "Todos os Produtos",
                      }),
                      c.jsx("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: C.map((S) => {
                          const P = e.some((j) => j.id === S.id),
                            T = (l == null ? void 0 : l.id) === S.id;
                          return c.jsx(
                            "div",
                            {
                              className: `${P ? "opacity-50" : ""}`,
                              "data-testid": `modal-product-${S.id}`,
                              children: c.jsxs("div", {
                                className: "cursor-pointer",
                                onClick: () => m(S),
                                children: [
                                  c.jsxs("div", {
                                    className:
                                      "relative bg-[#F6F6F6] aspect-square mb-2",
                                    style: { borderRadius: "2px" },
                                    children: [
                                      c.jsx("img", {
                                        src: S.image,
                                        alt: `${S.brand} ${S.name}`,
                                        className:
                                          "w-full h-full object-contain p-2",
                                        loading: "lazy",
                                      }),
                                      c.jsx("div", {
                                        className: "absolute top-0 left-0",
                                        children: c.jsx("span", {
                                          className:
                                            "text-[10px] font-bold px-2 py-0.5 bg-[#FF2A52] text-white",
                                          style: { borderRadius: "2px" },
                                          children: "AMOSTRA GRÁTIS",
                                        }),
                                      }),
                                      P &&
                                        c.jsx("div", {
                                          className:
                                            "absolute inset-0 bg-white/60 flex items-center justify-center",
                                          children: c.jsx("span", {
                                            className:
                                              "text-[10px] font-bold text-[#FF2A52] bg-white px-2 py-1 shadow",
                                            style: { borderRadius: "2px" },
                                            children: "NA SACOLA",
                                          }),
                                        }),
                                      T &&
                                        !P &&
                                        c.jsxs("div", {
                                          className:
                                            "absolute bottom-0 left-0 right-0 flex flex-col gap-1 p-2",
                                          children: [
                                            c.jsxs(Bn, {
                                              size: "sm",
                                              onClick: (j) => {
                                                (j.stopPropagation(), b(S));
                                              },
                                              disabled: !o(),
                                              className:
                                                "w-full bg-[#FF2A52] border-[#FF2A52] text-white text-[11px] font-bold gap-1.5",
                                              style: { borderRadius: "2px" },
                                              "data-testid": `button-modal-add-${S.id}`,
                                              children: [
                                                c.jsx(zi, {
                                                  className: "w-3.5 h-3.5",
                                                }),
                                                "Adicionar",
                                              ],
                                            }),
                                            c.jsx(Bn, {
                                              variant: "ghost",
                                              size: "sm",
                                              onClick: (j) => {
                                                (j.stopPropagation(), p(S));
                                              },
                                              className:
                                                "w-full bg-[#FF2A52]/30 text-white text-[11px] font-semibold border-0",
                                              style: { borderRadius: "2px" },
                                              "data-testid": `button-modal-view-${S.id}`,
                                              children: "Ver Produto",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  c.jsx("p", {
                                    className:
                                      "text-[11px] font-bold text-black uppercase tracking-wide mt-1",
                                    children: S.brand,
                                  }),
                                  c.jsx("p", {
                                    className:
                                      "text-[11px] text-gray-700 line-clamp-2 leading-tight min-h-[28px]",
                                    children: S.name,
                                  }),
                                  c.jsxs("div", {
                                    className: "flex items-center gap-1 mt-1",
                                    children: [
                                      c.jsx("div", {
                                        className: "flex",
                                        children: [1, 2, 3, 4, 5].map((j) =>
                                          c.jsx(
                                            sf,
                                            {
                                              className: `w-3.5 h-3.5 ${j <= Math.floor(S.rating) ? "fill-[#FF2A52] text-[#FF2A52]" : "fill-gray-200 text-gray-200"}`,
                                            },
                                            j,
                                          ),
                                        ),
                                      }),
                                      c.jsx("span", {
                                        className: "text-[11px] text-gray-500",
                                        children: x(S.reviewCount),
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "flex items-center gap-2 mt-1",
                                    children: [
                                      c.jsxs("span", {
                                        className: "font-bold text-[#FF2A52]",
                                        children: [
                                          c.jsx("span", {
                                            className: "text-[13px]",
                                            children: "R$ ",
                                          }),
                                          c.jsx("span", {
                                            className: "text-[18px]",
                                            children: "0",
                                          }),
                                          c.jsx("span", {
                                            className:
                                              "text-[13px] font-normal",
                                            children: ",00",
                                          }),
                                        ],
                                      }),
                                      c.jsxs("span", {
                                        className:
                                          "text-[13px] text-gray-400/70 line-through",
                                        children: [
                                          "R$",
                                          S.price.toFixed(2).replace(".", ","),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            S.id,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
  });
}
const zt = "/assets/logo-tiktok-CfBkyC_V_(1)_1771528904425-Cypgxkyq.png";
function ls() {
  const { openCart: e, getTotalItems: t } = oo(),
    n = t();
  return c.jsxs("div", {
    className: "sticky top-0 z-50",
    children: [
      c.jsx("div", {
        className: "bg-[#FF2A52] text-white text-center px-4 py-1.5 text-sm",
        children: c.jsxs("p", {
          "data-testid": "text-promo",
          children: [
            "Escolha até ",
            c.jsx("strong", { children: "3 produtos" }),
            " totalmente ",
            c.jsx("strong", { children: "GRÁTIS" }),
            "!",
          ],
        }),
      }),
      c.jsx("header", {
        className: "bg-black",
        "data-testid": "header-mobile",
        children: c.jsxs("div", {
          className: "flex items-center justify-between px-4 py-3",
          children: [
            c.jsx(Qd, {
              href: "/",
              children: c.jsx("div", {
                className: "flex items-center gap-3 cursor-pointer",
                children: c.jsx("img", {
                  src: zt,
                  alt: "TikTok Shop",
                  className: "h-7",
                  "data-testid": "logo-tiktok",
                }),
              }),
            }),
            c.jsxs("div", {
              className: "flex items-center gap-5",
              children: [
                c.jsx(Wk, { className: "w-6 h-6 text-white" }),
                c.jsxs("button", {
                  onClick: e,
                  className: "relative",
                  "data-testid": "button-basket",
                  children: [
                    c.jsx(zi, { className: "w-6 h-6 text-white" }),
                    n > 0 &&
                      c.jsx("span", {
                        className:
                          "absolute -top-2 -right-2 w-5 h-5 bg-[#FF2A52] text-white text-[10px] font-bold rounded-full flex items-center justify-center",
                        "data-testid": "cart-count",
                        children: n > 99 ? "99+" : n,
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function FA({ product: e }) {
  const t = (n) => (n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : n.toString());
  return c.jsx(Qd, {
    href: `/product/${e.id}`,
    children: c.jsxs("div", {
      className: "group cursor-pointer bg-white overflow-hidden",
      style: { borderRadius: "6px" },
      "data-testid": `card-product-${e.id}`,
      children: [
        c.jsxs("div", {
          className: "relative overflow-hidden aspect-square",
          children: [
            c.jsx("img", {
              src: e.image,
              alt: `${e.brand} ${e.name}`,
              className:
                "w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300",
              loading: "lazy",
            }),
            c.jsx("div", {
              className: "absolute top-0 left-0",
              children: c.jsx("span", {
                className:
                  "text-[10px] font-bold px-2.5 py-1 bg-[#FF2A52] text-white",
                style: { borderRadius: "2px" },
                children: "AMOSTRA GRÁTIS",
              }),
            }),
            c.jsx("button", {
              className:
                "absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md",
              onClick: (n) => {
                (n.preventDefault(), n.stopPropagation());
              },
              "data-testid": `button-wishlist-${e.id}`,
              children: c.jsx(Rx, { className: "w-4 h-4 text-gray-600" }),
            }),
            c.jsxs("div", {
              className:
                "absolute bottom-2 right-2 bg-[#FF2A52] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 gap-1.5",
              "data-testid": `button-quickadd-${e.id}`,
              children: [
                c.jsx("span", {
                  className:
                    "text-[10px] font-bold text-white whitespace-nowrap",
                  children: "VER PRODUTO",
                }),
                c.jsx(zi, { className: "w-4 h-4 text-white" }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "space-y-1 px-2.5 pb-3 pt-2",
          children: [
            c.jsx("p", {
              className:
                "text-[11px] font-bold text-black uppercase tracking-wide",
              children: e.brand,
            }),
            c.jsx("p", {
              className:
                "text-[12px] text-gray-700 line-clamp-2 leading-tight min-h-[32px]",
              children: e.name,
            }),
            c.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                c.jsx(sf, {
                  className: "w-3.5 h-3.5 fill-yellow-400 text-yellow-400",
                }),
                c.jsx("span", {
                  className: "text-[11px] text-gray-500 font-semibold",
                  children: e.rating.toFixed(1),
                }),
                c.jsxs("span", {
                  className: "text-[11px] text-gray-400",
                  children: ["(", t(e.reviewCount), ")"],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-2 min-h-[20px]",
              children: [
                c.jsxs("span", {
                  className: "font-bold text-[#FF2A52]",
                  children: [
                    c.jsx("span", {
                      className: "text-[14px]",
                      children: "R$ ",
                    }),
                    c.jsx("span", { className: "text-[19px]", children: "0" }),
                    c.jsx("span", {
                      className: "text-[14px] font-normal",
                      children: ",00",
                    }),
                  ],
                }),
                c.jsxs("span", {
                  className: "text-[14px] text-gray-400/70 line-through",
                  children: ["R$", e.price.toFixed(2).replace(".", ",")],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function LA() {
  return c.jsx("div", {
    className: "bg-white border-b border-gray-200 px-4 py-2",
    children: c.jsxs("div", {
      className: "flex items-center gap-1.5 text-[12px]",
      children: [
        c.jsx("span", { className: "text-gray-400", children: "TikTok Shop" }),
        c.jsx(Ax, { className: "w-3 h-3 text-gray-400" }),
        c.jsx("span", {
          className: "text-black font-semibold",
          children: "Amostras Grátis",
        }),
      ],
    }),
  });
}
function MA() {
  const [e, t] = v.useState("");
  return (
    v.useEffect(() => {
      try {
        const n = localStorage.getItem("tiktok_user");
        if (n) {
          const r = JSON.parse(n);
          r.nome && t(r.nome);
        }
      } catch {}
    }, []),
    c.jsx("div", {
      className: "w-full relative overflow-hidden",
      style: {
        backgroundImage:
          "url(https://sf16-va.tiktokcdn.com/obj/eden-va2/aubvjjh_ylsslz_thahs/ljhwZthlaukjlkulzlp/register/mobile_main_banner_bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      "data-testid": "img-hero-banner",
      children: c.jsx("div", {
        className: "px-5 py-6",
        children: c.jsx("p", {
          className: "text-black text-[15px] leading-snug font-semibold",
          children: e
            ? c.jsxs(c.Fragment, {
                children: [
                  "Prezado(a) ",
                  c.jsx("span", {
                    className: "font-bold text-[#FF2A52]",
                    children: e,
                  }),
                  ", informamos que por se tratar do seu primeiro pedido de amostras grátis, foram liberados ",
                  c.jsx("span", {
                    className: "font-bold text-[#FF2A52]",
                    children: "até 3 produtos",
                  }),
                  " para você escolher. Ao realizar os vídeos de acordo com as diretrizes estabelecidas, serão liberadas ",
                  c.jsx("span", {
                    className: "font-bold text-[#FF2A52]",
                    children: "10 amostras grátis",
                  }),
                  " na próxima semana.",
                ],
              })
            : c.jsxs(c.Fragment, {
                children: [
                  "Bem-vindo ao ",
                  c.jsx("span", {
                    className: "font-bold text-[#FF2A52]",
                    children: "TikTok Shop",
                  }),
                  ". Cadastre-se para solicitar suas amostras grátis.",
                ],
              }),
        }),
      }),
    })
  );
}
function OA({ title: e, showAll: t = !0 }) {
  return c.jsxs("div", {
    className: "flex items-center justify-between px-4 py-3",
    children: [
      c.jsx("h2", {
        className: "text-[16px] font-bold text-black",
        children: e,
      }),
      t &&
        c.jsxs("button", {
          className:
            "flex items-center gap-1 text-[12px] font-medium text-[#FF2A52]",
          children: ["Ver Tudo ", c.jsx(Ax, { className: "w-4 h-4" })],
        }),
    ],
  });
}
function DA() {
  const {
    data: e,
    isLoading: t,
    error: n,
  } = Zd({ queryKey: ["/api/products"] });
  if (t)
    return c.jsxs("div", {
      className: "min-h-screen bg-white max-w-[430px] mx-auto",
      children: [
        c.jsx(ls, {}),
        c.jsx("div", {
          className: "flex items-center justify-center h-64",
          children: c.jsx("div", {
            className:
              "w-8 h-8 border-2 border-[#FF2A52] border-t-transparent rounded-full animate-spin",
          }),
        }),
      ],
    });
  if (n || !e)
    return c.jsxs("div", {
      className: "min-h-screen bg-white max-w-[430px] mx-auto",
      children: [
        c.jsx(ls, {}),
        c.jsx("div", {
          className: "flex items-center justify-center h-64",
          children: c.jsx("p", {
            className: "text-gray-500",
            children: "Erro ao carregar produtos",
          }),
        }),
      ],
    });
  const s = [
    { key: "Eletrônicos", label: "Eletrônicos" },
    { key: "Acessórios para Celular", label: "Acessórios para Celular" },
    { key: "Gadgets e Tecnologia", label: "Gadgets e Tecnologia" },
    { key: "Casa e Cozinha", label: "Casa e Cozinha" },
    { key: "Utilidades", label: "Utilidades" },
    { key: "Cremes e Maquiagens", label: "Cremes e Maquiagens" },
    { key: "Perfumes", label: "Perfumes" },
    { key: "Ferramentas", label: "Ferramentas" },
  ].map((i) => ({
    ...i,
    products: e.filter((o) => o.category === i.key).slice(0, 6),
  }));
  return c.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5] max-w-[430px] mx-auto",
    "data-testid": "page-home",
    children: [
      c.jsx(ls, {}),
      c.jsx(LA, {}),
      c.jsx(MA, {}),
      c.jsx("div", {
        className: "pb-20",
        children: s.map((i) =>
          c.jsxs(
            "section",
            {
              className: "mt-8",
              "data-testid": `section-category-${i.key}`,
              children: [
                c.jsx(OA, { title: i.label, showAll: !1 }),
                c.jsx("div", {
                  className: "grid grid-cols-2 gap-1.5 px-2",
                  children: i.products.map((o) =>
                    c.jsx(FA, { product: o }, o.id),
                  ),
                }),
              ],
            },
            i.key,
          ),
        ),
      }),
      c.jsx("footer", {
        className: "bg-black text-white py-8 px-4",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("img", {
              src: zt,
              alt: "TikTok Shop",
              className: "h-6 mx-auto mb-4",
              "data-testid": "logo-tiktok-footer",
            }),
            c.jsx("p", {
              className: "text-[11px] text-gray-400 mb-2",
              children: "Sua loja favorita no TikTok",
            }),
            c.jsxs("div", {
              className: "flex justify-center gap-6 text-[11px] text-gray-400",
              children: [
                c.jsx("span", { children: "Atendimento" }),
                c.jsx("span", { children: "Nossas Lojas" }),
                c.jsx("span", { children: "Sobre Nós" }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function _A({ images: e, productName: t }) {
  const [n, r] = v.useState(0),
    s = v.useRef(null),
    { t: i } = io(),
    o = 5,
    a = () => {
      if (s.current) {
        const f = s.current.scrollLeft,
          g = s.current.offsetWidth * 0.75 + 12,
          w = Math.round(f / g);
        r(Math.min(w, e.length - 1));
      }
    },
    l = (f) => {
      if (s.current) {
        const g = s.current.offsetWidth * 0.75 + 12;
        s.current.scrollTo({ left: f * g, behavior: "smooth" });
      }
    },
    d = (() => {
      const f = e.length;
      if (f <= o) return e.map((g, w) => w);
      const h = Math.max(0, Math.min(n - Math.floor(o / 2), f - o));
      return Array.from({ length: o }, (g, w) => h + w);
    })();
  return c.jsx("div", {
    className: "w-full bg-white relative overflow-hidden",
    children: c.jsxs("div", {
      className: "relative",
      children: [
        c.jsx("div", {
          ref: s,
          className:
            "overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-3 scroll-smooth px-4",
          onScroll: a,
          style: { scrollbarWidth: "none", msOverflowStyle: "none" },
          "data-testid": "gallery-main",
          children: e.map((f, h) =>
            c.jsx(
              "div",
              {
                className: "flex-shrink-0 snap-start relative",
                style: { width: "75%", aspectRatio: "1/1" },
                children: c.jsx("div", {
                  className:
                    "w-full h-full rounded overflow-hidden bg-white shadow-lg",
                  children:
                    f.type === "video"
                      ? c.jsxs("div", {
                          className: "relative w-full h-full",
                          children: [
                            c.jsx("img", {
                              src: f.url,
                              alt: `${t} - Video thumbnail`,
                              className: "w-full h-full object-cover",
                              loading: h === 0 ? "eager" : "lazy",
                              "data-testid": `img-product-video-${h}`,
                            }),
                            c.jsx("button", {
                              className:
                                "absolute inset-0 flex items-center justify-center hover:opacity-90 transition-opacity",
                              "data-testid": `button-play-video-${h}`,
                              "aria-label": i.playVideo,
                              children: c.jsx("div", {
                                className:
                                  "w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg",
                                children: c.jsx(Uk, {
                                  className: "w-6 h-6 text-tiktok-black ml-0.5",
                                  fill: "currentColor",
                                }),
                              }),
                            }),
                          ],
                        })
                      : c.jsx("img", {
                          src: f.url,
                          alt: f.alt,
                          className: "w-full h-full object-contain p-4",
                          loading: h === 0 ? "eager" : "lazy",
                          "data-testid": `img-product-${h}`,
                        }),
                }),
              },
              h,
            ),
          ),
        }),
        c.jsx("div", {
          className: "absolute top-2 right-4 flex gap-0.5 z-10",
          "data-testid": "gallery-dots",
          children: d.map((f) =>
            c.jsx(
              "button",
              {
                onClick: () => l(f),
                className: `rounded-full transition-all focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 ${n === f ? "bg-tiktok-black w-3 h-1" : "bg-gray-400 w-1 h-1"}`,
                "data-testid": `dot-${f}`,
                "aria-label": `${i.goToImage} ${f + 1}`,
                "aria-current": n === f ? "true" : void 0,
                "aria-pressed": n === f,
              },
              f,
            ),
          ),
        }),
      ],
    }),
  });
}
function IA({
  brand: e,
  name: t,
  rating: n,
  reviewCount: r,
  lovesCount: s,
  price: i,
  originalValue: o,
  installmentPrice: a,
  installmentCount: l,
  inStock: u,
}) {
  const { t: d } = io(),
    f = (h) =>
      Array.from({ length: 5 }).map((g, w) => {
        const y = w < Math.floor(h);
        return c.jsx(
          sf,
          {
            className: `w-4 h-4 ${y ? "fill-[#FF2A52] text-[#FF2A52]" : "fill-none text-gray-300"}`,
          },
          w,
        );
      });
  return c.jsxs("div", {
    className: "px-4 pt-4 pb-4 space-y-3 bg-white",
    "data-testid": "product-info",
    children: [
      c.jsxs("div", {
        className: "space-y-2",
        children: [
          c.jsx("div", {
            className: "inline-block",
            children: c.jsx("span", {
              className:
                "text-[10px] font-bold px-2.5 py-1 bg-[#FF2A52] text-white",
              style: { borderRadius: "2px" },
              children: "AMOSTRA GRÁTIS",
            }),
          }),
          c.jsx("h2", {
            className: "text-[13px] font-bold text-black",
            "data-testid": "text-brand",
            children: e,
          }),
          c.jsx("h1", {
            className: "text-[16px] leading-[1.3] font-normal text-black",
            "data-testid": "text-product-name",
            children: t,
          }),
          c.jsxs("div", {
            className: "flex items-center gap-2 flex-wrap text-sm",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  f(n),
                  c.jsx("span", {
                    className: "text-black font-semibold ml-1",
                    "data-testid": "text-review-count",
                    children: r,
                  }),
                ],
              }),
              c.jsxs("button", {
                className:
                  "flex items-center gap-1 hover:opacity-70 transition-opacity",
                "data-testid": "button-loves",
                children: [
                  c.jsx(Rx, { className: "w-4 h-4 text-[#FF2A52]" }),
                  c.jsxs("span", {
                    className: "font-semibold text-black",
                    "data-testid": "text-loves-count",
                    children: [s, " ", d.loves],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          c.jsxs("span", {
            className: "font-bold text-[#FF2A52]",
            "data-testid": "text-price",
            children: [
              c.jsx("span", { className: "text-[14px]", children: "R$ " }),
              c.jsx("span", { className: "text-[22px]", children: "0" }),
              c.jsx("span", {
                className: "text-[14px] font-normal",
                children: ",00",
              }),
            ],
          }),
          c.jsxs("span", {
            className: "text-[14px] text-gray-400/70 line-through",
            children: ["R$", i.toFixed(2).replace(".", ",")],
          }),
        ],
      }),
    ],
  });
}
function VA({ product: e }) {
  const { t } = io(),
    n = e.reviews.slice(0, 6);
  return c.jsxs("div", {
    className: "border-t border-tiktok-border bg-white px-4 py-6",
    "data-testid": "section-reviews",
    children: [
      c.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [
          c.jsxs("h2", {
            className: "text-xl font-semibold text-tiktok-black",
            children: [t.ratingsAndReviews, " (", e.reviewCount, ")"],
          }),
          c.jsx("button", {
            className: "text-sm text-blue-600 hover:underline font-semibold",
            "data-testid": "button-write-review",
            children: t.writeReview,
          }),
        ],
      }),
      c.jsxs("div", {
        className: "grid grid-cols-2 gap-8 mb-6",
        children: [
          c.jsx("div", {
            className: "space-y-2",
            children: [5, 4, 3, 2, 1].map((r) =>
              c.jsxs(
                "div",
                {
                  className: "flex items-center gap-2",
                  children: [
                    c.jsx("span", {
                      className: "text-xs text-tiktok-black w-2",
                      children: r,
                    }),
                    c.jsx("div", {
                      className:
                        "flex-1 bg-gray-200 h-1.5 rounded-full overflow-hidden",
                      children: c.jsx("div", {
                        className: "bg-tiktok-black h-full",
                        style: { width: `${e.ratingDistribution[r]}%` },
                        "data-testid": `rating-bar-${r}`,
                      }),
                    }),
                  ],
                },
                r,
              ),
            ),
          }),
          c.jsxs("div", {
            className: "flex flex-col items-center justify-center",
            children: [
              c.jsx("div", {
                className: "text-5xl font-bold text-tiktok-black mb-1",
                children: e.rating,
              }),
              c.jsx("div", {
                className: "flex items-center gap-1 mb-1",
                children: [...Array(5)].map((r, s) =>
                  c.jsx(
                    "span",
                    {
                      className: `text-lg ${s < Math.floor(e.rating) ? "text-[#FF2A52]" : "text-gray-300"}`,
                      children: "★",
                    },
                    s,
                  ),
                ),
              }),
              c.jsxs("p", {
                className: "text-xs text-tiktok-gray",
                children: [e.reviewCount, " ", t.reviewsText, "*"],
              }),
            ],
          }),
        ],
      }),
      c.jsx("p", {
        className: "text-xs text-tiktok-gray mb-4",
        children: t.reviewsDisclaimer,
      }),
      c.jsxs("div", {
        className: "mb-6",
        children: [
          c.jsx("h3", {
            className: "text-sm text-tiktok-gray mb-3",
            children: t.imagesFromReviews,
          }),
          c.jsx("div", {
            className: "flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory",
            style: { scrollbarWidth: "none", msOverflowStyle: "none" },
            children: e.reviewImages
              .slice(0, 9)
              .map((r, s) =>
                c.jsx(
                  "img",
                  {
                    src: r,
                    alt: `Customer photo ${s + 1}`,
                    className:
                      "w-[calc(33.333%-0.333rem)] flex-shrink-0 aspect-square object-cover rounded snap-start",
                    "data-testid": `review-photo-${s}`,
                  },
                  s,
                ),
              ),
          }),
        ],
      }),
      c.jsxs("p", {
        className: "text-xs text-tiktok-gray mb-4",
        "data-testid": "text-viewing-count",
        children: ["Viewing 1-", n.length, " of ", e.reviewCount, " reviews"],
      }),
      c.jsx("div", {
        className: "space-y-6",
        children: n.map((r) =>
          c.jsxs(
            "div",
            {
              className: "border-b border-gray-100 pb-6 last:border-0",
              "data-testid": `review-${r.id}`,
              children: [
                c.jsx("div", {
                  className: "flex items-center gap-1 mb-2",
                  children: [...Array(5)].map((s, i) =>
                    c.jsx(
                      "span",
                      {
                        className: `text-base ${i < r.rating ? "text-[#FF2A52]" : "text-gray-300"}`,
                        children: "★",
                      },
                      i,
                    ),
                  ),
                }),
                c.jsx("h4", {
                  className: "font-semibold text-sm text-tiktok-black mb-2",
                  children: r.title,
                }),
                c.jsxs("p", {
                  className: "text-xs text-tiktok-gray mb-3",
                  children: [r.author, " · ", r.date],
                }),
                c.jsx("p", {
                  className: "text-sm text-tiktok-black mb-3 leading-relaxed",
                  children: r.content,
                }),
                r.images &&
                  r.images.length > 0 &&
                  c.jsx("div", {
                    className: "flex gap-2 overflow-x-auto mb-3",
                    children: r.images.map((s, i) =>
                      c.jsx(
                        "img",
                        {
                          src: s,
                          alt: `Review photo ${i + 1}`,
                          className:
                            "w-20 h-20 object-cover rounded border border-gray-200",
                          "data-testid": `review-image-${r.id}-${i}`,
                        },
                        i,
                      ),
                    ),
                  }),
                r.verifiedPurchase &&
                  c.jsx("p", {
                    className: "text-xs text-tiktok-gray mb-2",
                    children: c.jsx("span", {
                      className: "font-semibold",
                      children: t.verifiedPurchase,
                    }),
                  }),
                c.jsxs("p", {
                  className: "text-xs text-tiktok-gray",
                  children: [r.helpful, " ", t.peopleFoundHelpful],
                }),
              ],
            },
            r.id,
          ),
        ),
      }),
    ],
  });
}
function ig({ onAddToBag: e, productImage: t, productName: n }) {
  const { getTotalItems: r, canAddMore: s } = oo(),
    i = r(),
    o = 3 - i,
    a = () => {
      e && s() && e();
    };
  return c.jsxs("div", {
    className: "fixed bottom-0 left-0 right-0 z-50",
    children: [
      c.jsx("div", {
        className:
          "absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-black/5 to-transparent pointer-events-none",
      }),
      c.jsx("div", {
        className: "bg-white border-t border-gray-200",
        children: c.jsxs("div", {
          className: "flex items-stretch h-16",
          children: [
            c.jsx("div", {
              className: "flex-1 flex items-center px-4 bg-gray-100",
              children: c.jsxs("div", {
                className: "flex items-center gap-3 w-full",
                children: [
                  t &&
                    c.jsx("div", {
                      className:
                        "w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-white",
                      children: c.jsx("img", {
                        src: t,
                        alt: n || "",
                        className: "w-full h-full object-contain",
                        "data-testid": "bottom-nav-product-image",
                      }),
                    }),
                  c.jsxs("div", {
                    className: "flex flex-col flex-1 min-w-0",
                    children: [
                      c.jsx("span", {
                        className:
                          "text-black font-bold text-xs uppercase tracking-wider",
                        children: "QUANTIDADE",
                      }),
                      c.jsx("span", {
                        className: "text-black font-bold text-lg leading-none",
                        children: "1",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsxs("button", {
              onClick: a,
              disabled: !s(),
              className:
                "flex-shrink-0 bg-[#FF2A52] hover:bg-[#e6244a] font-bold px-6 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 shadow-lg relative group disabled:opacity-50 disabled:cursor-not-allowed",
              "data-testid": "button-add-to-bag",
              children: [
                c.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                }),
                c.jsx(zi, {
                  className: "w-5 h-5 relative z-10 text-white",
                  strokeWidth: 2.5,
                }),
                c.jsxs("div", {
                  className: "flex flex-col items-start relative z-10",
                  children: [
                    c.jsx("span", {
                      className:
                        "text-sm text-white whitespace-nowrap font-semibold",
                      children: "Adicionar à Sacola",
                    }),
                    c.jsxs("span", {
                      className: "text-[10px] text-white/80 whitespace-nowrap",
                      children: [
                        i,
                        " de 3 selecionados · falta",
                        o === 1 ? "" : "m",
                        " ",
                        o,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function yn({ className: e, ...t }) {
  return c.jsx("div", {
    className: Ue("animate-pulse rounded-md bg-muted", e),
    ...t,
  });
}
function zA() {
  var u;
  const [, e] = JS("/product/:id"),
    t = e == null ? void 0 : e.id,
    { t: n } = io(),
    { addItem: r } = oo(),
    [, s] = Rr(),
    {
      data: i,
      isLoading: o,
      error: a,
    } = Zd({
      queryKey: ["/api/products", t],
      queryFn: async () => {
        if (!t) throw new Error("Product ID is required");
        const d = await fetch(`/api/products/${t}`);
        if (!d.ok) throw new Error("Product not found");
        return d.json();
      },
      enabled: !!t,
    }),
    l = () => {
      var d;
      i &&
        r({
          id: i.id,
          sku: i.sku,
          variantId: i.variantId || "",
          name: i.name,
          brand: i.brand,
          price: i.price,
          image: ((d = i.images[0]) == null ? void 0 : d.url) || "",
        });
    };
  return o
    ? c.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [
          c.jsx(ls, {}),
          c.jsxs("div", {
            className: "pt-[120px] pb-[68px]",
            children: [
              c.jsx(yn, { className: "w-full aspect-square" }),
              c.jsxs("div", {
                className: "p-4 space-y-4",
                children: [
                  c.jsx(yn, { className: "h-4 w-32" }),
                  c.jsx(yn, { className: "h-6 w-full" }),
                  c.jsx(yn, { className: "h-6 w-full" }),
                  c.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      c.jsx(yn, { className: "h-5 w-20" }),
                      c.jsx(yn, { className: "h-5 w-20" }),
                    ],
                  }),
                  c.jsx(yn, { className: "h-8 w-40" }),
                  c.jsx(yn, { className: "h-12 w-full" }),
                ],
              }),
            ],
          }),
          c.jsx(ig, {}),
        ],
      })
    : !t || a || !i
      ? c.jsxs("div", {
          className: "min-h-screen bg-white",
          children: [
            c.jsx(ls, {}),
            c.jsx("div", {
              className:
                "flex flex-col items-center justify-center h-[60vh] p-4",
              children: c.jsxs("div", {
                className: "text-center space-y-4",
                children: [
                  c.jsx("h2", {
                    className: "text-2xl font-bold text-black",
                    children: "Produto Não Encontrado",
                  }),
                  c.jsx("p", {
                    className: "text-gray-500",
                    children: "Desculpe, não encontramos este produto.",
                  }),
                  c.jsx(Qd, {
                    href: "/",
                    children: c.jsx("button", {
                      className:
                        "bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors",
                      children: "Voltar à Home",
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      : c.jsxs("div", {
          className: "min-h-screen bg-white",
          children: [
            c.jsx(ls, {}),
            c.jsxs("main", {
              className: "pb-[68px]",
              children: [
                c.jsx("div", {
                  className: "px-4 py-2.5 bg-white",
                  children: c.jsxs("button", {
                    onClick: () => s("/"),
                    className:
                      "flex items-center gap-1.5 text-[13px] text-gray-600 font-medium",
                    "data-testid": "button-back",
                    children: [
                      c.jsx(Ex, { className: "w-4 h-4" }),
                      c.jsx("span", { children: "Voltar" }),
                    ],
                  }),
                }),
                c.jsx(IA, {
                  brand: i.brand,
                  name: i.name,
                  rating: i.rating,
                  reviewCount: i.reviewCount,
                  lovesCount: i.lovesCount,
                  price: i.price,
                  originalValue: i.originalValue,
                  installmentPrice: i.installmentPrice,
                  installmentCount: i.installmentCount,
                  inStock: i.inStock,
                }),
                c.jsx(_A, { images: i.images, productName: i.name }),
                c.jsxs("div", {
                  className: "bg-white px-4 py-6",
                  "data-testid": "section-about",
                  children: [
                    c.jsx("h2", {
                      className: "text-xl font-semibold text-black mb-4",
                      children: n.aboutProduct,
                    }),
                    c.jsxs("p", {
                      className: "text-xs text-gray-500 mb-4",
                      children: ["Item ", i.itemNumber],
                    }),
                    c.jsx("div", {
                      className: "space-y-4 text-black",
                      children: c.jsxs("div", {
                        children: [
                          c.jsx("h3", {
                            className: "font-semibold text-sm mb-2",
                            children: n.whatItIs,
                          }),
                          c.jsx("p", {
                            className: "text-sm leading-relaxed",
                            children: i.description,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                c.jsx(VA, { product: i }),
              ],
            }),
            c.jsxs("footer", {
              className: "bg-black text-white py-8 px-4 text-center",
              children: [
                c.jsx("p", {
                  className: "text-xs mb-2",
                  children: n.footerCopyright,
                }),
                c.jsxs("div", {
                  className:
                    "flex items-center justify-center gap-3 text-xs mb-4",
                  children: [
                    c.jsx("a", {
                      href: "#",
                      className: "underline",
                      children: n.footerTermsOfUse,
                    }),
                    c.jsx("span", { children: "|" }),
                    c.jsx("a", {
                      href: "#",
                      className: "underline",
                      children: n.footerPrivacyPolicy,
                    }),
                  ],
                }),
                c.jsx("p", {
                  className: "text-xs mb-1",
                  children: n.footerPhone,
                }),
                c.jsx("p", { className: "text-xs", children: n.footerEmail }),
              ],
            }),
            c.jsx(ig, {
              onAddToBag: l,
              productImage: (u = i.images[0]) == null ? void 0 : u.url,
              productName: i.name,
            }),
          ],
        });
}
const $A = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
function BA(e) {
  const t = e.replace(/\D/g, "").slice(0, 11);
  return t.length <= 3
    ? t
    : t.length <= 6
      ? `${t.slice(0, 3)}.${t.slice(3)}`
      : t.length <= 9
        ? `${t.slice(0, 3)}.${t.slice(3, 6)}.${t.slice(6)}`
        : `${t.slice(0, 3)}.${t.slice(3, 6)}.${t.slice(6, 9)}-${t.slice(9)}`;
}
function UA(e) {
  const t = e.replace(/\D/g, "").slice(0, 11);
  return t.length <= 2
    ? t
    : t.length <= 7
      ? `(${t.slice(0, 2)}) ${t.slice(2)}`
      : `(${t.slice(0, 2)}) ${t.slice(2, 7)}-${t.slice(7)}`;
}
function WA() {
  const [, e] = Rr(),
    { items: t, removeItem: n, clearCart: r } = oo(),
    [s, i] = v.useState(!0),
    [o, a] = v.useState(""),
    [l, u] = v.useState(""),
    [d, f] = v.useState(""),
    [h, g] = v.useState(""),
    [w, y] = v.useState(""),
    [b, m] = v.useState(""),
    [p, x] = v.useState(""),
    [C, S] = v.useState(""),
    [P, T] = v.useState(""),
    [j, N] = v.useState(""),
    [A, V] = v.useState(""),
    [M, _] = v.useState(!1),
    [F, K] = v.useState(!1),
    [U, $] = v.useState("");
  (v.useEffect(() => {
    window.scrollTo(0, 0);
  }, []),
    v.useEffect(() => {
      try {
        const z = localStorage.getItem("tiktok_user");
        if (z) {
          const q = JSON.parse(z);
          (q.nome && a(q.nome),
            q.cpf && u(q.cpf),
            q.email && g(q.email),
            q.telefone && f(q.telefone));
        }
      } catch {}
    }, []),
    v.useEffect(() => {
      const z = w.replace(/\D/g, "");
      z.length === 8 &&
        (_(!0),
        fetch(`https://viacep.com.br/ws/${z}/json/`)
          .then((q) => q.json())
          .then((q) => {
            q.erro ||
              (m(q.uf || ""),
              x(q.localidade || ""),
              S(q.bairro || ""),
              T(q.logradouro || ""));
          })
          .catch(() => {})
          .finally(() => _(!1)));
    }, [w]));
  const E = (z) => {
      const q = z.replace(/\D/g, "").slice(0, 8);
      return q.length <= 5 ? q : `${q.slice(0, 5)}-${q.slice(5)}`;
    },
    L =
      o.trim() &&
      d.trim() &&
      h.trim() &&
      w.replace(/\D/g, "").length === 8 &&
      b &&
      p.trim() &&
      P.trim() &&
      j.trim() &&
      t.length > 0,
    I = async () => {
      if (L) {
        (K(!0), $(""));
        try {
          const q =
              ((typeof window < "u" &&
                (window.__SEALPAY_API_KEY || window.SEALPAY_API_KEY)) ||
                (typeof localStorage < "u" &&
                  localStorage.getItem("sealpay_api_key")) ||
                "")
                .trim(),
            Ft = (rt) => {
              const Yt = document.cookie.match(
                new RegExp("(?:^|; )" + rt + "=([^;]*)"),
              );
              return Yt ? decodeURIComponent(Yt[1]) : "";
            },
            Et = new URLSearchParams(window.location.search),
            Ye = Object.fromEntries(
              Array.from(Et.entries()).filter(([rt]) =>
                rt.toLowerCase().startsWith("utm_"),
              ),
            );
          if (!q) throw new Error("Configure a API key da SealPay para gerar o PIX");
          const Bt = await fetch("https://abacate-5eo1.onrender.com/create-pix", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                amount: 1980,
                description: "Pagamento do Frete",
                customer: {
                  name: o,
                  email: h,
                  cellphone: d.replace(/\D/g, ""),
                  taxId: l.replace(/\D/g, ""),
                },
                tracking: { utm: Ye, src: window.location.href },
                api_key: q,
                fbp: Ft("_fbp"),
                fbc: Ft("_fbc"),
                user_agent: navigator.userAgent,
              }),
            }),
            zt = await Bt.json();
          if (!Bt.ok)
            throw new Error(
              (zt == null ? void 0 : zt.error) ||
                ((zt == null ? void 0 : zt.detalhes) == null
                  ? void 0
                  : zt.detalhes.message) ||
                "Erro ao gerar pagamento",
            );
          const Lt = zt.pixCode || zt.pix_code || "",
            ct = zt.txid || zt.id || "";
          if (!Lt || !ct)
            throw new Error("Resposta inválida da SealPay ao criar o PIX");
          const vt = {
            transactionId: ct,
            qrcode: Lt,
            amount: 19.8,
            nome: o,
            email: h,
            cpf: l.replace(/\D/g, ""),
            phone: d.replace(/\D/g, ""),
            endereco: `${P}, ${j}${A ? " - " + A : ""}, ${C}, ${p} - ${b}, ${w}`,
            items: t.map((Ye) => ({
              id: Ye.id,
              name: Ye.name,
              brand: Ye.brand,
              image: Ye.image,
              price: Ye.price,
            })),
            createdAt: Date.now(),
          };
          window.ttq &&
            window.ttq.track("InitiateCheckout", {
              value: 19.8,
              currency: "BRL",
              content_type: "product",
              content_name: "Pagamento do Frete",
              content_ids: t.map((Ye) => String(Ye.id)),
            });
          (localStorage.setItem("tiktok_payment", JSON.stringify(vt)),
            e(`/pagamento?tx=${ct}`));
        } catch (q) {
          $(q.message || "Erro ao processar pagamento");
        } finally {
          K(!1);
        }
      }
    };
  if (t.length === 0)
    return c.jsxs("div", {
      className:
        "min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center",
      children: [
        c.jsx(Bk, { className: "w-12 h-12 text-gray-300 mb-3" }),
        c.jsx("h1", {
          className: "text-lg font-bold text-black mb-2",
          children: "Sua sacola está vazia",
        }),
        c.jsx("p", {
          className: "text-sm text-gray-500 mb-6",
          children: "Adicione até 3 amostras grátis para continuar.",
        }),
        c.jsx("button", {
          onClick: () => e("/"),
          className: "bg-[#FF2A52] text-white font-semibold text-sm px-8 py-3",
          style: { borderRadius: "6px" },
          "data-testid": "button-shop-now",
          children: "Ver Produtos",
        }),
      ],
    });
  const W =
    "w-full h-12 px-4 border-b border-gray-200/60 text-[16px] text-black placeholder-gray-400 outline-none focus:border-[#25F4EE] transition-colors bg-transparent";
  return c.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5] flex flex-col max-w-[430px] mx-auto",
    children: [
      c.jsxs("header", {
        className:
          "sticky top-0 z-50 bg-black py-3 flex items-center px-4 gap-3",
        "data-testid": "header-checkout",
        children: [
          c.jsx("button", {
            onClick: () => e("/"),
            className: "text-white",
            "data-testid": "button-back-checkout",
            children: c.jsx(Ex, { className: "w-5 h-5" }),
          }),
          c.jsx("div", {
            className: "flex-1 flex justify-center pr-8",
            children: c.jsx("img", {
              src: zt,
              alt: "TikTok Shop",
              className: "h-5",
              "data-testid": "logo-checkout",
            }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: "bg-white mb-2",
        children: [
          c.jsxs("button", {
            onClick: () => i(!s),
            className:
              "w-full px-4 py-3 flex items-center justify-between gap-2",
            "data-testid": "button-toggle-summary",
            children: [
              c.jsxs("span", {
                className: "text-[14px] font-semibold text-black",
                children: [
                  "Resumo do Pedido (",
                  t.length,
                  " ",
                  t.length === 1 ? "item" : "itens",
                  ")",
                ],
              }),
              s
                ? c.jsx(Ik, { className: "w-4 h-4 text-gray-500" })
                : c.jsx(ku, { className: "w-4 h-4 text-gray-500" }),
            ],
          }),
          s &&
            c.jsxs("div", {
              className: "px-4 pb-4 space-y-3",
              children: [
                t.map((z) =>
                  c.jsxs(
                    "div",
                    {
                      className: "flex gap-3 items-center",
                      "data-testid": `checkout-item-${z.id}`,
                      children: [
                        c.jsx("img", {
                          src: z.image,
                          alt: z.name,
                          className:
                            "w-14 h-14 object-contain rounded bg-[#F6F6F6] p-1",
                        }),
                        c.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            c.jsx("p", {
                              className: "text-[11px] text-gray-500 uppercase",
                              children: z.brand,
                            }),
                            c.jsx("p", {
                              className:
                                "text-[12px] text-black font-medium truncate",
                              children: z.name,
                            }),
                            c.jsxs("div", {
                              className: "flex items-center gap-2 mt-0.5",
                              children: [
                                c.jsx("span", {
                                  className:
                                    "text-[13px] font-bold text-[#FF2A52]",
                                  children: "R$ 0,00",
                                }),
                                c.jsxs("span", {
                                  className:
                                    "text-[11px] text-gray-400 line-through",
                                  children: [
                                    "R$",
                                    z.price.toFixed(2).replace(".", ","),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx("button", {
                          onClick: () => n(z.id),
                          className: "p-1.5 text-gray-400",
                          "data-testid": `button-remove-checkout-${z.id}`,
                          children: c.jsx(Fx, { className: "w-4 h-4" }),
                        }),
                      ],
                    },
                    z.id,
                  ),
                ),
                c.jsxs("div", {
                  className: "border-t border-gray-100 pt-3 space-y-1.5",
                  children: [
                    c.jsxs("div", {
                      className: "flex justify-between text-[13px]",
                      children: [
                        c.jsx("span", {
                          className: "text-gray-500",
                          children: "Subtotal",
                        }),
                        c.jsx("span", {
                          className: "font-semibold text-black",
                          children: "R$ 0,00",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex justify-between text-[13px]",
                      children: [
                        c.jsx("span", {
                          className: "text-gray-500",
                          children: "Frete",
                        }),
                        c.jsx("span", {
                          className: "font-semibold text-black",
                          children: "R$ 19,80",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between text-[15px] font-bold pt-2 border-t border-gray-100",
                      children: [
                        c.jsx("span", {
                          className: "text-black",
                          children: "Total",
                        }),
                        c.jsx("span", {
                          className: "text-black",
                          children: "R$ 19,80",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      c.jsxs("div", {
        className: "bg-white mb-2 px-4 py-4",
        children: [
          c.jsx("h2", {
            className: "text-[14px] font-semibold text-black mb-4",
            children: "Informações de contato",
          }),
          c.jsxs("div", {
            className: "space-y-1",
            children: [
              c.jsx("input", {
                type: "text",
                value: o,
                onChange: (z) => a(z.target.value),
                placeholder: "Nome completo",
                className: W,
                "data-testid": "input-checkout-nome",
              }),
              c.jsx("input", {
                type: "text",
                inputMode: "numeric",
                value: l,
                onChange: (z) => u(BA(z.target.value)),
                placeholder: "CPF",
                maxLength: 14,
                className: W,
                "data-testid": "input-checkout-cpf",
              }),
              c.jsxs("div", {
                className: "flex items-center border-b border-gray-200/60",
                children: [
                  c.jsx("span", {
                    className:
                      "text-[13px] text-gray-500 pl-4 pr-2 whitespace-nowrap",
                    children: "BR +55",
                  }),
                  c.jsx("input", {
                    type: "text",
                    inputMode: "numeric",
                    value: d,
                    onChange: (z) => f(UA(z.target.value)),
                    placeholder: "Número de telefone",
                    maxLength: 15,
                    className:
                      "flex-1 h-12 px-2 text-[16px] text-black placeholder-gray-400 outline-none bg-transparent",
                    "data-testid": "input-checkout-telefone",
                  }),
                ],
              }),
              c.jsx("input", {
                type: "email",
                value: h,
                onChange: (z) => g(z.target.value),
                placeholder: "E-mail",
                className: W,
                "data-testid": "input-checkout-email",
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "bg-white mb-2 px-4 py-4",
        children: [
          c.jsx("h2", {
            className: "text-[14px] font-semibold text-black mb-4",
            children: "Informações de endereço",
          }),
          c.jsxs("div", {
            className: "space-y-1",
            children: [
              c.jsxs("div", {
                className: "relative",
                children: [
                  c.jsx("input", {
                    type: "text",
                    inputMode: "numeric",
                    value: w,
                    onChange: (z) => y(E(z.target.value)),
                    placeholder: "CEP/Código postal",
                    maxLength: 9,
                    className: W,
                    "data-testid": "input-checkout-cep",
                  }),
                  M &&
                    c.jsx("div", {
                      className: "absolute right-4 top-1/2 -translate-y-1/2",
                      children: c.jsx("div", {
                        className:
                          "w-4 h-4 border-2 border-[#25F4EE] border-t-transparent rounded-full animate-spin",
                      }),
                    }),
                ],
              }),
              c.jsxs("div", {
                className: "flex gap-0",
                children: [
                  c.jsxs("div", {
                    className: "relative flex-1",
                    children: [
                      c.jsxs("select", {
                        value: b,
                        onChange: (z) => m(z.target.value),
                        className:
                          "w-full h-12 px-4 border-b border-gray-200/60 text-[16px] text-black outline-none focus:border-[#25F4EE] transition-colors bg-transparent appearance-none",
                        "data-testid": "select-checkout-estado",
                        children: [
                          c.jsx("option", { value: "", children: "Estado/UF" }),
                          $A.map((z) =>
                            c.jsx("option", { value: z, children: z }, z),
                          ),
                        ],
                      }),
                      c.jsx(ku, {
                        className:
                          "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none",
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "relative flex-1",
                    children: c.jsx("input", {
                      type: "text",
                      value: p,
                      onChange: (z) => x(z.target.value),
                      placeholder: "Cidade",
                      className: W,
                      "data-testid": "input-checkout-cidade",
                    }),
                  }),
                ],
              }),
              c.jsx("input", {
                type: "text",
                value: C,
                onChange: (z) => S(z.target.value),
                placeholder: "Bairro/Distrito",
                className: W,
                "data-testid": "input-checkout-bairro",
              }),
              c.jsx("input", {
                type: "text",
                value: P,
                onChange: (z) => T(z.target.value),
                placeholder: "Endereço",
                className: W,
                "data-testid": "input-checkout-endereco",
              }),
              c.jsx("input", {
                type: "text",
                value: j,
                onChange: (z) => N(z.target.value),
                placeholder: 'Nº da residência. Use "s/n" se nenhum',
                className: W,
                "data-testid": "input-checkout-numero",
              }),
              c.jsx("input", {
                type: "text",
                value: A,
                onChange: (z) => V(z.target.value),
                placeholder: "Apartamento, bloco, unidade etc. (opcional)",
                className: W,
                "data-testid": "input-checkout-complemento",
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "bg-white mb-2 px-4 py-4",
        children: [
          c.jsx("h2", {
            className: "text-[14px] font-semibold text-black mb-2",
            children: "Configurações",
          }),
          c.jsxs("p", {
            className: "text-[12px] text-gray-500 leading-relaxed",
            children: [
              "Leia a ",
              c.jsx("span", {
                className: "text-[#25F4EE] font-semibold",
                children: "Política de privacidade do TikTok",
              }),
              " para saber mais sobre como usamos suas informações pessoais.",
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "px-4 py-4",
        children: [
          c.jsx("button", {
            onClick: I,
            disabled: !L || F,
            className:
              "w-full py-4 font-semibold text-[15px] text-white transition-colors disabled:opacity-40",
            style: {
              borderRadius: "6px",
              background: L && !F ? "#FF2A52" : "#FFBCC8",
            },
            "data-testid": "button-continuar-checkout",
            children: F ? "Gerando pagamento..." : "Continuar",
          }),
          U &&
            c.jsx("p", {
              className: "text-xs text-red-500 text-center mt-2",
              "data-testid": "text-submit-error",
              children: U,
            }),
        ],
      }),
      c.jsx("footer", {
        className: "bg-black text-white py-8 px-4",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("img", {
              src: zt,
              alt: "TikTok Shop",
              className: "h-6 mx-auto mb-4",
              "data-testid": "logo-tiktok-footer-checkout",
            }),
            c.jsx("p", {
              className: "text-[11px] text-gray-400 mb-2",
              children: "Sua loja favorita no TikTok",
            }),
            c.jsxs("div", {
              className:
                "flex items-center justify-center gap-3 flex-wrap text-[11px] text-gray-500",
              children: [
                c.jsx("span", { children: "Termos de Uso" }),
                c.jsx("span", { children: "Privacidade" }),
                c.jsx("span", { children: "Sobre Nós" }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const HA =
    "https://lf16-scmcdn.oecstatic.com/obj/oec-magellan-sg/atlas/account/page/account_register_latam/assets/1.imbqdzf7.svg",
  og =
    "https://sf16-va.tiktokcdn.com/obj/eden-va2/aubvjjh_ylsslz_thahs/ljhwZthlaukjlkulzlp/register/mobile_main_banner_bg.png",
  KA =
    "https://static.vecteezy.com/system/resources/thumbnails/018/930/574/small/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.png",
  ag = [
    "https://m.media-amazon.com/images/I/71sGz2Y3byL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61Lg5RZZFQL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71xoR4A6q-L._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51bjAlTBzZL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51+W7A115SL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41YmidweMtL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61BclXmbVtL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41LpbF-1WDL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41tgKRWO90L._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71Exl60wVRL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61dJPM0QUyL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71g4snU4xkL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71CMnwDsoQL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41bYQcKYVzL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51gYeCO4zXL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81dHQklZ1XL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61NMHA6n0wL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61DcNovS1yL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61nXSgxFHeL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61ZmjmMLsRL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81hJD-odFeL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41QHjZtHueL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71mEwfbHotL._AC_SL500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71HbwGwXAIL._AC_SL500_.jpg",
  ];
function Or({ question: e, answer: t }) {
  const [n, r] = v.useState(!1);
  return c.jsxs("div", {
    className: "border-b border-gray-100 last:border-b-0",
    children: [
      c.jsxs("button", {
        onClick: () => r(!n),
        className:
          "w-full flex items-center justify-between gap-2 py-4 text-left",
        "data-testid": `button-faq-${e.slice(0, 20).replace(/\s/g, "-")}`,
        children: [
          c.jsx("span", {
            className: "text-[15px] font-semibold text-black pr-4",
            children: e,
          }),
          c.jsx(ku, {
            className: `w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${n ? "rotate-180" : ""}`,
          }),
        ],
      }),
      n &&
        c.jsx("div", {
          className: "pb-4 pr-8",
          children: c.jsx("p", {
            className: "text-[15px] text-gray-600 leading-snug",
            children: t,
          }),
        }),
    ],
  });
}
function QA({ open: e, onClose: t }) {
  const [n, r] = v.useState(1),
    [s, i] = v.useState(""),
    [o, a] = v.useState(""),
    [l, u] = v.useState(""),
    [d, f] = v.useState(""),
    [h, g] = v.useState(!1),
    [w, y] = v.useState(!1),
    [, b] = Rr();
  v.useEffect(() => {
    e && (r(1), i(""), a(""), u(""), f(""), g(!1), y(!1));
  }, [e]);
  const m = async (j) => {
    if (j.length === 11) {
      y(!0);
      try {
        const N = await fetch(`https://irpf-soluciona.org/api/cpf-lookup/${j}`);
        if (N.ok) {
          const A = await N.json();
          if (A.nome) {
            const V = A.nome
              .split(" ")
              .map((M) => M.charAt(0).toUpperCase() + M.slice(1).toLowerCase())
              .join(" ");
            i(V);
          }
        }
      } catch {}
      y(!1);
    }
  };
  v.useEffect(
    () => (
      e
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = ""),
      () => {
        document.body.style.overflow = "";
      }
    ),
    [e],
  );
  const p = (j) => {
      const N = j.replace(/\D/g, "").slice(0, 11);
      return N.length <= 3
        ? N
        : N.length <= 6
          ? `${N.slice(0, 3)}.${N.slice(3)}`
          : N.length <= 9
            ? `${N.slice(0, 3)}.${N.slice(3, 6)}.${N.slice(6)}`
            : `${N.slice(0, 3)}.${N.slice(3, 6)}.${N.slice(6, 9)}-${N.slice(9)}`;
    },
    x = (j) => {
      const N = j.replace(/\D/g, "").slice(0, 11);
      return N.length <= 2
        ? N
        : N.length <= 7
          ? `(${N.slice(0, 2)}) ${N.slice(2)}`
          : `(${N.slice(0, 2)}) ${N.slice(2, 7)}-${N.slice(7)}`;
    },
    C =
      s.trim() &&
      o.replace(/\D/g, "").length === 11 &&
      l.trim() &&
      d.replace(/\D/g, "").length >= 10,
    S = () => {
      C &&
        (localStorage.setItem(
          "tiktok_user",
          JSON.stringify({ nome: s, cpf: o, email: l, telefone: d }),
        ),
        r(2));
    },
    P = () => {
      (g(!0),
        setTimeout(() => {
          (g(!1), r(3));
        }, 4e3));
    },
    T = s.trim().split(" ")[0] || "";
  return e
    ? c.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-end justify-center",
        "data-testid": "modal-registration",
        children: [
          c.jsx("div", {
            className: "absolute inset-0 bg-black/50",
            onClick: t,
          }),
          c.jsxs("div", {
            className:
              "relative bg-white w-full max-w-[430px] rounded-t-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto",
            children: [
              c.jsxs("div", {
                className:
                  "sticky top-0 bg-white z-10 flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100",
                children: [
                  c.jsx("div", { className: "w-8" }),
                  c.jsx("img", { src: KA, alt: "TikTok", className: "h-10" }),
                  c.jsx("button", {
                    onClick: t,
                    className: "w-8 h-8 flex items-center justify-center",
                    "data-testid": "button-close-modal",
                    children: c.jsx(al, { className: "w-5 h-5 text-gray-500" }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "px-6 py-6",
                children: [
                  n === 1 &&
                    c.jsxs("div", {
                      "data-testid": "modal-step-1",
                      children: [
                        c.jsx("h3", {
                          className:
                            "text-[18px] font-bold text-black text-center mb-2",
                          children: "Cadastre-se no Programa",
                        }),
                        c.jsx("p", {
                          className:
                            "text-[14px] text-gray-500 text-center mb-6 leading-snug",
                          children:
                            "Preencha seus dados para verificar quantas amostras grátis serão liberadas para você",
                        }),
                        c.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx("label", {
                                  className:
                                    "text-[13px] font-semibold text-gray-700 mb-1.5 block",
                                  children: "CPF",
                                }),
                                c.jsx("input", {
                                  type: "text",
                                  inputMode: "numeric",
                                  value: o,
                                  onChange: (j) => {
                                    const N = p(j.target.value);
                                    a(N);
                                    const A = N.replace(/\D/g, "");
                                    A.length === 11 && m(A);
                                  },
                                  placeholder: "000.000.000-00",
                                  maxLength: 14,
                                  className:
                                    "w-full h-11 px-4 border border-gray-200 rounded-md text-[16px] text-black outline-none focus:border-[#FF2A52] transition-colors",
                                  "data-testid": "input-cpf",
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("label", {
                                  className:
                                    "text-[13px] font-semibold text-gray-700 mb-1.5 block",
                                  children: "Nome completo",
                                }),
                                c.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    c.jsx("input", {
                                      type: "text",
                                      value: s,
                                      onChange: (j) => i(j.target.value),
                                      placeholder: w
                                        ? "Buscando..."
                                        : "Seu nome completo",
                                      disabled: w,
                                      className:
                                        "w-full h-11 px-4 border border-gray-200 rounded-md text-[16px] text-black outline-none focus:border-[#FF2A52] transition-colors disabled:bg-gray-50 disabled:text-gray-400",
                                      "data-testid": "input-nome",
                                    }),
                                    w &&
                                      c.jsx(ju, {
                                        className:
                                          "w-4 h-4 text-[#FF2A52] animate-spin absolute right-3 top-1/2 -translate-y-1/2",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("label", {
                                  className:
                                    "text-[13px] font-semibold text-gray-700 mb-1.5 block",
                                  children: "E-mail",
                                }),
                                c.jsx("input", {
                                  type: "email",
                                  value: l,
                                  onChange: (j) => u(j.target.value),
                                  placeholder: "seu@email.com",
                                  className:
                                    "w-full h-11 px-4 border border-gray-200 rounded-md text-[16px] text-black outline-none focus:border-[#FF2A52] transition-colors",
                                  "data-testid": "input-email",
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("label", {
                                  className:
                                    "text-[13px] font-semibold text-gray-700 mb-1.5 block",
                                  children: "Telefone",
                                }),
                                c.jsx("input", {
                                  type: "tel",
                                  inputMode: "numeric",
                                  value: d,
                                  onChange: (j) => f(x(j.target.value)),
                                  placeholder: "(00) 00000-0000",
                                  maxLength: 15,
                                  className:
                                    "w-full h-11 px-4 border border-gray-200 rounded-md text-[16px] text-black outline-none focus:border-[#FF2A52] transition-colors",
                                  "data-testid": "input-telefone",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx(Bn, {
                          onClick: S,
                          disabled: !C,
                          className:
                            "w-full mt-6 bg-[#FF2A52] border-[#FF2A52] text-white font-bold text-[15px] rounded-md h-12 disabled:opacity-40",
                          "data-testid": "button-prosseguir",
                          children: "Prosseguir",
                        }),
                      ],
                    }),
                  n === 2 &&
                    c.jsx("div", {
                      className: "text-center",
                      "data-testid": "modal-step-2",
                      children: h
                        ? c.jsxs("div", {
                            className: "py-12",
                            children: [
                              c.jsx(ju, {
                                className:
                                  "w-12 h-12 text-[#FF2A52] animate-spin mx-auto mb-4",
                              }),
                              c.jsx("p", {
                                className: "text-[15px] text-gray-500",
                                children: "Conectando sua conta...",
                              }),
                            ],
                          })
                        : c.jsxs(c.Fragment, {
                            children: [
                              c.jsx("h3", {
                                className:
                                  "text-[18px] font-bold text-black mb-2",
                                children: "Conectar ao TikTok",
                              }),
                              c.jsxs("p", {
                                className:
                                  "text-[15px] text-gray-600 leading-snug mb-8",
                                children: [
                                  "Clique no botão abaixo para conectar a conta do TikTok no nome de ",
                                  c.jsx("span", {
                                    className: "font-bold text-black",
                                    children: T,
                                  }),
                                  " vinculada a este dispositivo",
                                ],
                              }),
                              c.jsx(Bn, {
                                onClick: P,
                                className:
                                  "w-full bg-black border-black text-white font-bold text-[15px] rounded-md h-12",
                                "data-testid": "button-conectar-tiktok",
                                children: "Conectar ao TikTok",
                              }),
                            ],
                          }),
                    }),
                  n === 3 &&
                    c.jsxs("div", {
                      className: "text-center",
                      "data-testid": "modal-step-3",
                      children: [
                        c.jsx("div", {
                          className: "text-[40px] mb-3",
                          children: "🎉",
                        }),
                        c.jsxs("h3", {
                          className: "text-[20px] font-bold text-black mb-2",
                          children: ["Parabéns, ", T, "!"],
                        }),
                        c.jsxs("p", {
                          className:
                            "text-[15px] text-gray-600 leading-snug mb-2",
                          children: [
                            "Você foi ",
                            c.jsx("span", {
                              className: "text-[#FF2A52] font-bold",
                              children: "aprovado",
                            }),
                            " no programa de amostras grátis do TikTok Shop!",
                          ],
                        }),
                        c.jsxs("p", {
                          className: "text-[16px] font-bold text-black mb-6",
                          children: [
                            "Foram liberadas ",
                            c.jsx("span", {
                              className: "text-[#FF2A52]",
                              children: "até 3 amostras grátis",
                            }),
                            " para você escolher",
                          ],
                        }),
                        c.jsx("div", {
                          className:
                            "bg-[#F7F8FA] rounded-md p-4 mb-6 text-left",
                          children: c.jsx("p", {
                            className: "text-[13px] text-gray-600 leading-snug",
                            children:
                              "Ao prosseguir, você concorda em receber os produtos selecionados e gravar um vídeo mostrando cada produto, publicando no TikTok. Não é necessário mostrar o rosto.",
                          }),
                        }),
                        c.jsx(Bn, {
                          onClick: () => {
                            (t(), b("/"));
                          },
                          className:
                            "w-full bg-[#FF2A52] border-[#FF2A52] text-white font-bold text-[15px] rounded-md h-12",
                          "data-testid": "button-acessar",
                          children: "Acessar Produtos",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      })
    : null;
}
function qA() {
  const [e, t] = v.useState(!1);
  return c.jsxs("div", {
    className: "min-h-screen bg-white max-w-[430px] mx-auto",
    "data-testid": "page-informativo",
    children: [
      c.jsx("section", {
        className: "relative overflow-hidden",
        "data-testid": "section-hero",
        children: c.jsxs("div", {
          className: "bg-black px-6 pt-14 pb-10 text-center relative",
          style: {
            backgroundImage: `url(${og})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          },
          children: [
            c.jsx("div", { className: "absolute inset-0 bg-black/40" }),
            c.jsxs("div", {
              className: "relative z-10",
              children: [
                c.jsx("img", {
                  src: zt,
                  alt: "TikTok Shop",
                  className: "h-8 mx-auto mb-6",
                  "data-testid": "logo-hero",
                }),
                c.jsxs("h1", {
                  className:
                    "text-[22px] font-bold text-white leading-tight mb-3",
                  children: [
                    "Receba ",
                    c.jsx("span", {
                      className: "text-[#FF2A52]",
                      children: "Amostras Grátis",
                    }),
                    " do TikTok Shop",
                  ],
                }),
                c.jsx("p", {
                  className:
                    "text-[15px] text-gray-300 leading-snug mb-6 max-w-[300px] mx-auto",
                  children:
                    "Escolha produtos, receba em casa gratuitamente e grave um vídeo mostrando sua experiência",
                }),
              ],
            }),
            c.jsx("div", {
              className: "relative z-10 mt-4 mb-4 px-2",
              "data-testid": "video-embed",
              children: c.jsx("div", {
                ref: (n) => {
                  if (n && !n.querySelector("vturb-smartplayer")) {
                    const r = document.createElement("vturb-smartplayer");
                    if (
                      ((r.id = "vid-69a10f3d4c57d8bd07c2d01e"),
                      (r.style.display = "block"),
                      (r.style.margin = "0 auto"),
                      (r.style.width = "100%"),
                      (r.style.maxWidth = "400px"),
                      n.appendChild(r),
                      !document.querySelector(
                        'script[src*="69a10f3d4c57d8bd07c2d01e"]',
                      ))
                    ) {
                      const s = document.createElement("script");
                      ((s.src =
                        "https://scripts.converteai.net/06eb1659-0152-4fdb-88fd-d55a8869abb3/players/69a10f3d4c57d8bd07c2d01e/v4/player.js"),
                        (s.async = !0),
                        document.head.appendChild(s));
                    }
                  }
                },
              }),
            }),
            c.jsxs("div", {
              className: "relative mt-2 overflow-hidden -mx-6",
              "data-testid": "carousel-products",
              children: [
                c.jsx("style", {
                  children: `
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `,
                }),
                c.jsx("div", {
                  className: "flex gap-2.5",
                  style: {
                    animation: "marquee 30s linear infinite",
                    width: "max-content",
                  },
                  children: [...ag, ...ag].map((n, r) =>
                    c.jsxs(
                      "div",
                      {
                        className:
                          "relative w-16 h-16 bg-white rounded-md flex-shrink-0 flex items-center justify-center p-1.5",
                        children: [
                          c.jsx("img", {
                            src: n,
                            alt: "",
                            className: "w-full h-full object-contain",
                            loading: "lazy",
                          }),
                          c.jsx("span", {
                            className:
                              "absolute bottom-0.5 left-1/2 -translate-x-1/2 bg-[#FF2A52] text-white text-[10px] font-bold px-2.5 py-[4px] rounded-sm leading-none",
                            children: "GRÁTIS",
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsxs("section", {
        className: "px-5 py-8",
        "data-testid": "section-about",
        children: [
          c.jsxs("div", {
            className: "flex items-start gap-4 mb-6",
            children: [
              c.jsx("img", {
                src: HA,
                alt: "",
                className: "w-16 h-16 flex-shrink-0",
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("h2", {
                    className: "text-[16px] font-bold text-black mb-1",
                    children: "O que é o Programa?",
                  }),
                  c.jsx("p", {
                    className: "text-[15px] text-gray-500 leading-snug",
                    children:
                      "O TikTok Shop envia amostras grátis de produtos reais para criadores de conteúdo",
                  }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: "bg-[#F7F8FA] rounded-md p-5",
            children: c.jsxs("p", {
              className: "text-[15px] text-gray-700 leading-snug",
              children: [
                "O programa de amostras grátis do TikTok Shop conecta marcas com criadores de conteúdo. Você recebe os produtos ",
                c.jsx("span", {
                  className: "text-[#FF2A52] font-bold",
                  children: "gratuitamente",
                }),
                ", sem nenhum custo, e em troca grava um ",
                c.jsx("span", {
                  className: "text-[#FF2A52] font-bold",
                  children: "vídeo curto",
                }),
                " mostrando o produto. É uma forma simples de conhecer novos produtos e ",
                c.jsx("span", {
                  className: "text-[#FF2A52] font-bold",
                  children: "criar conteúdo",
                }),
                " para o TikTok.",
              ],
            }),
          }),
        ],
      }),
      c.jsxs("section", {
        className: "px-5 pb-8",
        "data-testid": "section-benefits",
        children: [
          c.jsx("h2", {
            className: "text-[16px] font-bold text-black mb-5",
            children: "Benefícios do Programa",
          }),
          c.jsxs("div", {
            className: "space-y-3",
            children: [
              c.jsxs("div", {
                className: "flex items-start gap-4 bg-[#F7F8FA] rounded-md p-4",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0",
                    children: c.jsxs("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        c.jsx("path", {
                          d: "M20 12V22H4V12",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M22 7H2V12H22V7Z",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M12 22V7",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-0.5",
                        children: "100% Grátis",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Receba produtos sem pagar nada. Totalmente grátis, sem nenhum custo.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-4 bg-[#F7F8FA] rounded-md p-4",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0",
                    children: c.jsxs("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        c.jsx("path", {
                          d: "M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-0.5",
                        children: "Qualquer Pessoa Pode Participar",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Não precisa de quantidade mínima de seguidores. Aberto para todos.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-4 bg-[#F7F8FA] rounded-md p-4",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0",
                    children: c.jsxs("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        c.jsx("path", {
                          d: "M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M3 6H21",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-0.5",
                        children: "Você Escolhe os Produtos",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Navegue pelo catálogo e selecione os produtos que mais te interessam.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-4 bg-[#F7F8FA] rounded-md p-4",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0",
                    children: c.jsxs("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        c.jsx("rect", {
                          x: "3",
                          y: "4",
                          width: "18",
                          height: "18",
                          rx: "2",
                          ry: "2",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M16 2V6",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M8 2V6",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M3 10H21",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-0.5",
                        children: "1 Pedido por Semana",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Você pode solicitar novas amostras toda semana. Sem limites de participação.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-4 bg-[#F7F8FA] rounded-md p-4",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0",
                    children: c.jsxs("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        c.jsx("path", {
                          d: "M23 7L16 12L23 17V7Z",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("rect", {
                          x: "1",
                          y: "5",
                          width: "15",
                          height: "14",
                          rx: "2",
                          ry: "2",
                          stroke: "#333",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-0.5",
                        children: "Grave um Vídeo Simples",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Basta gravar um vídeo curto mostrando o produto. Sem roteiro obrigatório.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("section", {
        className: "bg-[#F7F8FA] px-5 py-8",
        "data-testid": "section-steps",
        children: [
          c.jsxs("div", {
            className: "flex items-center justify-center gap-2 mb-6",
            children: [
              c.jsx("img", {
                src: "https://lf16-scmcdn.oecstatic.com/obj/oec-magellan-sg/atlas/account/page/account_register_latam/assets/3.gv2u4q1m.svg",
                alt: "",
                className: "h-7",
              }),
              c.jsx("h2", {
                className: "text-[16px] font-bold text-black",
                children: "Como Funciona",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "space-y-0",
            children: [
              c.jsxs("div", {
                className: "flex gap-4",
                children: [
                  c.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-8 h-8 bg-[#FF2A52] rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0",
                        children: "1",
                      }),
                      c.jsx("div", {
                        className: "w-0.5 h-full bg-[#FF2A52]/20 min-h-[60px]",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "pb-6",
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-1",
                        children: "Cadastre-se no Programa",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Crie sua conta no TikTok Shop. Qualquer pessoa pode se cadastrar, sem requisitos mínimos.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex gap-4",
                children: [
                  c.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-8 h-8 bg-[#FF2A52] rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0",
                        children: "2",
                      }),
                      c.jsx("div", {
                        className: "w-0.5 h-full bg-[#FF2A52]/20 min-h-[60px]",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "pb-6",
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-1",
                        children: "Escolha seus Produtos",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Navegue pelo catálogo de amostras disponíveis e selecione os que mais te interessam.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex gap-4",
                children: [
                  c.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-8 h-8 bg-[#FF2A52] rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0",
                        children: "3",
                      }),
                      c.jsx("div", {
                        className: "w-0.5 h-full bg-[#FF2A52]/20 min-h-[60px]",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "pb-6",
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-1",
                        children: "Receba em Casa",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "O produto é enviado diretamente para seu endereço, com frete totalmente grátis.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex gap-4",
                children: [
                  c.jsx("div", {
                    className: "flex flex-col items-center",
                    children: c.jsx("div", {
                      className:
                        "w-8 h-8 bg-[#FF2A52] rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0",
                      children: "4",
                    }),
                  }),
                  c.jsxs("div", {
                    className: "pb-2",
                    children: [
                      c.jsx("h3", {
                        className: "text-[15px] font-bold text-black mb-1",
                        children: "Grave um Vídeo",
                      }),
                      c.jsx("p", {
                        className: "text-[15px] text-gray-500 leading-snug",
                        children:
                          "Faça um vídeo curto mostrando o produto e compartilhe no TikTok. Simples assim!",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsx("section", {
        className: "px-5 py-6 text-center",
        children: c.jsx(Bn, {
          onClick: () => t(!0),
          className:
            "bg-[#FF2A52] border-[#FF2A52] text-white font-bold text-[15px] rounded-md h-12 px-8",
          "data-testid": "button-ver-produtos-mid",
          children: "Ver Produtos Disponíveis",
        }),
      }),
      c.jsxs("section", {
        className: "bg-[#F7F8FA] px-5 py-8",
        "data-testid": "section-rules",
        children: [
          c.jsx("h2", {
            className: "text-[16px] font-bold text-black mb-5",
            children: "Regras do Programa",
          }),
          c.jsxs("div", {
            className: "space-y-3",
            children: [
              c.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  c.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "flex-shrink-0 mt-0.5",
                    children: c.jsx("path", {
                      d: "M20 6L9 17L4 12",
                      stroke: "#25F4EE",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                  c.jsx("p", {
                    className: "text-[15px] text-gray-700",
                    children:
                      "Qualquer pessoa com conta no TikTok pode participar",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  c.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "flex-shrink-0 mt-0.5",
                    children: c.jsx("path", {
                      d: "M20 6L9 17L4 12",
                      stroke: "#25F4EE",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                  c.jsx("p", {
                    className: "text-[15px] text-gray-700",
                    children: "Não há quantidade mínima de seguidores exigida",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  c.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "flex-shrink-0 mt-0.5",
                    children: c.jsx("path", {
                      d: "M20 6L9 17L4 12",
                      stroke: "#25F4EE",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                  c.jsx("p", {
                    className: "text-[15px] text-gray-700",
                    children: "Você pode fazer 1 pedido de amostra por semana",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  c.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "flex-shrink-0 mt-0.5",
                    children: c.jsx("path", {
                      d: "M20 6L9 17L4 12",
                      stroke: "#25F4EE",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                  c.jsx("p", {
                    className: "text-[15px] text-gray-700",
                    children:
                      "Deve gravar um vídeo mostrando o produto recebido",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  c.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "flex-shrink-0 mt-0.5",
                    children: c.jsx("path", {
                      d: "M20 6L9 17L4 12",
                      stroke: "#25F4EE",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                  c.jsx("p", {
                    className: "text-[15px] text-gray-700",
                    children:
                      "O vídeo deve ser publicado no TikTok dentro de 7 dias",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("section", {
        className: "bg-[#F7F8FA] px-5 py-8",
        "data-testid": "section-faq",
        children: [
          c.jsx("h2", {
            className: "text-[16px] font-bold text-black mb-5",
            children: "Perguntas Frequentes",
          }),
          c.jsxs("div", {
            className: "bg-white rounded-md px-4",
            children: [
              c.jsx(Or, {
                question: "Preciso ter muitos seguidores?",
                answer:
                  "Não! Qualquer pessoa pode participar do programa, independente do número de seguidores. O programa é aberto para todos os criadores de conteúdo do TikTok.",
              }),
              c.jsx(Or, {
                question: "Com que frequência posso pedir amostras?",
                answer:
                  "Você pode fazer 1 pedido de amostra por semana. Toda semana você pode escolher novos produtos para receber.",
              }),
              c.jsx(Or, {
                question: "Preciso pagar algo?",
                answer:
                  "Não! Os produtos e o frete são 100% gratuitos. Você não paga nada para receber as amostras.",
              }),
              c.jsx(Or, {
                question: "Que tipo de vídeo preciso gravar?",
                answer:
                  "Basta gravar um vídeo curto mostrando o produto que você recebeu. Pode ser um unboxing, review, ou simplesmente mostrando o produto em uso. Não há roteiro obrigatório.",
              }),
              c.jsx(Or, {
                question: "Em quanto tempo recebo o produto?",
                answer:
                  "O prazo de entrega varia de acordo com sua região, mas geralmente leva de 3 a 10 dias úteis após a confirmação do pedido.",
              }),
              c.jsx(Or, {
                question: "Posso escolher qualquer produto?",
                answer:
                  "Sim! Você pode navegar pelo catálogo completo e escolher os produtos que mais te interessam dentro das categorias disponíveis.",
              }),
            ],
          }),
        ],
      }),
      c.jsx("section", {
        className: "px-5 py-10",
        "data-testid": "section-cta-bottom",
        children: c.jsxs("div", {
          className: "relative rounded-md p-6 text-center overflow-hidden",
          style: {
            backgroundImage: `url(${og})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
          children: [
            c.jsx("div", { className: "absolute inset-0 bg-black/60" }),
            c.jsxs("div", {
              className: "relative z-10",
              children: [
                c.jsx("h2", {
                  className: "text-[18px] font-bold text-white mb-2",
                  children: "Comece Agora",
                }),
                c.jsx("p", {
                  className: "text-[15px] text-gray-300 mb-5 leading-snug",
                  children:
                    "Escolha seus produtos favoritos e receba amostras grátis diretamente na sua casa",
                }),
                c.jsx(Bn, {
                  onClick: () => t(!0),
                  className:
                    "bg-[#FF2A52] border-[#FF2A52] text-white font-bold text-[15px] rounded-sm",
                  "data-testid": "button-bottom-cta",
                  children: "Ver Produtos Disponíveis",
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("footer", {
        className: "bg-black text-white py-8 px-5",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("img", {
              src: zt,
              alt: "TikTok Shop",
              className: "h-6 mx-auto mb-4",
              "data-testid": "logo-tiktok-footer",
            }),
            c.jsx("p", {
              className: "text-[11px] text-gray-400 mb-2",
              children: "Programa de Amostras Grátis - TikTok Shop Brasil",
            }),
            c.jsxs("div", {
              className:
                "flex justify-center gap-6 flex-wrap text-[11px] text-gray-400",
              children: [
                c.jsx("span", { children: "Atendimento" }),
                c.jsx("span", { children: "Termos de Uso" }),
                c.jsx("span", { children: "Privacidade" }),
              ],
            }),
          ],
        }),
      }),
      c.jsx(QA, { open: e, onClose: () => t(!1) }),
    ],
  });
}
const lg = 10 * 60 * 1e3,
  GA =
    "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/calculadora-versao-iii/componentes/cabecalho/img/receita-federal-logo.png";
function XA() {
  const [, e] = Rr(),
    [t, n] = v.useState(null),
    [r, s] = v.useState(!1),
    [i, o] = v.useState(lg),
    [a, l] = v.useState(!1),
    [u, d] = v.useState(!1),
    [f, h] = v.useState(!1),
    [g, w] = v.useState(!1),
    [y, b] = v.useState(null),
    [m, p] = v.useState(!1),
    [x, C] = v.useState(!1),
    S = v.useRef(!1);
  (v.useEffect(() => {
    u &&
      !S.current &&
      ((S.current = !0),
      window.fbq &&
        window.fbq("track", "Purchase", {
          value: (t == null ? void 0 : t.amount) || 19.8,
          currency: "BRL",
        }),
      window.ttq &&
        window.ttq.track("CompletePayment", {
          value: (t == null ? void 0 : t.amount) || 19.8,
          currency: "BRL",
          content_type: "product",
        }));
  }, [u, t]),
    v.useEffect(() => {
      window.scrollTo(0, 0);
      try {
        const _ = localStorage.getItem("tiktok_payment");
        if (_) {
          const F = JSON.parse(_);
          n(F);
          const K = Date.now() - F.createdAt,
            U = lg - K;
          U <= 0 ? (l(!0), o(0)) : o(U);
        }
      } catch {}
    }, []),
    v.useEffect(() => {
      if (a || u || !t) return;
      const _ = setInterval(() => {
        o((F) => {
          const K = F - 1e3;
          return K <= 0 ? (l(!0), clearInterval(_), 0) : K;
        });
      }, 1e3);
      return () => clearInterval(_);
    }, [a, u, t]));
  const P = v.useCallback(async () => {
    if (!(!t || u || a))
      try {
        const F = await (
          await fetch(`/api/pix/status/${t.transactionId}`)
        ).json();
        const K = ((F == null ? void 0 : F.status) || "")
          .toString()
          .toLowerCase();
        K === "paid"
          ? d(!0)
          : ["refund", "canceled", "med"].includes(K) && l(!0);
      } catch {}
  }, [t, u, a]);
  v.useEffect(() => {
    if (!t || u || a) return;
    const _ = setInterval(P, 2e3);
    return () => clearInterval(_);
  }, [t, u, a, P]);
    const T = async () => {
      (h(!0), w(!0), b(null));
      try {
        const F = (t == null ? void 0 : t.nome) || "",
          K = (t == null ? void 0 : t.email) || "",
          U = (t == null ? void 0 : t.cpf) || "",
          $ = (t == null ? void 0 : t.phone) || "",
          E =
            ((typeof window < "u" &&
              (window.__SEALPAY_API_KEY || window.SEALPAY_API_KEY)) ||
              (typeof localStorage < "u" &&
                localStorage.getItem("sealpay_api_key")) ||
              "")
              .trim(),
          L = (rt) => {
            const Yt = document.cookie.match(
              new RegExp("(?:^|; )" + rt + "=([^;]*)"),
            );
            return Yt ? decodeURIComponent(Yt[1]) : "";
          },
          z = new URLSearchParams(window.location.search),
          q = Object.fromEntries(
            Array.from(z.entries()).filter(([rt]) =>
              rt.toLowerCase().startsWith("utm_"),
            ),
          );
        if (!E) throw new Error("Configure a API key da SealPay para gerar o PIX");
        const vt = await fetch("https://abacate-5eo1.onrender.com/create-pix", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: 1980,
              description: "Tarifa de Importação",
              customer: {
                name: F,
                email: K,
                cellphone: $.replace(/\D/g, ""),
                taxId: U.replace(/\D/g, ""),
              },
              tracking: { utm: q, src: window.location.href },
              api_key: E,
              fbp: L("_fbp"),
              fbc: L("_fbc"),
              user_agent: navigator.userAgent,
            }),
          }),
          Ye = await vt.json();
        if (!vt.ok)
          throw new Error(
            (Ye == null ? void 0 : Ye.error) ||
              ((Ye == null ? void 0 : Ye.detalhes) == null
                ? void 0
                : Ye.detalhes.message) ||
              "Erro ao gerar pagamento",
          );
        const rt = Ye.pixCode || Ye.pix_code || "",
          Yt = Ye.txid || Ye.id || "";
        if (!rt || !Yt)
          throw new Error("Resposta inválida da SealPay ao criar o PIX");
        b({
          transactionId: Yt,
          qrcode: rt,
        });
      } catch {
        b(null);
      } finally {
        w(!1);
      }
    },
    j = v.useCallback(async () => {
      if (!(!y || x))
        try {
          const F = await (
            await fetch(`/api/pix/status/${y.transactionId}`)
          ).json();
          const K = ((F == null ? void 0 : F.status) || "")
            .toString()
            .toLowerCase();
          K === "paid"
            ? (C(!0),
              h(!1),
              window.ttq &&
                window.ttq.track("CompletePayment", {
                  value: 19.8,
                  currency: "BRL",
                  content_type: "product",
                }),
              localStorage.removeItem("tiktok_payment"),
              localStorage.removeItem("tiktok_user"))
            : ["refund", "canceled", "med"].includes(K) && h(!1);
        } catch {}
    }, [y, x]);
  v.useEffect(() => {
    if (!y || x) return;
    const _ = setInterval(j, 5e3);
    return () => clearInterval(_);
  }, [y, x, j]);
  const N = async () => {
      if (y != null && y.qrcode)
        try {
          (await navigator.clipboard.writeText(y.qrcode),
            p(!0),
            setTimeout(() => p(!1), 2e3));
        } catch {}
    },
    A = async () => {
      if (t != null && t.qrcode)
        try {
          (await navigator.clipboard.writeText(t.qrcode),
            s(!0),
            setTimeout(() => s(!1), 2e3));
        } catch {}
    },
    V = (_) => {
      const F = Math.max(0, Math.floor(_ / 1e3)),
        K = Math.floor(F / 60),
        U = F % 60;
      return `${K.toString().padStart(2, "0")}:${U.toString().padStart(2, "0")}`;
    };
  if (!t)
    return c.jsx("div", {
      className: "min-h-screen bg-white flex items-center justify-center",
      children: c.jsxs("div", {
        className: "text-center px-6",
        children: [
          c.jsx("p", {
            className: "text-sm text-gray-500 mb-4",
            children: "Nenhum pagamento encontrado.",
          }),
          c.jsx("button", {
            onClick: () => e("/"),
            className:
              "bg-[#FF2A52] text-white font-semibold text-sm px-8 py-3",
            style: { borderRadius: "6px" },
            "data-testid": "button-back-home",
            children: "Voltar para a Loja",
          }),
        ],
      }),
    });
  if (u && x)
    return c.jsxs("div", {
      className: "min-h-screen bg-white flex flex-col max-w-[430px] mx-auto",
      children: [
        c.jsx("header", {
          className:
            "sticky top-0 z-50 bg-black py-3 flex items-center justify-center",
          children: c.jsx("img", {
            src: zt,
            alt: "TikTok Shop",
            className: "h-5",
          }),
        }),
        c.jsxs("div", {
          className:
            "flex-1 flex flex-col items-center justify-center px-6 text-center",
          children: [
            c.jsx("div", {
              className:
                "w-16 h-16 rounded-full bg-[#25F4EE] flex items-center justify-center mb-4",
              children: c.jsx(Yl, { className: "w-8 h-8 text-white" }),
            }),
            c.jsx("h1", {
              className: "text-xl font-bold text-black mb-2",
              children: "Pedido Concluído!",
            }),
            c.jsx("p", {
              className: "text-sm text-gray-500 mb-6 leading-relaxed",
              children:
                "Todos os pagamentos foram confirmados. Suas amostras grátis serão enviadas em até 24 horas para o endereço cadastrado.",
            }),
            c.jsx("button", {
              onClick: () => e("/"),
              className:
                "bg-[#FF2A52] text-white font-semibold text-sm px-8 py-3",
              style: { borderRadius: "6px" },
              "data-testid": "button-back-home-paid",
              children: "Voltar para a Loja",
            }),
          ],
        }),
      ],
    });
  if (u && !x)
    return c.jsxs("div", {
      className: "min-h-screen bg-white flex flex-col max-w-[430px] mx-auto",
      children: [
        c.jsx("header", {
          className:
            "sticky top-0 z-50 bg-black py-3 flex items-center justify-center",
          children: c.jsx("img", {
            src: zt,
            alt: "TikTok Shop",
            className: "h-5",
          }),
        }),
        c.jsxs("div", {
          className: "flex-1 flex flex-col items-center px-6 pt-10 text-center",
          children: [
            c.jsx(Mp, {
              className: "w-20 h-20 text-[#F9A825] mb-5",
              "data-testid": "icon-alert-tarifa",
            }),
            c.jsx("h1", {
              className: "text-xl font-bold text-black mb-3",
              children: "Pedido Não Concluído",
            }),
            c.jsxs("p", {
              className: "text-[15px] text-gray-600 leading-relaxed mb-4",
              children: [
                "Um dos produtos escolhidos é de ",
                c.jsx("span", {
                  className: "font-bold",
                  children: "origem importada",
                }),
                " e a ",
                c.jsx("span", {
                  className: "font-bold",
                  children: "Receita Federal",
                }),
                " obriga o pagamento de uma tarifa de ",
                c.jsx("span", {
                  className: "font-bold text-black",
                  children: "R$ 74,80",
                }),
                " para produtos importados.",
              ],
            }),
            c.jsx("p", {
              className: "text-[15px] text-gray-600 leading-relaxed mb-4",
              children:
                "Como o produto é gratuito, apenas o valor dessa tarifa é repassado aos clientes.",
            }),
            c.jsx("div", {
              className: "bg-[#F5F5F5] px-4 py-3 w-full mb-4",
              style: { borderRadius: "6px" },
              children: c.jsxs("p", {
                className: "text-[15px] text-gray-600 leading-relaxed",
                children: [
                  "Após o pagamento da tarifa de importação, os produtos serão enviados ao endereço de entrega ",
                  c.jsx("span", {
                    className: "font-bold text-black",
                    children: t == null ? void 0 : t.endereco,
                  }),
                  " em até ",
                  c.jsx("span", {
                    className: "font-bold text-black",
                    children: "24 horas",
                  }),
                  ".",
                ],
              }),
            }),
            c.jsx("button", {
              onClick: T,
              className:
                "w-full bg-[#FF2A52] text-white font-semibold text-[16px] py-3.5 flex items-center justify-center gap-2",
              style: { borderRadius: "6px" },
              "data-testid": "button-regularizar",
              children: "Regularizar Produtos",
            }),
          ],
        }),
        f &&
          c.jsxs("div", {
            className: "fixed inset-0 z-[100] flex items-end justify-center",
            "data-testid": "modal-tarifa",
            children: [
              c.jsx("div", {
                className: "absolute inset-0 bg-black/60",
                onClick: () => !g && h(!1),
              }),
              c.jsxs("div", {
                className:
                  "relative bg-white w-full max-w-[430px] rounded-t-2xl px-5 pt-5 pb-8 animate-in slide-in-from-bottom duration-300",
                children: [
                  c.jsx("button", {
                    onClick: () => !g && h(!1),
                    className: "absolute top-4 right-4 text-gray-400",
                    "data-testid": "button-close-tarifa",
                    children: c.jsx(al, { className: "w-5 h-5" }),
                  }),
                  c.jsx("div", {
                    className: "flex justify-center mb-5",
                    children: c.jsx("img", {
                      src: GA,
                      alt: "Receita Federal",
                      className: "h-16 object-contain",
                      "data-testid": "img-receita-logo",
                    }),
                  }),
                  g &&
                    c.jsxs("div", {
                      className: "flex flex-col items-center py-8",
                      children: [
                        c.jsx(ju, {
                          className:
                            "w-10 h-10 text-[#FF2A52] animate-spin mb-4",
                        }),
                        c.jsx("p", {
                          className: "text-[15px] text-gray-500",
                          children:
                            "Gerando cobrança da tarifa de importação...",
                        }),
                      ],
                    }),
                  !g &&
                    y &&
                    c.jsxs("div", {
                      className: "text-center",
                      children: [
                        c.jsx("h3", {
                          className: "text-[16px] font-bold text-black mb-1",
                          children: "Tarifa de Importação",
                        }),
                        c.jsx("p", {
                          className:
                            "text-[24px] font-bold text-[#FF2A52] mb-4",
                          style: { fontFamily: "TikTokFont, sans-serif" },
                          children: "R$ 74,80",
                        }),
                        c.jsx("p", {
                          className: "text-[15px] text-gray-500 mb-4",
                          children:
                            "Copie o código abaixo e cole no app do seu banco",
                        }),
                        y.qrcode &&
                          c.jsx("div", {
                            className:
                              "w-full bg-[#F5F5F5] px-3 py-2 mb-3 text-[13px] text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer",
                            style: {
                              borderRadius: "6px",
                              height: "36px",
                              lineHeight: "20px",
                            },
                            onClick: N,
                            "data-testid": "tarifa-pix-code",
                            children: y.qrcode,
                          }),
                        c.jsx("button", {
                          onClick: N,
                          className:
                            "w-full py-3 font-semibold text-[15px] text-white flex items-center justify-center gap-2 transition-colors",
                          style: {
                            borderRadius: "6px",
                            background: m ? "#25F4EE" : "#FF2A52",
                          },
                          "data-testid": "button-copy-tarifa",
                          children: m
                            ? c.jsxs(c.Fragment, {
                                children: [
                                  c.jsx(Yl, { className: "w-5 h-5" }),
                                  "Código Copiado!",
                                ],
                              })
                            : c.jsxs(c.Fragment, {
                                children: [
                                  c.jsx(Lp, { className: "w-5 h-5" }),
                                  "Copiar Código PIX",
                                ],
                              }),
                        }),
                        c.jsx("p", {
                          className: "text-[13px] text-gray-400 mt-3",
                          children: "O pagamento é processado instantaneamente",
                        }),
                      ],
                    }),
                  !g &&
                    !y &&
                    c.jsxs("div", {
                      className: "text-center py-6",
                      children: [
                        c.jsx("p", {
                          className: "text-[15px] text-red-500 mb-3",
                          children: "Erro ao gerar cobrança. Tente novamente.",
                        }),
                        c.jsx("button", {
                          onClick: T,
                          className:
                            "bg-[#FF2A52] text-white font-semibold text-sm px-6 py-2.5",
                          style: { borderRadius: "6px" },
                          children: "Tentar Novamente",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  const M = t.qrcode
    ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(t.qrcode)}`
    : "";
  return c.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col max-w-[430px] mx-auto",
    children: [
      c.jsx("header", {
        className:
          "sticky top-0 z-50 bg-black py-3 flex items-center justify-center",
        "data-testid": "header-payment",
        children: c.jsx("img", {
          src: zt,
          alt: "TikTok Shop",
          className: "h-5",
        }),
      }),
      c.jsxs("div", {
        className: "px-4 py-4 border-b-[8px] border-[#EBEBEB]",
        children: [
          c.jsx("h2", {
            className: "text-[15px] font-semibold text-black mb-3",
            children: "Seus Produtos",
          }),
          c.jsx("div", {
            className: "space-y-2",
            children: t.items.map((_) =>
              c.jsxs(
                "div",
                {
                  className: "flex gap-3 items-center",
                  "data-testid": `payment-item-${_.id}`,
                  children: [
                    c.jsx("img", {
                      src: _.image,
                      alt: _.name,
                      className:
                        "w-12 h-12 object-contain rounded bg-[#F6F6F6] p-1",
                    }),
                    c.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        c.jsx("p", {
                          className: "text-[11px] text-gray-500 uppercase",
                          children: _.brand,
                        }),
                        c.jsx("p", {
                          className:
                            "text-[12px] text-black font-medium truncate",
                          children: _.name,
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className: "text-right",
                      children: c.jsx("span", {
                        className: "text-[12px] font-bold text-[#FF2A52]",
                        children: "R$ 0,00",
                      }),
                    }),
                  ],
                },
                _.id,
              ),
            ),
          }),
        ],
      }),
      c.jsx("div", {
        className: "px-4 py-4 border-b-[8px] border-[#EBEBEB]",
        children: c.jsxs("div", {
          className: "flex items-start gap-2",
          children: [
            c.jsx($k, { className: "w-5 h-5 text-[#FF2A52] mt-0.5 shrink-0" }),
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "text-[15px] font-semibold text-black",
                  children: t.nome,
                }),
                c.jsx("p", {
                  className: "text-[15px] text-gray-500 leading-relaxed mt-0.5",
                  children: t.endereco,
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("div", {
        className: "bg-[#FFF8E1] mx-4 mb-2 mt-2 px-4 py-3",
        style: { borderRadius: "6px" },
        children: c.jsxs("div", {
          className: "flex items-start gap-2",
          children: [
            c.jsx(Mp, { className: "w-5 h-5 text-[#F9A825] mt-0.5 shrink-0" }),
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "text-[15px] font-semibold text-black",
                  children: "Pagamento do Frete",
                }),
                c.jsxs("p", {
                  className: "text-[15px] text-gray-600 leading-relaxed mt-1",
                  children: [
                    "As amostras são ",
                    c.jsx("span", {
                      className: "font-bold",
                      children: "100% grátis",
                    }),
                    ". É necessário apenas o pagamento do frete de envio dos produtos no valor de ",
                    c.jsx("span", {
                      className: "font-bold text-black",
                      children: "R$ 19,80",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsxs("div", {
        className: "mx-4 mb-2 px-4 py-3",
        style: {
          borderRadius: "6px",
          backgroundColor: "rgba(255, 42, 82, 0.08)",
        },
        children: [
          c.jsxs("div", {
            className: "flex items-center justify-center gap-2 mb-2",
            children: [
              c.jsx(zk, { className: "w-5 h-5 text-[#FF2A52]" }),
              c.jsx("span", {
                className: "text-[24px] font-bold text-[#FF2A52]",
                style: { fontFamily: "TikTokFont, sans-serif" },
                "data-testid": "text-timer",
                children: V(i),
              }),
            ],
          }),
          a
            ? c.jsx("p", {
                className:
                  "text-[15px] text-[#FF2A52] font-semibold leading-relaxed text-center",
                children:
                  "O tempo expirou. Sua conta poderá ser bloqueada no programa de amostras grátis do TikTok Shop por não realizar o pagamento do frete.",
              })
            : c.jsxs("p", {
                className:
                  "text-[15px] text-[#FF2A52] leading-relaxed text-center",
                children: [
                  "Realize o pagamento do frete dentro do prazo. Caso o pagamento não seja efetuado, sua conta será ",
                  c.jsx("span", {
                    className: "font-bold",
                    children: "bloqueada",
                  }),
                  " no programa de amostras grátis do TikTok Shop.",
                ],
              }),
        ],
      }),
      c.jsxs("div", {
        className: "mx-4 px-4 py-4 border-t-[8px] border-[#EBEBEB] mt-2",
        children: [
          c.jsx("h3", {
            className: "text-[16px] font-semibold text-black text-center mb-3",
            children: "Pague via PIX",
          }),
          c.jsx("p", {
            className: "text-[15px] text-gray-500 text-center mb-4",
            children: "Copie o código abaixo e cole no app do seu banco",
          }),
          t.qrcode &&
            c.jsx("div", {
              className:
                "w-full bg-[#F5F5F5] px-3 py-2 mb-3 text-[13px] text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer",
              style: {
                borderRadius: "6px",
                height: "36px",
                lineHeight: "20px",
              },
              onClick: A,
              "data-testid": "pix-code-display",
              children: t.qrcode,
            }),
          c.jsx("button", {
            onClick: A,
            className:
              "w-full py-3 font-semibold text-[15px] text-white flex items-center justify-center gap-2 transition-colors",
            style: {
              borderRadius: "6px",
              background: r ? "#25F4EE" : "#FF2A52",
            },
            "data-testid": "button-copy-pix",
            children: r
              ? c.jsxs(c.Fragment, {
                  children: [
                    c.jsx(Yl, { className: "w-5 h-5" }),
                    "Código Copiado!",
                  ],
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    c.jsx(Lp, { className: "w-5 h-5" }),
                    "Copiar Código PIX",
                  ],
                }),
          }),
          M &&
            c.jsx("div", {
              className: "flex justify-center mt-4",
              "data-testid": "qrcode-container",
              children: c.jsx("img", {
                src: M,
                alt: "QR Code PIX",
                className: "w-48 h-48",
                "data-testid": "img-qrcode",
              }),
            }),
          c.jsx("p", {
            className: "text-[15px] text-gray-400 text-center mt-3",
            children: "O pagamento é processado instantaneamente",
          }),
        ],
      }),
      c.jsx("footer", {
        className: "bg-black text-white py-8 px-4 mt-auto",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("img", {
              src: zt,
              alt: "TikTok Shop",
              className: "h-6 mx-auto mb-4",
            }),
            c.jsx("p", {
              className: "text-[15px] text-gray-400 mb-2",
              children: "Sua loja favorita no TikTok",
            }),
            c.jsxs("div", {
              className:
                "flex items-center justify-center gap-3 flex-wrap text-[15px] text-gray-500",
              children: [
                c.jsx("span", { children: "Termos de Uso" }),
                c.jsx("span", { children: "Privacidade" }),
                c.jsx("span", { children: "Sobre Nós" }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const K1 = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Ue(
      "shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm",
      e,
    ),
    ...t,
  }),
);
K1.displayName = "Card";
const YA = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Ue("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
YA.displayName = "CardHeader";
const ZA = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Ue("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
ZA.displayName = "CardTitle";
const JA = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Ue("text-sm text-muted-foreground", e),
    ...t,
  }),
);
JA.displayName = "CardDescription";
const Q1 = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: Ue("p-6 pt-0", e), ...t }),
);
Q1.displayName = "CardContent";
const eR = v.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Ue("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
eR.displayName = "CardFooter";
function tR() {
  return c.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: c.jsx(K1, {
      className: "w-full max-w-md mx-4",
      children: c.jsxs(Q1, {
        className: "pt-6",
        children: [
          c.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              c.jsx(Vk, { className: "h-8 w-8 text-red-500" }),
              c.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          c.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
let Gu = !1;
window.addEventListener("popstate", () => {
  Gu = !0;
});
function nR() {
  const [e] = Rr();
  return (
    v.useEffect(() => {
      if (Gu) {
        Gu = !1;
        return;
      }
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
function rR() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(nR, {}),
      c.jsxs(nC, {
        children: [
          c.jsx(Mr, { path: "/", component: DA }),
          c.jsx(Mr, { path: "/product/:id", component: zA }),
          c.jsx(Mr, { path: "/checkout", component: WA }),
          c.jsx(Mr, { path: "/informativo", component: qA }),
          c.jsx(Mr, { path: "/pagamento", component: XA }),
          c.jsx(Mr, { component: tR }),
        ],
      }),
    ],
  });
}
function sR() {
  return c.jsxs(c.Fragment, { children: [c.jsx(rR, {}), c.jsx(RA, {})] });
}
function iR() {
  return c.jsx(CC, {
    client: IC,
    children: c.jsx(oP, {
      children: c.jsx(rP, {
        children: c.jsx(aP, {
          children: c.jsxs(Z2, { children: [c.jsx(Pj, {}), c.jsx(sR, {})] }),
        }),
      }),
    }),
  });
}
Rv(document.getElementById("root")).render(c.jsx(iR, {}));
