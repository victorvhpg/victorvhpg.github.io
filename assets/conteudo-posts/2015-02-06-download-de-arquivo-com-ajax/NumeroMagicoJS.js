/*
    @victorvhpg
    https://github.com/victorvhpg/NumeroMagicoJS
*/

var NumeroMagicoJS = (function() {
    "use strict";

    // //numeros magicos de alguns formatos
    // //de arquivo
    var _numeroMagicosArquivos = [{
        tipo: "mp3",
        numeroMagicos: [
            [0x49, 0x44, 0x33],
            [0xFF, 0xFB]
        ]
    }, {
        tipo: "ogg, oga, ogv",
        numeroMagicos: [
            [0x4F, 0x67, 0x67, 0x53, 0x00, 0x02, 0x00, 0x00]
        ]
    }, {
        tipo: "arquivo compactado tipo zip",
        numeroMagicos: [
            [0x50, 0x4B, 0x03, 0x04],
            [0x50, 0x4B, 0x4C, 0x49, 0x54, 0x45],
            [0x50, 0x4B, 0x53, 0x70, 0x58],
            [0x50, 0x4B, 0x05, 0x06],
            [0x50, 0x4B, 0x07, 0x08],
            [0x57, 0x69, 0x6E, 0x5A, 0x69, 0x70]
        ]
    }];


    var NumeroMagicoJS = function(config) {
        config = config || {};
        this.tipo = config.tipo;
        this.numeroMagico = config.numeroMagico;
    };

    NumeroMagicoJS.prototype = {
        constructor: NumeroMagicoJS,

        //verifica se todos os bytesA
        //sao  iguais aos  bytesB
        bytesIguais: function(bytesA, bytesB) {
            return bytesA.length === bytesB.length &&
                bytesA.every(function(byteAtual, indiceByte) {
                    return byteAtual === bytesB[indiceByte];
                });
        },

        //metodo que le o DataView e retorna o numeroMagicoArquivo que possui
        //o mesmo  numeroMagico do dataView enviado
        getArqNumeroMagicoArquivo: function(dataView) {
            var that = this;
            var numeroMagicoArquivo = null;
            //para cada arquivo ate encontrar uma numeroMagico igual
            _numeroMagicosArquivos.some(function(arquivo, indice) {
                //para cada numeroMagico  do arquivo ate encontrar uma
                //numeroMagico  igual a do dataView
                return arquivo.numeroMagicos.some(function(numeroMagicoAtual) {
                    //le a numeroMagico do dataView ate o tamanho de
                    //bytes da numeroMagicoAtual
                    var totalDeBytes = numeroMagicoAtual.length;
                    var numeroMagicoBytes = [];
                    for (var i = 0; i < totalDeBytes; i++) {
                        numeroMagicoBytes.push(dataView.getUint8(i));
                    }
                    //verifica se todos os bytes da numeroMagicoBytes
                    //sao  iguais aos  bytes da  numeroMagicoAtual
                    //se os bytes das numeroMagicos sao iguais entao achou :)
                    if (that.bytesIguais(numeroMagicoBytes, numeroMagicoAtual)) {
                        numeroMagicoArquivo = new NumeroMagicoJS({
                            numeroMagicosArquivo: arquivo,
                            tipo: arquivo.tipo,
                            numeroMagico: numeroMagicoBytes
                        });
                        return true;
                    }
                    return false;
                });
            });
            return numeroMagicoArquivo;
        }
    };

    return NumeroMagicoJS;
})();