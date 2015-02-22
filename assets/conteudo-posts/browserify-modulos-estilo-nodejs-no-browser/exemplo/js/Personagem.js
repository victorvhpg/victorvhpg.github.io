"use strict";
//dependencias do modulo
var Poder = require("./Poder");

var Personagem = function(n) {
    this.nome = n;
    this.poder = new Poder("normal");
};

Personagem.prototype = {
    constructor: Personagem,

    soltarPoder: function() {
        this.poder.soltarPoder();
    },

    falar: function(msg) {
        console.log("[" + this.nome + "]: " + msg);
    }
};

//exportando o constructor Personagem
module.exports = Personagem;