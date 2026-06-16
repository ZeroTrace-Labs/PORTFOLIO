// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    populateCertifications();
    populateProjects();
    populateSkills();
    populateHomeLab();
    populateBlog();
    fetchGitHubData();
    initializeCertificateModal();
    initializeScrollAnimations();
});

// ========== NAVIGATION ==========
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
    const scrollPosition = window.scrollY + 100;
    
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

// ========== CERTIFICATIONS SECTION ==========
function populateCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid || !portfolioConfig) return;

    grid.innerHTML = portfolioConfig.certifications.map(cert => `
        <div class="certification-card" data-cert-id="${cert.id}">
            <div class="certification-image">
                ${cert.image ? `<img src="${cert.image}" alt="${cert.title} certificate">` : `<i class='bx bx-medal'></i>`}
            </div>
            <h3 class="certification-title">${cert.title}</h3>
            <p class="certification-issuer">${cert.issuer}</p>
            <p class="certification-date">${cert.issueDate || cert.dateEarned}</p>
            <div class="certification-skills">
                ${((cert.skillsLearned || cert.skills) || []).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
            </div>
            <a href="${cert.verificationLink || cert.verificationUrl}" target="_blank" class="certification-button">
                Verify Certification
            </a>
        </div>
    `).join('');
}

function initializeCertificateModal() {
    const grid = document.getElementById('certificationsGrid');
    const modal = document.getElementById('certModal');
    const modalImg = document.querySelector('#certModal img');
    const modalTitle = document.getElementById('certModalTitle');
    const modalIssuer = document.getElementById('certModalIssuer');
    const modalDate = document.getElementById('certModalDate');
    const modalVerify = document.getElementById('certModalVerify');
    const modalClose = document.getElementById('certModalClose');

    if (!grid || !modal || !modalImg || !modalTitle || !modalIssuer || !modalDate || !modalVerify || !modalClose) return;

    grid.addEventListener('click', event => {
        const card = event.target.closest('.certification-card');
        if (!card) return;
        if (event.target.closest('.certification-button')) return;

        const certId = card.getAttribute('data-cert-id');
        const cert = portfolioConfig.certifications.find(item => String(item.id) === certId);
        if (!cert || !cert.image) return;

        modalImg.src = cert.image;
        modalImg.alt = `${cert.title} certificate`;
        modalTitle.textContent = cert.title;
        modalIssuer.textContent = cert.issuer;
        modalDate.textContent = cert.issueDate || cert.dateEarned || '';
        modalVerify.href = cert.verificationLink || cert.verificationUrl || '#';
        modalVerify.style.display = cert.verificationLink || cert.verificationUrl ? 'inline-flex' : 'none';
        modal.classList.add('active');
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
}


// ========== PROJECTS SECTION ==========
function populateProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid || !portfolioConfig) return;

    grid.innerHTML = portfolioConfig.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                ${project.screenshot ? `<img src="${project.screenshot}" alt="${project.title} screenshot">` : `<i class='bx bx-code'></i>`}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" class="project-link">
                        <i class='bx bxl-github'></i> GitHub
                    </a>
                    ${project.reportUrl ? `<a href="${project.reportUrl}" target="_blank" class="project-link secondary">
                        <i class='bx bx-file'></i> Report
                    </a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ========== SKILLS SECTION ==========
function populateSkills() {
    const container = document.getElementById('skillsCategories');
    if (!container || !portfolioConfig) return;

    container.innerHTML = Object.entries(portfolioConfig.skills).map(([category, data]) => `
        <div class="skill-category">
            <div class="skill-category-header">
                <div class="skill-icon">
                    <i class='${data.icon}'></i>
                </div>
                <h3 class="skill-category-name">${category}</h3>
            </div>
            <div class="skill-list">
                ${data.items.map(item => `
                    <div class="skill-item">
                        <span>${item}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========== HOME LAB SECTION ==========
function populateHomeLab() {
    const grid = document.getElementById('homelabGrid');
    if (!grid || !portfolioConfig) return;

    grid.innerHTML = portfolioConfig.homeLabs.map(lab => `
        <div class="lab-card">
            <div class="lab-image">
                <i class='bx bx-server'></i>
            </div>
            <div class="lab-content">
                <h3 class="lab-title">${lab.title}</h3>
                <p class="lab-description">${lab.description}</p>
                <div class="lab-infrastructure">
                    ${lab.infrastructure.map(infra => `<span class="infra-badge">${infra}</span>`).join('')}
                </div>
                <a href="${lab.reportUrl}" target="_blank" class="lab-link">
                    View Lab Report <i class='bx bx-right-arrow-alt'></i>
                </a>
            </div>
        </div>
    `).join('');
}

// ========== BLOG SECTION ==========
function populateBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid || !portfolioConfig) return;

    grid.innerHTML = portfolioConfig.blog.map(article => `
        <div class="blog-card">
            <div class="blog-image">
                ${article.thumbnail ? `<img src="${article.thumbnail}" alt="${article.title} thumbnail">` : `<i class='bx bx-pen'></i>`}
            </div>
            <div class="blog-content">
                <h3 class="blog-title">${article.title}</h3>
                <p class="blog-summary">${article.excerpt}</p>
                <div class="blog-meta">
                    <span>${article.date}</span>
                </div>
                <button class="blog-read-more" onclick="alert('Full article not yet available')">
                    Read More →
                </button>
            </div>
        </div>
    `).join('');
}

// ========== GITHUB INTEGRATION ==========
async function fetchGitHubData() {
    const statsContainer = document.getElementById('githubStats');
    const repoContainer = document.getElementById('githubFeatured');
    
    if (!statsContainer || !portfolioConfig) return;

    try {
        const username = portfolioConfig.github.username;
        const apiUrl = portfolioConfig.github.apiUrl;

        // Fetch user data
        const userResponse = await fetch(apiUrl);
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`${apiUrl}/repos?sort=stars&per_page=6`);
        const repos = await reposResponse.json();

        // Populate stats
        if (statsContainer && userData) {
            statsContainer.innerHTML = `
                <div class="github-stat">
                    <div class="github-stat-value">${userData.public_repos || 0}</div>
                    <div class="github-stat-label">Public Repositories</div>
                </div>
                <div class="github-stat">
                    <div class="github-stat-value">${userData.followers || 0}</div>
                    <div class="github-stat-label">Followers</div>
                </div>
                <div class="github-stat">
                    <div class="github-stat-value">${userData.public_gists || 0}</div>
                    <div class="github-stat-label">Public Gists</div>
                </div>
            `;
        }

        // Populate featured repositories
        if (repoContainer && repos.length > 0) {
            repoContainer.innerHTML = repos.map(repo => `
                <div class="github-repo">
                    <div class="repo-name">
                        <i class='bx bxl-github'></i>
                        ${repo.name}
                    </div>
                    <p class="repo-description">${repo.description || 'No description'}</p>
                    <div class="repo-languages">
                        ${repo.language ? `<span class="repo-language">${repo.language}</span>` : ''}
                    </div>
                    <a href="${repo.html_url}" target="_blank" class="repo-link">
                        View Repository →
                    </a>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Show fallback message
        if (statsContainer) {
            statsContainer.innerHTML = '<p style="color: var(--text-color);">GitHub data unavailable. Please check your connection.</p>';
        }
    }
}

// ========== RESUME SECTION ==========
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

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        showFormMessage('Sending message...', 'info');

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'morganke254@gmail.com'
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
            }, function(error) {
                console.error('Failed to send email:', error);
                showFormMessage('Sorry, there was an error. Please contact me at morganke254@gmail.com.', 'error');
            });

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

        formMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// ========== TESTIMONIALS ==========
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach((card, index) => {
    card.style.setProperty('--testimonial-index', index + 1);
    
    card.addEventListener('mouseenter', () => {
        const stars = card.querySelectorAll('.testimonial-rating i');
        stars.forEach(star => {
            star.style.transform = 'scale(1.2) rotate(10deg)';
            star.style.transition = 'all 0.3s ease';
        });
        
        const avatar = card.querySelector('.author-avatar');
        if (avatar) {
            avatar.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const stars = card.querySelectorAll('.testimonial-rating i');
        stars.forEach(star => {
            star.style.transform = 'scale(1) rotate(0deg)';
        });
        
        const avatar = card.querySelector('.author-avatar');
        if (avatar) {
            avatar.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ========== SCROLL ANIMATIONS ==========
function initializeScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll(
        '.certification-card, .project-card, .skill-category, .lab-card, .blog-card'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Counter animation for testimonials stats
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
