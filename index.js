// ==UserScript==
// @name         Cheat TLU
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://itest.tlu.edu.vn
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const chatboxElement = document.createElement('div');
    chatboxElement.innerHTML = `
    <div style="position: fixed; left: 0; bottom: 20px; background: white;" id="cheat_chatbox">
        <iframe src="https://organizations.minnit.chat/711179377742719/Main" width='450' height='350'></iframe>
        <br>
    </div>`;
    document.body.appendChild(chatboxElement);

    const toggleChatbox = () => {
        const cheatFrame = document.getElementById('cheat_chatbox');
        console.log('cheat frame', cheatFrame);
        const visibility = cheatFrame.style.visibility;
        if (visibility === 'visible') {
            cheatFrame.style.visibility = 'hidden';
        } else {
            cheatFrame.style.visibility = 'visible';
        }
    };

    document.onkeypress = function (e) {
        e = e || window.event;
        // use e.keyCode
        console.log(e);
        if (e.code === 'Space') {
            toggleChatbox();
        }
    };
})();

// https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=vi
