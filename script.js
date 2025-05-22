const quotes = [
  "You are my today and all of my tomorrows.",
  "I love you more every single day.",
  "With you, forever isn’t long enough.",
  "You’re the best thing I ever waited for.",
  "Together is a beautiful place to be."
];

let index = 0;
const quoteBox = document.getElementById("quoteBox");

function changeQuote() {
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    quoteBox.innerText = quotes[index];
    quoteBox.style.opacity = 1;
    index = (index + 1) % quotes.length;
  }, 800);
}

setInterval(changeQuote, 5000);

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) music.play();
  else music.pause();
}

// Countdown Logic (Improved)
window.addEventListener("load", () => {
  const countdownOverlay = document.getElementById("countdown-overlay");
  const countdown = document.getElementById("countdown");

  let count = 3;
  countdown.innerText = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdown.innerText = count;
    } else {
      clearInterval(interval);
      // Hide countdown overlay smoothly
      countdownOverlay.style.opacity = 0;
      setTimeout(() => {
        countdownOverlay.style.display = "none";
        triggerHeartShower();
      }, 500); // match fade out duration
    }
  }, 1000);
});

function triggerHeartShower() {
  const container = document.getElementById("heart-shower");

  // Create hearts
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (1 + Math.random()) + "s";
    container.appendChild(heart);
  }

  // Show heart shower container
  container.style.display = "block";

  // Hide heart shower and show main content after 2 seconds
  setTimeout(() => {
    container.style.display = "none";
    container.innerHTML = ""; // Clear hearts
    document.getElementById("main-content").classList.remove("hidden");
  }, 2000);
}
