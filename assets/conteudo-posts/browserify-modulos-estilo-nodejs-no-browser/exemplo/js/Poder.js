"use strict";

var Poder = function(tipo) {
    this.tipo = tipo;
};

Poder.prototype = {
    constructor: Poder,
    soltarPoder: function() {
        console.log("[Poder.soltarPoder]: " + this.tipo);
    }
};

//exportando o constructor Poder
module.exports = Poder;