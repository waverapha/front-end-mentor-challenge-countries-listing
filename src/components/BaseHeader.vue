<template>
  <header>
      <div class="logo">
          <h1>
            <router-link :to="{name: 'CountryList'}">Where in the world?</router-link>
          </h1>
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