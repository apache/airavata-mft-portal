import Vue from 'vue'
import FileTransfer from "./containers/FileTransfer"
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.onload = function() {
    new Vue({
        render(h) {
            return h(FileTransfer, {
                props: {
                    initialList: this.initialList,
                    finalList:this.finalList,
                    title: this.title
                }
            });

        },
        data() {
            return {
                initialList: null,
                finalList:null
            };
        },
        beforeMount() {
            if (this.$el.dataset.initialList) {
                this.initialList = JSON.parse(this.$el.dataset.initialList);
            }
            if (this.$el.dataset.finalList) {
                this.finalList = JSON.parse(this.$el.dataset.finalList);
            }
            if (this.$el.dataset.title) {
                this.title = this.$el.dataset.title;
            }
        }
    }).$mount("#filetransfer")
}