const path = require('path')
// nuxt.config.js 내에서 process.env 접근 가능
require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.MODE}`),
})

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base: '/portfolio/',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'G1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://www.w3schools.com/w3css/4/w3.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/common/scss/common.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // 앱 내에서 process.env 접근 가능
    ['@nuxtjs/dotenv', { path: __dirname, filename: `.env.${process.env.MODE}` }],
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  pwa: {
    icon: false,
    manifest: false,
    workbox: {
      enabled: process.env.MODE !== 'local',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      scss: {
        prependData: /* import 순서 주의 */ `
        `,
      },
    },
  },
  server: {
    host: '0',
  },
  telemetry: false,
  srcDir: 'src',
}
