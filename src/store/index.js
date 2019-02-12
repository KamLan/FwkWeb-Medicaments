import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username : "admin",
    password : "secret",
    log : "false"
  },
  getters : {
    USERNAME: state => {
      return state.username;
    },
    PASSWORD: state => {
      return state.password;
    },
    LOG: state => {
      return state.log;
    }
  },
  mutations: {
    SET_LOG: (state, payload) => {
      state.log = payload
    }
  },
  actions : {}  
})