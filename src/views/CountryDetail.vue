<template>
  <div class="country-detail-page">
    
    <button class="back-button" @click="$router.back()">
      
      <div class="svg-icon" rel="presentation">
        <long-arrow-left />
      </div>

      <span class="back-button-text">Back</span>

    </button>

    <loading data-testid="country-item-loading" :active="isLoading"></loading>

    <div class="country" v-if="!isLoading" data-testid="country-item">

      <div class="country-flag">
        <img :src="country.flag" :alt="`${country.name} Flag`" :title="`${country.name} Flag`">
      </div>

      <div class="country-details">

        <h2 class="country-name">{{ country.name }}</h2>

        <div class="country-details-list-container">

          <ul class="country-details-list">

            <li class="country-details-list-item">
              <span class="bold-600">Native Name: </span>
              <span>{{ country.nativeName }}</span>
            </li>

            <li class="country-details-list-item">
              <span class="bold-600">Population: </span>
              <span data-testid="country-population">{{ population }}</span>
            </li>

            <li class="country-details-list-item">
              <span class="bold-600">Region: </span>
              <span data-testid="country-region">{{ country.region || 'No region' }}</span>
            </li>

            <li class="country-details-list-item">
              <span class="bold-600">Sub Region: </span>
              <span data-testid="country-subregion">{{ country.subregion || 'No subregion' }}</span>
            </li>

            <li class="country-details-list-item">
              <span class="bold-600">Capital: </span>
              <span data-testid="country-capital">{{ country.capital || "Doesn't have a capital" }}</span>
            </li>

          </ul>

          <ul class="country-details-list">
            <li class="country-details-list-item"><span class="bold-600">Top Level Domain:</span> {{ topLevelDomains }}</li>
            <li class="country-details-list-item"><span class="bold-600">Currencies:</span> {{ currencies }}</li>
            <li class="country-details-list-item"><span class="bold-600">Languages:</span> {{ languages }}</li>
          </ul>

        </div>

        <div class="country-border">

          <h3 class="bold-600">Border Countries: <span v-if="!hasBorders">No borders</span></h3>

          <div class="country-border-tag-container" v-if="hasBorders">
            <div class="country-border-tag"
            v-for="borderCountry in country.borders"
            :key="borderCountry">{{ borderCountry }}</div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Loading from '@/components/Loading';

import { mapActions, mapState } from 'vuex';

export default {

  components: {
    Loading
  },

  props: {
    countryName: {
      type: String,
      required: true
    }
  },

  created(){
      this.fetchCountryByName(this.countryName)
      .then(countryResponse => {
        const country = countryResponse[0];
        this.country = (country) ? country : this.country;
      });
  },

  data(){
    return {
      country: {
        flag: '',
        name: '',
        nativeName: '',
        region: '',
        subregion: '',
        capital: '',
        population: 0,
        topLevelDomain: [],
        currencies: [],
        languages: [],
        borders: [],
      }
    }
  },

  methods: {
    ...mapActions('country', [
      'fetchCountryByName'
    ]),
  },

  computed: {

    ...mapState('country', [
      'isLoading'
    ]),

    topLevelDomains(){
      return this.country.topLevelDomain.join(', ')
    },

    currencies(){
      return this.country.currencies.map(currency => currency.name).join(', ')
    },

    languages(){
      return this.country.languages.map(language => language.name).join(', ')
    },

    population(){
      return new Intl.NumberFormat('en-US').format(this.country.population)
    },

    hasBorders(){
      return this.country.borders.length > 0
    },
  }
}
</script>