<template>
  <div id="app">
    <base-header />
    <router-view/>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'

export default {
  components: {
    BaseHeader
  }
}
</script>

<style lang="scss">
#app{
  font-family: inherit;
  font-size: inherit;
}
</style>