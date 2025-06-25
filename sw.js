self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('stack-builder-v1').then(cache => {
      return cache.addAll(['.', 'index.html', 'manifest.json', 'icons/icon2048-192x192.png']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
