//=====================login==========================
const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Add event listener for the login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists
    const user = users.find((usr) => usr.email === emailInput.value && usr.password === passwordInput.value);

    // Handle login result
    if (!user) {
        alert("Invalid email or password");
        return;
    }

    // Store current user in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));
   
    //Redirect to dashboard after login
    window.location.href = '../html/dashboard.html';
   
});

