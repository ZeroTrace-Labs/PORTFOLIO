// ========== INITIALIZATION ==========
const DEFAULT_GITHUB_URL = 'https://github.com/ZeroTrace-Labs';
const EMAILJS_CONFIG = {
    publicKey: '',
    serviceId: '',
    templateId: ''
};

document.addEventListener('DOMContentLoaded', () => {
    initializeHomeTypewriter();
    populateCertifications();
    populateProjects();
    populateSkills();
    populateHomeLab();
    populateBlog();
    initializeCertificateModal();
    initializeSectionEffects();
    initializeScrollAnimations();
    document.body.classList.add('motion-ready');
});

function initializeHomeTypewriter() {
    const roleElement = document.getElementById('role-typewriter');
    if (!roleElement) return;

    const roles = ['Cybersecurity Analyst', 'Web Developer', 'Programmer', 'Software Tester'];
    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    roleElement.textContent = '';

    function updateRole() {
        const role = roles[roleIndex];
        if (deleting) {
            if (characterIndex > 0) {
                characterIndex -= 1;
                roleElement.textContent = role.slice(0, characterIndex);
                window.setTimeout(updateRole, 55);
                return;
            }

            roleElement.classList.remove('is-highlighted');
            roleIndex = (roleIndex + 1) % roles.length;
            deleting = false;
            window.setTimeout(updateRole, 300);
            return;
        }

        if (characterIndex < role.length) {
            characterIndex += 1;
            roleElement.textContent = role.slice(0, characterIndex);
            window.setTimeout(updateRole, 95);
            return;
        }

        roleElement.classList.add('is-highlighted');
        deleting = true;
        window.setTimeout(updateRole, 1300);
    }

    window.setTimeout(updateRole, 300);
}

// ========== NAVIGATION ==========
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const targetId = href.substring(1);
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

// Keep the floating mobile navigation out of the way while scrolling down.
const mobileHeader = document.querySelector('header');
let previousScrollY = window.scrollY;
window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
        if (mobileHeader) mobileHeader.classList.remove('is-hidden-on-scroll');
    }
    previousScrollY = window.scrollY;
}, { passive: true });

window.addEventListener('scroll', () => {
    if (!mobileHeader) return;

    if (!window.matchMedia('(max-width: 768px)').matches) {
        mobileHeader.classList.remove('is-hidden-on-scroll');
        previousScrollY = window.scrollY;
        return;
    }

    const currentScrollY = Math.max(0, window.scrollY);
    const scrollDelta = currentScrollY - previousScrollY;

    if (currentScrollY <= 80 || scrollDelta < -6) {
        mobileHeader.classList.remove('is-hidden-on-scroll');
    } else if (scrollDelta > 6) {
        mobileHeader.classList.add('is-hidden-on-scroll');
    }

    previousScrollY = currentScrollY;
}, { passive: true });

