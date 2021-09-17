<template lang="pug">
  .page-section
    .container
      h2.title {{sectionTitle}}
      app-accordion(:accordionContent="questions")
</template>

<script>
import AppAccordion from '~/components/AppAccordion'
import { faq } from '~/content/faq'

export default {
  name: 'AppSectionFaq',
  components: { AppAccordion },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    sectionTitle () {
      return this.title
    },
    questions () {
      return faq
    }
  }
}
</script>
