// ==UserScript==
// @name         XiaoBingRemover
// @namespace    https://github.com/L0serQianXia
// @version      0.1
// @description  Let's do something to XiaoBing
// @author       QianXia
// @match        https://cn.bing.com/search?*
// @icon         https://www.google.com/s2/favicons?domain=bing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    removeXiaoBing();

    function removeXiaoBing(){
        var content;
        var xiaoBing;
        document.body.childNodes.forEach(function(name){
            if(name.id != "b_content"){
                return;
            }
            content = name;
        });

        content.childNodes.forEach(function(name){
            if(name.id != "ev_talkbox_wrapper"){
                return;
            }
            xiaoBing = name;
        });

        try{
            // 如果xiaoBing为undefined就是未加载好，抛出异常
            xiaoBing.innerHTML = "";
            console.info("XiaoBing Removed!")
        }catch(e){
            // 1s后运行removeXiaoBing()
            setTimeout(removeXiaoBing, 1000)
            console.debug("Retry to remove XiaoBing...")
        }
    }
})();