const CACHE = "calculadora-v1";

self.addEventListener("install",
  function (evento) {
    evento.waitUntil(
      caches.open(CACHE).then(
        function (cache) {
          return cache.addAll([
            "./index.html",
            "./style.css",
            "./script.js"
          ]);
  }); }); });

self.addEventListener("fetch",
  function (evento) {
    evento.respondWith(
      caches.match(evento.request)
        .then(function (resp) {
          return resp || fetch(evento.request);
  }); });
});