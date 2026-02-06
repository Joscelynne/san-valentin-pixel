let currentScreen = 0;
const screens = document.querySelectorAll(".screen");

// sonidos
const clickSound = new Audio("assets/audio/click.mp3");
clickSound.volume = 0.4;

// música de fondo
const bgMusic = new Audio("assets/audio/music.mp3");
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

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  // posición random horizontal
  heart.style.left = Math.random() * 100 + "vw";

  // tamaño random suave
  heart.style.fontSize = 14 + Math.random() * 10 + "px";

  document.body.appendChild(heart);

  // eliminar después de la animación
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// aparece de vez en cuando
setInterval(createHeart, 3500);

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  // posición segura dentro de la pantalla
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 2500);
}

setInterval(createSparkle, 4000);

setInterval(createSparkle, 5000);
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "14px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
});