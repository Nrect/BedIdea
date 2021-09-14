<template>
  <header class="header">
    <div class="container">
      <app-nav />
      <app-header-mobail-lang-switcher />
      <app-header-mobile-menu />
    </div>
  </header>
</template>

<script>
import AppNav from '~/components/AppNav'
import AppHeaderMobileMenu from '~/components/AppHeaderMobileMenu'
import AppHeaderMobailLangSwitcher from '~/components/AppHeaderMobilelLangSwitcher'

export default {
  name: 'AppHeader',
  components: { AppHeaderMobailLangSwitcher, AppHeaderMobileMenu, AppNav }
}
</script>
