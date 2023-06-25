import Vue from 'vue'
import App from './App.vue'
import vueForm from 'vue-form'

Vue.config.productionTip = false
Vue.use(vueForm);

new Vue({
  render: h => h(App),
}).$mount('#app')
