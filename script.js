document.addEventListener('DOMContentLoaded', () => {
    const showFactBtn = document.getElementById('showFactBtn');
    const cultureFactElement = document.getElementById('cultureFact');

    // Array fakta budaya
    const facts = [
        "Indonesia memiliki lebih dari 17.000 pulau, yang menghasilkan keragaman budaya yang luar biasa.",
        "Bahasa Indonesia adalah bahasa nasional, tetapi terdapat lebih dari 700 bahasa daerah yang berbeda!",
        "Wayang Kulit, seni pertunjukan bayangan dari Jawa, telah diakui oleh UNESCO sebagai Masterpiece of Oral and Intangible Heritage of Humanity.",
        "Pencak Silat adalah seni bela diri tradisional Indonesia yang berasal dari dua kata: 'pencak' (gerakan) dan 'silat' (pertempuran).",
        "Subak, sistem irigasi tradisional Bali, adalah Warisan Dunia UNESCO yang mencerminkan filosofi Tri Hita Karana."
    ];

    // Fungsi untuk menampilkan fakta acak
    function displayRandomFact() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        cultureFactElement.textContent = facts[randomIndex];
    }

    // Event listener untuk tombol
    showFactBtn.addEventListener('click', displayRandomFact);

    // Tampilkan fakta pertama saat halaman dimuat (opsional)
    displayRandomFact();
});