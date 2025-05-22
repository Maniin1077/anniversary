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
    // Remove countdown and show main content
    countdownOverlay.style.display = 'none';
    mainContent.classList.remove('hidden');
    startHeartShower(2000); // Heart shower for 2 seconds
    startFloatingHearts();
  }
}

setInterval(countdown, 1000);

// Background Music Toggle
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

// Heart Shower Animation
const heartShowerContainer = document.getElementById('heart-shower');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';

  heart.style.position = 'fixed';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = Math.random() * window.innerHeight + 'px';
  heart.style.fontSize = (10 + Math.random() * 20) + 'px';
  heart.style.opacity = 1;
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = 9999;
  heart.style.transition = 'all 1.5s ease-out';

  heartShowerContainer.appendChild(heart);

  setTimeout(() => {
    heart.style.top = (parseFloat(heart.style.top) - 100) + 'px';
    heart.style.opacity = 0;
  }, 10);

  setTimeout(() => {
    heart.remove();
  }, 1600);
}

function startHeartShower(duration = 2000) {
  const interval = setInterval(createHeart, 150);
  setTimeout(() => clearInterval(interval), duration);
}

// Floating Hearts Background
const heartsContainer = document.querySelector('.hearts-container');

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '-30px';
  heart.style.fontSize = (12 + Math.random() * 18) + 'px';
  heart.style.opacity = 0.6 + Math.random() * 0.4;
  heart.style.pointerEvents = 'none';
  heart.style.color = '#d81e5b';
  heart.style.zIndex = 0;
  heart.style.transition = 'transform 10s linear, opacity 10s linear';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = `translateY(-${window.innerHeight + 50}px)`;
    heart.style.opacity = 0;
  }, 50);

  setTimeout(() => {
    heart.remove();
  }, 10500);
}

function startFloatingHearts() {
  setInterval(createFloatingHeart, 400);
}
