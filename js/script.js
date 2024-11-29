//toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Toggle the navigation menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


//user reviews
const reviews = [
    {
        username: "Tasniim",
        business: "Silver Coffee",
        rating: 5,
        opinion: "Amazing coffee and great ambiance! Will definitely visit again.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Jamac",
        business: "Bakery Delight",
        rating: 4,
        opinion: "Delicious pastries, but the service could be better.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Omar",
        business: "Bookstore XYZ",
        rating: 3,
        opinion: "Nice selection of books, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Hanan",
        business: "Bookstore XYZ",
        rating: 3,
        opinion: "Nice selection of books, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Faatima",
        business: "Bookstore XYZ",
        rating: 3,
        opinion: "Nice selection of books, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Liibaan",
        business: "Bookstore XYZ",
        rating: 3,
        opinion: "Nice selection of books, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    }
];

//Function to display the testimonial as dynamically
function displayTestimonials() {
    const testimonialContainer = document.querySelector(".testimonial-container");

    // Loop of user's review
    reviews.forEach((review) => {
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonial-card");

        // Add user image, name, business, opinion, and rating
        testimonialCard.innerHTML = `
            <div class="testimonial-img">
                <img src="${review.image}" alt="${review.username}">
            </div>
            <div class="testimonial-content">
                <h3>${review.username}</h3>
                <p class="testimonial-business">${review.business}</p>
                <p class="testimonial-opinion">${review.opinion}</p>
                <div class="testimonial-rating">
                    <div class="star-rating">${getStarRating(review.rating)}</div>
                </div>
            </div>
        `;

        // Append the card to the container
        testimonialContainer.appendChild(testimonialCard);
    });
}

// Function to generate star rating
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>'; // Filled star
        } else {
            stars += '<i class="far fa-star"></i>'; // Empty star
        }
    }
    return stars;
}