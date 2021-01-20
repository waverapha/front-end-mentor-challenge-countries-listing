<template>
  <main class="country-listing-page">

    <div class="search-and-filter-bar">
      <country-filter-by-name></country-filter-by-name>
      <country-filter-by-region></country-filter-by-region>
    </div>

    <loading data-testid="country-list-loading" :active="isLoading"></loading>

    <h2 class="no-countries-list" v-if="!isLoading && !hasCountries">No countries here :(</h2>

    <div class="country-list" v-if="!isLoading && hasCountries" data-testid="country-list">
      <country-card
      v-for="country in filteredCountries"
      :key="country.numericCode"
      :country="country"
      />
    </div>

  </main>
</template>

<script>

import CountryCard from '@/components/Country/CountryCard'
import CountryFilterByRegion from '@/components/Country/CountryFilterByRegion.vue'
import CountryFilterByName from '@/components/Country/CountryFilterByName.vue'
import Loading from '@/components/Loading.vue'

import { mapFields } from 'vuex-map-fields'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    CountryCard,
    CountryFilterByRegion,
    CountryFilterByName,
    Loading
  },

  created(){
    this.fetchCountries();
  },

  methods: {
    ...mapActions('country', [
      'fetchCountries'
    ])
  },

  computed: {
    ...mapFields('country', [
      'isLoading'
    ]),

    ...mapGetters('country', [
      'filteredCountries',
      'hasCountries'
    ])
  }
}
</script>