import Vue from 'vue'
import storage from "./containers/Storage"
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.onload = function(){

      new Vue({
        render(h) {
          return h(storage, {
              props: {
                initialStorageList: this.storageList
              }
            });

        },
        data() {
          return {
            storageList: null
          };
        },
        beforeMount() {
          if (this.$el.dataset.storageList) {
            this.storageList = JSON.parse(this.$el.dataset.storageList);
          }
        }
      }).$mount("#storage");
};