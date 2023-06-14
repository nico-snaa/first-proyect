var cartItems = [];

function addToCart(productId) {
  cartItems.push(productId);
  updateCart();
}

function updateCart() {
  var cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  for (var i = 0; i < cartItems.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = 'Producto ' + cartItems[i];
    cartList.appendChild(listItem);
  }
}

function checkout() {
  // Lógica de pago
  alert('Gracias por tu compra!');
  cartItems = [];
  updateCart();
}
