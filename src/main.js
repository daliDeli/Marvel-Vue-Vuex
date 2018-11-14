import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import store from './store';
import router from './router';
import './css/index.css';

Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
