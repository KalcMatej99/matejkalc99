const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  pwa: {
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
          },
        },
      },
    ],
    fallbacks: {
      document: '/offline', // Fallback to the offline page when offline
    },
  },
  webpack: (config) => {
    return config;
  },
});