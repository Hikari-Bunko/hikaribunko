// Menampilkan tombol "Kembali ke Atas" saat menggulir
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Mengatur fungsi untuk kembali ke atas saat tombol diklik
document.getElementById('backToTop').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// Fitur Pencarian
document.getElementById('searchButton').onclick = function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productName = item.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            item.style.display = 'block'; // Tampilkan produk yang cocok
        } else {
            item.style.display = 'none'; // Sembunyikan produk yang tidak cocok
        }
    });
};

// Fitur Keranjang Belanja
const cartItems = [];
let total = 0;

document.querySelectorAll('.product-item').forEach(item => {
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Tambahkan ke Keranjang';
    addToCartButton.classList.add('add-to-cart');
    item.appendChild(addToCartButton);

    addToCartButton.onclick = function() {
        const productName = item.querySelector('h3').textContent;
        const productPrice = 100; // Ganti dengan harga produk yang sesuai
        cartItems.push({ name: productName, price: productPrice });
        total += productPrice;

        updateCart();
    };
});

function updateCart() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Kosongkan daftar keranjang

    cartItems.forEach(item => {
        const li = document.createElement(' li');
        li.textContent = `${item.name} - ${item.price} IDR`;
        cartItemsList.appendChild(li);
    });

    document.getElementById('totalPrice').textContent = total;
}

// Fungsi untuk checkout
document.getElementById('checkoutButton').onclick = function() {
    alert('Terima kasih telah berbelanja! Total Anda adalah ' + total + ' IDR.');
    // Reset keranjang setelah checkout
    cartItems.length = 0;
    total = 0;
    updateCart();
};
