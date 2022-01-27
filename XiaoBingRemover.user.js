// ==UserScript==
// @name         XiaoBingRemover
// @namespace    https://github.com/L0serQianXia
// @version      0.2
// @description  Let's do something to XiaoBing
// @author       QianXia
// @match        https://cn.bing.com/search?*
// @icon         https://www.google.com/s2/favicons?domain=bing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    removeXiaoBing();

    var times = 0;
    function removeXiaoBing(){
        try{
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
            xiaoBing.innerHTML = "";
            console.info("XiaoBing Removed!")
        }catch(e){
            // 1s后运行removeXiaoBing()
            if(times > 100){
                //50s passed(500ms * 100)
                return;
            }
            setTimeout(removeXiaoBing, 500)
            console.debug("Retry to remove XiaoBing...")
            times++;
        }
    }
})();
