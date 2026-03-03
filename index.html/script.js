// Scroll Animations using Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0b0e14';
        navLinks.style.padding = '20px';
    }
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent (simulation).');
    e.target.reset();
});