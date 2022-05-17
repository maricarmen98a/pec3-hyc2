/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import { data } from "autoprefixer";

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
/* 
 function showAlert() {
  alert ("Mensaje correctamente enviado");
}
document.getElementById("form-submit").addEventListener("click", showAlert); */
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
