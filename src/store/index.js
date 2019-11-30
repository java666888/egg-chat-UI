import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //背景图片地址
    backgroundImage:"",
  },
  mutations: {
    setBackgroundImage(state,val){
      state.backgroundImage=val;
    }
  },
  actions: {
  },
  modules: {
  }
})
