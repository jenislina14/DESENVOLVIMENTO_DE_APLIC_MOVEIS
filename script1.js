// Função para adicionar item ao carrinho
function adicionarAoCarrinho(item) {
    // Obter o carrinho atual
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    // Adicionar o item ao carrinho
    carrinho.push(item);
  
    // Salvar o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    // Atualizar a página de carrinho
    window.location.href = 'carrinho.html';
  }
  
  // Função para remover item do carrinho
  function removerDoCarrinho(item) {
    // Obter o carrinho atual
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    // Remover o item do carrinho
    const index = carrinho.indexOf(item);
    if (index !== -1) {
      carrinho.splice(index, 1);
    }
  
    // Salvar o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    // Atualizar a página de carrinho
    window.location.href = 'carrinho.html';
  }
  
  // Adicionar evento de clique aos botões de adicionar ao carrinho
  document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', () => {
      const item = {
        nome: button.parentNode.querySelector('h2').textContent,
        descricao: button.parentNode.querySelector('p').textContent,
        quantidade: 1
      };
      adicionarAoCarrinho(item);
    });
  });
  
  // Adicionar evento de clique aos botões de remover do carrinho
  document.querySelectorAll('.remover-carrinho').forEach(button => {
    button.addEventListener('click', () => {
      const item = {
        nome: button.parentNode.querySelector('h2').textContent,
        descricao: button.parentNode.querySelector('p').textContent,
        quantidade: 1
      };
      removerDoCarrinho(item);
    });
  });
  
  // Atualizar a página de carrinho com os itens do carrinho
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="imagem1.jpg" alt="Imagem 1">
      <h2>${item.nome}</h2>
      <p>Quantidade: ${item.quantidade}</p>
      <button class="remover-carrinho">Remover</button>
    `;
    document.querySelector('.carrinho-container ul').appendChild(li);
  });