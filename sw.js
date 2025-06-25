const CACHE_NAME = 'stack-builder-v1';
const ASSETS_TO_CACHE = [
  '.',
  'index.html',
  'manifest.json',
  // tambahkan file ikon yang diperlukan
  'icons/icon2048-72x72.png',
  'icons/icon2048-96x96.png',
  'icons/icon2048-128x128.png',
  'icons/icon2048-144x144.png',
  'icons/icon2048-152x152.png',
  'icons/icon2048-192x192.png',
  'icons/icon2048-384x384.png',
  'icons/icon2048-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
