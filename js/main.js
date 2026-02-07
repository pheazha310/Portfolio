// js/main.js - Main JavaScript file for the portfolio website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');

    // Initialize all functionality
    initNavigation();
    initTheme();
    initActiveMenu();
    initFormValidation();
    initAnimations();
    initCurrentYear();
    initFAQ();
    initProjectFilter();
    initSkillAnimations();
});

// ========== NAVIGATION FUNCTIONS ==========

// Mobile navigation toggle
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Toggle active class on hamburger
            this.classList.toggle('active');

            // Toggle active class on nav menu
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Dark mode toggle
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        updateToggle(theme);
    }

    function updateToggle(theme) {
        if (!themeToggle) return;
        const isDark = theme === 'dark';
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Highlight active menu item based on current page
function initActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        // Remove active class from all links
        link.classList.remove('active');

        // Check if this link matches the current page
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === undefined && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========== FORM VALIDATION ==========

function initFormValidation() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    // Form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Show error function
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');

        // Add error styling
        input.style.borderColor = '#ef4444';
        input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';

        // Display error message
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    // Clear error function
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');

        // Remove error styling
        input.style.borderColor = '';
        input.style.boxShadow = '';

        // Clear error message
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }

    // Validate individual field
    function validateField(input) {
        const value = input.value.trim();

        // Check if field is empty
        if (!value) {
            showError(input, 'This field is required');
            return false;
        }

        // Email specific validation
        if (input.type === 'email' && !emailRegex.test(value)) {
            showError(input, 'Please enter a valid email address');
            return false;
        }

        // Message length validation
        if (input.id === 'message' && value.length < 10) {
            showError(input, 'Message must be at least 10 characters long');
            return false;
        }

        // Clear any previous errors
        clearError(input);
        return true;
    }

    // Real-time validation on blur
    [nameInput, emailInput, messageInput].forEach(input => {
        if (input) {
            input.addEventListener('blur', () => {
                if (input.value.trim()) {
                    validateField(input);
                }
            });

            input.addEventListener('input', () => {
                clearError(input);
            });
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        const fields = [nameInput, emailInput, messageInput];

        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Show success message
            if (formMessage) {
                formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }

            // In a real application, you would send the data to a server here
            // For now, we'll just log it to the console
            console.log('Form submitted successfully!');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Message:', messageInput.value);

            // You could add AJAX/Fetch request here to send data to a server
            /*
            fetch('your-server-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            */
        } else {
            // Show error message
            if (formMessage) {
                formMessage.textContent = 'Please fix the errors above and try again.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        }
    });
}

// ========== ANIMATIONS ==========

function initAnimations() {
    // Fade-in animation for elements
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });
    }

    // Add CSS for animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card {
            transition: all 0.3s ease;
        }
        
        .skill-progress {
            transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(styleSheet);
}

// ========== PROJECT FILTER ==========

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Get filter value
                const filterValue = this.getAttribute('data-filter');

                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');

                    if (filterValue === 'all' || !categories || categories.includes(filterValue)) {
                        card.style.display = 'block';

                        // Trigger reflow for animation
                        void card.offsetWidth;

                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';

                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// ========== SKILL ANIMATIONS ==========

function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');

    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const percent = progressBar.getAttribute('data-percent') || '80%';

                    // Animate the width
                    setTimeout(() => {
                        progressBar.style.width = percent;
                    }, 300);

                    // Stop observing after animation
                    skillObserver.unobserve(progressBar);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });

        // Set initial width to 0 and observe each bar
        skillBars.forEach(bar => {
            bar.style.width = '0%';
            skillObserver.observe(bar);
        });
    }
}

// ========== FAQ ACCORDION ==========

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle active class on question
                this.classList.toggle('active');

                // Get the answer element
                const answer = this.nextElementSibling;

                // Toggle answer visibility
                if (this.classList.contains('active')) {
                    answer.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.classList.remove('active');
                    answer.style.maxHeight = '0';
                }
            });
        });

        // Add CSS for FAQ transitions
        const faqStyle = document.createElement('style');
        faqStyle.textContent = `
            .faq-answer {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }
            
            .faq-answer.active {
                transition: max-height 0.5s ease;
            }
            
            .faq-question i {
                transition: transform 0.3s ease;
            }
            
            .faq-question.active i {
                transform: rotate(180deg);
            }
        `;
        document.head.appendChild(faqStyle);
    }
}

// ========== UTILITY FUNCTIONS ==========

// Update current year in footer
function initCurrentYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();

            // Calculate position to scroll to
            const headerOffset = 80;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            // Smooth scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL without reloading page
            if (history.pushState) {
                history.pushState(null, null, href);
            }
        }
    });
});

// Add loading state to buttons when clicked
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Only add loading state if button has type submit or is a link without href
        if (this.type === 'submit' || (this.tagName === 'A' && !this.getAttribute('href'))) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;

            // Reset after 3 seconds (for demo purposes)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 3000);
        }
    });
});

// Add hover effects to cards
document.querySelectorAll('.skill-card, .project-card, .value-card, .volunteer-card, .learning-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Re-initialize animations on resize
        initSkillAnimations();
    }, 250);
});

// Log page view (for analytics - you can replace with real analytics)
console.log(`Viewing page: ${window.location.pathname}`);
