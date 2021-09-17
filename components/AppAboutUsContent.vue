<template lang="pug">
  .page-section
    .card-about
      hooper(ref="carousel" :settings="hooperSettings").card-about__slider
        slide.card-about__slide(v-for="(img,i) in aboutImages" :key="i")
          .card-about__img
            //picture
            //  source(type="image/webp" :srcSet="img.webp.srcSet")
            //  //- source(type="image/avif" :srcSet="img.avif.srcSet")
            //  source(type="image/jpeg" :srcSet="img.jpg.srcSet")
            img(:src="img.jpg")
        hooper-navigation(slot="hooper-addons")
        hooper-pagination(slot="hooper-addons")
      .card-about__wrapper
        h2.card-about__title {{ translate.title }}
        .card-about__content
          p.card-about__text {{ translate.content[0] }}
          p.card-about__text {{ translate.content[1] }}
          p.card-about__text {{ translate.content[2] }}
        h2.card-about__title {{ translate.advantagesTitle }}
        .card-about__content(v-for="(advantage,idx) in translate.advantages" :key="idx")
          h3.card-about__text-title {{advantage.title}}
          p.card-about__text {{advantage.description}}
        .card-about__buttons
          span.card-about__btn.button.button--primary.button--rounded
            nuxt-link(:to="localePath('/faq')")
              | {{ translate.living }}
          span.card-about__btn.button.button--secondary.button--rounded
            nuxt-link(:to="localePath('/contacts')")
              | {{ translate.contactsUs }}
</template>

<script>
export default {
  name: 'AppAboutUsContent',
  data () {
    return {
      aboutImages: [
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0010.jpg')
          // webp: require('@/assets/images/about-us/1.jpg?resize&format=webp')
          // // avif: require('@/assets/images/about-us/1.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0011.jpg')
        },
        {
          jpg: require('@/assets/images/common/booking_hostelmira_0013.jpg')
        }
      ],
      hooperSettings: {
        wheelControl: false,
        infiniteScroll: true
      }
    }
  },
  computed: {
    translate () {
      return this.$t('aboutUs')
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
}
</script>
