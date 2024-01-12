<template>
  <article class="country-card" data-testid="country-card">
    <router-link class="country-flag" :to="{ name: 'CountryDetail', params: {country: country.name.official} }">
      <img
        width="384"
        height="256"
        class="country-card-flag"
        data-testid="country-flag-image"
        :src="country.flags.svg"
        :alt="`${country.name.official} official flag`"
        :title="country.name.official"
        :loading="lazyLoading ? 'lazy' : 'eager'"
      >
    </router-link>

    <div class="country-card-content">
      <h2 class="country-name">{{ country.name.official }}</h2>

      <dl class="country-information">
        <div class="country-information-item">
          <dt class="country-information-name bold-600">Population: </dt>
          <dd
            class="country-information-value"
            data-testid="country-information-value"
          >
            {{ population }}
          </dd>
        </div>
        <div class="country-information-item">
          <dt class="country-information-name bold-600">Region: </dt>
          <dd
            class="country-information-value"
            data-testid="country-information-value country-region-value"
          >
            {{ country.region || "Isn't in a region" }}
          </dd>
        </div>
        <div class="country-information-item">
          <dt class="country-information-name bold-600">Capital: </dt>
          <dd
            class="country-information-value"
            data-testid="country-information-value"
          >
            {{ country.capital.join(', ') || "Doesn't have capital" }}
          </dd>
        </div>
      </dl>

    </div>
  </article>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    },
    lazyLoading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    population(){
      return new Intl.NumberFormat('en-US').format(this.country.population);
    }
  }
}
</script>