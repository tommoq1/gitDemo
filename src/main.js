import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import store from './store';
// import语句,会汇总到最上方
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  store,
  beforeCreate () {
    Vue.prototype.$bus = this;
  },
}).$mount('#app')
