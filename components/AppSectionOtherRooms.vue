<template lang="pug">
  .other-rooms-section.page-section
    .container
      h2.title {{sectionTitle}}
      hooper.gallery__slider(
        ref="carousel"
        :settings="hooperSettings"
      )
        slide(v-for="(room,idx) in rooms" :key="idx").gallery__slide
          .room-card
            .room-card__img
              //picture
              //  source(type="image/webp" :srcSet="img.webp.srcSet")
              //  //- source(type="image/avif" :srcSet="img.avif.srcSet")
              //  source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="room.imgSrc.jpg")
            .room-card__wrapper
              h3.room-card__title {{room.title[actualLocale]}}
              .room-card__description
                p.room-card__description-text {{room.content[actualLocale]}}
              nuxt-link(:to="localePath('/rooms/'+room.slug)").room-card__btn.room-card__btn--solo.button.button--primary
                p {{ translate.learnMore }}
      .gallery__buttons
        button(@click.prevent="slidePrev" ref="prevBtn").gallery__btn.button
          svg(style="transform: rotate(180deg);")
            use(xlink:href="#angle")
        button(@click.prevent="slideNext" ref="nextBtn").gallery__btn.button
          svg
            use(xlink:href="#angle")

</template>

<script>
import { roomsData } from '~/content/rooms'

export default {
  name: 'AppSectionOtherRooms',
  props: {
    title: {
      type: String,
      default: ''
    },
    isFiltered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      roomCards: [],
      hooperSettings: {
        pagination: 'no',
        trimWhiteSpace: true,
        wheelControl: false,
        centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          1590: {
            itemsToShow: 3
          },
          996: {
            itemsToShow: 2
          },
          556: {
            itemsToShow: 1.5
          }
        }
      }
    }
  },
  computed: {
    sectionTitle () {
      return this.title
    },
    rooms () {
      const routeParam = this.$route.params.id ? this.$route.params.id : ''
      return roomsData.filter(room => room.slug !== routeParam)
    },
    translate () {
      return this.$t('common')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>
