// ==UserScript==
// @name         Force Dark Android API Reference
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @updateURL https://raw.githubusercontent.com/James-SSH/userscript-force-android-api-dark-mode/refs/heads/main/main.js
// @downloadURL https://raw.githubusercontent.com/James-SSH/userscript-force-android-api-dark-mode/refs/heads/main/main.js
// @description  Force dark mode on the API android reference
// @author       James-SSH
// @match        https://developer.android.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=android.com
// @grant        none
// @run-at      document-end
// @run-in     normal-tabs
// @tag android
// @tag darkmode
// ==/UserScript==

(function() {
    'use strict';

    const path = document.location.pathname.slice(0, document.location.pathname.lastIndexOf("/"));

    const cookies = document.cookie.split("; ");
    const darkModeCookie = cookies.find((c) => c.split("=")[0] == "devsite-appearance-cookie")

    if (darkModeCookie == undefined || darkModeCookie.split("=")[1] != 'dark') {
        document.cookie = `devsite-appearance-cookie=dark;expires=Session;path=${path}`;
        window.location.reload();
    }
})();
