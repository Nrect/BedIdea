<template>
  <div :class="getIntroClass">
    <h1>{{ getPageName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppTopPanel',
  data () {
    return {
      currentPageTitle: ''
    }
  },
  computed: {
    getRouterParam () {
      return this.$route.params.id
    },
    getPageName () {
      let routeName = ''
      try {
        routeName = this.$route.name.slice(0, -5)
      } catch (e) {
        return 'An error has occurred'
      }
      switch (routeName) {
        case 'index':
          return this.$t('introTitle.index')
        case 'about-us':
          return this.$t('introTitle.aboutUs')
        case 'rooms':
          return this.$t('introTitle.rooms')
        case 'services':
          return this.$t('introTitle.services')
        case 'faq':
          return this.$t('introTitle.faq')
        case 'contacts':
          return this.$t('introTitle.contacts')
        case 'rooms-id':
          return this.getRoomName(this.getRouterParam, 'title')
        default:
          return routeName
      }
    },
    getIntroClass () {
      let routeName = ''
      try {
        routeName = this.$route.name.slice(0, -5)
      } catch (e) {
        return 'intro--error-page'
      }
      switch (routeName) {
        case 'index':
          return 'top-panel'
        default:
          return 'top-panel top-panel--display'
      }
    }
  },
  methods: {
    getRoomName (param, mode) {
      if (mode === 'title') {
        switch (param) {
          case 'two-room':
            return this.$t('roomsTitles.titleTwo')
          case 'six-room':
            return this.$t('roomsTitles.titleSix')
          case 'eight-room':
            return this.$t('roomsTitles.titleEight')
          case 'ten-room':
            return this.$t('roomsTitles.titleTen')
          case 'twelve-room':
            return this.$t('roomsTitles.titleTwelve')
          default:
            return 'An error has occurred'
        }
      } else if (mode === 'image') {
        switch (param) {
          case 'two-room':
            return 'intro--two-room'
          case 'six-room':
            return 'intro--six-room'
          case 'eight-room':
            return 'intro--eight-room'
          case 'ten-room':
            return 'intro--ten-room'
          case 'twelve-room':
            return 'intro--twelve-room'
          default:
            return 'intro--error-page'
        }
      }
    }
    // ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
