import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './axios/requestIntercept'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;
Vue.prototype.$axios=axios;

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
