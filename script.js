// Função para atualizar a lista de itens no carrinho
function atualizarCarrinho() {
    let carrinho = document.getElementById('carrinho');
    carrinho.innerHTML = '';

    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let item = document.createElement('div');
        item.classList.add('carrinho-item');

        let nome = document.createElement('div');
        nome.classList.add('carrinho-item-nome');
        nome.textContent = produto.nome;
        item.appendChild(nome);

        let preco = document.createElement('div');
        preco.classList.add('carrinho-item-preco');
        preco.textContent = `R$ ${produto.preco.toFixed(2)}`;
        item.appendChild(preco);

        let quantidade = document.createElement('input');
        quantidade.type = 'number';
        quantidade.min = 1;
        quantidade.value = produto.quantidade;
        quantidade.addEventListener('change', function() {
            produto.quantidade = parseInt(this.value);
            atualizarCarrinho();
        });
        item.appendChild(quantidade);

        let remover = document.createElement('button');
        remover.textContent = 'Remover';
        remover.addEventListener('click', function() {
            produtos.splice(i, 1);
            atualizarCarrinho();
        });
        item.appendChild(remover);

        carrinho.appendChild(item);

        total += produto.preco * produto.quantidade;
    }

    let totalElement = document.createElement('div');
    totalElement.classList.add('carrinho-total');
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    carrinho.appendChild(totalElement);
}

// Função para adicionar um produto ao carrinho
function adicionarProduto(nome, preco) {
    produtos.push({ nome, preco, quantidade: 1 });
    
    atualizarCarrinho();
}

// Adicione aqui os produtos
let produtosDisponiveis = [
    { nome: 'Produto 1', preco: 10.99 },
    { nome: 'Produto 2', preco: 5.99 },
    { nome: 'Produto 3', preco: 7.99 }
];

// Crie os botões para adicionar produtos ao carrinho
let produtosElement = document.getElementById('produtos');
for (let i = 0; i < produtosDisponiveis.length; i++) {
    let produto = produtosDisponiveis[i];
    let botao = document.createElement('button');
    botao.textContent = `Adicionar ${produto.nome} ao carrinho`;
    botao.addEventListener('click', function() {
        adicionarProduto(produto.nome, produto.preco);
    });
    produtosElement.appendChild(botao);
}