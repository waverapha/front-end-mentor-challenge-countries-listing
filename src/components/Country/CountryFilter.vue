<template>
  <div class="country-filter-by-continent">
    <base-select
    list-class="region-list"
    list-option-class="region-list-item"
    trigger-button-text="Filter by Region"
    :options=options
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
      options: [
        {id: 1, name: 'Africa'},
        {id: 2, name: 'Americas'},
        {id: 3, name: 'Asia'},
        {id: 4, name: 'Europe'},
        {id: 5, name: 'Oceania'}
      ]
    }
  }
}
</script>