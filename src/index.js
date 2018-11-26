console.log('hello world');
import './scss/main.scss';
import './scss/fonts.css';


// baguetteBox GALLERY
import baguetteBox from 'baguettebox.js';


// NAV


var toggle = document.querySelector(".toggle");
var topNav = document.querySelector(".navi--top");


// Listen for click event on toggle var
toggle.addEventListener('click', function() {
  console.log("toggle clicked");
  // toggle class "active" on topNav var
  topNav.classList.toggle("active");
}, false);



// GALLERY

baguetteBox.run('.guitars');