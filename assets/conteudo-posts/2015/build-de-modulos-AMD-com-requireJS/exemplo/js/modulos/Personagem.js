define(function(require) {
    "use strict";

    //dependencias do modulo
    var Sprite = require("js/modulos/Sprite");
    //======================

    var Personagem = function (config) {
        this.dificuldade = 999999;
        this.descricao = config.descricao;
        this.sprite = new Sprite({
            objImg: config.objImg
        });
    };

    Personagem.prototype = {
        constructor: Personagem,

        soltaPoder: function() {

        },

        init: function() {
            console.log("init: Personagem");
        }
    };

    return Personagem;
});
