define(function(require) {
    "use strict";

    //dependencias do modulo
    var Sprite = require("js/modulos/Sprite");
    var Fase = require("js/modulos/Fase");
    var Personagem = require("js/modulos/Personagem");
    var Inimigo = require("js/modulos/Inimigo");
    var libDeTerceiros = require("libDeTerceiros");
    //======================

    var Jogo = function (config) {
        this.personagem = new Personagem({
            descricao: "p1"
        });

        this.inimigo = new Inimigo({
            //...
        });

        this.fundoSprite = new Sprite({
            objImg: config.objImg
        });

        this.fases = [new Fase({
            //...
        }), new Fase({
            //...
        })];
    };

    Jogo.prototype = {
        constructor: Jogo,

        loop: function() {
            //...
        },

        init: function() {
            console.log("init: Jogo");
            this.loop();
            this.fases[0].init();
            this.personagem.init();
            this.inimigo.init();
            this.fundoSprite.init();
            libDeTerceiros.init();
        }
    };

    return Jogo;
});
