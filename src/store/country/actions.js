export function fetchCountries({ commit }){
    commit('SET_LOADING_STATE', true);

    const apiURL = 'https://restcountries.eu/rest/v2';

    const endpoint = 'all';
    
    const fields = [
        'name',
        'nativeName',
        'languages',
        'population',
        'region',
        'subregion',
        'capital',
        'topLevelDomain',
        'currencies',
        'flag',
        'borders',
        'alpha3Code',
    ].join(';');

    fetch(`${apiURL}/${endpoint}?fields=${fields}`)
    .then(response => response.json())
    .then(countries => {
        commit('SET_COUNTRIES', countries);
    })
    .catch(error => console.error(error))
    .finally(() => {
        commit('SET_LOADING_STATE', false);
    });
}

export const fetchCountryByName = async({ commit }, countryName) => {
    commit('SET_LOADING_STATE', true);

    const apiURL = 'https://restcountries.eu/rest/v2';
    
    const endpoint = `name/${countryName}`;
    
    const fields = [
        'name',
        'nativeName',
        'languages',
        'population',
        'region',
        'subregion',
        'capital',
        'topLevelDomain',
        'currencies',
        'flag',
        'borders',
        'alpha3Code'
    ].join(';');

    const result = await fetch(`${apiURL}/${endpoint}/?fullText=true&fields=${fields}`)
    .then((response) => response.json());
    
    commit('SET_LOADING_STATE', false);
    return result;
};

export function filterByRegion({ commit, state }, region){
    const isSameRegion = region.name === state.filter.region.name;

    commit('SET_LOADING_STATE', !isSameRegion);
    commit('SET_REGION_FILTER', region);
    setInterval(() => {
        commit('SET_LOADING_STATE', false);
    }, 1500)
}