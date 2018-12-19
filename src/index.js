import './scss/main.scss';
import './scss/fonts.css';


// baguetteBox GALLERY
import baguetteBox from 'baguettebox.js';
import { tns } from 'tiny-slider';



// NAV


var toggle = document.querySelector(".toggle");
var topNav = document.querySelector(".navi--top");


// Listen for click event on toggle var
// toggle.addEventListener('click', function() {
//   console.log("toggle clicked");
//   // toggle class "active" on topNav var
//   topNav.classList.toggle("active");
// }, false);



// OVERLAYNAV

// functions


let menuLinks = document.querySelectorAll('.nav-overlay ul li a');



menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    MenuOff();
  });
});

function MenuOn() {
  document.querySelector(".nav-overlay").classList.add("menu-open");
  document.getElementById("open").classList.add("menu-open");
}

function MenuOff() {
  document.querySelector(".nav-overlay").classList.remove("menu-open");
  document.getElementById("open").classList.remove("menu-open");
}

// event listeners

document.querySelector(".toggle").addEventListener("click", MenuOn, true);
document.getElementById("close").addEventListener("click", MenuOff, true);

// GALLERY

baguetteBox.run('.guitars');
baguetteBox.run('.guitars--more');
baguetteBox.run('.slider__slide');


// SHOWMORE

// let showMoreBtn = document.querySelector('.showmore');
// let moreContainer = document.querySelector('.guitars--more')



// function showMore() {
//   moreContainer.classList.toggle("show");
//   if (moreContainer.classList.contains('show')){
//     showMoreBtn.innerHTML = "свернуть"
//   } else {
//     showMoreBtn.innerHTML = "показать еще"
//   }
// }

// if(showMoreBtn && moreContainer) {
//   showMoreBtn.addEventListener("click", showMore, true);
// }


// SHOWMORE 2

const togglers = document.querySelectorAll('.toggler');
console.log(togglers);

togglers.forEach(function(el) {
  el.addEventListener('click', function(e) {
    //const content = el.innerHTML;
    //console.log(content);
    el.previousElementSibling.classList.toggle('hidden');

    if (el.previousElementSibling.classList.contains('hidden')){
      el.innerHTML = "показать все характеристики"
    } else {
      el.innerHTML = "свернуть"
    }

  })
});


// scroll to top

/** Scroll to top button implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

/* begin begin Back to Top button  */
(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -50);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */


var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};


// tiny-slider initialisation
var sliders = document.querySelectorAll('.slider');
forEach(sliders, function (index, value) {
  // now fetch YOUR-SLUG from html (use value.getAttribute('data-name') for < IE10 support)
  let thumbnail = value.dataset.name;
  let slider = tns({
    container: value,
    navContainer: '.slider__' + thumbnail,
    navAsThumbnails: true,
    "controls": false,
    "items": 1
    // more options ..
  });
})


// Simple sticky nav in plain JS
// p.s. this is just a short example, you should remember to debounce the scroll event ;-)
if ("addEventListener" in window && "classList" in document.documentElement) {

  var element = document.querySelector(".topnav-area"),
    offset = element.offsetTop;

  window.addEventListener("scroll", function () {
    if (offset < window.pageYOffset) {
      element.classList.add("fixed");
    } else {
      element.classList.remove("fixed");
    }
  }, false);

}

