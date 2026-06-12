// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Change icon
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Animated counter for stats
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    const increment = target / speed;
    
    const updateCount = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observer.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    observer.observe(counter);
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.sobre-card, .pratica-item, .beneficio-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    revealObserver.observe(element);
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter');
if (newsletterForm) {
    const submitButton = newsletterForm.querySelector('button');
    const emailInput = newsletterForm.querySelector('input');
    
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        
        if (email && email.includes('@') && email.includes('.')) {
            alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
            emailInput.value = '';
        } else if (email) {
            alert('Por favor, insira um e-mail válido.');
        } else {
            alert('Por favor, insira seu e-mail.');
        }
    });
}

// Button click handlers
const discoverBtn = document.querySelector('.hero .btn-primary');
const ctaBtn = document.querySelector('.cta .btn-secondary');

if (discoverBtn) {
    discoverBtn.addEventListener('click', () => {
        const sobreSection = document.querySelector('#sobre');
        if (sobreSection) {
            sobreSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('#contato');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        alert('Entre em contato conosco: contato@agrosustentavel.com.br');
    });
}

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Add some entrance animations
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-divider, .hero-description, .btn-primary');
    heroElements.forEach((element, index) => {
        element.style.animation = `fadeInUp 0.6s ease ${index * 0.2}s both`;
    });
});

// Console message for developers
console.log('%c🌱 Agro Forte | Futuro Sustentável', 'color: #2d6a4f; font-size: 20px; font-weight: bold;');
console.log('%cEquilíbrio entre produção e meio ambiente', 'color: #40916c; font-size: 14px;');
