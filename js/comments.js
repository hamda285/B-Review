
// // //====================header.js==================

const currentUser = JSON.parse(localStorage.getItem('currentUser')); 
const usernameDisplay = document.getElementById('username-display');
const logoutButton = document.getElementById('logout-button');

// check username if logged in
if (currentUser) {
    usernameDisplay.textContent = `${currentUser.username}`;
} else {
    usernameDisplay.textContent = 'Anonymous User'; // not show if its  not login
}

//Logout
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser'); 
    window.location.href = '../html/login.html'; 
});
// Prevent back after logout
window.addEventListener('back', (event) => {
  event.preventDefault()
  if (!currentUser) {
    alert("Please log in again.");
    window.location.href = '../html/login.html'; // Redirect to login page 
  }
});


const reviewData = JSON.parse(localStorage.getItem('userReview'));

//current user from localStorage.
const users = JSON.parse(localStorage.getItem('users')); 


const comments = [];

// Check if the reviewData exists and has the necessary structure
if (reviewData && users) {
  const newComment = {
    image: "https://media.istockphoto.com/id/1389898237/photo/cute-girl-iconic-character-with-glasses-3d-rendering.jpg?s=612x612&w=0&k=20&c=dFG5lmBicdNe33IrFgr8YYrX1rF38DljWS7g84Q78HI=", // Default profile image
    name: users.username,
    business: reviewData.business,
    rating: reviewData.rating, 
    opinion: reviewData.opinion, 
  };

  comments.push(newComment);
}

//Current Slide
let i = 0;//prev
//Total Slides
let j = comments.length; //next

let commentContainer = document.getElementById("comment-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// nextBtn.addEventListener("click", () => {
//   i = (j + i + 1) % j;
//   displayComment();
// });

// prevBtn.addEventListener("click", () => {
//   i = (j + i - 1) % j;
//   displayComment();
// });

let displayComment = () => {
  commentContainer.innerHTML = `
    <img src=${comments[i].image}>
    <h3>${comments[i].username}</h3>
    <h6>${comments[i].business}</h6>
    <p>${comments[i].opinion}</p>
    <p>${comments[i].rating}<p/>
  `;
};
window.onload = displayComment;

//==================== Slider Logic ====================

