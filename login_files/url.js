!(function (o) {
  (o.su = o.su || {}),
    (o.su.url = function (r) {
      var e = !1 === arguments[1] || !1 === arguments[2];
      function s() {}
      return (
        (s.prototype.toString = function () {
          var s = "",
            u = r.indexOf("?"),
            n = new RegExp(o.su.url.sessionKey + "=.*(&)?");
          if (r.match(n) || e) return r;
          if (!o.su.url.session || 0 == o.su.url.session.length) return r;
          return 0 <= u
            ? ("&" != r.substring(r.length - 1) && (s = "&"),
              r +
                (s + o.su.url.sessionKey + "=") +
                o.su.encodePara(o.su.url.session))
            : r +
                "?" +
                o.su.url.sessionKey +
                "=" +
                o.su.encodePara(o.su.url.session);
        }),
        new s()
      );
    }),
    (o.su.ozkerurl = function (s) {
      return (s = o.su.url.ozkersubs + o.su.url.stok + s);
    }),
    (o.su.url.session = ""),
    (o.su.url.sessionKey = "id");
})(jQuery);

