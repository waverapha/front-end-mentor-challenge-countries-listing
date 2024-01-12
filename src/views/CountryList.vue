<template>
  <main class="country-listing-page">
    <div class="search-and-filter-bar">
      <country-filter-by-name />
      <country-filter-by-region />
    </div>

    <loading data-testid="country-list-loading" :active="isLoading" />

    <error-message
      v-if="!isLoading && !hasCountries"
      error-title="No countries here!"
      :error-message="error.message"
      :error-code="error.code">
    </error-message>

    <div class="country-list" v-if="!isLoading && hasCountries" data-testid="country-list">
      <country-card
        v-for="(country, index) in filteredCountries"
        :key="country.numericCode"
        :country="country"
        :lazy-loading="index > 12"
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
    Loading,
    ErrorMessage: () => import('@/components/ErrorMessage.vue'),
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
      'isLoading',
      'error'
    ]),

    ...mapGetters('country', [
      'filteredCountries',
      'hasCountries'
    ])
  }
}
</script>