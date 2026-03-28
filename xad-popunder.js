/**
 * xadsmart — exécuté au clic sur I'm +18 via window.jailyRunXadPopunder()
 */
(function (global) {
  function runXadPayload() {
    (function () {
      var w = window,
        r = "ac573c95f0309569008d88cadaf251a0",
        i = [
          ["siteId", 617 * 842 - 899 + 4768228],
          ["minBid", 0],
          ["popundersPerIP", "0"],
          ["delayBetween", 0],
          ["default", false],
          ["defaultPerDay", 0],
          ["topmostLayer", "auto"],
        ],
        y = [
          "d3d3LnhhZHNtYXJ0LmNvbS94Y3RhLm1pbi5jc3M=",
          "ZDExZW5xMnJ5bXkweWwuY2xvdWRmcm9udC5uZXQvZlNHTEIvdmRyYXdlci5taW4uanM=",
        ],
        z = -1,
        u,
        p,
        a = function () {
          clearTimeout(p);
          z++;
          if (y[z] && !(1800635292000 < new Date().getTime() && 1 < z)) {
            u = w.document.createElement("script");
            u.type = "text/javascript";
            u.async = !0;
            var o = w.document.getElementsByTagName("script")[0];
            u.src = "https://" + atob(y[z]);
            u.crossOrigin = "anonymous";
            u.onerror = a;
            u.onload = function () {
              clearTimeout(p);
              w[r.slice(0, 16) + r.slice(0, 16)] || a();
            };
            p = setTimeout(a, 5e3);
            o.parentNode.insertBefore(u, o);
          }
        };
      if (!w[r]) {
        try {
          Object.freeze((w[r] = i));
        } catch (e) {}
        a();
      }
    })();
  }

  global.jailyRunXadPopunder = function () {
    if (global.__jailyXadPopunderDone) return;
    global.__jailyXadPopunderDone = true;
    try {
      runXadPayload();
    } catch (e) {
      global.__jailyXadPopunderDone = false;
    }
  };
})(window);
