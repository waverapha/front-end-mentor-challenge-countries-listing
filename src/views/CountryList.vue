<template>
  <main class="country-listing-page">

    <div class="search-and-filter-bar">
      <country-search></country-search>
      <country-filter></country-filter>
    </div>

    <loading data-testid="list-loading" :active="isLoading"></loading>

    <div class="country-list" v-if="!isLoading" data-testid="country-list">
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
import Loading from '@/components/Loading.vue'

export default {
  components: {
    CountryCard,
    CountryFilter,
    CountrySearch,
    Loading
  },

  created(){
    setInterval(() => {
      this.isLoading = false;
    }, 1500)
  },

  data(){
    return {
      isLoading: true,
      countries: Array(50).fill({
        flag: 'https://restcountries.eu/data/bra.svg',
        name: 'Brazil',
        capital: 'Brasília',
        population: 206135893,
        region: 'Americas'
      })
    }
  }
}
</script>