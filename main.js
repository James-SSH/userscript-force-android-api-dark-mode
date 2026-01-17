// ==UserScript==
// @name         Force Dark Android API Reference
// @namespace    http://tampermonkey.net/
// @version      2026-01-17
// @description  Force dark mode on the API android reference
// @author       James-SSH
// @match        https://developer.android.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=android.com
// @grant        none
// @run-at      document-end
// @run-in     normal-tabs
// ==/UserScript==

(function() {
    'use strict';

    var path = document.location.pathname.slice(0, document.location.pathname.lastIndexOf("/"))

    for (let cookie of document.cookie.split("; ")) {
        let [key, value] = cookie.split("=", 2);
        if (key == "devsite-appearance-cookie") {
            if (value != "dark") {
                document.cookie = `devsite-appearance-cookie=dark; expires=Session;path=${path}`;
                window.location.reload();
            } else {
                return;
            }
        }
    }
})();