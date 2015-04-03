define(function(require) {
    "use strict";

    var Fase = function (config) {
        this.dificuldade = 999999;
        this.descricao = config.descricao;
    };

    Fase.prototype = {
        constructor: Fase,

        renderiza: function() {

        },

        init: function() {
            console.log("init: Fase");
        }
    };

    return Fase;
});
