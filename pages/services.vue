<template lang="pug">
  .services.page-section
    .container
      .wrapper
        h2.title {{ this.$t('serviceTypes').free }}
        app-services-cards(:services="this.$t('freeServices')")
    .quote
      .container
        .wrapper
          h2.quote__title.title {{ this.$t('quote').title }}
          .quote__description {{ this.$t('quote').description }}
    .container
      .wrapper
        h2.title {{ this.$t('serviceTypes').paid }}
        app-services-cards(:services="this.$t('paidServices')")

</template>

<script>
import AppServicesCards from '~/components/AppServicesCards'

export default {
  name: 'Services',
  components: { AppServicesCards }
}
</script>
