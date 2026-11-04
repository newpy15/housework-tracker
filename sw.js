// 오프라인에서도 열리도록 앱 파일을 캐시. 파일을 고치면 VERSION을 올릴 것.
var VERSION = 'housework-v1';
var FILES = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// 네트워크 우선, 실패하면 캐시 (수정사항이 바로 반영되고 오프라인에서도 동작)
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(function (res) {   // 브라우저 HTTP 캐시를 거치지 않고 항상 최신 확인
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('index.html'); }); })
  );
});
