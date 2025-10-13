self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("aeronautica-cache").then(cache => {
      return cache.addAll([
        "/index.html",
        "/css/base.css",
        "/js/nav.js",
        "/assets/img/eurofighter.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
