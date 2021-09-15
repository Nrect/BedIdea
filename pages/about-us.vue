<template>
  <div class="about-us">
    <div class="container">
      <app-about-us-content />
    </div>
    <app-about-us-gallery />
  </div>
</template>

<script>
import AppAboutUsContent from '~/components/AppAboutUsContent'
import AppAboutUsGallery from '~/components/AppAboutUsGallery'
export default {
  name: 'AboutUs',
  components: { AppAboutUsGallery, AppAboutUsContent }
}
</script>
