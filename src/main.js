import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/element';
import 'normalize.css';
import Utils from '@/utils';

Vue.config.productionTip = false;

Vue.prototype.$utils = Utils;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
