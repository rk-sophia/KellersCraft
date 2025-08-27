var botaoAdicionar = document.querySelector("#botao_form");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Botão Clicado");

    document.createElement("tr");
    var linha = document.querySelector("tr");

    document.createElement("td");
    var coluna = document.querySelector("td");

    linha.appendChild(coluna);
    
});