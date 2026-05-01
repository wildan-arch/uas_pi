// fungsi agar setiap load berada diatas
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
// fungsi putar preview lagu artis
function playAudio(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.volume = 0.8;

  // Menangani "Promise" dari play() agar tidak muncul error di konsol
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        // Audio berhasil diputar
      })
      .catch((error) => {
        // Autoplay diblokir, tampilkan pesan atau abaikan diam-diam
        console.log("Menunggu interaksi pengguna untuk memutar suara.");
      });
  }
}

function stopAudio(id) {
  const audio = document.getElementById(id);
  audio.pause();
}
// logika countdown timer
const countdownDate = new Date("June 15, 2026 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "FESTIVAL STARTED!";
  }
}, 1000);

// menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function (e) {
  e.preventDefault();
  const isActive = nav.classList.toggle("active");

  // Opsional: Update aksesibilitas
  menuToggle.setAttribute("aria-expanded", isActive);
});

document.addEventListener("click", function (event) {
  // Jika menu sedang aktif dan yang diklik bukan bagian dari nav/toggle
  if (nav.classList.contains("active") && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
