<template>
  <div id="app">
    <base-header />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseHeader from './components/BaseHeader.vue'

export default {
  components: {
    BaseHeader
  },

  created(){
    this.loadTheme();
  },

  methods: {
    ...mapActions('preferences', [
      'loadTheme'
    ]),
  }
}
</script>

<style lang="scss">
#app{
  font-family: inherit;
  font-size: inherit;
}
</style>