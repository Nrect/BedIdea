<template>
  <div>
    <app-sprites />
    <app-header />
    <app-top-panel />
    <Nuxt />
    <app-footer />
  </div>
</template>
<script>
import AppSprites from '~/components/AppSprites'
import AppHeader from '~/components/AppLayoutHeader'
import AppFooter from '~/components/AppLayoutFooter'
import AppTopPanel from '~/components/AppTopPanel'

export default {
  components: {
    AppTopPanel,
    AppFooter,
    AppHeader,
    AppSprites
  }
}
</script>
