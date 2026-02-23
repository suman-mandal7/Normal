// Custom Cursor
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');
const interactiveEls = document.querySelectorAll('a, button, .skill-tags span, .social-icon');

document.addEventListener('mousemove', (e) => {
    // Ensure the cursor follows smoothly
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    // Slight delay for follower
    if (follower) {
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    }
});

// Interactive hover effects for the custom cursor
interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor && follower) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '2px solid var(--primary-color)';

            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.borderColor = 'rgba(0, 242, 254, 0.5)';
            follower.style.background = 'rgba(0, 242, 254, 0.1)';
        }
    });

    el.addEventListener('mouseleave', () => {
        if (cursor && follower) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--primary-color)';
            cursor.style.border = 'none';

            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.borderColor = 'var(--secondary-color)';
            follower.style.background = 'transparent';
        }
    });
});

// 3D Image Hover Effect
const heroImage = document.querySelector('.hero-image');
const imgWrapper = document.getElementById('profile-picture');

if (heroImage && imgWrapper) {
    heroImage.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        imgWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    heroImage.addEventListener('mouseleave', () => {
        imgWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
        imgWrapper.style.transition = 'transform 0.5s ease';
    });

    heroImage.addEventListener('mouseenter', () => {
        imgWrapper.style.transition = 'none';
    });
}

// Typing Effect
const roles = ["Student at Gour Mahavidyalaya", "Web Developer", "UI/UX Designer", "Creative Thinker"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
const typingElement = document.getElementById('type-role');

function type() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing new word
    }

    setTimeout(type, typingSpeed);
}

// Start typing effect after initial animations load
setTimeout(type, 1500);

// Scroll Animations using Intersection Observer
const revealElements = document.querySelectorAll('.scroll-reveal');

// Check if IntersectionObserver is supported
if ('IntersectionObserver' in window) {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                scrollObserver.unobserve(entry.target); // Optional: only animate once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => scrollObserver.observe(el));
} else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
}

// Navbar Scroll Effect
const navbar = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 6%';
        navbar.style.background = 'rgba(5, 5, 5, 0.9)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.padding = '1.5rem 6%';
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.boxShadow = 'none';
    }
});

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Glitch Effect random interval configuration if needed
// (Glitch is mainly handled via CSS, but we can add random stutters here)
const glitchEl = document.querySelector('.glitch');
if (glitchEl) {
    setInterval(() => {
        glitchEl.style.animationDuration = Math.random() * 800 + 200 + 'ms';
    }, 2000);
}
