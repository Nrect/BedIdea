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
    ],
    script: [
      {
        src: '//widget.reservationsteps.ru/js/bnovo.js'
      },
      {
        src: '/booking.js'
      }
    ]
  },

  css: [
    '@/assets/stylesheets/main.scss',
    'hooper/dist/hooper.css'
  ],

  plugins: [
    '~/plugins/slider.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: ['nuxt-i18n'],

  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'ru',
        file: 'ru.js'
      },
      {
        code: 'en',
        file: 'en.js'
      }
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'static/locales',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true
    }
  },

  build: {
    postcss: {
      preset: {
        autoprefixer: {
          overrideBrowserslist: ['last 3 versions', '> 1%']
        }
      }
    }
  }
}
