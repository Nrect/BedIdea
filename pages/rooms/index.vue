<template lang="pug">
  .rooms
    .container
      .rooms__cards
        .rooms__cards-wrapper(v-for="(room,idx) in rooms" :key="idx")
          .room-card
            .room-card__img
              //picture
                //source(type="image/webp" :srcSet="room.imgSrc.webp.srcSet")
                ////- source(type="image/avif" :srcSet="room.imgSrc.avif.srcSet")
                //source(type="image/jpeg" :srcSet="room.imgSrc.jpg.srcSet")
              img(:src="room.imgSrc.jpg")
              .room-card__buttons
                nuxt-link(:to="localePath('/rooms/'+room.slug)").room-card__btn.button.button--primary
                  p {{ translate.learnMore }}
                button().room-card__btn.button.button--secondary
                  p {{ translate.booking }}
            .room-card__wrapper
              h3.room-card__title {{room.title[actualLocale]}}
              p.room-card__description {{room.content[actualLocale]}}
</template>

<script>
// import { mapActions } from 'vuex'
import { roomsData } from '~/content/rooms'

export default {
  name: 'Rooms',
  computed: {
    rooms () {
      return roomsData
    },
    translate () {
      return this.$t('common')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  }
  // methods: { ...mapActions('layout', ['toggleBookingModal']) }
}
</script>
