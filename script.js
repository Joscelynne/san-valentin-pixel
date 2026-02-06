let currentScreen = 0;
const screens = document.querySelectorAll(".screen");

// sonidos
const clickSound = new Audio("assets/click.mp3");
clickSound.volume = 0.4;

// música de fondo
const bgMusic = new Audio("assets/music.mp3");
bgMusic.volume = 0.2;
bgMusic.loop = true;
let musicOn = true;

// config menu
const configBtn = document.getElementById("config-btn");
const configMenu = document.getElementById("config-menu");
const closeConfig = document.getElementById("close-config");
const musicToggle = document.getElementById("music-toggle");

// cambiar pantallas
function nextScreen() {
  if (currentScreen === 0 && musicOn) {
    bgMusic.play();
  }

  clickSound.currentTime = 0;
  clickSound.play();

  screens[currentScreen].classList.remove("active");
  currentScreen++;

  if (currentScreen < screens.length) {
    screens[currentScreen].classList.add("active");
  }
}

// abrir config
configBtn.addEventListener("click", () => {
  clickSound.play();
  configMenu.classList.remove("hidden");
});

// cerrar config
closeConfig.addEventListener("click", () => {
  clickSound.play();
  configMenu.classList.add("hidden");
});

// toggle música
musicToggle.addEventListener("click", () => {
  clickSound.play();

  musicOn = !musicOn;

  if (musicOn) {
    bgMusic.play();
    musicToggle.textContent = "🎵 Música: ON";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🎵 Música: OFF";
  }
});