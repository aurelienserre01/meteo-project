import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api\.openweathermap\.org\/.*/i,
          handler: 'NetworkFirst',
          method: 'GET',
          options: {
            cacheName: 'weather-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
      ]
    },
    manifest: {
      theme_color: "#f69435",
      background_color: "#f69435",
      display: "fullscreen",
      scope: "/",
      start_url: "/",
      name: "Application météo",
      short_name: "Application météo",
      icons: [
        {
          "src": "/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/icon-256x256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
        {
          "src": "/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },
  })],
})
