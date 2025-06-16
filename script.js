// Light/Dark mode toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add('dark');
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark');
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Load mode from localStorage
const darkMode = localStorage.getItem('darkMode') === 'true';
setDarkMode(darkMode);

modeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  setDarkMode(isDark);
  localStorage.setItem('darkMode', isDark);
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple fade-in animation on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
}); 