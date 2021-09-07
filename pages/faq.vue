<template lang="pug">
  .faq
    .container
      .wrapper
        app-accordion(:accordionContent="questions")
</template>
<script>
import { faq } from '~/content/faq'
import AppAccordion from '~/components/AppAccordion'

export default {
  name: 'Faq',
  components: { AppAccordion },
  computed: {
    questions () {
      return faq
    }
  }
}
</script>
