<template>
  <main class="country-listing-page">
    <div class="search-and-filter-bar">
      <country-search></country-search>
      <country-filter></country-filter>
    </div>
    <country-card v-for="country in countries" :key="country.numericCode" />
  </main>
</template>

<script>

import CountryCard from '@/components/Country/CountryCard'
import CountryFilter from '@/components/Country/CountryFilter.vue'
import CountrySearch from '@/components/Country/CountrySearch.vue'

export default {
  components: {
    CountryCard,
    CountryFilter,
    CountrySearch
  },

  data(){
    return {
      countries: [{}, {}, {}]
    }
  }
}
</script>