<template>
  <main class="country-listing-page">
    <country-card v-for="country in countries" :key="country.numericCode" />
  </main>
</template>

<script>

import CountryCard from '@/components/Country/CountryCard'

export default {
  components: {
    CountryCard
  },

  data(){
    return {
      countries: [{}, {}, {}]
    }
  }
}
</script>