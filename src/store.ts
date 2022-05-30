import { createStore } from 'vuex'

const store = createStore({
  state: {
    sid: ''
  }, 
  mutations: {
    setSid(state, value) {
      state.sid = value
    }
  },
  getters: {},
  actions: {},
  modules: {}
})

export default store