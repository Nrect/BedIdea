<template lang="pug">
  .room-current
    .container.page-section
      .card-about
        hooper(ref="carousel" :settings="hooperSettings").card-about__slider
          slide.card-about__slide(v-for="(img,idx) in room.imageSet" :key="idx")
            .card-about__img
              //picture
                //source(type="image/webp" :srcSet="img.webp.srcSet")
                ////- source(type="image/avif" :srcSet="img.avif.srcSet")
                //source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="img.jpg")
          hooper-navigation(slot="hooper-addons")
          hooper-pagination(slot="hooper-addons")
        .card-about__wrapper
          h2.card-about__title {{room.title[actualLocale]}}
          .card-about__content
            p.card-about__text(v-for="(content,idx) in room.additionContent" :key="idx") {{content[actualLocale]}}
            ul.card-about__list
              li.card-about__list-item(v-for="(advantage,idx) in room.advantages" :key="idx")
                p {{advantage[actualLocale]}}
          .card-about__buttons
            span.card-about__btn.button.button--primary.button--rounded
              nuxt-link(:to="localePath('/rooms')")
                p {{translate.back}}
            button().card-about__btn.button.button--secondary.button--rounded
              p {{translate.booking}}
    app-section-other-rooms(:title="translateRooms")

</template>

<script>
// import { mapActions } from 'vuex'
import { roomsData } from '~/content/rooms'
import AppSectionOtherRooms from '~/components/AppSectionOtherRooms'

export default {
  name: 'RoomId',
  components: { AppSectionOtherRooms },
  validate ({ params }) {
    for (const room of roomsData) {
      if (room.slug === params.id) {
        return true
      }
    }
    return false
  },
  data () {
    return {
      hooperSettings: {
        wheelControl: false,
        infiniteScroll: true
      }
    }
  },
  computed: {
    room () {
      return roomsData.find(room => room.slug === this.$route.params.id)
    },
    translate () {
      return this.$t('common')
    },
    translateRooms () {
      return this.$t('roomsSection.titleCurrent')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  mounted () {
    if (process.browser) {
      const svg = document.getElementsByClassName('icon')
      for (let i = 0; i < svg.length; i++) {
        svg[i].removeAttribute('width')
        svg[i].removeAttribute('height')
        svg[i].getElementsByTagName('path')[0].remove()
      }
    }
  }
  // methods: {
  //   ...mapActions('layout', ['toggleBookingModal'])
  // }
}
</script>
