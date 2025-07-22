// Mirro Photography Animations
class MirroAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHeaderScroll();
        this.setupMagneticEffect();
        this.setupParallax();
        this.setupIntersectionObserver();
        this.setupSmoothScroll();
    }

    setupScrollAnimations() {
        const animateElements = document.querySelectorAll('.scroll-animate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(el => observer.observe(el));
    }

    setupHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop;
        });
    }

    setupMagneticEffect() {
        const magneticElements = document.querySelectorAll('.cta-button, .contact-btn, .cart-btn');

        magneticElements.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const deltaX = (x - centerX) / centerX;
                const deltaY = (y - centerY) / centerY;

                const moveX = deltaX * 10;
                const moveY = deltaY * 10;

                btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroElements = document.querySelectorAll('.hero::before, .hero::after');

            heroElements.forEach((element, index) => {
                const speed = (index + 1) * 0.3;
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    }

    setupIntersectionObserver() {
        const sections = document.querySelectorAll('section');

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-active');
                }
            });
        }, {
            threshold: 0.3
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
            section.classList.add('section-animate');
        });
    }

    setupSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav a[href^="#"]');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Ініціалізація анімацій після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    new MirroAnimations();
});

export default MirroAnimations;