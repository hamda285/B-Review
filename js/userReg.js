//========user registration==============
const userRegistrationForm = document.getElementById('userRegistrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const error = document.getElementById('error');
const success = document.getElementById('success');

// Event listener for form submission
userRegistrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    clearMessages(); // Clear previous messages

    // Validate fields
    if (!validateUsername() || !validateEmail() || !validatePassword() || !validateConfirmPassword()) {
        return; // Stop if any validation fails
    }

    // Create user object and save to local storage
    const user = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value // Note: In a real app, do not store plain passwords!
    };

    // Check for existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(existingUser => existingUser.email === user.email)) {
        setError('Email already exists!');
        return;
    }

    // Add new user and store it
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users)); 
    success.textContent = 'Registration successful!...';
    setTimeout(() => window.location.href = 'login.html', 2000);
});

// Clear error and success messages
function clearMessages() {
    error.textContent = '';
    success.textContent = '';
}

// Validate username
function validateUsername() {
    if (username.value.trim() === '') {
        setError('Username is required');
        return false;
    }
    return true;
}

// Validate email
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        setError("Please enter a valid email address");
        return false;
    }
    return true;
}

// Validate password
function validatePassword() {
    if (password.value.length < 6) {
        setError("Password must be at least 6 characters long");
        return false;
    }
    return true;
}

// Validate confirm password
function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        setError("Passwords do not match");
        return false;
    }
    return true;
}

// Set error message
function setError(message) {
    error.textContent = message;
}