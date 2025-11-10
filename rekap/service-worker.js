const CACHE_NAME = 'rekap-data-v1';
const urlsToCache = [
  '/aplikasi-rekap-data/',
  '/aplikasi-rekap-data/index.html',
  '/aplikasi-rekap-data/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
