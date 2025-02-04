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

let currentPage = 1;
const itemsPerPage = 2; // Jumlah produk per halaman
let filteredProducts = []; // Array untuk menyimpan produk yang difilter

function displayProducts() {
    const productItems = document.querySelectorAll('.product-item');
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    // Sembunyikan semua produk
    productItems.forEach(item => item.style.display = 'none');

    // Hitung indeks awal dan akhir untuk produk yang akan ditampilkan
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Tampilkan produk untuk halaman saat ini
    for (let i = start; i < end && i < filteredProducts.length; i++) {
        const productIndex = Array.from(productItems).indexOf(filteredProducts[i]);
        productItems[productIndex].style.display = 'block';
    }

    // Tampilkan pagination
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.onclick = function() {
            currentPage = i;
            displayProducts();
        };
        pagination.appendChild(button);
    }
}

function searchFunction() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    filteredProducts = Array.from(productItems).filter(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        return title.includes(filter); // Menyimpan produk yang sesuai dengan filter
    });

    // Reset pagination setelah pencarian
    currentPage = 1;
    displayProducts();
}

// Panggil fungsi untuk menampilkan produk saat halaman dimuat
displayProducts();
