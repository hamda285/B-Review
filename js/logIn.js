//=====================login==========================
const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

 
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists
    const user = users.find((usr) => usr.email === emailInput.value && usr.password === passwordInput.value);


    if (!user) {
        alert("Invalid email or password");
        return;
    }

    // Store current user to local storage
    localStorage.setItem('currentUser', JSON.stringify(user));
   
    //go to dashboard page after login
    window.location.href = '../html/dashboard.html';
});

