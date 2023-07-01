import Vue from 'vue'
import App from './App.vue'
import vueForm from 'vue-form'
import store from './store';

Vue.config.productionTip = false
Vue.use(vueForm);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
