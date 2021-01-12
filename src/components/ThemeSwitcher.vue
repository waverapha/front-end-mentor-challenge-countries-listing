<template>
  <a class="theme-switcher bold-600">
      <div class="svg-icon">
          <moon-o width="1em" v-if="theme === 'light'" />
          <moon width="1em" v-if="theme === 'dark'" />
      </div>
      <span>Dark Mode</span>
  </a>
</template>

<script>
export default {
  data(){
    return {
      theme: 'light'
    }
  },

  mounted(){
    document.querySelector('body').dataset.theme = this.theme;
  }
}
</script>