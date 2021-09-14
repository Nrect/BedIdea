<!--<template>-->
<!--  <li v-for="link in getLinkList.left" :key="link.path" class="nav-item">-->
<!--    <nuxt-link-->
<!--      class="nav-item__link"-->
<!--      :to="localePath(link.path)"-->
<!--      :exact="link.exact"-->
<!--    >-->
<!--      {{ link.name[actualLocale] }}-->
<!--    </nuxt-link>-->
<!--  </li>-->
<!--</template>-->
<template>
  <div>000</div>
</template>
<script>
export default {
  name: 'AppNavItem',
  props: {
    linkItem: {
      type: Object,
      required: true
    }
  }
}
</script>