// Update active navigation link on scroll (debounced)
const sections = document.querySelectorAll('section');
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
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
    }, 100);
}, { passive: true });

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
            <a href="${cert.verificationLink || cert.verificationUrl}" target="_blank" rel="noopener noreferrer" class="certification-button">
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

    const setModalState = (isOpen) => {
        modal.classList.toggle('active', isOpen);
        modal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        if (!isOpen) {
            modalImg.src = '';
        }
    };

    grid.addEventListener('click', event => {
        const card = event.target.closest('.certification-card');
        if (!card) return;
        if (event.target.closest('.certification-button')) return;

        const certId = card.getAttribute('data-cert-id');
        const cert = portfolioConfig.certifications.find(item => String(item.id) === certId);
        if (!cert) return;

        modalImg.src = cert.image || '';
        modalImg.alt = `${cert.title} certificate`;
        modalTitle.textContent = cert.title;
        modalIssuer.textContent = cert.issuer || '';
        modalDate.textContent = cert.issueDate || cert.dateEarned || '';
        const verificationLink = cert.verificationLink || cert.verificationUrl;
        if (verificationLink) {
            modalVerify.href = verificationLink;
            modalVerify.style.display = 'inline-flex';
        } else {
            modalVerify.removeAttribute('href');
            modalVerify.style.display = 'none';
        }
        setModalState(true);
    });

    modalClose.addEventListener('click', () => setModalState(false));

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            setModalState(false);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            setModalState(false);
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
                ${project.image || project.screenshot ? `<img src="${project.image || project.screenshot}" alt="${project.imageAlt || `${project.title} screenshot`}" loading="lazy">` : `<i class='bx bx-code'></i>`}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl || project.githubLink || DEFAULT_GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <i class='bx bxl-github'></i> GitHub
                    </a>
                    ${project.reportLink ? `<a href="${project.reportLink}" target="_blank" rel="noopener noreferrer" class="project-link secondary">
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
            <p class="skill-category-description">${data.description}</p>
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
                ${lab.image ? `<img src="${lab.image}" alt="${lab.imageAlt || `${lab.title} screenshot`}" loading="lazy">` : `<i class='bx bx-server'></i>`}
            </div>
            <div class="lab-content">
                <div class="lab-heading">
                <h3 class="lab-title">${lab.title}</h3>
                <span class="lab-status">${lab.status}</span>
                </div>
                ${lab.category ? `<p class="lab-category">${lab.category}${lab.priority ? ` · ${lab.priority} priority` : ''}</p>` : ''}
                <p class="lab-description">${lab.description}</p>
                <div class="lab-infrastructure">
                    ${lab.infrastructure.map(infra => `<span class="infra-badge">${infra}</span>`).join('')}
                </div>
                <details class="lab-details">
                    <summary>Project outline</summary>
                    <div class="lab-details-content">
                        <h4>Methodology</h4>
                        <ul>${lab.methodology.map(step => `<li>${step}</li>`).join('')}</ul>
                        <h4>Evidence to collect</h4>
                        <ul>${lab.evidence.map(item => `<li>${item}</li>`).join('')}</ul>
                        <h4>Outcome</h4>
                        <p>${lab.outcome}</p>
                    </div>
                </details>
                ${lab.githubUrl || lab.githubLink || lab.reportUrl ? `<div class="lab-links">
                    ${lab.githubUrl || lab.githubLink ? `<a href="${lab.githubUrl || lab.githubLink}" target="_blank" rel="noopener noreferrer" class="lab-link">
                        <i class='bx bxl-github'></i> View Project
                    </a>` : ''}
                    ${lab.reportUrl && lab.reportUrl !== '#' ? `<a href="${lab.reportUrl}" target="_blank" rel="noopener noreferrer" class="lab-link">
                        View Lab Report <i class='bx bx-right-arrow-alt'></i>
                    </a>` : ''}
                </div>` : ''}
            </div>
        </div>
    `).join('');
}

