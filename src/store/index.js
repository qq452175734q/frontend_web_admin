import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		collapse: true,
		tagsList: [],
  },
  getters: {
	  morTagsList(state){
	  	return state.tagsList
	  },
	  tagsListLength(state,getters){
	  	return getters.morTagsList.length
	  },
	  checkExist(state){
		return fullPath => state.tagsList.some(item => item.path === fullPath)
	  },
	  closeOther(state){
		return fullPath => state.tagsList.filter(item => item.path === fullPath)
	  },
  },
  mutations: {
		isCollapse(state) {
			return state.collapse = !state.collapse
		},
		addTagsList(state, tags) {
			return state.tagsList.splice(tags.index,0,tags)
		},
		pushTagsList(state, tags) {
			return state.tagsList.push(tags)
		},
		shiftTagsList(state){
			return state.tagsList.shift()
		},
		removeTagsList(state, index){
			return state.tagsList.splice(index, 1);
		},
		resetTagsList(state, tags) {
			return state.tagsList = tags
		},
  },
  actions: {
	  
  },
  modules: {
  }
})
