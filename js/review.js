
//====================header.js==================
// Load current user information from local storage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const usernameDisplay = document.getElementById('username-display');
const logoutButton = document.getElementById('logout-button');

// Display username if logged in
if (currentUser) {
    usernameDisplay.textContent = `${currentUser.username}`;
} else {
    usernameDisplay.textContent = ''; // Hide if not logged in
}

// Logout functionality
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser'); // Clear current user
    window.location.href = 'login.html'; // Redirect to login page
});

// Prevent navigating back to the login page after logout
window.addEventListener('popstate', (event) => {
    event.preventDefault();
    if (!currentUser) {
        alert("Please log in again.");
        window.location.href = '../html/login.html'; // Redirect to login page
    }
});


//=================review.js====================
document.addEventListener('DOMContentLoaded', () => {
    const businessNameContainer = document.getElementById('business-name');
    const ratingValue = document.querySelector('input[name="rating"]');
    const allStars = document.querySelectorAll('.rating .star');
    const reviewForm = document.getElementById('review-form');

    // Get the business name from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const businessName = urlParams.get('business');

    // Display the business name
    if (businessName) {
        businessNameContainer.innerText = businessName;
    } else {
        businessNameContainer.innerText = "Business Name not found.";
    }

        // Star rating functionality
        allStars.forEach((star, idx) => {
            star.addEventListener('click', function() {
                ratingValue.value = idx + 1; // Set rating value
                allStars.forEach((s, i) => {
                    s.classList.toggle('bxs-star', i <= idx);
                    s.classList.toggle('bx-star', i > idx);
                });
            });
        });