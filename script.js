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
