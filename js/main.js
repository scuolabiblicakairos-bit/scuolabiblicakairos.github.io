// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Active nav link
const links = document.querySelectorAll('nav a');
const current = window.location.pathname.split('/').pop() || 'index.html';
links.forEach(l => {
  if (l.getAttribute('href') === current) l.classList.add('active');
});

// Scroll reveal for article cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateX(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.article-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateX(-12px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});
