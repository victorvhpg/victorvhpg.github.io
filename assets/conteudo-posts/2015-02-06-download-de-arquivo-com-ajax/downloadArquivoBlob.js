var downloadArquivo = (function() {
    "use strict";
    //retorna uma Promise que faz  download de urlArquivo com responseType  blob
    //resolve a Promise com o blob do arquivo
    var downloadArquivo = function(urlArquivo, fnProgresso) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", urlArquivo, true);
            //setar o responseType para blob
            xhr.responseType = "blob";
            //quando a requisicao completar
            xhr.addEventListener("load", function() {
                //se nao for 200 entao deu algum erro
                if (this.status !== 200) {
                    reject("Erro ajax: " + this.statusText);
                    return;
                }
                //devido ao responseType ser "blob"
                //o this.response ja esta "parseado" e eh um
                //blob
                console.log(this.response instanceof Blob); // true
                var blob = this.response;
                if (blob) {
                    resolve(blob);
                } else {
                    reject("blob vazio");
                }
            }, false);

            xhr.addEventListener("progress", function(e) {
                if (fnProgresso) {
                    if (e.lengthComputable && e.total > 0) {
                         console.log(e.loaded, e.total, (100 * e.loaded) / e.total);
                        fnProgresso(e.loaded, e.total, (100 * e.loaded) / e.total);
                    }else{
                        console.log("nao foi possivel obter tamanho total") ;
                    }
                }
            }, false);

            //quando ocorrer algum erro  na requisicao
            xhr.addEventListener("error", function() {
                console.log("error", arguments);
                console.log(this);
                reject("Erro no ajax");
            }, false);

            xhr.send(null);
        });
    };
    return downloadArquivo;
})();