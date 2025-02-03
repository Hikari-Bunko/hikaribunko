document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').value;
    const productLink = document.getElementById('productLink').value;

    const productList = document.getElementById('productList');
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <h2>${productName}</h2>
        <p>${productDescription}</p>
        <img src="${productImage}" alt="${productName}">
        <p><a href="${productLink}" target="_blank" class="product-link">Lihat Produk</a></p>
    `;
    productList.appendChild(productItem);

    // Reset form
    document.getElementById('productForm').reset();
});
