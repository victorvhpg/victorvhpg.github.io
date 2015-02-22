"use strict";
//dependencias do modulo
var Personagem = require("./Personagem");
var qualquerCoisa = require("./qualquerCoisa");
//modulo do npm
var jQuery = require("jquery");

var app = {

    init: function() {
        console.log("app init()");
        var p1 = new Personagem("Personagem 1");
        p1.soltarPoder();
        p1.falar("Oi pessoal");
        qualquerCoisa.fazAlgo();
        console.log("qualquerCoisa: ", qualquerCoisa);
        jQuery(function($) {
            console.log("jQuery");
        });
    }
};

app.init();