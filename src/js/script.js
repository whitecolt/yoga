window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';
    let tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        form = require('./parts/form'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider'),
        calc = require('./parts/calc');

    tabs();
    timer();
    form();
    modal();
    slider();
    calc();
});


