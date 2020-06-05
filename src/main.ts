import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'vant/lib/index.css'
// import 'amfe-flexible'
// import 'vant.css'
// import 'lib-flexible'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
