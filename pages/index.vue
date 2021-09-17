<template>
  <div class="index-page">
    <app-section-other-rooms
      :title="'Комнаты'"
      class="other-rooms-section--clear-bottom "
    />
    <app-section-faq :title="'FAQ'" />
  </div>
</template>

<script>
import AppSectionOtherRooms from '~/components/AppSectionOtherRooms'
import AppSectionFaq from '~/components/AppSectionFaq'

export default {
  components: {
    AppSectionFaq,
    AppSectionOtherRooms
  }
}
</script>
