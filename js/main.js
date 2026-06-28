// RE:BIRTH - Main JS

document.addEventListener('DOMContentLoaded', () => {

  // ── Hero Slider ──
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    const next = () => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    };
    setInterval(next, 5000);
  }

  // ── Hamburger Menu ──
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // ── FAQ Accordion ──
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Header scroll shadow ──
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 40
        ? '0 2px 20px rgba(0,0,0,0.5)'
        : 'none';
    });
  }

  // ── Fade in on scroll ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

});
