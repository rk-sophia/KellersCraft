// document.querySelector(".total").textContent = document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent
// Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// Passa por todas as encomendas e calcula o valor total
for (var count=0; count < clientes.length; count ++){
    clientes[count].querySelector(".total").textContent = 
    clientes[count].querySelector(".qtde").textContent * 
    clientes[count].querySelector(".unitario").textContent
}