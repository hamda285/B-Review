//=====================login==========================
const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

//Add login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission