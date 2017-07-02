//import the stylesheet
import "../css/app.scss";

//define a welcome message to show
let message = "Welcome to webpack 3 project starter with bulma css";

//select page element where welcome message should appear
let welcomeEl = document.querySelector('#app .section .title');

//show message on the page
welcomeEl.innerHTML = message;

//show message in the console
console.log(message);