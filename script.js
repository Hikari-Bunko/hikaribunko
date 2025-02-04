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
let allProducts = []; // Array untuk menyimpan semua produk
let filteredProducts = []; // Array untuk menyimpan produk yang difilter

// Menyimpan semua produk ke dalam array
function initializeProducts() {
    const productItems = document.querySelectorAll('.product-item');
    allProducts = Array.from(productItems);
    filteredProducts = allProducts; // Awalnya, semua produk ditampilkan
}

// Menampilkan produk yang difilter
function displayProducts() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    // Sembunyikan semua produk
    allProducts.forEach(item => item.style.display = 'none');

    // Hitung indeks awal dan akhir untuk produk yang akan ditampilkan
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Tampilkan produk untuk halaman saat ini
    for (let i = start; i < end && i < filteredProducts.length; i++) {
        filteredProducts[i].style.display = 'block';
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

    // Filter produk berdasarkan input pencarian
    filteredProducts = allProducts.filter(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        return title.includes(filter); // Menyimpan produk yang sesuai dengan filter
    });

    // Reset pagination setelah pencarian
    currentPage = 1;
    displayProducts();
}

// Panggil fungsi untuk menginisialisasi produk saat halaman dimuat
initializeProducts();
displayProducts();
