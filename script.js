// --- JAVASCRIPT SEDERHANA ---

// 1. Logika Tab Jadwal
const tabButtons = document.querySelectorAll(".tab-btn");
// const stageContainers = document.querySelector('.stage-containers'); // Nantinya perlu wadah berbeda per hari

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hapus kelas 'active' dari semua tombol
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Tambah kelas 'active' ke tombol yang diklik
    button.classList.add("active");

    // LOGIKA TAMBAHAN: Di sini Anda perlu menambahkan logika
    // untuk mengubah konten jadwal sesuai hari yang diklik.
    console.log(`Mengubah ke jadwal: ${button.innerText}`);
  });
});

// 2. Efek Scroll Navbar (Nanti bisa ditambahkan)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(3, 0, 28, 1)"; // Menjadi solid
  } else {
    navbar.style.backgroundColor = "rgba(3, 0, 28, 0.9)"; // Transparan kembali
  }
});

// 3. Mock Fungsi Beli Tiket
const buyButtons = document.querySelectorAll(".btn-primary");
buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Fitur Pembelian Tiket sedang dikembangkan!");
  });
});
