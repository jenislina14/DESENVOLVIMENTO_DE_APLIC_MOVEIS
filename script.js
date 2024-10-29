const cart = [];

        function addToCart(name, price) {
            const existingProduct = cart.find(item => item.name === name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        }

        function updateCart() {
            const cartItemsDiv = document.getElementById('cart-items');
            cartItemsDiv.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                total += item.price * item.quantity;
                cartItemsDiv.innerHTML += `
                    <div class="cart-item">
                        <span>${item.name} - R$ ${item.price.toFixed(2)} (Quantidade: ${item.quantity})</span>
                        <button onclick="removeFromCart('${item.name}')">Remover</button>
                    </div>
                `;
            });

            document.getElementById('total-price').innerText = `Total: R$ ${total.toFixed(2)}`;
        }

        function removeFromCart(name) {
            const index = cart.findIndex(item => item.name === name);
            if (index > -1) {
                cart.splice(index, 1);
            }
            updateCart();
        }
   function updateQuantity(name) {
            const quantityInput = document.getElementById(`quantity-${name}`);
            const newQuantity = parseInt(quantityInput.value);

            const existingProduct = cart.find(item => item.name === name);
            if (existingProduct && newQuantity > 0) {
                existingProduct.quantity = newQuantity;
            }
            updateCart();
        }

  function updateCart() {
            const cartItemsDiv = document.getElementById('cart-items');
            cartItemsDiv.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                total += item.price * item.quantity;
                cartItemsDiv.innerHTML += `
                    <div class="cart-item">
                        <span>${item.name} - R$ ${item.price.toFixed(2)} (Quantidade: <input type="number" id="quantity-${item.name}" value="${item.quantity}" min="1" style="width: 50px;" /></span>
                        <button onclick="updateQuantity('${item.name}')">Editar</button>
                        <button onclick="removeFromCart('${item.name}')">Remover</button>
                    </div>
                `;
            });

            document.getElementById('total-price').innerText = `Total: R$ ${total.toFixed(2)}`;
        }

        function updateQuantity(name) {
            const quantityInput = document.getElementById(`quantity-${name}`);
            const newQuantity = parseInt(quantityInput.value);

            const existingProduct = cart.find(item => item.name === name);
            if (existingProduct && newQuantity > 0) {
                existingProduct.quantity = newQuantity;
            }
            updateCart();
        }

        function removeFromCart(name) {
            const index = cart.findIndex(item => item.name === name);
            if (index > -1) {
                cart.splice(index, 1);
            }
            updateCart();
        }
