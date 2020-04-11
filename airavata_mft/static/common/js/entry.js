import Vue from "vue";
import BootstrapVue from "bootstrap-vue";


import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css";

/**
 * Common entry point function. Sets up common entry point functionality and
 * then calls the passed function with the Vue class as the first argument.
 *
 * @param {Function} entryPointFunction
 */
export default function entry(entryPointFunction) {
  // Common Vue configuration
  Vue.use(BootstrapVue);

  entryPointFunction(Vue);
}