<template>
  <div class="index-page">
    <app-section-hero />
    <app-section-other-rooms
      :title="translate"
      class="other-rooms-section--clear-bottom "
    />
    <app-section-why-us />
    <app-section-faq :title="'FAQ'" />
  </div>
</template>

<script>
import AppSectionOtherRooms from '~/components/AppSectionOtherRooms'
import AppSectionFaq from '~/components/AppSectionFaq'
import AppSectionWhyUs from '~/components/AppSectionWhyUs'
import AppSectionHero from '~/components/AppSectionHero'

export default {
  components: {
    AppSectionHero,
    AppSectionWhyUs,
    AppSectionFaq,
    AppSectionOtherRooms
  },
  computed: {
    translate () {
      return this.$t('roomsSection.titleAll')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  }
}
</script>
