<template>
  <div :class="getIntroClass">
    <div class="container">
      <h1>{{ getPageName }}</h1>
    </div>
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
      try {
        let routeName = ''
        routeName = this.$route.name.slice(0, -5)
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
      } catch (e) {
        return 'An error route has occurred'
      }
    },
    getIntroClass () {
      let routeName = ''
      try {
        routeName = this.$route.name.slice(0, -5)
        return routeName === 'index' ? 'top-panel' : 'top-panel top-panel--display'
      } catch (e) {
        return 'top-panel top-panel--display'
      }
    }
  },
  methods: {
    getRoomName (param) {
      const groupTitle = {
        'two-room': this.$t('roomsTitles.titleTwo'),
        'six-room-common': this.$t('roomsTitles.titleSixCommon'),
        'six-room-women': this.$t('roomsTitles.titleSixWomen'),
        'nine-room': this.$t('roomsTitles.titleNine'),
        'four-room': this.$t('roomsTitles.titleFour')
      }
      return groupTitle[param]
    }
    // ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
