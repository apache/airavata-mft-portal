import Vue from 'vue'
import StorageResources from "./containers/StorageResources"
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.onload = function(){

      new Vue({
        render(h) {
          return h(StorageResources, {
              props: {
                resourcesList: this.resourcesList
              }
            });

        },
        data() {
          return {
            resourcesList: null
          };
        },
        beforeMount() {
          if (this.$el.dataset.resourcesList) {
            this.resourcesList = JSON.parse(this.$el.dataset.resourcesList);
          }
        }
      }).$mount("#resources");
};