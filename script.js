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
