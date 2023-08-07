!(function (i) {
  var e;
  (i.su = i.su || {}),
    (i.su.Language =
      (((e = function (e) {
        (this.settings = i.extend(
          {},
          {
            locale: "en_US",
            DEFAULT_LAN_TYPE: "en_US",
            URL_JS: "./locale/%LAN_TYPE%/lan.js",
            URL_CSS: "./locale/%LAN_TYPE%/lan.css?t=faca32f1",
            URL_HELP: "./locale/%LAN_TYPE%/help.js",
            AJAX: {
              type: "POST",
              async: !1,
              contentType: "text/plain;charset=UTF-8",
              dataType: "text",
              timeout: 15e3,
              url: i.su.url("?code=2&asyn=0"),
              data: "50|1,0,0",
            },
          },
          e
        )),
          this.init();
      }).prototype.getList = function () {
        return this.languageList || [];
      }),
      (e.prototype.init = function () {
        this.changeType(this.getLocale());
      }),
      (e.prototype.getLocale = function () {
        var c = this,
          o = this.settings;
        return (
          this.locale ||
            i.ajax(
              i.extend(o.AJAX, {
                success: function (e) {
                  try {
                    var t = e.match(/\bcurrentLanguage\s(\w*)\b/)[1],
                      a = e.match(/\blanguageList\s(.*)\b/)[1];
                  } catch (i) {
                    throw "data error in language.getLocale";
                  }
                  (a = a.split(",")), (c.languageList = []);
                  for (var n = 0; n < a.length; n++) {
                    var s = a[n];
                    s && 0 < s.length && c.languageList.push(s);
                  }
                  c.locale = t || o.locale;
                },
              })
            ),
          this.locale
        );
      }),
      (e.prototype.defineGlobal = function () {}),
      (e.prototype.getDeviceLanguage = function () {}),
      (e.prototype.getClientLanguage = function () {}),
      (e.prototype.reset = function () {
        this.changeType({
          locale: this.settings.DEFAULT_LAN_TYPE,
          force: !1,
          model: "",
          region: "",
          rebootTime: 0,
        });
      }),
      (e.prototype.changeType = function (e) {
        var t = this.settings,
          a = e || t.DEFAULT_LAN_TYPE,
          n = t.URL_JS.replace("%LAN_TYPE%", a),
          s = t.URL_CSS.replace("%LAN_TYPE%", a);
        i("script#lan-js").remove(),
          i("link#lan-css").remove(),
          i("head")
            .append(
              '<script id="lan-js" type="text/javascript" src="' +
                n +
                ' "></script>'
            )
            .append(
              '<link id="lan-css" type="text/css" rel="stylesheet" href="' +
                s +
                ' "/>'
            )
            .append(
              '<script type="text/javascript" src="./locale/language.js" ></script>'
            );
      }),
      e));
})(jQuery);

