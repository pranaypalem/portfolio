// Portfolio JavaScript - Static Site Version

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                navMenu.classList.remove('active');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    if (header) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.background = 'hsla(0, 0%, 100%, 0.95)';
                header.style.backdropFilter = 'blur(12px)';
            } else {
                header.style.background = 'hsla(0, 0%, 100%, 0.95)';
                header.style.backdropFilter = 'blur(8px)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.domain-card, .project-card, .skill-category, .timeline-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add stagger effect to grid items
    const gridItems = document.querySelectorAll('.domains-grid > *, .projects-grid > *, .skills-grid > *');
    gridItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 100}ms`;
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });


    // Active nav link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `/#${current}` || 
                (current === '' && link.getAttribute('href') === '/')) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call

    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-title .text-gradient');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Add parallax effect to hero background elements
    const heroBgElements = document.querySelectorAll('.hero-bg-element');
    if (heroBgElements.length > 0) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            heroBgElements.forEach((element, index) => {
                const speed = (index + 1) * 0.3;
                element.style.transform = `translateY(${parallax * speed}px)`;
            });
        });
    }

    // Initialize tooltips for tech tags
    const techTags = document.querySelectorAll('.tech-tag, .skill-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    });

    // Domain filtering functionality
    function initDomainFiltering() {
        const domainCards = document.querySelectorAll('.domain-card');
        const projectCards = document.querySelectorAll('.project-card');
        const projectsSection = document.getElementById('projects');
        let activeFilter = null;
        
        // Create a "Show All" state
        function showAllProjects() {
            projectCards.forEach(card => {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
            
            domainCards.forEach(card => {
                card.classList.remove('active-filter');
            });
            
            activeFilter = null;
        }
        
        // Filter projects by domain
        function filterProjectsByDomain(domain) {
            const domainSlugMap = {
                'AI/ML': 'ai-ml',
                'Robotics': 'robotics',
                'Simulation': 'simulation',
                'Industrial Automation': 'industrial-automation'
            };
            
            const targetSlug = domainSlugMap[domain];
            
            projectCards.forEach((card, index) => {
                const projectDomain = card.querySelector('.project-domain');
                const projectSlug = projectDomain ? projectDomain.classList[1] : null;
                
                if (projectSlug === targetSlug) {
                    // Show matching projects with staggered animation
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                } else {
                    // Hide non-matching projects
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }
        
        // Add click handlers to domain cards
        domainCards.forEach(card => {
            card.style.cursor = 'pointer';
            
            card.addEventListener('click', function() {
                const domainTitle = this.querySelector('.domain-title').textContent;
                
                // Smooth scroll to projects section
                if (projectsSection) {
                    const headerOffset = 100;
                    const elementPosition = projectsSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Toggle filter
                if (activeFilter === domainTitle) {
                    // If clicking the same domain, show all
                    showAllProjects();
                } else {
                    // Apply new filter
                    activeFilter = domainTitle;
                    
                    // Update visual state
                    domainCards.forEach(c => c.classList.remove('active-filter'));
                    this.classList.add('active-filter');
                    
                    // Filter projects
                    setTimeout(() => {
                        filterProjectsByDomain(domainTitle);
                    }, 500); // Wait for scroll to complete
                }
            });
            
            // Enhanced hover effect for clickable domains
            card.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active-filter')) {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active-filter')) {
                    this.style.transform = 'translateY(-4px) scale(1)';
                    this.style.boxShadow = '';
                }
            });
        });
        
        // Add visual indicator that domains are clickable
        const domainsSection = document.getElementById('domains');
        if (domainsSection) {
            const sectionDescription = domainsSection.querySelector('.section-description');
            if (sectionDescription) {
                sectionDescription.textContent = 'Click on any expertise area to view related projects';
            }
        }
    }
    
    // Initialize domain filtering
    initDomainFiltering();

    console.log('Portfolio loaded successfully! 🚀');
});