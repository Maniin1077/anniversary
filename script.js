// DOM Elements
const countdownOverlay = document.getElementById('countdown-overlay');
const countdownEl = document.getElementById('countdown');
const mainContent = document.getElementById('main-content');
const giftButton = document.getElementById('gift-button');
const musicToggle = document.querySelector('.music-toggle');
const bgMusic = document.getElementById('bgMusic');
const heartShowerContainer = document.getElementById('heart-shower');
const heartsContainer = document.querySelector('.hearts-container');
const voiceButtons = document.querySelector('.voice-buttons');

let count = 3;
let countdownInterval;

// 🎁 Start Countdown
function startCountdown() {
  document.getElementById('intro-overlay').style.display = 'none';
  countdownOverlay.classList.remove('hidden');
  countdownEl.textContent = count;

  countdownInterval = setInterval(() => {
    if (count > 1) {
      count--;
      countdownEl.textContent = count;
    } else {
      clearInterval(countdownInterval);
      countdownOverlay.style.display = 'none';
      mainContent.classList.remove('hidden');
      startHeartShower(2000); // Show hearts for 2 seconds
      startFloatingHearts();
    }
  }, 1000);
}

// 🎵 Toggle Music
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.style.color = '#d81e5b';
  } else {
    bgMusic.pause();
    musicToggle.style.color = '#aaa';
  }
}

// 💖 Heart Shower Animation
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

// ❤️ Floating Heart Background
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

// 🔊 Toggle Voice Buttons
function toggleVoiceButtons() {
  voiceButtons.classList.toggle('hidden');
}

// 🗣️ AI Voice Playback (Speech Synthesis)
window.speechSynthesis.onvoiceschanged = () => {
  window.speechSynthesis.getVoices(); // Ensure voices are loaded
};

function playVoice(type) {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  let selectedVoice;
  if (type === 'male') {
    selectedVoice = voices.find(voice =>
      voice.name.toLowerCase().includes('male') ||
      voice.name.toLowerCase().includes('david') ||
      voice.gender === 'male'
    );
  } else {
    selectedVoice = voices.find(voice =>
      voice.name.toLowerCase().includes('female') ||
      voice.name.toLowerCase().includes('zira') ||
      voice.gender === 'female'
    );
  }

  if (!selectedVoice) selectedVoice = voices[0];

  const message = `
    Happy Wedding Anniversary. Together Forever, Hand in Hand.
    You complete me. Forever is just the beginning. Together, always and forever.
  `;

  const utterance = new SpeechSynthesisUtterance(message);
  utterance.voice = selectedVoice;
  utterance.pitch = 1;
  utterance.rate = 1;

  synth.cancel();
  synth.speak(utterance);
}

// 🧠 Connect Gift Icon to Countdown
giftButton.addEventListener('click', startCountdown);
