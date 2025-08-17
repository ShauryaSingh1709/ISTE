// Animate the cash counter
const targetAmount = 100000;
let current = 0;
const cashDisplay = document.getElementById("cash-amount");

function animateCash() {
  const step = Math.ceil(targetAmount / 100);
  const interval = setInterval(() => {
    current += step;
    if (current >= targetAmount) {
      current = targetAmount;
      clearInterval(interval);
    }
    cashDisplay.innerText = current.toLocaleString("en-IN");
  }, 30);
}

// Money Rain Animation
const moneyRainContainer = document.querySelector(".money-rain");

function createMoneySymbol() {
  const symbol = document.createElement("div");
  symbol.classList.add("money-symbol");
  symbol.innerText = "₹";

  symbol.style.left = Math.random() * 100 + "vw";
  symbol.style.animationDuration = (2 + Math.random() * 3) + "s";
  symbol.style.fontSize = (1 + Math.random() * 2) + "rem";

  moneyRainContainer.appendChild(symbol);

  setTimeout(() => {
    symbol.remove();
  }, 5000);
}

// Start rain and cash counter on load
window.onload = () => {
  animateCash();
  setInterval(createMoneySymbol, 20);
};
