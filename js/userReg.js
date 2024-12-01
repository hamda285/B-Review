//========user registration==============
const userRegistrationForm = document.getElementById('userRegistrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const error = document.getElementById('error');
const success = document.getElementById('suc');

// form submission
userRegistrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    clearMessages(); // Clear previous messages

    // Validate fields
    if (!validateUsername() || !validateEmail() || !validatePassword() || !validateConfirmPassword()) {
        return; // Stop if any validation fails
    }

      // Create user object and save to localstorage
      const user = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value
    };

      // Check for existing users
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some(existingUser => existingUser.email === user.email)) {
          setError('Email already exists!');
          return;
      }
