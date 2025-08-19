// document.querySelector(".total").textContent = document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent
// Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// Passa por todas as encomendas e calcula o valor total
for (var count=0; count < clientes.length; count ++){
    // OPÇÃO 1
    // clientes[count].querySelector(".total").textContent = 
    // clientes[count].querySelector(".qtde").textContent * 
    // clientes[count].querySelector(".unitario").textContent;

    // OPÇÃO 2
    //  Quantidade da encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent;

    //  Valor unitário da encomenda
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;

    //  Quantidade da encomenda
    // clientes[count].querySelector(".total").textContent = qtde * unitario;

    // OPÇÃO 1 VALIDAÇÃO
    // Verifica se a quantidade é válida
    // if(tab_qtde >= 1  && !isNaN(tab_qtde)){
    //     clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde, tab_unitario);
    // }

    // OPÇÃO 2 VALIDAÇÃO
    if(tab_qtde < 1 || isNaN(tab_qtde)){
        // A quantidade é menor que 1 ou não é numérica
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida!";

        // Texto da quantidade em vermelho
        // clientes[count].querySelector(".qtde").style.color = "red";

        // Linha toda com texto vermelho
        // clientes[count].style.color = "red";

        // Linha toda em vermelho
        clientes[count].style.backgroundColor = "red";

    }
    // DESAFIO
        else if(tab_unitario < 1 || isNaN(tab_unitario)){
        // A quantidade é menor que 1 ou não é numérica
        clientes[count].querySelector(".unitario").textContent = "Quantidade inválida!";

        // Texto da quantidade em vermelho
        // clientes[count].querySelector(".qtde").style.color = "red";

        // Linha toda com texto vermelho
        // clientes[count].style.color = "red";

        // Linha toda em vermelho
        clientes[count].style.backgroundColor = "red";

        } else {
            // Calcula e exibe o total
            clientes[count].querySelector(".total").textContent =
             calculaTotal(tab_qtde,tab_unitario);

            // Envia formatação para o valor unitário
            clientes[count].querySelector(".total").
            textContent = formataValor(parseFloat(tab_unitario));
            
        }
    

}

// OPÇÃO 2/2
//  Função de cálculo do valor total (qtde e unit não tem a ver com a tabela mas sim os parametros e qual o conteúdo que será armazenado)
function calculaTotal(qtde, unit){
    var total=0;

    total = qtde * unit;

    return formataValor(total);
}

// Função que formata os valores em R$
function formataValor(valor){
    var valor_formatado = valor.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
    return valor_formatado
}