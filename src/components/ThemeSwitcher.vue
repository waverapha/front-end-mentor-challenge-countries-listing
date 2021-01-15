<template>
  <a class="theme-switcher bold-600" data-testid="theme-switcher" @click="changeTheme()">
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
  },

  methods: {
    changeTheme(){
      this.theme = ( this.theme === 'light' ) ? 'dark' : 'light';

      document.querySelector('body').dataset.theme = this.theme;
    }

  }

}
</script>