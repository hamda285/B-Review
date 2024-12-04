
//====================header.js==================
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const usernameDisplay = document.getElementById('username-display');
const logoutButton = document.getElementById('logout-button');

//show user if logged in
if (currentUser) {
    usernameDisplay.textContent = `${currentUser.username}`;
} else {
    usernameDisplay.textContent = 'Anonymous User'; // change anonymous if it's not login
}

// Logout
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = '../html/login.html';
});

//after logout prevent to back user
window.addEventListener('popstate', (event) => {
    event.preventDefault();
    if (!currentUser) {
        alert("Please log in again.");
        window.location.href = '../html/login.html';
    }
});


//=================review.js====================
document.addEventListener('DOMContentLoaded', () => {
    const businessNameContainer = document.getElementById('business-name');
    const ratingValue = document.querySelector('input[name="rating"]');
    const allStars = document.querySelectorAll('.rating .star');
    const reviewForm = document.getElementById('review-form');

    //get the business name using(urlParams)
    const urlParams = new URLSearchParams(window.location.search);
    const businessName = urlParams.get('business');

    //show the business name
    if (businessName) {
        businessNameContainer.innerText = businessName;
    } else {
        businessNameContainer.innerText = "Business Name not found.";
    }

    // Star rating 
    allStars.forEach((star, idx) => {
        star.addEventListener('click', function () {
            ratingValue.value = idx + 1; 
            allStars.forEach((s, i) => {
                s.classList.toggle('bxs-star', i <= idx);
                s.classList.toggle('bx-star', i > idx);
            });
        });
    });

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const rating = ratingValue.value;
        const opinion = document.getElementById('tArea').value;

        //review data to localStorage
        const reviewData = {
            rating: rating,
            opinion: opinion,
            business: businessName
        };
        localStorage.setItem('userReview', JSON.stringify(reviewData));

        // Show confirmation alert
        alert(`Thank you for your review!\nRating: ${rating} Star(s)\nComment: ${opinion}`);

        //redirect comments page
        window.location.href = '../html/comments.html';
    });
});


