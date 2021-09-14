<template>
  <nav class="nav">
    <ul class="nav__list">
      <slot name="left-nav" />
      <li v-for="link in getLinkList.left" :key="link.path" class="nav-item">
        <nuxt-link
          class="nav-item__link"
          :to="localePath(link.path)"
          :exact="link.exact"
        >
          {{ link.name[actualLocale] }}
        </nuxt-link>
      </li>
    </ul>
    <div>LOGO</div>
    <ul class="nav__list">
      <slot name="right-nav" />
      <li v-for="link in getLinkList.right" :key="link.path" class="nav-item">
        <nuxt-link
          class="nav-item__link"
          :to="localePath(link.path)"
          :exact="link.exact"
        >
          {{ link.name[actualLocale] }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { linksNav } from '~/content/links'

export default {
  name: 'AppNav',
  computed: {
    getLinkList () {
      return {
        left: linksNav.slice(0, 3),
        right: linksNav.slice(3, 6)
      }
    },
    actualLocale () {
      return this.$i18n.locale
    },
    booking () {
      return this.$t('common.booking')
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.setLocale(lang)
    }
    // ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
