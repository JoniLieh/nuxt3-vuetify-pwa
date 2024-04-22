// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { md3 } from 'vuetify/blueprints'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { light, dark } from '~/assets/vuetifyThemes'

// Translations provided by Vuetify
import { de, en } from 'vuetify/locale'

// TODO: https://vuetifyjs.com/en/features/icon-fonts/#mdi-js-svg

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    blueprint: md3,
    ssr: true,
    locale: {
      locale: 'de',
      fallback: 'en',
      messages: { de, en },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light,
        dark
      },
      variations: {
        colors: ['primary', 'secondary', 'accent', 'info', 'error', 'success', 'warning'],
        lighten: 4,
        darken: 4,
      },
    },
    defaults: {
      // global: {
      //   density: 'comfortable'
      // },
      // VBottomNavigation: {
      //   density: 'compact'
      // },
      // VAppBar: {
      //   density: 'compact'
      // },
    }
  })
  app.vueApp.use(vuetify)
})