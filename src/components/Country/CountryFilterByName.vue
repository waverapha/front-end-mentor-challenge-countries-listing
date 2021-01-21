<template>
  <div class="country-search" :class="{'focused-element': isFocused}">

      <search
      role="presentation"
      width="1.25em" />

      <input
      class="country-search-input"
      type="text"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      maxlength="120"
      placeholder="Search for a country..."
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Type to search for a country"
      v-model="term"
      data-testid="filter-by-name">

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