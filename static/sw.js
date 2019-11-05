importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/49eff403830559f31b1f.js",
    "revision": "1eb1eab5c8a2bf154a1eb479eaa2dc3d"
  },
  {
    "url": "/_nuxt/6e44e26f9efbed58fe9d.js",
    "revision": "532511a913ebec222a1763c42d1b5fd9"
  },
  {
    "url": "/_nuxt/7739f7f7f7e2557cfef5.js",
    "revision": "b41fc24ed7b2c804ec79ceab788ac1aa"
  },
  {
    "url": "/_nuxt/bb442e17f97ce46ae21b.js",
    "revision": "37ad4426650c661dc15598fc46cf6b01"
  },
  {
    "url": "/_nuxt/e1648c33cbd2a4061de1.js",
    "revision": "f5cbed4f8aa597be9188516d5d28625a"
  }
], {
  "cacheId": "transformers-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
