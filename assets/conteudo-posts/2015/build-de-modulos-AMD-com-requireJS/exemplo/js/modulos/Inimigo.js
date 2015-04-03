define(function(require) {
    "use strict";

    //dependencias do modulo
    var Sprite = require("js/modulos/Sprite");
    //======================

    var Inimigo = function (config) {
        this.velocidade = config.velocidade;
        this.nivel = config.nivel;
        this.nome = config.nome;
        this.sprite = new Sprite({
            objImg: config.objImg
        });
    };

    Inimigo.prototype = {
        constructor: Inimigo,

        atacar: function(poder) {
            console.log("******" + poder);
        },

        init: function(algumValor) {
            var algumaCoisa = 1;
            var teste = algumValor + algumaCoisa;
            var teste2 = teste + "oi";
            console.log("init: Inimigo");
        }
    };

    return Inimigo;
});
