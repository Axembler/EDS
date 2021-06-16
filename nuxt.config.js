export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ЕДС',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  router: {
    linkActiveClass: 'active_link',
    linkExactActiveClass: 'active_link',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '81013720',
        webvisor: boolean,
        clickmap: boolean,
        debug: boolean,
        noJS: boolean,
        disabled: boolean,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
