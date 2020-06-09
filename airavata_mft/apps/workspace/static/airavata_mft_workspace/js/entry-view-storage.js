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
                initialStorageList: this.storageList,
                title: this.title
              }
            });

        },
        data() {
          return {
            storageList: null,
            title: 'Storage Units'
          };
        },
        beforeMount() {
          if (this.$el.dataset.storageList) {
            this.storageList = JSON.parse(this.$el.dataset.storageList);
          }
          if(this.$el.dataset.title) {
              this.title = JSON.parse(this.$el.dataset.title);
          }
        }
      }).$mount("#storage");
};