<template>
  <div class="country-filter-by-continent">
    <base-select
    trigger-button-text="Filter by Region"
    :options=options
    @change="changeOption"
    >
    </base-select>
  </div>
</template>

<script>

import BaseSelect from '@/components/BaseSelect.vue'

export default {
  components: {
    BaseSelect
  },

  data(){
    return {
      option: null,
      options: [
        {id: 1, name: 'Africa'},
        {id: 2, name: 'Americas'},
        {id: 3, name: 'Asia'},
        {id: 4, name: 'Europe'},
        {id: 5, name: 'Oceania'}
      ]
    }
  },

  methods: {
    changeOption(option){
      this.option = option;
    }
  }
}
</script>