(function($) {
    "use strict";
    /*
    @victorvhpg
    Carrega gist na página de forma async


    Exemplo de uso:
    Em vez de usar o "embed"  gerado do gist,  coloque a URL do gist
no   atributo "data-gist"  do elemento onde você deseja exibir o gist.
    <div data-gist="https://gist.github.com/victorvhpg/33889d0611905780e253"></div>
    */

    var _CACHE = {
        ajax: {},
        css: {}
    };

    var carregaGist = {
        //retorna uma promise do jsonp que contem o gist retornado
        getGist: function(url) {
            return $.Deferred(function(promise) {
                //se ja tiver no cache entao ja resolve
                if (_CACHE.ajax[url]) {
                    promise.resolve(_CACHE.ajax[url]);
                    return;
                }
                //jsonp
                $.ajax({
                    timeout: 10000,
                    url: url + ".json",
                    dataType: "jsonp"
                }).done(function(obj) {
                    _CACHE.ajax[url] = obj;
                    promise.resolve(obj);
                }).fail(function() {
                    promise.reject("erro ao carregar Gist " + url);
                });
            }).promise();

        },
        //pega o gist e coloca o html dele na div
        montarGist: function($div) {
            var url = $div.attr("data-gist");
            $div.html("Carregando <a href='" + url + "'>Gist</a>...");
            this.getGist(url).done(function(obj) {
                if (!_CACHE.css[obj.stylesheet]) {
                    if (obj.stylesheet.indexOf("http") === 0) {
                        $("head").append("<link href='" + obj.stylesheet + "'  type='text/css' rel='stylesheet'  />");
                    } else {
                        $("head").append(obj.stylesheet);
                    }
                    _CACHE.css[obj.stylesheet] = obj.stylesheet;
                }
                $div.html($.trim(obj.div));
            }).fail(function(erros) {
                console.error(erros);
                $div.html(erros);
            });
        },

        init: function() {
            var that = this;
            //todos os elementos que tiverem o atributo data-gist serao carregados
            $("[data-gist]:not([data-gist-ok])").each(function(indice, item) {
                var $div = $(this);
                $div.attr("data-gist-ok", "ok");
                that.montarGist($div);
            });
        }
    };

    window.carregaGist = carregaGist;
})(jQuery);

carregaGist.init();
