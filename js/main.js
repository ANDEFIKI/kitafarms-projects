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

    // Make Talents section interactive between about.html and index.html
    var talentsBtn = document.querySelector('.view-talents-btn');
    if (talentsBtn) {
        talentsBtn.addEventListener('click', function(e) {
            // Navigate to index.html and scroll to talents section
            window.location.href = 'index.html?section=talents';
        });
    }

    // If coming from about.html, scroll to talents section on index.html
    if (window.location.pathname.endsWith('index.html')) {
        var params = new URLSearchParams(window.location.search);
        if (params.get('section') === 'talents') {
            var talentsSection = document.querySelector('.talents-section');
            if (talentsSection) {
                talentsSection.scrollIntoView({ behavior: 'smooth' });
                talentsSection.classList.add('highlight-talent');
                setTimeout(function() {
                    talentsSection.classList.remove('highlight-talent');
                }, 2000);
            }
        }
    }
// Toggle menu for mobile (all pages)
document.addEventListener('DOMContentLoaded', function() {
    // Grain order form interactivity for products.html
    var orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var grainType = document.getElementById('grainType').value;
            var quantity = document.getElementById('quantity').value;
            var orderMessage = document.getElementById('orderMessage');
            if (!grainType || !quantity || quantity < 1) {
                orderMessage.textContent = 'Please select a grain and enter a valid quantity.';
                orderMessage.style.color = 'red';
            } else {
                // Send order via EmailJS
                emailjs.send('service_a4n4kmp', 'template_us74ugn', {
                    grain_type: grainType,
                    quantity: quantity
                })
                .then(function(response) {
                    orderMessage.textContent = 'Order sent! You will be contacted soon.';
                    orderMessage.style.color = 'green';
                    orderForm.reset();
                }, function(error) {
                    orderMessage.textContent = 'Failed to send order. Please try again.';
                    orderMessage.style.color = 'red';
                });
            }
        });
    }
    // Hamburger menu toggle for mobile nav (all pages)
    var hamburger = document.querySelector('.hamburger');
    var navList = document.querySelector('.nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
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
