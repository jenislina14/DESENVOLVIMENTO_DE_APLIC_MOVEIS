Funcionalidades: 
1. Adição de Produtos ao Carrinho:
- Os usuários podem adicionar novos produtos ao carrinho clicando no botão “Adicionar ao Carrinho” ao 
lado de cada produto. - Cada produto possui um nome e um preço, que serão exibidos na interface do usuário. 
- Quando um produto é adicionado, ele aparece na lista de itens no carrinho. 

2. Consulta de Produtos no Carrinho: 
- O carrinho de compras exibe uma lista de todos os produtos adicionados. 
- Para cada produto no carrinho, são exibidos o nome, preço e a quantidade. 
- O preço total do carrinho é calculado e exibido automaticamente. 

3. Edição da Quantidade de Produtos: 
- Os usuários podem alterar a quantidade de qualquer produto no carrinho. 
- Ao clicar em "Editar", o usuário poderá modificar a quantidade diretamente. 
- Após a edição, o total é atualizado para refletir o novo valor. 

4. Remoção de Produtos do Carrinho: 
- Os usuários podem remover produtos do carrinho clicando no botão “Remover”. 
- Ao remover um produto, ele desaparece da lista de itens no carrinho e o total é recalculado. 

Implementação: 
1. Lista de Produtos Disponíveis: 
Será criada uma lista com produtos predefinidos, contendo informações como nome e preço. 
2. Carrinho de Compras: 
O estado será gerenciado com `useState` para armazenar os produtos adicionados ao carrinho e suas quantidades.  
3. Funções de Adição, Edição e Remoção:
Através de eventos de clique, o usuário poderá adicionar, editar a quantidade ou remover produtos do carrinho. 
4. Exibição Total do Carrinho: 
O preço total dos itens será calculado com base na quantidade de produtos no carrinho e exibido dinamicamente.