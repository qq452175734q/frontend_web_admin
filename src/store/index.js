import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		collapse: true,
		tagsList: [],
  },
  mutations: {
	  isCollapse(state) {
	      return state.collapse = !state.collapse
	  },
  },
  actions: {
  },
  modules: {
  }
})
