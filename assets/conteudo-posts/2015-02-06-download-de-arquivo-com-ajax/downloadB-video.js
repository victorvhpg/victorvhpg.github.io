(function(downloadArquivo) {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        downloadArquivo("./video.ogv").then(function(blob) {
            //cria o elemento video
            var video = document.createElement("video");
            video.autoplay = true;
            //cria uma URL para o video  // blob: xxxxxxx
            video.src = window.URL.createObjectURL(blob);
            //apos o video arregar  pode remover url window.URL.revokeObjectURL(video.src);
            //coloca o video no body
            document.querySelector("body").appendChild(video);
            document.querySelector("#url").innerHTML = "URL do video: <a href='" + video.src+"' target='_blank'>" + video.src+"</a>";
        }).catch(function(erro) {
            console.log(erro);
        });
    }, false);


})(downloadArquivo);