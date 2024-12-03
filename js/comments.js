
//====================header.js==================
// Load current user information from local storage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const usernameDisplay = document.getElementById('username-display');
const logoutButton = document.getElementById('logout-button');

//Display username if logged in
if (currentUser) {
  usernameDisplay.textContent = `${currentUser.username}`;
} else {
  usernameDisplay.textContent = ''; // Hide if not logged in
}

//Logout functionality
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('currentUser'); // Clear current user
  window.location.href = '../html/logIn.html'; // Redirect to login page
});

// revent navigating back to the login page after logout
window.addEventListener('popstate', (event) => {
  event.preventDefault();
  if (!currentUser) {
    alert("Please log in again.");
    window.location.href = './html/login.html'; // Redirect to login page 
  }
});



//==================== comments.js ====================
// Retrieve the review data from localStorage
const reviewData = JSON.parse(localStorage.getItem('userReview'));

// Retrieve the current username from localStorage.
const currentUser1 = JSON.parse(localStorage.getItem('currentUser')); // Fallback to "Customer" if username is not found

// Initialize the comments array and add the review data if available
const comments = [];

// Check if the reviewData exists and has the necessary structure
if (reviewData && currentUser1) {
  const newComment = {
    name: currentUser1.username,
    image: "https://media.istockphoto.com/id/1389898237/photo/cute-girl-iconic-character-with-glasses-3d-rendering.jpg?s=612x612&w=0&k=20&c=dFG5lmBicdNe33IrFgr8YYrX1rF38DljWS7g84Q78HI=", // Default profile image
    business: reviewData.business,
    rating: reviewData.rating, // Rating from localStorage
    opinion: reviewData.opinion, // Opinion from localStorage
  };

  comments.push(newComment); // Add the single comment
}

//==================== Slider Logic ====================

// let i = 0;
// let j = comments.length; // Total number of comments

let commentContainer = document.getElementById("comment-container");


// Show the first comment
const displayComment = () => {
  if (comments.length > 0) {
    const currentComment = comments[i];

    // Create HTML structure for the comment with improved line breaks and icons for rating
    commentContainer.innerHTML = `
      <div class="testimonial-card">
        <div class="testimonial-img">
          <img src="${currentComment.image}" alt="profile picture" class="profile-img">
        </div>
        <div class="testimonial-content">
          <h3 class="testimonial-name">${currentComment.name}</h3>
          <p class="testimonial-business">${currentComment.business}</p>
          <p class="testimonial-opinion">${currentComment.opinion}</p>
          <p class="testimonial-rating">${getStarRating(currentComment.rating)}</p>
        </div>
      </div>
    `;
  } else {
    // Display a fallback message if there are no comments
    commentContainer.innerHTML = "<p>No reviews yet.</p>";
  }
};

// Function to get star icons based on rating
const getStarRating = (rating) => {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<i class="bx bxs-star"></i>'; // Filled star
    } else {
      stars += '<i class="bx bx-star" style="color: #ddd;"></i>'; // Empty star
    }
  }
  return stars;
};

// // Move to the next comment
// nextBtn.addEventListener("click", () => {
//   if (j > 1) {  // Only move to the next comment if there are more than one
//     i = (i + 1) % j;  // Move to the next comment, cycle back to the first comment
//     displayComment();
//   }
// });

// // Move to the previous comment
// prevBtn.addEventListener("click", () => {
//   if (j > 1) {  // Only move to the previous comment if there are more than one
//     i = (i - 1 + j) % j;  // Move to the previous comment, cycle back to the last comment
//     displayComment();
//   }
// });


function scrollRightSection(next) {
  let nextBtn = document.getElementById(next);
  nextBtn.scrollBy({ left: 300, behavior: "smooth" });
}

function scrollLeftSection(prev) {
  let prevBtn = document.getElementById(prev);
  prevBtn.scrollBy({ left: -300, behavior: "smooth" });
}



//Initial display of the comment
window.onload = displayComment;
