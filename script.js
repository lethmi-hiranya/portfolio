document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple feedback message
    document.getElementById('formMessage').textContent =
        'Thank you for reaching out! I will get back to you soon.';
    // Optionally, reset the form
    this.reset();
});