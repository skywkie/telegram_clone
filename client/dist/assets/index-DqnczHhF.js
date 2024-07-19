var fm = Object.defineProperty;
var dm = (e, t, n) =>
  t in e ? fm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Me = (e, t, n) => (dm(e, typeof t != "symbol" ? t + "" : t, n), n);
function hm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function pm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nf = { exports: {} },
  No = {},
  Of = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = Symbol.for("react.element"),
  mm = Symbol.for("react.portal"),
  ym = Symbol.for("react.fragment"),
  gm = Symbol.for("react.strict_mode"),
  vm = Symbol.for("react.profiler"),
  wm = Symbol.for("react.provider"),
  Sm = Symbol.for("react.context"),
  Em = Symbol.for("react.forward_ref"),
  _m = Symbol.for("react.suspense"),
  km = Symbol.for("react.memo"),
  xm = Symbol.for("react.lazy"),
  Ra = Symbol.iterator;
function Cm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ra && e[Ra]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Lf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Af = Object.assign,
  Df = {};
function qn(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Df), (this.updater = n || Lf);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jf() {}
jf.prototype = qn.prototype;
function au(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Df), (this.updater = n || Lf);
}
var cu = (au.prototype = new jf());
cu.constructor = au;
Af(cu, qn.prototype);
cu.isPureReactComponent = !0;
var Ta = Array.isArray,
  Mf = Object.prototype.hasOwnProperty,
  fu = { current: null },
  zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function If(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t))
      Mf.call(t, r) && !zf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Yr, type: e, key: o, ref: s, props: i, _owner: fu.current };
}
function Rm(e, t) {
  return { $$typeof: Yr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yr;
}
function Tm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pa = /\/+/g;
function os(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Tm("" + e.key) : t.toString(36);
}
function Oi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yr:
          case mm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + os(s, 0) : r),
      Ta(i)
        ? ((n = ""),
          e != null && (n = e.replace(Pa, "$&/") + "/"),
          Oi(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (du(i) &&
            (i = Rm(
              i,
              n +
                (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace(Pa, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ta(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + os(o, l);
      s += Oi(o, t, n, u, i);
    }
  else if (((u = Cm(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + os(o, l++)), (s += Oi(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function li(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Pm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  Li = { transition: null },
  Nm = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: Li, ReactCurrentOwner: fu };
function Bf() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
  map: li,
  forEach: function (e, t, n) {
    li(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      li(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      li(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!du(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
M.Component = qn;
M.Fragment = ym;
M.Profiler = vm;
M.PureComponent = au;
M.StrictMode = gm;
M.Suspense = _m;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nm;
M.act = Bf;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + "."
    );
  var r = Af({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = fu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Mf.call(t, u) &&
        !zf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: Yr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wm, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = If;
M.createFactory = function (e) {
  var t = If.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: Em, render: e };
};
M.isValidElement = du;
M.lazy = function (e) {
  return { $$typeof: xm, _payload: { _status: -1, _result: e }, _init: Pm };
};
M.memo = function (e, t) {
  return { $$typeof: km, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Li.transition;
  Li.transition = {};
  try {
    e();
  } finally {
    Li.transition = t;
  }
};
M.unstable_act = Bf;
M.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
M.useContext = function (e) {
  return ye.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
M.useId = function () {
  return ye.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return ye.current.useRef(e);
};
M.useState = function (e) {
  return ye.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return ye.current.useTransition();
};
M.version = "18.3.1";
Of.exports = M;
var P = Of.exports;
const te = pm(P),
  bs = hm({ __proto__: null, default: te }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Om = P,
  Lm = Symbol.for("react.element"),
  Am = Symbol.for("react.fragment"),
  Dm = Object.prototype.hasOwnProperty,
  jm = Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Dm.call(t, r) && !Mm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Lm, type: e, key: o, ref: s, props: i, _owner: jm.current };
}
No.Fragment = Am;
No.jsx = Ff;
No.jsxs = Ff;
Nf.exports = No;
var T = Nf.exports,
  qs = {},
  Uf = { exports: {} },
  De = {},
  $f = { exports: {} },
  Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, A) {
    var D = O.length;
    O.push(A);
    e: for (; 0 < D; ) {
      var Q = (D - 1) >>> 1,
        re = O[Q];
      if (0 < i(re, A)) (O[Q] = A), (O[D] = re), (D = Q);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var A = O[0],
      D = O.pop();
    if (D !== A) {
      O[0] = D;
      e: for (var Q = 0, re = O.length, oi = re >>> 1; Q < oi; ) {
        var Kt = 2 * (Q + 1) - 1,
          is = O[Kt],
          Qt = Kt + 1,
          si = O[Qt];
        if (0 > i(is, D))
          Qt < re && 0 > i(si, is)
            ? ((O[Q] = si), (O[Qt] = D), (Q = Qt))
            : ((O[Q] = is), (O[Kt] = D), (Q = Kt));
        else if (Qt < re && 0 > i(si, D)) (O[Q] = si), (O[Qt] = D), (Q = Qt);
        else break e;
      }
    }
    return A;
  }
  function i(O, A) {
    var D = O.sortIndex - A.sortIndex;
    return D !== 0 ? D : O.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    a = [],
    c = 1,
    f = null,
    p = 3,
    g = !1,
    y = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var A = n(a); A !== null; ) {
      if (A.callback === null) r(a);
      else if (A.startTime <= O) r(a), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(a);
    }
  }
  function w(O) {
    if (((v = !1), h(O), !y))
      if (n(u) !== null) (y = !0), ns(_);
      else {
        var A = n(a);
        A !== null && rs(w, A.startTime - O);
      }
  }
  function _(O, A) {
    (y = !1), v && ((v = !1), m(C), (C = -1)), (g = !0);
    var D = p;
    try {
      for (h(A), f = n(u); f !== null && (!(f.expirationTime > A) || (O && !Ce())); ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var re = Q(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(u) && r(u),
            h(A);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var oi = !0;
      else {
        var Kt = n(a);
        Kt !== null && rs(w, Kt.startTime - A), (oi = !1);
      }
      return oi;
    } finally {
      (f = null), (p = D), (g = !1);
    }
  }
  var x = !1,
    R = null,
    C = -1,
    B = 5,
    j = -1;
  function Ce() {
    return !(e.unstable_now() - j < B);
  }
  function er() {
    if (R !== null) {
      var O = e.unstable_now();
      j = O;
      var A = !0;
      try {
        A = R(!0, O);
      } finally {
        A ? tr() : ((x = !1), (R = null));
      }
    } else x = !1;
  }
  var tr;
  if (typeof d == "function")
    tr = function () {
      d(er);
    };
  else if (typeof MessageChannel < "u") {
    var Ca = new MessageChannel(),
      cm = Ca.port2;
    (Ca.port1.onmessage = er),
      (tr = function () {
        cm.postMessage(null);
      });
  } else
    tr = function () {
      E(er, 0);
    };
  function ns(O) {
    (R = O), x || ((x = !0), tr());
  }
  function rs(O, A) {
    C = E(function () {
      O(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ns(_));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (O) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var D = p;
      p = A;
      try {
        return O();
      } finally {
        p = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, A) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var D = p;
      p = O;
      try {
        return A();
      } finally {
        p = D;
      }
    }),
    (e.unstable_scheduleCallback = function (O, A, D) {
      var Q = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? Q + D : Q))
          : (D = Q),
        O)
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
        (re = D + re),
        (O = {
          id: c++,
          callback: A,
          priorityLevel: O,
          startTime: D,
          expirationTime: re,
          sortIndex: -1,
        }),
        D > Q
          ? ((O.sortIndex = D),
            t(a, O),
            n(u) === null && O === n(a) && (v ? (m(C), (C = -1)) : (v = !0), rs(w, D - Q)))
          : ((O.sortIndex = re), t(u, O), y || g || ((y = !0), ns(_))),
        O
      );
    }),
    (e.unstable_shouldYield = Ce),
    (e.unstable_wrapCallback = function (O) {
      var A = p;
      return function () {
        var D = p;
        p = A;
        try {
          return O.apply(this, arguments);
        } finally {
          p = D;
        }
      };
    });
})(Wf);
$f.exports = Wf;
var zm = $f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im = P,
  Oe = zm;
function k(e) {
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
var Hf = new Set(),
  Tr = {};
function mn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Hf.add(t[e]);
}
var pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ks = Object.prototype.hasOwnProperty,
  Bm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Na = {},
  Oa = {};
function Fm(e) {
  return Ks.call(Oa, e) ? !0 : Ks.call(Na, e) ? !1 : Bm.test(e) ? (Oa[e] = !0) : ((Na[e] = !0), !1);
}
function Um(e, t, n, r) {
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
function $m(e, t, n, r) {
  if (t === null || typeof t > "u" || Um(e, t, n, r)) return !0;
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
function ge(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ae[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hu = /[\-:]([a-z])/g;
function pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hu, pu);
    ae[t] = new ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hu, pu);
    ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hu, pu);
  ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mu(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    ($m(t, n, i, r) && (n = null),
    r || i === null
      ? Fm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ui = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  yu = Symbol.for("react.strict_mode"),
  Qs = Symbol.for("react.profiler"),
  Vf = Symbol.for("react.provider"),
  bf = Symbol.for("react.context"),
  gu = Symbol.for("react.forward_ref"),
  Ys = Symbol.for("react.suspense"),
  Xs = Symbol.for("react.suspense_list"),
  vu = Symbol.for("react.memo"),
  _t = Symbol.for("react.lazy"),
  qf = Symbol.for("react.offscreen"),
  La = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (La && e[La]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var q = Object.assign,
  ss;
function dr(e) {
  if (ss === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ss = (t && t[1]) || "";
    }
  return (
    `
` +
    ss +
    e
  );
}
var ls = !1;
function us(e, t) {
  if (!e || ls) return "";
  ls = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ls = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Wm(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = us(e.type, !1)), e;
    case 11:
      return (e = us(e.type.render, !1)), e;
    case 1:
      return (e = us(e.type, !0)), e;
    default:
      return "";
  }
}
function Js(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case wn:
      return "Portal";
    case Qs:
      return "Profiler";
    case yu:
      return "StrictMode";
    case Ys:
      return "Suspense";
    case Xs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bf:
        return (e.displayName || "Context") + ".Consumer";
      case Vf:
        return (e._context.displayName || "Context") + ".Provider";
      case gu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vu:
        return (t = e.displayName || null), t !== null ? t : Js(e.type) || "Memo";
      case _t:
        (t = e._payload), (e = e._init);
        try {
          return Js(e(t));
        } catch {}
    }
  return null;
}
function Hm(e) {
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
      return Js(t);
    case 8:
      return t === yu ? "StrictMode" : "Mode";
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
function Bt(e) {
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
function Kf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Vm(e) {
  var t = Kf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ai(e) {
  e._valueTracker || (e._valueTracker = Vm(e));
}
function Qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gs(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Aa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Bt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Yf(e, t) {
  (t = t.checked), t != null && mu(e, "checked", t, !1);
}
function Zs(e, t) {
  Yf(e, t);
  var n = Bt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? el(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && el(e, t.type, Bt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function el(e, t, n) {
  (t !== "number" || Qi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hr = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function tl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ja(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function Xf(e, t) {
  var n = Bt(t.value),
    r = Bt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ci,
  Gf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        ci = ci || document.createElement("div"),
          ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ci.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
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
  bm = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function (e) {
  bm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e]);
  });
});
function Zf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vr.hasOwnProperty(e) && vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ed(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Zf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var qm = q(
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
  }
);
function rl(e, t) {
  if (t) {
    if (qm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function il(e, t) {
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
var ol = null;
function wu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sl = null,
  An = null,
  Dn = null;
function za(e) {
  if ((e = Gr(e))) {
    if (typeof sl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = jo(t)), sl(e.stateNode, e.type, t));
  }
}
function td(e) {
  An ? (Dn ? Dn.push(e) : (Dn = [e])) : (An = e);
}
function nd() {
  if (An) {
    var e = An,
      t = Dn;
    if (((Dn = An = null), za(e), t)) for (e = 0; e < t.length; e++) za(t[e]);
  }
}
function rd(e, t) {
  return e(t);
}
function id() {}
var as = !1;
function od(e, t, n) {
  if (as) return e(t, n);
  as = !0;
  try {
    return rd(e, t, n);
  } finally {
    (as = !1), (An !== null || Dn !== null) && (id(), nd());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jo(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var ll = !1;
if (pt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        ll = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    ll = !1;
  }
function Km(e, t, n, r, i, o, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var wr = !1,
  Yi = null,
  Xi = !1,
  ul = null,
  Qm = {
    onError: function (e) {
      (wr = !0), (Yi = e);
    },
  };
function Ym(e, t, n, r, i, o, s, l, u) {
  (wr = !1), (Yi = null), Km.apply(Qm, arguments);
}
function Xm(e, t, n, r, i, o, s, l, u) {
  if ((Ym.apply(this, arguments), wr)) {
    if (wr) {
      var a = Yi;
      (wr = !1), (Yi = null);
    } else throw Error(k(198));
    Xi || ((Xi = !0), (ul = a));
  }
}
function yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function sd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Ia(e) {
  if (yn(e) !== e) throw Error(k(188));
}
function Jm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ia(i), e;
        if (o === r) return Ia(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function ld(e) {
  return (e = Jm(e)), e !== null ? ud(e) : null;
}
function ud(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ud(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ad = Oe.unstable_scheduleCallback,
  Ba = Oe.unstable_cancelCallback,
  Gm = Oe.unstable_shouldYield,
  Zm = Oe.unstable_requestPaint,
  Y = Oe.unstable_now,
  ey = Oe.unstable_getCurrentPriorityLevel,
  Su = Oe.unstable_ImmediatePriority,
  cd = Oe.unstable_UserBlockingPriority,
  Ji = Oe.unstable_NormalPriority,
  ty = Oe.unstable_LowPriority,
  fd = Oe.unstable_IdlePriority,
  Oo = null,
  it = null;
function ny(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : oy,
  ry = Math.log,
  iy = Math.LN2;
function oy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ry(e) / iy) | 0)) | 0;
}
var fi = 64,
  di = 4194304;
function pr(e) {
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
function Gi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = pr(l)) : ((o &= s), o !== 0 && (r = pr(o)));
  } else (s = n & ~i), s !== 0 ? (r = pr(s)) : o !== 0 && (r = pr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function sy(e, t) {
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
function ly(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Xe(o),
      l = 1 << s,
      u = i[s];
    u === -1 ? (!(l & n) || l & r) && (i[s] = sy(l, t)) : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function al(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function dd() {
  var e = fi;
  return (fi <<= 1), !(fi & 4194240) && (fi = 64), e;
}
function cs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n);
}
function uy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Eu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function hd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pd,
  _u,
  md,
  yd,
  gd,
  cl = !1,
  hi = [],
  Nt = null,
  Ot = null,
  Lt = null,
  Or = new Map(),
  Lr = new Map(),
  xt = [],
  ay =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Fa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Gr(t)), t !== null && _u(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function cy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Nt = ir(Nt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ot = ir(Ot, e, t, n, r, i)), !0;
    case "mouseover":
      return (Lt = ir(Lt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Or.set(o, ir(Or.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (o = i.pointerId), Lr.set(o, ir(Lr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function vd(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = sd(n)), t !== null)) {
          (e.blockedOn = t),
            gd(e.priority, function () {
              md(n);
            });
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
function Ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ol = r), n.target.dispatchEvent(r), (ol = null);
    } else return (t = Gr(n)), t !== null && _u(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ua(e, t, n) {
  Ai(e) && n.delete(t);
}
function fy() {
  (cl = !1),
    Nt !== null && Ai(Nt) && (Nt = null),
    Ot !== null && Ai(Ot) && (Ot = null),
    Lt !== null && Ai(Lt) && (Lt = null),
    Or.forEach(Ua),
    Lr.forEach(Ua);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cl || ((cl = !0), Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, fy)));
}
function Ar(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < hi.length) {
    or(hi[0], e);
    for (var n = 1; n < hi.length; n++) {
      var r = hi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && or(Nt, e),
      Ot !== null && or(Ot, e),
      Lt !== null && or(Lt, e),
      Or.forEach(t),
      Lr.forEach(t),
      n = 0;
    n < xt.length;
    n++
  )
    (r = xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && ((n = xt[0]), n.blockedOn === null); )
    vd(n), n.blockedOn === null && xt.shift();
}
var jn = wt.ReactCurrentBatchConfig,
  Zi = !0;
function dy(e, t, n, r) {
  var i = F,
    o = jn.transition;
  jn.transition = null;
  try {
    (F = 1), ku(e, t, n, r);
  } finally {
    (F = i), (jn.transition = o);
  }
}
function hy(e, t, n, r) {
  var i = F,
    o = jn.transition;
  jn.transition = null;
  try {
    (F = 4), ku(e, t, n, r);
  } finally {
    (F = i), (jn.transition = o);
  }
}
function ku(e, t, n, r) {
  if (Zi) {
    var i = fl(e, t, n, r);
    if (i === null) Ss(e, t, r, eo, n), Fa(e, r);
    else if (cy(i, e, t, n, r)) r.stopPropagation();
    else if ((Fa(e, r), t & 4 && -1 < ay.indexOf(e))) {
      for (; i !== null; ) {
        var o = Gr(i);
        if ((o !== null && pd(o), (o = fl(e, t, n, r)), o === null && Ss(e, t, r, eo, n), o === i))
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ss(e, t, r, null, n);
  }
}
var eo = null;
function fl(e, t, n, r) {
  if (((eo = null), (e = wu(r)), (e = en(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = sd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function wd(e) {
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
      switch (ey()) {
        case Su:
          return 1;
        case cd:
          return 4;
        case Ji:
        case ty:
          return 16;
        case fd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null,
  xu = null,
  Di = null;
function Sd() {
  if (Di) return Di;
  var e,
    t = xu,
    n = t.length,
    r,
    i = "value" in Rt ? Rt.value : Rt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Di = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ji(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pi() {
  return !0;
}
function $a() {
  return !1;
}
function je(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pi
        : $a),
      (this.isPropagationStopped = $a),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pi));
      },
      persist: function () {},
      isPersistent: pi,
    }),
    t
  );
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cu = je(Kn),
  Jr = q({}, Kn, { view: 0, detail: 0 }),
  py = je(Jr),
  fs,
  ds,
  sr,
  Lo = q({}, Jr, {
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
    getModifierState: Ru,
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
        : (e !== sr &&
            (sr && e.type === "mousemove"
              ? ((fs = e.screenX - sr.screenX), (ds = e.screenY - sr.screenY))
              : (ds = fs = 0),
            (sr = e)),
          fs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ds;
    },
  }),
  Wa = je(Lo),
  my = q({}, Lo, { dataTransfer: 0 }),
  yy = je(my),
  gy = q({}, Jr, { relatedTarget: 0 }),
  hs = je(gy),
  vy = q({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wy = je(vy),
  Sy = q({}, Kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ey = je(Sy),
  _y = q({}, Kn, { data: 0 }),
  Ha = je(_y),
  ky = {
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
  xy = {
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
  Cy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ry(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cy[e]) ? !!t[e] : !1;
}
function Ru() {
  return Ry;
}
var Ty = q({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = ky[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ji(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? xy[e.keyCode] || "Unidentified"
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
    getModifierState: Ru,
    charCode: function (e) {
      return e.type === "keypress" ? ji(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ji(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Py = je(Ty),
  Ny = q({}, Lo, {
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
  Va = je(Ny),
  Oy = q({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ru,
  }),
  Ly = je(Oy),
  Ay = q({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dy = je(Ay),
  jy = q({}, Lo, {
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
  My = je(jy),
  zy = [9, 13, 27, 32],
  Tu = pt && "CompositionEvent" in window,
  Sr = null;
pt && "documentMode" in document && (Sr = document.documentMode);
var Iy = pt && "TextEvent" in window && !Sr,
  Ed = pt && (!Tu || (Sr && 8 < Sr && 11 >= Sr)),
  ba = " ",
  qa = !1;
function _d(e, t) {
  switch (e) {
    case "keyup":
      return zy.indexOf(t.keyCode) !== -1;
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
function kd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function By(e, t) {
  switch (e) {
    case "compositionend":
      return kd(t);
    case "keypress":
      return t.which !== 32 ? null : ((qa = !0), ba);
    case "textInput":
      return (e = t.data), e === ba && qa ? null : e;
    default:
      return null;
  }
}
function Fy(e, t) {
  if (En)
    return e === "compositionend" || (!Tu && _d(e, t))
      ? ((e = Sd()), (Di = xu = Rt = null), (En = !1), e)
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
      return Ed && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uy = {
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
function Ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uy[e.type] : t === "textarea";
}
function xd(e, t, n, r) {
  td(r),
    (t = to(t, "onChange")),
    0 < t.length &&
      ((n = new Cu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Er = null,
  Dr = null;
function $y(e) {
  Md(e, 0);
}
function Ao(e) {
  var t = xn(e);
  if (Qf(t)) return e;
}
function Wy(e, t) {
  if (e === "change") return t;
}
var Cd = !1;
if (pt) {
  var ps;
  if (pt) {
    var ms = "oninput" in document;
    if (!ms) {
      var Qa = document.createElement("div");
      Qa.setAttribute("oninput", "return;"), (ms = typeof Qa.oninput == "function");
    }
    ps = ms;
  } else ps = !1;
  Cd = ps && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  Er && (Er.detachEvent("onpropertychange", Rd), (Dr = Er = null));
}
function Rd(e) {
  if (e.propertyName === "value" && Ao(Dr)) {
    var t = [];
    xd(t, Dr, e, wu(e)), od($y, t);
  }
}
function Hy(e, t, n) {
  e === "focusin"
    ? (Ya(), (Er = t), (Dr = n), Er.attachEvent("onpropertychange", Rd))
    : e === "focusout" && Ya();
}
function Vy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ao(Dr);
}
function by(e, t) {
  if (e === "click") return Ao(t);
}
function qy(e, t) {
  if (e === "input" || e === "change") return Ao(t);
}
function Ky(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : Ky;
function jr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ks.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function Xa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ja(e, t) {
  var n = Xa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
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
    n = Xa(n);
  }
}
function Td(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Td(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pd() {
  for (var e = window, t = Qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qi(e.document);
  }
  return t;
}
function Pu(e) {
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
function Qy(e) {
  var t = Pd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Td(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ja(n, o));
        var s = Ja(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Yy = pt && "documentMode" in document && 11 >= document.documentMode,
  _n = null,
  dl = null,
  _r = null,
  hl = !1;
function Ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hl ||
    _n == null ||
    _n !== Qi(r) ||
    ((r = _n),
    "selectionStart" in r && Pu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_r && jr(_r, r)) ||
      ((_r = r),
      (r = to(dl, "onSelect")),
      0 < r.length &&
        ((t = new Cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _n))));
}
function mi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionend: mi("Transition", "TransitionEnd"),
  },
  ys = {},
  Nd = {};
pt &&
  ((Nd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function Do(e) {
  if (ys[e]) return ys[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nd) return (ys[e] = t[n]);
  return e;
}
var Od = Do("animationend"),
  Ld = Do("animationiteration"),
  Ad = Do("animationstart"),
  Dd = Do("transitionend"),
  jd = new Map(),
  Za =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wt(e, t) {
  jd.set(e, t), mn(t, [e]);
}
for (var gs = 0; gs < Za.length; gs++) {
  var vs = Za[gs],
    Xy = vs.toLowerCase(),
    Jy = vs[0].toUpperCase() + vs.slice(1);
  Wt(Xy, "on" + Jy);
}
Wt(Od, "onAnimationEnd");
Wt(Ld, "onAnimationIteration");
Wt(Ad, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Dd, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gy = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function ec(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Xm(r, t, void 0, e), (e.currentTarget = null);
}
function Md(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          ec(i, l, a), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          ec(i, l, a), (o = u);
        }
    }
  }
  if (Xi) throw ((e = ul), (Xi = !1), (ul = null), e);
}
function $(e, t) {
  var n = t[vl];
  n === void 0 && (n = t[vl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zd(t, e, 2, !1), n.add(r));
}
function ws(e, t, n) {
  var r = 0;
  t && (r |= 4), zd(n, e, r, t);
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function Mr(e) {
  if (!e[yi]) {
    (e[yi] = !0),
      Hf.forEach(function (n) {
        n !== "selectionchange" && (Gy.has(n) || ws(n, !1, e), ws(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yi] || ((t[yi] = !0), ws("selectionchange", !1, t));
  }
}
function zd(e, t, n, r) {
  switch (wd(t)) {
    case 1:
      var i = dy;
      break;
    case 4:
      i = hy;
      break;
    default:
      i = ku;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ll || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ss(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo), u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = en(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  od(function () {
    var a = o,
      c = wu(n),
      f = [];
    e: {
      var p = jd.get(e);
      if (p !== void 0) {
        var g = Cu,
          y = e;
        switch (e) {
          case "keypress":
            if (ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Py;
            break;
          case "focusin":
            (y = "focus"), (g = hs);
            break;
          case "focusout":
            (y = "blur"), (g = hs);
            break;
          case "beforeblur":
          case "afterblur":
            g = hs;
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
            g = Wa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = yy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ly;
            break;
          case Od:
          case Ld:
          case Ad:
            g = wy;
            break;
          case Dd:
            g = Dy;
            break;
          case "scroll":
            g = py;
            break;
          case "wheel":
            g = My;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Ey;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Va;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          m = v ? (p !== null ? p + "Capture" : null) : p;
        v = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w), m !== null && ((w = Nr(d, m)), w != null && v.push(zr(d, w, h)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < v.length && ((p = new g(p, y, null, n, c)), f.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p && n !== ol && (y = n.relatedTarget || n.fromElement) && (en(y) || y[mt]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? en(y) : null),
              y !== null && ((E = yn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((v = Wa),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Va), (w = "onPointerLeave"), (m = "onPointerEnter"), (d = "pointer")),
            (E = g == null ? p : xn(g)),
            (h = y == null ? p : xn(y)),
            (p = new v(w, d + "leave", g, n, c)),
            (p.target = E),
            (p.relatedTarget = h),
            (w = null),
            en(c) === a &&
              ((v = new v(m, d + "enter", y, n, c)),
              (v.target = h),
              (v.relatedTarget = E),
              (w = v)),
            (E = w),
            g && y)
          )
            t: {
              for (v = g, m = y, d = 0, h = v; h; h = gn(h)) d++;
              for (h = 0, w = m; w; w = gn(w)) h++;
              for (; 0 < d - h; ) (v = gn(v)), d--;
              for (; 0 < h - d; ) (m = gn(m)), h--;
              for (; d--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = gn(v)), (m = gn(m));
              }
              v = null;
            }
          else v = null;
          g !== null && tc(f, p, g, v, !1), y !== null && E !== null && tc(f, E, y, v, !0);
        }
      }
      e: {
        if (
          ((p = a ? xn(a) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var _ = Wy;
        else if (Ka(p))
          if (Cd) _ = qy;
          else {
            _ = Vy;
            var x = Hy;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (_ = by);
        if (_ && (_ = _(e, a))) {
          xd(f, _, n, c);
          break e;
        }
        x && x(e, p, a),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            el(p, "number", p.value);
      }
      switch (((x = a ? xn(a) : window), e)) {
        case "focusin":
          (Ka(x) || x.contentEditable === "true") && ((_n = x), (dl = a), (_r = null));
          break;
        case "focusout":
          _r = dl = _n = null;
          break;
        case "mousedown":
          hl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hl = !1), Ga(f, n, c);
          break;
        case "selectionchange":
          if (Yy) break;
        case "keydown":
        case "keyup":
          Ga(f, n, c);
      }
      var R;
      if (Tu)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        En
          ? _d(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Ed &&
          n.locale !== "ko" &&
          (En || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && En && (R = Sd())
            : ((Rt = c), (xu = "value" in Rt ? Rt.value : Rt.textContent), (En = !0))),
        (x = to(a, C)),
        0 < x.length &&
          ((C = new Ha(C, e, null, n, c)),
          f.push({ event: C, listeners: x }),
          R ? (C.data = R) : ((R = kd(n)), R !== null && (C.data = R)))),
        (R = Iy ? By(e, n) : Fy(e, n)) &&
          ((a = to(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new Ha("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = R)));
    }
    Md(f, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Nr(e, n)),
      o != null && r.unshift(zr(e, o, i)),
      (o = Nr(e, t)),
      o != null && r.push(zr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      i
        ? ((u = Nr(n, o)), u != null && s.unshift(zr(n, u, l)))
        : i || ((u = Nr(n, o)), u != null && s.push(zr(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Zy = /\r\n?/g,
  eg = /\u0000|\uFFFD/g;
function nc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zy,
      `
`
    )
    .replace(eg, "");
}
function gi(e, t, n) {
  if (((t = nc(t)), nc(e) !== t && n)) throw Error(k(425));
}
function no() {}
var pl = null,
  ml = null;
function yl(e, t) {
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
var gl = typeof setTimeout == "function" ? setTimeout : void 0,
  tg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rc = typeof Promise == "function" ? Promise : void 0,
  ng =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rc < "u"
      ? function (e) {
          return rc.resolve(null).then(e).catch(rg);
        }
      : gl;
function rg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Es(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ar(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ar(t);
}
function At(e) {
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
function ic(e) {
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
var Qn = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + Qn,
  Ir = "__reactProps$" + Qn,
  mt = "__reactContainer$" + Qn,
  vl = "__reactEvents$" + Qn,
  ig = "__reactListeners$" + Qn,
  og = "__reactHandles$" + Qn;
function en(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[rt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ic(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = ic(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Gr(e) {
  return (
    (e = e[rt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function jo(e) {
  return e[Ir] || null;
}
var wl = [],
  Cn = -1;
function Ht(e) {
  return { current: e };
}
function W(e) {
  0 > Cn || ((e.current = wl[Cn]), (wl[Cn] = null), Cn--);
}
function U(e, t) {
  Cn++, (wl[Cn] = e.current), (e.current = t);
}
var Ft = {},
  he = Ht(Ft),
  Se = Ht(!1),
  un = Ft;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  W(Se), W(he);
}
function oc(e, t, n) {
  if (he.current !== Ft) throw Error(k(168));
  U(he, t), U(Se, n);
}
function Id(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Hm(e) || "Unknown", i));
  return q({}, n, r);
}
function io(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (un = he.current),
    U(he, e),
    U(Se, Se.current),
    !0
  );
}
function sc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Id(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Se),
      W(he),
      U(he, e))
    : W(Se),
    U(Se, n);
}
var ut = null,
  Mo = !1,
  _s = !1;
function Bd(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
function sg(e) {
  (Mo = !0), Bd(e);
}
function Vt() {
  if (!_s && ut !== null) {
    _s = !0;
    var e = 0,
      t = F;
    try {
      var n = ut;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ut = null), (Mo = !1);
    } catch (i) {
      throw (ut !== null && (ut = ut.slice(e + 1)), ad(Su, Vt), i);
    } finally {
      (F = t), (_s = !1);
    }
  }
  return null;
}
var Rn = [],
  Tn = 0,
  oo = null,
  so = 0,
  ze = [],
  Ie = 0,
  an = null,
  ct = 1,
  ft = "";
function Xt(e, t) {
  (Rn[Tn++] = so), (Rn[Tn++] = oo), (oo = e), (so = t);
}
function Fd(e, t, n) {
  (ze[Ie++] = ct), (ze[Ie++] = ft), (ze[Ie++] = an), (an = e);
  var r = ct;
  e = ft;
  var i = 32 - Xe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Xe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ct = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (ft = o + e);
  } else (ct = (1 << o) | (n << i) | r), (ft = e);
}
function Nu(e) {
  e.return !== null && (Xt(e, 1), Fd(e, 1, 0));
}
function Ou(e) {
  for (; e === oo; ) (oo = Rn[--Tn]), (Rn[Tn] = null), (so = Rn[--Tn]), (Rn[Tn] = null);
  for (; e === an; )
    (an = ze[--Ie]),
      (ze[Ie] = null),
      (ft = ze[--Ie]),
      (ze[Ie] = null),
      (ct = ze[--Ie]),
      (ze[Ie] = null);
}
var Ne = null,
  Te = null,
  H = !1,
  Qe = null;
function Ud(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Te = At(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: ct, overflow: ft } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Sl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function El(e) {
  if (H) {
    var t = Te;
    if (t) {
      var n = t;
      if (!lc(e, t)) {
        if (Sl(e)) throw Error(k(418));
        t = At(n.nextSibling);
        var r = Ne;
        t && lc(e, t) ? Ud(r, n) : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e));
      }
    } else {
      if (Sl(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e);
    }
  }
}
function uc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ne = e;
}
function vi(e) {
  if (e !== Ne) return !1;
  if (!H) return uc(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !yl(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (Sl(e)) throw ($d(), Error(k(418)));
    for (; t; ) Ud(e, t), (t = At(t.nextSibling));
  }
  if ((uc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Te = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = Ne ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function $d() {
  for (var e = Te; e; ) e = At(e.nextSibling);
}
function Un() {
  (Te = Ne = null), (H = !1);
}
function Lu(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var lg = wt.ReactCurrentBatchConfig;
function lr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function wi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
    ))
  );
}
function ac(e) {
  var t = e._init;
  return t(e._payload);
}
function Wd(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function i(m, d) {
    return (m = zt(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, d, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null ? ((h = h.index), h < d ? ((m.flags |= 2), d) : h) : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, d, h, w) {
    return d === null || d.tag !== 6
      ? ((d = Ns(h, m.mode, w)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d);
  }
  function u(m, d, h, w) {
    var _ = h.type;
    return _ === Sn
      ? c(m, d, h.props.children, w, h.key)
      : d !== null &&
        (d.elementType === _ ||
          (typeof _ == "object" && _ !== null && _.$$typeof === _t && ac(_) === d.type))
      ? ((w = i(d, h.props)), (w.ref = lr(m, d, h)), (w.return = m), w)
      : ((w = $i(h.type, h.key, h.props, null, m.mode, w)),
        (w.ref = lr(m, d, h)),
        (w.return = m),
        w);
  }
  function a(m, d, h, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Os(h, m.mode, w)), (d.return = m), d)
      : ((d = i(d, h.children || [])), (d.return = m), d);
  }
  function c(m, d, h, w, _) {
    return d === null || d.tag !== 7
      ? ((d = on(h, m.mode, w, _)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d);
  }
  function f(m, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Ns("" + d, m.mode, h)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ui:
          return (
            (h = $i(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = lr(m, null, d)),
            (h.return = m),
            h
          );
        case wn:
          return (d = Os(d, m.mode, h)), (d.return = m), d;
        case _t:
          var w = d._init;
          return f(m, w(d._payload), h);
      }
      if (hr(d) || nr(d)) return (d = on(d, m.mode, h, null)), (d.return = m), d;
      wi(m, d);
    }
    return null;
  }
  function p(m, d, h, w) {
    var _ = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return _ !== null ? null : l(m, d, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ui:
          return h.key === _ ? u(m, d, h, w) : null;
        case wn:
          return h.key === _ ? a(m, d, h, w) : null;
        case _t:
          return (_ = h._init), p(m, d, _(h._payload), w);
      }
      if (hr(h) || nr(h)) return _ !== null ? null : c(m, d, h, w, null);
      wi(m, h);
    }
    return null;
  }
  function g(m, d, h, w, _) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(h) || null), l(d, m, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ui:
          return (m = m.get(w.key === null ? h : w.key) || null), u(d, m, w, _);
        case wn:
          return (m = m.get(w.key === null ? h : w.key) || null), a(d, m, w, _);
        case _t:
          var x = w._init;
          return g(m, d, h, x(w._payload), _);
      }
      if (hr(w) || nr(w)) return (m = m.get(h) || null), c(d, m, w, _, null);
      wi(d, w);
    }
    return null;
  }
  function y(m, d, h, w) {
    for (var _ = null, x = null, R = d, C = (d = 0), B = null; R !== null && C < h.length; C++) {
      R.index > C ? ((B = R), (R = null)) : (B = R.sibling);
      var j = p(m, R, h[C], w);
      if (j === null) {
        R === null && (R = B);
        break;
      }
      e && R && j.alternate === null && t(m, R),
        (d = o(j, d, C)),
        x === null ? (_ = j) : (x.sibling = j),
        (x = j),
        (R = B);
    }
    if (C === h.length) return n(m, R), H && Xt(m, C), _;
    if (R === null) {
      for (; C < h.length; C++)
        (R = f(m, h[C], w)),
          R !== null && ((d = o(R, d, C)), x === null ? (_ = R) : (x.sibling = R), (x = R));
      return H && Xt(m, C), _;
    }
    for (R = r(m, R); C < h.length; C++)
      (B = g(R, m, C, h[C], w)),
        B !== null &&
          (e && B.alternate !== null && R.delete(B.key === null ? C : B.key),
          (d = o(B, d, C)),
          x === null ? (_ = B) : (x.sibling = B),
          (x = B));
    return (
      e &&
        R.forEach(function (Ce) {
          return t(m, Ce);
        }),
      H && Xt(m, C),
      _
    );
  }
  function v(m, d, h, w) {
    var _ = nr(h);
    if (typeof _ != "function") throw Error(k(150));
    if (((h = _.call(h)), h == null)) throw Error(k(151));
    for (
      var x = (_ = null), R = d, C = (d = 0), B = null, j = h.next();
      R !== null && !j.done;
      C++, j = h.next()
    ) {
      R.index > C ? ((B = R), (R = null)) : (B = R.sibling);
      var Ce = p(m, R, j.value, w);
      if (Ce === null) {
        R === null && (R = B);
        break;
      }
      e && R && Ce.alternate === null && t(m, R),
        (d = o(Ce, d, C)),
        x === null ? (_ = Ce) : (x.sibling = Ce),
        (x = Ce),
        (R = B);
    }
    if (j.done) return n(m, R), H && Xt(m, C), _;
    if (R === null) {
      for (; !j.done; C++, j = h.next())
        (j = f(m, j.value, w)),
          j !== null && ((d = o(j, d, C)), x === null ? (_ = j) : (x.sibling = j), (x = j));
      return H && Xt(m, C), _;
    }
    for (R = r(m, R); !j.done; C++, j = h.next())
      (j = g(R, m, C, j.value, w)),
        j !== null &&
          (e && j.alternate !== null && R.delete(j.key === null ? C : j.key),
          (d = o(j, d, C)),
          x === null ? (_ = j) : (x.sibling = j),
          (x = j));
    return (
      e &&
        R.forEach(function (er) {
          return t(m, er);
        }),
      H && Xt(m, C),
      _
    );
  }
  function E(m, d, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Sn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case ui:
          e: {
            for (var _ = h.key, x = d; x !== null; ) {
              if (x.key === _) {
                if (((_ = h.type), _ === Sn)) {
                  if (x.tag === 7) {
                    n(m, x.sibling), (d = i(x, h.props.children)), (d.return = m), (m = d);
                    break e;
                  }
                } else if (
                  x.elementType === _ ||
                  (typeof _ == "object" && _ !== null && _.$$typeof === _t && ac(_) === x.type)
                ) {
                  n(m, x.sibling),
                    (d = i(x, h.props)),
                    (d.ref = lr(m, x, h)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, x);
                break;
              } else t(m, x);
              x = x.sibling;
            }
            h.type === Sn
              ? ((d = on(h.props.children, m.mode, w, h.key)), (d.return = m), (m = d))
              : ((w = $i(h.type, h.key, h.props, null, m.mode, w)),
                (w.ref = lr(m, d, h)),
                (w.return = m),
                (m = w));
          }
          return s(m);
        case wn:
          e: {
            for (x = h.key; d !== null; ) {
              if (d.key === x)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(m, d.sibling), (d = i(d, h.children || [])), (d.return = m), (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = Os(h, m.mode, w)), (d.return = m), (m = d);
          }
          return s(m);
        case _t:
          return (x = h._init), E(m, d, x(h._payload), w);
      }
      if (hr(h)) return y(m, d, h, w);
      if (nr(h)) return v(m, d, h, w);
      wi(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = Ns(h, m.mode, w)), (d.return = m), (m = d)),
        s(m))
      : n(m, d);
  }
  return E;
}
var $n = Wd(!0),
  Hd = Wd(!1),
  lo = Ht(null),
  uo = null,
  Pn = null,
  Au = null;
function Du() {
  Au = Pn = uo = null;
}
function ju(e) {
  var t = lo.current;
  W(lo), (e._currentValue = t);
}
function _l(e, t, n) {
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
function Mn(e, t) {
  (uo = e),
    (Au = Pn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (we = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (Au !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
      if (uo === null) throw Error(k(308));
      (Pn = e), (uo.dependencies = { lanes: 0, firstContext: e });
    } else Pn = Pn.next = e;
  return t;
}
var tn = null;
function Mu(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function Vd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Mu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yt(e, r)
  );
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function zu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), yt(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Mu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yt(e, n)
  );
}
function Mi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
function cc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ao(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      a = u.next;
    (u.next = null), s === null ? (o = a) : (s.next = a), (s = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s && (l === null ? (c.firstBaseUpdate = a) : (l.next = a), (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = a = u = null), (l = o);
    do {
      var p = l.lane,
        g = l.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((p = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, p);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = v.payload), (p = typeof y == "function" ? y.call(g, f, p) : y), p == null))
                break e;
              f = q({}, f, p);
              break e;
            case 2:
              kt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (p = i.effects), p === null ? (i.effects = [l]) : p.push(l));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((a = c = g), (u = f)) : (c = c.next = g),
          (s |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l), (l = p.next), (p.next = null), (i.lastBaseUpdate = p), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (fn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function fc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Zr = {},
  ot = Ht(Zr),
  Br = Ht(Zr),
  Fr = Ht(Zr);
function nn(e) {
  if (e === Zr) throw Error(k(174));
  return e;
}
function Iu(e, t) {
  switch ((U(Fr, t), U(Br, e), U(ot, Zr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = nl(t, e));
  }
  W(ot), U(ot, t);
}
function Wn() {
  W(ot), W(Br), W(Fr);
}
function qd(e) {
  nn(Fr.current);
  var t = nn(ot.current),
    n = nl(t, e.type);
  t !== n && (U(Br, e), U(ot, n));
}
function Bu(e) {
  Br.current === e && (W(ot), W(Br));
}
var V = Ht(0);
function co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ks = [];
function Fu() {
  for (var e = 0; e < ks.length; e++) ks[e]._workInProgressVersionPrimary = null;
  ks.length = 0;
}
var zi = wt.ReactCurrentDispatcher,
  xs = wt.ReactCurrentBatchConfig,
  cn = 0,
  b = null,
  ee = null,
  ie = null,
  fo = !1,
  kr = !1,
  Ur = 0,
  ug = 0;
function ce() {
  throw Error(k(321));
}
function Uu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function $u(e, t, n, r, i, o) {
  if (
    ((cn = o),
    (b = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zi.current = e === null || e.memoizedState === null ? dg : hg),
    (e = n(r, i)),
    kr)
  ) {
    o = 0;
    do {
      if (((kr = !1), (Ur = 0), 25 <= o)) throw Error(k(301));
      (o += 1), (ie = ee = null), (t.updateQueue = null), (zi.current = pg), (e = n(r, i));
    } while (kr);
  }
  if (
    ((zi.current = ho),
    (t = ee !== null && ee.next !== null),
    (cn = 0),
    (ie = ee = b = null),
    (fo = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Wu() {
  var e = Ur !== 0;
  return (Ur = 0), e;
}
function nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? (b.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function He() {
  if (ee === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ie === null ? b.memoizedState : ie.next;
  if (t !== null) (ie = t), (ee = e);
  else {
    if (e === null) throw Error(k(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      ie === null ? (b.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function $r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ee,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((cn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((l = u = f), (s = r)) : (u = u.next = f), (b.lanes |= c), (fn |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (s = r) : (u.next = l),
      Ze(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (b.lanes |= o), (fn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Rs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ze(o, t.memoizedState) || (we = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Kd() {}
function Qd(e, t) {
  var n = b,
    r = He(),
    i = t(),
    o = !Ze(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (we = !0)),
    (r = r.queue),
    Hu(Jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Wr(9, Xd.bind(null, n, r, i, t), void 0, null), oe === null))
      throw Error(k(349));
    cn & 30 || Yd(n, t, i);
  }
  return i;
}
function Yd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (b.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Gd(t) && Zd(e);
}
function Jd(e, t, n) {
  return n(function () {
    Gd(t) && Zd(e);
  });
}
function Gd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function Zd(e) {
  var t = yt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function dc(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $r,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fg.bind(null, b, e)),
    [t.memoizedState, e]
  );
}
function Wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (b.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function eh() {
  return He().memoizedState;
}
function Ii(e, t, n, r) {
  var i = nt();
  (b.flags |= e), (i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r));
}
function zo(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var s = ee.memoizedState;
    if (((o = s.destroy), r !== null && Uu(r, s.deps))) {
      i.memoizedState = Wr(t, n, o, r);
      return;
    }
  }
  (b.flags |= e), (i.memoizedState = Wr(1 | t, n, o, r));
}
function hc(e, t) {
  return Ii(8390656, 8, e, t);
}
function Hu(e, t) {
  return zo(2048, 8, e, t);
}
function th(e, t) {
  return zo(4, 2, e, t);
}
function nh(e, t) {
  return zo(4, 4, e, t);
}
function rh(e, t) {
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
function ih(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), zo(4, 4, rh.bind(null, t, e), n);
}
function Vu() {}
function oh(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function sh(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lh(e, t, n) {
  return cn & 21
    ? (Ze(n, t) || ((n = dd()), (b.lanes |= n), (fn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function ag(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xs.transition;
  xs.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (xs.transition = r);
  }
}
function uh() {
  return He().memoizedState;
}
function cg(e, t, n) {
  var r = Mt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ah(e)))
    ch(t, n);
  else if (((n = Vd(e, t, n, r)), n !== null)) {
    var i = me();
    Je(n, e, r, i), fh(n, t, r);
  }
}
function fg(e, t, n) {
  var r = Mt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ah(e)) ch(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ze(l, s))) {
          var u = t.interleaved;
          u === null ? ((i.next = i), Mu(t)) : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vd(e, t, i, r)), n !== null && ((i = me()), Je(n, e, r, i), fh(n, t, r));
  }
}
function ah(e) {
  var t = e.alternate;
  return e === b || (t !== null && t === b);
}
function ch(e, t) {
  kr = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function fh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
var ho = {
    readContext: We,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  dg = {
    readContext: We,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: hc,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ii(4194308, 4, rh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ii(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ii(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = nt();
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
        (e = e.dispatch = cg.bind(null, b, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dc,
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = dc(!1),
        t = e[0];
      return (e = ag.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = b,
        i = nt();
      if (H) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(k(349));
        cn & 30 || Yd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        hc(Jd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Wr(9, Xd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = oe.identifierPrefix;
      if (H) {
        var n = ft,
          r = ct;
        (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ug++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hg = {
    readContext: We,
    useCallback: oh,
    useContext: We,
    useEffect: Hu,
    useImperativeHandle: ih,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: Cs,
    useRef: eh,
    useState: function () {
      return Cs($r);
    },
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      var t = He();
      return lh(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Cs($r)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Qd,
    useId: uh,
    unstable_isNewReconciler: !1,
  },
  pg = {
    readContext: We,
    useCallback: oh,
    useContext: We,
    useEffect: Hu,
    useImperativeHandle: ih,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: Rs,
    useRef: eh,
    useState: function () {
      return Rs($r);
    },
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      var t = He();
      return ee === null ? (t.memoizedState = e) : lh(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Rs($r)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Qd,
    useId: uh,
    unstable_isNewReconciler: !1,
  };
function be(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Io = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Mt(e),
      o = dt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Dt(e, o, i)),
      t !== null && (Je(t, e, i, r), Mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Mt(e),
      o = dt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Dt(e, o, i)),
      t !== null && (Je(t, e, i, r), Mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Mt(e),
      i = dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Dt(e, i, r)),
      t !== null && (Je(t, e, r, n), Mi(t, e, r));
  },
};
function pc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !jr(n, r) || !jr(i, o)
      : !0
  );
}
function dh(e, t, n) {
  var r = !1,
    i = Ft,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((i = Ee(t) ? un : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Fn(e, i) : Ft)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Io),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function mc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Io.enqueueReplaceState(t, t.state, null);
}
function xl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), zu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = We(o))
    : ((o = Ee(t) ? un : he.current), (i.context = Fn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (kl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Io.enqueueReplaceState(i, i.state, null),
      ao(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ts(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Cl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mg = typeof WeakMap == "function" ? WeakMap : Map;
function hh(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mo || ((mo = !0), (Ml = r)), Cl(e, t);
    }),
    n
  );
}
function ph(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Cl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Cl(e, t), typeof r != "function" && (jt === null ? (jt = new Set([this])) : jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function yc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ng.bind(null, e, t, n)), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = dt(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yg = wt.ReactCurrentOwner,
  we = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Hd(t, null, n, r) : $n(t, e.child, n, r);
}
function wc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Mn(t, i),
    (r = $u(e, t, n, r, o, i)),
    (n = Wu()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), gt(e, t, i))
      : (H && n && Nu(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function Sc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Gu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), mh(e, t, o, r, i))
      : ((e = $i(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : jr), n(s, r) && e.ref === t.ref))
      return gt(e, t, i);
  }
  return (t.flags |= 1), (e = zt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function mh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (jr(o, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), gt(e, t, i);
  }
  return Rl(e, t, n, r, i);
}
function yh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(On, Re),
        (Re |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          U(On, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(On, Re),
        (Re |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), U(On, Re), (Re |= r);
  return pe(e, t, i, n), t.child;
}
function gh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Rl(e, t, n, r, i) {
  var o = Ee(n) ? un : he.current;
  return (
    (o = Fn(t, o)),
    Mn(t, i),
    (n = $u(e, t, n, r, o, i)),
    (r = Wu()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), gt(e, t, i))
      : (H && r && Nu(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function Ec(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    io(t);
  } else o = !1;
  if ((Mn(t, i), t.stateNode === null)) Bi(e, t), dh(t, n, r), xl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = We(a))
      : ((a = Ee(n) ? un : he.current), (a = Fn(t, a)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== a) && mc(t, s, r, a)),
      (kt = !1);
    var p = t.memoizedState;
    (s.state = p),
      ao(t, r, s, i),
      (u = t.memoizedState),
      l !== r || p !== u || Se.current || kt
        ? (typeof c == "function" && (kl(t, n, c, r), (u = t.memoizedState)),
          (l = kt || pc(t, n, l, r, p, u, a))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      bd(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : be(t.type, l)),
      (s.props = a),
      (f = t.pendingProps),
      (p = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = We(u))
        : ((u = Ee(n) ? un : he.current), (u = Fn(t, u)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || p !== u) && mc(t, s, r, u)),
      (kt = !1),
      (p = t.memoizedState),
      (s.state = p),
      ao(t, r, s, i);
    var y = t.memoizedState;
    l !== f || p !== y || Se.current || kt
      ? (typeof g == "function" && (kl(t, n, g, r), (y = t.memoizedState)),
        (a = kt || pc(t, n, a, r, p, y, u) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = u),
        (r = a))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Tl(e, t, n, r, o, i);
}
function Tl(e, t, n, r, i, o) {
  gh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && sc(t, n, !1), gt(e, t, o);
  (r = t.stateNode), (yg.current = t);
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = $n(t, e.child, null, o)), (t.child = $n(t, null, l, o)))
      : pe(e, t, l, o),
    (t.memoizedState = r.state),
    i && sc(t, n, !0),
    t.child
  );
}
function vh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    Iu(e, t.containerInfo);
}
function _c(e, t, n, r, i) {
  return Un(), Lu(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var Pl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wh(e, t, n) {
  var r = t.pendingProps,
    i = V.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    U(V, i & 1),
    e === null)
  )
    return (
      El(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Uo(s, r, 0, null)),
              (e = on(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Nl(n)),
              (t.memoizedState = Pl),
              e)
            : bu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return gg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = zt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = zt(l, o)) : ((o = on(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Nl(n)
          : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = zt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bu(e, t) {
  return (t = Uo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Si(e, t, n, r) {
  return (
    r !== null && Lu(r),
    $n(t, e.child, null, n),
    (e = bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ts(Error(k(422)))), Si(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Uo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = on(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && $n(t, e.child, null, s),
        (t.child.memoizedState = Nl(s)),
        (t.memoizedState = Pl),
        o);
  if (!(t.mode & 1)) return Si(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = Ts(o, r, void 0)), Si(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), we || l)) {
    if (((r = oe), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), yt(e, i), Je(r, e, i, -1));
    }
    return Ju(), (r = Ts(Error(k(421)))), Si(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = Og.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (Te = At(i.nextSibling)),
      (Ne = t),
      (H = !0),
      (Qe = null),
      e !== null &&
        ((ze[Ie++] = ct),
        (ze[Ie++] = ft),
        (ze[Ie++] = an),
        (ct = e.id),
        (ft = e.overflow),
        (an = t)),
      (t = bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function kc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _l(e.return, t, n);
}
function Ps(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = V.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
        else if (e.tag === 19) kc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && co(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Ps(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && co(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ps(t, !0, n, null, o);
        break;
      case "together":
        Ps(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (fn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vg(e, t, n) {
  switch (t.tag) {
    case 3:
      vh(t), Un();
      break;
    case 5:
      qd(t);
      break;
    case 1:
      Ee(t.type) && io(t);
      break;
    case 4:
      Iu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(lo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wh(e, t, n)
          : (U(V, V.current & 1), (e = gt(e, t, n)), e !== null ? e.sibling : null);
      U(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yh(e, t, n);
  }
  return gt(e, t, n);
}
var Eh, Ol, _h, kh;
Eh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ol = function () {};
_h = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), nn(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Gs(e, i)), (r = Gs(e, r)), (o = []);
        break;
      case "select":
        (i = q({}, i, { value: void 0 })), (r = q({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (i = tl(e, i)), (r = tl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = no);
    }
    rl(n, r);
    var s;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var l = i[a];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Tr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((l = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
      )
        if (a === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) || (u && u.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") || (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Tr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && $("scroll", e), o || l === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
kh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function wg(e, t, n) {
  var r = t.pendingProps;
  switch ((Ou(t), t.tag)) {
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
      return fe(t), null;
    case 1:
      return Ee(t.type) && ro(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wn(),
        W(Se),
        W(he),
        Fu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (Bl(Qe), (Qe = null)))),
        Ol(e, t),
        fe(t),
        null
      );
    case 5:
      Bu(t);
      var i = nn(Fr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _h(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return fe(t), null;
        }
        if (((e = nn(ot.current)), vi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[rt] = t), (r[Ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < mr.length; i++) $(mr[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Aa(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), $("invalid", r);
              break;
            case "textarea":
              ja(r, o), $("invalid", r);
          }
          rl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 && gi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 && gi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Tr.hasOwnProperty(s) && l != null && s === "onScroll" && $("scroll", r);
            }
          switch (n) {
            case "input":
              ai(r), Da(r, o, !0);
              break;
            case "textarea":
              ai(r), Ma(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = no);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[rt] = t),
            (e[Ir] = r),
            Eh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = il(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mr.length; i++) $(mr[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                Aa(e, r), (i = Gs(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = q({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                ja(e, r), (i = tl(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            rl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? ed(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Gf(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Pr(e, u)
                    : typeof u == "number" && Pr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Tr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && $("scroll", e)
                      : u != null && mu(e, o, u, s));
              }
            switch (n) {
              case "input":
                ai(e), Da(e, r, !1);
                break;
              case "textarea":
                ai(e), Ma(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ln(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && Ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = no);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) kh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = nn(Fr.current)), nn(ot.current), vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (o = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                gi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (W(V),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Te !== null && t.mode & 1 && !(t.flags & 128))
          $d(), Un(), (t.flags |= 98560), (o = !1);
        else if (((o = vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
              throw Error(k(317));
            o[rt] = t;
          } else Un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (o = !1);
        } else Qe !== null && (Bl(Qe), (Qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || V.current & 1 ? ne === 0 && (ne = 3) : Ju())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return Wn(), Ol(e, t), e === null && Mr(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return ju(t.type._context), fe(t), null;
    case 17:
      return Ee(t.type) && ro(), fe(t), null;
    case 19:
      if ((W(V), (o = t.memoizedState), o === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ur(o, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = co(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ur(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return U(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > Vn &&
            ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = co(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return fe(t), null;
          } else
            2 * Y() - o.renderingStartTime > Vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = V.current),
          U(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        Xu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Sg(e, t) {
  switch ((Ou(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && ro(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wn(),
        W(Se),
        W(he),
        Fu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Bu(t), null;
    case 13:
      if ((W(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Un();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return W(V), null;
    case 4:
      return Wn(), null;
    case 10:
      return ju(t.type._context), null;
    case 22:
    case 23:
      return Xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ei = !1,
  de = !1,
  Eg = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function Ll(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var xc = !1;
function _g(e, t) {
  if (((pl = Zi), (e = Pd()), Pu(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            c = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (p = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++a === i && (l = s),
                p === o && ++c === r && (u = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ml = { focusedElem: e, selectionRange: n }, Zi = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    E = y.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : be(t.type, v), E);
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (w) {
          K(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (y = xc), (xc = !1), y;
}
function xr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ll(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Bo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function Al(e) {
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
function xh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[rt], delete t[Ir], delete t[vl], delete t[ig], delete t[og])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ch(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ch(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dl(e, t, n), e = e.sibling; e !== null; ) Dl(e, t, n), (e = e.sibling);
}
function jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jl(e, t, n), e = e.sibling; e !== null; ) jl(e, t, n), (e = e.sibling);
}
var le = null,
  qe = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) Rh(e, t, n), (n = n.sibling);
}
function Rh(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(Oo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || Nn(n, t);
    case 6:
      var r = le,
        i = qe;
      (le = null),
        St(e, t, n),
        (le = r),
        (qe = i),
        le !== null &&
          (qe
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (qe
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8 ? Es(e.parentNode, n) : e.nodeType === 1 && Es(e, n),
            Ar(e))
          : Es(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = qe),
        (le = n.stateNode.containerInfo),
        (qe = !0),
        St(e, t, n),
        (le = r),
        (qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag), s !== void 0 && (o & 2 || o & 4) && Ll(n, t, s), (i = i.next);
        } while (i !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (!de && (Nn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          K(n, t, l);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), St(e, t, n), (de = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function Rc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Eg()),
      t.forEach(function (r) {
        var i = Lg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (le = l.stateNode), (qe = !1);
              break e;
            case 3:
              (le = l.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (le = l.stateNode.containerInfo), (qe = !0);
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(k(160));
        Rh(o, s, i), (le = null), (qe = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        K(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Th(t, e), (t = t.sibling);
}
function Th(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), tt(e), r & 4)) {
        try {
          xr(3, e, e.return), Bo(3, e);
        } catch (v) {
          K(e, e.return, v);
        }
        try {
          xr(5, e, e.return);
        } catch (v) {
          K(e, e.return, v);
        }
      }
      break;
    case 1:
      Ve(t, e), tt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if ((Ve(t, e), tt(e), r & 512 && n !== null && Nn(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Pr(i, "");
        } catch (v) {
          K(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Yf(i, o), il(l, s);
            var a = il(l, o);
            for (s = 0; s < u.length; s += 2) {
              var c = u[s],
                f = u[s + 1];
              c === "style"
                ? ed(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Gf(i, f)
                : c === "children"
                ? Pr(i, f)
                : mu(i, c, f, a);
            }
            switch (l) {
              case "input":
                Zs(i, o);
                break;
              case "textarea":
                Xf(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Ln(i, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ln(i, !!o.multiple, o.defaultValue, !0)
                      : Ln(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ir] = o;
          } catch (v) {
            K(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          K(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((Ve(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ar(t.containerInfo);
        } catch (v) {
          K(e, e.return, v);
        }
      break;
    case 4:
      Ve(t, e), tt(e);
      break;
    case 13:
      Ve(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (Qu = Y())),
        r & 4 && Rc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (a = de) || c), Ve(t, e), (de = a)) : Ve(t, e),
        tt(e),
        r & 8192)
      ) {
        if (((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !c && e.mode & 1))
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((p = N), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xr(4, p, p.return);
                  break;
                case 1:
                  Nn(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      K(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Nn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Pc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (N = g)) : Pc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (u = f.memoizedProps.style),
                      (s = u != null && u.hasOwnProperty("display") ? u.display : null),
                      (l.style.display = Zf("display", s)));
              } catch (v) {
                K(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (v) {
                K(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), tt(e), r & 4 && Rc(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ch(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Pr(i, ""), (r.flags &= -33));
          var o = Cc(e);
          jl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Cc(e);
          Dl(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      K(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kg(e, t, n) {
  (N = e), Ph(e);
}
function Ph(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ei;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || de;
        l = Ei;
        var a = de;
        if (((Ei = s), (de = u) && !a))
          for (N = i; N !== null; )
            (s = N),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Nc(i)
                : u !== null
                ? ((u.return = s), (N = u))
                : Nc(i);
        for (; o !== null; ) (N = o), Ph(o), (o = o.sibling);
        (N = i), (Ei = l), (de = a);
      }
      Tc(e);
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : Tc(e);
  }
}
function Tc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || Bo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && fc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                fc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ar(f);
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
              throw Error(k(163));
          }
        de || (t.flags & 512 && Al(t));
      } catch (p) {
        K(t, t.return, p);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Pc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Nc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bo(4, t);
          } catch (u) {
            K(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              K(t, i, u);
            }
          }
          var o = t.return;
          try {
            Al(t);
          } catch (u) {
            K(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Al(t);
          } catch (u) {
            K(t, s, u);
          }
      }
    } catch (u) {
      K(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (N = l);
      break;
    }
    N = t.return;
  }
}
var xg = Math.ceil,
  po = wt.ReactCurrentDispatcher,
  qu = wt.ReactCurrentOwner,
  Ue = wt.ReactCurrentBatchConfig,
  I = 0,
  oe = null,
  J = null,
  ue = 0,
  Re = 0,
  On = Ht(0),
  ne = 0,
  Hr = null,
  fn = 0,
  Fo = 0,
  Ku = 0,
  Cr = null,
  ve = null,
  Qu = 0,
  Vn = 1 / 0,
  lt = null,
  mo = !1,
  Ml = null,
  jt = null,
  _i = !1,
  Tt = null,
  yo = 0,
  Rr = 0,
  zl = null,
  Fi = -1,
  Ui = 0;
function me() {
  return I & 6 ? Y() : Fi !== -1 ? Fi : (Fi = Y());
}
function Mt(e) {
  return e.mode & 1
    ? I & 2 && ue !== 0
      ? ue & -ue
      : lg.transition !== null
      ? (Ui === 0 && (Ui = dd()), Ui)
      : ((e = F), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wd(e.type))), e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (zl = null), Error(k(185)));
  Xr(e, n, r),
    (!(I & 2) || e !== oe) &&
      (e === oe && (!(I & 2) && (Fo |= n), ne === 4 && Ct(e, ue)),
      _e(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Vn = Y() + 500), Mo && Vt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  ly(e, t);
  var r = Gi(e, e === oe ? ue : 0);
  if (r === 0) n !== null && Ba(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ba(n), t === 1))
      e.tag === 0 ? sg(Oc.bind(null, e)) : Bd(Oc.bind(null, e)),
        ng(function () {
          !(I & 6) && Vt();
        }),
        (n = null);
    else {
      switch (hd(r)) {
        case 1:
          n = Su;
          break;
        case 4:
          n = cd;
          break;
        case 16:
          n = Ji;
          break;
        case 536870912:
          n = fd;
          break;
        default:
          n = Ji;
      }
      n = zh(n, Nh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nh(e, t) {
  if (((Fi = -1), (Ui = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n) return null;
  var r = Gi(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = go(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = Lh();
    (oe !== e || ue !== t) && ((lt = null), (Vn = Y() + 500), rn(e, t));
    do
      try {
        Tg();
        break;
      } catch (l) {
        Oh(e, l);
      }
    while (!0);
    Du(), (po.current = o), (I = i), J !== null ? (t = 0) : ((oe = null), (ue = 0), (t = ne));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = al(e)), i !== 0 && ((r = i), (t = Il(e, i)))), t === 1))
      throw ((n = Hr), rn(e, 0), Ct(e, r), _e(e, Y()), n);
    if (t === 6) Ct(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Cg(i) &&
          ((t = go(e, r)), t === 2 && ((o = al(e)), o !== 0 && ((r = o), (t = Il(e, o)))), t === 1))
      )
        throw ((n = Hr), rn(e, 0), Ct(e, r), _e(e, Y()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Jt(e, ve, lt);
          break;
        case 3:
          if ((Ct(e, r), (r & 130023424) === r && ((t = Qu + 500 - Y()), 10 < t))) {
            if (Gi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = gl(Jt.bind(null, e, ve, lt), t);
            break;
          }
          Jt(e, ve, lt);
          break;
        case 4:
          if ((Ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Xe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Y() - r),
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
                : 1960 * xg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gl(Jt.bind(null, e, ve, lt), r);
            break;
          }
          Jt(e, ve, lt);
          break;
        case 5:
          Jt(e, ve, lt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return _e(e, Y()), e.callbackNode === n ? Nh.bind(null, e) : null;
}
function Il(e, t) {
  var n = Cr;
  return (
    e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    (e = go(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && Bl(t)),
    e
  );
}
function Bl(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function Cg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ct(e, t) {
  for (
    t &= ~Ku, t &= ~Fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Oc(e) {
  if (I & 6) throw Error(k(327));
  zn();
  var t = Gi(e, 0);
  if (!(t & 1)) return _e(e, Y()), null;
  var n = go(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = al(e);
    r !== 0 && ((t = r), (n = Il(e, r)));
  }
  if (n === 1) throw ((n = Hr), rn(e, 0), Ct(e, t), _e(e, Y()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Jt(e, ve, lt), _e(e, Y()), null
  );
}
function Yu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Vn = Y() + 500), Mo && Vt());
  }
}
function dn(e) {
  Tt !== null && Tt.tag === 0 && !(I & 6) && zn();
  var t = I;
  I |= 1;
  var n = Ue.transition,
    r = F;
  try {
    if (((Ue.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ue.transition = n), (I = t), !(I & 6) && Vt();
  }
}
function Xu() {
  (Re = On.current), W(On);
}
function rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tg(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          Wn(), W(Se), W(he), Fu();
          break;
        case 5:
          Bu(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          W(V);
          break;
        case 19:
          W(V);
          break;
        case 10:
          ju(r.type._context);
          break;
        case 22:
        case 23:
          Xu();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (J = e = zt(e.current, null)),
    (ue = Re = t),
    (ne = 0),
    (Hr = null),
    (Ku = Fo = fn = 0),
    (ve = Cr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function Oh(e, t) {
  do {
    var n = J;
    try {
      if ((Du(), (zi.current = ho), fo)) {
        for (var r = b.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        ((cn = 0),
        (ie = ee = b = null),
        (kr = !1),
        (Ur = 0),
        (qu.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Hr = t), (J = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = gc(s);
          if (g !== null) {
            (g.flags &= -257), vc(g, s, l, o, t), g.mode & 1 && yc(o, a, t), (t = g), (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              yc(o, a, t), Ju();
              break e;
            }
            u = Error(k(426));
          }
        } else if (H && l.mode & 1) {
          var E = gc(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), vc(E, s, l, o, t), Lu(Hn(u, l));
            break e;
          }
        }
        (o = u = Hn(u, l)), ne !== 4 && (ne = 2), Cr === null ? (Cr = [o]) : Cr.push(o), (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = hh(o, u, t);
              cc(o, m);
              break e;
            case 1:
              l = u;
              var d = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (jt === null || !jt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = ph(o, l, t);
                cc(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Dh(n);
    } catch (_) {
      (t = _), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lh() {
  var e = po.current;
  return (po.current = ho), e === null ? ho : e;
}
function Ju() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null || (!(fn & 268435455) && !(Fo & 268435455)) || Ct(oe, ue);
}
function go(e, t) {
  var n = I;
  I |= 2;
  var r = Lh();
  (oe !== e || ue !== t) && ((lt = null), rn(e, t));
  do
    try {
      Rg();
      break;
    } catch (i) {
      Oh(e, i);
    }
  while (!0);
  if ((Du(), (I = n), (po.current = r), J !== null)) throw Error(k(261));
  return (oe = null), (ue = 0), ne;
}
function Rg() {
  for (; J !== null; ) Ah(J);
}
function Tg() {
  for (; J !== null && !Gm(); ) Ah(J);
}
function Ah(e) {
  var t = Mh(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps), t === null ? Dh(e) : (J = t), (qu.current = null);
}
function Dh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sg(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (J = null);
        return;
      }
    } else if (((n = wg(n, t, Re)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Jt(e, t, n) {
  var r = F,
    i = Ue.transition;
  try {
    (Ue.transition = null), (F = 1), Pg(e, t, n, r);
  } finally {
    (Ue.transition = i), (F = r);
  }
  return null;
}
function Pg(e, t, n, r) {
  do zn();
  while (Tt !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (uy(e, o),
    e === oe && ((J = oe = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _i ||
      ((_i = !0),
      zh(Ji, function () {
        return zn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ue.transition), (Ue.transition = null);
    var s = F;
    F = 1;
    var l = I;
    (I |= 4),
      (qu.current = null),
      _g(e, n),
      Th(n, e),
      Qy(ml),
      (Zi = !!pl),
      (ml = pl = null),
      (e.current = n),
      kg(n),
      Zm(),
      (I = l),
      (F = s),
      (Ue.transition = o);
  } else e.current = n;
  if (
    (_i && ((_i = !1), (Tt = e), (yo = i)),
    (o = e.pendingLanes),
    o === 0 && (jt = null),
    ny(n.stateNode),
    _e(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (mo) throw ((mo = !1), (e = Ml), (Ml = null), e);
  return (
    yo & 1 && e.tag !== 0 && zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === zl ? Rr++ : ((Rr = 0), (zl = e))) : (Rr = 0),
    Vt(),
    null
  );
}
function zn() {
  if (Tt !== null) {
    var e = hd(yo),
      t = Ue.transition,
      n = F;
    try {
      if (((Ue.transition = null), (F = 16 > e ? 16 : e), Tt === null)) var r = !1;
      else {
        if (((e = Tt), (Tt = null), (yo = 0), I & 6)) throw Error(k(331));
        var i = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var o = N,
            s = o.child;
          if (N.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (N = a; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (N = f);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var p = c.sibling,
                        g = c.return;
                      if ((xh(c), c === a)) {
                        N = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (N = p);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (N = s);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (N = m);
                break e;
              }
              N = o.return;
            }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          s = N;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (N = h);
          else
            e: for (s = d; N !== null; ) {
              if (((l = N), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bo(9, l);
                  }
                } catch (_) {
                  K(l, l.return, _);
                }
              if (l === s) {
                N = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (N = w);
                break e;
              }
              N = l.return;
            }
        }
        if (((I = i), Vt(), it && typeof it.onPostCommitFiberRoot == "function"))
          try {
            it.onPostCommitFiberRoot(Oo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Ue.transition = t);
    }
  }
  return !1;
}
function Lc(e, t, n) {
  (t = Hn(n, t)),
    (t = hh(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = me()),
    e !== null && (Xr(e, 1, t), _e(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r)))
        ) {
          (e = Hn(n, e)),
            (e = ph(t, e, 1)),
            (t = Dt(t, e, 1)),
            (e = me()),
            t !== null && (Xr(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ng(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ue & n) === n &&
      (ne === 4 || (ne === 3 && (ue & 130023424) === ue && 500 > Y() - Qu) ? rn(e, 0) : (Ku |= n)),
    _e(e, t);
}
function jh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = di), (di <<= 1), !(di & 130023424) && (di = 4194304)) : (t = 1));
  var n = me();
  (e = yt(e, t)), e !== null && (Xr(e, t, n), _e(e, n));
}
function Og(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jh(e, n);
}
function Lg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), jh(e, n);
}
var Mh;
Mh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), vg(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), H && t.flags & 1048576 && Fd(t, so, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bi(e, t), (e = t.pendingProps);
      var i = Fn(t, he.current);
      Mn(t, n), (i = $u(null, t, r, e, i, n));
      var o = Wu();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), io(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            zu(t),
            (i.updater = Io),
            (t.stateNode = i),
            (i._reactInternals = t),
            xl(t, r, e, n),
            (t = Tl(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && Nu(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Dg(r)),
          (e = be(r, e)),
          i)
        ) {
          case 0:
            t = Rl(null, t, r, e, n);
            break e;
          case 1:
            t = Ec(null, t, r, e, n);
            break e;
          case 11:
            t = wc(null, t, r, e, n);
            break e;
          case 14:
            t = Sc(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        Rl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        Ec(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((vh(t), e === null)) throw Error(k(387));
        (r = t.pendingProps), (o = t.memoizedState), (i = o.element), bd(e, t), ao(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Hn(Error(k(423)), t)), (t = _c(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Hn(Error(k(424)), t)), (t = _c(e, t, r, n, i));
            break e;
          } else
            for (
              Te = At(t.stateNode.containerInfo.firstChild),
                Ne = t,
                H = !0,
                Qe = null,
                n = Hd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Un(), r === i)) {
            t = gt(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qd(t),
        e === null && El(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        yl(r, i) ? (s = null) : o !== null && yl(r, o) && (t.flags |= 32),
        gh(e, t),
        pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && El(t), null;
    case 13:
      return wh(e, t, n);
    case 4:
      return (
        Iu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        wc(e, t, r, i, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          U(lo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ze(o.value, s)) {
            if (o.children === i.children && !Se.current) {
              t = gt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = dt(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      _l(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  _l(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Mn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = be(r, t.pendingProps)), (i = be(r.type, i)), Sc(e, t, r, i, n);
    case 15:
      return mh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        Bi(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), io(t)) : (e = !1),
        Mn(t, n),
        dh(t, r, i),
        xl(t, r, i, n),
        Tl(null, t, r, !0, e, n)
      );
    case 19:
      return Sh(e, t, n);
    case 22:
      return yh(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function zh(e, t) {
  return ad(e, t);
}
function Ag(e, t, n, r) {
  (this.tag = e),
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
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new Ag(e, t, n, r);
}
function Gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dg(e) {
  if (typeof e == "function") return Gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gu)) return 11;
    if (e === vu) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
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
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $i(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Gu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Sn:
        return on(n.children, i, o, t);
      case yu:
        (s = 8), (i |= 8);
        break;
      case Qs:
        return (e = Fe(12, n, t, i | 2)), (e.elementType = Qs), (e.lanes = o), e;
      case Ys:
        return (e = Fe(13, n, t, i)), (e.elementType = Ys), (e.lanes = o), e;
      case Xs:
        return (e = Fe(19, n, t, i)), (e.elementType = Xs), (e.lanes = o), e;
      case qf:
        return Uo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vf:
              s = 10;
              break e;
            case bf:
              s = 9;
              break e;
            case gu:
              s = 11;
              break e;
            case vu:
              s = 14;
              break e;
            case _t:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (t = Fe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function on(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function Uo(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)), (e.elementType = qf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function Ns(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function Os(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cs(0)),
    (this.expirationTimes = cs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Zu(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new jg(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Fe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zu(o),
    e
  );
}
function Mg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ih(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Id(e, n, t);
  }
  return t;
}
function Bh(e, t, n, r, i, o, s, l, u) {
  return (
    (e = Zu(n, r, !0, e, i, o, s, l, u)),
    (e.context = Ih(null)),
    (n = e.current),
    (r = me()),
    (i = Mt(n)),
    (o = dt(r, i)),
    (o.callback = t ?? null),
    Dt(n, o, i),
    (e.current.lanes = i),
    Xr(e, i, r),
    _e(e, r),
    e
  );
}
function $o(e, t, n, r) {
  var i = t.current,
    o = me(),
    s = Mt(i);
  return (
    (n = Ih(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(i, t, s)),
    e !== null && (Je(e, i, s, o), Mi(e, i, s)),
    s
  );
}
function vo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ac(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ea(e, t) {
  Ac(e, t), (e = e.alternate) && Ac(e, t);
}
function zg() {
  return null;
}
var Fh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ta(e) {
  this._internalRoot = e;
}
Wo.prototype.render = ta.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  $o(e, t, null, null);
};
Wo.prototype.unmount = ta.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      $o(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function Wo(e) {
  this._internalRoot = e;
}
Wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
    xt.splice(n, 0, e), n === 0 && vd(e);
  }
};
function na(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ho(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dc() {}
function Ig(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = vo(s);
        o.call(a);
      };
    }
    var s = Bh(t, r, e, 0, null, !1, !1, "", Dc);
    return (
      (e._reactRootContainer = s),
      (e[mt] = s.current),
      Mr(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var a = vo(u);
      l.call(a);
    };
  }
  var u = Zu(e, 0, !1, null, null, !1, !1, "", Dc);
  return (
    (e._reactRootContainer = u),
    (e[mt] = u.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      $o(t, u, n, r);
    }),
    u
  );
}
function Vo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = vo(s);
        l.call(u);
      };
    }
    $o(t, s, e, i);
  } else s = Ig(n, t, e, i, r);
  return vo(s);
}
pd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 && (Eu(t, n | 1), _e(t, Y()), !(I & 6) && ((Vn = Y() + 500), Vt()));
      }
      break;
    case 13:
      dn(function () {
        var r = yt(e, 1);
        if (r !== null) {
          var i = me();
          Je(r, e, 1, i);
        }
      }),
        ea(e, 1);
  }
};
_u = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = me();
      Je(t, e, 134217728, n);
    }
    ea(e, 134217728);
  }
};
md = function (e) {
  if (e.tag === 13) {
    var t = Mt(e),
      n = yt(e, t);
    if (n !== null) {
      var r = me();
      Je(n, e, t, r);
    }
    ea(e, t);
  }
};
yd = function () {
  return F;
};
gd = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = jo(r);
            if (!i) throw Error(k(90));
            Qf(r), Zs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Xf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
  }
};
rd = Yu;
id = dn;
var Bg = { usingClientEntryPoint: !1, Events: [Gr, xn, jo, td, nd, Yu] },
  ar = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Fg = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ld(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || zg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ki.isDisabled && ki.supportsFiber)
    try {
      (Oo = ki.inject(Fg)), (it = ki);
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bg;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!na(t)) throw Error(k(200));
  return Mg(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!na(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Fh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Zu(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    new ta(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = ld(t)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
  return dn(e);
};
De.hydrate = function (e, t, n) {
  if (!Ho(t)) throw Error(k(200));
  return Vo(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!na(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Fh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[mt] = t.current),
    Mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Wo(t);
};
De.render = function (e, t, n) {
  if (!Ho(t)) throw Error(k(200));
  return Vo(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!Ho(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (dn(function () {
        Vo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Yu;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ho(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Vo(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function Uh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh);
    } catch (e) {
      console.error(e);
    }
}
Uh(), (Uf.exports = De);
var Ug = Uf.exports,
  jc = Ug;
(qs.createRoot = jc.createRoot), (qs.hydrateRoot = jc.hydrateRoot);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vr() {
  return (
    (Vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vr.apply(this, arguments)
  );
}
var Pt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Pt || (Pt = {}));
const Mc = "popstate";
function $g(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return Fl(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : wo(i);
  }
  return Hg(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function $h(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Wg() {
  return Math.random().toString(36).substr(2, 8);
}
function zc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Fl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Vr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Yn(t) : t,
      { state: n, key: (t && t.key) || r || Wg() }
    )
  );
}
function wo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Hg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Pt.Pop,
    u = null,
    a = c();
  a == null && ((a = 0), s.replaceState(Vr({}, s.state, { idx: a }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = Pt.Pop;
    let E = c(),
      m = E == null ? null : E - a;
    (a = E), u && u({ action: l, location: v.location, delta: m });
  }
  function p(E, m) {
    l = Pt.Push;
    let d = Fl(v.location, E, m);
    a = c() + 1;
    let h = zc(d, a),
      w = v.createHref(d);
    try {
      s.pushState(h, "", w);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      i.location.assign(w);
    }
    o && u && u({ action: l, location: v.location, delta: 1 });
  }
  function g(E, m) {
    l = Pt.Replace;
    let d = Fl(v.location, E, m);
    a = c();
    let h = zc(d, a),
      w = v.createHref(d);
    s.replaceState(h, "", w), o && u && u({ action: l, location: v.location, delta: 0 });
  }
  function y(E) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof E == "string" ? E : wo(E);
    return (
      (d = d.replace(/ $/, "%20")),
      X(m, "No window.location.(origin|href) available to create URL for href: " + d),
      new URL(d, m)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(E) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Mc, f),
        (u = E),
        () => {
          i.removeEventListener(Mc, f), (u = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: y,
    encodeLocation(E) {
      let m = y(E);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: g,
    go(E) {
      return s.go(E);
    },
  };
  return v;
}
var Ic;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(Ic || (Ic = {}));
function Vg(e, t, n) {
  return n === void 0 && (n = "/"), bg(e, t, n, !1);
}
function bg(e, t, n, r) {
  let i = typeof t == "string" ? Yn(t) : t,
    o = ra(i.pathname || "/", n);
  if (o == null) return null;
  let s = Wh(e);
  qg(s);
  let l = null;
  for (let u = 0; l == null && u < s.length; ++u) {
    let a = rv(o);
    l = tv(s[u], a, r);
  }
  return l;
}
function Wh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let u = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (X(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = It([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Wh(o.children, t, c, a)),
      !(o.path == null && !o.index) && t.push({ path: a, score: Zg(a, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let u of Hh(o.path)) i(o, s, u);
    }),
    t
  );
}
function Hh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Hh(r.join("/")),
    l = [];
  return (
    l.push(...s.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && l.push(...s),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function qg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ev(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Kg = /^:[\w-]+$/,
  Qg = 3,
  Yg = 2,
  Xg = 1,
  Jg = 10,
  Gg = -2,
  Bc = (e) => e === "*";
function Zg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Bc) && (r += Gg),
    t && (r += Yg),
    n.filter((i) => !Bc(i)).reduce((i, o) => i + (Kg.test(o) ? Qg : o === "" ? Xg : Jg), r)
  );
}
function ev(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function tv(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let u = r[l],
      a = l === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = Fc({ path: u.relativePath, caseSensitive: u.caseSensitive, end: a }, c),
      p = u.route;
    if (
      (!f &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Fc({ path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 }, c)),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: It([o, f.pathname]),
        pathnameBase: lv(It([o, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (o = It([o, f.pathnameBase]));
  }
  return s;
}
function Fc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = nv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((a, c, f) => {
      let { paramName: p, isOptional: g } = c;
      if (p === "*") {
        let v = l[f] || "";
        s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[f];
      return g && !y ? (a[p] = void 0) : (a[p] = (y || "").replace(/%2F/g, "/")), a;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function nv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $h(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, u) => (
            r.push({ paramName: l, isOptional: u != null }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function rv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      $h(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ra(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function iv(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Yn(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : ov(n, t)) : t, search: uv(r), hash: av(i) };
}
function ov(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ls(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function sv(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function ia(e, t) {
  let n = sv(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function oa(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Yn(e))
    : ((i = Vr({}, e)),
      X(!i.pathname || !i.pathname.includes("?"), Ls("?", "pathname", "search", i)),
      X(!i.pathname || !i.pathname.includes("#"), Ls("#", "pathname", "hash", i)),
      X(!i.search || !i.search.includes("#"), Ls("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (s == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let u = iv(i, l),
    a = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || c) && (u.pathname += "/"), u;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"),
  lv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  uv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  av = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function cv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Vh = ["post", "put", "patch", "delete"];
new Set(Vh);
const fv = ["get", ...Vh];
new Set(fv);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function br() {
  return (
    (br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    br.apply(this, arguments)
  );
}
const sa = P.createContext(null),
  dv = P.createContext(null),
  bt = P.createContext(null),
  bo = P.createContext(null),
  qt = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  bh = P.createContext(null);
function hv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Xn() || X(!1);
  let { basename: r, navigator: i } = P.useContext(bt),
    { hash: o, pathname: s, search: l } = Kh(e, { relative: n }),
    u = s;
  return (
    r !== "/" && (u = s === "/" ? r : It([r, s])), i.createHref({ pathname: u, search: l, hash: o })
  );
}
function Xn() {
  return P.useContext(bo) != null;
}
function ei() {
  return Xn() || X(!1), P.useContext(bo).location;
}
function qh(e) {
  P.useContext(bt).static || P.useLayoutEffect(e);
}
function ti() {
  let { isDataRoute: e } = P.useContext(qt);
  return e ? Rv() : pv();
}
function pv() {
  Xn() || X(!1);
  let e = P.useContext(sa),
    { basename: t, future: n, navigator: r } = P.useContext(bt),
    { matches: i } = P.useContext(qt),
    { pathname: o } = ei(),
    s = JSON.stringify(ia(i, n.v7_relativeSplatPath)),
    l = P.useRef(!1);
  return (
    qh(() => {
      l.current = !0;
    }),
    P.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let f = oa(a, JSON.parse(s), o, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : It([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, o, e]
    )
  );
}
function Kh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(bt),
    { matches: i } = P.useContext(qt),
    { pathname: o } = ei(),
    s = JSON.stringify(ia(i, r.v7_relativeSplatPath));
  return P.useMemo(() => oa(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function mv(e, t) {
  return yv(e, t);
}
function yv(e, t, n, r) {
  Xn() || X(!1);
  let { navigator: i } = P.useContext(bt),
    { matches: o } = P.useContext(qt),
    s = o[o.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : "/";
  s && s.route;
  let a = ei(),
    c;
  if (t) {
    var f;
    let E = typeof t == "string" ? Yn(t) : t;
    u === "/" || ((f = E.pathname) != null && f.startsWith(u)) || X(!1), (c = E);
  } else c = a;
  let p = c.pathname || "/",
    g = p;
  if (u !== "/") {
    let E = u.replace(/^\//, "").split("/");
    g = "/" + p.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let y = Vg(e, { pathname: g }),
    v = Ev(
      y &&
        y.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, l, E.params),
            pathname: It([
              u,
              i.encodeLocation ? i.encodeLocation(E.pathname).pathname : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? u
                : It([
                    u,
                    i.encodeLocation ? i.encodeLocation(E.pathnameBase).pathname : E.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && v
    ? P.createElement(
        bo.Provider,
        {
          value: {
            location: br({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c),
            navigationType: Pt.Pop,
          },
        },
        v
      )
    : v;
}
function gv() {
  let e = Cv(),
    t = cv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: i }, n) : null,
    null
  );
}
const vv = P.createElement(gv, null);
class wv extends P.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          qt.Provider,
          { value: this.props.routeContext },
          P.createElement(bh.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Sv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = P.useContext(sa);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(qt.Provider, { value: t }, r)
  );
}
function Ev(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = s.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
    c >= 0 || X(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = c), f.route.id)) {
        let { loaderData: p, errors: g } = n,
          y = f.route.loader && p[f.route.id] === void 0 && (!g || g[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (u = !0), a >= 0 ? (s = s.slice(0, a + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, p) => {
    let g,
      y = !1,
      v = null,
      E = null;
    n &&
      ((g = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || vv),
      u &&
        (a < 0 && p === 0
          ? ((y = !0), (E = null))
          : a === p && ((y = !0), (E = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, p + 1)),
      d = () => {
        let h;
        return (
          g
            ? (h = v)
            : y
            ? (h = E)
            : f.route.Component
            ? (h = P.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = c),
          P.createElement(Sv, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? P.createElement(wv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Qh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Qh || {}),
  So = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(So || {});
function _v(e) {
  let t = P.useContext(sa);
  return t || X(!1), t;
}
function kv(e) {
  let t = P.useContext(dv);
  return t || X(!1), t;
}
function xv(e) {
  let t = P.useContext(qt);
  return t || X(!1), t;
}
function Yh(e) {
  let t = xv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function Cv() {
  var e;
  let t = P.useContext(bh),
    n = kv(So.UseRouteError),
    r = Yh(So.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Rv() {
  let { router: e } = _v(Qh.UseNavigateStable),
    t = Yh(So.UseNavigateStable),
    n = P.useRef(!1);
  return (
    qh(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number" ? e.navigate(i) : e.navigate(i, br({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Uc(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Xn() || X(!1);
  let { future: o, static: s } = P.useContext(bt),
    { matches: l } = P.useContext(qt),
    { pathname: u } = ei(),
    a = ti(),
    c = oa(t, ia(l, o.v7_relativeSplatPath), u, i === "path"),
    f = JSON.stringify(c);
  return (
    P.useEffect(() => a(JSON.parse(f), { replace: n, state: r, relative: i }), [a, f, i, n, r]),
    null
  );
}
function Eo(e) {
  X(!1);
}
function Tv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Pt.Pop,
    navigator: o,
    static: s = !1,
    future: l,
  } = e;
  Xn() && X(!1);
  let u = t.replace(/^\/*/, "/"),
    a = P.useMemo(
      () => ({ basename: u, navigator: o, static: s, future: br({ v7_relativeSplatPath: !1 }, l) }),
      [u, l, o, s]
    );
  typeof r == "string" && (r = Yn(r));
  let { pathname: c = "/", search: f = "", hash: p = "", state: g = null, key: y = "default" } = r,
    v = P.useMemo(() => {
      let E = ra(c, u);
      return E == null
        ? null
        : { location: { pathname: E, search: f, hash: p, state: g, key: y }, navigationType: i };
    }, [u, c, f, p, g, y, i]);
  return v == null
    ? null
    : P.createElement(
        bt.Provider,
        { value: a },
        P.createElement(bo.Provider, { children: n, value: v })
      );
}
function Xh(e) {
  let { children: t, location: n } = e;
  return mv(Ul(t), n);
}
new Promise(() => {});
function Ul(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, i) => {
      if (!P.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === P.Fragment) {
        n.push.apply(n, Ul(r.props.children, o));
        return;
      }
      r.type !== Eo && X(!1), !r.props.index || !r.props.children || X(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Ul(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $l() {
  return (
    ($l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $l.apply(this, arguments)
  );
}
function Pv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Nv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ov(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Nv(e);
}
const Lv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Av = "6";
try {
  window.__reactRouterVersion = Av;
} catch {}
const Dv = "startTransition",
  $c = bs[Dv];
function jv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = P.useRef();
  o.current == null && (o.current = $g({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, u] = P.useState({ action: s.action, location: s.location }),
    { v7_startTransition: a } = r || {},
    c = P.useCallback(
      (f) => {
        a && $c ? $c(() => u(f)) : u(f);
      },
      [u, a]
    );
  return (
    P.useLayoutEffect(() => s.listen(c), [s, c]),
    P.createElement(Tv, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const Mv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  zv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Iv = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: u,
        to: a,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      p = Pv(t, Lv),
      { basename: g } = P.useContext(bt),
      y,
      v = !1;
    if (typeof a == "string" && zv.test(a) && ((y = a), Mv))
      try {
        let h = new URL(window.location.href),
          w = a.startsWith("//") ? new URL(h.protocol + a) : new URL(a),
          _ = ra(w.pathname, g);
        w.origin === h.origin && _ != null ? (a = _ + w.search + w.hash) : (v = !0);
      } catch {}
    let E = hv(a, { relative: i }),
      m = Bv(a, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function d(h) {
      r && r(h), h.defaultPrevented || m(h);
    }
    return P.createElement(
      "a",
      $l({}, p, { href: y || E, onClick: v || o ? r : d, ref: n, target: u })
    );
  });
var Wc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Wc || (Wc = {}));
var Hc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Hc || (Hc = {}));
function Bv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = ti(),
    a = ei(),
    c = Kh(e, { relative: s });
  return P.useCallback(
    (f) => {
      if (Ov(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : wo(a) === wo(c);
        u(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [a, u, c, r, i, n, e, o, s, l]
  );
}
var Jh = { exports: {} },
  Gh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = P;
function Fv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Uv = typeof Object.is == "function" ? Object.is : Fv,
  $v = ni.useSyncExternalStore,
  Wv = ni.useRef,
  Hv = ni.useEffect,
  Vv = ni.useMemo,
  bv = ni.useDebugValue;
Gh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = Wv(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = Vv(
    function () {
      function u(g) {
        if (!a) {
          if (((a = !0), (c = g), (g = r(g)), i !== void 0 && s.hasValue)) {
            var y = s.value;
            if (i(y, g)) return (f = y);
          }
          return (f = g);
        }
        if (((y = f), Uv(c, g))) return y;
        var v = r(g);
        return i !== void 0 && i(y, v) ? y : ((c = g), (f = v));
      }
      var a = !1,
        c,
        f,
        p = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        p === null
          ? void 0
          : function () {
              return u(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = $v(e, o[0], o[1]);
  return (
    Hv(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l]
    ),
    bv(l),
    l
  );
};
Jh.exports = Gh;
var qv = Jh.exports,
  Pe = "default" in bs ? te : bs,
  Vc = Symbol.for("react-redux-context"),
  bc = typeof globalThis < "u" ? globalThis : {};
function Kv() {
  if (!Pe.createContext) return {};
  const e = bc[Vc] ?? (bc[Vc] = new Map());
  let t = e.get(Pe.createContext);
  return t || ((t = Pe.createContext(null)), e.set(Pe.createContext, t)), t;
}
var Ut = Kv(),
  Qv = () => {
    throw new Error("uSES not initialized!");
  };
function la(e = Ut) {
  return function () {
    return Pe.useContext(e);
  };
}
var Zh = la(),
  ep = Qv,
  Yv = (e) => {
    ep = e;
  },
  Xv = (e, t) => e === t;
function Jv(e = Ut) {
  const t = e === Ut ? Zh : la(e),
    n = (r, i = {}) => {
      const { equalityFn: o = Xv, devModeChecks: s = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: l,
          subscription: u,
          getServerState: a,
          stabilityCheck: c,
          identityFunctionCheck: f,
        } = t();
      Pe.useRef(!0);
      const p = Pe.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, c, s.stabilityCheck]
        ),
        g = ep(u.addNestedSub, l.getState, a || l.getState, p, o);
      return Pe.useDebugValue(g), g;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Gv = Jv();
function Zv(e) {
  e();
}
function e0() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Zv(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var qc = { notify() {}, get: () => [] };
function t0(e, t) {
  let n,
    r = qc,
    i = 0,
    o = !1;
  function s(v) {
    c();
    const E = r.subscribe(v);
    let m = !1;
    return () => {
      m || ((m = !0), E(), f());
    };
  }
  function l() {
    r.notify();
  }
  function u() {
    y.onStateChange && y.onStateChange();
  }
  function a() {
    return o;
  }
  function c() {
    i++, n || ((n = e.subscribe(u)), (r = e0()));
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = qc));
  }
  function p() {
    o || ((o = !0), c());
  }
  function g() {
    o && ((o = !1), f());
  }
  const y = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: u,
    isSubscribed: a,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => r,
  };
  return y;
}
var n0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  r0 = typeof navigator < "u" && navigator.product === "ReactNative",
  i0 = n0 || r0 ? Pe.useLayoutEffect : Pe.useEffect;
function o0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once",
}) {
  const s = Pe.useMemo(() => {
      const a = t0(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o,
      };
    }, [e, r, i, o]),
    l = Pe.useMemo(() => e.getState(), [e]);
  i0(() => {
    const { subscription: a } = s;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      l !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [s, l]);
  const u = t || Ut;
  return Pe.createElement(u.Provider, { value: s }, n);
}
var s0 = o0;
function tp(e = Ut) {
  const t = e === Ut ? Zh : la(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var l0 = tp();
function u0(e = Ut) {
  const t = e === Ut ? l0 : tp(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var a0 = u0();
Yv(qv.useSyncExternalStoreWithSelector);
function se(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var c0 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Kc = c0,
  As = () => Math.random().toString(36).substring(7).split("").join("."),
  f0 = {
    INIT: `@@redux/INIT${As()}`,
    REPLACE: `@@redux/REPLACE${As()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${As()}`,
  },
  _o = f0;
function ua(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function np(e, t, n) {
  if (typeof e != "function") throw new Error(se(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(se(0));
  if ((typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)), typeof n < "u")) {
    if (typeof n != "function") throw new Error(se(1));
    return n(np)(e, t);
  }
  let r = e,
    i = t,
    o = new Map(),
    s = o,
    l = 0,
    u = !1;
  function a() {
    s === o &&
      ((s = new Map()),
      o.forEach((E, m) => {
        s.set(m, E);
      }));
  }
  function c() {
    if (u) throw new Error(se(3));
    return i;
  }
  function f(E) {
    if (typeof E != "function") throw new Error(se(4));
    if (u) throw new Error(se(5));
    let m = !0;
    a();
    const d = l++;
    return (
      s.set(d, E),
      function () {
        if (m) {
          if (u) throw new Error(se(6));
          (m = !1), a(), s.delete(d), (o = null);
        }
      }
    );
  }
  function p(E) {
    if (!ua(E)) throw new Error(se(7));
    if (typeof E.type > "u") throw new Error(se(8));
    if (typeof E.type != "string") throw new Error(se(17));
    if (u) throw new Error(se(9));
    try {
      (u = !0), (i = r(i, E));
    } finally {
      u = !1;
    }
    return (
      (o = s).forEach((d) => {
        d();
      }),
      E
    );
  }
  function g(E) {
    if (typeof E != "function") throw new Error(se(10));
    (r = E), p({ type: _o.REPLACE });
  }
  function y() {
    const E = f;
    return {
      subscribe(m) {
        if (typeof m != "object" || m === null) throw new Error(se(11));
        function d() {
          const w = m;
          w.next && w.next(c());
        }
        return d(), { unsubscribe: E(d) };
      },
      [Kc]() {
        return this;
      },
    };
  }
  return (
    p({ type: _o.INIT }), { dispatch: p, subscribe: f, getState: c, replaceReducer: g, [Kc]: y }
  );
}
function d0(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: _o.INIT }) > "u") throw new Error(se(12));
    if (typeof n(void 0, { type: _o.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(se(13));
  });
}
function h0(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    d0(n);
  } catch (o) {
    i = o;
  }
  return function (s = {}, l) {
    if (i) throw i;
    let u = !1;
    const a = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        p = n[f],
        g = s[f],
        y = p(g, l);
      if (typeof y > "u") throw (l && l.type, new Error(se(14)));
      (a[f] = y), (u = u || y !== g);
    }
    return (u = u || r.length !== Object.keys(s).length), u ? a : s;
  };
}
function ko(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function p0(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(se(15));
    };
    const s = { getState: i.getState, dispatch: (u, ...a) => o(u, ...a) },
      l = e.map((u) => u(s));
    return (o = ko(...l)(i.dispatch)), { ...i, dispatch: o };
  };
}
function m0(e) {
  return ua(e) && "type" in e && typeof e.type == "string";
}
var rp = Symbol.for("immer-nothing"),
  Qc = Symbol.for("immer-draftable"),
  Le = Symbol.for("immer-state");
function Ye(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var bn = Object.getPrototypeOf;
function $t(e) {
  return !!e && !!e[Le];
}
function vt(e) {
  var t;
  return e
    ? ip(e) ||
        Array.isArray(e) ||
        !!e[Qc] ||
        !!((t = e.constructor) != null && t[Qc]) ||
        Ko(e) ||
        Qo(e)
    : !1;
}
var y0 = Object.prototype.constructor.toString();
function ip(e) {
  if (!e || typeof e != "object") return !1;
  const t = bn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === y0;
}
function xo(e, t) {
  qo(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function qo(e) {
  const t = e[Le];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ko(e) ? 2 : Qo(e) ? 3 : 0;
}
function Wl(e, t) {
  return qo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function op(e, t, n) {
  const r = qo(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function g0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ko(e) {
  return e instanceof Map;
}
function Qo(e) {
  return e instanceof Set;
}
function Gt(e) {
  return e.copy_ || e.base_;
}
function Hl(e, t) {
  if (Ko(e)) return new Map(e);
  if (Qo(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = ip(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Le];
    let i = Reflect.ownKeys(r);
    for (let o = 0; o < i.length; o++) {
      const s = i[o],
        l = r[s];
      l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
        (l.get || l.set) &&
          (r[s] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[s] });
    }
    return Object.create(bn(e), r);
  } else {
    const r = bn(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function aa(e, t = !1) {
  return (
    Yo(e) ||
      $t(e) ||
      !vt(e) ||
      (qo(e) > 1 && (e.set = e.add = e.clear = e.delete = v0),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => aa(r, !0))),
    e
  );
}
function v0() {
  Ye(2);
}
function Yo(e) {
  return Object.isFrozen(e);
}
var w0 = {};
function hn(e) {
  const t = w0[e];
  return t || Ye(0, e), t;
}
var qr;
function sp() {
  return qr;
}
function S0(e, t) {
  return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Yc(e, t) {
  t && (hn("Patches"), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
}
function Vl(e) {
  bl(e), e.drafts_.forEach(E0), (e.drafts_ = null);
}
function bl(e) {
  e === qr && (qr = e.parent_);
}
function Xc(e) {
  return (qr = S0(qr, e));
}
function E0(e) {
  const t = e[Le];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Jc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Le].modified_ && (Vl(t), Ye(4)),
        vt(e) && ((e = Co(t, e)), t.parent_ || Ro(t, e)),
        t.patches_ &&
          hn("Patches").generateReplacementPatches_(n[Le].base_, e, t.patches_, t.inversePatches_))
      : (e = Co(t, n, [])),
    Vl(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== rp ? e : void 0
  );
}
function Co(e, t, n) {
  if (Yo(t)) return t;
  const r = t[Le];
  if (!r) return xo(t, (i, o) => Gc(e, r, t, i, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Ro(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i,
      s = !1;
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
      xo(o, (l, u) => Gc(e, r, i, l, u, n, s)),
      Ro(e, i, !1),
      n && e.patches_ && hn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Gc(e, t, n, r, i, o, s) {
  if ($t(i)) {
    const l = o && t && t.type_ !== 3 && !Wl(t.assigned_, r) ? o.concat(r) : void 0,
      u = Co(e, i, l);
    if ((op(n, r, u), $t(u))) e.canAutoFreeze_ = !1;
    else return;
  } else s && n.add(i);
  if (vt(i) && !Yo(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Co(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Ro(e, i);
  }
}
function Ro(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && aa(t, n);
}
function _0(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : sp(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    o = ca;
  n && ((i = [r]), (o = Kr));
  const { revoke: s, proxy: l } = Proxy.revocable(i, o);
  return (r.draft_ = l), (r.revoke_ = s), l;
}
var ca = {
    get(e, t) {
      if (t === Le) return e;
      const n = Gt(e);
      if (!Wl(n, t)) return k0(e, n, t);
      const r = n[t];
      return e.finalized_ || !vt(r)
        ? r
        : r === Ds(e.base_, t)
        ? (js(e), (e.copy_[t] = Kl(r, e)))
        : r;
    },
    has(e, t) {
      return t in Gt(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Gt(e));
    },
    set(e, t, n) {
      const r = lp(Gt(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = Ds(Gt(e), t),
          o = i == null ? void 0 : i[Le];
        if (o && o.base_ === n) return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (g0(n, i) && (n !== void 0 || Wl(e.base_, t))) return !0;
        js(e), ql(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ds(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), js(e), ql(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Gt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Ye(11);
    },
    getPrototypeOf(e) {
      return bn(e.base_);
    },
    setPrototypeOf() {
      Ye(12);
    },
  },
  Kr = {};
xo(ca, (e, t) => {
  Kr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Kr.deleteProperty = function (e, t) {
  return Kr.set.call(this, e, t, void 0);
};
Kr.set = function (e, t, n) {
  return ca.set.call(this, e[0], t, n, e[0]);
};
function Ds(e, t) {
  const n = e[Le];
  return (n ? Gt(n) : e)[t];
}
function k0(e, t, n) {
  var i;
  const r = lp(t, n);
  return r ? ("value" in r ? r.value : (i = r.get) == null ? void 0 : i.call(e.draft_)) : void 0;
}
function lp(e, t) {
  if (!(t in e)) return;
  let n = bn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = bn(n);
  }
}
function ql(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ql(e.parent_));
}
function js(e) {
  e.copy_ || (e.copy_ = Hl(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var x0 = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const s = this;
          return function (u = o, ...a) {
            return s.produce(u, (c) => n.call(this, c, ...a));
          };
        }
        typeof n != "function" && Ye(6), r !== void 0 && typeof r != "function" && Ye(7);
        let i;
        if (vt(t)) {
          const o = Xc(this),
            s = Kl(t, void 0);
          let l = !0;
          try {
            (i = n(s)), (l = !1);
          } finally {
            l ? Vl(o) : bl(o);
          }
          return Yc(o, r), Jc(i, o);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === rp && (i = void 0),
            this.autoFreeze_ && aa(i, !0),
            r)
          ) {
            const o = [],
              s = [];
            hn("Patches").generateReplacementPatches_(t, i, o, s), r(o, s);
          }
          return i;
        } else Ye(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (s, ...l) => this.produceWithPatches(s, (u) => t(u, ...l));
        let r, i;
        return [
          this.produce(t, n, (s, l) => {
            (r = s), (i = l);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    vt(e) || Ye(8), $t(e) && (e = up(e));
    const t = Xc(this),
      n = Kl(e, void 0);
    return (n[Le].isManual_ = !0), bl(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Le];
    (!n || !n.isManual_) && Ye(9);
    const { scope_: r } = n;
    return Yc(r, t), Jc(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = hn("Patches").applyPatches_;
    return $t(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function Kl(e, t) {
  const n = Ko(e) ? hn("MapSet").proxyMap_(e, t) : Qo(e) ? hn("MapSet").proxySet_(e, t) : _0(e, t);
  return (t ? t.scope_ : sp()).drafts_.push(n), n;
}
function up(e) {
  return $t(e) || Ye(10, e), ap(e);
}
function ap(e) {
  if (!vt(e) || Yo(e)) return e;
  const t = e[Le];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Hl(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Hl(e, !0);
  return (
    xo(n, (r, i) => {
      op(n, r, ap(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Ae = new x0(),
  cp = Ae.produce;
Ae.produceWithPatches.bind(Ae);
Ae.setAutoFreeze.bind(Ae);
Ae.setUseStrictShallowCopy.bind(Ae);
Ae.applyPatches.bind(Ae);
Ae.createDraft.bind(Ae);
Ae.finishDraft.bind(Ae);
function C0(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function R0(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function T0(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) => (typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r))
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Zc = (e) => (Array.isArray(e) ? e : [e]);
function P0(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    T0(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function N0(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var O0 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  L0 = typeof WeakRef < "u" ? WeakRef : O0,
  A0 = 0,
  ef = 1;
function xi() {
  return { s: A0, v: void 0, o: null, p: null };
}
function fa(e, t = {}) {
  let n = xi();
  const { resultEqualityCheck: r } = t;
  let i,
    o = 0;
  function s() {
    var f;
    let l = n;
    const { length: u } = arguments;
    for (let p = 0, g = u; p < g; p++) {
      const y = arguments[p];
      if (typeof y == "function" || (typeof y == "object" && y !== null)) {
        let v = l.o;
        v === null && (l.o = v = new WeakMap());
        const E = v.get(y);
        E === void 0 ? ((l = xi()), v.set(y, l)) : (l = E);
      } else {
        let v = l.p;
        v === null && (l.p = v = new Map());
        const E = v.get(y);
        E === void 0 ? ((l = xi()), v.set(y, l)) : (l = E);
      }
    }
    const a = l;
    let c;
    if ((l.s === ef ? (c = l.v) : ((c = e.apply(null, arguments)), o++), (a.s = ef), r)) {
      const p = ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i;
      p != null && r(p, c) && ((c = p), o !== 0 && o--),
        (i = (typeof c == "object" && c !== null) || typeof c == "function" ? new L0(c) : c);
    }
    return (a.v = c), c;
  }
  return (
    (s.clearCache = () => {
      (n = xi()), s.resetResultsCount();
    }),
    (s.resultsCount = () => o),
    (s.resetResultsCount = () => {
      o = 0;
    }),
    s
  );
}
function fp(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        s = 0,
        l,
        u = {},
        a = i.pop();
      typeof a == "object" && ((u = a), (a = i.pop())),
        C0(
          a,
          `createSelector expects an output function after the inputs, but received: [${typeof a}]`
        );
      const c = { ...n, ...u },
        {
          memoize: f,
          memoizeOptions: p = [],
          argsMemoize: g = fa,
          argsMemoizeOptions: y = [],
          devModeChecks: v = {},
        } = c,
        E = Zc(p),
        m = Zc(y),
        d = P0(i),
        h = f(function () {
          return o++, a.apply(null, arguments);
        }, ...E),
        w = g(function () {
          s++;
          const x = N0(d, arguments);
          return (l = h.apply(null, x)), l;
        }, ...m);
      return Object.assign(w, {
        resultFunc: a,
        memoizedResultFunc: h,
        dependencies: d,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => l,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: f,
        argsMemoize: g,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var D0 = fp(fa),
  j0 = Object.assign(
    (e, t = D0) => {
      R0(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((o) => e[o]);
      return t(r, (...o) => o.reduce((s, l, u) => ((s[n[u]] = l), s), {}));
    },
    { withTypes: () => j0 }
  );
function dp(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : i(o);
}
var M0 = dp(),
  z0 = dp,
  I0 = (...e) => {
    const t = fp(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            o = (s, ...l) => i($t(s) ? up(s) : s, ...l);
          return Object.assign(o, i), o;
        },
        { withTypes: () => n }
      );
    return n;
  };
I0(fa);
var B0 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object" ? ko : ko.apply(null, arguments);
        },
  F0 = (e) => e && typeof e.match == "function";
function ht(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(ke(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (n.toString = () => `${e}`), (n.type = e), (n.match = (r) => m0(r) && r.type === e), n;
}
var hp = class yr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, yr.prototype);
  }
  static get [Symbol.species]() {
    return yr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new yr(...t[0].concat(this))
      : new yr(...t.concat(this));
  }
};
function tf(e) {
  return vt(e) ? cp(e, () => {}) : e;
}
function nf(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(ke(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function U0(e) {
  return typeof e == "boolean";
}
var $0 = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let s = new hp();
      return n && (U0(n) ? s.push(M0) : s.push(z0(n.extraArgument))), s;
    },
  W0 = "RTK_autoBatch",
  pp = (e) => (t) => {
    setTimeout(t, e);
  },
  H0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : pp(10),
  V0 =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        o = !1,
        s = !1;
      const l = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? H0
            : e.type === "callback"
            ? e.queueNotification
            : pp(e.timeout),
        a = () => {
          (s = !1), o && ((o = !1), l.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => i && c(),
            p = r.subscribe(f);
          return (
            l.add(c),
            () => {
              p(), l.delete(c);
            }
          );
        },
        dispatch(c) {
          var f;
          try {
            return (
              (i = !((f = c == null ? void 0 : c.meta) != null && f[W0])),
              (o = !i),
              o && (s || ((s = !0), u(a))),
              r.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  b0 = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new hp(e);
      return r && i.push(V0(typeof r == "object" ? r : void 0)), i;
    },
  q0 = !0;
function K0(e) {
  const t = $0(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {};
  let l;
  if (typeof n == "function") l = n;
  else if (ua(n)) l = h0(n);
  else throw new Error(ke(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let a = ko;
  i && (a = B0({ trace: !q0, ...(typeof i == "object" && i) }));
  const c = p0(...u),
    f = b0(c);
  let p = typeof s == "function" ? s(f) : f();
  const g = a(...p);
  return np(l, o, g);
}
function mp(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(o, s) {
      const l = typeof o == "string" ? o : o.type;
      if (!l) throw new Error(ke(28));
      if (l in t) throw new Error(ke(29));
      return (t[l] = s), i;
    },
    addMatcher(o, s) {
      return n.push({ matcher: o, reducer: s }), i;
    },
    addDefaultCase(o) {
      return (r = o), i;
    },
  };
  return e(i), [t, n, r];
}
function Q0(e) {
  return typeof e == "function";
}
function Y0(e, t) {
  let [n, r, i] = mp(t),
    o;
  if (Q0(e)) o = () => tf(e());
  else {
    const l = tf(e);
    o = () => l;
  }
  function s(l = o(), u) {
    let a = [n[u.type], ...r.filter(({ matcher: c }) => c(u)).map(({ reducer: c }) => c)];
    return (
      a.filter((c) => !!c).length === 0 && (a = [i]),
      a.reduce((c, f) => {
        if (f)
          if ($t(c)) {
            const g = f(c, u);
            return g === void 0 ? c : g;
          } else {
            if (vt(c)) return cp(c, (p) => f(p, u));
            {
              const p = f(c, u);
              if (p === void 0) {
                if (c === null) return c;
                throw new Error(ke(9));
              }
              return p;
            }
          }
        return c;
      }, l)
    );
  }
  return (s.getInitialState = o), s;
}
var X0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  yp = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += X0[(Math.random() * 64) | 0];
    return t;
  },
  J0 = (e, t) => (F0(e) ? e.match(t) : e(t));
function G0(...e) {
  return (t) => e.some((n) => J0(n, t));
}
var Z0 = ["name", "message", "stack", "code"],
  Ms = class {
    constructor(e, t) {
      Me(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  rf = class {
    constructor(e, t) {
      Me(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  e1 = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of Z0) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  gp = (() => {
    function e(t, n, r) {
      const i = ht(t + "/fulfilled", (u, a, c, f) => ({
          payload: u,
          meta: { ...(f || {}), arg: c, requestId: a, requestStatus: "fulfilled" },
        })),
        o = ht(t + "/pending", (u, a, c) => ({
          payload: void 0,
          meta: { ...(c || {}), arg: a, requestId: u, requestStatus: "pending" },
        })),
        s = ht(t + "/rejected", (u, a, c, f, p) => ({
          payload: f,
          error: ((r && r.serializeError) || e1)(u || "Rejected"),
          meta: {
            ...(p || {}),
            arg: c,
            requestId: a,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (u == null ? void 0 : u.name) === "AbortError",
            condition: (u == null ? void 0 : u.name) === "ConditionError",
          },
        }));
      function l(u) {
        return (a, c, f) => {
          const p = r != null && r.idGenerator ? r.idGenerator(u) : yp(),
            g = new AbortController();
          let y, v;
          function E(d) {
            (v = d), g.abort();
          }
          const m = (async function () {
            var w, _;
            let d;
            try {
              let x =
                (w = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : w.call(r, u, { getState: c, extra: f });
              if ((n1(x) && (x = await x), x === !1 || g.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const R = new Promise((C, B) => {
                (y = () => {
                  B({ name: "AbortError", message: v || "Aborted" });
                }),
                  g.signal.addEventListener("abort", y);
              });
              a(
                o(
                  p,
                  u,
                  (_ = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : _.call(r, { requestId: p, arg: u }, { getState: c, extra: f })
                )
              ),
                (d = await Promise.race([
                  R,
                  Promise.resolve(
                    n(u, {
                      dispatch: a,
                      getState: c,
                      extra: f,
                      requestId: p,
                      signal: g.signal,
                      abort: E,
                      rejectWithValue: (C, B) => new Ms(C, B),
                      fulfillWithValue: (C, B) => new rf(C, B),
                    })
                  ).then((C) => {
                    if (C instanceof Ms) throw C;
                    return C instanceof rf ? i(C.payload, p, u, C.meta) : i(C, p, u);
                  }),
                ]));
            } catch (x) {
              d = x instanceof Ms ? s(null, p, u, x.payload, x.meta) : s(x, p, u);
            } finally {
              y && g.signal.removeEventListener("abort", y);
            }
            return (
              (r && !r.dispatchConditionRejection && s.match(d) && d.meta.condition) || a(d), d
            );
          })();
          return Object.assign(m, {
            abort: E,
            requestId: p,
            arg: u,
            unwrap() {
              return m.then(t1);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: o,
        rejected: s,
        fulfilled: i,
        settled: G0(s, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function t1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function n1(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var r1 = Symbol.for("rtk-slice-createasyncthunk");
function i1(e, t) {
  return `${e}/${t}`;
}
function o1({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[r1];
  return function (i) {
    const { name: o, reducerPath: s = o } = i;
    if (!o) throw new Error(ke(11));
    typeof process < "u";
    const l = (typeof i.reducers == "function" ? i.reducers(l1()) : i.reducers) || {},
      u = Object.keys(l),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(h, w) {
          const _ = typeof h == "string" ? h : h.type;
          if (!_) throw new Error(ke(12));
          if (_ in a.sliceCaseReducersByType) throw new Error(ke(13));
          return (a.sliceCaseReducersByType[_] = w), c;
        },
        addMatcher(h, w) {
          return a.sliceMatchers.push({ matcher: h, reducer: w }), c;
        },
        exposeAction(h, w) {
          return (a.actionCreators[h] = w), c;
        },
        exposeCaseReducer(h, w) {
          return (a.sliceCaseReducersByName[h] = w), c;
        },
      };
    u.forEach((h) => {
      const w = l[h],
        _ = { reducerName: h, type: i1(o, h), createNotation: typeof i.reducers == "function" };
      a1(w) ? f1(_, w, c, t) : u1(_, w, c);
    });
    function f() {
      const [h = {}, w = [], _ = void 0] =
          typeof i.extraReducers == "function" ? mp(i.extraReducers) : [i.extraReducers],
        x = { ...h, ...a.sliceCaseReducersByType };
      return Y0(i.initialState, (R) => {
        for (let C in x) R.addCase(C, x[C]);
        for (let C of a.sliceMatchers) R.addMatcher(C.matcher, C.reducer);
        for (let C of w) R.addMatcher(C.matcher, C.reducer);
        _ && R.addDefaultCase(_);
      });
    }
    const p = (h) => h,
      g = new Map();
    let y;
    function v(h, w) {
      return y || (y = f()), y(h, w);
    }
    function E() {
      return y || (y = f()), y.getInitialState();
    }
    function m(h, w = !1) {
      function _(R) {
        let C = R[h];
        return typeof C > "u" && w && (C = E()), C;
      }
      function x(R = p) {
        const C = nf(g, w, { insert: () => new WeakMap() });
        return nf(C, R, {
          insert: () => {
            const B = {};
            for (const [j, Ce] of Object.entries(i.selectors ?? {})) B[j] = s1(Ce, R, E, w);
            return B;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: x,
        get selectors() {
          return x(_);
        },
        selectSlice: _,
      };
    }
    const d = {
      name: o,
      reducer: v,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: E,
      ...m(s),
      injectInto(h, { reducerPath: w, ..._ } = {}) {
        const x = w ?? s;
        return h.inject({ reducerPath: x, reducer: v }, _), { ...d, ...m(x, !0) };
      },
    };
    return d;
  };
}
function s1(e, t, n, r) {
  function i(o, ...s) {
    let l = t(o);
    return typeof l > "u" && r && (l = n()), e(l, ...s);
  }
  return (i.unwrapped = e), i;
}
var vp = o1();
function l1() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return { _reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: n };
      },
      asyncThunk: e,
    }
  );
}
function u1({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, s;
  if ("reducer" in r) {
    if (n && !c1(r)) throw new Error(ke(17));
    (o = r.reducer), (s = r.prepare);
  } else o = r;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, s ? ht(e, s) : ht(e));
}
function a1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function c1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function f1({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(ke(18));
  const { payloadCreator: o, fulfilled: s, pending: l, rejected: u, settled: a, options: c } = n,
    f = i(e, o, c);
  r.exposeAction(t, f),
    s && r.addCase(f.fulfilled, s),
    l && r.addCase(f.pending, l),
    u && r.addCase(f.rejected, u),
    a && r.addMatcher(f.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: s || Ci,
      pending: l || Ci,
      rejected: u || Ci,
      settled: a || Ci,
    });
}
function Ci() {}
var d1 = (e, t) => {
    if (typeof e != "function") throw new Error(ke(32));
  },
  da = "listenerMiddleware",
  h1 = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: o } = e;
    if (t) i = ht(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw new Error(ke(21));
    return d1(o), { predicate: i, type: t, effect: o };
  },
  p1 = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = h1(e);
      return {
        id: yp(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(ke(22));
        },
      };
    },
    { withTypes: () => p1 }
  ),
  m1 = Object.assign(ht(`${da}/add`), { withTypes: () => m1 });
ht(`${da}/removeAll`);
var y1 = Object.assign(ht(`${da}/remove`), { withTypes: () => y1 });
function ke(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const g1 = { userId: null, email: null, userName: null, token: null },
  wp = vp({
    name: "User Slice",
    initialState: g1,
    reducers: {
      setUser: (e, t) => {
        (e.userId = t.payload.userId),
          (e.email = t.payload.email),
          (e.userName = t.payload.userName),
          (e.token = t.payload.token);
      },
      removeUser: (e) => {
        (e.userId = null), (e.email = null), (e.userName = null), (e.token = null);
      },
    },
  }),
  { setUser: Sp } = wp.actions,
  v1 = wp.reducer;
function Ep(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: w1 } = Object.prototype,
  { getPrototypeOf: ha } = Object,
  Xo = ((e) => (t) => {
    const n = w1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  et = (e) => ((e = e.toLowerCase()), (t) => Xo(t) === e),
  Jo = (e) => (t) => typeof t === e,
  { isArray: Jn } = Array,
  Qr = Jo("undefined");
function S1(e) {
  return (
    e !== null &&
    !Qr(e) &&
    e.constructor !== null &&
    !Qr(e.constructor) &&
    $e(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _p = et("ArrayBuffer");
function E1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _p(e.buffer)),
    t
  );
}
const _1 = Jo("string"),
  $e = Jo("function"),
  kp = Jo("number"),
  Go = (e) => e !== null && typeof e == "object",
  k1 = (e) => e === !0 || e === !1,
  Wi = (e) => {
    if (Xo(e) !== "object") return !1;
    const t = ha(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  x1 = et("Date"),
  C1 = et("File"),
  R1 = et("Blob"),
  T1 = et("FileList"),
  P1 = (e) => Go(e) && $e(e.pipe),
  N1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        ($e(e.append) &&
          ((t = Xo(e)) === "formdata" ||
            (t === "object" && $e(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  O1 = et("URLSearchParams"),
  [L1, A1, D1, j1] = ["ReadableStream", "Request", "Response", "Headers"].map(et),
  M1 = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function ri(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Jn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let l;
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function xp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Cp =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Rp = (e) => !Qr(e) && e !== Cp;
function Ql() {
  const { caseless: e } = (Rp(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && xp(t, i)) || i;
      Wi(t[o]) && Wi(r)
        ? (t[o] = Ql(t[o], r))
        : Wi(r)
        ? (t[o] = Ql({}, r))
        : Jn(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && ri(arguments[r], n);
  return t;
}
const z1 = (e, t, n, { allOwnKeys: r } = {}) => (
    ri(
      t,
      (i, o) => {
        n && $e(i) ? (e[o] = Ep(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  I1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  B1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  F1 = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && ha(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  U1 = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  $1 = (e) => {
    if (!e) return null;
    if (Jn(e)) return e;
    let t = e.length;
    if (!kp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  W1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ha(Uint8Array)),
  H1 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  V1 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  b1 = et("HTMLFormElement"),
  q1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  of = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  K1 = et("RegExp"),
  Tp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ri(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  Q1 = (e) => {
    Tp(e, (t, n) => {
      if ($e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const r = e[n];
      if ($e(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Y1 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Jn(e) ? r(e) : r(String(e).split(t)), n;
  },
  X1 = () => {},
  J1 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  zs = "abcdefghijklmnopqrstuvwxyz",
  sf = "0123456789",
  Pp = { DIGIT: sf, ALPHA: zs, ALPHA_DIGIT: zs + zs.toUpperCase() + sf },
  G1 = (e = 16, t = Pp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Z1(e) {
  return !!(e && $e(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ew = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Go(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Jn(r) ? [] : {};
            return (
              ri(r, (s, l) => {
                const u = n(s, i + 1);
                !Qr(u) && (o[l] = u);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  tw = et("AsyncFunction"),
  nw = (e) => e && (Go(e) || $e(e)) && $e(e.then) && $e(e.catch),
  S = {
    isArray: Jn,
    isArrayBuffer: _p,
    isBuffer: S1,
    isFormData: N1,
    isArrayBufferView: E1,
    isString: _1,
    isNumber: kp,
    isBoolean: k1,
    isObject: Go,
    isPlainObject: Wi,
    isReadableStream: L1,
    isRequest: A1,
    isResponse: D1,
    isHeaders: j1,
    isUndefined: Qr,
    isDate: x1,
    isFile: C1,
    isBlob: R1,
    isRegExp: K1,
    isFunction: $e,
    isStream: P1,
    isURLSearchParams: O1,
    isTypedArray: W1,
    isFileList: T1,
    forEach: ri,
    merge: Ql,
    extend: z1,
    trim: M1,
    stripBOM: I1,
    inherits: B1,
    toFlatObject: F1,
    kindOf: Xo,
    kindOfTest: et,
    endsWith: U1,
    toArray: $1,
    forEachEntry: H1,
    matchAll: V1,
    isHTMLForm: b1,
    hasOwnProperty: of,
    hasOwnProp: of,
    reduceDescriptors: Tp,
    freezeMethods: Q1,
    toObjectSet: Y1,
    toCamelCase: q1,
    noop: X1,
    toFiniteNumber: J1,
    findKey: xp,
    global: Cp,
    isContextDefined: Rp,
    ALPHABET: Pp,
    generateString: G1,
    isSpecCompliantForm: Z1,
    toJSONObject: ew,
    isAsyncFn: tw,
    isThenable: nw,
  };
function L(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
S.inherits(L, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Np = L.prototype,
  Op = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Op[e] = { value: e };
});
Object.defineProperties(L, Op);
Object.defineProperty(Np, "isAxiosError", { value: !0 });
L.from = (e, t, n, r, i, o) => {
  const s = Object.create(Np);
  return (
    S.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    L.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const rw = null;
function Yl(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Lp(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function lf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Lp(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function iw(e) {
  return S.isArray(e) && !e.some(Yl);
}
const ow = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Zo(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, E) {
      return !S.isUndefined(E[v]);
    }));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(y) {
    if (y === null) return "";
    if (S.isDate(y)) return y.toISOString();
    if (!u && S.isBlob(y)) throw new L("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(y) || S.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, v, E) {
    let m = y;
    if (y && !E && typeof y == "object") {
      if (S.endsWith(v, "{}")) (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (S.isArray(y) && iw(y)) ||
        ((S.isFileList(y) || S.endsWith(v, "[]")) && (m = S.toArray(y)))
      )
        return (
          (v = Lp(v)),
          m.forEach(function (h, w) {
            !(S.isUndefined(h) || h === null) &&
              t.append(s === !0 ? lf([v], w, o) : s === null ? v : v + "[]", a(h));
          }),
          !1
        );
    }
    return Yl(y) ? !0 : (t.append(lf(E, v, o), a(y)), !1);
  }
  const f = [],
    p = Object.assign(ow, { defaultVisitor: c, convertValue: a, isVisitable: Yl });
  function g(y, v) {
    if (!S.isUndefined(y)) {
      if (f.indexOf(y) !== -1) throw Error("Circular reference detected in " + v.join("."));
      f.push(y),
        S.forEach(y, function (m, d) {
          (!(S.isUndefined(m) || m === null) &&
            i.call(t, m, S.isString(d) ? d.trim() : d, v, p)) === !0 && g(m, v ? v.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function uf(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pa(e, t) {
  (this._pairs = []), e && Zo(e, this, t);
}
const Ap = pa.prototype;
Ap.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ap.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, uf);
      }
    : uf;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function sw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Dp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || sw,
    i = n && n.serialize;
  let o;
  if (
    (i ? (o = i(t, n)) : (o = S.isURLSearchParams(t) ? t.toString() : new pa(t, n).toString(r)), o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class af {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const jp = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  lw = typeof URLSearchParams < "u" ? URLSearchParams : pa,
  uw = typeof FormData < "u" ? FormData : null,
  aw = typeof Blob < "u" ? Blob : null,
  cw = {
    isBrowser: !0,
    classes: { URLSearchParams: lw, FormData: uw, Blob: aw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ma = typeof window < "u" && typeof document < "u",
  fw = ((e) => ma && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  dw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  hw = (ma && window.location.href) || "http://localhost",
  pw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ma,
        hasStandardBrowserEnv: fw,
        hasStandardBrowserWebWorkerEnv: dw,
        origin: hw,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ge = { ...pw, ...cw };
function mw(e, t) {
  return Zo(
    e,
    new Ge.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Ge.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function yw(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function gw(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Mp(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      u = o >= n.length;
    return (
      (s = !s && S.isArray(i) ? i.length : s),
      u
        ? (S.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !S.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && S.isArray(i[s]) && (i[s] = gw(i[s])),
          !l)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, i) => {
        t(yw(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function vw(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ii = {
  transitional: jp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = S.isObject(t);
      if ((o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return i ? JSON.stringify(Mp(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return mw(t, this.formSerializer).toString();
        if ((l = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Zo(l ? { "files[]": t } : t, u && new u(), this.formSerializer);
        }
      }
      return o || i ? (n.setContentType("application/json", !1), vw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ii.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? L.from(l, L.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ge.classes.FormData, Blob: Ge.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ii.headers[e] = {};
});
const ww = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Sw = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && ww[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  cf = Symbol("internals");
function cr(e) {
  return e && String(e).trim().toLowerCase();
}
function Hi(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Hi) : String(e);
}
function Ew(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const _w = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Is(e, t, n, r, i) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function kw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xw(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class xe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, u, a) {
      const c = cr(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = S.findKey(i, c);
      (!f || i[f] === void 0 || a === !0 || (a === void 0 && i[f] !== !1)) && (i[f || u] = Hi(l));
    }
    const s = (l, u) => S.forEach(l, (a, c) => o(a, c, u));
    if (S.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (S.isString(t) && (t = t.trim()) && !_w(t)) s(Sw(t), n);
    else if (S.isHeaders(t)) for (const [l, u] of t.entries()) o(u, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = cr(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Ew(i);
        if (S.isFunction(n)) return n.call(this, i, r);
        if (S.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = cr(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Is(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = cr(s)), s)) {
        const l = S.findKey(r, s);
        l && (!n || Is(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Is(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (i, o) => {
        const s = S.findKey(r, o);
        if (s) {
          (n[s] = Hi(i)), delete n[o];
          return;
        }
        const l = t ? kw(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Hi(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[cf] = this[cf] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const l = cr(s);
      r[l] || (xw(i, s), (r[l] = !0));
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
xe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(xe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(xe);
function Bs(e, t) {
  const n = this || ii,
    r = t || n,
    i = xe.from(r.headers);
  let o = r.data;
  return (
    S.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function zp(e) {
  return !!(e && e.__CANCEL__);
}
function Gn(e, t, n) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
S.inherits(Gn, L, { __CANCEL__: !0 });
function Ip(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new L(
          "Request failed with status code " + n.status,
          [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function Cw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Rw(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o];
      s || (s = a), (n[i] = u), (r[i] = a);
      let f = o,
        p = 0;
      for (; f !== i; ) (p += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), a - s < t)) return;
      const g = c && a - c;
      return g ? Math.round((p * 1e3) / g) : void 0;
    }
  );
}
function Tw(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const s = this === !0,
      l = Date.now();
    if (s || l - n > r)
      return i && (clearTimeout(i), (i = null)), (n = l), e.apply(null, arguments);
    i ||
      (i = setTimeout(() => ((i = null), (n = Date.now()), e.apply(null, arguments)), r - (l - n)));
  };
}
const To = (e, t, n = 3) => {
    let r = 0;
    const i = Rw(50, 250);
    return Tw((o) => {
      const s = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        u = s - r,
        a = i(u),
        c = s <= l;
      r = s;
      const f = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && l && c ? (l - s) / a : void 0,
        event: o,
        lengthComputable: l != null,
      };
      (f[t ? "download" : "upload"] = !0), e(f);
    }, n);
  },
  Pw = Ge.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let s = o;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (s) {
            const l = S.isString(s) ? i(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Nw = Ge.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const s = [e + "=" + encodeURIComponent(t)];
          S.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            S.isString(r) && s.push("path=" + r),
            S.isString(i) && s.push("domain=" + i),
            o === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Ow(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Lw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bp(e, t) {
  return e && !Ow(t) ? Lw(e, t) : t;
}
const ff = (e) => (e instanceof xe ? { ...e } : e);
function pn(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, f) {
    return S.isPlainObject(a) && S.isPlainObject(c)
      ? S.merge.call({ caseless: f }, a, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c;
  }
  function i(a, c, f) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a, f);
    } else return r(a, c, f);
  }
  function o(a, c) {
    if (!S.isUndefined(c)) return r(void 0, c);
  }
  function s(a, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function l(a, c, f) {
    if (f in t) return r(a, c);
    if (f in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (a, c) => i(ff(a), ff(c), !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = u[c] || i,
        p = f(e[c], t[c], c);
      (S.isUndefined(p) && f !== l) || (n[c] = p);
    }),
    n
  );
}
const Fp = (e) => {
    const t = pn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: s,
      auth: l,
    } = t;
    (t.headers = s = xe.from(s)),
      (t.url = Dp(Bp(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let u;
    if (S.isFormData(n)) {
      if (Ge.hasStandardBrowserEnv || Ge.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
      else if ((u = s.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        s.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Ge.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && Pw(t.url)))
    ) {
      const a = i && o && Nw.read(o);
      a && s.set(i, a);
    }
    return t;
  },
  Aw = typeof XMLHttpRequest < "u",
  Dw =
    Aw &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Fp(e);
        let o = i.data;
        const s = xe.from(i.headers).normalize();
        let { responseType: l } = i,
          u;
        function a() {
          i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let c = new XMLHttpRequest();
        c.open(i.method.toUpperCase(), i.url, !0), (c.timeout = i.timeout);
        function f() {
          if (!c) return;
          const g = xe.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
            v = {
              data: !l || l === "text" || l === "json" ? c.responseText : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: e,
              request: c,
            };
          Ip(
            function (m) {
              n(m), a();
            },
            function (m) {
              r(m), a();
            },
            v
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = f)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
          (c.onabort = function () {
            c && (r(new L("Request aborted", L.ECONNABORTED, i, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new L("Network Error", L.ERR_NETWORK, i, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let y = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const v = i.transitional || jp;
            i.timeoutErrorMessage && (y = i.timeoutErrorMessage),
              r(new L(y, v.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED, i, c)),
              (c = null);
          }),
          o === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            S.forEach(s.toJSON(), function (y, v) {
              c.setRequestHeader(v, y);
            }),
          S.isUndefined(i.withCredentials) || (c.withCredentials = !!i.withCredentials),
          l && l !== "json" && (c.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            c.addEventListener("progress", To(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", To(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((u = (g) => {
              c && (r(!g || g.type ? new Gn(null, e, c) : g), c.abort(), (c = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const p = Cw(i.url);
        if (p && Ge.protocols.indexOf(p) === -1) {
          r(new L("Unsupported protocol " + p + ":", L.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  jw = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (u) {
      if (!r) {
        (r = !0), s();
        const a = u instanceof Error ? u : this.reason;
        n.abort(a instanceof L ? a : new Gn(a instanceof Error ? a.message : a));
      }
    };
    let o =
      t &&
      setTimeout(() => {
        i(new L(`timeout ${t} of ms exceeded`, L.ETIMEDOUT));
      }, t);
    const s = () => {
      e &&
        (o && clearTimeout(o),
        (o = null),
        e.forEach((u) => {
          u && (u.removeEventListener ? u.removeEventListener("abort", i) : u.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((u) => u && u.addEventListener && u.addEventListener("abort", i));
    const { signal: l } = n;
    return (
      (l.unsubscribe = s),
      [
        l,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  Mw = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  zw = async function* (e, t, n) {
    for await (const r of e) yield* Mw(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  df = (e, t, n, r, i) => {
    const o = zw(e, t, i);
    let s = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(l) {
          const { done: u, value: a } = await o.next();
          if (u) {
            l.close(), r();
            return;
          }
          let c = a.byteLength;
          n && n((s += c)), l.enqueue(new Uint8Array(a));
        },
        cancel(l) {
          return r(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  hf = (e, t) => {
    const n = e != null;
    return (r) => setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  es = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  Up = es && typeof ReadableStream == "function",
  Xl =
    es &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Iw =
    Up &&
    (() => {
      let e = !1;
      const t = new Request(Ge.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  pf = 64 * 1024,
  Jl =
    Up &&
    !!(() => {
      try {
        return S.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Po = { stream: Jl && ((e) => e.body) };
es &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Po[t] &&
        (Po[t] = S.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new L(`Response type '${t}' is not supported`, L.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Bw = async (e) => {
    if (e == null) return 0;
    if (S.isBlob(e)) return e.size;
    if (S.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(e)) return e.byteLength;
    if ((S.isURLSearchParams(e) && (e = e + ""), S.isString(e))) return (await Xl(e)).byteLength;
  },
  Fw = async (e, t) => {
    const n = S.toFiniteNumber(e.getContentLength());
    return n ?? Bw(t);
  },
  Uw =
    es &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: p,
      } = Fp(e);
      a = a ? (a + "").toLowerCase() : "text";
      let [g, y] = i || o || s ? jw([i, o], s) : [],
        v,
        E;
      const m = () => {
        !v &&
          setTimeout(() => {
            g && g.unsubscribe();
          }),
          (v = !0);
      };
      let d;
      try {
        if (u && Iw && n !== "get" && n !== "head" && (d = await Fw(c, r)) !== 0) {
          let x = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          S.isFormData(r) && (R = x.headers.get("content-type")) && c.setContentType(R),
            x.body && (r = df(x.body, pf, hf(d, To(u)), null, Xl));
        }
        S.isString(f) || (f = f ? "cors" : "omit"),
          (E = new Request(t, {
            ...p,
            signal: g,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: f,
          }));
        let h = await fetch(E);
        const w = Jl && (a === "stream" || a === "response");
        if (Jl && (l || w)) {
          const x = {};
          ["status", "statusText", "headers"].forEach((C) => {
            x[C] = h[C];
          });
          const R = S.toFiniteNumber(h.headers.get("content-length"));
          h = new Response(df(h.body, pf, l && hf(R, To(l, !0)), w && m, Xl), x);
        }
        a = a || "text";
        let _ = await Po[S.findKey(Po, a) || "text"](h, e);
        return (
          !w && m(),
          y && y(),
          await new Promise((x, R) => {
            Ip(x, R, {
              data: _,
              headers: xe.from(h.headers),
              status: h.status,
              statusText: h.statusText,
              config: e,
              request: E,
            });
          })
        );
      } catch (h) {
        throw (
          (m(),
          h && h.name === "TypeError" && /fetch/i.test(h.message)
            ? Object.assign(new L("Network Error", L.ERR_NETWORK, e, E), { cause: h.cause || h })
            : L.from(h, h && h.code, e, E))
        );
      }
    }),
  Gl = { http: rw, xhr: Dw, fetch: Uw };
S.forEach(Gl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const mf = (e) => `- ${e}`,
  $w = (e) => S.isFunction(e) || e === null || e === !1,
  $p = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let s;
        if (((r = n), !$w(n) && ((r = Gl[(s = String(n)).toLowerCase()]), r === void 0)))
          throw new L(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(mf).join(`
`)
            : " " + mf(o[0])
          : "as no adapter specified";
        throw new L("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: Gl,
  };
function Fs(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new Gn(null, e);
}
function yf(e) {
  return (
    Fs(e),
    (e.headers = xe.from(e.headers)),
    (e.data = Bs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    $p
      .getAdapter(e.adapter || ii.adapter)(e)
      .then(
        function (r) {
          return (
            Fs(e),
            (r.data = Bs.call(e, e.transformResponse, r)),
            (r.headers = xe.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            zp(r) ||
              (Fs(e),
              r &&
                r.response &&
                ((r.response.data = Bs.call(e, e.transformResponse, r.response)),
                (r.response.headers = xe.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Wp = "1.7.2",
  ya = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ya[e] = function (r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const gf = {};
ya.transitional = function (t, n, r) {
  function i(o, s) {
    return "[Axios v" + Wp + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (t === !1) throw new L(i(s, " has been removed" + (n ? " in " + n : "")), L.ERR_DEPRECATED);
    return (
      n &&
        !gf[s] &&
        ((gf[s] = !0),
        console.warn(
          i(s, " has been deprecated since v" + n + " and will be removed in the near future")
        )),
      t ? t(o, s, l) : !0
    );
  };
};
function Ww(e, t, n) {
  if (typeof e != "object") throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const l = e[o],
        u = l === void 0 || s(l, o, e);
      if (u !== !0) throw new L("option " + o + " must be " + u, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new L("Unknown option " + o, L.ERR_BAD_OPTION);
  }
}
const Zl = { assertOptions: Ww, validators: ya },
  Et = Zl.validators;
class sn {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new af(), response: new af() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace((i = {})) : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = pn(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Zl.assertOptions(
        r,
        {
          silentJSONParsing: Et.transitional(Et.boolean),
          forcedJSONParsing: Et.transitional(Et.boolean),
          clarifyTimeoutError: Et.transitional(Et.boolean),
        },
        !1
      ),
      i != null &&
        (S.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Zl.assertOptions(i, { encode: Et.function, serialize: Et.function }, !0)),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = o && S.merge(o.common, o[n.method]);
    o &&
      S.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (y) => {
        delete o[y];
      }),
      (n.headers = xe.concat(s, o));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let c,
      f = 0,
      p;
    if (!u) {
      const y = [yf.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, a), p = y.length, c = Promise.resolve(n); f < p; )
        c = c.then(y[f++], y[f++]);
      return c;
    }
    p = l.length;
    let g = n;
    for (f = 0; f < p; ) {
      const y = l[f++],
        v = l[f++];
      try {
        g = y(g);
      } catch (E) {
        v.call(this, E);
        break;
      }
    }
    try {
      c = yf.call(this, g);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, p = a.length; f < p; ) c = c.then(a[f++], a[f++]);
    return c;
  }
  getUri(t) {
    t = pn(this.defaults, t);
    const n = Bp(t.baseURL, t.url);
    return Dp(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function (t) {
  sn.prototype[t] = function (n, r) {
    return this.request(pn(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        pn(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (sn.prototype[t] = n()), (sn.prototype[t + "Form"] = n(!0));
});
class ga {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new Gn(o, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ga(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function Hw(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Vw(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const eu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(eu).forEach(([e, t]) => {
  eu[t] = e;
});
function Hp(e) {
  const t = new sn(e),
    n = Ep(sn.prototype.request, t);
  return (
    S.extend(n, sn.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Hp(pn(e, i));
    }),
    n
  );
}
const Z = Hp(ii);
Z.Axios = sn;
Z.CanceledError = Gn;
Z.CancelToken = ga;
Z.isCancel = zp;
Z.VERSION = Wp;
Z.toFormData = Zo;
Z.AxiosError = L;
Z.Cancel = Z.CanceledError;
Z.all = function (t) {
  return Promise.all(t);
};
Z.spread = Hw;
Z.isAxiosError = Vw;
Z.mergeConfig = pn;
Z.AxiosHeaders = xe;
Z.formToJSON = (e) => Mp(S.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = $p.getAdapter;
Z.HttpStatusCode = eu;
Z.default = Z;
const Vp = async (e, t) => {
    try {
      const n = await Z.post(e, t)
        .then((r) => r)
        .catch((r) => r);
      return console.log(n), n;
    } catch (n) {
      throw (console.log("@useAxiosQuery error", n), new Error("@useAxiosQuery error - catch"));
    }
  },
  bw = "/api/auth/login",
  qw = "/api/auth/register",
  tu = gp("fetchRegistration", async function (e, { rejectWithValue: t, dispatch: n }) {
    try {
      const { data: r, status: i } = await Vp(qw, e);
      if (i === 200) {
        const o = { userId: r.userId, token: r.token };
        return n(Sp({ ...o, email: e.email, userName: "" })), o;
      }
      return t("@fetchRegistrationWithEmail");
    } catch (r) {
      return console.log("@fetchRegistrationWithEmail ERROR", r), t("@fetchRegistrationWithEmail");
    }
  }),
  nu = gp("fetchLoginWithEmail", async function (e, { rejectWithValue: t, dispatch: n }) {
    try {
      const { data: r, status: i } = await Vp(bw, e);
      if (i === 200) {
        const o = { userId: r.userId, token: r.token };
        return n(Sp({ ...o, email: e.email, userName: "" })), o;
      }
      return t("@fetchRegistrationWithEmail");
    } catch (r) {
      return console.log("@fetchRegistrationWithEmail ERROR", r), t("@fetchRegistrationWithEmail");
    }
  }),
  Kw = { isAuth: !1, errorAuth: "" },
  bp = vp({
    name: "authSlice",
    initialState: Kw,
    reducers: {
      setAuth: (e, t) => {
        (e.isAuth = t.payload.isAuth), (e.errorAuth = t.payload.errorAuth);
      },
    },
    extraReducers: (e) => {
      e.addCase(tu.fulfilled, (t, n) => {
        console.log("@fetchRegistrationWithEmail fulfilled. Payload --> ", n.payload),
          (t.isAuth = !0);
      }),
        e.addCase(tu.rejected, (t, n) => {
          console.log("@fetchRegistrationWithEmail rejected. Payload --> ", n.payload),
            (t.errorAuth = "Error Register"),
            (t.isAuth = !1);
        }),
        e.addCase(nu.fulfilled, (t, n) => {
          console.log("@fetchLoginWithEmail fulfilled. Payload --> ", n.payload), (t.isAuth = !0);
        }),
        e.addCase(nu.rejected, (t, n) => {
          console.log("@fetchLoginWithEmail rejected. Payload --> ", n.payload),
            (t.errorAuth = "Error Login"),
            (t.isAuth = !1);
        });
    },
  });
bp.actions;
const Qw = bp.reducer,
  Yw = K0({ reducer: { authSlice: Qw, userSlice: v1 } }),
  qp = a0.withTypes(),
  va = Gv.withTypes(),
  Xw = window == null ? void 0 : window.matchMedia("(prefers-color-scheme: light)").matches,
  Jw = Xw ? "light" : "dark",
  Gw = () => {
    const [e, t] = te.useState(localStorage.getItem("data-theme") || Jw);
    return (
      te.useEffect(() => {
        localStorage.setItem("data-theme", e),
          document.documentElement.setAttribute("data-theme", e);
      }, [e]),
      { theme: e, setTheme: t }
    );
  },
  Zw = te.createContext(null),
  eS = ({ children: e }) => {
    const { theme: t, setTheme: n } = Gw();
    return T.jsx(Zw.Provider, { value: { theme: t, setTheme: n }, children: e });
  },
  Us = ({ children: e, redirectTo: t, reversed: n }) => {
    const { isAuth: r } = va((i) => i.authSlice);
    return (
      console.log(r),
      n ? (r ? T.jsx(Uc, { to: t, replace: !0 }) : e) : r ? e : T.jsx(Uc, { to: t, replace: !0 })
    );
  },
  Zt = (e, t) => {
    const n = e + Math.random() * (t + 1 - e);
    return n == 0 ? Zt(e, t) : Math.floor(n);
  };
class tS {
  constructor(t, n) {
    Me(this, "canvas");
    Me(this, "x");
    Me(this, "y");
    Me(this, "size");
    Me(this, "speedX");
    Me(this, "speedY");
    Me(this, "deg");
    Me(this, "colorLine");
    Me(this, "ctx");
    (this.canvas = t),
      (this.ctx = n),
      (this.x = Zt(0, t.width)),
      (this.y = Zt(0, t.height)),
      (this.size = Zt(1, 3)),
      (this.speedX = Zt(-1, 1)),
      (this.speedY = Zt(-1, 1)),
      (this.deg = Zt(0, 360)),
      (this.colorLine = `hsl(${this.deg}, 50%, 50%)`);
  }
  update() {
    this.deg++,
      (this.x += this.speedX),
      (this.y = this.y + this.speedY),
      (this.x >= this.canvas.width || this.x <= 0) && (this.speedX = -this.speedX),
      (this.y >= this.canvas.width || this.y <= 0) && (this.speedY = -this.speedY);
  }
  draw() {
    (this.ctx.fillStyle = `hsl(${this.deg}, 50%, 50%)`),
      this.ctx.beginPath(),
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2),
      (this.ctx.strokeStyle = this.colorLine),
      this.ctx.fill();
  }
}
const nS = "_sidebar_upe8f_1",
  rS = { sidebar: nS },
  iS = "_sidebarHead_1lck0_1",
  oS = "_sidebarHeadContainer_1lck0_7",
  $s = { sidebarHead: iS, sidebarHeadContainer: oS },
  sS = "_burgerMenu_1eimq_1",
  lS = "_burgerMenuItem_1eimq_20",
  uS = "_modal_1eimq_27",
  aS = "_modalContainer_1eimq_38",
  cS = "_modalList_1eimq_42",
  fS = "_modalListItem_1eimq_50",
  dS = "_modalListButton_1eimq_66",
  at = {
    burgerMenu: sS,
    burgerMenuItem: lS,
    modal: uS,
    modalContainer: aS,
    modalList: cS,
    modalListItem: fS,
    modalListButton: dS,
  },
  hS = [{ title: "Избранное" }, { title: "Настройки" }, { title: "Друзья" }],
  pS = () =>
    T.jsx("div", {
      className: at.modal,
      children: T.jsx("div", {
        className: at.modalContainer,
        children: T.jsx("ul", {
          className: at.modalList,
          children: hS.map((e) =>
            T.jsx(
              "li",
              {
                className: at.modalListItem,
                children: T.jsx("button", { className: at.modalListButton, children: e.title }),
              },
              e.title
            )
          ),
        }),
      }),
    }),
  mS = () => {
    const [e, t] = te.useState(!1);
    function n() {
      t(!e);
    }
    return T.jsxs(T.Fragment, {
      children: [
        T.jsxs("button", {
          className: at.burgerMenu,
          onClick: n,
          children: [
            T.jsx("div", { className: at.burgerMenuItem }),
            T.jsx("div", { className: at.burgerMenuItem }),
            T.jsx("div", { className: at.burgerMenuItem }),
          ],
        }),
        e && T.jsx(pS, {}),
      ],
    });
  };
function Kp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = Kp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Qp() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Kp(e)) && (r && (r += " "), (r += t));
  return r;
}
const yS = "_auth_16uo1_1",
  gS = "_search_16uo1_25",
  vS = "_message_16uo1_43",
  wS = { auth: yS, search: gS, message: vS },
  ln = ({ variant: e, ...t }) => T.jsx("input", { ...t, className: Qp({ [wS[e]]: e }) }),
  SS = () => {
    const [e, t] = te.useState("");
    return T.jsx("div", {
      className: $s.sidebarHead,
      children: T.jsxs("div", {
        className: $s.sidebarHeadContainer,
        children: [
          T.jsx(mS, {}),
          T.jsx(ln, {
            variant: "search",
            onChange: (n) => t(n.target.value),
            value: e,
            className: $s.search,
            placeholder: "Поиск",
          }),
        ],
      }),
    });
  },
  ES = "_sidebar__item_xgii0_1",
  _S = { sidebar__item: ES },
  kS = ({ name: e, description: t, path: n }) =>
    T.jsxs(Iv, {
      to: `/chat/${n}`,
      className: _S.sidebar__item,
      children: [T.jsx("h5", { children: e }), T.jsx("p", { children: t })],
    }),
  xS = [
    { name: "skywkie", description: "*last message", id: 1512521214 },
    { name: "dimon", description: "*last message", id: 1512521214 },
    { name: "lexa", description: "*last message", id: 1512521214 },
    { name: "vova", description: "*last message", id: 1512521214 },
    { name: "andrey", description: "*last message", id: 1512521214 },
    { name: "daniil", description: "*last message", id: 1512521214 },
    { name: "zhenya", description: "*last message", id: 1512521214 },
  ];
function CS() {
  return T.jsxs("div", {
    className: rS.sidebar,
    children: [
      T.jsx(SS, {}),
      T.jsx("nav", {
        children: xS.map((e, t) =>
          T.jsx(kS, { path: e.id, name: e.name, description: e.description }, t)
        ),
      }),
    ],
  });
}
const RS = "_chat_46e2s_1",
  TS = { chat: RS },
  st = Object.create(null);
st.open = "0";
st.close = "1";
st.ping = "2";
st.pong = "3";
st.message = "4";
st.upgrade = "5";
st.noop = "6";
const Vi = Object.create(null);
Object.keys(st).forEach((e) => {
  Vi[st[e]] = e;
});
const ru = { type: "error", data: "parser error" },
  Yp =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Xp = typeof ArrayBuffer == "function",
  Jp = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  wa = ({ type: e, data: t }, n, r) =>
    Yp && t instanceof Blob
      ? n
        ? r(t)
        : vf(t, r)
      : Xp && (t instanceof ArrayBuffer || Jp(t))
      ? n
        ? r(t)
        : vf(new Blob([t]), r)
      : r(st[e] + (t || "")),
  vf = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function wf(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ws;
function PS(e, t) {
  if (Yp && e.data instanceof Blob) return e.data.arrayBuffer().then(wf).then(t);
  if (Xp && (e.data instanceof ArrayBuffer || Jp(e.data))) return t(wf(e.data));
  wa(e, !1, (n) => {
    Ws || (Ws = new TextEncoder()), t(Ws.encode(n));
  });
}
const Sf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  gr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Sf.length; e++) gr[Sf.charCodeAt(e)] = e;
const NS = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      s,
      l,
      u;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const a = new ArrayBuffer(t),
      c = new Uint8Array(a);
    for (r = 0; r < n; r += 4)
      (o = gr[e.charCodeAt(r)]),
        (s = gr[e.charCodeAt(r + 1)]),
        (l = gr[e.charCodeAt(r + 2)]),
        (u = gr[e.charCodeAt(r + 3)]),
        (c[i++] = (o << 2) | (s >> 4)),
        (c[i++] = ((s & 15) << 4) | (l >> 2)),
        (c[i++] = ((l & 3) << 6) | (u & 63));
    return a;
  },
  OS = typeof ArrayBuffer == "function",
  Sa = (e, t) => {
    if (typeof e != "string") return { type: "message", data: Gp(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: LS(e.substring(1), t) }
      : Vi[n]
      ? e.length > 1
        ? { type: Vi[n], data: e.substring(1) }
        : { type: Vi[n] }
      : ru;
  },
  LS = (e, t) => {
    if (OS) {
      const n = NS(e);
      return Gp(n, t);
    } else return { base64: !0, data: e };
  },
  Gp = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  Zp = "",
  AS = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, s) => {
      wa(o, !1, (l) => {
        (r[s] = l), ++i === n && t(r.join(Zp));
      });
    });
  },
  DS = (e, t) => {
    const n = e.split(Zp),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = Sa(n[i], t);
      if ((r.push(o), o.type === "error")) break;
    }
    return r;
  };
function jS() {
  return new TransformStream({
    transform(e, t) {
      PS(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126) (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128), t.enqueue(i), t.enqueue(n);
      });
    },
  });
}
let Hs;
function Ri(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Ti(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++) (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function MS(e, t) {
  Hs || (Hs = new TextDecoder());
  const n = [];
  let r = 0,
    i = -1,
    o = !1;
  return new TransformStream({
    transform(s, l) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (Ri(n) < 1) break;
          const u = Ti(n, 1);
          (o = (u[0] & 128) === 128),
            (i = u[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (Ri(n) < 2) break;
          const u = Ti(n, 2);
          (i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0)), (r = 3);
        } else if (r === 2) {
          if (Ri(n) < 8) break;
          const u = Ti(n, 8),
            a = new DataView(u.buffer, u.byteOffset, u.length),
            c = a.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            l.enqueue(ru);
            break;
          }
          (i = c * Math.pow(2, 32) + a.getUint32(4)), (r = 3);
        } else {
          if (Ri(n) < i) break;
          const u = Ti(n, i);
          l.enqueue(Sa(o ? u : Hs.decode(u), t)), (r = 0);
        }
        if (i === 0 || i > e) {
          l.enqueue(ru);
          break;
        }
      }
    },
  });
}
const em = 4;
function G(e) {
  if (e) return zS(e);
}
function zS(e) {
  for (var t in G.prototype) e[t] = G.prototype[t];
  return e;
}
G.prototype.on = G.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
G.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
G.prototype.off =
  G.prototype.removeListener =
  G.prototype.removeAllListeners =
  G.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
G.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
G.prototype.emitReserved = G.prototype.emit;
G.prototype.listeners = function (e) {
  return (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || [];
};
G.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Be = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function tm(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const IS = Be.setTimeout,
  BS = Be.clearTimeout;
function ts(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = IS.bind(Be)), (e.clearTimeoutFn = BS.bind(Be)))
    : ((e.setTimeoutFn = Be.setTimeout.bind(Be)), (e.clearTimeoutFn = Be.clearTimeout.bind(Be)));
}
const FS = 1.33;
function US(e) {
  return typeof e == "string" ? $S(e) : Math.ceil((e.byteLength || e.size) * FS);
}
function $S(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function WS(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"), (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function HS(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class VS extends Error {
  constructor(t, n, r) {
    super(t), (this.description = n), (this.context = r), (this.type = "TransportError");
  }
}
class Ea extends G {
  constructor(t) {
    super(),
      (this.writable = !1),
      ts(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new VS(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"), (this.writable = !0), super.emitReserved("open");
  }
  onData(t) {
    const n = Sa(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = WS(t);
    return n.length ? "?" + n : "";
  }
}
const nm = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  iu = 64,
  bS = {};
let Ef = 0,
  Pi = 0,
  _f;
function kf(e) {
  let t = "";
  do (t = nm[e % iu] + t), (e = Math.floor(e / iu));
  while (e > 0);
  return t;
}
function rm() {
  const e = kf(+new Date());
  return e !== _f ? ((Ef = 0), (_f = e)) : e + "." + kf(Ef++);
}
for (; Pi < iu; Pi++) bS[nm[Pi]] = Pi;
let im = !1;
try {
  im = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const qS = im;
function om(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || qS)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Be[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function KS() {}
const QS = (function () {
  return new om({ xdomain: !1 }).responseType != null;
})();
class YS extends Ea {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"),
        (this.xd = (typeof location < "u" && t.hostname !== location.hostname) || i !== t.port);
    }
    const n = t && t.forceBase64;
    (this.supportsBinary = QS && !n), this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if ((this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close"))
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    DS(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      AS(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = rm()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new In(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (i, o) => {
        this.onError("xhr post error", i, o);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
let In = class bi extends G {
  constructor(t, n) {
    super(),
      ts(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = tm(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new om(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r && (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i;
          r.readyState === 3 &&
            ((i = this.opts.cookieJar) === null || i === void 0 || i.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && ((this.index = bi.requestsCount++), (bi.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = KS), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete bi.requests[this.index], (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
  }
  abort() {
    this.cleanup();
  }
};
In.requestsCount = 0;
In.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", xf);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Be ? "pagehide" : "unload";
    addEventListener(e, xf, !1);
  }
}
function xf() {
  for (let e in In.requests) In.requests.hasOwnProperty(e) && In.requests[e].abort();
}
const _a =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Ni = Be.WebSocket || Be.MozWebSocket,
  Cf = !0,
  XS = "arraybuffer",
  Rf =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class JS extends Ea {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Rf
        ? {}
        : tm(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Cf && !Rf ? (n ? new Ni(t, n) : new Ni(t)) : new Ni(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({ description: "websocket connection closed", context: t })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      wa(r, this.supportsBinary, (o) => {
        const s = {};
        try {
          Cf && this.ws.send(o);
        } catch {}
        i &&
          _a(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = rm()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!Ni;
  }
}
class GS extends Ea {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = MS(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = jS();
          i.readable.pipeTo(t.writable), (this.writer = i.writable.getWriter());
          const o = () => {
            r.read()
              .then(({ done: l, value: u }) => {
                l || (this.onPacket(u), o());
              })
              .catch((l) => {});
          };
          o();
          const s = { type: "open" };
          this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(s).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      this.writer.write(r).then(() => {
        i &&
          _a(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const ZS = { websocket: JS, webtransport: GS, polling: YS },
  eE =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  tE = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function ou(e) {
  if (e.length > 2e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let i = eE.exec(e || ""),
    o = {},
    s = 14;
  for (; s--; ) o[tE[s]] = i[s] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":")),
      (o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":")),
      (o.ipv6uri = !0)),
    (o.pathNames = nE(o, o.path)),
    (o.queryKey = rE(o, o.query)),
    o
  );
}
function nE(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function rE(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
let sm = class vn extends G {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = XS),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = ou(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = ou(n.host).host),
      ts(this, n),
      (this.secure =
        n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80")),
      (this.transports = n.transports || ["polling", "websocket", "webtransport"]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" && (this.opts.query = HS(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", { description: "network connection lost" });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = em), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      { query: n, socket: this, hostname: this.hostname, secure: this.secure, port: this.port },
      this.opts.transportOptions[t]
    );
    return new ZS[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      vn.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    vn.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (f) => {
          if (!r)
            if (f.type === "pong" && f.data === "probe") {
              if (((this.upgrading = !0), this.emitReserved("upgrading", n), !n)) return;
              (vn.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (c(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const p = new Error("probe error");
              (p.transport = n.name), this.emitReserved("upgradeError", p);
            }
        }));
    };
    function o() {
      r || ((r = !0), c(), n.close(), (n = null));
    }
    const s = (f) => {
      const p = new Error("probe error: " + f);
      (p.transport = n.name), o(), this.emitReserved("upgradeError", p);
    };
    function l() {
      s("transport closed");
    }
    function u() {
      s("socket closed");
    }
    function a(f) {
      n && f.name !== n.name && o();
    }
    const c = () => {
      n.removeListener("open", i),
        n.removeListener("error", s),
        n.removeListener("close", l),
        this.off("close", u),
        this.off("upgrading", a);
    };
    n.once("open", i),
      n.once("error", s),
      n.once("close", l),
      this.once("close", u),
      this.once("upgrading", a),
      this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (vn.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t),
        this.emitReserved("heartbeat"),
        this.resetPingTimeout(),
        t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t), (this.prevBufferLen = t.length), this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += US(i)), r > 0 && n > this.maxPayload)) return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const o = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", o),
      this.writeBuffer.push(o),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (vn.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener("beforeunload", this.beforeunloadEventListener, !1),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
sm.protocol = em;
function iE(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" && (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = ou(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + o + ":" + r.port + t),
    (r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const oE = typeof ArrayBuffer == "function",
  sE = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  lm = Object.prototype.toString,
  lE =
    typeof Blob == "function" ||
    (typeof Blob < "u" && lm.call(Blob) === "[object BlobConstructor]"),
  uE =
    typeof File == "function" ||
    (typeof File < "u" && lm.call(File) === "[object FileConstructor]");
function ka(e) {
  return (
    (oE && (e instanceof ArrayBuffer || sE(e))) ||
    (lE && e instanceof Blob) ||
    (uE && e instanceof File)
  );
}
function qi(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (qi(e[n])) return !0;
    return !1;
  }
  if (ka(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return qi(e.toJSON(), !0);
  for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && qi(e[n])) return !0;
  return !1;
}
function aE(e) {
  const t = [],
    n = e.data,
    r = e;
  return (r.data = su(n, t)), (r.attachments = t.length), { packet: r, buffers: t };
}
function su(e, t) {
  if (!e) return e;
  if (ka(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = su(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = su(e[r], t));
    return n;
  }
  return e;
}
function cE(e, t) {
  return (e.data = lu(e.data, t)), delete e.attachments, e;
}
function lu(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length) return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = lu(e[n], t);
  else if (typeof e == "object")
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = lu(e[n], t));
  return e;
}
const fE = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  dE = 5;
var z;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(z || (z = {}));
class hE {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === z.EVENT || t.type === z.ACK) && qi(t)
      ? this.encodeAsBinary({
          type: t.type === z.EVENT ? z.BINARY_EVENT : z.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === z.BINARY_EVENT || t.type === z.BINARY_ACK) && (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = aE(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return i.unshift(r), i;
  }
}
function Tf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class xa extends G {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === z.BINARY_EVENT;
      r || n.type === z.BINARY_ACK
        ? ((n.type = r ? z.EVENT : z.ACK),
          (this.reconstructor = new pE(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (ka(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (z[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === z.BINARY_EVENT || r.type === z.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const s = t.substring(o, n);
      if (s != Number(s) || t.charAt(n) !== "-") throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (xa.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case z.CONNECT:
        return Tf(n);
      case z.DISCONNECT:
        return n === void 0;
      case z.CONNECT_ERROR:
        return typeof n == "string" || Tf(n);
      case z.EVENT:
      case z.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" || (typeof n[0] == "string" && fE.indexOf(n[0]) === -1))
        );
      case z.ACK:
      case z.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(), (this.reconstructor = null));
  }
}
class pE {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
      const n = cE(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const mE = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: xa,
      Encoder: hE,
      get PacketType() {
        return z;
      },
      protocol: dE,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Ke(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const yE = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class um extends G {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      Ke(t, "open", this.onopen.bind(this)),
      Ke(t, "packet", this.onpacket.bind(this)),
      Ke(t, "error", this.onerror.bind(this)),
      Ke(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (yE.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
    if ((n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile))
      return this._addToQueue(n), this;
    const r = { type: z.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const s = this.ids++,
        l = n.pop();
      this._registerAckCallback(s, l), (r.id = s);
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let l = 0; l < this.sendBuffer.length; l++)
          this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
        n.call(this, new Error("operation has timed out"));
      }, i),
      s = (...l) => {
        this.io.clearTimeoutFn(o), n.apply(this, l);
      };
    (s.withError = !0), (this.acks[t] = s);
  }
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (s, l) => (s ? i(s) : r(l));
      (o.withError = !0), n.push(o), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0), n.tryCount++, (this.flags = n.flags), this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: z.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1), delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case z.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case z.EVENT:
        case z.BINARY_EVENT:
          this.onevent(t);
          break;
        case z.ACK:
        case z.BINARY_ACK:
          this.onack(t);
          break;
        case z.DISCONNECT:
          this.ondisconnect();
          break;
        case z.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: z.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)), this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: z.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(t), this;
  }
  prependAny(t) {
    return (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(t), this;
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++) if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++) if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function Zn(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Zn.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
Zn.prototype.reset = function () {
  this.attempts = 0;
};
Zn.prototype.setMin = function (e) {
  this.ms = e;
};
Zn.prototype.setMax = function (e) {
  this.max = e;
};
Zn.prototype.setJitter = function (e) {
  this.jitter = e;
};
class uu extends G {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      ts(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5),
      (this.backoff = new Zn({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = n.parser || mE;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new sm(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = Ke(n, "open", function () {
        r.onopen(), t && t();
      }),
      o = (l) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", l),
          t ? t(l) : this.maybeReconnectOnOpen();
      },
      s = Ke(n, "error", o);
    if (this._timeout !== !1) {
      const l = this._timeout,
        u = this.setTimeoutFn(() => {
          i(), o(new Error("timeout")), n.close();
        }, l);
      this.opts.autoUnref && u.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(u);
        });
    }
    return this.subs.push(i), this.subs.push(s), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Ke(t, "ping", this.onping.bind(this)),
      Ke(t, "data", this.ondata.bind(this)),
      Ke(t, "error", this.onerror.bind(this)),
      Ke(t, "close", this.onclose.bind(this)),
      Ke(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    _a(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new um(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()), (this.subs.length = 0), this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1), t.reconnect(), this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1), this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const fr = {};
function Ki(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = iE(e, t.path || "/socket.io"),
    r = n.source,
    i = n.id,
    o = n.path,
    s = fr[i] && o in fr[i].nsps,
    l = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let u;
  return (
    l ? (u = new uu(r, t)) : (fr[i] || (fr[i] = new uu(r, t)), (u = fr[i])),
    n.query && !t.query && (t.query = n.queryKey),
    u.socket(n.path, t)
  );
}
Object.assign(Ki, { Manager: uu, Socket: um, io: Ki, connect: Ki });
const gE = "_chatbody_t9oyx_1",
  vE = "_chatbody__container_t9oyx_9",
  wE = "_message__text_t9oyx_18",
  SE = "_message__container_notme_t9oyx_26",
  EE = "_message__container_me_t9oyx_38",
  _E = "_message__inputContainer_t9oyx_50",
  kE = "_message__send_t9oyx_62",
  Yt = {
    chatbody: gE,
    chatbody__container: vE,
    message__text: wE,
    message__container_notme: SE,
    message__container_me: EE,
    message__inputContainer: _E,
    message__send: kE,
  },
  xE = [
    { text: "qweqw123123ewqe", isMe: !1 },
    { text: "qweq23123213wewqe", isMe: !1 },
    { text: "111rqegwwerg", isMe: !0 },
    { text: "qweqwewqe", isMe: !1 },
    { text: "qweqwqwdwqdewqe", isMe: !0 },
    { text: "wgffrweewqweqwewqe", isMe: !0 },
    { text: "qwe221qwewqe", isMe: !1 },
  ],
  CE = () => {
    const [e, t] = te.useState(""),
      [n, r] = te.useState(xE),
      i = te.useRef(null);
    te.useLayoutEffect(() => {
      (i.current = Ki("http://localhost:5000")),
        i.current.on("connect", () => {
          console.log("connected to server");
        }),
        i.current.on("message", (s) => {
          console.log("@onMessage"), r((l) => [...l, s]);
        });
    }, []);
    function o() {
      e && (r([{ text: e, isMe: !0 }, ...n]), i.current.emit("chat-message", e), t(""));
    }
    return T.jsx("div", {
      className: Yt.chatbody,
      children: T.jsxs("div", {
        className: Yt.chatbody__container,
        children: [
          T.jsxs("div", {
            className: Yt.message__inputContainer,
            children: [
              T.jsx(ln, {
                variant: "message",
                placeholder: "Сообщение",
                type: "text",
                name: "message",
                value: e,
                onChange: (s) => t(s.target.value),
              }),
              T.jsx("button", { onClick: o, className: Yt.message__send, children: "SEND" }),
            ],
          }),
          n.map((s, l) => {
            const u = s.isMe ? Yt.message__container_me : Yt.message__container_notme;
            return T.jsx(
              "div",
              {
                className: u,
                children: T.jsx("p", { className: Yt.message__text, children: s.text }),
              },
              l
            );
          }),
        ],
      }),
    });
  },
  RE = "_chathead_11dlm_1",
  TE = { chathead: RE },
  PE = () => T.jsx("div", { className: TE.chathead, children: "ChatHead" }),
  NE = () => T.jsxs("div", { className: TS.chat, children: [T.jsx(PE, {}), T.jsx(CE, {})] }),
  OE = "_chatnone_1bjgn_1",
  LE = { chatnone: OE },
  AE = () => T.jsx("div", { className: LE.chatnone }),
  DE = () => {
    const e = ti(),
      { isAuth: t } = va((r) => r.authSlice),
      n = te.useRef(null);
    return (
      te.useEffect(() => {
        if (!t) return e("/auth/register");
      }),
      te.useLayoutEffect(() => {
        const r = n.current,
          i = r.getContext("2d");
        (r.width = window.innerWidth), (r.height = window.innerHeight), (i.lineWidth = 1);
        const o = [];
        for (let l = 0; l < 180; l++) o.push(new tS(r, i));
        requestAnimationFrame(s);
        function s() {
          i.clearRect(0, 0, r.width, r.height);
          for (let l = 0; l < o.length; l++) {
            o[l].update(), o[l].draw();
            for (let u = 0; u < o.length; u++) {
              const a = o[l].x,
                c = o[l].y,
                f = o[u].x,
                p = o[u].y,
                g = a - f,
                y = c - p,
                v = Math.sqrt(g * g + y * y);
              if (v < 150) {
                const m = -((v - 100) * 0.02);
                (i.strokeStyle = `hsla(${o[l].deg}, 50%, 50%, ${m})`),
                  i.beginPath(),
                  i.moveTo(a, c),
                  i.lineTo(f, p),
                  i.stroke();
              }
            }
          }
          requestAnimationFrame(s);
        }
      }, []),
      T.jsxs("div", {
        className: "home",
        children: [
          T.jsx("canvas", { ref: n, id: "background-canvas" }),
          T.jsx(CS, {}),
          T.jsxs(Xh, {
            children: [
              T.jsx(Eo, { path: "/", element: T.jsx(AE, {}) }),
              T.jsx(Eo, { path: "/chat/:userId", element: T.jsx(NE, {}) }),
            ],
          }),
        ],
      })
    );
  },
  jE = "_auth_1xhrm_1",
  ME = { auth: jE },
  am = ({ variant: e, children: t, ...n }) =>
    T.jsx("button", { ...n, className: Qp({ [ME[e]]: e }), children: t }),
  zE = () => {
    const [e, t] = te.useState("test123@gmail.com"),
      [n, r] = te.useState("12345678"),
      i = ti(),
      o = qp();
    function s(u) {
      u.preventDefault();
    }
    async function l() {
      const a = await o(nu({ email: e, password: n }));
      if (a.payload === "@fetchRegistrationWithEmail")
        return console.log("ты черт картавый (логин)");
      console.log("@onClick login", a), i("/");
    }
    return T.jsxs("div", {
      className: "login",
      children: [
        T.jsx("h2", { className: "login__title", children: "Sign in" }),
        T.jsxs("form", {
          onSubmit: s,
          className: "login__form",
          children: [
            T.jsx(ln, {
              variant: "auth",
              onChange: (u) => t(u.target.value),
              value: e,
              className: "login__input",
              type: "text",
              placeholder: "Your login",
              name: "email",
            }),
            T.jsx(ln, {
              variant: "auth",
              onChange: (u) => r(u.target.value),
              value: n,
              className: "login__input",
              type: "password",
              placeholder: "Your password",
              name: "password",
            }),
            T.jsx(am, { variant: "auth", onClick: l, children: "Login" }),
          ],
        }),
      ],
    });
  },
  IE = () => {
    const [e, t] = te.useState("test123@gmail.com"),
      [n, r] = te.useState("12345678"),
      [i, o] = te.useState("12345678"),
      s = ti(),
      l = qp(),
      u = va((f) => f.userSlice);
    console.log(u);
    function a(f) {
      f.preventDefault();
    }
    async function c() {
      (await l(tu({ email: e, password: n }))).payload === "@fetchLoginWithEmail" &&
        console.log("ты черт картавый (регистрация)"),
        s("/");
    }
    return T.jsxs("div", {
      className: "register",
      children: [
        T.jsx("h2", { className: "register__title", children: "Sign up" }),
        T.jsxs("form", {
          onSubmit: a,
          className: "register__form",
          children: [
            T.jsx(ln, {
              variant: "auth",
              onChange: (f) => t(f.target.value),
              value: e,
              className: "register__input",
              type: "text",
              placeholder: "Your login",
              name: "email",
            }),
            T.jsx(ln, {
              variant: "auth",
              onChange: (f) => r(f.target.value),
              value: n,
              className: "register__input",
              type: "password",
              placeholder: "Your password",
              name: "password",
            }),
            T.jsx(ln, {
              variant: "auth",
              onChange: (f) => o(f.target.value),
              value: i,
              className: "register__input",
              type: "password",
              placeholder: "Your password",
              name: "password",
            }),
            T.jsx(am, { variant: "auth", onClick: c, children: "Register" }),
          ],
        }),
      ],
    });
  },
  Vs = "/*",
  BE = "/sign-up",
  Pf = "/sign-in",
  FE = [
    { path: Vs, element: T.jsx(Us, { redirectTo: Pf, children: T.jsx(DE, {}) }) },
    { path: BE, element: T.jsx(Us, { redirectTo: Vs, reversed: !0, children: T.jsx(IE, {}) }) },
    { path: Pf, element: T.jsx(Us, { redirectTo: Vs, reversed: !0, children: T.jsx(zE, {}) }) },
  ],
  UE = () => T.jsx(Xh, { children: FE.map((e) => P.createElement(Eo, { ...e, key: e.path })) }),
  $E = () =>
    T.jsx("div", {
      className: "wrapper",
      children: T.jsx("div", {
        className: "inner",
        children: T.jsx("div", { className: "inner__container", children: T.jsx(UE, {}) }),
      }),
    });
qs.createRoot(document.getElementById("root")).render(
  T.jsx(jv, {
    children: T.jsx(s0, { store: Yw, children: T.jsx(eS, { children: T.jsx($E, {}) }) }),
  })
);