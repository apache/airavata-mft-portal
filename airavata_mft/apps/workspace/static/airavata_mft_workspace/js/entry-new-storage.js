import Vue from 'vue'
import NewStorage from "./containers/NewStorage"
import { BootstrapVue } from 'bootstrap-vue'
import { FormGroupPlugin } from 'bootstrap-vue'
import { FormPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(FormGroupPlugin);
Vue.use(FormPlugin);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.onload = function(){

    new Vue({
      render(h) {
        return h(NewStorage, {
          });
      },
    }).$mount("#newunit");
};