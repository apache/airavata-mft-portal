import Vue from 'vue'
import StorageResources from "./containers/StorageResources"
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.onload = function() {
    new Vue({
        render(h) {
            return h(StorageResources, {
                props: {
                    resourcesList: this.resourcesList,
                    title: this.title
                }
            });

        },
        data() {
            return {
                resourcesList: null,
            };
        },
        beforeMount() {
            if (this.$el.dataset.resourcesList) {
                this.resourcesList = JSON.parse(this.$el.dataset.resourcesList);
            }
            if (this.$el.dataset.title) {
                this.title = this.$el.dataset.title;
            }
        }
    }).$mount("#resources")
}