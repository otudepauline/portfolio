// ── SMOOTH ACTIVE NAV LINK HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

// ── FADE-IN ON SCROLL ──
const fadeEls = document.querySelectorAll(
  '.skill-card, .proj-card, .svc, .stat-card, .c-item'
);

fadeEls.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeEls.forEach((el) => fadeObserver.observe(el));

// ── MOBILE NAV TOGGLE ──
const navLogoEl = document.querySelector('.nav-logo');
const navLinksEl = document.querySelector('.nav-links');

let mobileMenuOpen = false;

navLogoEl.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    mobileMenuOpen = !mobileMenuOpen;
    navLinksEl.style.display = mobileMenuOpen ? 'flex' : 'none';
    navLinksEl.style.flexDirection = 'column';
    navLinksEl.style.position = 'absolute';
    navLinksEl.style.top = '60px';
    navLinksEl.style.right = '5%';
    navLinksEl.style.background = '#141414';
    navLinksEl.style.border = '1px solid rgba(255,255,255,0.07)';
    navLinksEl.style.borderRadius = '12px';
    navLinksEl.style.padding = '1rem 1.5rem';
    navLinksEl.style.gap = '1rem';
  }
});

// close mobile menu on link click
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      mobileMenuOpen = false;
      navLinksEl.style.display = 'none';
    }
  });
});