<template>
  <div class="country-filter-by-continent">
    <base-select
    data-testid="filter-by-region"
    :no-option-item="{ id: null, name: 'Filter by Region' }"
    :selected="filter.region"
    :options=regions
    @change="filterByRegion"
    >
    </base-select>
  </div>
</template>

<script>

import BaseSelect from '@/components/BaseSelect.vue'

import { mapActions, mapState } from 'vuex';

export default {
  components: {
    BaseSelect
  },

  methods: {
    ...mapActions('country', [
      'filterByRegion'
    ]),
  },

  computed: {
    ...mapState('country', [
      'regions',
      'filter'
    ])
  }
}
</script>