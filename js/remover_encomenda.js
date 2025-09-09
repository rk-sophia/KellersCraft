var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    console.log(event.target);

    // Adiciona o efeito na linha
    event.target.parentNode.classList.add("fadeOut");

    // Atrasa a exclusão da linha para ver efeito
    setTimeout(function(){
        // Exclui a linha clicada
        event.target.parentNode.remove();
    }, 600);

});