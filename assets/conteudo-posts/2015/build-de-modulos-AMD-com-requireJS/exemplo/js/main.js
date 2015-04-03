/*!
 * @victorvhpg
 * #databuild
 */
define(function(require) {
    "use strict";

    //dependencias do modulo
    var Jogo = require("js/modulos/Jogo");
    //======================

    var jogo = new Jogo({
        //...
    });

    return ({

        init: function() {
            console.log("### init...");
            jogo.init();

            return this;
        }

    }).init();

});
