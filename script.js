// Mobile nav
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('site-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open');
  });
}

// Countdown
function startCountdown(el) {
  const deadline = new Date(el.dataset.deadline || '').getTime();
  const $d = el.querySelector('#days');
  const $h = el.querySelector('#hours');
  const $m = el.querySelector('#minutes');
  const $s = el.querySelector('#seconds');

  const tick = () => {
    const now = Date.now();
    let diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 86400000;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);

    $d.textContent = String(days).padStart(2, '0');
    $h.textContent = String(hours).padStart(2, '0');
    $m.textContent = String(minutes).padStart(2, '0');
    $s.textContent = String(seconds).padStart(2, '0');
  };
  tick();
  return setInterval(tick, 1000);
}
const countdownEl = document.getElementById('countdown');
if (countdownEl) startCountdown(countdownEl);

//member-slider
    const slider = document.querySelector('.slider');
    let angle = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    // Mouse down
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        slider.style.transition = 'none'; // Remove transition while dragging
    });

    // Mouse move
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
        const delta = currentX - startX;
        angle += delta * 0.3; // Sensitivity
        slider.style.transform = `rotateY(${angle}deg)`;
        startX = currentX;
    });

    // Mouse up
    window.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.transition = 'transform 0.5s'; // Restore transition
    });

    // Optional: Touch support for mobile
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        slider.style.transition = 'none';
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const delta = currentX - startX;
        angle += delta * 0.3;
        slider.style.transform = `rotateY(${angle}deg)`;
        startX = currentX;
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
        slider.style.transition = 'transform 0.5s';
    });


// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const answer = btn.nextElementSibling;
    if (!answer) return;
    answer.classList.toggle('open');
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const cursor = document.querySelector(".cursor");
const mask = document.querySelector(".mask");

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
const maxOffset = 12;
const easing = 0.15;

function animate() {
    const dx = mouseX - dotX;
    const dy = mouseY - dotY;

    dotX += dx * easing;
    dotY += dy * easing;

    const dist = Math.hypot(dotX, dotY);
    if (dist > maxOffset) {
        const angle = Math.atan2(dotY, dotX);
        dotX = Math.cos(angle) * maxOffset;
        dotY = Math.sin(angle) * maxOffset;
    }

    dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

    requestAnimationFrame(animate);
}

document.addEventListener("mousemove", (e) => {
    mouseX = e.movementX * 3;
    mouseY = e.movementY * 3;

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Mask animation: rotate + scale based on movement
    let rotate = mouseX * 2;
    let scale = 1 + Math.min(Math.abs(mouseX + mouseY) / 50, 0.2);
    mask.style.transform = `rotate(${rotate}deg) scale(${scale})`;
});

animate();
