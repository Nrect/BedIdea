<template>
  <header class="header">
    <app-nav />
  </header>
</template>

<script>
import AppNav from '~/components/AppNav'

export default {
  name: 'AppHeader',
  components: { AppNav }
}
</script>
