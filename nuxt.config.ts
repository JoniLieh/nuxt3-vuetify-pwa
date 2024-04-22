// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import isDocker from './is-docker';

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

// Route Prefixes
const prefix = IS_PRODUCTION ? '' : '' // app url prefix e.g. /client

// PWA Config
const title = 'MA - My App';
const shortTitle = 'MA - My App';
const description = 'My App'

let proxyTo; // http://localhost // http://host.docker.internal // http://game-service
if (process.env.NODE_ENV == 'development') {
  proxyTo = "http://localhost:3001/api/v1";
} else {
  proxyTo = isDocker() ? "http://host.docker.internal" : "http://localhost";
} 

const config = {

  // Variabes to access on runtime for nuxt backend and public in browser
  runtimeConfig: {
    proxyToUrl: proxyTo
  },

  imports: {
    autoImport: true,
    dirs: [
      // scan all modules within given directory
      'composables/**',
      './types/*.ts',
      './types/**/*.ts'
    ]
  },

  // import styles
  css: ['@/assets/main.scss'],
  //...
  build: {
    transpile: ['vuetify'],
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  experimental: {
    inlineSSRStyles: false
  },

  $production: {
    app: {
      baseURL: `${prefix}/`,
      buildAssetsDir: `${prefix}/_nuxt/`,
    },
    router: {
      base: prefix
    },
    devtools: false,
  },

  $development: {
    devtools: {
      timeline: {
        enabled: true
      }
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: `${prefix}/images/favicon.ico` },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;700;900&display=swap' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
    '@vueuse/nuxt', // https://vueuse.org/nuxt/README.html
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-security',
    // @ts-ignore
    async (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
        config.plugins.push(
          vuetify({
            autoImport: true
          })
        )
      );
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
  security: {
    headers: {
      // load embedded images
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false
    },
  },
  
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: title,
      short_name: shortTitle,
      theme_color: '#003b79',
      description: description,
      // gona look like an app
      display: "standalone",
      icons: [
        {
          src: 'images/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'images/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'images/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'images/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
    },
    workbox: {
      navigateFallback: null,
      cleanupOutdatedCaches: true,
      globPatterns: ['**/*.{json,ico,svg,ttf,woff,css,scss,txt,jpg,png,woff2,mjs,otf,ani}'], // files to cache in prod
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 14 // <== 14 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }, {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 14 // <== 14 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
    }
  },
}

export default config