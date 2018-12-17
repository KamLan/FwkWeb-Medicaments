import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username : "admin",
    password : "secret"
  },
  getters : {
    USERNAME: state => {
      return state.username;
    },
    PASSWORD: state => {
      return state.password;
    }
  },
  mutations: {
    
  },
  actions : {}  
})