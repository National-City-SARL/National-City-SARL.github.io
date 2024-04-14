/*-----------------------------------*\
  #Javascript.js
\*-----------------------------------*/

/**
* copyright 2024 julie claudia
*/

/**
*  toggle_menu (nav-bar)
*/

var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");
toggle_menu.onclick = function(){
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
}

/**
* CUSTOM LOADING
*/
const loadingElement = document.querySelector("[data-loading-container]");
window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
*GO TO TOP
*/
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

