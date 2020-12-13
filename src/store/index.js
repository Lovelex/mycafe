import Vue from 'vue'
import Vuex from 'vuex'

// Modulos
import total from './total'
import calcs from './calcs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    total,
    calcs
  }
})
