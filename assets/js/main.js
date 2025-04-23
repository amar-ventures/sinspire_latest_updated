
// Get the hamburger icon, nav menus, and nav icons
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navIcons = document.querySelector('.nav-icons');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuList = document.querySelector('.hamburger-menu-list');
const hamburgerMenuIcons = document.querySelector('.hamburger-menu-icons');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {

    console.log('cliekd')
    // navMenu.classList.toggle('active'); // Hide original nav-menu
    // navIcons.classList.toggle('active'); // Hide original nav-icons
    hamburgerMenu.classList.toggle('active'); // Show hamburger menu

    // Toggle the display of the div
    if (hamburgerMenu.style.display === "none" || hamburgerMenu.style.display === "") {
        hamburgerMenu.style.display = "block";  // Show the div
    } else {
        hamburgerMenu.style.display = "none";   // Hide the div
    }
    

    // Toggle the hamburger and close icons
    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times'); // Switch to close icon
    } else {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars'); // Switch back to hamburger icon
    }
});

hamburgerMenu.addEventListener('click', (event) => {
        // Toggle the display of the div
        if (hamburgerMenu.style.display === "none" || hamburgerMenu.style.display === "") {
            hamburgerMenu.style.display = "block";  // Show the div
        } else {
            hamburgerMenu.style.display = "none";   // Hide the div
        }

          // Toggle the hamburger and close icons
    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times'); // Switch to close icon
    } else {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars'); // Switch back to hamburger icon
    }
  });
