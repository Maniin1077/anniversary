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

// Countdown Logic
window.addEventListener("load", () => {
  const countdown = document.createElement("div");
  countdown.className = "countdown";
  document.body.appendChild(countdown);

  let count = 3;
  countdown.innerText = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdown.innerText = count;
    } else {
      clearInterval(interval);
      document.body.removeChild(countdown);
      triggerHeartShower();
    }
  }, 1000);
});

function triggerHeartShower() {
  const container = document.createElement("div");
  container.className = "heart-shower";

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (1 + Math.random()) + "s";
    container.appendChild(heart);
  }

  document.body.appendChild(container);

  setTimeout(() => {
    document.body.removeChild(container);
  }, 2000);
}
