import Vue from 'vue'
import App from './App.vue'
import vueForm from 'vue-form'
import store from './store';
import router from './router';

Vue.config.productionTip = false
Vue.use(vueForm);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
