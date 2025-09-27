// Sticky nav link highlight & smooth scroll
document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(href.startsWith('#')) {
            e.preventDefault();
            document.querySelectorAll('nav .nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth'});
        }
    });
});

// Highlight nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .nav-links a');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Toggle icon
    if(document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// Contact form validation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#e63946";
        return;
    }

    if(!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#e63946";
        return;
    }

    // Simulate sending (could connect to a backend/email service)
    formMessage.textContent = "Thank you, your message has been sent!";
    formMessage.style.color = "#219150";
    form.reset();
});

function validateEmail(email) {
    // Basic email validation
    return /\S+@\S+\.\S+/.test(email);
}

// On load: Light/dark mode respect
window.addEventListener('DOMContentLoaded', () => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = "☀️";
    }
});