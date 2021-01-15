<template>

  <div class="country-card">

    <router-link class="country-flag" :to="{ name: 'Detail', params: {country: country.name} }">
      <img :src="country.flag" alt="">
    </router-link>

    <div class="country-card-content">
      <h3 class="country-name">{{ country.name }}</h3>

      <ul class="country-information">
        <li class="country-information-item"><span class="country-information-name bold-600">Population</span>: {{ new Intl.NumberFormat('en-US').format(country.population) }}</li>
        <li class="country-information-item"><span class="country-information-name bold-600">Region</span>: {{ country.region || "Isn't in a region" }}</li>
        <li class="country-information-item"><span class="country-information-name bold-600">Capital</span>: {{ country.capital || "Doesn't have capital" }}</li>
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
  }
}
</script>