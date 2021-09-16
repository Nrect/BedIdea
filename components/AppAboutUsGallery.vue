<template lang="pug">
  .gallery
    h2.title {{ translate.galleryTitle }}
    .container
      hooper.gallery__slider(
        ref="carousel1"
        :settings="hooperSettings"
      )
        slide(v-for="(img,i) in galleryImages" :key="i").gallery__slide
          .gallery__img
            //picture
            //  source(type="image/webp" :srcSet="img.webp.srcSet")
            //  //- source(type="image/avif" :srcSet="img.avif.srcSet")
            //  source(type="image/jpeg" :srcSet="img.jpg.srcSet")
            img(:src="img.jpg")
      .gallery__buttons
        button(@click.prevent="slidePrev" ref="prevBtn").gallery__btn.button
          svg(style="transform: rotate(180deg);")
            use(xlink:href="#angle")
        button(@click.prevent="slideNext" ref="nextBtn").gallery__btn.button
          svg
            use(xlink:href="#angle")
</template>
<script>
export default {
  name: 'AppAboutUsGallery',
  data () {
    return {
      galleryImages: [
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0010.jpg')
          // webp: require('@/assets/images/about-us/1.jpg?resize&format=webp')
          // // avif: require('@/assets/images/about-us/1.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0011.jpg')
        },
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0011.jpg')
        },
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0011.jpg')
        },
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0011.jpg')
        },
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0011.jpg')
        }
      ],
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
            itemsToShow: 1
          }
        }
      }
    }
  },
  computed: {
    translate () {
      return this.$t('aboutUs')
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel1.slidePrev()
    },
    slideNext () {
      this.$refs.carousel1.slideNext()
    }
  }

}
</script>
