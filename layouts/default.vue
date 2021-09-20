<template>
  <div>
    <app-sprites />
    <app-header />
    <app-top-panel />
    <Nuxt />
    <app-footer />
    <app-booking-modal />
  </div>
</template>
<script>
import AppSprites from '~/components/AppSprites'
import AppHeader from '~/components/AppLayoutHeader'
import AppFooter from '~/components/AppLayoutFooter'
import AppTopPanel from '~/components/AppLayoutTopPanel'
import AppBookingModal from '~/components/AppBookingModal'

export default {
  components: {
    AppBookingModal,
    AppTopPanel,
    AppFooter,
    AppHeader,
    AppSprites
  }
}
</script>
