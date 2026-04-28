// Countdown logic
const countdownOverlay = document.getElementById('countdown-overlay');
const countdownEl = document.getElementById('countdown');
const mainContent = document.getElementById('main-content');

let count = 3;

function countdown() {
  if (count > 1) {
    count--;
    countdownEl.textContent = count;
  } else {
    countdownOverlay.style.opacity = '0';

    setTimeout(() => {
      countdownOverlay.style.display = 'none';
      mainContent.classList.remove('hidden');

      startHeartShower(2500); // smooth burst
      startFloatingHearts();  // reduced floating hearts
    }, 500);
  }
}

setInterval(countdown, 1000);


// 🎵 Background Music Toggle
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.querySelector('.music-toggle');

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.style.color = '#d81e5b';
  } else {
    bgMusic.pause();
    musicToggle.style.color = '#aaa';
  }
}


// 💖 Heart Shower (balanced burst)
const heartShowerContainer = document.getElementById('heart-shower');

function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💖';

  const size = 12 + Math.random() * 18;

  heart.style.position = 'fixed';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  heart.style.fontSize = size + 'px';
  heart.style.opacity = 0.9;
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = 9999;
  heart.style.transition = 'transform 2s ease-out, opacity 2s ease-out';

  heartShowerContainer.appendChild(heart);

  setTimeout(() => {
    const drift = (Math.random() - 0.5) * 100;
    heart.style.transform = `translate(${drift}px, -${window.innerHeight + 200}px)`;
    heart.style.opacity = 0;
  }, 20);

  setTimeout(() => heart.remove(), 2000);
}

function startHeartShower(duration = 2500) {
  const interval = setInterval(createHeart, 120);
  setTimeout(() => clearInterval(interval), duration);
}


// ❤️ Floating Hearts Background (REDUCED + CLEAN)
const heartsContainer = document.querySelector('.hearts-container');

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.textContent = '❤️';

  const size = 10 + Math.random() * 14;

  heart.style.position = 'fixed';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '-20px';
  heart.style.fontSize = size + 'px';
  heart.style.opacity = 0.4 + Math.random() * 0.3; // softer look
  heart.style.pointerEvents = 'none';
  heart.style.color = '#ff4d6d';
  heart.style.zIndex = 0;
  heart.style.transition = 'transform 8s linear, opacity 8s linear';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    const drift = (Math.random() - 0.5) * 80;
    heart.style.transform = `translate(${drift}px, -${window.innerHeight + 100}px)`;
    heart.style.opacity = 0;
  }, 50);

  setTimeout(() => heart.remove(), 8000);
}

function startFloatingHearts() {
  setInterval(() => {
    // only create some hearts (not every tick)
    if (Math.random() > 0.5) {
      createFloatingHeart();
    }
  }, 1000); // slower rate
}
