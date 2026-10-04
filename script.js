const loveButton = document.getElementById("loveButton");
const message = document.getElementById("message");
const heartsContainer = document.querySelector(".hearts");

loveButton.addEventListener("click", () => {
  message.classList.remove("hidden");
  loveButton.textContent = "I Love You Too ❤️";
  loveButton.disabled = true;

  for (let i = 0; i < 25; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6500);
}

setInterval(() => {
  createHeart();
}, 900);