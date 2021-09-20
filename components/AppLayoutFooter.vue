<template lang="pug">
  footer.footer
    .container
      .footer__wrapper
        .footer__logo
          AppLogo
          .footer__subLogo
            p.footer__subtitle {{ translate.footer.title }}
            p.footer__slug {{ translate.footer.titleSlug }}
            span.footer__btn
              button(@click="toggleBookingModal").button.button--primary.button--rounded
                p {{ translate.common.booking }}
        .footer__nav
          h3.footer__title {{ translate.footer.navigation }}
          ul.footer__nav-list
            li(v-for='(link,index) in links' :key="index")
              nuxt-link.footer__nav-link(:to="localePath(link.path)" exact) {{link.name[actualLocale]}}
        .footer__contacts
          h3.footer__title {{ translate.footer.contacts }}
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#mobile-alt")
            a(href="tel:+79637384646").footer__contact--text +7 (963) 738 46 46
            a(href="viber://chat?number=%2B79637384646" target="_blank").footer__contact-link
              svg.footer__contact-link-ico
                use(xlink:href="#viber")
            a(href="https://wa.me/+79637384646" target="_blank").footer__contact-link
              svg.footer__contact-link-ico
                use(xlink:href="#whatsapp")
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#phone")
            a(href="tel:+74012374646").footer__contact-text {{ translate.common.phone }}
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#envelop")
            a(href="mailto:hostelpalmburg@gmail.com").footer__contact-text hostelpalmburg@gmail.com
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#map-marker")
            p.footer__contact-text {{ translate.common.address }}
    .rope-border
</template>

<script>
import { mapActions } from 'vuex'
import AppLogo from '~/components/Logo'
import { linksNav } from '~/content/links'

export default {
  name: 'AppFooter',
  components: {
    AppLogo
  },
  computed: {
    links () {
      return linksNav
    },
    translate () {
      return {
        footer: this.$t('footer'),
        common: this.$t('common')
      }
    },
    actualLocale () {
      return this.$i18n.locale
    }
  },
  methods: {
    ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
