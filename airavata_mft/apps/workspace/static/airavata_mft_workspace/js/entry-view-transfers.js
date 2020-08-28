import Vue from 'vue'
import Transfers from "./containers/Transfers"
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.onload = function() {
    new Vue({
        render(h) {
            return h(Transfers, {
                props: {
                    transfersList: this.transfersList,
                    title: this.title
                }
            });

        },
        data() {
            return {
                transfersList: null,
            };
        },
        beforeMount() {
            if (this.$el.dataset.transfersList) {
                this.transfersList = JSON.parse(this.$el.dataset.transfersList);
            }
            if (this.$el.dataset.title) {
                this.title = this.$el.dataset.title;
            }
        }
    }).$mount("#transfers")
}