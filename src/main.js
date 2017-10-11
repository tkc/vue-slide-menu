import Vue from 'vue'
import vueTap from 'v-tap';
Vue.use(vueTap);
import App from './App'

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
});
