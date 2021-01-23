<template>
  <div class="loading-container" v-if="active" :style="{fontSize: `${getSize}em`}">
    <loading-spinner></loading-spinner>
  </div>
</template>

<script>
export default {
  props: {
      active: {
          type: Boolean,
          required: true
      },
      size: {
          type: String,
          default: 'big'
      }
  },

  computed: {
    getSize(){
      switch(this.size){
        case 'tiny':
          return 1;
        case 'small':
          return 2;
        case 'medium':
          return 3;
        case 'big':
          return 4;
        case 'large':
          return 5;
        default:
          return 5;
      }
    }
  }
}
</script>