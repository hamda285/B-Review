// Global variables for handling pagination and business data
const cardsPerPage = 8;
let currentPage = 1;
let businessData = [];
let filteredData = [];

const cardContainer = document.getElementById('card-container');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

//business lists
if (window.location.pathname.includes("allBusinesses.html")) {
    // Check if business data is in localStorage
    if (localStorage.getItem('businessData')) {
        businessData = JSON.parse(localStorage.getItem('businessData'));
        filteredData = businessData;
        displayCards(currentPage);
        updatePagination();
    } else {
        fetch('/data/data.json')
            .then(response => response.json())
            .then(data => {
                businessData = data;
                filteredData = businessData;
                localStorage.setItem('businessData', JSON.stringify(businessData));
                displayCards(currentPage);
                updatePagination();
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    
    // Function to display cards of All-business lists
    function displayCards(page) {
        cardContainer.innerHTML = '';

        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, filteredData.length);

        for (let i = startIndex; i < endIndex; i++) {
            const business = filteredData[i];
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${business.photo}" alt="${business.name}">
                <h2>${business.name}</h2>
                <p>${business.details}</p>
                <button onclick="goToReviewPage('${business.name}')">Review</button>
            `;
            cardContainer.appendChild(card);
        }
    }