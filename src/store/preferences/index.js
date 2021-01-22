import state from './state.js';
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state,
  actions,
  mutations: {
    ...mutations,
    updateField
  },
  getters: {
    ...getters,
    getField
  }
}