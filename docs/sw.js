// ============================================================
// Mein Notfallplan – Service Worker
// ============================================================
// This service worker caches all app assets for offline use.
// It uses a Cache-First strategy for the app shell and a
// Network-First strategy for external resources (if any).
// ============================================================

const CACHE_NAME = "notfallplan-v1";

// Files to pre-cache during installation
const PRECACHE_URLS = [
  ".",
  "index.html",
  "site.webmanifest",
  "favicon/favicon.svg",
  "styles.css",
  "js/app.js",
  "js/config.js",
  "js/contacts.js",
  "js/editor.js",
  "js/render.js",
  "js/sections.js",
  "js/storage.js",
  "js/translations.js",
];

// ── Install ───────────────────────────────────────────
// Pre-cache all app shell resources so the app works offline.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        // Force the waiting service worker to become active immediately
        return self.skipWaiting();
      }),
  );
});

// ── Activate ──────────────────────────────────────────
// Clean up old caches and take control of all clients.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name)),
        );
      })
      .then(() => {
        // Take control of all open tabs immediately
        return self.clients.claim();
      }),
  );
});

// ── Fetch ─────────────────────────────────────────────
// Cache-First strategy: serve from cache if available,
// otherwise fetch from network and cache the response.
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  // Don't cache chrome-extension:// or other non-http(s) requests
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith("http")) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached response, but also update cache in background
        // for the next request (stale-while-revalidate pattern)
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Network failed – that's fine, we have the cached version
            return cachedResponse;
          });
        return cachedResponse;
      }

      // Nothing in cache – fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          // Only cache successful responses for same-origin requests
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            url.origin === self.location.origin
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch((error) => {
          // Both cache and network failed – show fallback for navigation
          if (event.request.mode === "navigate") {
            return caches.match("index.html");
          }
          throw error;
        });
    }),
  );
});
