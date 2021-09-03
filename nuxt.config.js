export default {
  head: {
    title: 'BedIdea',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [
    '@/assets/stylesheets/main.scss'
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [],

  build: {}
}
