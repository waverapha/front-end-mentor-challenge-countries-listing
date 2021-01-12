<template>
  <main class="country-listing-page">
    <img alt="Vue logo" src="../assets/logo.png">
    <CountryCard v-for="country in countries" :key="country.numericCode" />
  </main>
</template>

<script>

import CountryCard from '@/components/Country/CountryCard'

export default {
  components: {
    CountryCard
  },

  created() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((data) => data.json())
    .then((countries) => this.countries = countries)
    .catch(error => console.log(error));
  },

  data(){
    return {
      countries: []
    }
  }
}
</script>