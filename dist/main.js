!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 32));
})([
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === o.call(e);
    }
    function a(e) {
      return void 0 === e;
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function u(e) {
      return "[object Function]" === o.call(e);
    }
    function c(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), i(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !a(e) &&
          null !== e.constructor &&
          !a(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isUndefined: a,
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: u,
      isStream: function (e) {
        return s(e) && u(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: c,
      merge: function e() {
        var t = {};
        function n(n, r) {
          "object" == typeof t[r] && "object" == typeof n
            ? (t[r] = e(t[r], n))
            : (t[r] = n);
        }
        for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
        return t;
      },
      deepMerge: function e() {
        var t = {};
        function n(n, r) {
          "object" == typeof t[r] && "object" == typeof n
            ? (t[r] = e(t[r], n))
            : (t[r] = "object" == typeof n ? e({}, n) : n);
        }
        for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          c(t, function (t, o) {
            e[o] = n && "function" == typeof t ? r(t, n) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e) {
        if ("string" != typeof e)
          throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      function r(e, t) {
        for (var n, r = "", o = 0, i = -1, a = 0, s = 0; s <= e.length; ++s) {
          if (s < e.length) n = e.charCodeAt(s);
          else {
            if (47 === n) break;
            n = 47;
          }
          if (47 === n) {
            if (i === s - 1 || 1 === a);
            else if (i !== s - 1 && 2 === a) {
              if (
                r.length < 2 ||
                2 !== o ||
                46 !== r.charCodeAt(r.length - 1) ||
                46 !== r.charCodeAt(r.length - 2)
              )
                if (r.length > 2) {
                  var u = r.lastIndexOf("/");
                  if (u !== r.length - 1) {
                    -1 === u
                      ? ((r = ""), (o = 0))
                      : (o =
                          (r = r.slice(0, u)).length - 1 - r.lastIndexOf("/")),
                      (i = s),
                      (a = 0);
                    continue;
                  }
                } else if (2 === r.length || 1 === r.length) {
                  (r = ""), (o = 0), (i = s), (a = 0);
                  continue;
                }
              t && (r.length > 0 ? (r += "/..") : (r = ".."), (o = 2));
            } else
              r.length > 0
                ? (r += "/" + e.slice(i + 1, s))
                : (r = e.slice(i + 1, s)),
                (o = s - i - 1);
            (i = s), (a = 0);
          } else 46 === n && -1 !== a ? ++a : (a = -1);
        }
        return r;
      }
      var o = {
        resolve: function () {
          for (
            var e, o = "", i = !1, a = arguments.length - 1;
            a >= -1 && !i;
            a--
          ) {
            var s;
            a >= 0
              ? (s = arguments[a])
              : (void 0 === e && (e = t.cwd()), (s = e)),
              n(s),
              0 !== s.length &&
                ((o = s + "/" + o), (i = 47 === s.charCodeAt(0)));
          }
          return (
            (o = r(o, !i)),
            i ? (o.length > 0 ? "/" + o : "/") : o.length > 0 ? o : "."
          );
        },
        normalize: function (e) {
          if ((n(e), 0 === e.length)) return ".";
          var t = 47 === e.charCodeAt(0),
            o = 47 === e.charCodeAt(e.length - 1);
          return (
            0 !== (e = r(e, !t)).length || t || (e = "."),
            e.length > 0 && o && (e += "/"),
            t ? "/" + e : e
          );
        },
        isAbsolute: function (e) {
          return n(e), e.length > 0 && 47 === e.charCodeAt(0);
        },
        join: function () {
          if (0 === arguments.length) return ".";
          for (var e, t = 0; t < arguments.length; ++t) {
            var r = arguments[t];
            n(r), r.length > 0 && (void 0 === e ? (e = r) : (e += "/" + r));
          }
          return void 0 === e ? "." : o.normalize(e);
        },
        relative: function (e, t) {
          if ((n(e), n(t), e === t)) return "";
          if ((e = o.resolve(e)) === (t = o.resolve(t))) return "";
          for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
          for (
            var i = e.length, a = i - r, s = 1;
            s < t.length && 47 === t.charCodeAt(s);
            ++s
          );
          for (
            var u = t.length - s, c = a < u ? a : u, f = -1, l = 0;
            l <= c;
            ++l
          ) {
            if (l === c) {
              if (u > c) {
                if (47 === t.charCodeAt(s + l)) return t.slice(s + l + 1);
                if (0 === l) return t.slice(s + l);
              } else
                a > c &&
                  (47 === e.charCodeAt(r + l) ? (f = l) : 0 === l && (f = 0));
              break;
            }
            var p = e.charCodeAt(r + l);
            if (p !== t.charCodeAt(s + l)) break;
            47 === p && (f = l);
          }
          var h = "";
          for (l = r + f + 1; l <= i; ++l)
            (l !== i && 47 !== e.charCodeAt(l)) ||
              (0 === h.length ? (h += "..") : (h += "/.."));
          return h.length > 0
            ? h + t.slice(s + f)
            : ((s += f), 47 === t.charCodeAt(s) && ++s, t.slice(s));
        },
        _makeLong: function (e) {
          return e;
        },
        dirname: function (e) {
          if ((n(e), 0 === e.length)) return ".";
          for (
            var t = e.charCodeAt(0),
              r = 47 === t,
              o = -1,
              i = !0,
              a = e.length - 1;
            a >= 1;
            --a
          )
            if (47 === (t = e.charCodeAt(a))) {
              if (!i) {
                o = a;
                break;
              }
            } else i = !1;
          return -1 === o
            ? r
              ? "/"
              : "."
            : r && 1 === o
            ? "//"
            : e.slice(0, o);
        },
        basename: function (e, t) {
          if (void 0 !== t && "string" != typeof t)
            throw new TypeError('"ext" argument must be a string');
          n(e);
          var r,
            o = 0,
            i = -1,
            a = !0;
          if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t.length === e.length && t === e) return "";
            var s = t.length - 1,
              u = -1;
            for (r = e.length - 1; r >= 0; --r) {
              var c = e.charCodeAt(r);
              if (47 === c) {
                if (!a) {
                  o = r + 1;
                  break;
                }
              } else
                -1 === u && ((a = !1), (u = r + 1)),
                  s >= 0 &&
                    (c === t.charCodeAt(s)
                      ? -1 == --s && (i = r)
                      : ((s = -1), (i = u)));
            }
            return (
              o === i ? (i = u) : -1 === i && (i = e.length), e.slice(o, i)
            );
          }
          for (r = e.length - 1; r >= 0; --r)
            if (47 === e.charCodeAt(r)) {
              if (!a) {
                o = r + 1;
                break;
              }
            } else -1 === i && ((a = !1), (i = r + 1));
          return -1 === i ? "" : e.slice(o, i);
        },
        extname: function (e) {
          n(e);
          for (
            var t = -1, r = 0, o = -1, i = !0, a = 0, s = e.length - 1;
            s >= 0;
            --s
          ) {
            var u = e.charCodeAt(s);
            if (47 !== u)
              -1 === o && ((i = !1), (o = s + 1)),
                46 === u
                  ? -1 === t
                    ? (t = s)
                    : 1 !== a && (a = 1)
                  : -1 !== t && (a = -1);
            else if (!i) {
              r = s + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === o ||
            0 === a ||
            (1 === a && t === o - 1 && t === r + 1)
            ? ""
            : e.slice(t, o);
        },
        format: function (e) {
          if (null === e || "object" != typeof e)
            throw new TypeError(
              'The "pathObject" argument must be of type Object. Received type ' +
                typeof e
            );
          return (function (e, t) {
            var n = t.dir || t.root,
              r = t.base || (t.name || "") + (t.ext || "");
            return n ? (n === t.root ? n + r : n + e + r) : r;
          })("/", e);
        },
        parse: function (e) {
          n(e);
          var t = { root: "", dir: "", base: "", ext: "", name: "" };
          if (0 === e.length) return t;
          var r,
            o = e.charCodeAt(0),
            i = 47 === o;
          i ? ((t.root = "/"), (r = 1)) : (r = 0);
          for (
            var a = -1, s = 0, u = -1, c = !0, f = e.length - 1, l = 0;
            f >= r;
            --f
          )
            if (47 !== (o = e.charCodeAt(f)))
              -1 === u && ((c = !1), (u = f + 1)),
                46 === o
                  ? -1 === a
                    ? (a = f)
                    : 1 !== l && (l = 1)
                  : -1 !== a && (l = -1);
            else if (!c) {
              s = f + 1;
              break;
            }
          return (
            -1 === a ||
            -1 === u ||
            0 === l ||
            (1 === l && a === u - 1 && a === s + 1)
              ? -1 !== u &&
                (t.base = t.name = 0 === s && i ? e.slice(1, u) : e.slice(s, u))
              : (0 === s && i
                  ? ((t.name = e.slice(1, a)), (t.base = e.slice(1, u)))
                  : ((t.name = e.slice(s, a)), (t.base = e.slice(s, u))),
                (t.ext = e.slice(a, u))),
            s > 0 ? (t.dir = e.slice(0, s - 1)) : i && (t.dir = "/"),
            t
          );
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null,
      };
      (o.posix = o), (e.exports = o);
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(14),
        o = n(15),
        i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        s = new RegExp(
          "^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+"
        );
      function u(e) {
        return (e || "").toString().replace(s, "");
      }
      var c = [
          ["#", "hash"],
          ["?", "query"],
          function (e) {
            return e.replace("\\", "/");
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d+)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1],
        ],
        f = { hash: 1, query: 1 };
      function l(e) {
        var n,
          r =
            ("undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : {}
            ).location || {},
          o = {},
          a = typeof (e = e || r);
        if ("blob:" === e.protocol) o = new h(unescape(e.pathname), {});
        else if ("string" === a) for (n in ((o = new h(e, {})), f)) delete o[n];
        else if ("object" === a) {
          for (n in e) n in f || (o[n] = e[n]);
          void 0 === o.slashes && (o.slashes = i.test(e.href));
        }
        return o;
      }
      function p(e) {
        e = u(e);
        var t = a.exec(e);
        return {
          protocol: t[1] ? t[1].toLowerCase() : "",
          slashes: !!t[2],
          rest: t[3],
        };
      }
      function h(e, t, n) {
        if (((e = u(e)), !(this instanceof h))) return new h(e, t, n);
        var i,
          a,
          s,
          f,
          d,
          m,
          g = c.slice(),
          y = typeof t,
          v = this,
          w = 0;
        for (
          "object" !== y && "string" !== y && ((n = t), (t = null)),
            n && "function" != typeof n && (n = o.parse),
            t = l(t),
            i = !(a = p(e || "")).protocol && !a.slashes,
            v.slashes = a.slashes || (i && t.slashes),
            v.protocol = a.protocol || t.protocol || "",
            e = a.rest,
            a.slashes || (g[3] = [/(.*)/, "pathname"]);
          w < g.length;
          w++
        )
          "function" != typeof (f = g[w])
            ? ((s = f[0]),
              (m = f[1]),
              s != s
                ? (v[m] = e)
                : "string" == typeof s
                ? ~(d = e.indexOf(s)) &&
                  ("number" == typeof f[2]
                    ? ((v[m] = e.slice(0, d)), (e = e.slice(d + f[2])))
                    : ((v[m] = e.slice(d)), (e = e.slice(0, d))))
                : (d = s.exec(e)) && ((v[m] = d[1]), (e = e.slice(0, d.index))),
              (v[m] = v[m] || (i && f[3] && t[m]) || ""),
              f[4] && (v[m] = v[m].toLowerCase()))
            : (e = f(e));
        n && (v.query = n(v.query)),
          i &&
            t.slashes &&
            "/" !== v.pathname.charAt(0) &&
            ("" !== v.pathname || "" !== t.pathname) &&
            (v.pathname = (function (e, t) {
              if ("" === e) return t;
              for (
                var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")),
                  r = n.length,
                  o = n[r - 1],
                  i = !1,
                  a = 0;
                r--;

              )
                "." === n[r]
                  ? n.splice(r, 1)
                  : ".." === n[r]
                  ? (n.splice(r, 1), a++)
                  : a && (0 === r && (i = !0), n.splice(r, 1), a--);
              return (
                i && n.unshift(""),
                ("." !== o && ".." !== o) || n.push(""),
                n.join("/")
              );
            })(v.pathname, t.pathname)),
          r(v.port, v.protocol) || ((v.host = v.hostname), (v.port = "")),
          (v.username = v.password = ""),
          v.auth &&
            ((f = v.auth.split(":")),
            (v.username = f[0] || ""),
            (v.password = f[1] || "")),
          (v.origin =
            v.protocol && v.host && "file:" !== v.protocol
              ? v.protocol + "//" + v.host
              : "null"),
          (v.href = v.toString());
      }
      (h.prototype = {
        set: function (e, t, n) {
          var i = this;
          switch (e) {
            case "query":
              "string" == typeof t && t.length && (t = (n || o.parse)(t)),
                (i[e] = t);
              break;
            case "port":
              (i[e] = t),
                r(t, i.protocol)
                  ? t && (i.host = i.hostname + ":" + t)
                  : ((i.host = i.hostname), (i[e] = ""));
              break;
            case "hostname":
              (i[e] = t), i.port && (t += ":" + i.port), (i.host = t);
              break;
            case "host":
              (i[e] = t),
                /:\d+$/.test(t)
                  ? ((t = t.split(":")),
                    (i.port = t.pop()),
                    (i.hostname = t.join(":")))
                  : ((i.hostname = t), (i.port = ""));
              break;
            case "protocol":
              (i.protocol = t.toLowerCase()), (i.slashes = !n);
              break;
            case "pathname":
            case "hash":
              if (t) {
                var a = "pathname" === e ? "/" : "#";
                i[e] = t.charAt(0) !== a ? a + t : t;
              } else i[e] = t;
              break;
            default:
              i[e] = t;
          }
          for (var s = 0; s < c.length; s++) {
            var u = c[s];
            u[4] && (i[u[1]] = i[u[1]].toLowerCase());
          }
          return (
            (i.origin =
              i.protocol && i.host && "file:" !== i.protocol
                ? i.protocol + "//" + i.host
                : "null"),
            (i.href = i.toString()),
            i
          );
        },
        toString: function (e) {
          (e && "function" == typeof e) || (e = o.stringify);
          var t,
            n = this,
            r = n.protocol;
          r && ":" !== r.charAt(r.length - 1) && (r += ":");
          var i = r + (n.slashes ? "//" : "");
          return (
            n.username &&
              ((i += n.username),
              n.password && (i += ":" + n.password),
              (i += "@")),
            (i += n.host + n.pathname),
            (t = "object" == typeof n.query ? e(n.query) : n.query) &&
              (i += "?" !== t.charAt(0) ? "?" + t : t),
            n.hash && (i += n.hash),
            i
          );
        },
      }),
        (h.extractProtocol = p),
        (h.location = l),
        (h.trimLeft = u),
        (h.qs = o),
        (e.exports = h);
    }.call(this, n(13)));
  },
  function (e, t, n) {
    e.exports = n(16);
  },
  function (e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var u,
      c = [],
      f = !1,
      l = -1;
    function p() {
      f &&
        u &&
        ((f = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && h());
    }
    function h() {
      if (!f) {
        var e = s(p);
        f = !0;
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++l < t; ) u && u[l].run();
          (l = -1), (t = c.length);
        }
        (u = null),
          (f = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function d(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new d(e, t)), 1 !== c.length || f || s(h);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = m),
      (o.addListener = m),
      (o.once = m),
      (o.off = m),
      (o.removeListener = m),
      (o.removeAllListeners = m),
      (o.emit = m),
      (o.prependListener = m),
      (o.prependOnceListener = m),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, n) {
      if (!t) return e;
      var i;
      if (n) i = n(t);
      else if (r.isURLSearchParams(t)) i = t.toString();
      else {
        var a = [];
        r.forEach(t, function (e, t) {
          null != e &&
            (r.isArray(e) ? (t += "[]") : (e = [e]),
            r.forEach(e, function (e) {
              r.isDate(e)
                ? (e = e.toISOString())
                : r.isObject(e) && (e = JSON.stringify(e)),
                a.push(o(t) + "=" + o(e));
            }));
        }),
          (i = a.join("&"));
      }
      if (i) {
        var s = e.indexOf("#");
        -1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        o = n(21),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !r.isUndefined(e) &&
          r.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var s,
        u = {
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              (void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t))) &&
              (s = n(9)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : r.isObject(e)
                  ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (u.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        r.forEach(["delete", "get", "head"], function (e) {
          u.headers[e] = {};
        }),
        r.forEach(["post", "put", "patch"], function (e) {
          u.headers[e] = r.merge(i);
        }),
        (e.exports = u);
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(22),
      i = n(6),
      a = n(24),
      s = n(27),
      u = n(28),
      c = n(10);
    e.exports = function (e) {
      return new Promise(function (t, f) {
        var l = e.data,
          p = e.headers;
        r.isFormData(l) && delete p["Content-Type"];
        var h = new XMLHttpRequest();
        if (e.auth) {
          var d = e.auth.username || "",
            m = e.auth.password || "";
          p.Authorization = "Basic " + btoa(d + ":" + m);
        }
        var g = a(e.baseURL, e.url);
        if (
          (h.open(
            e.method.toUpperCase(),
            i(g, e.params, e.paramsSerializer),
            !0
          ),
          (h.timeout = e.timeout),
          (h.onreadystatechange = function () {
            if (
              h &&
              4 === h.readyState &&
              (0 !== h.status ||
                (h.responseURL && 0 === h.responseURL.indexOf("file:")))
            ) {
              var n =
                  "getAllResponseHeaders" in h
                    ? s(h.getAllResponseHeaders())
                    : null,
                r = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? h.response
                      : h.responseText,
                  status: h.status,
                  statusText: h.statusText,
                  headers: n,
                  config: e,
                  request: h,
                };
              o(t, f, r), (h = null);
            }
          }),
          (h.onabort = function () {
            h && (f(c("Request aborted", e, "ECONNABORTED", h)), (h = null));
          }),
          (h.onerror = function () {
            f(c("Network Error", e, null, h)), (h = null);
          }),
          (h.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              f(c(t, e, "ECONNABORTED", h)),
              (h = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var y = n(29),
            v =
              (e.withCredentials || u(g)) && e.xsrfCookieName
                ? y.read(e.xsrfCookieName)
                : void 0;
          v && (p[e.xsrfHeaderName] = v);
        }
        if (
          ("setRequestHeader" in h &&
            r.forEach(p, function (e, t) {
              void 0 === l && "content-type" === t.toLowerCase()
                ? delete p[t]
                : h.setRequestHeader(t, e);
            }),
          r.isUndefined(e.withCredentials) ||
            (h.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            h.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          h.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            h.upload &&
            h.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              h && (h.abort(), f(e), (h = null));
            }),
          void 0 === l && (l = null),
          h.send(l);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(23);
    e.exports = function (e, t, n, o, i) {
      var a = new Error(e);
      return r(a, t, n, o, i);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
      t = t || {};
      var n = {},
        o = ["url", "method", "params", "data"],
        i = ["headers", "auth", "proxy"],
        a = [
          "baseURL",
          "url",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "maxContentLength",
          "validateStatus",
          "maxRedirects",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
        ];
      r.forEach(o, function (e) {
        void 0 !== t[e] && (n[e] = t[e]);
      }),
        r.forEach(i, function (o) {
          r.isObject(t[o])
            ? (n[o] = r.deepMerge(e[o], t[o]))
            : void 0 !== t[o]
            ? (n[o] = t[o])
            : r.isObject(e[o])
            ? (n[o] = r.deepMerge(e[o]))
            : void 0 !== e[o] && (n[o] = e[o]);
        }),
        r.forEach(a, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
        });
      var s = o.concat(i).concat(a),
        u = Object.keys(t).filter(function (e) {
          return -1 === s.indexOf(e);
        });
      return (
        r.forEach(u, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
        }),
        n
      );
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      this.message = e;
    }
    (r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (e.exports = r);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      if (((t = t.split(":")[0]), !(e = +e))) return !1;
      switch (t) {
        case "http":
        case "ws":
          return 80 !== e;
        case "https":
        case "wss":
          return 443 !== e;
        case "ftp":
          return 21 !== e;
        case "gopher":
          return 70 !== e;
        case "file":
          return !1;
      }
      return 0 !== e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;
    function o(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function i(e) {
      try {
        return encodeURIComponent(e);
      } catch (e) {
        return null;
      }
    }
    (t.stringify = function (e, t) {
      t = t || "";
      var n,
        o,
        a = [];
      for (o in ("string" != typeof t && (t = "?"), e))
        if (r.call(e, o)) {
          if (
            ((n = e[o]) || (null != n && !isNaN(n)) || (n = ""),
            (o = i(o)),
            (n = i(n)),
            null === o || null === n)
          )
            continue;
          a.push(o + "=" + n);
        }
      return a.length ? t + a.join("&") : "";
    }),
      (t.parse = function (e) {
        for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; (t = n.exec(e)); ) {
          var i = o(t[1]),
            a = o(t[2]);
          null === i || null === a || i in r || (r[i] = a);
        }
        return r;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(5),
      i = n(17),
      a = n(11);
    function s(e) {
      var t = new i(e),
        n = o(i.prototype.request, t);
      return r.extend(n, i.prototype, t), r.extend(n, t), n;
    }
    var u = s(n(8));
    (u.Axios = i),
      (u.create = function (e) {
        return s(a(u.defaults, e));
      }),
      (u.Cancel = n(12)),
      (u.CancelToken = n(30)),
      (u.isCancel = n(7)),
      (u.all = function (e) {
        return Promise.all(e);
      }),
      (u.spread = n(31)),
      (e.exports = u),
      (e.exports.default = u);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(6),
      i = n(18),
      a = n(19),
      s = n(11);
    function u(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (u.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = s(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = [a, void 0],
        n = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        n = n.then(t.shift(), t.shift());
      return n;
    }),
      (u.prototype.getUri = function (e) {
        return (
          (e = s(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function (e) {
        u.prototype[e] = function (t, n) {
          return this.request(r.merge(n || {}, { method: e, url: t }));
        };
      }),
      r.forEach(["post", "put", "patch"], function (e) {
        u.prototype[e] = function (t, n, o) {
          return this.request(r.merge(o || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = u);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(20),
      i = n(7),
      a = n(8);
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = r.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        r.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return (
              s(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              i(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t, n) {
      return (
        r.forEach(n, function (n) {
          e = n(e, t);
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(10);
    e.exports = function (e, t, n) {
      var o = n.config.validateStatus;
      !o || o(n.status)
        ? e(n)
        : t(
            r(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = r),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(25),
      o = n(26);
    e.exports = function (e, t) {
      return e && !r(t) ? o(e, t) : t;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = [
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
      ];
    e.exports = function (e) {
      var t,
        n,
        i,
        a = {};
      return e
        ? (r.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = r.trim(e.substr(0, i)).toLowerCase()),
              (n = r.trim(e.substr(i + 1))),
              t)
            ) {
              if (a[t] && o.indexOf(t) >= 0) return;
              a[t] =
                "set-cookie" === t
                  ? (a[t] ? a[t] : []).concat([n])
                  : a[t]
                  ? a[t] + ", " + n
                  : n;
            }
          }),
          a)
        : a;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function o(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var n = r.isString(t) ? o(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, o, i, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && s.push("path=" + o),
              r.isString(i) && s.push("domain=" + i),
              !0 === a && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(12);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var n = this;
      e(function (e) {
        n.reason || ((n.reason = new r(e)), t(n.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
      o = n.n(r),
      i = n(2),
      a = n.n(i);
    function s(e) {
      return { endpointPath: e };
    }
    function u(e, t, n = {}) {
      const r = a()(e);
      return r.set("pathname", t), r.set("query", n), r.toString();
    }
    function c(e, t, n, r = {}) {
      const i = (function (e = "") {
        if ("string" != typeof e)
          throw new Error(`Skylink has to be a string, ${typeof e} provided`);
        const t = e.match(f);
        if (t) return t[1];
        const n = e.match(l);
        if (n) return n[1];
        const r = a()(e).pathname.match(p);
        if (r) return r[1];
        throw new Error(`Could not extract skylink from '${e}'`);
      })(n);
      return u(e, o.a.posix.join(t, i), r);
    }
    const f = new RegExp("^([a-zA-Z0-9_-]{46})$"),
      l = new RegExp("^sia:(?://)?([a-zA-Z0-9_-]{46})$"),
      p = new RegExp("^/([a-zA-Z0-9_-]{46})");
    class h {
      constructor(e = null) {
        var t;
        null === e &&
          (e = (t = new URL(window.location.href)).href.substring(
            0,
            t.href.indexOf(t.pathname)
          )),
          (this.portalUrl = e);
      }
    }
    const d = { ...s("/") };
    (h.prototype.download = function (e, t = {}) {
      const n = { ...d, ...t, download: !0 },
        r = this.getDownloadUrl(e, n);
      window.open(r, "_blank");
    }),
      (h.prototype.getDownloadUrl = function (e, t = {}) {
        const n = { ...d, ...t },
          r = n.download ? { attachment: !0 } : {};
        return c(this.portalUrl, n.endpointPath, e, r);
      }),
      (h.prototype.metadata = function (e, t = {}) {
        throw new Error("Unimplemented");
      }),
      (h.prototype.open = function (e, t = {}) {
        const n = { ...d, ...t },
          r = c(this.portalUrl, n.endpointPath, e);
        window.open(r, "_blank");
      });
    var m = n(3),
      g = n.n(m);
    const y = {
      ...s("/skynet/skyfile"),
      portalFileFieldname: "file",
      portalDirectoryFileFieldname: "files[]",
    };
    function v(e) {
      return new File([e], e.name, { type: e.type });
    }
    (h.prototype.upload = async function (e, t = {}) {
      const n = { ...y, ...t },
        r = new FormData();
      r.append(n.portalFileFieldname, v(e));
      const o = u(this.portalUrl, n.endpointPath),
        { data: i } = await g.a.post(
          o,
          r,
          n.onUploadProgress && {
            onUploadProgress: ({ loaded: e, total: t }) => {
              const r = e / t;
              n.onUploadProgress(r, { loaded: e, total: t });
            },
          }
        );
      return i;
    }),
      (h.prototype.uploadDirectory = async function (e, t, n = {}) {
        const r = { ...y, ...n },
          o = new FormData();
        Object.entries(e).forEach(([e, t]) => {
          o.append(r.portalDirectoryFileFieldname, v(t), e);
        });
        const i = u(this.portalUrl, r.endpointPath, { filename: t }),
          { data: a } = await g.a.post(
            i,
            o,
            r.onUploadProgress && {
              onUploadProgress: ({ loaded: e, total: t }) => {
                const n = e / t;
                r.onUploadProgress(n, { loaded: e, total: t });
              },
            }
          );
        return a;
      });
    const w = new h();
    window.saveNote = function (e, t) {
      const n = {
        "index.html": new File(
          [
            '    <!doctype html>\n    <html>\n        <head>\n            <meta charset=utf-8>\n            <title>Your SkyNote</title>\n        </head>\n        <body>\n<script>\nwindow.onload = function(){\n    var title = title;\n    var note = note;\n\n   document.getElementById("titlePara").innerHTML = title;\n   document.getElementById("notePara").innerHTML = note;\n}\n</script>\n        <center>\n        <h2>Your Note</h2>\n        Title:<p id="titlePara"></p>\n        Note:<p id="notePara"></p>\n        </center>\n        </body>\n    </html>',
          ],
          "index.html",
          { type: "text/html" }
        ),
        title: e,
        note: t,
      };
      try {
        (async () => {
          const { skylink: e } = await w.uploadDirectory(n, "noteFolder");
          let t = "/" + e + "/";
          (document.getElementById("noteLink").href = t),
            (document.getElementById("noteLink").text = skyLink);
        })();
      } catch (e) {
        alert(e);
      }
    };
  },
]);
