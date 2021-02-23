import Vue from 'vue'
import  BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

//import bootstrap css 
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//initialize vue bootstrap
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
