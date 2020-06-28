// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://intel.ingress.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var current_url = document.location;
    var video_id = current_url.search.split('?ll')[1];
    var new_url = "https://intel.ingress.com/intel?ll" + video_id;
    location.replace(new_url);
})();