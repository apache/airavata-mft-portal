import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import $ from "jquery";

// Expose jQuery on the global object
window.$ = window.jQuery = $;

import "bootstrap/dist/css/bootstrap.css";
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});