<template>
  <div>
    <app-sprites />
    <app-header />
    <Nuxt class="page-section" />
    <app-footer />
  </div>
</template>
<script>
import AppSprites from '~/components/AppSprites'
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'

export default {
  components: { AppFooter, AppHeader, AppSprites }
}
</script>
