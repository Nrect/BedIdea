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
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
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
