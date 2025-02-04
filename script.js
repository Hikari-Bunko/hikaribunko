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

function searchFunction() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toLowerCase();
            const productItems = document.querySelectorAll('.product-item');

            productItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                if (title.includes(filter)) {
                    item.style.display = ""; // Tampilkan item
                } else {
                    item.style.display = "none"; // Sembunyikan item
                }
            });
        }
