
// DESAFIO
// const formulario = document.querySelector('#frmEncomenda');
// const campoNome = formulario.querySelector('#nome');
// const campoQuantidade = formulario.querySelector('#qtde');
// const campoUnit = formulario.querySelector('#valor');
// const campoProduto = formulario.querySelector('.Selects'); // Corrigido: é uma *class*, não um id
// const corpoTabela = document.querySelector('#tabela-clientes');

// function formataValor(valor) {
//   return `R$ ${Number(valor).toFixed(2).replace('.', ',')}`;
// }

// function calculaTotal(qtde, unit) {
//   return formataValor(qtde * unit);
// }

// function adicionaLinha(nome, prod, qtde, valor, total) {
//   const linha = document.createElement('tr');
//   linha.classList.add('cliente');

//   linha.innerHTML = `
//     <td class="nome">${nome}</td>
//     <td class="produto">${prod}</td>
//     <td class="qtde">${qtde}</td>
//     <td class="unitario">${valor}</td>
//     <td class="total">${total}</td>
//   `;

//   corpoTabela.appendChild(linha);
// }

// formulario.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const nome = campoNome.value.trim();
//   const qtde = parseInt(campoQuantidade.value);
//   const valor = parseFloat(campoUnit.value);
//   const produto = campoProduto.value;

//   // Validação básica
//   if (!nome || !qtde || !valor || produto === "null") {
//     alert('Por favor, preencha todos os campos corretamente.');
//     return;
//   }

//   const total = calculaTotal(qtde, valor);

//   adicionaLinha(nome, produto, qtde, formataValor(valor), total);

//   formulario.reset(); // Limpa os campos
// });


// RESOLUÇÃO
var botaoAdicionar = document.querySelector("#botao_form")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // Captura o formulário
    var form = document.querySelector("#frmEncomenda");

    // Captura nova encomenda
    var novaEncomenda = obtemEncomenda(form);

    // Adiciona a encomenda
    adicionaEncomendaTabela(novaEncomenda);

    // Captura a tabela de encomendas
    // var tabela = document.querySelector("#tabela-clientes")

    // Insere a nova encomenda na tabela
    // tabela.appendChild(montaTR(novaEncomenda));

    // Limpa o formulário
    form.reset();
});

// Função para adicionar nova encomenda na tabela
function adicionaEncomendaTabela(dadosEncomenda){
    // Captura a tabela de encomendas
    var tabela = document.querySelector("#tabela-clientes")

    // Insere a nova encomenda na tabela
    tabela.appendChild(montaTR(dadosEncomenda));
} 

// Captura os dados do formulário
function obtemEncomenda(formulario){
    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        qtde: formulario.qtde.value,
        unitario: formulario.unitario.value,
    }
    return encomenda;
}

// Função para criar nova linha
function montaTR(dadosNovaEncomenda){
    var linha = document.createElement('tr');

    linha.appendChild(montaTD(dadosNovaEncomenda.nome));
    linha.appendChild(montaTD(dadosNovaEncomenda.produto));
    linha.appendChild(montaTD(dadosNovaEncomenda.qtde));
    linha.appendChild(montaTD(formataValor(dadosNovaEncomenda.unitario)));
    linha.appendChild(montaTD(calculaTotal(dadosNovaEncomenda.qtde, dadosNovaEncomenda.unitario)));
    return linha;
}
// Função para criar nova coluna
function montaTD(dadoColuna){
    var coluna = document.createElement('td');
    coluna.textContent = dadoColuna;
    return coluna;
}