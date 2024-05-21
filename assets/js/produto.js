function adicionarAoCarrinho() {
  // Obtenha os detalhes do produto
  window.location = "carrinho.html"
  const productImage = '../assets/img/shop/1.jpg';
  const productDescription = 'Camiseta Masculina Básica';
  const productPrice = 38.00;
  const productQuantity = 1;
  window.location = "carrinho.html"
  // Adicione o item ao carrinho
  addItemToCart(productImage, productDescription, productPrice, productQuantity);
}

function addItemToCart(productImage, productDescription, productPrice, productQuantity) {
  const cartBody = document.querySelector('#cart-table tbody'); // Seleciona o corpo da tabela do carrinho

  // Criação de uma nova linha
  const newRow = document.createElement('tr');

  // Criação de células para a nova linha
  const imgCell = document.createElement('td');
  const descCell = document.createElement('td');
  const priceCell = document.createElement('td');
  const qtyCell = document.createElement('td');
  const removeCell = document.createElement('td');
  const totalCell = document.createElement('td');

  // Preenchimento das células com dados
  imgCell.innerHTML = `<img src="${productImage}" alt="" />`;
  descCell.innerHTML = `<h6>${productDescription}</h6>`;
  priceCell.innerHTML = `<h6><b>R$${productPrice.toFixed(2)}</b></h6>`;
  qtyCell.innerHTML = `<input class="w-25 pl-1" value="${productQuantity}" min="1" type="number" />`;
  removeCell.innerHTML = `<a href="#" onclick="removeItemFromCart(this)"><i class="fas fa-trash-alt"></i></a>`;
  totalCell.innerHTML = `<h6><b>R$${(productPrice * productQuantity).toFixed(2)}</b></h6>`;

  // Adição das células à linha
  newRow.appendChild(imgCell);
  newRow.appendChild(descCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(qtyCell);
  newRow.appendChild(removeCell);
  newRow.appendChild(totalCell);

  // Adição da nova linha ao corpo da tabela
  cartBody.appendChild(newRow);
}

function removeItemFromCart(removeButton) {
  const row = removeButton.closest('tr');
  row.remove();
}
