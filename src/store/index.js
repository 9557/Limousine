import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let str = sessionStorage.getItem('activeIndex');
let obj = str ? JSON.parse(str) : {};
let flag=false;
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})