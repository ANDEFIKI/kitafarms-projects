    // Make About Us section interactive on index.html
    var aboutButton = document.querySelector('.view-about-btn');
    if (aboutButton) {
        aboutButton.addEventListener('click', function(e) {
            var section = aboutButton.closest('.about-section');
            var aboutName = section.getAttribute('data-about') || 'About Us';
            // Navigate to about.html with section info in query string
            window.location.href = 'about.html?section=' + encodeURIComponent(aboutName);
        });
    }
// Toggle menu for mobile (example)
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle for mobile nav
    var hamburger = document.querySelector('.hamburger');
    var navList = document.querySelector('.nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
        // Close nav when clicking outside (optional UX)
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
            }
        });
    }

    // Make product cards interactive on index.html
    var productButtons = document.querySelectorAll('.view-product-btn');
    if (productButtons.length > 0) {
        productButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                var card = btn.closest('.product-card');
                var productName = card.getAttribute('data-product');
                // Navigate to products.html with product name in query string
                window.location.href = 'products.html?product=' + encodeURIComponent(productName);
            });
        });
    }

    // Make service cards interactive on index.html
    var serviceButtons = document.querySelectorAll('.view-service-btn');
    if (serviceButtons.length > 0) {
        serviceButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                var card = btn.closest('.service-card');
                var serviceName = card.getAttribute('data-service');
                // Navigate to services.html with service name in query string
                window.location.href = 'services.html?service=' + encodeURIComponent(serviceName);
            });
        });
    }

    // Example: Form validation for contact page
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            var formMessage = document.getElementById('formMessage');
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = 'red';
            } else {
                formMessage.textContent = 'Thank you for contacting us!';
                formMessage.style.color = 'green';
                contactForm.reset();
            }
        });
    }
    // Example: Animation on scroll for gallery page
    var gallery = document.querySelector('.gallery');
    if (gallery) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                gallery.style.transform = 'scale(1.05)';
                gallery.style.transition = 'transform 0.5s';
            } else {
                gallery.style.transform = 'scale(1)';
            }
        });
    }
});
