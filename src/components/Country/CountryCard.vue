<template>

  <div class="country-card" data-testid="country-card">

    <router-link class="country-flag" :to="{ name: 'Detail', params: {country: country.name} }">
      <img
      data-testid="country-flag-image"
      :src="country.flag"
      :alt="country.name"
      :title="country.name">
    </router-link>

    <div class="country-card-content">
      <h3 class="country-name">{{ country.name }}</h3>

      <ul class="country-information">
        <li class="country-information-item"><span class="country-information-name bold-600">Population:</span> <span class="country-information-value" data-testid="country-information-value">{{ population }}</span></li>
        <li class="country-information-item"><span class="country-information-name bold-600">Region:</span> <span class="country-information-value" data-testid="country-information-value">{{ country.region || "Isn't in a region" }}</span></li>
        <li class="country-information-item"><span class="country-information-name bold-600">Capital:</span> <span class="country-information-value" data-testid="country-information-value">{{ country.capital || "Doesn't have capital" }}</span></li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },

  computed: {
    population(){
      return new Intl.NumberFormat('en-US').format(this.country.population);
    }
  }
}
</script>