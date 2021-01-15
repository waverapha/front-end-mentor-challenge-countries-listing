<template>
  <main class="country-listing-page">

    <div class="search-and-filter-bar">
      <country-search></country-search>
      <country-filter></country-filter>
    </div>

    <div class="country-list" data-testid="country-list">
      <country-card
      v-for="country in countries"
      :key="country.numericCode"
      :country="country"
      />
    </div>

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
      countries: Array(50).fill({
        flag: 'https://restcountries.eu/data/bra.svg',
        name: 'Brazil',
        capital: undefined,
        population: 206135893,
        region: 'Americas'
      })
    }
  }
}
</script>