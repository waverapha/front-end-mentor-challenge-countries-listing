<template>
  <div class="country-search" :class="{'focused-element': isFocused}">
      <search
        role="graphics-symbol"
        aria-hidden="true"
        width="1.25em"
      />

      <input
        v-model="term"
        class="country-search-input"
        type="text"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        maxlength="120"
        placeholder="Search for a country..."
        aria-label="Type to search for a country"
        data-testid="filter-by-name"
        @focus="isFocused = true"
        @blur="isFocused = false"
      >
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields'

export default {

  data(){
    return {
      isFocused: false
    }
  },

  computed: {
    ...mapFields('country', [
      'filter.term'
    ])
  }
}
</script>