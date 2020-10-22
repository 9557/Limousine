import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let str = sessionStorage.getItem('all')
let obj = str ? JSON.parse(str) : {}
let flag = false
export default new Vuex.Store({
  state: {
    all: obj,
  },
  mutations: {
    setPrint(state, all) {
      //设置参数
      state.all = all
    },
  },
  actions: {
    // saveuser({commit},username){
    //   commit('setname',username)
    // }
  },
  modules: {},
})
