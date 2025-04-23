// Intersection Observer configuration
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Create the observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, observerOptions);

// Function to initialize animations
function initializeAnimations() {
    // Select elements to animate
    const animatedElements = document.querySelectorAll([
        '.section-header',
        '.card',
        '.group',
        'img[loading="lazy"]',
        '#vision .md\\:w-1\\/2',
        '#programs .group',
        '#goals .group'
    ].join(','));

    // Add animation classes and start observing
    animatedElements.forEach((element, index) => {
        // Add different animation classes based on element type or position
        if (element.closest('#vision')) {
            element.classList.add('fade-in-element', index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        } else if (element.matches('img[loading="lazy"]')) {
            element.classList.add('fade-in-element', 'scale-in');
        } else {
            element.classList.add('fade-in-element');
        }

        observer.observe(element);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);