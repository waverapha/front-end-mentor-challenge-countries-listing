import http from '../../repository/country'

export const fetchCountries = async ({ commit }) => {

  const fields = [
    'name',
    'currencies',
    'languages',
    'population',
    'region',
    'subregion',
    'capital',
    'tld',
    'flags',
    'borders',
    'cca3',
  ].join(',');

  commit('SET_LOADING_STATE', true);

  try {
    const response = await http.all(fields);

    commit('SET_COUNTRIES', response.data);
  } catch (error) {
    commit('SET_ERROR', {
      message: error.message,
      code: error.response.status
    });
  }

  commit('SET_LOADING_STATE', false);
}

export const fetchCountryByName = async (context, countryName) => {
  const fields = [
    'name',
    'languages',
    'population',
    'region',
    'subregion',
    'capital',
    'tld',
    'currencies',
    'flags',
    'borders',
    'cca3'
  ].join(',');

  return await http.byName(countryName, fields);
};

export const fetchCountriesByAlpha3Code = async (context, alpha3Codes) => {
  const fields = [
    'name'
  ].join(',');

  alpha3Codes = alpha3Codes.join(',');

  return await http.manyByCCA3(alpha3Codes, fields);
};

export function filterByRegion({ commit, state }, region) {
  const isSameRegion = region.name === state.filter.region.name;

  commit('SET_LOADING_STATE', !isSameRegion);
  commit('SET_REGION_FILTER', region);
  setInterval(() => {
    commit('SET_LOADING_STATE', false);
  }, 1500)
}