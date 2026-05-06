// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========================================
// HAMBURGER MENU
// ========================================
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinksMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksMenu.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinksMenu.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// ========================================
// PROJECT FILTER
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'flex';
        card.style.animation = 'fadeInUp 0.4s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
const revealElements = document.querySelectorAll(
  '.skill-category, .project-card, .service-card, .education-card, .about-info-item, .cv-section, .cv-training-item, .cv-attribute'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:thembi_phiri@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  window.location.href = mailtoLink;
  contactForm.reset();
});

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========================================
// CURRENT YEAR IN FOOTER
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const yearElements = document.querySelectorAll('.footer-bottom p');
  yearElements.forEach(el => {
    el.innerHTML = el.innerHTML.replace('2025', new Date().getFullYear());
  });
});
