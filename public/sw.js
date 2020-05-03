// // ServiceWorker

// const VERSION = 'v1'

// self.addEventListener('install', event => {
//   event.waitUntil(precache());
// });

// self.addEventListener('fetch', event => {
//   const request = event.request;
//   // get: solo peticiones de tipo get
//   if (request.method != 'GET') {
//     return;
//   }

//   // buscar en cache
//   event.respondWith(cacheResponse(request));

//   // actualizar cache
//   event.respondWith(updateCache(request));
// });

// async function precache() {
//   const cache = await caches.open(VERSION);
//   return cache.addAll([
//     '/',
//     'index.html',
//     'assets/js/index.js',
//     'assets/js/mediaPlayer.js',
//     'assets/plugins/AutoPlay.js',
//     'assets/plugins/AutoPause.js',
//     'assets/video/BigBuckBunny.mp4',
//     'css/styles.css',
//   ]);
// }

// async function cacheResponse(request) {
//   const cache = await caches.open(VERSION);
//   const response = await cache.match(request);
//   return response || fetch(request);
// }

// async function updateCache(request) {
//   const cache = await caches.open(VERSION);
//   const response = await fetch(request);
//   return cache.put(request, response);
// }