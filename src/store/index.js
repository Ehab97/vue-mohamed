import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/auth'
import usersModule from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users:usersModule,
    auth:authModule
  }
})
