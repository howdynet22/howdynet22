const CACHE_NAME = 'groceries-supermarket-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/dairy.html',
    '/vegetables.html',
    '/cosmetics.html',
    '/order.html',
    '/loyalty.html',
    '/styles/styles.css',
    '/scripts/app.js',
    '/images/logo.jpg',
    '/images/dairy1.jpg',
    '/images/vegetables.jpg',
    '/images/cosmetics.jpg',
    '/images/branch1.jpg',
    '/images/branch2.jpg',
    '/images/branch3.jpg',
    'images/milk.jpg',
    'images/cheese.jpg',
    'images/yogurt.jpg',
    'images/recipie1.jpg',
    'images/recipie2.jpg',
    '/images/exotic_vegetables.jpg',
    '/images/root_vegetables.jpg',
    '/images/leafy_greens.jpg',
    '/images/recipie3.jpg',
    '/images/recipie3.jpg',
    'images/skin_care.jpg',
    'images/makeup.jpg',
    'images/makeup_tips.jpg',
    'images/haircare.jpg',
   
    // Add other images and assets as needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

