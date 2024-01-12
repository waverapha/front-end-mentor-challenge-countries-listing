<template>
  <div class="country-detail-page">
    <button type="button" class="back-button" @click="$router.back()">
      <span class="svg-icon" aria-hidden="true">
        <long-arrow-left />
      </span>

      <span class="back-button-text">Back</span>
    </button>

    <loading data-testid="country-item-loading" :active="isLoading.country" />

    <error-message
      v-if="hasError"
      :error-title="error.title"
      :error-message="error.message"
      :error-code="error.code"
    />

    <div class="country" v-if="hasCountry" data-testid="country-item">
      <div class="country-flag">
        <img :src="country.flags.svg" :alt="`${country.name.official} official flag`" :title="`${country.name.official} Flag`">
      </div>

      <section class="country-details">
        <h2 class="country-name">{{ country.name.official }}</h2>

        <div class="country-details-list-container">
          <ul class="country-details-list">
            <li class="country-details-list-item">
              <span class="bold-600">Native Name: </span>
              <span>{{ country.name.nativeName[Object.keys(country.name.nativeName)[0]].official }}</span>
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
              <span data-testid="country-capital">{{ country.capital.join(', ') || "Doesn't have a capital" }}</span>
            </li>
          </ul>

          <ul class="country-details-list">
            <li class="country-details-list-item"><span class="bold-600">Top Level Domains:</span> {{ topLevelDomains }}</li>
            <li class="country-details-list-item"><span class="bold-600">Currencies:</span> {{ currencies }}</li>
            <li class="country-details-list-item"><span class="bold-600">Languages:</span> {{ languages }}</li>
          </ul>
        </div>

        <section class="country-border" data-testid="country-border">
          <h3 class="bold-600">Border Countries: 
            <span v-if="!hasBorders">No borders</span>
          </h3>

          <loading
            size="small"
            :active="isLoading.borders"
            data-testid="country-item-loading"
          />

          <div
            v-if="hasBorders"
            class="country-border-tag-container"
          >
            <router-link
              v-for="borderCountry in countryBorders"
              :key="borderCountry"
              :to="{ name: 'CountryDetail', params: {country: borderCountry} }"
              class="country-border-tag cursor-pointer"
              data-testid="country-border-tag"
            >
              {{ borderCountry }}
            </router-link>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>

import Loading from '@/components/Loading';

import { mapActions } from 'vuex';

export default {
  components: {
    Loading,
    'error-message': () => import('@/components/ErrorMessage.vue')
  },

  props: {
    countryName: {
      type: String,
      required: true
    }
  },

  created(){
    this.fetchCountry();
  },

  data(){
    return {
      error: {
        title: 'No country here',
        message: '',
        code: null,
      },

      isLoading: {
        country: true,
        borders: true,
      },
      country: {
        flags: {

        },
        name: {
          common: '',
          official: '',
          nativeName: {}
        },
        region: '',
        subregion: '',
        capital: [],
        population: 0,
        tld: [],
        currencies: [],
        languages: [],
        borders: [],
      },
      countryBorders: []
    }
  },

  methods: {
    ...mapActions('country', [
      'fetchCountryByName',
      'fetchCountriesByAlpha3Code'
    ]),

    async fetchCountry(){
      this.isLoading.country = true;

      try{
        const countryResponse = await this.fetchCountryByName(this.countryName);

        this.country = countryResponse.data[0];

        if( this.country.borders.length > 0 ){
          this.isLoading.borders = true;
          const countryBorderNamesResponse = await this.fetchCountriesByAlpha3Code(this.country.borders)
          this.countryBorders = countryBorderNamesResponse.data.map((country) => country.name.official);
        }
      } catch(error) {
        if( error.response.status === 404 ){
          this.error.message = 'Invalid country name';
        }

        this.error.code = error.response.status;
      } finally {
        this.isLoading.country = false;
        this.isLoading.borders = false;
      }
    }
  },

  computed: {

    topLevelDomains(){
      return this.country.tld.join(', ')
    },

    currencies(){
      return Object.values(this.country.currencies).map(currency => currency.name).join(', ')
    },

    languages(){
      return Object.values(this.country.languages).map(language => language).join(', ')
    },

    population(){
      return new Intl.NumberFormat('en-US').format(this.country.population)
    },

    hasBorders(){
      return this.countryBorders.length > 0 && !this.isLoading.borders
    },

    hasCountry(){
      return this.country.name?.official && Object.values(this.country.name).some(Boolean) && !this.isLoading.country
    },

    hasError(){
      return !this.hasCountry && !this.isLoading.country
    }
  },

  beforeRouteUpdate (to, from, next) {
    this.country = to.params.country;
    
    next();
  },
}
</script>