// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Remove active class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active navigation link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Resume section functionality
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        if (resumeDetails[idx]) {
            resumeDetails[idx].classList.add('active');
        }

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    });
});

// EMAILJS SETUP INSTRUCTIONS:
// 1. Sign up for a free account at https://www.emailjs.com/
// 2. Create an email service (connect your Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} (sender's name)
//    - {{from_email}} (sender's email)
//    - {{subject}} (email subject)
//    - {{message}} (email message)
//    - {{to_email}} (recipient email - morganke254@gmail.com)
// 4. Replace the placeholders below with your actual IDs:
//    - YOUR_PUBLIC_KEY (from EmailJS dashboard)
//    - YOUR_SERVICE_ID (from your email service)
//    - YOUR_TEMPLATE_ID (from your email template)
// 5. Test the form to ensure emails are being sent correctly

// Contact form functionality
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

// Initialize EmailJS
// IMPORTANT: Replace the placeholders below with your actual EmailJS credentials
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key from the dashboard
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading message
        showFormMessage('Sending message...', 'info');

        // Prepare email parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'morganke254@gmail.com'
        };

        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
            }, function(error) {
                console.error('Failed to send email:', error);
                showFormMessage('Sorry, there was an error sending your message. Please try again or contact me directly at morganke254@gmail.com.', 'error');
            });

        // Hide message after 5 seconds for success messages
        setTimeout(() => {
            if (formMessage.classList.contains('success')) {
                formMessage.style.display = 'none';
            }
        }, 5000);
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Scroll to message
        formMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Testimonials section functionality
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.setProperty('--testimonial-index', index + 1);
    
    // Enhanced hover effects
    card.addEventListener('mouseenter', () => {
        // Add glow effect to rating stars
        const stars = card.querySelectorAll('.testimonial-rating i');
        stars.forEach(star => {
            star.style.transform = 'scale(1.2) rotate(10deg)';
            star.style.transition = 'all 0.3s ease';
        });
        
        // Animate author avatar
        const avatar = card.querySelector('.author-avatar');
        if (avatar) {
            avatar.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        // Reset rating stars
        const stars = card.querySelectorAll('.testimonial-rating i');
        stars.forEach(star => {
            star.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Reset author avatar
        const avatar = card.querySelector('.author-avatar');
        if (avatar) {
            avatar.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Testimonials stats counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                animateCounter(stat, 0, target, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const testimonialsStats = document.querySelector('.testimonials-stats');
if (testimonialsStats) {
    statsObserver.observe(testimonialsStats);
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current + (element.textContent.includes('+') ? '+' : 
                                       element.textContent.includes('%') ? '%' : 
                                       element.textContent.includes('/') ? '/5' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}
