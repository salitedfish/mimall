import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutation"
import actions from "./action"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "",
    cartCount: 0,
  },
  mutations,
  actions,
  modules: {
  }
})
