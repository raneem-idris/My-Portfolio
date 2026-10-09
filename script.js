// Reveal page on load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = contactForm.querySelector('input[name="name"]');
    const name = nameInput ? nameInput.value.trim() : '';

    formStatus.textContent = `Thank you, ${name || 'there'}! Your message has been sent successfully. I'll get back to you soon.`;
    formStatus.style.color = '#10b981';
    contactForm.reset();
  });
}
