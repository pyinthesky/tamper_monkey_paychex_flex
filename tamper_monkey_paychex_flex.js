// ==UserScript==
// @name         PayChex
// @namespace    https://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://myapps.paychex.com/landing_remote/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        Array.from(document.getElementsByClassName('timeCardTruncate tooltipstered')).forEach((el) => {
        const t = el.getAttribute('png-tooltip');



            if(t) {
                const str = t.replace(/(.*?\/){3}/, '');
                el.textContent = str.replace(' /', '');
                el.style = "overflow: visible";
            }



       });



        Array.from(document.getElementsByClassName('punch-widget-container-margin')).forEach((el) => {
            if(el.getAttribute('data-payxautoid')) {
               el.remove();
            }
        });
         Array.from(document.getElementsByClassName('timecard-in-out-col')).forEach((el) => el.remove() );
         Array.from(document.getElementsByClassName('timecard-punch-type-col')).forEach((el) => el.remove() );



    }, 10000);
})();
