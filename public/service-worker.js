var CACHE_NAME = 'spin-wheel-cach';

var urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-spin-wheel.png',
  '/favicon.ico',
  '/css/app.css',
  '../src/App.js',
  '../src/index.js',
  '../src/logo.svg',
  '../src/reportWebVital.js',
  '../src/setupTests.js',
  '../src/components/ConfigurePage.jsx',
  '../src/components/HomePage.jsx',
  '../src/components/RoulettePage.jsx',
  '../src/components/SettingsPage.jsx',
  '../src/components/SpinWheel.jsx',
  '../src/components/WheelConstructor.jsx',
  '../src/components/css/reset.css',
  '../src/components/css/home.css',
  '../src/components/css/button.css',
  '../src/components/css/wheel.css',
  '../src/components/audio/backSound.mp3',
  '../src/components/audio/click.mp3',
  '../src/components/audio/wheel.mp3',
];

// installation service worker
self.addEventListener('install', function(event) {
  
  // Met en cache les ressources quand ça s'installation
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// activation service worker
self.addEventListener('activate', function(event) {
  
  // supprime les anciens caches
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// interception des requêtes réseau
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Tente de récupérer la ressource depuis le cache
    caches.match(event.request)
      .then(function(response) {
        // Si la ressource est trouvée dans le cache, la renvoie
        if (response) {
          return response;
        }
        // Sinon, effectue la requête réseau
        return fetch(event.request);
      })
  );
});