// ========== BLOG SECTION ==========
function populateBlog() {
    const grid = document.getElementById('blogGrid');
    const featured = document.getElementById('blogFeatured');
    const resultCount = document.getElementById('blogResultCount');
    if (!grid || !featured || !resultCount) return;

    if (!Array.isArray(window.blogArticles) || !Array.isArray(portfolioConfig?.blogProjects)) {
        throw new Error('Blog articles or project records could not be loaded.');
    }

    const articles = window.blogArticles;
    const projects = portfolioConfig.blogProjects;
    const featuredArticle = articles[0];
    if (!featuredArticle) {
        throw new Error('The blog needs a valid article to feature.');
    }

    const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
    const getReadingTime = article => {
        const text = [
            article.title,
            article.excerpt,
            ...article.sections.flatMap(section => [
                section.heading,
                ...section.paragraphs,
                ...(section.list || [])
            ])
        ].join(' ');
        const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.ceil(wordCount / 200));
    };
    const formatDate = date => new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC'
    }).format(new Date(`${date}T00:00:00Z`));
    const articleUrl = article => `article.html?slug=${encodeURIComponent(article.slug)}`;

    featured.innerHTML = `
        <article class="blog-featured" data-category="${escapeHtml(featuredArticle.category)}" data-search="${escapeHtml(`${featuredArticle.title} ${featuredArticle.excerpt} ${featuredArticle.category}`.toLowerCase())}">
            <div class="blog-featured-copy">
                <p class="blog-featured-kicker">Featured article · ${escapeHtml(featuredArticle.category)}</p>
                <h3>${escapeHtml(featuredArticle.title)}</h3>
                <p>${escapeHtml(featuredArticle.excerpt)}</p>
                <div class="blog-meta">
                    <time datetime="${escapeHtml(featuredArticle.published)}">${formatDate(featuredArticle.published)}</time>
                    <span>${getReadingTime(featuredArticle)} min read</span>
                </div>
                <a class="blog-featured-link" href="${articleUrl(featuredArticle)}">Read article <span aria-hidden="true">→</span></a>
            </div>
        </article>
    `;

    const otherArticles = articles.slice(1);
    const articleCards = otherArticles.map(article => `
        <article class="blog-card" data-category="${escapeHtml(article.category)}" data-search="${escapeHtml(`${article.title} ${article.excerpt} ${article.category}`.toLowerCase())}">
            <div class="blog-content">
                <div class="blog-card-meta">
                    <span class="blog-category">${escapeHtml(article.category)}</span>
                    <span class="blog-status">Article</span>
                </div>
                <h3 class="blog-title"><a href="${articleUrl(article)}">${escapeHtml(article.title)}</a></h3>
                <p class="blog-summary">${escapeHtml(article.excerpt)}</p>
                <div class="blog-meta">
                    <time datetime="${escapeHtml(article.published)}">${formatDate(article.published)}</time>
                    <span>${getReadingTime(article)} min read</span>
                </div>
                <a class="blog-card-link" href="${articleUrl(article)}">Read article <span aria-hidden="true">→</span></a>
            </div>
        </article>
    `);
    const projectCards = projects.map(project => `
        <article class="blog-card" data-category="${escapeHtml(project.category)}" data-search="${escapeHtml(`${project.title} ${project.excerpt} ${project.category}`.toLowerCase())}">
            ${project.image ? `<div class="blog-image"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy"></div>` : ''}
            <div class="blog-content">
                <div class="blog-card-meta">
                    <span class="blog-category">${escapeHtml(project.category)}</span>
                    <span class="blog-status">Project record</span>
                </div>
                <h3 class="blog-title">${escapeHtml(project.title)}</h3>
                <p class="blog-summary">${escapeHtml(project.excerpt)}</p>
                <a class="blog-card-link" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">View project repository <span aria-hidden="true">↗</span></a>
            </div>
        </article>
    `);
    grid.innerHTML = [...articleCards, ...projectCards].join('');

    const filters = [...document.querySelectorAll('[data-blog-filter]')];
    const search = document.getElementById('blogSearch');
    let activeCategory = 'all';
    const updateResults = () => {
        const query = search.value.trim().toLowerCase();
        let visibleCount = 0;

        grid.querySelectorAll('.blog-card').forEach(card => {
            const categoryMatches = activeCategory === 'all' || card.dataset.category === activeCategory;
            const queryMatches = !query || card.dataset.search.includes(query);
            card.hidden = !categoryMatches || !queryMatches;
            if (!card.hidden) visibleCount += 1;
        });

        const featuredCard = featured.querySelector('.blog-featured');
        const featureCategoryMatches = activeCategory === 'all' || featuredCard.dataset.category === activeCategory;
        const featureQueryMatches = !query || featuredCard.dataset.search.includes(query);
        featuredCard.hidden = !featureCategoryMatches || !featureQueryMatches;

        resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'item' : 'items'}${featuredCard.hidden ? '' : ' · 1 featured article'}`;
    };

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            activeCategory = filter.dataset.blogFilter;
            filters.forEach(button => {
                const isActive = button === filter;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });
            updateResults();
        });
    });
    search.addEventListener('input', updateResults);
    updateResults();
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

