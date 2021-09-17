<template>
  <div class="map">
    <div class="map__init">
      <client-only>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.12391424660666!2d20.436483321820823!3d54.7221871382236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33dce5042f831%3A0x2ea9001143e5d731!2z0L_RgC3Rgi4g0JzQuNGA0LAsIDE2NtCwLCDQmtCw0LvQuNC90LjQvdCz0YDQsNC0LCDQmtCw0LvQuNC90LjQvdCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgMjM2MDE5!5e1!3m2!1sru!2sru!4v1631869292602!5m2!1sru!2sru"
          width="100%"
          height="550"
          style="border-radius:10px 10px 0 0;border:none;"
          allowfullscreen=""
          loading="lazy"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContactsGoogleMap'
}
</script>
