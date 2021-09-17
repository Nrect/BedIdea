<template>
  <nav class="nav">
    <div class="nav__wrapper">
      <button class="nav__button button button--primary button--rounded">
        <p>Забронировать</p>
      </button>
      <ul class="nav__list">
        <!--      <slot name="left-nav" />-->
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
      <logo />
      <ul class="nav__list">
        <!--      <slot name="right-nav" />-->
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
      <div class="header-nav__i18n">
        <nuxt-link
          class="header-nav__i18n-btn"
          :to="switchLocalePath('ru')"
          exact
          @click.native="changeLanguage('ru')"
        >
          РУС
        </nuxt-link>
        |
        <nuxt-link
          class="header-nav__i18n-btn"
          :to="switchLocalePath('en')"
          exact
          @click.native="changeLanguage('en')"
        >
          ENG
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { linksNav } from '~/content/links'
import Logo from '~/components/Logo'

export default {
  name: 'AppNav',
  components: { Logo },
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
