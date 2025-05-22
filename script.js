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
