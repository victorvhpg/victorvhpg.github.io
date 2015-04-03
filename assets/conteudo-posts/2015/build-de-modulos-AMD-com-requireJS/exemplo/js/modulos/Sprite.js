define(function(require) {
    "use strict";

    var Sprite = function(config) {
        this.objImg = config.objImg;
        this.animacoes = config.animacoes;
    };

    Sprite.prototype = {
        constructor: Sprite,

        atualiza: function(deltaTime) {
            console.log(deltaTime);
        },

        renderiza: function(fps) {

        },

        init: function() {
            console.log("init: Sprite");
        }
    };

    return Sprite;
});
