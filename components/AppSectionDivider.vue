<template>
  <div class="section-divider page-section">
    <div class="container">
      <h2 class="section-divider__title title">
        {{ this.$t('quote').title }}
      </h2>
      <p class="section-divider__description">
        {{ this.$t('quote').description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSectionDivider'
}
</script>
