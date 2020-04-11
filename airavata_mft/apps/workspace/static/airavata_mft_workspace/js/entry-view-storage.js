import Vue from 'vue'
import storage from "./containers/Storage"
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue ({render: h => h(storage, {})}).$mount("#storage")