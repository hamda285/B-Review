//toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Toggle the navigation menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
