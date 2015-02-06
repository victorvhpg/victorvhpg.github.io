(function(downloadArquivo, NumeroMagicoJS) {
    "use strict";


    document.addEventListener("DOMContentLoaded", function() {
        //faz  download do arquivo 'teste.zip' como ArrayBuffer
        //le o ArrayBuffer atraves do DataView buscando o numero magico
        //do arquivo
        downloadArquivo("./teste.zip").then(function(arrayBuffer) {
            //transforma em DataView para oder manipular os bytes
            var dataView = new DataView(arrayBuffer);
            var numeroMagicoArquivo = (new NumeroMagicoJS()).getArqNumeroMagicoArquivo(dataView);
            if (numeroMagicoArquivo) {
                console.log("numeroMagicoArquivo", numeroMagicoArquivo);
                console.log("Tipo: " + numeroMagicoArquivo.tipo);
                console.log("Numero Magico: " + numeroMagicoArquivo.numeroMagico.map(function(n) {
                    return n.toString(16);
                }));
                document.querySelector("#log").innerHTML = JSON.stringify(numeroMagicoArquivo,null,2);
            } else {
                throw new Error("Não foi possivel identificar o numero magico do arquivo");
            }

        }).catch(function(erro) {
            console.log(erro);
        });

    }, false);

})(downloadArquivo, NumeroMagicoJS);