import * as filters from './filters'

export function filteredCountries(state){
    let countries = state.countries;

    if( state.filter.region.id ){
        countries = filters.filterByRegion(countries, state.filter.region);
    }

    countries = filters.filterByName(countries, state.filter.term);

    return countries;
}

export function hasCountries(state, getters){
    return getters.filteredCountries.length > 0;
}