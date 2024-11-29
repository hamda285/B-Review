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
