// ==UserScript==
// @name         EFT Subreddit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Killa invades r/place!
// @author       RealLifeDeadpool
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Grunt5419/EFT-r-place/blob/main/killa.user.js
// @downloadURL  https://github.com/Grunt5419/EFT-r-place/raw/main/killa.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("killa-art")[0].shadowRoot.children[0].getElementsByTagName("killa-pixel-art-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://preview.redd.it/92qostxagwz51.png?width=763&auto=webp&s=708aff54a83a471403c150cadc6e61ad766b83b7";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 775px;height: 780px;";
            console.log(i);
            
            return i;
        })())

    }, false);
}