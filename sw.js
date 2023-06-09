var cacheName = 'sw-v1';

const offlineUrl = 'offline/index.html';

self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll([offlineUrl])));
});

self.addEventListener('fetch', e => {
    if (e.request.mode === 'navigate' || (e.request.method === 'GET' && e.request.headers.get('accept').includes('text/html'))) {
        e.respondWith(
            fetch(e.request.url).catch(error => {
                return caches.match(offlineUrl);
            })
        );
    }
    return;
});