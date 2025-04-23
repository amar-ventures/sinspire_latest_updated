
// Get the hamburger icon, nav menus, and nav icons
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');
// const navIcons = document.querySelector('.nav-icons');
// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const hamburgerMenuList = document.querySelector('.hamburger-menu-list');
// const hamburgerMenuIcons = document.querySelector('.hamburger-menu-icons');

// // Add a click event listener to the hamburger icon
// hamburger.addEventListener('click', () => {

//     console.log('cliekd')
//     // navMenu.classList.toggle('active'); // Hide original nav-menu
//     // navIcons.classList.toggle('active'); // Hide original nav-icons
//     hamburgerMenu.classList.toggle('active'); // Show hamburger menu

//     // Toggle the display of the div
//     if (hamburgerMenu.style.display === "none" || hamburgerMenu.style.display === "") {
//         hamburgerMenu.style.display = "block";  // Show the div
//     } else {
//         hamburgerMenu.style.display = "none";   // Hide the div
//     }
    

//     // Toggle the hamburger and close icons
//     if (hamburger.classList.contains('fa-bars')) {
//         hamburger.classList.remove('fa-bars');
//         hamburger.classList.add('fa-times'); // Switch to close icon
//     } else {
//         hamburger.classList.remove('fa-times');
//         hamburger.classList.add('fa-bars'); // Switch back to hamburger icon
//     }
// });

// hamburgerMenu.addEventListener('click', (event) => {
//         // Toggle the display of the div
//         if (hamburgerMenu.style.display === "none" || hamburgerMenu.style.display === "") {
//             hamburgerMenu.style.display = "block";  // Show the div
//         } else {
//             hamburgerMenu.style.display = "none";   // Hide the div
//         }

//           // Toggle the hamburger and close icons
//     if (hamburger.classList.contains('fa-bars')) {
//         hamburger.classList.remove('fa-bars');
//         hamburger.classList.add('fa-times'); // Switch to close icon
//     } else {
//         hamburger.classList.remove('fa-times');
//         hamburger.classList.add('fa-bars'); // Switch back to hamburger icon
//     }
//   });


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