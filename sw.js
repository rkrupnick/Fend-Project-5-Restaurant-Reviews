var cacheID = 'restaurant-reviews-static-v002';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheID).then(function(cache) {
      return cache
        .addAll([
          '/',
          '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/data/restaurants.json',
          '/img/',
          '/img/1.jpg',
          '/img/10.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/js/',
          '/js/dbhelper.js',
          'js/main.js',
          'js/register.js',
          'js/restaurant_info.js'
        ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-reviews-') &&
            cacheName !== cacheID;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


