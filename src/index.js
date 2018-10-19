console.log('hello world');
import './scss/main.scss';
import './scss/fonts.css';

import './js/a.js';


import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
  container: '.main-slider',
  "items": 1,
  "speed": 400,
  controls: true,
  "controlsContainer": ".main-slider__controls",
  nav: false
});


