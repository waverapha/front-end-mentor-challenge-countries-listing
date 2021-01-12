<template>
  <header>
      <div class="logo">
          <h1>Where in the world?</h1>
      </div>

      <theme-switcher></theme-switcher>
  </header>
</template>

<script>

import ThemeSwitcher from './ThemeSwitcher.vue'

export default {
  components: {
    ThemeSwitcher
  }
}
</script>