if (EMAILJS_CONFIG.publicKey && window.emailjs) {
    window.emailjs.init(EMAILJS_CONFIG.publicKey);
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!EMAILJS_CONFIG.publicKey || !EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !window.emailjs) {
            showFormMessage('The message form is not configured yet. Please email me directly at morganke254@gmail.com.', 'error');
            return;
        }

        showFormMessage('Sending message...', 'info');

        const templateParams = {
            from_name: name.trim(),
            from_email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
            to_email: 'morganke254@gmail.com'
        };

        window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
            .then(function(response) {
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
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    formMessage.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// ========== SCROLL ANIMATIONS ==========
function initializeSectionEffects() {
    const sectionsToAnimate = [...document.querySelectorAll('section[data-effect]')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const pendingSections = new Set(sectionsToAnimate);
    let observer;
    const revealSection = section => {
        if (!pendingSections.delete(section)) return;
        section.classList.add('effect-started');
        observer?.unobserve(section);
    };
    const checkVisibleSections = () => {
        pendingSections.forEach(section => {
            const bounds = section.getBoundingClientRect();
            if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
                revealSection(section);
            }
        });

        if (!pendingSections.size) {
            window.removeEventListener('scroll', checkVisibleSections);
            window.removeEventListener('resize', checkVisibleSections);
            observer?.disconnect();
        }
    };

    sectionsToAnimate.forEach(section => {
        const content = section.id === 'home'
            ? section
            : section.querySelector(':scope > h2, :scope > div')?.matches('h1, h2')
                ? section
                : section.querySelector(':scope > div');
        const items = content === section
            ? [...section.children]
            : [...(content?.children || [])];

        items.forEach((item, index) => {
            item.classList.add('section-effect-item');
            item.style.setProperty('--effect-index', String(index));
        });
    });

    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) revealSection(entry.target);
            });
            checkVisibleSections();
        }, { threshold: 0.05 });
    }

    sectionsToAnimate.forEach(section => observer?.observe(section));
    window.addEventListener('scroll', checkVisibleSections, { passive: true });
    window.addEventListener('resize', checkVisibleSections);
    checkVisibleSections();
}

function initializeScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll([
        'section:not([data-effect]) .heading',
        '.about-summary',
        '#about .why-hire-card, #why-hire-me .why-hire-card',
        '.skill-category',
        '.skill-item',
        '.project-card',
        '.lab-card',
        '.certification-card',
        '.blog-card',
        '.service-box',
        '.testimonial-card',
        '.stat-box',
        '.project-image, .lab-image, .certification-image, .blog-image',
        '.contact-form'
    ].join(', '));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const pendingElements = new Set(elementsToAnimate);
    let observer;
    const revealElement = element => {
        element.classList.add('is-visible');
        pendingElements.delete(element);
        observer?.unobserve(element);
    };
    const stopWatchingWhenComplete = () => {
        if (pendingElements.size) return;
        window.removeEventListener('scroll', revealVisibleElements);
        window.removeEventListener('resize', revealVisibleElements);
        observer?.disconnect();
    };

    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    revealElement(entry.target);
                }
            });
            stopWatchingWhenComplete();
        }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    }

    elementsToAnimate.forEach(element => {
        element.classList.add('scroll-reveal');
        if (element.matches('section:not(#home) .heading')) {
            element.classList.add('reveal-from-bottom');
        } else if (element.matches('.project-image, .lab-image, .certification-image, .blog-image')) {
            element.classList.add('reveal-from-right');
        } else if (element.matches('.certification-card')) {
            element.classList.add('reveal-flip');
        } else if (element.matches('.blog-card')) {
            element.classList.add('reveal-fade');
        } else if (element.matches('.about-summary, .contact-form')) {
            element.classList.add('reveal-from-bottom');
        } else {
            element.classList.add('reveal-zoom');
        }

        if (element.matches('.lab-card')) {
            element.querySelectorAll('.lab-content > *').forEach((line, index) => {
                line.classList.add('lab-line');
                line.style.setProperty('--line-delay', `${index * 120}ms`);
            });
        }

        if (element.matches('.skill-item')) {
            const itemIndex = Array.from(element.parentElement.children).indexOf(element);
            element.style.setProperty('--reveal-delay', `${itemIndex * 60}ms`);
        } else if (element.matches('.skill-category, .project-card, .certification-card, .blog-card, .lab-card, .why-hire-card, .service-box, .testimonial-card, .stat-box')) {
            const cardClass = ['service-box', 'testimonial-card', 'stat-box'].find(className =>
                element.classList.contains(className)
            ) || Array.from(element.classList).find(className =>
                className.endsWith('-card') || className.endsWith('-category')
            );
            const siblings = Array.from(element.parentElement.children).filter(sibling => sibling.classList.contains(cardClass));
            const itemIndex = siblings.indexOf(element);
            const delay = element.matches('.project-card')
                ? itemIndex * 100
                : (itemIndex % 6) * 70;
            element.style.setProperty('--reveal-delay', `${delay}ms`);
        }

        observer?.observe(element);
    });

    const revealVisibleElements = () => {
        pendingElements.forEach(element => {
            const bounds = element.getBoundingClientRect();
            const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
            if (visibleHeight > 0 && visibleHeight / bounds.height >= 0.12) {
                revealElement(element);
            }
        });
        stopWatchingWhenComplete();
    };
    window.addEventListener('scroll', revealVisibleElements, { passive: true });
    window.addEventListener('resize', revealVisibleElements);
    revealVisibleElements();
}

// Count the existing portfolio metrics without inventing skill percentages.
const pendingStats = new Set(document.querySelectorAll('.stats, .testimonials-stats'));
let statsObserver;
const animateStats = stats => {
    if (!pendingStats.delete(stats)) return;
    statsObserver?.unobserve(stats);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    stats.querySelectorAll('.stat-number').forEach(stat => {
        const originalValue = stat.textContent.trim();
        const numericValue = originalValue.match(/[\d.]+/);
        if (!numericValue) return;
        animateCounter(stat, 0, Number(numericValue[0]), 1600, originalValue);
    });
};
const checkVisibleStats = () => {
    pendingStats.forEach(stats => {
        const bounds = stats.getBoundingClientRect();
        const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
        if (visibleHeight > 0 && visibleHeight / bounds.height >= 0.5) {
            animateStats(stats);
        }
    });
    if (!pendingStats.size) {
        window.removeEventListener('scroll', checkVisibleStats);
        window.removeEventListener('resize', checkVisibleStats);
        statsObserver?.disconnect();
    }
};

if ('IntersectionObserver' in window) {
    statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) animateStats(entry.target);
        });
        checkVisibleStats();
    }, { threshold: 0.5 });
}

pendingStats.forEach(stats => statsObserver?.observe(stats));
window.addEventListener('scroll', checkVisibleStats, { passive: true });
window.addEventListener('resize', checkVisibleStats);
checkVisibleStats();

function animateCounter(element, start, end, duration, originalValue) {
    const startTime = performance.now();
    const numericValue = originalValue.match(/[\d.]+/);
    const decimalPlaces = numericValue?.[0].split('.')[1]?.length || 0;
    const suffix = originalValue.slice(numericValue[0].length);
    let valueNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
    if (!valueNode) {
        valueNode = document.createTextNode('');
        element.appendChild(valueNode);
    }
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = (start + (end - start) * easeOutQuart).toFixed(decimalPlaces);
        
        valueNode.nodeValue = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}
