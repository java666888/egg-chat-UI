import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //背景图片地址
    backgroundImage:"",
    token:"",
  },
  mutations: {
    setBackgroundImage(state,val){
      state.backgroundImage=val;
    },
    setToken(state,val){
      state.token=val;
    },
  },
  actions: {
  },
  modules: {
  }
})
