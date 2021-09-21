<template>
  <div class="services">
    <div class="container page-section">
      <h2 class="title">
        {{ this.$t('serviceTypes').free }}
      </h2>
      <app-services-cards :services="this.$t('freeServices')" />
    </div>
    <app-section-divider />
    <div class="container page-section">
      <h2 class="title">
        {{ this.$t('serviceTypes').paid }}
      </h2>
      <app-services-cards :services="this.$t('paidServices')" />
    </div>
  </div>
</template>

<script>
import AppServicesCards from '~/components/AppServicesCards'
import AppSectionDivider from '~/components/AppSectionDivider'

export default {
  name: 'Services',
  components: {
    AppServicesCards,
    AppSectionDivider
  }
}
</script>
