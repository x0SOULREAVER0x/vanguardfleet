const CACHE="vanguard-v21";const ASSETS=["./", "index.html", "about.html", "join.html", "ships.html", "academy.html", "awards.html", "community.html", "development.html", "styles.css", "app.js", "vanguard-logo.jpg", "vanguard-station.jpg", "icon-192.png", "icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
