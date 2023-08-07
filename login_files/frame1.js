!(function (n) {
  (n.su = n.su || {}),
    (n.su.debug = n.su.debug || {
      log: function () {},
      warn: function () {},
      error: function () {},
    }),
    n.ajaxSetup({
      type: "POST",
      cache: !0,
      success: function (e, t, i) {},
      error: function (e, t, i) {},
    }),
    (n.su.format = {}),
    (n.su.format.capitalize = function (e) {
      return (e = e.toLowerCase()).replace(/\b(\w)|\s(\w)/g, function (e) {
        return e.toUpperCase();
      });
    }),
    (n.su.getAttrObject = function (e, t) {
      try {
        return new Function("return " + t)();
      } catch (s) {}
      if (!(t = t.replace(/[\{,\}]/g, ""))) return "";
      if ("true" === t) return !0;
      if ("false" === t) return !1;
      if (/^\d+$/.test(t)) return parseInt(t, 10);
      for (var i = t.split("."), r = e, n = 0, a = i.length; n < a; ) {
        if (!(r = r[i[n]])) return !1;
        n++;
      }
      return r || !1;
    }),
    (n.su.formatAttrName = function (e) {
      for (var t = e.split("-"), i = 0; i < t.length; i++)
        0 !== i &&
          (t[i] = t[i].replace(/(\w)/, function (e) {
            return e.toUpperCase();
          }));
      return t.join("");
    }),
    (n.su.randomId = function (e) {
      return e + "-" + n.su.guid();
    }),
    (n.su.guid = function () {
      for (
        var e,
          t,
          i,
          r = function (e, t, i) {
            return i !== undefined
              ? parseInt(e.toString(), i).toString(t)
              : parseInt(e.toString()).toString(t);
          },
          n = function (e) {
            return "NaN" != Number(e).toString() && 0 <= e && e < 10
              ? "0" + Math.floor(e)
              : e.toString();
          },
          a = new Date(),
          s = "",
          o = r(
            (e = a).getFullYear() + n(e.getMonth() + 1) + n(e.getDay()),
            16
          ),
          l = r(
            n((t = a).getHours()) +
              n(t.getMinutes()) +
              n(t.getSeconds()) +
              n(parseInt(t.getMilliseconds() / 10)),
            16
          ),
          u = 0;
        u < 9;
        u++
      )
        s += Math.floor(16 * Math.random()).toString(16);
      for (s += o, s += l; s.length < 32; )
        s += Math.floor(16 * Math.random()).toString(16);
      return (
        (i = s).slice(0, 8) +
        "-" +
        i.slice(8, 12) +
        "-" +
        i.slice(12, 16) +
        "-" +
        i.slice(16, 20) +
        "-" +
        i.slice(20)
      );
    }),
    (n.su.clone = function (e) {
      var t, i;
      switch (n.type(e)) {
        case "array":
          for (t = [], i = 0; i < e.length; i++) t[i] = n.su.clone(e[i]);
          return t;
        case "object":
          for (i in ((t = {}), e)) t[i] = n.su.clone(e[i]);
          return t;
        case "null":
          return null;
        case "undefined":
          return undefined;
        case "function":
          return e;
        case "string":
        case "number":
          return (t = e);
        case "boolean":
          return !!e;
        default:
          return undefined;
      }
    }),
    (n.su.getDefaultEvent = function (e, t, i) {
      var r = !0;
      return (
        i === undefined || null === i ? (i = []) : n.isArray(i) || (i = [i]),
        {
          exe: function () {
            return r && t.apply(e, i), r;
          },
          ev: {
            preventDefault: function () {
              r = !1;
            },
          },
        }
      );
    }),
    (n.su.transSpecialChar = function (e) {
      var t = document.createElement("div");
      return (
        t.innerText !== undefined ? (t.innerText = e) : (t.textContent = e),
        t.innerHTML
      );
    }),
    (n.su.inherit = function (e, t) {
      if ("function" != typeof e || "function" != typeof t) return !1;
      var i = function () {};
      (i.prototype = e.prototype),
        (t.prototype = new i()),
        ((t.prototype.constructor = t).superclass = e.prototype);
    }),
    (n.su.getCookie = function () {
      for (var e, t, i = document.cookie; 0 < i.length; ) {
        if (-1 == (e = i.indexOf(";"))) {
          if (!0 === r((t = i)))
            return -1 == (e = t.indexOf("=")) ? null : n(t.slice(e + 1));
        } else if (!0 === r((t = i.slice(0, e))))
          return -1 == (e = t.indexOf("=")) ? null : n(t.slice(e + 1));
        i = i.slice(e + 1);
      }
      function r(e) {
        var t = e.indexOf("=");
        return "COOKIE" == n(e.slice(0, t)).toUpperCase();
      }
      function n(e) {
        var t,
          i,
          r = "",
          n = e.length;
        for (t = 0; t < n; t++)
          if (document.all) {
            if (" " != e.slice(t, t + 1)) break;
          } else if (" " != e[t]) break;
        for (i = n - 1; 0 < i; i--)
          if (document.all) {
            if (" " != e.slice(i, i + 1)) break;
          } else if (" " != e[i]) break;
        return i < t ? r : (r = e.slice(t, i + 1));
      }
      return null;
    }),
    (n.inArray = function (e, t) {
      if (!n.isArray(t)) return -1;
      for (var i = 0, r = t.length; i < r; i++) if (t[i] === e) return i;
      return -1;
    }),
    (n.su.getObjectLength = function (e) {
      var t = 0;
      if (e) for (var i in e) e.hasOwnProperty(i) && t++;
      return t;
    }),
    (n.su.isEmptyObject = function (e) {
      for (var t in e) return !1;
      return !0;
    }),
    (n.su.isIe8 = n.su.isIe = new Function("return !-[1,];")()),
    (n.su.platform = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
      ? "ios"
      : /(Android)/i.test(navigator.userAgent)
      ? "android"
      : "pc"),
    (n.su.escapeHtml = function (e) {
      if (e && e.toString) {
        var t = e.toString();
        return (t = (t = (t = (t = (t = t.replace(/\&/g, "&amp;")).replace(
          /\</g,
          "&lt;"
        )).replace(/\>/g, "&gt;")).replace(/\"/g, "&quot;")).replace(
          /\s/g,
          "&nbsp;"
        ));
      }
      return e;
    }),
    (n.su.unEscapeHtml = function (e) {
      if (e && e.toString) {
        var t = e.toString();
        return (t = (t = (t = (t = (t = t.replace(/&amp;/g, "&")).replace(
          /&lt;/g,
          "<"
        )).replace(/&gt;/g, ">")).replace(/&quot;/g, '"')).replace(
          /&nbsp;/g,
          " "
        ));
      }
      return e;
    }),
    (n.su.getBrowseVersion = function () {
      var e,
        t = {},
        i = navigator.userAgent.toLowerCase();
      return (
        (e = i.match(/msie ([\d.]+)/))
          ? ((t["browse"] = "ie"), (t["version"] = e[1]))
          : (e = i.match(/firefox\/([\d.]+)/))
          ? ((t["browse"] = "firefox"), (t["version"] = e[1]))
          : (e = i.match(/chrome\/([\d.]+)/))
          ? ((t["browse"] = "chrome"), (t["version"] = e[1]))
          : (e = i.match(/opera.([\d.]+)/))
          ? ((t["browse"] = "opera"), (t["version"] = e[1]))
          : (e = i.match(/version\/([\d.]+).*safari/)) &&
            ((t["browse"] = "safari"), (t["version"] = e[1])),
        t
      );
    }),
    (n.su.apply = function (e, t, i) {
      var r;
      if ((i && n.su.apply(e, i), e && t && "object" == typeof t))
        for (r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      return e;
    }),
    (n.su.valueEqual = function (e, t) {
      if (e === t) return !0;
      var i = n.type(e);
      if (i !== n.type(t)) return !1;
      switch (i) {
        case "array":
        case "object":
          return JSON.stringify(e) === JSON.stringify(t);
        default:
          return !1;
      }
    }),
    (n.su.isMobile = function () {
      var e,
        t = !1;
      return (
        (e = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          e
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            e.substr(0, 4)
          )) &&
          (t = !0),
        t
      );
    }),
    (n.su.encodePara = function (e) {
      return e && e.toString ? encodeURIComponent(e.toString()) : e;
    }),
    (n.su.decodePara = function (e) {
      return e && e.toString ? decodeURIComponent(e.toString()) : e;
    }),
    (n.su.debounce = function (r, n, a) {
      var s;
      return function () {
        var e = this,
          t = arguments,
          i = a && !s;
        clearTimeout(s),
          (s = setTimeout(function () {
            (s = null), a || r.apply(e, t);
          }, n)),
          i && r.apply(e, t);
      };
    }),
    (n.su.throttle = function (i, r, n) {
      var a,
        s = new Date();
      return function () {
        var e = arguments,
          t = new Date();
        clearTimeout(a),
          n <= t - s ? (i.apply(this, e), (s = t)) : (a = setTimeout(i, r));
      };
    }),
    (n.su.getMaxZIndex = function () {
      return Math.max.apply(
        null,
        n.map(n("body div:visible"), function (e, t) {
          if (
            "static" != n(e).css("position") &&
            0 != n(e).width() &&
            0 != n(e).height()
          )
            return parseInt(n(e).css("z-index")) || 1;
        })
      );
    }),
    (n.su.adjustViewPort = function () {
      if (n.su.isMobile()) {
        var e = n('meta[name="viewport"]')[0];
        (e.content =
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=0"),
          767 < n(window).width() && (e.content = "width=767,user-scalable=0");
      }
    }),
    (n.su.waiting = function (e, t, i) {
      if ("function" !== n.type(e) || !0 !== n.su.development) return e;
      i = i || 2e3;
      var r = setTimeout(t, i);
      return function () {
        clearTimeout(r), e && e();
      };
    }),
    (n.su.version = function () {
      return n("head meta[name=version]").attr("content");
    }),
    (n.su.isSuperAdmin = function () {
      return 0 < location.href.indexOf("/superadmin");
    }),
    (n.su.locationURL = function (e, t) {
      return (e = e || "/");
    }),
    (n.su.jumpTo = function (e) {
      location.href = n.su.locationURL(e);
    });
})(jQuery),
  (jQuery.su.settings = {
    classManager: { loader: "Loader" },
    Proxy: { defaultRoot: "root" },
    Model: { defaultProxy: "SPFProxy", depFields: ["proxy"] },
    Store: { defaultProxy: "DecoProxy", depFields: ["proxy"] },
    AjaxService: { defaultProxy: "DecoProxy" },
    Loader: { classesPath: "./config/classes.json?t=faca32f1" },
  }),
  (function (e) {
    var t;
    (e.su = e.su || {}),
      (e.su.Observable =
        (((t = function () {
          this.eventDealer = { eventInfo: {} };
        }).prototype.addListener = function (e, t, i, r) {
          var n = this;
          if ("string" != typeof e)
            for (e in (r = e))
              r.hasOwnProperty(e) &&
                ((config = r[e]),
                n.addListener(
                  e,
                  config.fn || config,
                  config.scope || r.scope,
                  config.fn ? config : r
                ));
          else {
            if (((i = i || n), "string" == typeof t)) {
              if (!i[t] && !n[t])
                throw new Error('No method named "' + t + '"');
              t = i[t] || n[t];
            }
            n.eventDealer.eventInfo[e]
              ? n.eventDealer.eventInfo[e].push({ fn: t, scope: i })
              : (n.eventDealer.eventInfo[e] = [{ fn: t, scope: i }]);
          }
        }),
        (t.prototype.removeListener = function (e, t, i, r) {
          var n = this;
          if ("string" != typeof e)
            for (e in (r = e))
              r.hasOwnProperty(e) &&
                ((config = r[e]),
                n.removeListener(
                  e,
                  config.fn || config,
                  config.scope || r.scope,
                  config.fn ? config : r
                ));
          else {
            if (((i = i || n), "string" == typeof t)) {
              if (!i[t] && !n[t])
                throw new Error('No method named "' + t + '"');
              t = i[t] || n[t];
            }
            if (!n.eventDealer.eventInfo[e]) return !1;
            for (var a = n.eventDealer.eventInfo[e].length - 1; 0 <= a; a--) {
              var s = n.eventDealer.eventInfo[e][a];
              s.fn == t &&
                s.scope == i &&
                n.eventDealer.eventInfo[e].splice(a, 1);
            }
          }
        }),
        (t.prototype.one = function (e, t, i) {
          (i = i || this),
            this.eventDealer.eventInfo[e]
              ? this.eventDealer.eventInfo[e].push({
                  fn: t,
                  scope: i,
                  once: !0,
                })
              : (this.eventDealer.eventInfo[e] = [
                  { fn: t, scope: i, once: !0 },
                ]);
        }),
        (t.prototype.fireEvent = function (e, t) {
          if (!this.eventDealer) return !1;
          var i = this.eventDealer.eventInfo[e];
          if (!i) return !1;
          var r = i.slice(0),
            n = [r].concat(t);
          n[0].type = e;
          for (var a = 0; a < r.length; a++)
            r[a].fn.apply(r[a].scope, n),
              r[a].once && this.removeListener(e, r[a].fn, r[a].scope);
          return !0;
        }),
        (t.prototype.clearListeners = function () {
          this.eventDealer.eventInfo = {};
        }),
        (t.prototype.destroy = function () {
          this.clearListeners(), delete this.eventDealer;
        }),
        (t.prototype.trigger = t.prototype.fireEvent),
        (t.prototype.on = t.prototype.addListener),
        (t.prototype.off = t.prototype.removeListener),
        t));
  })(jQuery),
  (function (a) {
    a.su.Loader = (function () {
      var e = function () {
        a.su.Observable.call(this),
          (this._map = {}),
          (this._fileLoading = []),
          (this._fileLoadedHandlerMap = {}),
          (this._loadedFileDataMap = {}),
          this.addListener("ev_file_loaded", function (e, t) {
            for (var i = this._fileLoadedHandlerMap[t]; i && i.length; )
              i.shift()(this._loadedFileDataMap[t]);
            delete this._fileLoadedHandlerMap[t],
              delete this._loadedFileDataMap[t];
          });
      };
      a.su.inherit(a.su.Observable, e),
        (e.prototype.setPath = function (e) {
          for (var t in e) e.hasOwnProperty(t) && (this._map[t] = e[t]);
        }),
        (e.prototype.has = function (e) {
          return !!this._map[e];
        }),
        (e.prototype.load = function (e, t) {
          var i = this._map[e];
          return i ? r.call(this, i, t) : a.Deferred().reject();
        }),
        (e.prototype.loadScript = function (e, t, i) {
          return r
            .call(this, e, { type: "script", async: i })
            .done(function (e) {
              return t && t(e), e;
            });
        }),
        (e.prototype.loadFile = function (e, t, i) {
          return r.call(this, e, { async: i }).done(function (e) {
            return t && t(e), e;
          });
        });
      var r = function (r, e) {
        var i = this,
          n = a.Deferred();
        e = e || {};
        return (
          function (e, t) {
            this._fileLoadedHandlerMap[e]
              ? this._fileLoadedHandlerMap[e].push(t)
              : (this._fileLoadedHandlerMap[e] = [t]);
          }.call(i, r, function (e) {
            n.resolve(e);
          }),
          (!1 === e.async || a.inArray(r, this._fileLoading) < 0) &&
            ((!e.type && r.match(/\.json/) && (e.type = "json"),
            (e.method = "GET"),
            (e.url = r),
            a.ajax(e))
              .done(function (e) {
                var t = a.inArray(r, i._fileLoading);
                i._fileLoading.splice(t, 1),
                  (i._loadedFileDataMap[r] = e),
                  i.fireEvent("ev_file_loaded", [r]);
              })
              .fail(function (e, t, i) {
                a.su.debug.error("load file error: ", r, "\n", i), n.reject();
              }),
            this._fileLoading.push(r)),
          n.promise()
        );
      };
      return e;
    })();
  })(jQuery),
  (function (u) {
    u.su.SUClass = (function () {
      function i(e, t) {
        for (var i in t) t.hasOwnProperty(i);
        u.extend(e, t);
      }
      function t(e, t) {
        "array" !== u.type(t) && (t = [t]);
        for (var i = 0, r = t.length; i < r; i++)
          u.inArray(t[i], e) < 0 && e.push(t[i]);
      }
      var s = {
          $className: "",
          $isClass: !0,
          $parent: null,
          $inheritableStatics: null,
          $depsGatherer: null,
          $inheritableDepsGatherer: [],
          $inheritableOnClassDefined: [],
          inherit: function (e) {
            var t = this;
            if ("function" != typeof e || "function" != typeof t) return !1;
            var i = function () {};
            (i.prototype = e.prototype),
              (t.prototype = new i()),
              ((t.prototype.constructor = t).prototype.$parent = e),
              (t.superclass = e.prototype);
            var r = (t.$parent = e).$inheritableStatics,
              n = t.$inheritableStatics;
            if (r)
              for (var a = 0; a < r.length; a++) {
                var s = r[a];
                (t[s] = u.su.clone(r[s])), u.inArray(s, n) < 0 && n.push(s);
              }
            if (e.$inheritableDepsGatherer) {
              var o = t.$inheritableDepsGatherer;
              t.$inheritableDepsGatherer = e.$inheritableDepsGatherer.concat(o);
            }
            if (e.$inheritableOnClassDefined) {
              o = t.$inheritableOnClassDefined;
              t.$inheritableOnClassDefined =
                e.$inheritableOnClassDefined.concat(o);
            }
          },
          setClassName: function (e) {
            this.$className = e;
          },
          addStatics: function (e) {
            i(this, e);
          },
          addInheritableStatics: function (e) {
            for (var t in (i(this, e), e))
              e.hasOwnProperty(t) && (this.$inheritableStatics[t] = !0);
          },
          addProtoMembers: function (e) {
            i(this.prototype, e);
          },
          addInheritableDepsGatherers: function (e) {
            t(this.$inheritableDepsGatherer, e);
          },
          addInheritableOnClassDefined: function (e) {
            t(this.$inheritableOnClassDefined, e);
          },
          create: function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return u.su.ClassManager.getInstance().getInstantiator(e.length)(
              this,
              e
            );
          },
        },
        o = {
          $instance: null,
          getInstance: function (e) {
            if (this.$instance) return this.$instance;
            var t = Array.prototype.slice.call(arguments, 0),
              i = u.su.ClassManager.getInstance().getInstantiator(t.length);
            return (this.$instance = i(this, t));
          },
          create: function (e) {
            return this.getInstance(e);
          },
        },
        l = { self: null, callParent: function e() {} };
      return function (e) {
        var t;
        if (e && e.hasOwnProperty("constructor")) t = e.constructor;
        else if (e && e.extend) {
          var i,
            r = e.extend;
          (i =
            "string" == u.type(r)
              ? u.su.ClassManager.getInstance().get(e.extend)
              : e.extend),
            (t = function () {
              i.apply(this, arguments);
            });
        } else t = function () {};
        return (
          (function n(e) {
            u.extend(e, s), u.extend(e.prototype, l), (e.prototype.self = e);
          })(t),
          e &&
            (function a(e, t, i) {
              var r = t.name || u.su.randomId("AnonymousClass");
              if ((e.setClassName(r), delete t.name, t.extend)) {
                var n = t.extend;
                "string" == u.type(n) &&
                  (n = u.su.ClassManager.getInstance().get(n)),
                  e.inherit(n),
                  delete t.extend;
              }
              t.singleton && (e.addStatics(o), delete t.singleton),
                t.statics && (e.addStatics(t.statics), delete t.statics),
                t.inheritableStatics &&
                  (e.addInheritableStatics(t.inheritableStatics),
                  delete t.inheritableStatics),
                t.depsGatherer &&
                  ((e.$depsGatherer = t.depsGatherer), delete t.depsGatherer),
                t.inheritableDepsGatherer &&
                  (e.addInheritableDepsGatherers(t.inheritableDepsGatherer),
                  delete t.inheritableDepsGatherer),
                t.onClassDefined &&
                  ((e.$onClassDefined = t.onClassDefined),
                  delete t.onClassDefined),
                t.inheritableOnClassDefined &&
                  (e.addInheritableOnClassDefined(t.inheritableOnClassDefined),
                  delete t.inheritableOnClassDefined),
                e.addProtoMembers(t);
            })(t, e),
          t
        );
      };
    })();
  })(jQuery),
  (function (c) {
    function o(e, t) {
      var i = c.su.ClassManager.getInstance();
      return e.create
        ? e.create.apply(e, t)
        : i.getInstantiator(t.length)(e, t);
    }
    (c.su.ClassManager = (function () {
      var i = function (e) {
        if (null != i.instance) return instance;
        c.su.Observable.call(this),
          (this._map = {}),
          e && e.loader && (this.loader = e.loader),
          (this.settings = {}),
          (this.definingClasses = []),
          (i.instance = this);
      };
      function l(e) {
        return "ev_" + e + "_defined";
      }
      function e(t) {
        var e,
          i,
          r,
          n,
          a = this,
          s = [],
          o = c.Deferred();
        if (t.extend) {
          var l = t.extend;
          "string" == c.type(l) && (e = c.su.require(l));
        }
        if (t.minxins) {
          var u = t.minxins;
          if ("string" == c.type(u) || "array" == c.type(u))
            (i = c.su.require(u)), s.push(i);
          else if ("object" == c.type(u)) {
            var d = [];
            for (var h in u) u.hasOwnProperty(h) && d.push(u[h]);
            (i = c.su.require(d)), s.push(i);
          }
        }
        t.depsGatherer && ((r = t.depsGatherer(t)), s.push(r)),
          t.inheritableDepsGatherer &&
            ((n = t.inheritableDepsGatherer(t)), s.push(n));
        return (
          e
            ? e.done(function () {
                var e = (function (e) {
                  for (
                    var t = c.Deferred(),
                      i = a.get(e.extend).$inheritableDepsGatherer,
                      r = [],
                      n = 0;
                    n < i.length;
                    n++
                  )
                    r.push(i[n](e));
                  return (
                    c.when.apply(this, r).done(function () {
                      t.resolve();
                    }),
                    t.promise()
                  );
                })(t);
                s.push(e),
                  c.when.apply(this, s).done(function () {
                    o.resolve();
                  });
              })
            : c.when.apply(this, s).done(function () {
                o.resolve();
              }),
          o.promise()
        );
      }
      c.su.inherit(c.su.Observable, i),
        (i.instance = null),
        (i.getInstance = function () {
          if (null == i.instance) {
            i.instance = new i();
            var e = c.su.settings.classManager.loader,
              t = new c.su[e]();
            i.instance.setLoader(t);
          }
          return i.instance;
        }),
        (i.prototype.setLoader = function (e) {
          this.loader = e;
        }),
        (i.prototype.loadDefine = function (e, t) {
          var i = c.Deferred();
          if (this.get(e)) return t && t(), i.resolve(), i.promise();
          (this.one(
            l(e),
            c.su.waiting(
              function () {
                t && t(), i.resolve();
              },
              function () {
                c.su.debug.error('Load class "' + e + '" timeout.');
              }
            )
          ),
          c.inArray(e, this.definingClasses) < 0) &&
            (this.definingClasses.push(e),
            this.loader.load(e, { type: "script" }));
          return i.promise();
        }),
        (i.prototype.loadDefineSync = function (e) {
          this.get(e) ||
            this.loader
              .load(e, { type: "script", async: !1 })
              .fail(function () {
                c.su.debug.error("loadDefineSync error:" + e);
              });
        }),
        (i.prototype.get = function (e) {
          if (this._map[e]) return this._map[e];
          var t = c.su[e];
          return "function" == c.type(t) ? t : void 0;
        });
      return (
        (i.prototype.define = function (i, r, n) {
          var a,
            s = this,
            o = c.Deferred();
          return (
            i ? (r.name = i) : (a = !0),
            e.call(this, r).done(function () {
              var e = new c.su.SUClass(r);
              if (
                (a || (s._map[i] = e),
                (function (e) {
                  if (e.$inheritableOnClassDefined)
                    for (
                      var t = 0;
                      t < e.$inheritableOnClassDefined.length;
                      t++
                    )
                      e.$inheritableOnClassDefined[t](e);
                  e.$onClassDefined && e.$onClassDefined(e);
                })(e),
                n && n(e),
                !a)
              ) {
                var t = c.inArray(i, s.definingClasses);
                0 <= t && s.definingClasses.splice(t, 1), s.trigger(l(i));
              }
              o.resolve(e);
            }),
            o.promise()
          );
        }),
        (i.prototype.defineSync = function (e, t) {
          var i = new c.su.SUClass(t);
          this._map[e] = i;
        }),
        (i.prototype.instantiators = []),
        (i.prototype.getInstantiator = function (e) {
          var t = this.instantiators,
            i = t[e];
          if (!i) {
            for (var r = [], n = 0; n < e; n++) r.push("a[" + n + "]");
            (i = t[e] =
              new Function(
                "c",
                "a",
                "return new c(" + r.join(",") + ")"
              )).name = "SUInstantiator" + e;
          }
          return i;
        }),
        i
      );
    })()),
      (c.su.require = function (e, t) {
        var i = c.su.ClassManager.getInstance();
        i || c.su.debug.error("ClassManager not init"),
          "string" === c.type(e) && (e = [e]);
        for (var r = c.Deferred(), n = [], a = 0, s = e.length; a < s; a++) {
          var o = e[a],
            l = c.Deferred();
          n.push(l),
            i.get(o)
              ? l.resolve()
              : i.loadDefine(
                  o,
                  (function (e) {
                    return function () {
                      e.resolve();
                    };
                  })(l)
                );
        }
        return (
          c.when.apply(this, n).done(function () {
            t && t(), r.resolve();
          }),
          r.promise()
        );
      }),
      (c.su.requireSync = function (e) {
        var i = c.su.ClassManager.getInstance();
        i || c.su.debug.error("ClassManager not init"),
          "string" === c.type(e) && (e = [e]),
          c.each(e, function (e, t) {
            i.get(t) || i.loadDefineSync(t);
          });
      }),
      (c.su.define = function () {
        var e = c.su.ClassManager.getInstance();
        return (
          e || c.su.debug.error("ClassManager not init"),
          e.define.apply(e, arguments)
        );
      }),
      (c.su.create = function () {
        var e = arguments[0],
          i = Array.prototype.slice.call(arguments, 1),
          t = c.type(e),
          r = c.su.ClassManager.getInstance(),
          n = c.Deferred();
        if ("string" === t) {
          var a = e;
          c.su.require(a).done(function () {
            var e = o(r.get(a), i);
            n.resolve(e);
          });
        } else if ("function" === t) {
          var s = o(e, i);
          n.resolve(s);
        } else
          "object" === t &&
            r.define(null, e).done(function (e) {
              var t = o(e, i);
              n.resolve(t);
            });
        return n.promise();
      }),
      (c.su.createSync = function () {
        var e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1),
          i = c.type(e),
          r = c.su.ClassManager.getInstance();
        if ("string" === i) {
          var n = e,
            a = r.get(n);
          return (
            a ||
              (c.su.requireSync(n),
              (a = r.get(n)) ||
                c.su.debug.error("createSync error:" + n + " not define")),
            o(a, t)
          );
        }
      });
  })(jQuery),
  (function (o) {
    o.su.View = (function () {
      var n = function (e, t) {
        o.su.Observable.call(this, t),
          (this._id = o.su.randomId("view")),
          (this._name = e),
          (this._childrenWidgets = {}),
          (this._DOM = "string" == typeof t ? o(t) : t.clone()),
          (this._container = null),
          i.call(this);
      };
      o.su.inherit(o.su.Observable, n);
      var s = {
          WIDGET_RENDERED: "ev_view_widget_rendered",
          WIDGET_CREATED: "ev_view_widget_created",
          WIDGET_WILL_DESTROY: "ev_view_widget_will_destroy",
        },
        i = function () {
          var e = this._DOM.find("[widget]");
          if (0 !== e.length)
            for (var t = 0; t < e.length; t++) {
              var i = e[t],
                r = i.id;
              r || (i.id = r = o.su.randomId("widget-")),
                (this._childrenWidgets[r] = {
                  attributes: n.transWidgetOptions(i.attributes),
                  config: null,
                  instance: null,
                });
            }
        };
      return (
        (n.transWidgetOptions = function (e) {
          for (var t = {}, i = 0; i < e.length; i++) {
            var r = e[i].nodeValue;
            this._name;
            t[e[i].nodeName] = r;
          }
          return t;
        }),
        (n.prototype.getChild = function (e) {
          return this._childrenWidgets[e].instance;
        }),
        (n.prototype.getWidgetsMap = function () {
          return this._childrenWidgets;
        }),
        (n.prototype.getName = function () {
          return this._name;
        }),
        (n.prototype.getID = function () {
          return this._id;
        }),
        (n.prototype.dom = function () {
          return this._DOM;
        }),
        (n.prototype.isEffective = function () {
          return 0 !== o('div[view="{' + this._name + '}"]').length;
        }),
        (n.prototype.configChildrenWidgets = function (e) {
          if (e)
            for (var t = 0; t < e.length; t++) {
              var i = e[t].id,
                r = this._childrenWidgets[i];
              r &&
                ((r.config = e[t]),
                e[t].model && (r.attributes["data-bind"] = e[t].model));
            }
        }),
        (n.prototype.clear = function () {
          for (var e in this._childrenWidgets)
            this._childrenWidgets.hasOwnProperty(e) &&
              this._childrenWidgets[e].instance &&
              this._childrenWidgets[e].instance._destroy();
          this._childrenWidgets = {};
        }),
        (n.prototype.createChildrenWidgets = function () {
          for (var e in this._childrenWidgets)
            if (this._childrenWidgets.hasOwnProperty(e)) {
              var t = e,
                i = null,
                r = this._childrenWidgets[t];
              if (o("#" + t).data("viewObj"))
                r.instance = o("#" + t).data("viewObj");
              else {
                var n = o.extend(!0, {}, r.attributes, r.config),
                  a = n.widget;
                o.su.widgets[a] &&
                  (i = new o.su.widgets[a]({ id: t, view: this, settings: n })),
                  (r.instance = i);
              }
              this.fireEvent(s.WIDGET_CREATED, [r, this]);
            }
        }),
        (n.prototype.setContainer = function (e) {
          (this._container = e).loadContent && e.loadContent(this._DOM);
        }),
        (n.prototype.render = function () {
          var i = this,
            r = [],
            e = o.Deferred();
          if (0 == o.su.getObjectLength(this._childrenWidgets))
            return e.resolve(), e.promise();
          var n = o.extend({}, this._childrenWidgets);
          return (
            o.each(n, function (e, t) {
              if (n.hasOwnProperty(e) && i._childrenWidgets.hasOwnProperty(e)) {
                if (!t || !t.instance)
                  throw new Error(
                    "widget " + t.attributes.widget + " is not Defined!"
                  );
                r.push(t.instance.render());
              }
            }),
            o.when.apply(this, r).done(function () {
              (i.rendered = !0), e.resolve();
            }),
            e.promise()
          );
        }),
        (n.prototype.removeChildWidget = function (e) {
          o.isArray(e) || (e = [e]);
          for (var t = 0; t < e.length; t++) {
            var i = e[t].domId;
            this.fireEvent(s.WIDGET_WILL_DESTROY, [e[t], this]),
              (this._childrenWidgets[i] = null),
              delete this._childrenWidgets[i];
          }
        }),
        (n.prototype.addChildWidget = function (e) {
          o.isArray(e) || (e = [e]);
          for (var t = 0; t < e.length; t++) {
            var i = e[t].domId;
            this._childrenWidgets[i] ||
              (this._childrenWidgets[i] = {
                instance: e[t],
                attributes: n.transWidgetOptions(e[t].dom().get(0).attributes),
              });
          }
        }),
        (n.prototype.onChildWidgetRendered = function (e) {
          var t = e.domId;
          this.fireEvent(s.WIDGET_RENDERED, [this._childrenWidgets[t], this]);
        }),
        (n.prototype.destroy = function () {
          n.superclass.destroy.call(this),
            delete this._id,
            delete this._name,
            delete this._childrenWidgets,
            this._DOM.remove(),
            delete this._DOM,
            delete this._container;
        }),
        (n.EVENT = s),
        n
      );
    })();
  })(jQuery),
  (function (l) {
    var i, e, u, d, h, r, a;
    l.su.Module =
      ((i = {
        xtype: "module",
        container: null,
        views: null,
        stores: null,
        models: null,
        deps: null,
        service: null,
        autoDestroy: !0,
        init: function () {},
        listeners: {
          ev_view_unload: function (e, t) {
            var i = this._getView(t);
            i && i.clear(),
              !this.viewsEffective() &&
                this.autoDestroy &&
                this.fireEvent("ev_to_destroy", this.name);
          },
        },
      }),
      (e = {
        DEFINE_NOT_LOADED: "defineNotLoaded",
        LOADING_DEFINE: "loadingDefine",
        DEFINED: "defined",
        AVAILABLE: "available",
        RUNNING: "running",
      }),
      (u = function (e, t) {
        var i = e.instance,
          r = e.attributes,
          n = t._name;
        for (var a in (this.effectiveViewDatas[n] ||
          (this.effectiveViewDatas[n] = []),
        r))
          if (r.hasOwnProperty(a) && a.match(/data-(.+)/g)) {
            var s = this._getAttrBind(r[a], n);
            s instanceof l.su.DataBind &&
              (s.bindViewObj(i),
              this.effectiveViewDatas[n].push({ viewObj: i, bind: s }));
          }
      }),
      (d = function (e, t) {
        var i = e,
          r = t._name;
        if (e.dataBind) {
          for (var n = e.dataBind, a = n.length; 0 < a; a--) {
            n[a - 1].unbindViewObj(e);
            var s = this.effectiveViewDatas[r];
            if (s)
              for (var o = s.length; 0 < o; o--)
                s[o - 1].viewObj === i &&
                  s[o - 1].bind === n[a - 1] &&
                  s.splice(o - 1, 1);
          }
          e.dataBind = [];
        }
      }),
      (h = function (e) {
        r.call(this),
          l.each(this.domEventsMap, function (n, e) {
            l.each(e, function (e, t) {
              for (var i = 0; i < t.length; i++) {
                var r = n.split("=>");
                1 == r.length
                  ? l(n).on(e, t[i].effectiveHandler)
                  : (2 !== r.length &&
                      console.error(
                        "bindEvent error, incorrect selector format"
                      ),
                    l(r[0]).delegate(r[1], e, t[i].effectiveHandler));
              }
            });
          });
      }),
      (r = function () {
        l.each(this.domEventsMap, function (n, e) {
          l.each(e, function (e, t) {
            for (var i = 0; i < t.length; i++) {
              var r = n.split("=>");
              1 == r.length
                ? l(n).off(e, t[i].effectiveHandler)
                : (2 !== r.length &&
                    console.error("bindEvent error, incorrect selector format"),
                  l(r[0]).undelegate(r[1], e, t[i].effectiveHandler));
            }
          });
        });
      }),
      (a = function (e) {
        var t = l.extend(!0, {}, i, e);
        l.su.Observable.call(this, t),
          (this.settings = t),
          (this.name = t.name),
          (this.status = a.STATUS.AVAILABLE),
          (this.dataEventsListeners = {}),
          (this.domEventsListeners = {}),
          (this.dataEventsMap = {}),
          (this.domEventsMap = {}),
          (this.effectiveViewDatas = {}),
          (this.settings = t),
          (this.data = { views: {}, models: {}, stores: {}, deps: {} }),
          (this.autoDestroy = t.autoDestroy),
          (this.id = l.su.randomId("module")),
          this.addListener(t.listeners),
          this._init();
      }),
      l.su.inherit(l.su.Observable, a),
      (a.prototype._init = function () {
        (this.data.deps = {}),
          (this.services = {}),
          this.initDeps(),
          this.initServices();
        for (var e = 0; e < this.deps.length; e++)
          this.data.deps[this.deps[e]] = this.getDep(this.deps[e]);
        this.initViews(),
          this.initModels(),
          this.initStores(),
          this.initViewData();
        var t = this.factory.call(
          this,
          this,
          this.data.views,
          this.data.models,
          this.data.stores,
          this.data.deps,
          this.services
        );
        t && l.extend(this, t),
          this.settings.init.call(
            this,
            this,
            this.data.views,
            this.data.models,
            this.data.stores,
            this.data.deps,
            this.services
          );
      }),
      (a.prototype.initDeps = function () {
        var e = this.settings;
        this.deps = e.deps;
        for (var t = 0; t < this.deps.length; t++)
          l.su.moduleManager.init(this.deps[t]);
      }),
      (a.prototype.initServices = function () {
        var e = this.settings.services;
        if (e)
          for (var t = 0; t < e.length; t++)
            this.services[e[t]] = l.su.serviceManager.get(e[t]);
      }),
      (a.prototype._getAttrBind = function (e, t) {
        return (
          (e = e.replace(/[\{,\}]/g, "")),
          l.su.getAttrObject(this.data.models, e) ||
            l.su.getAttrObject(this.data.stores, e) ||
            l.su.getAttrObject(this.data.views, e) ||
            l.su.getAttrObject(this.data.deps, e)
        );
      }),
      (a.prototype.load = function (e) {
        var t = this;
        return (
          l.extend(this, e),
          this.status == a.STATUS.RUNNING
            ? this.updateView()
            : l.when(this.launch()).then(function () {
                t.trigger("ev_after_launch", [
                  t,
                  t.data.views,
                  t.data.models,
                  t.data.stores,
                  t.data.deps,
                  t.services,
                ]);
              })
        );
      }),
      (a.prototype.launch = function () {
        var e = this;
        return (
          this.trigger("ev_before_launch"),
          function (e) {
            if (e)
              0 <= l.inArray(e, this.view) &&
                this._getView(e).createChildrenWidgets();
            else
              for (var t in this.view)
                if (this.view.hasOwnProperty(t)) {
                  var i = this._getView(this.view[t]);
                  i.isEffective() && i.createChildrenWidgets();
                }
          }.call(this),
          l
            .when(
              function (e) {
                var t,
                  i = this,
                  r = [];
                if ((this.fireEvent("before_render"), e))
                  0 <= l.inArray(e, this.view) &&
                    r.push(this._getView(e).render());
                else
                  for (t = 0; t < this.view.length; t++)
                    this._getView(this.view[t]).isEffective() &&
                      r.push(this._getView(this.view[t]).render());
                return l.when.apply(this, r).done(function () {
                  h.call(i), i.fireEvent("ev_after_views_render");
                });
              }.call(this)
            )
            .then(function () {
              e.bindControl(),
                e.bindListen(),
                e.trigger("ev_on_launch", [
                  e,
                  e.data.views,
                  e.data.models,
                  e.data.stores,
                  e.data.deps,
                  e.services,
                ]),
                (e.status = a.STATUS.RUNNING);
            })
        );
      }),
      (a.prototype.getDep = function (e) {
        return 0 <= l.inArray(e, this.deps)
          ? l.su.moduleManager.query(e)
          : null;
      }),
      (a.prototype.getService = function (e) {
        return this.services[e];
      }),
      (a.prototype.destroy = function () {
        var n = this;
        this.fireEvent("ev_before_destroy", [
          this,
          this.data.views,
          this.data.models,
          this.data.stores,
          this.data.deps,
          this.services,
        ]),
          a.superclass.destroy.call(this),
          r.call(this),
          l.each(this.dataEventsMap, function (e, t) {
            var r = l.su.getAttrObject(n.data, e);
            l.each(t, function (e, t) {
              for (var i = 0; i < t.length; i++) r.removeListener(e, t[i], n);
            });
          });
        var e = function (e) {
          for (var t in e) e.hasOwnProperty(t) && e[t].unbind();
        };
        for (var t in this._viewsMap)
          this._viewsMap.hasOwnProperty(t) &&
            l.su.viewManager.removeByID(this._getView(t).getID());
        e(this.data.views),
          e(this.data.models),
          e(this.data.stores),
          (this.effectiveViewDatas = {}),
          (this.data.views = {}),
          (this.data.models = {}),
          (this.data.stores = {}),
          (this.data.deps = {}),
          (this.services = {}),
          (this.status = a.STATUS.DEFINED);
      }),
      (a.prototype.control = function (e) {
        (this.domEventsListeners = e), this.isRunning() && this.bindControl();
      }),
      (a.prototype.bindControl = function () {
        var t = this,
          e = this.domEventsListeners;
        for (var i in e)
          if (e.hasOwnProperty(i))
            for (var r in e[i])
              if (e[i].hasOwnProperty(r)) {
                var n = e[i][r];
                if ("string" == typeof n) {
                  if (!t[n]) throw new Error('No method named "' + n + '"');
                  n = t[n];
                }
                var a = (function (e) {
                    return function () {
                      e.apply(t, arguments);
                    };
                  })(n),
                  s = i.split("=>");
                if (1 == s.length) l(i).on(r, a);
                else {
                  if (2 !== s.length)
                    throw new Error(
                      "bindEvent error, incorrect selector format"
                    );
                  l(s[0]).delegate(s[1], r, a);
                }
                this.domEventsMap[i] || (this.domEventsMap[i] = {}),
                  this.domEventsMap[i][r] || (this.domEventsMap[i][r] = []),
                  this.domEventsMap[i][r].push({
                    effectiveHandler: a,
                    handler: n,
                  });
              }
        this.domEventsListeners = {};
      }),
      (a.prototype.listen = function (e) {
        (this.dataEventsListeners = e), this.isRunning() && this.bindListen();
      }),
      (a.prototype.bindListen = function () {
        var e = this.dataEventsListeners;
        for (var t in e)
          if (e.hasOwnProperty(t)) {
            var i = l.su.getAttrObject(this.data, t);
            for (var r in e[t])
              if (e[t].hasOwnProperty(r)) {
                var n = e[t][r];
                if ("string" == typeof n) {
                  if (!this[n]) throw new Error('No method named "' + n + '"');
                  n = this[n];
                }
                i.addListener(r, n, this),
                  this.dataEventsMap[t] || (this.dataEventsMap[t] = {}),
                  this.dataEventsMap[t][r] || (this.dataEventsMap[t][r] = []),
                  this.dataEventsMap[t][r].push(n);
              }
          }
        this.dataEventsListeners = {};
      }),
      (a.prototype.initViews = function () {
        var e,
          t,
          r = this,
          i = this.settings;
        if (((this.view = []), (this._viewsMap = {}), i.views))
          for (var n = 0; n < i.views.length; n++) {
            var a = i.views[n];
            this.view.push(a),
              (e = a),
              ((t = l.su.viewManager.init(e))._module = this.name),
              (this._viewsMap[e] = t).addListener(
                l.su.View.EVENT.WIDGET_RENDERED,
                function (e, t, i) {
                  u.call(r, t, i);
                }
              ),
              t.addListener(
                l.su.View.EVENT.WIDGET_WILL_DESTROY,
                function (e, t, i) {
                  d.call(r, t, i);
                }
              );
          }
      }),
      (a.prototype.initModels = function () {
        var e = this.settings;
        if (((this.model = e.models), this.model))
          for (var t = 0; t < this.model.length; t++)
            l.su.modelManager.init(this.model[t]);
      }),
      (a.prototype.initStores = function (e) {
        if (((e = this.settings), (this.store = e.stores), this.store))
          for (var t = 0; t < this.store.length; t++)
            l.su.storeManager.init(this.store[t]);
      }),
      (a.prototype.initViewData = function () {
        var e,
          n = this;
        if (
          ((this.data.stores = {}),
          (this.data.models = {}),
          (this.data.views = {}),
          this.store)
        )
          for (e = 0; e < this.store.length; e++)
            this.data.stores[this.store[e]] = new l.su.StoreBind(
              this._getStore(this.store[e])
            );
        if (this.model)
          for (e = 0; e < this.model.length; e++)
            this.data.models[this.model[e]] = new l.su.ModelBind(
              this._getModel(this.model[e])
            );
        if (this.view)
          for (e = 0; e < this.view.length; e++) {
            var a = this.view[e],
              t = this._getView(a);
            l.each(t.getWidgetsMap(), function (e, t) {
              l.each(t.attributes, function (e, t) {
                if (e.match(/data-(.+)/g) && !n._getAttrBind(t, a)) {
                  var i = new l.su.DataFieldBind(new l.su.DataField()),
                    r = t.replace(/[\{,\}]/g, "");
                  n.data.views[r] = i;
                }
              });
            });
          }
      }),
      (a.prototype.configViews = function (e) {
        l.isArray(e) || (e = [e]);
        for (var t = 0; t < e.length; t++) {
          var i = e[t],
            r = i.id,
            n = i.items;
          this._getView(r).configChildrenWidgets(n);
        }
      }),
      (a.prototype.unControl = function (e) {
        for (var t in e)
          if (e.hasOwnProperty(t))
            for (var i in e[t])
              if (e[t].hasOwnProperty(i)) {
                var r = t.split("=>"),
                  n = e[t][i];
                if ("string" == typeof n) {
                  if (!this[n]) throw new Error('No method named "' + n + '"');
                  n = this[n];
                }
                if (this.domEventsMap[t] && this.domEventsMap[t][i])
                  for (var a = this.domEventsMap[t][i].length - 1; 0 <= a; a--)
                    if (this.domEventsMap[t][i][a].handler == n) {
                      if (1 == r.length)
                        l(t).off(
                          i,
                          this.domEventsMap[t][i][a].effectiveHandler
                        );
                      else {
                        if (2 !== r.length)
                          throw new Error(
                            "bindEvent error, incorrect selector format"
                          );
                        l(r[0]).undelegate(
                          r[1],
                          i,
                          this.domEventsMap[t][i][a].effectiveHandler
                        );
                      }
                      this.domEventsMap[t][i].splice(a, 1);
                      break;
                    }
              }
      }),
      (a.prototype.unListen = function (e) {
        var t;
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var r = l.su.getAttrObject(this.data, i);
            for (var n in e[i])
              if (e[i].hasOwnProperty(n)) {
                var a = e[i][n];
                if ("string" == typeof a) {
                  if (!this[a]) throw new Error('No method named "' + a + '"');
                  a = this[a];
                }
                this.dataEventsMap[i] &&
                  this.dataEventsMap[i][n] &&
                  0 <= (t = l.inArray(a, this.dataEventsMap[i][n])) &&
                  (r.removeListener(n, a, this),
                  this.dataEventsMap[i][n].splice(t, 1));
              }
          }
      }),
      (a.prototype.addModel = function (e) {
        var t;
        l.isArray(e) || (e = [e]);
        for (var i = 0, r = e.length; i < r; i++)
          if (((t = e[i]), l.su.modelManager.getStatus(t)))
            l.su.modelManager.init(t),
              this.model.push(t),
              (this.data.models[t] = new l.su.ModelBind(
                l.su.modelManager.get(t)
              ));
          else {
            if (!l.su.storeManager.getStatus(t))
              throw new Error("model not defined");
            l.su.storeManager.init(t),
              this.store.push(t),
              (this.data.stores[t] = new l.su.StoreBind(
                l.su.storeManager.get(t)
              ));
          }
      }),
      (a.prototype.updateView = function (e) {
        var t,
          r = this,
          i = [],
          n = l.su.viewManager,
          a = [];
        for (
          this.fireEvent("before_render"),
            e ? 0 <= l.inArray(e, this.view) && a.push(e) : (a = this.view),
            t = 0;
          t < a.length;
          t++
        ) {
          this.unbindView(a[t]);
          var s = this._getView(a[t]),
            o = s._container;
          n.removeByID(s.getID()),
            (s = n.init(a[t])),
            (this._viewsMap[a[t]] = s).addListener(
              l.su.View.EVENT.WIDGET_RENDERED,
              function (e, t, i) {
                u.call(r, t, i);
              }
            ),
            s.addListener(
              l.su.View.EVENT.WIDGET_WILL_DESTROY,
              function (e, t, i) {
                d.call(r, t, i);
              }
            ),
            s.setContainer(o),
            s.createChildrenWidgets(),
            s.isEffective() && i.push(s.render());
        }
        return l.when.apply(this, i).done(function () {
          h.call(r), r.fireEvent("ev_after_views_render");
        });
      }),
      (a.prototype._getStore = function (e) {
        return 0 <= l.inArray(e, this.store) ? l.su.storeManager.get(e) : null;
      }),
      (a.prototype._getModel = function (e) {
        return 0 <= l.inArray(e, this.model) ? l.su.modelManager.get(e) : null;
      }),
      (a.prototype._getView = function (e) {
        return (e = e || this.view[0]), this._viewsMap[e];
      }),
      (a.prototype.getStore = function (e) {
        return this.data.stores[e];
      }),
      (a.prototype.getModel = function (e) {
        return this.data.models[e];
      }),
      (a.prototype.getView = function (e) {
        return this.data.views[e];
      }),
      (a.prototype.getEffectiveView = function () {
        for (var e in this.effectiveViewDatas)
          if (
            this.effectiveViewDatas.hasOwnProperty(e) &&
            this._getView(e).isEffective()
          )
            return e;
      }),
      (a.prototype.viewsEffective = function () {
        for (var e = 0; e < this.view.length; e++)
          if (!this._getView(this.view[e]).isEffective()) return !1;
        return !0;
      }),
      (a.prototype.unbindView = function (e) {
        if (e && 0 <= l.inArray(e, this.view)) {
          if (this.effectiveViewDatas[e])
            for (var t = 0; t < this.effectiveViewDatas[e].length; t++) {
              var i = this.effectiveViewDatas[e][t].viewObj;
              this.effectiveViewDatas[e][t].bind.unbindViewObj(i);
            }
          this.effectiveViewDatas[e] = [];
        } else
          for (var r = 0; r < this.view.length; r++)
            this.unbindView(this.view[r]);
      }),
      (a.prototype.isRunning = function () {
        return this.status === e.RUNNING;
      }),
      (a.EVENT = { AFTER_RENDER: "afterRender" }),
      (a.STATUS = e),
      a);
  })(jQuery),
  (function () {
    function i() {
      return this.msg || this.message;
    }
    ($.su.Error = function (e) {
      "string" == typeof e && (e = { msg: e });
      var t = new Error();
      return (
        $.su.apply(t, e), (t.message = t.message || t.msg), (t.toString = i), t
      );
    }),
      $.su.apply($.su.Error, {
        ignore: !1,
        raise: function (e) {
          if (
            ("string" == typeof (e = e || {}) && (e = { msg: e }),
            !0 !== this.handle(e))
          )
            throw new $.su.Error(e);
        },
        handle: function () {
          return this.ignore;
        },
      });
  })(),
  ($.su.raise = function () {
    $.su.Error.raise.apply($.su.Error, arguments);
  }),
  (function (o) {
    var e;
    o.su.Router =
      ((e = function () {
        o.su.Observable.call(this),
          (this.routerList = {}),
          (this.modelsMap = {}),
          (this.helpMap = {});
      }),
      o.su.inherit(o.su.Observable, e),
      (e.prototype.set = function (e) {
        (e = e),
          o.isEmptyObject(e) ||
            (o.each(e, function (e, t) {
              "string" == typeof t.controller &&
                (t.controller = { _default: t.controller }),
                "string" == typeof t.view && (t.view = { _default: t.view });
            }),
            (this.routerList = e));
      }),
      (e.prototype.setItem = function (e, t) {
        this.routerList[e]
          ? o.extend(!0, this.routerList[e], t)
          : (this.routerList[e] = t),
          "string" == typeof this.routerList[e].controller &&
            (this.routerList[e].controller = {
              _default: this.routerList[e].controller,
            }),
          "string" == typeof this.routerList[e].view &&
            (this.routerList[e].view = { _default: this.routerList[e].view });
      }),
      (e.prototype.query = function (e) {
        return this.routerList[e];
      }),
      (e.prototype.loadController = function (e, t, i) {
        var r,
          n,
          a = e;
        n = "function" == typeof t ? t : ((r = t), i);
        var s = this.routerList[a];
        r
          ? s.controller[r] && o.su.loader.loadFile(s.controller[r], n)
          : o.su.loader.loadFile(s.controller._default, n);
      }),
      (e.prototype.loadView = function (e, t, i) {
        var r,
          n,
          a = e;
        n = "function" == typeof t ? t : ((r = t), i);
        var s = this.routerList[a];
        r && s.view[r]
          ? s.view[r] && o.su.loader.loadFile(s.view[r], n)
          : o.su.loader.loadFile(s.view._default, n);
      }),
      (e.prototype.setModelsPath = function (e) {
        for (var t in e) e.hasOwnProperty(t) && (this.modelsMap[t] = e[t]);
      }),
      (e.prototype.loadModel = function (e, t) {
        if (!this.modelsMap[e])
          throw new Error('Model "' + e + '" has not declare file path');
        o.su.loader.loadFile(this.modelsMap[e], t);
      }),
      (e.prototype.setHelpPath = function (e) {
        for (var t in e) e.hasOwnProperty(t) && (this.helpMap[t] = e[t]);
      }),
      (e.prototype.loadHelp = function (e, t) {
        var i;
        (i = this.helpMap[e]
          ? this.helpMap[e]
          : { struct: e + ".html", name: e }),
          o.su.loader.loadFile("./help/" + i.struct, function (e) {
            t(i.name, e);
          });
      }),
      e);
  })(jQuery),
  ($.su.Application = (function () {
    var e = function () {
      $.su.Observable.call(this),
        ($.su.modelManager = new $.su.ModelManager()),
        ($.su.moduleManager = new $.su.ModuleManager()),
        ($.su.storeManager = new $.su.StoreManager()),
        ($.su.viewManager = new $.su.ViewManager()),
        ($.su.serviceManager = new $.su.ServiceManager()),
        (this.modelManager = $.su.modelManager),
        (this.moduleManager = $.su.moduleManager),
        (this.storeManager = $.su.storeManager),
        (this.viewManager = $.su.viewManager),
        (this.serviceManager = $.su.serviceManager),
        (this.container = null);
    };
    return (
      $.su.inherit($.su.Observable, e),
      (e.prototype.setContainer = function (e) {
        this.container = e;
      }),
      (e.prototype.init = function () {}),
      (e.prototype.launch = function (e) {
        if (this.container) {
          var t = new $.su.widgets.htmlLoader({ id: this.container });
          $.when(t.render())
            .then(function () {
              return $.su.moduleManager.load("main");
            })
            .then(function () {
              var e = $.su.moduleManager.query("main");
              e._getView().setContainer(t), e.load();
            });
        }
      }),
      e
    );
  })(jQuery)),
  (function (e) {
    var t;
    (e.su = e.su || {}),
      (e.su.Service =
        ((t = function () {
          if ("object" == typeof this.constructor.instance)
            return this.constructor.instance;
          e.su.Observable.call(this),
            (this.constructor.instance = this),
            e.su.serviceManager.register(this.name, this);
        }),
        e.su.inherit(e.su.Observable, t),
        t));
  })(jQuery),
  (function (v) {
    var g;
    (v.su = v.su || {}),
      (v.su.Services = v.su.Services || {}),
      (v.su.Services.Vtype =
        ((g = function (e) {
          if ("object" == typeof g.instance) return g.instance;
          (this.name = "vtype"), v.su.Service.call(this), (g.instance = this);
        }),
        v.su.inherit(v.su.Service, g),
        (g.types = {
          email: {
            regex: /^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.EMAIL,
          },
          float_positive: {
            regex: /^[0-9]\d*(\.[0-9]\d*)?$/,
            vtypeText: v.su.CHAR.VTYPETEXT.NUMBER,
          },
          float_number: {
            regex: /^-?[0-9]\d*(\.[0-9]\d*)?$/,
            vtypeText: v.su.CHAR.VTYPETEXT.NUMBER,
            validator: function (e) {
              return (
                (e = parseFloat(e)),
                (null !== this.max || this.max !== undefined) && e > this.max
                  ? null === this.min && this.min === undefined
                    ? v.su.CHAR.VTYPETEXT.NUMBER_MAX.replace(
                        "%max",
                        this.max.toString()
                      )
                    : v.su.CHAR.VTYPETEXT.NUMBER_MIN_MAX.replace(
                        "%min",
                        this.min.toString()
                      ).replace("%max", this.max.toString())
                  : (null === this.min && this.min === undefined) ||
                    !(e < this.min) ||
                    (null === this.max && this.max === undefined
                      ? v.su.CHAR.VTYPETEXT.NUMBER_MIN.replace(
                          "%min",
                          this.min.toString()
                        )
                      : v.su.CHAR.VTYPETEXT.NUMBER_MIN_MAX.replace(
                          "%min",
                          this.min.toString()
                        ).replace("%max", this.max.toString()))
              );
            },
          },
          number: {
            regex: /^-?[0-9]\d*$/,
            vtypeText: v.su.CHAR.VTYPETEXT.NUMBER,
            minMaxText: v.su.CHAR.VTYPETEXT.NUMBER_MIN_MAX,
            maxText: v.su.CHAR.VTYPETEXT.NUMBER_MAX,
            minText: v.su.CHAR.VTYPETEXT.NUMBER_MIN,
            validator: function (e) {
              return (
                (e = parseInt(e, 10)),
                null !== this.max && this.max !== undefined && e > this.max
                  ? null === this.min && this.min === undefined
                    ? this.maxText.replace("%max", this.max.toString())
                    : this.minMaxText
                        .replace("%min", this.min.toString())
                        .replace("%max", this.max.toString())
                  : !(
                      null !== this.min &&
                      this.min !== undefined &&
                      e < this.min
                    ) ||
                    (null === this.max && this.max === undefined
                      ? this.minText.NUMBER_MIN.replace(
                          "%min",
                          this.min.toString()
                        )
                      : this.minMaxText
                          .replace("%min", this.min.toString())
                          .replace("%max", this.max.toString()))
              );
            },
            keybordHandler: function (e) {
              e.stopPropagation();
              var t = e.keyCode,
                i = e.shiftKey,
                r = e.ctrlKey;
              if (i) return !1;
              if (37 == t || 39 == t) return !0;
              if (38 == t || 40 == t) {
                var n = v(this),
                  a = n.val();
                if (v.su.Vtype.types.number.regex.test(a))
                  if (38 == t) {
                    if (!(a < (n.hasClass("hour-text") ? 23 : 59))) return !1;
                    n.val(parseInt(a, 10) + 1);
                  } else {
                    if (0 == a) return !1;
                    n.val(parseInt(a, 10) - 1);
                  }
                else n.val(0);
              }
              return !(!r && (t < 48 || 57 < t) && 32 < t) && void 0;
            },
          },
          date: {
            format: "yyyy/MM/dd",
            validator: function (e) {
              var t;
              if ("MM/dd/yyyy" === this.format) {
                t =
                  /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/([0-9]{4})$/;
                var i = e.split("/");
                if (parseInt(i[2], 10) < 1970)
                  return v.su.CHAR.VTYPETEXT.DATE_INVALID;
                if (2030 < parseInt(i[2], 10))
                  return v.su.CHAR.VTYPETEXT.DATE_INVALID;
              } else
                "yyyy/MM/dd" === this.format &&
                  (t =
                    /^([0-9]{4})\/(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/);
              return !1 !== t.test(e) || v.su.CHAR.VTYPETEXT.DATE;
            },
          },
          ipv6: {
            isPrefixFlag: !1,
            regex:
              /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
            vtypeText: v.su.CHAR.VTYPETEXT.IPV6,
            validator: function (e) {
              if (!new RegExp("^[2-3][0-9A-Fa-f]{1,3}:").test(e))
                return v.su.CHAR.VTYPETEXT.IPV6_NOT_GLOBAL;
              var t = new RegExp("::$"),
                i = new RegExp("^2002:");
              if (this.isPrefixFlag) {
                if (!t.test(e)) return v.su.CHAR.VTYPETEXT.IPV6_NOT_PREFIX;
                if (i.test(e)) return v.su.CHAR.VTYPETEXT.IPV6_PREFIX;
              } else if (t.test(e)) return v.su.CHAR.VTYPETEXT.IPV6_NOT_GLOBAL;
              var r = e.match(/:/g);
              return (
                !(this.isPrefixFlag && 5 < r.length) ||
                v.su.CHAR.VTYPETEXT.IPV6_NOT_PREFIX
              );
            },
          },
          ip: {
            allowAllZeroFlag: !1,
            disallowAllZeroText: v.su.CHAR.VTYPETEXT.IP_NO_ALL_ZERO,
            allowLoopFlag: !1,
            disallowLoopText: v.su.CHAR.VTYPETEXT.IP_NO_LOOP,
            allowDTypeFlag: !1,
            disallowDTypeText: v.su.CHAR.VTYPETEXT.IP_NO_D_TYPE,
            allowETypeFlag: !1,
            disallowETypeText: v.su.CHAR.VTYPETEXT.IP_NO_E_TYPE,
            allowAllOneFlag: !1,
            disallowAllOneText: v.su.CHAR.VTYPETEXT.IP_NO_ALL_ONE,
            disallowFirstZeroFlag: !0,
            disallowFirstZeroText: v.su.CHAR.VTYPETEXT.IP_NO_FIRST_ZERO,
            disallowFirstAllOneText: v.su.CHAR.VTYPETEXT.IP_NO_FIRST_ALL_ONE,
            regex:
              /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]|0\d\d)(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]|0\d\d)){3}$/,
            validator: function (e) {
              var t,
                i,
                r = e,
                n = [0, 0, 0, 0];
              for (i = 0; i < 3; i++) {
                var a = r.indexOf(".");
                (n[i] = r.substring(0, a)), (r = t = r.substring(a + 1));
              }
              for (n[3] = t, i = 0; i < 4; i++)
                if (n[i] < 0 || 255 < n[i]) return v.su.CHAR.VTYPETEXT.IP;
              if (!this.allowLoopFlag && 127 == n[0])
                return this.disallowLoopText;
              if (!this.allowDTypeFlag && 224 <= n[0] && n[0] <= 239)
                return this.disallowDTypeText;
              if (!this.allowETypeFlag && 240 <= n[0] && n[0] <= 254)
                return this.disallowETypeText;
              if (this.allowAllOneFlag) {
                if (255 == n[0] && 255 == n[1] && 255 == n[2] && 255 == n[3]);
                else if (255 == n[0]) return this.disallowFirstAllOneText;
              } else {
                if (255 == n[0] && 255 == n[1] && 255 == n[2] && 255 == n[3])
                  return this.disallowAllOneText;
                if (255 == n[0]) return this.disallowFirstAllOneText;
              }
              return this.allowAllZeroFlag ||
                0 != n[0] ||
                0 != n[1] ||
                0 != n[2] ||
                0 != n[3]
                ? !this.disallowFirstZeroFlag ||
                    0 != n[0] ||
                    (0 == n[1] && 0 == n[2] && 0 == n[3]) ||
                    this.disallowFirstZeroText
                : this.disallowAllZeroText;
            },
            vtypeText: v.su.CHAR.VTYPETEXT.IP,
          },
          ipRange: {
            validator: function (e) {
              function t(e) {
                var t = e.split(".");
                return 4 != t.length
                  ? -1
                  : /^\s*[0-9]{1,3}\.{1}[0-9]{1,3}\.{1}[0-9]{1,3}\.{1}[0-9]{1,3}\s*$/.test(
                      e
                    )
                  ? Number(t[0]) * (1 << 24) +
                    ((Number(t[1]) << 16) | (Number(t[2]) << 8) | Number(t[3]))
                  : -1;
              }
              var i =
                  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]|0\d\d)(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]|0\d\d)){3}$/,
                r = e.split("-");
              if (1 == r.length)
                return "0.0.0.0" == (n = r[0])
                  ? v.su.SMB_CHAR.VALIDATION.IP_ALL_ZERO
                  : 0 != i.test(n) || v.su.SMB_CHAR.VALIDATION.IP_FORMAT;
              if (2 != r.length) return v.su.SMB_CHAR.VALIDATION.IP_RANGE_NUM;
              var n = r[0],
                a = r[1];
              return 1 != i.test(n) && 0 == i.test(n)
                ? v.su.SMB_CHAR.VALIDATION.IP_FORMAT
                : 1 != i.test(a) && 0 == i.test(a)
                ? v.su.SMB_CHAR.VALIDATION.IP_FORMAT
                : !(t(n) >= t(a)) || v.su.SMB_CHAR.VALIDATION.IP_RANGE;
            },
          },
          portRange: {
            validator: function (e) {
              function t(e) {
                return 0 != /^[0-9]+$/.test(e) || v.su.CHAR.VTYPETEXT.NUMBER;
              }
              var i = e.split("-");
              if (1 == i.length) {
                var r = i[0];
                return Number(r) < 1
                  ? v.su.SMB_CHAR.VALIDATION.PORT_START_ERR
                  : 65535 < Number(r)
                  ? v.su.SMB_CHAR.VALIDATION.PORT_END_ERR
                  : t(r);
              }
              if (2 != i.length)
                return v.su.SMB_CHAR.VALIDATION.PORT_RANGE_INVALID;
              r = i[0];
              var n = i[1];
              return t(r) && t(n)
                ? Number(r) < Number(n)
                  ? Number(r) < 1
                    ? v.su.SMB_CHAR.VALIDATION.PORT_START_ERR
                    : !(65535 < Number(n)) ||
                      v.su.SMB_CHAR.VALIDATION.PORT_END_ERR
                  : v.su.SMB_CHAR.VALIDATION.PORT_RANGE_ERR
                : v.su.SMB_CHAR.VALIDATION.PORT_RANGE_FORMAT;
            },
          },
          timeRange: {
            validator: function (e) {
              function t(e) {
                var t = e.split(":");
                return (
                  (data = t[0].toString() + t[1].toString()),
                  (data = Number(data)),
                  0 == data && (data = "0000"),
                  data
                );
              }
              function i(e) {
                if (!/^[0-9]{1,2}\:{1}[0-9]{1,2}$/g.test(e))
                  return v.su.SMB_CHAR.VALIDATION.TIME_FORMAT;
                var t = e.indexOf(":"),
                  i = parseInt(e.slice(0, t), 10),
                  r = parseInt(e.slice(t + 1), 10);
                return i < 0 || 24 <= i
                  ? v.su.SMB_CHAR.VALIDATION.TIME_FORMAT
                  : r < 0 || 60 <= r
                  ? v.su.SMB_CHAR.VALIDATION.TIME_FORMAT
                  : !(24 == i && 0 < r) || v.su.SMB_CHAR.VALIDATION.TIME_START;
              }
              function r(e) {
                if (!/^[0-9]{1,2}\:{1}[0-9]{1,2}$/g.test(e))
                  return v.su.SMB_CHAR.VALIDATION.TIME_FORMAT;
                var t = e.indexOf(":"),
                  i = parseInt(e.slice(0, t), 10),
                  r = parseInt(e.slice(t + 1), 10);
                return i < 0 || 24 < i
                  ? v.su.SMB_CHAR.VALIDATION.TIME_FORMAT
                  : r < 0 || 60 <= r
                  ? v.su.SMB_CHAR.VALIDATION.TIME_FORMAT
                  : (0 != i || 0 != r) &&
                    (!(24 == i && 0 < r) || v.su.SMB_CHAR.VALIDATION.TIME_END);
              }
              var n = e.split("-");
              if ("" != n && 1 == n.length)
                return v.su.SMB_CHAR.VALIDATION.TIME_END;
              if (2 != n.length) return v.su.SMB_CHAR.VALIDATION.TIME_FORMAT;
              var a = n[0],
                s = n[1];
              return 1 == i(a) && 1 == r(s)
                ? (a = t(n[0])) < (s = t(n[1])) ||
                    v.su.SMB_CHAR.VALIDATION.TIME_RANGE
                : 1 != i(a)
                ? v.su.SMB_CHAR.VALIDATION.TIME_START
                : 1 == r(s) || v.su.SMB_CHAR.VALIDATION.TIME_END;
            },
          },
          ip_no_zero: {},
          mac: {
            regex:
              /^[a-fA-F\d]{2}\-[a-fA-F\d]{2}\-[a-fA-F\d]{2}\-[a-fA-F\d]{2}\-[a-fA-F\d]{2}\-[a-fA-F\d]{2}$/,
            disallowAllMultiText: v.su.CHAR.VTYPETEXT.MULTI_MAC,
            allAllZero: !1,
            validator: function (e) {
              return /^\s*[0-9A-Fa-f]{1}[13579bdfBDF]{1}(\-[A-Fa-f0-9]{2}){5}\s*$/.test(
                e
              )
                ? this.disallowAllMultiText
                : 0 != this.allAllZero ||
                    !/^(0{1,2}-){5}0{1,2}$/.test(e) ||
                    this.disallowAllMultiText;
            },
            vtypeText: v.su.CHAR.VTYPETEXT.MAC,
          },
          netmask: {
            allowAllOneFlag: !1,
            disallowAllOneText: v.su.CHAR.VTYPETEXT.MASK_NO_ALL_ONE,
            regex:
              /^(254|252|248|240|224|192|128)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$|^255.255.255.255$/,
            vtypeText: v.su.CHAR.VTYPETEXT.MASK,
            validator: function (e) {
              return (
                "255.255.255.255" != e ||
                !!this.allowAllOneFlag ||
                this.disallowAllOneText
              );
            },
          },
          string_ip_domain: {
            regex: /^[A-Za-z0-9\_\-]+\.{1,}/,
            vtypeText: v.su.CHAR.VTYPETEXT.STRING_DOMAIN,
            validator: function (e) {
              return !!/^\S+$/.test(e) || v.su.CHAR.VTYPETEXT.STRING_DOMAIN;
            },
          },
          string_ip_domain_no_loop: {
            regex: /^[A-Za-z0-9\_\-]+\.{1,}/,
            validator: function (e) {
              return "127.0.0.1" != e || v.su.CHAR.VTYPETEXT.IP_NO_LOOP;
            },
            vtypeText: v.su.CHAR.VTYPETEXT.STRING_DOMAIN,
          },
          ip_domain: {
            regex: /^.+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.IP_DOMAIN,
            validator: function (e) {
              return (
                (!0 === v.su.Services.Vtype.types["ip"].regex.test(e) &&
                  !0 === v.su.Services.Vtype.types["ip"].validator(e)) ||
                !0 === v.su.Services.Vtype.types["domain"].regex.test(e) ||
                v.su.CHAR.VTYPETEXT.IP_DOMAIN
              );
            },
          },
          domain: {
            regex:
              /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.DOMAIN,
          },
          domain_header: {
            regex: /^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]*)$/,
            vtypeText: v.su.CHAR.VTYPETEXT.DOMAIN,
          },
          ascii_visible: {
            regex: /^[\x21-\x7e]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.ASCII_VISIBLE,
          },
          symbols_combined_pws: {
            regex:
              /^(?![0-9\x20]+$)(?![a-zA-Z\x20]+$)(?![\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\x20]+$)[a-zA-Z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\x20]{2,}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.PWD_SYMBOL_CHECK,
          },
          ascii_64: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{5}$/,
            vtypeText: v.su.CHAR.errStr.wlanWepPwdAscii64Err,
          },
          ascii_128: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{13}$/,
            vtypeText: v.su.CHAR.errStr.wlanWepPwdAscii128Err,
          },
          ascii_152: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{16}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.ASCII_VISIBLE,
          },
          string_visible: {
            regex: /^\S+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.STRING_VISIBLE,
          },
          string_visible_no_comma: {
            regex: /^\S+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.STRING_VISIBLE_NO_COMMA,
            validator: function (e) {
              return !(0 <= e.indexOf(","));
            },
          },
          password: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\%\^\/\ ]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.PWD,
          },
          psk_password: {
            regex:
              /^([A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{8,63}|[0-9a-fA-F]{8,64})$/,
            vtypeText: v.su.CHAR.VTYPETEXT.PSK_PWD,
          },
          wpa3_password: {
            regex:
              /^([A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{8,63})$/,
            vtypeText: v.su.CHAR.VTYPETEXT.WPA3_PWD,
          },
          string_visible_allow_blank: {
            regex: /^(\S|\x20)+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.STRING_VISIBLE_ALLOW_BLANK,
          },
          string_visible_describe: {
            regex: /^[A-Za-z0-9\-\_]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.INVALIDTEXT,
          },
          name: {
            regex: /^[A-Za-z0-9\_]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.NAME,
          },
          name_special: {
            regex: /^[A-Za-z0-9\_\-]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.NAME,
            validator: function (e) {
              return !(e.length < 4);
            },
          },
          name_with_special_start: {
            regex: /^[a-zA-Z_]/,
            vtypeText: v.su.CHAR.VTYPETEXT.NAME_START,
          },
          name_in_vpn: {
            regex: /^[a-zA-Z0-9\_][A-Za-z0-9\_\-]{0,14}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.VPN_NAME_PWD,
          },
          pwd_in_vpn: {
            regex: /^[A-Za-z0-9\_\-]{1,15}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.VPN_NAME_PWD,
          },
          cloud_username: {
            regex: /^[\s\S]*?$/,
            vtypeText: v.su.CHAR.VTYPETEXT.NAME,
          },
          cloud_email: {
            regex:
              /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/,
            vtypeText: v.su.CHAR.VTYPETEXT.EMAIL,
          },
          cloud_pwd: {
            regex: /^[\x21-\x7E]{6,32}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.PWD,
          },
          note: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]*$/,
            vtypeText: v.su.CHAR.VTYPETEXT.NOTE,
          },
          sim_pin: {
            regex: /^[0-9]{4}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.SIM_PIN,
          },
          sim_dialnum: {
            regex: /^[0-9*#]{0,118}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.SIM_DIALNUM,
          },
          port: {
            validator: function (e) {
              var t = /^\s*[0-9]+\s*$/,
                i = e.toString().split("-"),
                r = i.length;
              if (2 < r) return v.su.CHAR.VTYPETEXT.PORT_RANGE_FORMAT;
              for (var n = 0; n < r; n++)
                if (
                  0 == i[n].length ||
                  !t.test(i[n]) ||
                  parseInt(i[n]) < 1 ||
                  65535 < parseInt(i[n])
                )
                  return v.su.CHAR.VTYPETEXT.PORT_RANGE_OUT;
              return !0;
            },
          },
          time_start: {
            validator: function (e) {
              if (!/^[0-9]{1,2}\:{1}[0-9]{1,2}$/g.test(e))
                return v.su.CHAR.VTYPETEXT.TIME_FORMAT;
              var t = e.indexOf(":"),
                i = parseInt(e.slice(0, t), 10),
                r = parseInt(e.slice(t + 1), 10);
              return i < 0 || 24 <= i
                ? v.su.CHAR.VTYPETEXT.TIME_FORMAT
                : r < 0 || 60 <= r
                ? v.su.CHAR.VTYPETEXT.TIME_FORMAT
                : !(24 == i && 0 < r) || v.su.CHAR.VTYPETEXT.TIME_START;
            },
          },
          time_end: {
            validator: function (e) {
              if (!/^[0-9]{1,2}\:{1}[0-9]{1,2}$/g.test(e))
                return v.su.CHAR.VTYPETEXT.TIME_FORMAT;
              var t = e.indexOf(":"),
                i = parseInt(e.slice(0, t), 10),
                r = parseInt(e.slice(t + 1), 10);
              return i < 0 || 24 < i
                ? v.su.CHAR.VTYPETEXT.TIME_FORMAT
                : r < 0 || 60 <= r
                ? v.su.CHAR.VTYPETEXT.TIME_FORMAT
                : 0 == i && 0 == r
                ? v.su.CHAR.VTYPETEXT.TIME_END
                : !(24 == i && 0 < r) || v.su.CHAR.VTYPETEXT.TIME_END;
            },
          },
          time: {
            format: "hh:mm:ss",
            validator: function (e) {
              if ("hh:mm:ss" === this.format) {
                if (!1 === /^(?:[01]\d|2[0-3])(?::[0-5]\d){2}$/.test(e))
                  return v.su.CHAR.VTYPETEXT.TIME_FORMAT;
              } else if (
                "hh:mm" === this.format &&
                !1 === /^(?:[01]\d|2[0-3])(?::[0-5]\d){1}$/.test(e)
              )
                return v.su.CHAR.VTYPETEXT.TIME_FORMAT;
              return !0;
            },
          },
          username: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.USERNAME,
          },
          adminName: {
            regex: /^[A-Za-z0-9\-\_\@\.]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.USERNAME,
          },
          securityPwd: {
            validator: function (e) {
              if (8 <= e.length && e.length < 64) {
                var t =
                  /^[A-Za-z0-9\`\~\!\@\#\$\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\%\^\ ]+$/;
                if (e && !t.test(e)) return v.su.CHAR.VTYPETEXT.ILLEGAL_PWD;
              } else if (
                64 == e.length &&
                ((t = /^[A-Fa-f0-9]+$/), e && !t.test(e))
              )
                return smb.charset.validation.ILLEGAL_PWD;
              return !0;
            },
          },
          wanPwd: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\%\^\/\ ]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.PASSWORD_FORMAT,
          },
          userPwd: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\%\^\/]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.PASSWORD_FORMAT,
          },
          serviceName: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\%\^\/\ ]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.SERVICE_NAME,
          },
          acName: {
            regex:
              /^[A-Za-z0-9\`\~\!\@\#\$\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\%\^\/\ ]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.AC_NAME,
          },
          integer: {
            regex: /^[0-9]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.INTEGER_INVALID,
            validator: function (e) {
              return (null !== this.max || this.max !== undefined) &&
                e > this.max
                ? null === this.min && this.min === undefined
                  ? v.su.CHAR.VTYPETEXT.NUMBER_MAX.replace(
                      "%max",
                      this.max.toString()
                    )
                  : v.su.CHAR.VTYPETEXT.NUMBER_MIN_MAX.replace(
                      "%min",
                      this.min.toString()
                    ).replace("%max", this.max.toString())
                : (null === this.min && this.min === undefined) ||
                    !(e < this.min) ||
                    (null === this.max && this.max === undefined
                      ? v.su.CHAR.VTYPETEXT.NUMBER_MIN.replace(
                          "%min",
                          this.min.toString()
                        )
                      : v.su.CHAR.VTYPETEXT.NUMBER_MIN_MAX.replace(
                          "%min",
                          this.min.toString()
                        ).replace("%max", this.max.toString()));
            },
          },
          groupKey: {
            validator: function (e) {
              return 0 !== e && e < 30
                ? v.su.CHAR.VTYPETEXT.MIN_THIRTY
                : !(0 !== e && 1e6 < e) || v.su.CHAR.VTYPETEXT.MAX_MILLION;
            },
          },
          ipMask: {
            allowAllZero: !1,
            allowAny: !1,
            validator: function (e) {
              var t = e.indexOf("/"),
                r = (e.slice(0, t), e.slice(t + 1, e.length));
              if (r <= 0 || 32 < r) return v.su.CHAR.VTYPETEXT.IP_MASK_UNION;
              if (
                !/^[0-9]{1,3}\.{1}[0-9]{1,3}\.{1}[0-9]{1,3}\.{1}[0-9]{1,3}$/.test(
                  e
                )
              )
                return v.su.CHAR.VTYPETEXT.IP_MASK_UNION;
              var n = e.split(".");
              for (i = 0; i < 4; i++)
                if (n[i] < 0 || 255 < n[i])
                  return v.su.CHAR.VTYPETEXT.IP_MASK_UNION;
              if (
                !this.allowAllZero &&
                0 == parseInt(n[0], 10) &&
                0 == parseInt(n[1], 10) &&
                0 == parseInt(n[2], 10) &&
                0 == parseInt(n[3], 10)
              )
                return v.su.CHAR.VTYPETEXT.IP_MASK_UNION;
              if (255 == n[0]) {
                if (!this.allowAny) return v.su.CHAR.VTYPETEXT.IP_MASK_UNION;
                if (255 != n[1] || 255 != n[2] || 255 != n[3])
                  return v.su.CHAR.VTYPETEXT.IP_MASK_UNION;
              }
              return 240 <= n[0] && n[0] <= 254
                ? v.su.CHAR.VTYPETEXT.IP_MASK_UNION
                : 224 <= n[0] && n[0] <= 239
                ? v.su.CHAR.VTYPETEXT.IP_MASK_UNION
                : 127 != n[0] || v.su.CHAR.VTYPETEXT.IP_MASK_UNION;
            },
          },
          deviceName: {
            regex: /^[A-Za-z0-9\-\_]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.DEVICE_NAME_INVALID,
          },
          noStartSpace: {
            validator: function (e) {
              return (
                !e ||
                !/^\s+/.test(e) ||
                v.su.CHAR.VTYPETEXT.START_SPACE_IS_NOT_ALLOW
              );
            },
          },
          noSpecialChar: {
            validator: function (e) {
              return (
                !e ||
                !/[\s\$\`\#\&\(\)\;\"\'\<\>]+/.test(e) ||
                v.su.CHAR.VTYPETEXT.NO_SPECIAL_CHARACTER
              );
            },
          },
          hex: {
            regex: /^[A-Fa-f0-9]*$/,
            vtypeText: v.su.CHAR.VTYPETEXT.INVALIDTEXT,
          },
          hex_64: {
            regex: /^[0-9a-fA-F]{10}$/,
            vtypeText: v.su.CHAR.errStr.wlanWepPwdHex64Err,
          },
          hex_128: {
            regex: /^[0-9a-fA-F]{26}$/,
            vtypeText: v.su.CHAR.errStr.wlanWepPwdHex128Err,
          },
          hex_152: {
            regex: /^[0-9a-fA-F]{32}$/,
            vtypeText: v.su.CHAR.VTYPETEXT.INVALIDTEXT,
          },
          string: {
            regex: /^[A-Za-z0-9\_\-\@\:\/\.]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.INVALIDTEXT,
          },
          numberAndPoint: {
            regex: /^[0-9\.]+$/,
            vtypeText: v.su.CHAR.VTYPETEXT.INVALIDTEXT,
          },
          string_file: {
            extension: "txt",
            errorText: v.su.CHAR.VTYPETEXT.INVALIDFILE,
            validator: function (e) {
              for (
                var t = v.isArray(this.extension)
                    ? this.extension
                    : [this.extension],
                  i = 0;
                i < t.length;
                i++
              ) {
                if (new RegExp(".*." + t[i].toLowerCase() + "$").test(e))
                  return !0;
                if (new RegExp(".*." + t[i].toUpperCase() + "$").test(e))
                  return !0;
              }
              return v.isFunction(this.errorText)
                ? this.errorText(e)
                : this.errorText;
            },
          },
        }),
        (g.prototype.validate = function (e, t) {
          var i = {
              type: "sample",
              regex: /^[a-zA-Z0-9]&/,
              vtypeText: "",
              validator: null,
            },
            r = "",
            n = {};
          if ("string" === v.type(t)) r = t;
          else if ("object" === v.type(t) && t.vtype && !(r = (n = t).vtype))
            return !0;
          if (!g.types[r]) {
            for (var a = !1, s = r.split("||"), o = 0; o < s.length; o++) {
              for (var l = !0, u = s[o].split("&&"), d = 0; d < u.length; d++) {
                var h = v.trim(u[d]);
                if (!g.types[h]) return null;
                var c = v.extend({}, n, { vtype: h });
                if (!0 !== (l = this.validate(e, c))) break;
              }
              if (!0 === l) {
                a = !0;
                break;
              }
              a = l;
            }
            return !0 === a || (n.vtypeText ? n.vtypeText : a);
          }
          i = g.types[r];
          var p = v.extend({}, i, n),
            f = !0;
          return !p.regex ||
            !0 === p.regex.test(e) ||
            (p.vtypeText === undefined &&
              null === p.vtypeText &&
              "" === p.vtypeText)
            ? !p.validator || !0 === (f = p.validator(e)) || f
            : p.vtypeText;
        }),
        (g.prototype.addVtype = function (e) {
          v.extend(g.types, e);
        }),
        g));
  })(jQuery),
  (function (a) {
    var i, t;
    (a.su = a.su || {}),
      (a.su.Services = a.su.Services || {}),
      (a.su.Services.Ajax =
        ((i = {
          contentType: "text/plain;charset=UTF-8",
          dataType: "text",
          timeout: 15e3,
        }),
        (t = function (e) {
          if ("object" == typeof t.instance) return t.instance;
          a.extend(!0, i, e.ajax),
            (this.failHandler = e.failHandler),
            (this.errorHandler = e.errorHandler),
            (this.name = "ajax"),
            (this.proxyMap = {}),
            a.su.Service.call(this),
            (t.instance = this);
        }),
        a.su.inherit(a.su.Service, t),
        (t.prototype.request = function (e) {
          e.url &&
            a.su.debug.log("can not use url:" + e.url + " in services ajax");
          var t = {
            url: e.url,
            ajax: a.extend(!0, {}, i, e.ajax),
            data: e.data,
            success: e.success,
            fail: this.failHandler ? this.failHandler(e.fail) : e.fail,
            error: this.errorHandler
              ? this.errorHandler(e.error, e.preventDefaultError)
              : e.error,
            params: e.params,
            preventSuccessEvent: e.preventSuccessEvent,
            preventFailEvent: e.preventFailEvent,
            preventErrorEvent: e.preventErrorEvent,
          };
          a.extend(t, e.options),
            this.sendRequest(
              a.extend(
                {
                  proxy: e.proxy || a.su.settings.AjaxService.defaultProxy,
                  method: e.method,
                },
                t
              )
            );
        }),
        (t.prototype.upload = function (e) {
          var t = {
            fileId: e.fileId,
            data: e.data,
            success: e.success,
            fail: e.fail,
            error: e.error,
            timeout: e.timeout,
            ajax: e.ajax || {},
          };
          this.sendRequest(
            a.extend(
              {
                proxy: e.proxy || a.su.settings.AjaxService.defaultProxy,
                method: "upload",
              },
              t
            )
          );
        }),
        (t.prototype.download = function (e) {
          a.su.ClassManager.getInstance()
            .get(a.su.settings.AjaxService.defaultProxy)
            .create(proxyOption)
            .download(e);
        }),
        (t.prototype.createProxy = function (e, t) {
          return a.su.ClassManager.getInstance().get(e).create(t);
        }),
        (t.prototype.sendRequest = function (t) {
          var i = this,
            e = t.ajax.async,
            r = function (e) {
              var t = e.proxy,
                i = e.method;
              delete e.proxy,
                delete e.method,
                i && t[i] ? t[i].call(t, e) : t.op("default", e);
            };
          if (!1 === e)
            this.proxyMap[t.proxy] ||
              (this.proxyMap[t.proxy] = a.su.createSync(t.proxy)),
              (t.proxy = this.proxyMap[t.proxy]),
              r(t);
          else {
            var n = a.Deferred();
            this.proxyMap[t.proxy]
              ? n.resolve(i.proxyMap[t.proxy])
              : a.su.create(t.proxy).done(function (e) {
                  (i.proxyMap[t.proxy] = e), n.resolve(e);
                }),
              n.then(function (e) {
                (t.proxy = e), r(t);
              });
          }
        }),
        t));
  })(jQuery),
  (function (d) {
    (d.su = d.su || {}),
      (d.su.Services = d.su.Services || {}),
      (d.su.Services.Polling = (function () {
        var e = function () {
          if ("object" == typeof e.instance) return e.instance;
          (this.name = "polling"),
            d.su.Service.call(this),
            ((e.instance = this).activityModelMap = {}),
            this.addListener("ev_model_dirty", function (e, t) {
              this.clearPolling(t);
            });
        };
        d.su.inherit(d.su.Service, e);
        var u = function (e) {
          var t = null;
          for (var i in e)
            e.hasOwnProperty(i) &&
              (null === t ? (t = e[i]) : 0 < e[i] && e[i] < t && (t = e[i]));
          return t;
        };
        return (
          (e.prototype.poll = function (e, t, i, r, n, a) {
            n instanceof d.su.Module && ((a = n), (n = !0));
            var s = "string" == typeof e ? e : e.name ? e.name : e.dataObj.name,
              o = "string" == typeof a ? a : a.name;
            if (this.activityModelMap[s]) {
              (this.activityModelMap[s].modules[o] = r),
                clearInterval(this.activityModelMap[s].instance);
              r = u(this.activityModelMap[s].modules);
              (this.activityModelMap[s].method = t),
                (this.activityModelMap[s].dataAndCallback = d.su.clone(i));
              l = function () {
                var e = d.su.modelManager.get(s) || d.su.storeManager.get(s);
                e.isDirty() || e[t](i);
              };
              (this.activityModelMap[s].instance = setInterval(l, r)), n && l();
            } else {
              (this.activityModelMap[s] = {
                modules: {},
                queryInterval: null,
                instance: null,
              }),
                (this.activityModelMap[s].modules[o] = r),
                (this.activityModelMap[s].method = t),
                (this.activityModelMap[s].dataAndCallback = d.su.clone(i));
              var l = function () {
                var e = d.su.modelManager.get(s) || d.su.storeManager.get(s);
                e.isDirty() || e[t](i);
              };
              (this.activityModelMap[s].instance = setInterval(l, r)), n && l();
            }
          }),
          (e.prototype.stopPolling = function (e, t, i) {
            t instanceof d.su.Module && ((i = t), (t = !0));
            var r = "string" == typeof e ? e : e.name ? e.name : e.dataObj.name,
              n = "string" == typeof i ? i : i.name;
            if (this.checkPolling(e, i)) {
              n in this.activityModelMap[r].modules &&
                (this.activityModelMap[r].modules[n] = undefined),
                clearInterval(this.activityModelMap[r].instance);
              var a = u(this.activityModelMap[r].modules),
                s = this.activityModelMap[r].method,
                o = this.activityModelMap[r].dataAndCallback;
              if (a) {
                var l = function () {
                  var e = d.su.modelManager.get(r) || d.su.storeManager.get(r);
                  e.isDirty() || e[s](o);
                };
                (this.activityModelMap[r].instance = setInterval(l, a)),
                  t && l();
              }
            }
          }),
          (e.prototype.clearPolling = function (e) {
            for (var t in (clearInterval(this.activityModelMap[e].instance),
            this.activityModelMap[e].modules))
              this.activityModelMap[e].modules.hasOwnProperty(t) &&
                (this.activityModelMap[e].modules[t] = undefined);
          }),
          (e.prototype.checkPolling = function (e, t) {
            var i = "string" == typeof e ? e : e.name ? e.name : e.dataObj.name,
              r = "string" == typeof t ? t : t.name;
            return (
              !!this.activityModelMap[i] && this.activityModelMap[i].modules[r]
            );
          }),
          e
        );
      })());
  })(jQuery),
  (function (i) {
    var e;
    (i.su = i.su || {}),
      (i.su.Services = i.su.Services || {}),
      (i.su.Services.ModuleManager =
        ((e = function () {
          if ("object" == typeof e.instance) return e.instance;
          (this.name = "moduleManager"),
            i.su.Service.call(this),
            (e.instance = this);
        }),
        i.su.inherit(i.su.Service, e),
        (e.prototype.launch = function (e, t) {
          i.su.moduleManager.launch(e, t);
        }),
        (e.prototype.get = function (e) {
          var t = i.su.moduleManager.query(e);
          return t instanceof i.su.Module && t;
        }),
        (e.prototype.getStatus = function (e) {
          return i.su.moduleManager.getStatus(e);
        }),
        (e.prototype.hasModule = function (e) {
          return !1 !== i.su.moduleManager.getStatus(e);
        }),
        e));
  })(jQuery),
  (function (f) {
    (f.su = f.su || {}),
      (f.su.Services = f.su.Services || {}),
      (f.su.Services.ModuleLoader = (function () {
        var e = function () {
          if ("object" == typeof e.instance) return e.instance;
          (this.name = "moduleLoader"),
            f.su.Service.call(this),
            ((e.instance = this)._map = {}),
            (this.loadingModule = {});
        };
        f.su.inherit(f.su.Service, e);
        var c = function (e, t) {
            return e[t];
          },
          p = function (e, t) {
            return e + "_" + t;
          };
        return (
          (e.prototype.load = function (e, r, n, t) {
            var a = this;
            if ((n = n && n.viewObjs ? n.viewObjs[0] : n)) {
              var i = e.module,
                s = f.su.moduleManager.query(i);
              if (s) {
                this.isBusy = !0;
                var o = e.view || s.view[0],
                  l = p(i, o),
                  u = c(this._map, l),
                  d = r.module,
                  h = f.su.randomId("timestamp");
                (this.loadingModule[d] = {}),
                  (this.loadingModule[d][h] = "running"),
                  u ||
                    (u = this._map[l] =
                      {
                        id: l,
                        module: i,
                        view: o,
                        children: [],
                        htmlLoader: null,
                        parent: null,
                      }),
                  a.unLoad(n),
                  f.su.moduleManager
                    .load(d)
                    .then(function () {
                      if (!a.loadingModule[d][h])
                        return f
                          .Deferred()
                          .reject("Waring: Loading module too fast.");
                      if (null === n.dataObj)
                        return f
                          .Deferred()
                          .reject("Waring: Loading module too fast.");
                      var e = f.su.moduleManager.query(d),
                        t = r.view || e.view[0],
                        i = p(d, t);
                      return (
                        a._map[i]
                          ? a._map[i].htmlLoader &&
                            a.unLoad(a._map[i].htmlLoader)
                          : (a._map[i] = {
                              id: i,
                              module: d,
                              view: t,
                              children: [],
                              htmlLoader: null,
                              parent: l,
                            }),
                        (a._map[i].htmlLoader = n),
                        f.inArray(i, u.children) < 0 && u.children.push(i),
                        n.bind(r),
                        (a.isBusy = !1),
                        e.load(r.params)
                      );
                    })
                    .then(function () {
                      delete a.loadingModule[d][h],
                        n.initEmitter(),
                        t && t(f.su.moduleManager.query(d));
                    })
                    .fail(function (e) {
                      f.su.debug.warn(e);
                    });
              }
            }
          }),
          (e.prototype.unLoad = function (e) {
            var l = function (e, t) {
              var i = e[t].module,
                r = f.su.moduleManager.query(i),
                n = e[t].children.slice(0);
              if (n && 0 < n.length)
                for (var a = 0; a < n.length; a++) l(e, n[a]);
              if (
                (r.fireEvent &&
                  r.fireEvent("ev_before_view_unload", [e[t].view]),
                null !== e[t].htmlLoader && e[t].htmlLoader.unload(),
                r && r.fireEvent("ev_view_unload", [e[t].view]),
                (e[t].children = []),
                (e[t].htmlLoader = null),
                e[t].parent)
              ) {
                var s = c(e, e[t].parent),
                  o = f.inArray(t, s.children);
                0 <= o && s.children.splice(o, 1);
              }
            };
            for (var t in this._map)
              this._map.hasOwnProperty(t) &&
                this._map[t].htmlLoader === e &&
                l(this._map, t);
          }),
          e
        );
      })());
  })(jQuery),
  (function (c) {
    var e;
    (c.su = c.su || {}),
      (c.su.Services = c.su.Services || {}),
      (c.su.Services.Timer =
        ((e = function () {
          if ("object" == typeof e.instance) return e.instance;
          (this.name = "timer"),
            c.su.Service.call(this),
            ((e.instance = this)._timerMap = {}),
            (this.defaultTimeout = 1e3);
        }),
        c.su.inherit(c.su.Service, e),
        (e.prototype.setTimer = function (e, t, i, r, n) {
          var a = this;
          if (
            ("string" === c.type(r) && ((n = r), (r = undefined)),
            e instanceof c.su.Module &&
              "function" === c.type(t) &&
              ("interval" === n || "timeout" === n))
          ) {
            var s = e.name;
            if (
              (this._timerMap[s] || (this._timerMap[s] = []),
              "available" === e.status || "running" === e.status)
            ) {
              var o = function () {
                a.clearAll(e);
              };
              this._timerMap[s].destroyHandler ||
                ((this._timerMap[s].destroyHandler = o),
                e.one("ev_before_destroy", o));
              for (var l = this._timerMap[s].length - 1; 0 <= l; l--) {
                var u = this._timerMap[s][l];
                (clearTimer =
                  "interval" === u.type ? clearInterval : clearTimeout),
                  u.moduleId !== e.id &&
                    (clearTimer(u.timerId), this._timerMap[s].splice(l, 1));
              }
              "interval" === n
                ? ((setTimer = setInterval),
                  (clearTimer = clearInterval),
                  r && t())
                : ((setTimer = setTimeout), (clearTimer = clearTimeout));
              var d = function () {
                  "available" !== e.status && "running" !== e.status
                    ? a.clearAll(e)
                    : t();
                },
                h = setTimer(d, i);
              return (
                this._timerMap[s].push({
                  timerId: h,
                  moduleId: e.id,
                  fn: d,
                  type: n,
                }),
                h
              );
            }
            this.clearAll(e);
          } else c.su.debug.log("Error arguments.");
        }),
        (e.prototype.setInterval = function (e, t, i, r) {
          return this.setTimer(e, t, i, r, "interval");
        }),
        (e.prototype.setTimeout = function (e, t, i) {
          return this.setTimer(e, t, i, "timeout");
        }),
        (e.prototype.get = function (e, i) {
          var r,
            t = e.name;
          if (this._timerMap[t])
            return (
              c.each(this._timerMap[t], function (e, t) {
                i !== t.timerId || (r = t);
              }),
              r
            );
        }),
        (e.prototype.clearTimer = function (e, t) {
          var i = e.name;
          if (this._timerMap[i]) {
            var r = this.get(e, t);
            if (r) {
              var n = c.inArray(this._timerMap[i]),
                a = "interval" === r.type ? clearInterval : clearTimeout;
              this._timerMap[i].splice(n, 1), a(t);
            }
          }
        }),
        (e.prototype.clearTimeout = e.prototype.clearTimer),
        (e.prototype.clearInterval = e.prototype.clearTimer),
        (e.prototype.clearAll = function (e) {
          var t = e.name,
            i = this._timerMap[t].length;
          if (this._timerMap[t] && i) {
            for (var r = 0; r < i; r++)
              ("interval" === this._timerMap[t][r].type
                ? clearInterval
                : clearTimeout)(this._timerMap[t][r].timerId);
            e.off("ev_before_destroy", this._timerMap[t].destroyHandler),
              (this._timerMap[t].length = 0),
              (this._timerMap[t].destroyHandler = null);
          }
        }),
        e));
  })(jQuery),
  (function (s) {
    (s.su = s.su || {}),
      (s.su.Services = s.su.Services || {}),
      (s.su.Services.ModuleRouter = (function () {
        var u = {},
          t = function (e) {
            if ("object" == typeof t.instance) return t.instance;
            (this.currentPage = null),
              (this.mainPageContainer = null),
              (this.indexPageContainer = null),
              (this.attrEnable = [
                "module",
                "name",
                "text",
                "default",
                "alias",
                "redirect",
                "container",
                "meta",
              ]),
              this.init(e.hashMap),
              (this.name = "moduleRouter"),
              s.su.Service.call(this),
              (t.instance = this);
          };
        s.su.inherit(s.su.Service, t);
        var a = function (e) {
          var t,
            i = s.su.serviceManager.get("device").getFunctionSupport();
          if (!i) return e;
          for (var r = 0; r < e.length; r++)
            (t = e[r].bind)
              ? 0 === t.indexOf("!")
                ? 1 == i[(t = t.slice(1))] && (e.splice(r, 1), r--)
                : 1 != i[t] && (e.splice(r, 1), r--)
              : e[r].children && e[r].children.length && a(e[r].children);
          return e;
        };
        return (
          (t.prototype.getNavigatorData = function () {
            var n,
              t = this;
            if (!this.navigatorData) {
              var i =
                  ((n = function (e) {
                    for (var t = 0; t < e.length; t++) {
                      var i = e[t].text,
                        r = s.su.CHAR.MENU_ITEMS_NAME[i] || s.su.CHAR.INDEX[i];
                      r !== undefined
                        ? (e[t].text = r)
                        : s.su.debug.warn(
                            "'" +
                              e[t].name +
                              "' has no menu name text defined in $.su.CHAR"
                          ),
                        e[t].children && n(e[t].children);
                    }
                  }),
                  function (e) {
                    n(e);
                  }),
                e = s.su.serviceManager.get("device").getCurrentMode(),
                r = s.su.settings.navigatorUrl[e];
              if (!r) throw new Error("mode Error!");
              s.ajax(r, {
                async: !1,
                method: "GET",
                dataType: "json",
                success: function (e) {
                  a(e), i(e), (t.navigatorData = e);
                },
              });
            }
            return this.navigatorData;
          }),
          (t.prototype.init = function (e) {
            var t = this;
            (e = e || this.getNavigatorData()),
              "array" !== s.type(e) && (e = JSON.parse(e)),
              (function l(e, t, i) {
                for (var r = e.length, n = 0; n < r; n++) {
                  var a = e[n],
                    s = a["name"];
                  a.module = a.module || a.name;
                  var o = t.slice(0);
                  o.push(s),
                    (i[s] = { path: o, self: a }),
                    a["children"] && l(a["children"], o, i);
                }
              })(e, [], (u = {}));
            var i = localStorage.getItem("indexMeta");
            i &&
              (this.setAttr(["index"], "meta", { name: i }),
              localStorage.removeItem("indexMeta")),
              s(window)
                .off("hashchange")
                .on("hashchange", function () {
                  var e = location.hash && location.hash.substr(1);
                  t.currentPage != e && t.goTo(e);
                });
          }),
          (t.prototype._syncModule = function (e, t, i, r) {
            var n,
              a,
              s = e.name;
            if ("add" == i)
              for (var o = t.length - 2; 0 <= o; o--)
                o == t.length - 2 && r
                  ? "default" == r
                    ? (n = u[t[o]].self.children.length)
                    : ((n = Math.min(u[t[o]].self.children.length, Number(r))),
                      u[t[o]].self.children.splice(n, 0, e))
                  : ((a = this.findItems(s, "name", u[t[o]].self.children)),
                    (u[t[o]].self.children[a] = e)),
                  (e = u[t[o]].self),
                  (s = u[t[o]].self.name);
            if ("delete" == i)
              for (o = t.length - 2; 0 <= o; o--)
                o == t.length - 2 && r
                  ? ((a = this.findItems(s, "name", u[t[o]].self.children)),
                    u[t[o]].self.children.splice(a, 1))
                  : ((a = this.findItems(s, "name", u[t[o]].self.children)),
                    (u[t[o]].self.children[a] = e)),
                  (e = u[t[o]].self),
                  (s = u[t[o]].self.module);
          }),
          (t.prototype.addRouter = function (e, t, i, r) {
            e.name &&
              !u[e.name] &&
              ((e.module = e.module || e.name),
              (u[e.name] = { path: t, self: e }),
              this._syncModule(u[e.name].self, u[e.name].path, "add", i),
              r && this.trigger("ev_router_change", ["add", e, t, i]));
          }),
          (t.prototype.deleteRouter = function (e, t) {
            if (u[e]) {
              var i = u[e].self,
                r = u[e].path;
              delete u[e],
                this._syncModule(i, r, "delete", !0),
                t &&
                  this.trigger("ev_router_change", ["delete", e, r, position]);
            }
          }),
          (t.prototype.setAttr = function (e, t, i) {
            if (!(s.inArray(t, this.attrEnable) < 0)) {
              "array" !== s.type(e) && (e = [e]);
              for (var r = 0; r < e.length; r++)
                u[e[r]] &&
                  ((u[e[r]].self[t] = i),
                  this._syncModule(u[e[r]].self, u[e[r]].path, "add"));
            }
          }),
          (t.prototype.deleteAttr = function (e, t) {
            if (!(s.inArray(t, this.attrEnable) < 0)) {
              "array" !== s.type(e) && (e = [e]);
              for (var i = 0; i < e.length; i++) {
                delete u[e[i]].self[t];
                var r = u[e[i]].self,
                  n = u[e[i]].path;
                this._syncModule(r, n, "delete");
              }
            }
          }),
          (t.prototype.setPageContainer = function (e, t) {
            "main" == t
              ? (this.mainPageContainer = e)
              : "index" == t && (this.indexPageContainer = e);
          }),
          (t.prototype.findItems = function (e, t, i) {
            for (var r = 0; r < i.length; r++) if (i[r][t] == e) return r;
          }),
          (t.prototype.splitHash = function (e) {
            var t, i, r;
            if (
              ((t = (e = e.split("?"))[0]),
              e[1] && /(\w+=\w+&)+\w+=\w+/.test(e[1]))
            ) {
              var n;
              (i = (i = e[1]).split("&")), (r = {});
              for (var a = 0; a < i.length; a++)
                r[(n = i[a].split("="))[0]] = n[1];
              return [t, r];
            }
            return [t];
          }),
          (t.prototype.goTo = function (e) {
            var t, i;
            if ("" != e) {
              var r = this.splitHash(e),
                n = r[0];
              r[1] && (i = r[1]),
                u[n] &&
                  u[n].self.redirect &&
                  u[u[n].self.redirect] &&
                  (n = u[n].self.redirect),
                (n = this._getDefaultPage(n)),
                (t = u[n]).self.container && "main" == t.self.container
                  ? ((this.currentPage = n),
                    (location.hash = n),
                    s.su.serviceManager
                      .get("moduleLoader")
                      .load(
                        { module: "main" },
                        { module: t.self.module, params: i },
                        this.mainPageContainer
                      ))
                  : s.su.serviceManager.get("moduleManager").get("index") &&
                    "running" ==
                      s.su.serviceManager.get("moduleManager").get("index")
                        .status
                  ? (s.su.serviceManager
                      .get("moduleManager")
                      .get("index")
                      .showLoading(),
                    this.trigger("ev_sync_navigator", [n]),
                    this.loadPage(n, i, function () {
                      s.su.serviceManager
                        .get("moduleManager")
                        .get("index")
                        .hideLoading();
                    }))
                  : (this.setAttr(["index"], "meta", { name: n }),
                    s.su.serviceManager
                      .get("moduleLoader")
                      .load(
                        { module: "main" },
                        { module: "index" },
                        this.mainPageContainer,
                        function () {}
                      ));
            }
          }),
          (t.prototype.loadPage = function (e, t, i) {
            var r = u[e].self.module,
              n = this;
            (this.currentPage = e),
              (location.hash = e),
              s.su.serviceManager
                .get("moduleLoader")
                .load(
                  { module: "index" },
                  { module: r, params: t },
                  this.indexPageContainer,
                  function () {
                    n.indexPageContainer
                      .removeClass(function (e, t) {
                        var i = t.match(/\bmodule-\w*\b/g);
                        if (i) return i[0];
                      })
                      .addClass("module-" + e),
                      s.isFunction(i) && i();
                  }
                );
          }),
          (t.prototype._getDefaultPage = function (e) {
            var t = u[e];
            if (!t || t.self.unreachable) return this._getMainMenuDefaultPage();
            var i = t.self.module;
            for (
              t = t.self;
              !s.su.serviceManager.get("moduleManager").hasModule(i) &&
              t.children &&
              0 < t.children.length;

            ) {
              var r = t.defaultPage;
              if (r) {
                var n = this.findItems(r, "name", t.children);
                t = t.children[n];
              } else
                for (var a = 0; a < t.children.length; a++)
                  if (!t.children[a].notDefaultPage) {
                    t = t.children[a];
                    break;
                  }
            }
            return t.name;
          }),
          (t.prototype._getMainMenuDefaultPage = function () {
            if (this.defaultPage) return this.defaultPage;
            for (var e in u)
              if (u.hasOwnProperty(e) && u[e].self.defaultPage)
                return (this.defaultPage = u[e].self.name), this.defaultPage;
          }),
          (t.prototype.getCurrentPage = function () {
            return this.currentPage;
          }),
          (t.prototype.getHashMap = function () {
            return u;
          }),
          (t.prototype.getMetaPage = function (e) {
            var t = u[e].self.meta;
            if (t)
              return 1 != t.persistence && this.deleteAttr(e, "meta"), t.name;
          }),
          t
        );
      })());
  })(jQuery),
  (function (c) {
    (c.su = c.su || {}),
      (c.su.Model = (function () {
        var e = function (e) {
          e = c.extend(
            !0,
            {
              fields: null,
              feedback: !0,
              validator: null,
              autoReload: !1,
              convert: null,
              serialize: null,
              preventSuccessEvent: !1,
              preventFailEvent: !1,
              preventErrorEvent: !1,
              params: { read: {}, update: {}, create: {}, remove: {} },
              methods: {},
            },
            e
          );
          var i = this;
          if (
            ((this.name = e.name),
            (this._name = e.name),
            (this.feedback = e.feedback),
            (this.fields = e.fields),
            (this.validator = e.validator),
            (this.data = []),
            (this.convert = e.convert),
            (this.serialize = e.serialize),
            (this.params = e.params),
            (this.prompt = e.prompt),
            (this.methods = e.methods),
            (this.autoReload = e.autoReload),
            (this.preventSuccessEvent = e.preventSuccessEvent),
            (this.preventFailEvent = e.preventFailEvent),
            (this.preventErrorEvent = e.preventErrorEvent),
            c.su.Observable.call(this),
            e.proxy)
          ) {
            var t = c.su.ClassManager.getInstance();
            if ("string" === c.type(e.proxy)) {
              var r = t.get(e.proxy);
              r || c.su.debug.error("Model proxy class not found: " + e.proxy),
                (this.proxy = r.create());
            } else if (e.proxy.isProxy) this.proxy = e.proxy;
            else {
              var n = c.extend(!0, { triggerEvent: !0 }, e.proxy);
              this.proxy = t.get(c.su.settings.Model.defaultProxy).create(n);
            }
            this.proxy.addListener("ev_load", function (e, t) {
              i.loadData(t, !0);
            }),
              this.proxy.addListener("ev_sync_success", function () {
                i.record();
              });
          }
          a.call(this);
        };
        c.su.inherit(c.su.Observable, e);
        var n = function (e) {
            var t = new c.su.DataField(e),
              i = this;
            if (t.validator) {
              var r = t.validator;
              t.validator = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return e.push(i), r.apply(this, e);
              };
            }
            return t;
          },
          a = function () {
            for (var r = this, e = 0, t = this.fields.length; e < t; e++)
              (this.data[e] = n.call(this, this.fields[e])),
                (this[this.fields[e].name] = this.data[e]),
                this.data[e].on("ev_data_change", function (e, t, i) {
                  "_value" === t.type && r.trigger("ev_data_change", [t, i, r]);
                }),
                this.data[e].on("ev_data_record", function (e, t, i) {
                  r.trigger("ev_data_record", [t, i, r]);
                });
            for (var i in r.methods)
              r.methods.hasOwnProperty(i) &&
                (r[i] = (function (e) {
                  return function () {
                    r.methods[e].apply(r, arguments);
                  };
                })(i));
          };
        return (
          (e.checkProxyDep = function (e) {
            return "string" == c.type(e);
          }),
          (e.importProxyDep = function (e, t) {
            return c.su.require(e, t);
          }),
          (e.prototype.modelConvert = function (e) {
            var t = {};
            e || (e = {}), null !== this.convert && (e = this.convert(e));
            for (var i = 0, r = this.data.length; i < r; i++) {
              var n = this.data[i];
              if (n.mapping) {
                var a = e[n.mapping];
                (t[n.name] = a === undefined ? n.defaultValue : a),
                  null !== n.convert &&
                    a !== undefined &&
                    null !== a &&
                    (t[n.name] = n.convert(a, e));
              }
            }
            return t;
          }),
          (e.prototype.modelSerialize = function (e) {
            var t = {};
            if (!e) return {};
            for (var i = 0, r = this.data.length; i < r; i++) {
              var n = this.data[i];
              if (n.name) {
                var a = e[n.name];
                null !== n.serialize &&
                  a !== undefined &&
                  (a = n.serialize(a, e)),
                  (t[n.mapping] = a);
              }
            }
            return null !== this.serialize && (t = this.serialize(t)), t;
          }),
          (e.prototype.loadData = function (e, t) {
            this.trigger("ev_before_load_data", [e]),
              t && (e = this.modelConvert(e));
            for (var i = 0, r = this.data.length; i < r; i++) {
              var n = e[this.data[i].name];
              this.data[i].setValue(n);
            }
            this.record(), this.trigger("ev_loaded", [e]);
          }),
          (e.prototype.replaceData = function (e, t, i) {
            t && (e = this.modelConvert(e));
            for (var r = 0, n = this.data.length; r < n; r++) {
              var a = e[this.data[r].name];
              a !== undefined &&
                (this.data[r].setValue(a), i && this.data[r].record());
            }
            this.trigger("ev_loaded", [e]);
          }),
          (e.prototype.getData = function (e, t) {
            for (var i, r = {}, n = 0, a = this.fields.length; n < a; n++)
              if ("submit" !== e || !this.data[n].disabled) {
                i = this.data[n].getValue();
                var s = {};
                !0 === t
                  ? (s[this.data[n].mapping] = i)
                  : (s[this.data[n].name] = i),
                  c.extend(r, s);
              }
            return r;
          }),
          (e.prototype.validate = function (e) {
            for (
              var t = e && e.returnDetail,
                i = !0,
                r = 0,
                n = this.fields.length;
              r < n;
              r++
            ) {
              var a = this.data[r];
              if (!0 !== (i = a.validate()))
                return (
                  this.trigger("ev_validate_change", [
                    { result: !1, field: a.getName() },
                  ]),
                  t ? { result: !1, field: a.getName() } : i
                );
            }
            return c.isFunction(this.validator)
              ? ((i = this.validator.call(this)),
                this.trigger("ev_validate_change", [
                  { result: i, field: null },
                ]),
                t ? { result: !1, field: a.getName() } : i)
              : (this.trigger("ev_validate_change", [{ result: !0 }]),
                t ? { result: !0, field: a.getName() } : i);
          }),
          (e.prototype.beforeLoad = function (e) {
            var n = this,
              a = (e = e || {}).fail,
              s =
                (e.preventSuccessEvent === undefined
                  ? n.preventSuccessEvent
                  : e.preventSuccessEvent,
                e.preventFailEvent === undefined
                  ? n.preventFailEvent
                  : e.preventFailEvent),
              i =
                e.preventErrorEvent === undefined
                  ? n.preventErrorEvent
                  : e.preventErrorEvent;
            (e.preventSuccessEvent = !0),
              (e.preventFailEvent = !0),
              (e.preventErrorEvent = !0);
            var r = e.success;
            e.success = function (e, t) {
              r && r(e, t);
            };
            a = e.fail;
            e.fail = function (e, t, i, r) {
              a && a(e, t, i, r),
                t && !s && n.trigger("ev_model_load_error", t);
            };
            var o = e.error;
            return (
              (e.error = function (e, t) {
                o && o(e, t), i || n.trigger("ev_model_ajax_error", [e, t]);
              }),
              e
            );
          }),
          (e.prototype.load = function (e) {
            e = e || {};
            var t = this.beforeLoad(e);
            this.proxy.sync(
              c.extend({}, { operation: "read", dataObj: this }, t)
            );
          }),
          (e.prototype.getProxy = function () {
            return this.proxy;
          }),
          (e.prototype.submit = function (e) {
            if (!0 !== this.validate()) return null;
            (e = e || {}), this.sync(e);
          }),
          (e.prototype.beforeSync = function (i) {
            var n = this,
              a = i.autoReload === undefined ? n.autoReload : i.autoReload,
              r =
                i.preventSuccessEvent === undefined
                  ? n.preventSuccessEvent
                  : i.preventSuccessEvent,
              s =
                i.preventFailEvent === undefined
                  ? n.preventFailEvent
                  : i.preventFailEvent,
              o =
                i.preventErrorEvent === undefined
                  ? n.preventErrorEvent
                  : i.preventErrorEvent;
            (i.preventSuccessEvent = !0),
              (i.preventFailEvent = !0),
              (i.preventErrorEvent = !0);
            var l = i.success;
            i.success = function (e, t) {
              l && l(e, t),
                n.trigger("ev_model_submit", [e, t]),
                n.trigger("ev_model_submit_complete", ["success", e, t]),
                !1 !== a && n.load(),
                !0 !== r &&
                  "read" != i.operation &&
                  c.su.moduleManager
                    .query("main")
                    .showNotice(c.su.CHAR.COMMON.SAVED);
            };
            var u = i.fail;
            i.fail = function (e, t, i, r) {
              t && !0 !== s && n.trigger("ev_model_submit_error", t),
                n.trigger("ev_model_submit_complete", ["fail", t]),
                u && u(e, t, i, r),
                !1 !== a && n.load();
            };
            var d = i.error;
            i.error = function (e, t) {
              d && d(e, t),
                !0 !== o && n.trigger("ev_model_ajax_error", [e, t]),
                n.trigger("ev_model_submit_complete", ["error", e, t]),
                !1 !== a && n.load();
            };
            var h = c.su.getDefaultEvent(this, function () {});
            return (
              this.trigger("ev_model_before_submit", [h.ev]),
              c.each(this.data, function (e, t) {
                t.trigger("ev_model_before_submit", [h.ev, n]);
              }),
              h.exe() ? i : (i = null)
            );
          }),
          (e.prototype.sync = function (e) {
            if (
              ((e = c.extend({}, { preventValidate: !1 }, e)),
              (e = this.beforeSync(e)),
              "object" !== c.type(e))
            )
              return null;
            var t = Array.prototype.slice.call(arguments, 0);
            if (
              !e.preventValidate &&
              "read" !== e.operation &&
              !0 !== this.validate()
            )
              return null;
            var i = c.extend(!0, {}, e);
            (i.difference = this.checkDataChange(e)),
              (i.operation = i.operation || "write"),
              (i.dataObj = this),
              (t[0] = i),
              this.proxy && this.proxy.sync.apply(this.proxy, t);
          }),
          (e.prototype.abort = function () {
            this.proxy.abort.apply(this.proxy);
          }),
          (e.prototype.checkDataChange = function (e) {
            var t = {};
            return (
              (t[e.updateDataKey || "update"] = {
                model: this.modelSerialize(
                  this.getData("submit"),
                  this.getData()
                ),
                oldModel: null,
              }),
              t
            );
          }),
          (e.prototype.record = function () {
            for (var e = 0, t = this.fields.length; e < t; e++)
              this.data[e].record();
            return this;
          }),
          (e.prototype.reset = function () {
            for (var e = 0, t = this.fields.length; e < t; e++)
              this.data[e].reset();
            return this;
          }),
          (e.prototype.isDirty = function () {
            for (var e = 0, t = this.fields.length; e < t; e++)
              if (this.data[e].isDirty()) return !0;
            return !1;
          }),
          (e.prototype.getField = function (e) {
            return this[e];
          }),
          (e.prototype.getFieldNameByIndex = function (e) {
            return this.fields.length >= e ? this.data[e].name : null;
          }),
          (e.prototype.getSize = function (e) {
            return this.fields.length;
          }),
          e
        );
      })());
  })(jQuery),
  (function (a) {
    var e;
    a.su.DataField =
      ((e = function (t) {
        a.su.Observable.call(this);
        t = a.extend(
          {
            name: "",
            mapping: null,
            defaultValue: null,
            disabled: !1,
            readOnly: !1,
            autoTrim: !1,
            valueType: null,
            valid: !0,
            validated: !1,
            isDetect: !0,
            format: null,
            allowBlank: !0,
            blankText: a.su.CHAR.VTYPETEXT.NOT_ALLOW_TO_BE_EMPTY,
            vtype: null,
            vtypeText: null,
            validator: null,
            maxLength: -1,
            minLength: -1,
            encrypt: a.su.encrypt,
          },
          t
        );
        var i = this;
        (this.name = t.name),
          (this.mapping = t.mapping || this.name),
          (this.defaultValue = t.defaultValue),
          (this.convert = t.convert || null),
          (this.serialize = t.serialize || null),
          (this.valueType = t.valueType),
          (this.allowBlank = t.allowBlank),
          (this.blankText = t.blankText),
          (this.disabled = t.disabled),
          (this.valid = t.valid),
          (this._realValid = t.valid),
          (this.maxLength = t.maxLength),
          (this.minLength = t.minLength),
          (this.encrypt = t.encrypt);
        if (
          ((this.vtype = a.isArray(t.vtype) ? t.vtype : [t.vtype]), t.vtypeText)
        ) {
          var e = this.vtype[0];
          this.vtype[0] = { vtype: e, vtypeText: t.vtypeText };
        }
        if (t.validator) {
          if (!a.isFunction(t.validator))
            throw new Error(
              "Error in DataField: validator must be a function."
            );
          this.validator = t.validator;
        }
        if (
          ((this._value = this._formatType(t.defaultValue)),
          (this._valueBackup = this._formatType(t.defaultValue)),
          t.set &&
            (this.set = function () {
              var e = Array.prototype.slice.call(
                arguments,
                0,
                this.mapping.length
              );
              this.val(t.set.apply(this, e));
            }),
          t.get)
        ) {
          if (!a.isFunction(t.get))
            throw new Error(
              "Error in DataField: options.get must be a function, if options.get has been defined and mapping is a string."
            );
          this.get = function () {
            var e = {};
            return (e[i.mapping] = t.get.call(i, i._value)), e;
          };
        }
      }),
      a.su.inherit(a.su.Observable, e),
      (e.prototype.getName = function () {
        return this.name;
      }),
      (e.prototype.val = function (e) {
        return (
          e !== undefined &&
            e !== this._value &&
            (this._value = this._formatType(e)),
          this._value
        );
      }),
      (e.prototype._formatType = function (e) {
        if (null === e || e === undefined || "" === e) return e;
        if ("number" !== this.valueType)
          return "string" === this.valueType
            ? e.toString()
            : "boolean" === this.valueType
            ? "true" === e ||
              ("number" == typeof e && 0 < e) ||
              ("string" == typeof e && 0 < parseInt(e)) ||
              ("false" !== e && 0 !== e && "0" !== e && e)
            : e;
        var t = parseFloat(e, 10);
        return isNaN(t) || (t + "").length !== (e + "").length
          ? e
          : parseFloat(e, 10);
      }),
      (e.prototype.setValue = function (e) {
        var t = e;
        (a.isArray(e) || "object" === a.type(e)) &&
          (t = JSON.parse(JSON.stringify(e))),
          this._set("_value", { oldValue: this.getValue(), value: t });
      }),
      (e.prototype.getValue = function () {
        var e = this._value;
        return (
          (a.isArray(this._value) || "object" === a.type(e)) &&
            (e = JSON.parse(JSON.stringify(this._value))),
          e
        );
      }),
      (e.prototype.getValid = function () {
        return this.valid;
      }),
      (e.prototype.getBackup = function () {
        var e = this._valueBackup;
        return (
          (a.isArray(e) || "object" === a.type(e)) &&
            (e = JSON.parse(JSON.stringify(this._value))),
          e
        );
      }),
      (e.prototype.getData = function () {
        var e = {};
        return (e[this.mapping] = this._value), e;
      }),
      (e.prototype.record = function () {
        return (
          (this._valueBackup = this._value),
          this.trigger("ev_data_record", [{ value: this._value }, this]),
          this
        );
      }),
      (e.prototype.isDirty = function () {
        return this._value !== this._valueBackup;
      }),
      (e.prototype.isEnabled = function () {
        return !this.disabled;
      }),
      (e.prototype.reset = function () {
        this.setValue(
          null === this._valueBackup ? this.defaultValue : this._valueBackup
        );
      }),
      (e.prototype.doEncrypt = function (e) {
        var t = this.getValue();
        return a.isFunction(this.encrypt) ? this.encrypt(t, e) : t;
      }),
      (e.prototype.setAllowBlank = function (e) {
        this.allowBlank = Boolean(e);
      }),
      (e.prototype.lengthCheck = function () {
        var e = this._get("maxLength"),
          t = this._get("minLength"),
          i = String(this._value);
        return !((-1 != t && i.length < t) || (-1 != e && i.length > e));
      }),
      (e.prototype.setVtype = function (e) {
        this.vtype = e;
      }),
      (e.prototype.vtypeCheck = function () {
        var e = this.vtype,
          t = !0;
        if (!e) return !0;
        e = a.isArray(e) ? e : [e];
        var r = a.su.serviceManager.get("vtype");
        for (i = 0, len = e.length; i < len; i++)
          if (e[i] && !0 !== (t = r.validate(this._value, e[i]))) {
            e[i], (this.valid = !1);
            break;
          }
        return t;
      }),
      (e.prototype.validatorCheck = function () {
        return !this.validator || this.validator(this._value);
      }),
      (e.prototype.validate = function () {
        if ((this._value, this.disabled)) return this.setValid(!0), !0;
        if (
          "" === this._value ||
          null === this._value ||
          this._value === undefined ||
          ("date" === a.type(this._value) && !0 === this._value._isBlank)
        )
          return !0 !== this.allowBlank
            ? (this.setValid(!1, this.blankText), (this._realValid = !1))
            : (this.setValid(!0), (this._realValid = !0));
        if (!this.lengthCheck()) {
          var e,
            t = this._get("maxLength"),
            i = this._get("minLength");
          return (
            (e =
              -1 != i && -1 != t
                ? a.su.CHAR.VTYPETEXT.LEN_MIN_MAX.replace("%min", i).replace(
                    "%max",
                    t
                  )
                : -1 != i
                ? a.su.CHAR.VTYPETEXT.LEN_MIN.replace("%min", i)
                : a.su.CHAR.VTYPETEXT.LEN_MAX.replace("%max", t)),
            this.setValid(!1, e),
            (this._realValid = !1)
          );
        }
        var r = this.vtypeCheck();
        if (!0 !== r)
          return this.setValid(!1, this.vtypeText || r), (this._realValid = !1);
        var n = this.validatorCheck();
        return !0 !== n
          ? (this.setValid(!1, n), (this._realValid = !1))
          : (this.setValid(!0), (this._realValid = !0));
      }),
      (e.prototype.disable = function () {
        this._set("disabled", !0), this.setValid(!0);
      }),
      (e.prototype.enable = function () {
        this._set("disabled", !1), !0 !== this._realValid && this.setValid(!0);
      }),
      (e.prototype.setValid = function (e, t) {
        this._set("valid", e || t);
      }),
      (e.prototype._set = function (e, t) {
        "_value" === e && t.hasOwnProperty("value")
          ? ((t.value = this._formatType(t.value)), (this[e] = t.value))
          : (this[e] = t),
          this.trigger("ev_data_change", [{ type: e, value: t }, this]);
      }),
      (e.prototype._get = function (e) {
        if (this[e] !== undefined)
          return a.isFunction(this[e]) ? this[e].call(this) : this[e];
      }),
      e);
  })(jQuery),
  (function (v) {
    v.su.Connection = (function () {
      var t = {
          url: null,
          async: !0,
          timeout: 1e4,
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          successJudge: function () {
            return !0;
          },
        },
        p = [],
        s = [],
        i = [],
        r = function (e, t) {
          "function" != typeof t ||
            (t ? -1 < v.inArray(t, e) : e && e.length) ||
            e.push(t);
        },
        f = function (e, t, i) {
          for (var r = e.length, n = 0; n < r; n++) t = e[n].call(this, t, i);
          return t;
        },
        e = function (e) {
          v.su.Observable.call(this),
            (this.ajax = v.extend({}, t, e)),
            e && e.readFilter && (r(p, e.readFilter), delete e.readFilter),
            e && e.writeFilter && (r(s, e.writeFilter), delete e.writeFilter),
            e && e.failHandler && (r(i, e.failHandler), delete e.failHandler);
        };
      v.su.inherit(v.su.Observable, e);
      return (
        (e.prototype.upload = function (s) {
          var o = this;
          s.success = s.success || function () {};
          var e = s.url || this.ajax.url;
          if (!s.fileId) return !1;
          var t = v.su.randomId("iframe-"),
            l = v(
              '<iframe class="hidden" id="' + t + '" name="' + t + '"></iframe>'
            );
          v("body").append(l);
          var u,
            d = 0 == v("#" + s.fileId + "_form").length;
          if (
            (d
              ? ((u = v(
                  '<form class="hidden" id="' +
                    s.fileId +
                    '_form" method="POST" enctype="multipart/form-data"></form>'
                )
                  .attr("target", t)
                  .attr("action", e)),
                v("body").append(u))
              : (u = v("#" + s.fileId + "_form")
                  .attr("target", t)
                  .attr("action", e)),
            this.fieldset &&
              (this.fieldset.remove(), (this.fieldset = undefined)),
            s.data)
          ) {
            for (var i in ((this.fieldset = v("<fieldset></fieldset>")),
            s.data))
              s.data.hasOwnProperty(i) &&
                this.fieldset.append(
                  '<input name="' + i + '" value="' + s.data[i] + '" />'
                );
            u.append(this.fieldset);
          }
          u.submit();
          var h,
            c = !1;
          s.timeout &&
            (h = setTimeout(function () {
              (c = !0),
                l.remove(),
                d && u.remove(),
                o.fieldset && (o.fieldset.remove(), (o.fieldset = undefined)),
                s.error && s.error({ responseText: "Upload Timeout" });
            }, s.timeout)),
            l.on("load", function () {
              if (1 != c) {
                clearTimeout(h), (h = null);
                var e,
                  t = l.get(0),
                  i = {};
                try {
                  var r =
                    t.contentWindow.document ||
                    t.contentDocument ||
                    window.frames[t.id].document;
                  l.remove(),
                    d && u.remove(),
                    o.fieldset &&
                      (o.fieldset.remove(), (o.fieldset = undefined)),
                    r.body &&
                      ((contentNode = r.body.firstChild) &&
                      /pre/i.test(contentNode.tagName)
                        ? (i.responseText = contentNode.textContent)
                        : (contentNode = r.getElementsByTagName("textarea")[0])
                        ? (i.responseText = contentNode.value)
                        : (i.responseText =
                            r.body.textContent || r.body.innerText)),
                    (i.responseXML = r.XMLDocument || r),
                    (e = i.responseText),
                    v.su.serviceManager.get("device").getConfig().gdpr &&
                      v.su.encryptor &&
                      !1 !== s.gdpr &&
                      !v.su.development &&
                      (e = v.su.encryptor.dataDecrypt(e)),
                    (e = f.call(o, p, e));
                  var n =
                    0 == /([0-9]+)/g.test(e) ? EINVFMT : parseInt(RegExp["$1"]);
                  n == ENONE
                    ? s.success && s.success(i.responseXML)
                    : s.fail && s.fail(n, i.responseXML);
                } catch (a) {
                  l.remove(),
                    d && u.remove(),
                    o.fieldset &&
                      (o.fieldset.remove(), (o.fieldset = undefined)),
                    s.fail && s.fail(),
                    console.error(a);
                }
              }
            });
        }),
        (e.prototype.request = function (e, t, i, r) {
          var n = e.ajax || {},
            a = v.extend({}, this.ajax, n, e);
          return (
            (a.data = f.call(this, s, e.data || {}, a)),
            "application/json" !== a.contentType ||
              v.isEmptyObject(a.data) ||
              (a.data = JSON.stringify(a.data)),
            (this.ajaxRequest = v.ajax(a))
              .done(function (e, t, i) {})
              .fail(function (e, t) {})
          );
        }),
        (e.prototype.abort = function () {
          this.ajaxRequest &&
            (this.ajaxRequest.abort(), (this.ajaxRequest = null));
        }),
        (e.prototype.download = function (e) {
          var t = localStorage.getItem("_tid_"),
            i = localStorage.getItem("usrLvl");
          if (
            ((e =
              0 <= e.indexOf("?")
                ? e + "&_tid_=" + t + "&usrLvl=" + i
                : e + "?_tid_=" + t + "&usrLvl=" + i),
            "ie" === v.su.getBrowseVersion().browse)
          ) {
            var r = document.createElement("a");
            (r.href = e),
              document.body.appendChild(r),
              r.click(),
              document.body.removeChild(r);
          } else
            setTimeout(function () {
              window.location.href = e;
            }, 100);
        }),
        e
      );
    })();
  })(jQuery),
  (function (n) {
    n.su.define("Proxy", {
      extend: n.su.Observable,
      constructor: function (e) {
        n.su.Observable.call(this), this.initApi(e);
        var t = this.connection || n.su.settings.AjaxProxy.defaultConnection;
        (this.connection = "string" === n.type(t) ? n.su.createSync(t) : t),
          (this.isProxy = !0);
      },
      inheritableDepsGatherer: function (e) {
        var t = e.connection,
          i = n.Deferred();
        return (
          t && "string" === n.type(t)
            ? n.su.require(t).done(function () {
                i.resolve();
              })
            : i.resolve(),
          i.promise()
        );
      },
      connection: null,
      data: null,
      readFilter: null,
      writeFilter: null,
      successJudge: null,
      defaultOption: {},
      api: {},
      initApi: function (e) {
        (e = e || {}),
          (this.defaultOption = {
            readFilter: e.readFilter || this.readFilter,
            writeFilter: e.writeFilter || this.writeFilter,
            failFilter: e.failFilter || this.failFilter,
            successJudge: e.successJudge || this.successJudge,
          }),
          (this.defaultOption.ajax.url = this.url),
          (this.defaultOption.ajax.data = this.data);
        var t = this.defaultOption,
          i = (this.api = n.extend({}, this.api, e.api));
        for (var r in i)
          i.hasOwnProperty(r) &&
            ((i[r] = n.extend({}, t, i[r])),
            this[r] ||
              (this[r] = (function (t) {
                return function (e) {
                  this.op(t, e);
                };
              })(r)));
      },
      sync: function () {},
      request: function (e) {
        this._decorateOption(e), this.connection.request(e);
      },
      abort: function () {
        this.connection.abort();
      },
      op: function (e, t) {
        var i = this.api[e] ? this.api[e] : this.defaultOption,
          r = n.extend(!0, {}, i, t);
        this.request(r);
      },
      _decorateOption: function (s) {
        var o = this;
        s.writeFilter && (s.data = s.writeFilter.call(this, s.data));
        var l = !!s && s.success,
          u = !!s && s.fail;
        s.success = function (e, t, i) {
          var r = !s.successJudge || s.successJudge(e, t, i);
          if (!0 === r) {
            var n = s.readFilter ? s.readFilter.call(o, e) : e;
            l && l(n, e, t, i);
          } else {
            var a = s.failFilter ? s.failFilter.call(o, e) : e;
            u && u(a, r, t, i);
          }
        };
      },
      read: function () {},
      write: function () {},
      create: function () {},
      update: function () {},
      remove: function () {},
    });
  })(jQuery),
  (function (n) {
    n.su.define("AjaxProxy", {
      extend: "Proxy",
      url: null,
      method: "POST",
      ajax: null,
      initApi: function (e) {
        (e = e || {}),
          (this.defaultOption = {
            url: e.url || this.url,
            method: e.method || this.method,
            ajax: n.extend(!0, {}, this.ajax, e.ajax),
            readFilter: e.readFilter || this.readFilter,
            writeFilter: e.writeFilter || this.writeFilter,
            failFilter: e.failFilter || this.failFilter,
            successJudge: e.successJudge || this.successJudge,
          }),
          (this.defaultOption.ajax.url = this.url),
          (this.defaultOption.ajax.data = this.data);
        var t = this.defaultOption,
          i = (this.api = n.extend({}, this.api, e.api));
        for (var r in i)
          i.hasOwnProperty(r) &&
            ((i[r] = n.extend({}, t, i[r])),
            this[r] ||
              (this[r] = (function (t) {
                return function (e) {
                  this.op(t, e);
                };
              })(r)));
      },
      upload: function (e) {
        var t = this.api["upload"] ? this.api["upload"] : this.defaultOption,
          i = n.extend({}, t, e);
        this._decorateOption(i), this.connection.upload(i);
      },
      download: function (e) {
        this.connection.download(e);
      },
    });
  })(jQuery),
  (function (g) {
    (g.su.Store = function (e) {
      var r = this,
        t = g.extend(
          !0,
          {},
          {
            fields: null,
            model: null,
            xtype: "store",
            autoLoad: !1,
            autoReload: !0,
            tag: "store",
            global: !1,
            keyProperty: "key",
            updateMode: "operation",
            keyLength: 0,
            filters: [],
            conflictFields: null,
            data: [],
            convert: null,
            serialize: null,
            preventSuccessEvent: !1,
            preventFailEvent: !1,
            preventErrorEvent: !1,
            methods: {},
          },
          e
        );
      if ((g.su.Observable.call(this), t.fields)) {
        for (var i = !1, n = 0; n < t.fields.length; n++)
          if (t.fields[n].name == t.keyProperty) {
            i = !0;
            break;
          }
        i || t.fields.push({ name: t.keyProperty, mapping: t.keyProperty });
      }
      if (t.proxy) {
        var a,
          s = g.su.ClassManager.getInstance();
        if ("string" === g.type(t.proxy))
          (a = s.get(e.proxy)) ||
            g.su.debug.error("Model proxy class not found: " + t.proxy),
            (t.proxy = a.create ? a.create() : new a());
        else if (!t.proxy.isProxy) {
          var o = g.extend(!0, { triggerEvent: !0 }, t.proxy);
          (a = s.get(g.su.settings.Store.defaultProxy)),
            (t.proxy = a.create ? a.create(o) : new a(o));
        }
        t.proxy.addListener("ev_load", function (e, t, i) {
          r.loadData(t, !0, i);
        }),
          t.proxy.addListener("ev_sync_success", function () {
            r.record(), r.trigger("ev_sync_success");
          });
      }
      return t.fields && 0 !== t.fields.length && (!0 !== t.global || t.id)
        ? ((this.id = t.id || g.su.randomId("store")), void this.init(t))
        : null;
    }),
      g.su.inherit(g.su.Observable, g.su.Store),
      (g.su.Store.checkProxyDep = function (e) {
        return "string" == g.type(e);
      }),
      (g.su.Store.importProxyDep = function (e, t) {
        return g.su.require(e, t);
      }),
      (g.su.Store.prototype.init = function (e) {
        var t = this;
        for (var i in (g.extend(this, e),
        (this._name = e.name),
        (this.data = []),
        (this.snapshot = null),
        (this.isStore = !0),
        (this.isSorted = !1),
        e.data && 0 < e.data.length && this.loadData(e.data, !0),
        !0 === this.autoLoad && this.load(),
        this.methods))
          this.methods.hasOwnProperty(i) &&
            (this[i] = function () {
              t.method.apply(t, arguments);
            });
      }),
      (g.su.Store.prototype.getSize = function () {
        return this.data.length;
      }),
      (g.su.Store.prototype.getProxy = function () {
        return this.proxy;
      }),
      (g.su.Store.prototype.hasField = function (e) {
        for (var t = this.fields, i = 0; i < t.length; i++)
          if (t[i].name === e) return !0;
        return !1;
      }),
      (g.su.Store.prototype.storeConvert = function (e) {
        for (var t in (0 < this.data.length && this.removeAllData(),
        (this.data = []),
        (this.dataMap = {}),
        null !== this.convert && (e = this.convert(e)),
        (e && !g.isEmptyObject(e)) || (e = []),
        g.isArray(e) || (e = [e]),
        e))
          if (e.hasOwnProperty(t)) {
            var i = this.createModel();
            e[t][this.keyProperty] === undefined &&
              (e[t][this.keyProperty] = g.su.randomId("key"));
            e[t][this.keyProperty];
            e[t] = i.modelConvert(e[t]);
          }
        return e;
      }),
      (g.su.Store.prototype.storeSerialize = function (e) {
        for (var t in ((this.dataMap = this.dataMap || {}),
        e || (e = []),
        g.isArray(e) || (e = [e]),
        e))
          if (e.hasOwnProperty(t)) {
            var i = e[t][this.keyProperty],
              r = this.dataMap[i];
            r || (r = this.createModel()), (e[t] = r.modelSerialize(e[t]));
          }
        return null !== this.serialize && (e = this.serialize(e)), e;
      }),
      (g.su.Store.prototype.loadData = function (e, t, i, r) {
        if (
          (t
            ? (e = this.storeConvert(e))
            : ((this.data = []), (this.dataMap = {})),
          (i = i || {}),
          (this.filterBackupData = e),
          !(0 < this.filters.length))
        ) {
          for (var n = e.length, a = 0; a < n; a++) {
            var s,
              o = e[a][this.keyProperty];
            o !== undefined && this.dataMap[o]
              ? (s = this.dataMap[o]).loadData(e[a])
              : ((s = this.createModel()),
                o === undefined &&
                  (o = e[a][this.keyProperty] = g.su.randomId("key")),
                s.loadData(e[a]),
                this.insertModelNoEvent(s, a),
                (this.dataMap[o] = s));
          }
          return (
            this.record(),
            this.trigger("ev_loaded"),
            this.fireEvent("ev_store_data_load_success", [e, i]),
            r && r.call(this, e),
            this
          );
        }
        this.filter({ filters: [] });
      }),
      (g.su.Store.prototype.refreshData = function (e) {
        var o = function (e, t, i) {
          var r,
            n = !!t.hasOwnProperty(i);
          for (var a in e)
            if (e.hasOwnProperty(a) && (a !== i || n)) {
              for (var s in ((r = !1), t))
                t.hasOwnProperty(s) &&
                  (a === s && e[a] === t[s]
                    ? (r = !0)
                    : "array" === g.type(e[a]) && "array" === g.type(t[s])
                    ? (r = e[a].join(",") === t[s].join(","))
                    : "object" === g.type(e[a]) &&
                      "object" === g.type(t[s]) &&
                      (r = o(e[a], t[s])));
              if (!1 === r) break;
            }
          return r;
        };
        if (0 === this.data.length) this.loadData(e, !0);
        else {
          var t,
            i,
            r,
            n,
            a,
            s,
            l = (e = (function (e, t) {
              null !== e.convert && (t = e.convert(t)),
                t || (t = []),
                g.isArray(t) || (t = [t]);
              var i = e.createModel();
              for (var r in t)
                t.hasOwnProperty(r) &&
                  (t[r][e.keyProperty] ||
                    (t[r][e.keyProperty] = g.su.randomId("key")),
                  (t[r] = i.modelConvert(t[r])));
              return t;
            })(this, e)).length;
          for (t = 0; t < l; t++)
            if (
              (r = e[t]).hasOwnProperty(this.keyProperty) &&
              r[this.keyProperty] !== undefined &&
              null !== r[this.keyProperty]
            )
              (s = r[this.keyProperty]),
                (n = this.getModelByKey(s))
                  ? o(n.getData(), e[t], this.keyProperty) || n.loadData(e[t])
                  : ((a = this.createModel()).loadData(e[t]),
                    this.insertModel(a)),
                this.moveModelPosition(s, t);
            else {
              var u;
              if ((i = t) < this.data.length)
                for (i = t; i < this.data.length; i++)
                  if (
                    ((n = this.data[i]), o(n.getData(), e[t], this.keyProperty))
                  ) {
                    u = n.getField(this.keyProperty).getValue();
                    break;
                  }
              u
                ? this.moveModelPosition(u, t)
                : ((a = this.createModel()).loadData(e[t]),
                  this.insertModel(a),
                  this.moveModelPosition(
                    a.getField(this.keyProperty).getValue(),
                    t
                  ));
            }
          if (this.data.length > e.length) {
            var d = [];
            for (t = e.length; t < this.data.length; t++)
              d.push(this.data[t].getField(this.keyProperty).getValue());
            this.data.splice(e.length, this.data.length - e.length),
              this.trigger("ev_model_deleted", [d]);
          }
        }
      }),
      (g.su.Store.prototype.loadFilterData = function (e) {
        for (var t in (0 < this.filters.length &&
          (e = this.runFilter(g.su.clone(e))),
        (this.data = []),
        (this.dataMap = {}),
        e))
          if (e.hasOwnProperty(t)) {
            var i,
              r = e[t][this.keyProperty];
            r && this.dataMap[r]
              ? (i = this.dataMap[r]).loadData(e[t])
              : ((i = this.createModel()),
                r || (r = e[t][this.keyProperty] = g.su.randomId("key")),
                i.loadData(e[t]),
                this.insertModelNoEvent(i, t),
                (this.dataMap[r] = i));
          }
        return this.record(), this.trigger("ev_loaded"), this;
      }),
      (g.su.Store.prototype.filter = function (e, t) {
        var i = e.filters,
          r = e.append,
          n = e.columns;
        if (
          ((this.rendererMap = {}),
          (this.filterPrecise = !!t),
          i && 0 !== i.length)
        ) {
          if (
            ((i = g.isArray(i) ? i : [i]),
            r ? this.filters.concat(i) : (this.filters = i),
            n)
          )
            for (var a = 0, s = n.length; a < s; a++) {
              var o = n[a].dataIndex;
              this.rendererMap[o] = n[a].renderer;
            }
          this.loadFilterData(this.filterBackupData);
        } else
          0 < this.filters.length &&
            ((this.filters = []), this.loadData(this.filterBackupData));
      }),
      (g.su.Store.prototype.runFilter = function (o) {
        for (var l = this, e = 0, t = this.filters.length; e < t; e++) {
          var i = this.filters[e];
          if (i.func)
            for (var r = o.length - 1; 0 <= r; r--)
              i.func(o[r]) || o.splice(r, 1);
          else
            i.value !== undefined &&
              null !== i.value &&
              "" !== i.value &&
              i.column !== undefined &&
              n(i.column, i.value);
        }
        function n(e, t) {
          if (l.filterPrecise)
            for (var i = o.length - 1; 0 <= i; i--) {
              if ((a = o[i][e]) === undefined) {
                var r = !1;
                for (var n in o[i]) {
                  if (o[i].hasOwnProperty(n) && n !== l.keyProperty)
                    if ((s = o[i][n]) !== undefined && s === t) {
                      r = !0;
                      break;
                    }
                }
                !1 === r && o.splice(i, 1);
              } else a !== t && o.splice(i, 1);
            }
          else
            for (i = o.length - 1; 0 <= i; i--) {
              var a;
              if ((a = u(e, o[i][e], o[i])) === undefined) {
                r = !1;
                for (var n in o[i]) {
                  var s;
                  if (o[i].hasOwnProperty(n) && n !== l.keyProperty)
                    if (
                      (s = u(n, o[i][n], o[i])) !== undefined &&
                      -1 !== (s + "").search(new RegExp(t, "i"))
                    ) {
                      r = !0;
                      break;
                    }
                }
                !1 === r && o.splice(i, 1);
              } else
                "array" === g.type(t)
                  ? -1 === g.inArray(o[i][e], t) && o.splice(i, 1)
                  : -1 === a.toString().search(new RegExp(t, "i")) &&
                    -1 === o[i][e].toString().search(new RegExp(t, "i")) &&
                    o.splice(i, 1);
            }
        }
        function u(e, t, i) {
          return l.rendererMap[e] === undefined
            ? "" + t
            : l.rendererMap[e](t, i);
        }
        return o;
      }),
      (g.su.Store.prototype.record = function () {
        for (var e = 0, t = this.data.length; e < t; e++) this.data[e].record();
        return (this.snapshot = g.su.clone(this.getStoreData())), this;
      }),
      (g.su.Store.prototype.getDataByIndex = function (e) {
        return this.data[e].getData();
      }),
      (g.su.Store.prototype.getModelByIndex = function (e) {
        return this.data[e];
      }),
      (g.su.Store.prototype.getModelByKey = function (e) {
        return this.data[this.getIndex(e)];
      }),
      (g.su.Store.prototype.getIndex = function (e) {
        var t = this.data,
          i = this.keyProperty;
        if (e === undefined) return undefined;
        for (var r = 0, n = t.length; r < n; r++)
          if (t[r].getField(i).val().toString() == e.toString()) return r;
        return undefined;
      }),
      (g.su.Store.prototype.getKeyByIndex = function (e) {
        var t = this.data,
          i = this.keyProperty;
        return t[e].getField(i).val();
      }),
      (g.su.Store.prototype.getIndexs = function (e) {
        var t = this.data,
          i = this.keyProperty;
        if (0 === e.length) return undefined;
        for (var r = "", n = 0, a = e.length; n < a; n++)
          for (var s = 0, o = t.length; s < o; s++) {
            var l = e[n];
            if (t[s].getField(i).val().toString() == l.toString()) {
              r += s + ",";
              break;
            }
          }
        return "" !== r ? r.substring(0, r.length - 1) : r;
      }),
      (g.su.Store.prototype.beforeLoad = function (e) {
        var n = this,
          a =
            (e.preventSuccessEvent === undefined
              ? n.preventSuccessEvent
              : e.preventSuccessEvent,
            e.preventFailEvent === undefined
              ? n.preventFailEvent
              : e.preventFailEvent),
          i =
            e.preventErrorEvent === undefined
              ? n.preventErrorEvent
              : e.preventErrorEvent;
        (e.preventSuccessEvent = !0),
          (e.preventFailEvent = !0),
          (e.preventErrorEvent = !0);
        var s = e.fail;
        e.fail = function (e, t, i, r) {
          s && s(e, t, i, r), t && !a && n.trigger("ev_store_sync_error", t);
        };
        var r = e.error;
        return (
          (e.error = function (e, t) {
            r && r(e, t), i || n.trigger("ev_store_ajax_error", [e, t]);
          }),
          e
        );
      }),
      (g.su.Store.prototype.load = function (e) {
        (e = e || {}), (e = this.beforeLoad(e));
        var t = g.extend(!0, { operation: "read", dataObj: this }, e);
        this.proxy && this.proxy.sync(t);
      }),
      (g.su.Store.prototype.removeDataByKey = function (e, i) {
        var t,
          r,
          n = this.keyProperty;
        g.isArray(e) || (e = [e]);
        var a = {};
        for (t = 0, r = e.length; t < r; t++) a[e[t]] = !0;
        var s = this.data,
          o = [];
        for (t = 0, r = s.length; t < r; t++)
          s[t].getField(n).val() in a && o.push(t);
        this.removeDataByIndex(o, function (e, t) {
          i && i.call(this, e, t);
        });
      }),
      (g.su.Store.prototype.moveModelPosition = function (e, t) {
        var i = this.getIndex(e);
        if (i !== t) {
          var r = this.data.splice(i, 1);
          this.data.splice(t, 0, r[0]),
            this.trigger("ev_store_item_moved", [e, t, i]);
        }
      }),
      (g.su.Store.prototype.removeDataByIndex = function (e, t) {
        var i = this.keyProperty,
          r = this.data;
        g.isArray(e) || (e = [e]),
          e.sort(function (e, t) {
            return e - t;
          });
        for (var n = [], a = e.length - 1; 0 <= a; a--) {
          var s = e[a];
          isNaN(s) || (n.push(r[s][i].getValue()), r.splice(e[a], 1));
        }
        return (
          t && t.call(this, n, e),
          this.trigger("ev_model_deleted", [n, e]),
          this.trigger("ev_datachanged", [
            this,
            this.getStoreData,
            "removeData",
          ]),
          this
        );
      }),
      (g.su.Store.prototype.removeAllData = function (e) {
        return (
          (this.data = null),
          delete this.data,
          (this.data = []),
          this.trigger("ev_removeAllData", [this]),
          this.trigger("ev_datachanged", [this, this.data, "removeData"]),
          this
        );
      }),
      (g.su.Store.prototype.getStoreData = function () {
        return this.getData();
      }),
      (g.su.Store.prototype.getSelectedStoreData = function () {
        var e,
          t = [];
        for (e = 0; e < this.data.length; e++)
          this.data[e].selected && t.push(this.data[e]);
        var i = t.length,
          r = [];
        for (e = 0; e < i; e++) {
          var n = t[e].getData();
          r.push(n);
        }
        return r;
      }),
      (g.su.Store.prototype.getSelectedData = function () {
        var e,
          t = [];
        for (e = 0; e < this.data.length; e++)
          this.data[e].selected && t.push(this.data[e]);
        var i = t.length,
          r = [];
        for (e = 0; e < i; e++) {
          var n = t[e].getData();
          r.push(n);
        }
        return r;
      }),
      (g.su.Store.prototype.getSelectedDataKey = function (e) {
        var t,
          i = [];
        for (t = 0; t < this.data.length; t++)
          this.data[t].selected && i.push(this.data[t]);
        var r = i.length,
          n = [];
        for (t = 0; t < r; t++) {
          var a = i[t].getField(e || this.keyProperty).getValue();
          n.push(a);
        }
        return n;
      }),
      (g.su.Store.prototype.getData = function (e) {
        for (var t = this.data, i = t.length, r = [], n = 0; n < i; n++) {
          var a = t[n].getData(e);
          r.push(a);
        }
        return r;
      }),
      (g.su.Store.prototype.insertModel = function (e, t) {
        var n = this;
        return (
          (t = t || 0),
          this.data.splice(t, 0, e),
          this.trigger("ev_model_inserted", [t]),
          e.on("ev_data_change", function (e, t, i, r) {
            n.trigger("ev_data_change", [t, i, r, n]);
          }),
          this
        );
      }),
      (g.su.Store.prototype.insertModelNoEvent = function (e, t) {
        var n = this;
        return (
          (t = t || 0),
          this.data.splice(t, 0, e),
          e.on("ev_data_change", function (e, t, i, r) {
            n.trigger("ev_data_change", [t, i, r, n]);
          }),
          this
        );
      }),
      (g.su.Store.prototype.insertData = function (e, t) {
        t = t || 0;
        var i = this.keyProperty,
          r = this.createModel();
        e[i] === undefined && (e[i] = r.getField(i).getValue()),
          r.replaceData(e, !0),
          this.insertModel(r, t);
      }),
      (g.su.Store.prototype.generateModelKey = function () {
        return g.su.randomId(this.keyProperty);
      }),
      (g.su.Store.prototype.createModel = function () {
        var e = { fields: this.fields },
          t = new g.su.Model(e);
        return (
          t.getField(this.keyProperty).setValue(this.generateModelKey()), t
        );
      }),
      (g.su.Store.prototype.getModelKey = function (e) {
        var t = e.getField(this.keyProperty);
        return t ? t.getValue() : null;
      }),
      (g.su.Store.prototype.checkDataChange = function (e) {
        var t = e && e.sync,
          s = this,
          i = function (e) {
            var t = {},
              i = {};
            if (!e) return { data: t, map: i };
            for (var r = 0, n = e.length; r < n; r++) {
              var a = e[r][s.keyProperty];
              (t[a] = g.extend({}, e[r])), (i[a] = !1);
            }
            return { data: t, map: i };
          },
          r = function (e, t) {
            var i,
              r = g.su.getObjectLength(e),
              n = g.su.getObjectLength(t);
            for (var a in e)
              if (e.hasOwnProperty(a)) {
                for (var s in ((i = !1), t))
                  t.hasOwnProperty(s) &&
                    (a === s && e[a] === t[s]
                      ? (i = !0)
                      : a === s &&
                        (("array" === g.type(e[a]) &&
                          "array" === g.type(t[s])) ||
                          ("object" === g.type(e[a]) &&
                            "object" === g.type(t[s]))) &&
                        (i = JSON.stringify(e[a]) === JSON.stringify(t[s])));
                if (!1 === i) break;
              }
            return r === n && i;
          },
          n = this.getStoreData(),
          a = i(t ? this.storeSerialize(n) : n),
          o = i(t ? this.storeSerialize(this.snapshot) : this.snapshot),
          l = {},
          u = {},
          d = {},
          h = 0;
        for (var c in a.map)
          if (a.map.hasOwnProperty(c))
            for (var p in o.map)
              o.map.hasOwnProperty(p) &&
                c === p &&
                ((o.map[p] = !0), (a.map[c] = !0));
        for (var f in ((h = 0), a.map))
          a.map.hasOwnProperty(f) &&
            (a.map[f] && o.map[f] && !r(a.data[f], o.data[f])
              ? (u[f] = { index: h, model: a.data[f], oldModel: o.data[f] })
              : a.map[f] || (l[f] = { index: h, model: a.data[f] }),
            h++);
        for (var v in ((h = 0), o.map))
          o.map.hasOwnProperty(v) &&
            (o.map[v] || (d[v] = { index: h, oldModel: o.data[v] }), h++);
        return { insert: l, update: u, remove: d };
      }),
      (g.su.Store.prototype.beforeSync = function (t) {
        var n = this,
          a = t.autoReload === undefined ? n.autoReload : t.autoReload,
          i =
            t.preventSuccessEvent === undefined
              ? n.preventSuccessEvent
              : t.preventSuccessEvent,
          s =
            t.preventFailEvent === undefined
              ? n.preventFailEvent
              : t.preventFailEvent,
          r =
            t.preventErrorEvent === undefined
              ? n.preventErrorEvent
              : t.preventErrorEvent;
        (t.preventSuccessEvent = !0),
          (t.preventFailEvent = !0),
          (t.preventErrorEvent = !0);
        var o = t.success;
        t.success = function (e) {
          n.trigger("ev_store_sync_success", [e]),
            n.trigger("ev_store_sync_complete", ["success", e]),
            o && o(e),
            !1 !== a && n.load(),
            !0 !== i &&
              "read" != t.operation &&
              g.su.moduleManager
                .query("main")
                .showNotice(g.su.CHAR.COMMON.SAVED);
        };
        var l = t.fail;
        t.fail = function (e, t, i, r) {
          l && l(e, t, i, r),
            t && !s && n.trigger("ev_store_sync_error", [t, e]),
            n.trigger("ev_store_sync_complete", ["fail", t, e]),
            !1 !== a && n.load();
        };
        var u = t.error;
        t.error = function (e, t) {
          u && u(e, t),
            r || n.trigger("ev_store_ajax_error", [e, t]),
            n.trigger("ev_store_sync_complete", ["error", e, t]);
        };
        var e = g.su.getDefaultEvent(this, function () {});
        return (
          this.trigger("ev_store_before_sync", [e.ev]), e.exe() ? t : (t = null)
        );
      }),
      (g.su.Store.prototype.afterSync = function () {}),
      (g.su.Store.prototype.sync = function (e) {
        if (((e = e || {}), (e = this.beforeSync(e)), "object" !== g.type(e)))
          return null;
        var t = Array.prototype.slice.call(arguments, 0),
          i = g.extend(!0, {}, e);
        (i.difference = this.checkDataChange({ sync: !0 })),
          (i.operation = i.operation || "write"),
          (i.dataObj = this),
          (t[0] = i),
          this.proxy && this.proxy.sync.apply(this.proxy, t);
      }),
      (g.su.Store.prototype.abort = function () {
        this.proxy.abort.apply(this.proxy);
      }),
      (g.su.Store.prototype.isDirty = function () {
        var e = this.checkDataChange();
        return !(
          g.isEmptyObject(e.insert) &&
          g.isEmptyObject(e.update) &&
          g.isEmptyObject(e.remove)
        );
      }),
      (g.su.Store.prototype.reset = function () {
        for (var e = 0, t = this.data.length; e < t; e++) this.data[e].reset();
        return this;
      }),
      (g.su.Store.prototype.selectByKey = function (e) {
        for (
          var t, i = [], r = 0, n = (e = g.isArray(e) ? e : [e]).length;
          r < n;
          r++
        )
          (t = this.getModelByKey(e[r])) &&
            !t.selected &&
            (i.push(e[r]), (t.selected = !0));
        this.trigger("ev_store_select_change", [{ select: i }]);
      }),
      (g.su.Store.prototype.selectAll = function () {
        for (var e = [], t = 0, i = this.data.length; t < i; t++)
          this.data[t].selected ||
            (e.push(this.getKeyByIndex(t)), (this.data[t].selected = !0));
        return this.trigger("ev_store_select_change", [{ select: e }]), this;
      }),
      (g.su.Store.prototype.unselectAll = function () {
        for (var e = [], t = 0, i = this.data.length; t < i; t++)
          this.data[t].selected &&
            (e.push(this.getKeyByIndex(t)), (this.data[t].selected = !1));
        return this.trigger("ev_store_select_change", [{ unselect: e }]), this;
      }),
      (g.su.Store.prototype.unselectByKey = function (e) {
        for (
          var t, i = [], r = 0, n = (e = g.isArray(e) ? e : [e]).length;
          r < n;
          r++
        )
          (t = this.getModelByKey(e[r])) &&
            t.selected &&
            (i.push(e[r]), (t.selected = !1));
        this.trigger("ev_store_select_change", [{ unselect: i }]);
      }),
      (g.su.Store.prototype.syncSelectedData = function () {
        var s = this,
          e = function (e) {
            var t = {},
              i = {};
            if (!e) return { data: t, map: i };
            for (var r = 0, n = e.length; r < n; r++) {
              var a = e[r][s.keyProperty];
              (t[a] = g.extend({}, e[r])), (i[a] = !1);
            }
            return { data: t, map: i };
          },
          t = function (e, t) {
            var i,
              r = g.su.getObjectLength(e),
              n = g.su.getObjectLength(t);
            for (var a in e)
              if (e.hasOwnProperty(a)) {
                for (var s in ((i = !1), t))
                  t.hasOwnProperty(s) && a === s && e[a] === t[s] && (i = !0);
                if (!1 === i) break;
              }
            return r === n && i;
          },
          i = e(this.getSelectedData()),
          r = e(this.snapshot),
          n = {};
        for (var a in i.map)
          if (i.map.hasOwnProperty(a))
            for (var o in r.map)
              r.map.hasOwnProperty(o) &&
                a === o &&
                ((r.map[o] = !0), (i.map[a] = !0));
        for (var l in i.map)
          i.map.hasOwnProperty(l) &&
            i.map[l] &&
            r.map[l] &&
            !t(i.data[l], r.data[l]) &&
            (n[l] = { model: i.data[l], oldModel: r.data[l] });
        this.update(n);
      }),
      (g.su.Store.prototype.getAllKeys = function () {
        for (
          var e = this.keyProperty, t = this.data, i = t.length, r = [], n = 0;
          n < i;
          n++
        )
          r.push(t[n].getField(e).getValue());
        return r;
      }),
      (g.su.Store.prototype.setConvert = function (e) {
        this.convert = e;
      }),
      (g.su.Store.prototype.keyConflict = function (e) {
        var t;
        return (
          (t =
            e instanceof g.su.Model
              ? e[this.keyProperty].getValue()
              : e[this.keyProperty]),
          { conflict: this.getIndex(t) !== undefined, keyNew: t }
        );
      }),
      (g.su.Store.prototype.dataConflict = function (e, t) {
        if (!this.conflictFields || 0 == this.conflictFields.length) return !1;
        var i;
        i = e instanceof g.su.Model ? e.getData() : i;
        for (
          var r = this.getData(),
            n = this.conflictFields,
            a = this.keyProperty,
            s = 0;
          s < r.length;
          s++
        )
          for (var o = r[s], l = 0; l < n.length; l++) {
            var u = n[l].name;
            if (o[u] == i[u]) {
              if (t && o[a] == t) continue;
              return u;
            }
          }
        return !1;
      });
  })(jQuery),
  (function (d) {
    var u, o;
    (d.su = d.su || {}),
      (d.su.widgets = {}),
      (d.su.Widget =
        ((u = {
          labelField: { attribute: "label-field", defaultValue: "" },
          cls: {
            attribute: "cls",
            defaultValue: " container widget-container ",
          },
          separator: { attribute: "separator", defaultValue: ":" },
          labelCls: { attribute: "label-cls", defaultValue: "" },
          inputCls: { attribute: "input-cls", defaultValue: "" },
          tips: { attribute: "tips", defaultValue: "" },
          shortTips: { attribute: "short-tips", defaultValue: "" },
          tipsCls: { attribute: "tips-cls", defaultValue: "" },
          errorTipsCls: { attribute: "error-tips-cls", defaultValue: "" },
          underLabelField: { attribute: "under-label-field", defaultValue: "" },
        }),
        ((o = function (e) {
          if ("object" === d.type(e.id))
            d(e.id).attr("id")
              ? (this.domId = d(e.id).attr("id"))
              : ((this.domId = d.su.randomId("widget-")),
                d(e.id).attr("id", this.domId)),
              (e.id = this.domId);
          else {
            if ("string" !== d.type(e.id))
              return void console.error("Widget id doesn't exists. ");
            this.domId = e.id;
          }
          this._init(e), this.init(e);
          var i,
            r,
            t = this.render;
          return (
            (this.render =
              ((i = t),
              (r = this),
              function () {
                var e = this,
                  t = i.call(this);
                return (t && t.then ? t : d.Deferred().resolve()).then(
                  function () {
                    r._bindListeners(),
                      r._initTip(),
                      r._initScrollbar(),
                      e._view && e._view.onChildWidgetRendered(e),
                      (e.rendered = !0);
                  }
                );
              })),
            this
          );
        }).prototype = {
          _init: function (e) {
            var s,
              o = this.dom(),
              l = this;
            (s = e.settings = e.settings || {}),
              (this.settings = (function () {
                var e = d.extend({}, u, l.settings);
                for (var t in e)
                  if (e.hasOwnProperty(t)) {
                    var i = e[t];
                    if (
                      s.hasOwnProperty(i.attribute) ||
                      (o[0] && o[0].hasAttribute(i.attribute))
                    ) {
                      "object" === d.type(s[i.attribute]) &&
                        "object" === d.type(i.defaultValue) &&
                        (s[i.attribute] = d.extend(
                          !0,
                          {},
                          i.defaultValue,
                          s[i.attribute]
                        ));
                      var r,
                        n = s[i.attribute] || o.attr(i.attribute);
                      (r = d.isFunction(i.setter) ? i.setter.call(o, n) : n),
                        (s[t] = r);
                    } else {
                      var a = i.defaultValue;
                      i.getter
                        ? (s[t] = i.getter.call(o))
                        : (s[t] = "object" === d.type(a) ? d.su.clone(a) : a);
                    }
                  }
                return s;
              })()),
              e.customSettings && d.extend(this.settings, e.customSettings),
              (this._view = e.view),
              this._view && this._view.addChildWidget(this),
              (this._status = { shown: !0, disabled: !1 }),
              this.dom().data("viewObj", this);
          },
          _initTip: function (e) {
            var t = (e = this).settings,
              i = e.getContainer();
            if (t.tipText && i) {
              var r = i.children("div[widget=toolTip]");
              r.get(0) &&
                (d(r[0]).attr("id", e.domId + "_tooltip"),
                new d.su.widgets.toolTip({
                  id: d(r[0]),
                  tipText: t.tipText,
                }).render());
            }
            if (i) {
              var n = i
                .children(".widget-wrap-outer")
                .children("div[widget=errortip]");
              n.get(0) &&
                (d(n[0]).attr("id", e.domId + "_errortip"),
                (e.errortip = new d.su.widgets.errortip({
                  id: d(n[0]),
                  type: e._type,
                })),
                e.errortip.render(),
                e.errortip.hide());
            }
            e.setTips(t.tips);
          },
          _initScrollbar: function () {
            var i = this;
            i.dom()
              .find(".su-scroll")
              .add(i.dom().filter(".su-scroll"))
              .each(function (e, t) {
                d(this).closest("[widget]")[0] == i.dom()[0] &&
                  d.su.scrollbar({ ele: t, opts: i.scrollOption || {} });
              });
          },
          _bindListeners: function () {
            if (this.listeners && d.isArray(this.listeners)) {
              var e,
                t,
                n = this,
                a = this.listeners;
              if (n._eventMap && 0 < n._eventMap.length)
                for (e = 0, t = n._eventMap.length; e < t; e++) {
                  var i = n._eventMap[e];
                  i.target
                    ? i.parent.off(i.event, i.target, i.func)
                    : i.parent.off(i.event, i.func);
                }
              for (n._eventMap = [], e = 0, t = a.length; e < t; e++)
                !(function (t) {
                  var e = function () {
                    var e = Array.prototype.slice.apply(arguments);
                    e.push(n), a[t].callback.apply(this, e);
                  };
                  if (!a[t].condition || !1 !== a[t].condition(n)) {
                    var i = a[t].selector;
                    if ("function" === d.type(i)) {
                      var r = i.call(n);
                      r.target
                        ? d(r.parent).on(a[t].event, r.target, e)
                        : d(r.parent).on(a[t].event, e),
                        n._eventMap.push({
                          parent: d(r.parent),
                          target: r.target || "",
                          event: a[t].event,
                          handler: e,
                        });
                    } else
                      "" !== i
                        ? n.dom().on(a[t].event, i, e)
                        : n.dom().on(a[t].event, e),
                        n._eventMap.push({
                          parent: n.dom(),
                          target: i || "",
                          event: a[t].event,
                          handler: e,
                        });
                  }
                })(e);
            }
          },
          init: function () {},
          dom: function () {
            return d("#" + this.domId);
          },
          render: function () {
            this.dom().addClass(this.settings.cls);
          },
          getContainer: function () {
            var e = this.dom();
            if (e.hasClass("widget-container")) return e;
            var t = e.children(".widget-container");
            return t.get(0) ? d(t.get(0)) : null;
          },
          setLabelField: function (e) {
            this.dom().find("label.widget-fieldlabel").html(e);
          },
          show: function (e, t) {
            e && !d.su.isIe ? this.dom().fadeIn(200) : this.dom().show(),
              this.dom().triggerHandler("ev_widget_show");
          },
          hide: function (e, t) {
            e && !d.su.isIe ? this.dom().fadeOut(200) : this.dom().hide(),
              this.dom().triggerHandler("ev_widget_hide");
          },
          fadeOut: function (e) {
            var t = this,
              i = e / 1e3 + "s";
            this.dom().css({ opacity: 0, transtion: "opacity " + i }),
              setTimeout(function () {
                t.dom()
                  .hide()
                  .css({ display: "none", opacity: 1, transtion: "no " });
              }, e);
          },
          toggle: function () {
            this.dom().is(":visible") ? this.hide() : this.show();
          },
          enable: function () {
            this.dom().removeClass("disabled");
          },
          disable: function () {
            this.dom().addClass("disabled");
          },
          isDisabled: function () {
            var e = this.dom(),
              t = this.getContainer();
            return (t && t.hasClass("disabled")) || !0 === e.prop("disabled");
          },
          setError: function (e) {
            var t = this.dom(),
              i = this.getContainer(),
              r = t.find("div[widget=errortip]");
            if (i && !this.isDisabled()) {
              if (this.errortip) e && this.errortip.show(e);
              else if (0 < r.length && i) {
                var n = i
                  .children(".widget-wrap-outer")
                  .children("div[widget=errortip]");
                n.get(0) &&
                  (d(n[0]).attr("id", this.domId + "_errortip"),
                  (this.errortip = d(n[0]).errortip({ type: this.type })[0]),
                  this.errortip.render(),
                  e && this.errortip.show(e));
              }
              i.removeClass("valid").addClass("error"),
                i
                  .find("span.widget-validate-icon")
                  .css({ display: "inline-block" });
            }
          },
          setErrorHtml: function (e) {
            var t = this.dom(),
              i = this.getContainer(),
              r = t.find("div[widget=errortip]");
            if (i && !this.isDisabled() && e) {
              if (this.errortip) this.errortip.showHtml(e);
              else if (0 < r.length && i) {
                var n = i
                  .children(".widget-wrap-outer")
                  .children("div[widget=errortip]");
                n.get(0) &&
                  (d(n[0]).attr("id", this.domId + "_errortip"),
                  (this.errortip = d(n[0]).errortip({ type: this.type })[0]),
                  this.errortip.render(),
                  this.errortip.showHtml(e));
              }
              i.removeClass("valid").addClass("error"),
                i
                  .find("span.widget-validate-icon")
                  .css({ display: "inline-block" });
            }
          },
          setNormal: function () {
            var e = this.dom(),
              t = (this.settings, this.getContainer() || e);
            e.find("div[widget=errortip]"),
              t &&
                (t.removeClass("focus error disable dirty correct"),
                t.find("span.widget-validate-icon").css({ display: "none" }),
                this.errortip && this.errortip.hide());
          },
          addClass: function (e) {
            var t = this.dom();
            return t && 0 < t.length && t.addClass(e), this;
          },
          removeClass: function (e) {
            var t = this.dom();
            return t && 0 < t.length && t.removeClass(e), this;
          },
          setFocus: function () {
            var e = this.getContainer();
            this.setNormal(), e.addClass("focus");
          },
          removeFocus: function () {
            this.getContainer().removeClass("focus");
          },
          setTips: function (e) {
            var t = this.dom(),
              i = this.settings,
              r = (this.getContainer() || t).find("div.widget-tips");
            (i.tips = e),
              "string" === d.type(e) && r.find("div.tips-content").html(e),
              e
                ? (r.show(), r.fadeIn(150))
                : (r.hide(), r.css("display", "none"));
          },
          setShortTips: function (e) {
            var t = this.dom(),
              i = this.settings,
              r = (this.getContainer() || t).find("div.widget-short-tips");
            (i.shortTips = e),
              "string" === d.type(e) &&
                r.find("div.short-tips-content").html(e),
              e
                ? (r.css("display", "inline-block"), r.fadeIn(150))
                : (r.hide(), r.css("display", "none"));
          },
          setToolTip: function (e) {
            var t = this.dom(),
              i = this.settings,
              r = (this.getContainer() || t).find("div.tooltip-container");
            (i.tipText = e),
              "string" === d.type(e) && r.find("p.tip-text").html(e),
              e ? r.show() : r.hide();
          },
          setPosition: function (e, t, i, r) {
            var n = this.getContainer();
            if (n) {
              var a =
                  "center" === e
                    ? parseInt((d(window).width() - n.outerWidth()) / 2, 10)
                    : e || 0,
                s =
                  "center" === t
                    ? parseInt((d(window).height() - n.outerHeight()) / 2, 10)
                    : t || 0;
              return (
                (a = a < 0 ? 0 : a),
                (s = s < 0 ? 0 : s),
                n.css({ left: a, top: s, right: i, bottom: r }),
                { x: a, y: s }
              );
            }
          },
          getMask: function () {
            var e = d("#global-mask");
            return 0 < e.length
              ? e.data("viewObj")
              : (d('<div id="global-mask"></div>').appendTo(d("body")),
                new d.su.widgets.mask({ id: "global-mask" }));
          },
          _destroy: function () {
            if (
              (this._view && this._view.removeChildWidget(this),
              this.destroy && this.destroy(),
              this._eventMap)
            ) {
              for (var e = 0, t = this._eventMap.length; e < t; e++) {
                var i = this._eventMap[e];
                i.target
                  ? d(i.parent).off(i.event, i.target, i.handler)
                  : d(i.parent).off(i.event, i.handler);
              }
              this._eventMap = [];
            }
            this.dom().data("viewObj", null),
              this.dom().remove(),
              (this.settings = null);
          },
          getStatus: function (e) {
            return e ? this._status[e] : this._status;
          },
          setStatus: function (e, t) {
            (this._status[e] = t),
              this.dom().triggerHandler("ev_status_change", [this._status]);
          },
          setVisible: function (e) {
            e
              ? this.dom().css("visibility", "visible")
              : this.dom().css("visibility", "hidden");
          },
          confirm: function () {
            d.su.moduleManager.get("main") &&
            "function" == typeof d.su.moduleManager.get("main").confirm
              ? ((this.confirm = d.su.moduleManager.get("main").confirm),
                this.confirm.apply(
                  d.su.moduleManager.get("main"),
                  [].slice.call(arguments, 0)
                ))
              : ((arguments[1] || function () {})(),
                d.su.debug.console.error("confirm is not available now"));
          },
        }),
        (o.regMap = {
          base: d.extend({ settings: u, listeners: [] }, o.prototype),
        }),
        (o.register = function (t, r) {
          var n, i;
          for (var e in ((o.regMap[t] = r),
          (i = r.extend ? d.su.widgets[r.extend] : d.su.Widget),
          (o.regMap[t].settings = (function a() {
            var e,
              t = r.extend ? o.regMap[r.extend].settings : u;
            for (var i in (e = d.isFunction(r.settings)
              ? r.settings.call(n, d.extend({}, t))
              : d.extend({}, t, r.settings)))
              e.hasOwnProperty(i) &&
                !e[i].setter &&
                (e[i].setter =
                  (e[i].attribute,
                  function (e) {
                    d(this);
                    var t = d.su.getAttrObject;
                    if (null !== e && e !== undefined) {
                      if ("string" === d.type(e) && e.match(/{(.+)}/g)) {
                        var i = t(d.su.CHAR, e);
                        return null !== i && i !== undefined
                          ? i
                          : "Not Defined";
                      }
                      return e;
                    }
                  }));
            return e;
          })()),
          (o.regMap[t].listeners = (function s() {
            var e = r.extend ? o.regMap[r.extend].listeners : [];
            return (
              (r.listeners = r.listeners || []),
              d.isFunction(r.listeners)
                ? r.listeners.call(n, e)
                : e.concat(r.listeners)
            );
          })()),
          (n = d.su.widgets[t] =
            function (e) {
              return (
                this._type ||
                  ((this._type = t),
                  (this.settings = o.regMap[t].settings),
                  (this.listeners = o.regMap[t].listeners)),
                i.call(this, e),
                this
              );
            }),
          d.su.inherit(i, n),
          r))
            r.hasOwnProperty(e) &&
              d.isFunction(r[e]) &&
              (n.prototype[e] = r[e]);
          return n;
        }),
        o)),
      d("html")
        .delegate("input", "focus", function (e) {
          e.stopPropagation(), e.preventDefault();
        })
        .on("click", function (e) {
          e.stopPropagation(),
            d("div.region-select-wrap, div.region-search-wrap").hide(),
            d("div.timepicker-msg-container").removeAttr("dragFlag");
        })
        .on("mouseup", function (e) {
          d("div.button-container").removeClass("clicked"),
            d("div.btn-help-container a.btn-help").removeClass("clicked"),
            d("div.timepicker-msg-container-wrap").trigger("mouseup");
        })
        .on("keyup mousedown", function (e) {}),
      d(document).ready(function (e) {
        d('<div id="global-mask"></div>').appendTo(d("body")),
          new d.su.widgets.mask({ id: "global-mask" }).render(),
          d(
            '<div id="global-combobox-options" data-shown="_hidden_"></div>'
          ).appendTo(d("body")),
          d(
            '<div id="global-tips-text" class="global-tips-text" data-shown="_hidden_"></div>'
          ).appendTo(d("body"));
        var t,
          i = document.body.clientWidth;
        (t =
          i < 768 || d.su.isMobile()
            ? "s"
            : i < 1024
            ? "m"
            : i < 1280
            ? "l"
            : "xl"),
          (d.su.widgetSize = t);
      }),
      d(window).on(
        "resize",
        d.su.throttle(
          function (e) {
            var t,
              i = d("div.msg-container"),
              r = document.body.clientWidth,
              n = d("#global-combobox-options"),
              a = d("#global-tips-text"),
              s = n.attr("data-shown"),
              o = a.attr("data-shown"),
              l = d.su.widgetSize;
            (t =
              r < 768 || d.su.isMobile()
                ? "s"
                : r < 1024
                ? "m"
                : r < 1280
                ? "l"
                : "xl"),
              (d.su.widgetSize = t),
              d(window).trigger("ev_resize", [t, r, l]),
              i.each(function (e, t) {
                var i = d(t).data("viewObj");
                i.settings.shown && i.setPosition("center", "center");
              }),
              "_hidden_" !== s &&
                d("#" + s)
                  .data("viewObj")
                  .calculatePosition(),
              "_hidden_" !== o &&
                d("#" + o)
                  .data("viewObj")
                  .adjustLayout(d.su.widgetSize);
            var u = d(".page-content").data("ps");
            u && u.update();
          },
          100,
          100
        )
      ),
      d(document).on(
        "DOMSubtreeModified",
        d.su.debounce(function () {
          d(".ps").each(function (e) {
            var t = d(this).data("ps");
            t && t.update();
          });
        }, 100)
      );
  })(jQuery),
  (function () {
    function i(e, t) {
      var i;
      0 < $(e.ele).length &&
        ($(e.ele).data("ps")
          ? $(e.ele).data("ps").update()
          : ((e.opts = $.extend(e.opts, { wheelPropagation: !0 })),
            (i = new scrollbar(e.ele, e.opts)),
            $(e.ele).data("ps", i),
            t && t(i)));
    }
    ($.su.scrollbar = function (e, t) {
      $.su.isMobile() ||
        /iPad/i.test(navigator.userAgent) ||
        ("Microsoft Internet Explorer" === navigator.appName &&
          ((navigator.userAgent.match(/Trident/i) &&
            navigator.userAgent.match(/MSIE 8.0/i)) ||
            navigator.userAgent.match(/MSIE 9.0/i))) ||
        ($.su.scrollbar.loaded
          ? i(e, t)
          : $.su.loader.loadFile(
              "js/libs/perfect-scrollbar.min.js",
              function () {
                i(e, t), ($.su.scrollbar.loaded = !0);
              }
            ));
    }),
      ($.su.scrollbar.loaded = !1);
  })();

