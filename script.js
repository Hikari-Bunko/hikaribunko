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
