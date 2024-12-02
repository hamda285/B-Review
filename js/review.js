
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