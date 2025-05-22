// Selectors
const overlay = document.getElementById('overlay');
const countdownEl = document.getElementById('countdown');
const heartBlushEl = document.getElementById('heart-blush');
const wishMessage = document.getElementById('wish-message');
const loveNotesEl = document.getElementById('love-notes');
const voiceIcon = document.getElementById('voice-icon');
const voiceButtons = document.getElementById('voice-buttons');
const btnMaleVoice = document.getElementById('btn-male-voice');
const btnFemaleVoice = document.getElementById('btn-female-voice');
const scrollingImages = document.querySelector('.scrolling-images');
const audioPlayer = document.getElementById('background-music');

// Love notes array
const loveNotes = [
  "You are my sunshine on rainy days.",
  "Every moment with you is a treasure.",
  "Together, forever and always."
];
let currentNoteIndex = 0;

// Show love notes one by one every 3 seconds
function cycleLoveNotes() {
  loveNotesEl.textContent = loveNotes[currentNoteIndex];
  currentNoteIndex = (currentNoteIndex + 1) % loveNotes.length;
}
let loveNotesInterval;

// Countdown from 3 to 1
function startCountdown() {
  let count = 3;
  countdownEl.textContent = count;
  countdownEl.style.display = 'block';

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownEl.textContent = count;
    } else {
      clearInterval(interval);
      countdownEl.style.display = 'none';
      showHeartBlush();
    }
  }, 1000);
}

// Heart blush animation for 1.5 seconds then show wish message
function showHeartBlush() {
  heartBlushEl.style.display = 'block';
  heartBlushEl.classList.add('heart-blush-animation');

  setTimeout(() => {
    heartBlushEl.style.display = 'none';
    wishMessage.style.display = 'block';
    startLoveNotesCycle();
    voiceIcon.style.display = 'inline-block';
    // Start background music automatically (optional)
    audioPlayer.play();
  }, 1500);
}

// Start cycling love notes
function startLoveNotesCycle() {
  loveNotesInterval = setInterval(cycleLoveNotes, 3000);
  cycleLoveNotes(); // show immediately
}

// Voice control toggle buttons display
voiceIcon.addEventListener('click', () => {
  if (voiceButtons.style.display === 'block') {
    voiceButtons.style.display = 'none';
  } else {
    voiceButtons.style.display = 'block';
  }
});

// Speech synthesis function
function speak(text, voiceName) {
  if (!('speechSynthesis' in window)) {
    alert('Sorry, your browser does not support speech synthesis.');
    return;
  }
  window.speechSynthesis.cancel(); // Cancel any ongoing speech
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  // Choose voice by name (case insensitive)
  const selectedVoice = voices.find(v => v.name.toLowerCase().includes(voiceName.toLowerCase()));
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

// Button events for male/female voice
btnMaleVoice.addEventListener('click', () => {
  speak(
    "Happy Wedding Anniversary, my love! You mean the world to me.",
    "male"
  );
});

btnFemaleVoice.addEventListener('click', () => {
  speak(
    "Happy Wedding Anniversary, darling! Forever yours, forever mine.",
    "female"
  );
});

// Smooth infinite scroll reset for scrolling images
scrollingImages.addEventListener('animationiteration', () => {
  // Optional: can add logic if needed on loop reset
});

// Intro screen start: on clicking heart, hide overlay & start countdown
document.querySelector('.heart-btn').addEventListener('click', () => {
  overlay.style.display = 'none';
  startCountdown();
});
