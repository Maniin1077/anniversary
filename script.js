// Intro and Countdown
function startCountdown() {
  document.getElementById('intro-overlay').style.display = 'none';
  document.getElementById('countdown-overlay').classList.remove('hidden');

  let count = 3;
  const countdownEl = document.getElementById('countdown');
  const interval = setInterval(() => {
    if (count > 1) {
      count--;
      countdownEl.textContent = count;
    } else {
      clearInterval(interval);
      document.getElementById('countdown-overlay').style.display = 'none';
      document.getElementById('main-content').classList.remove('hidden');
      startHeartShower(2000);  // heart shower for 2s
      startFloatingHearts();   // continue floating hearts
      rotateLoveNotes();       // start rotating love notes
    }
  }, 1000);
}

// Heart Shower
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

// Floating Hearts
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

// Voice AI (Male/Female)
window.speechSynthesis.onvoiceschanged = () => {
  window.speechSynthesis.getVoices(); // preload
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
  synth.cancel(); // stop any current speech
  synth.speak(utterance);
}

// Love Notes Rotate
const notes = [
  "You are my today and all of my tomorrows.",
  "Every love story is beautiful, but ours is my favorite.",
  "Forever is a long time, but I wouldn't mind spending it with you.",
];
let noteIndex = 0;
function rotateLoveNotes() {
  const noteEl = document.getElementById("note");
  setInterval(() => {
    noteEl.textContent = notes[noteIndex];
    noteIndex = (noteIndex + 1) % notes.length;
  }, 3000);
}

// Voice toggle button
function toggleVoiceButtons() {
  document.querySelector('.voice-buttons').classList.toggle('hidden');
}
