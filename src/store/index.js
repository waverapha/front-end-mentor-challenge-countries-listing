import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import country from './country'
import preferences from './preferences'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    country,
    preferences
  }
})
