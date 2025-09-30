var botaoAPI = document.querySelector("#api-encomenda");

botaoAPI.addEventListener("click", function(){
    //  Consome API
    var api = new XMLHttpRequest();
    api.open("GET", "http://localhost:3000/encomendas_web");
    api.addEventListener("load", function(){
        // Formata os dados vindo do JSON
        var resposta = JSON.parse(api.responseText);

        // PAssa por cada item do JSON e adiciona na tabela
        resposta.forEach(function(encomendaAPI){
                            adicionaEncomendaTabela(encomendaAPI);
                        });
    })
    api.send();
})