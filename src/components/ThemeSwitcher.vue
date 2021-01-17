<template>
  <button class="theme-switcher bold-600" data-testid="theme-switcher" @click="changeTheme()">
      <div class="svg-icon" role="presentation">
          <moon-o width="1em" v-if="theme === 'light'" />
          <moon width="1em" v-if="theme === 'dark'" />
      </div>
      <span :aria-label="[`${theme} Mode`]"><span aria-hidden="true">Dark Mode</span></span>
  </button>
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