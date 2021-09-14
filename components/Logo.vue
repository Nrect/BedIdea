<template lang="pug">
  .logo
    nuxt-link(:to="localePath('/')")
      svg.logo__icon
        use(xlink:href="#logo")
</template>
