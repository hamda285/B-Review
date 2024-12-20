
const cardsPerPage = 8; //show every page 8 cards
let currentPage = 1;
let businessData = [];
let filteredData = [];

const cardContainer = document.getElementById('card-container');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

//business lists
if (window.location.pathname.includes("allBusinesses.html")) {
    // read businesses from localStorage
    if (localStorage.getItem('businessData')) {
        businessData = JSON.parse(localStorage.getItem('businessData'));
        filteredData = businessData;
        displayCards(currentPage);
        updatePagination();
    } else {
        fetch('../data/businessData.json')
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

    
    //All-business lists
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

      // update pagination buttons
      function updatePagination() {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(filteredData.length / cardsPerPage);

        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.disabled = currentPage === 1;
        prevButton.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                displayCards(currentPage);
                updatePagination();
            }
        };
        paginationContainer.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.className = i === currentPage ? 'active' : '';
            pageButton.onclick = () => {
                currentPage = i;
                displayCards(currentPage);
                updatePagination();
            };
            paginationContainer.appendChild(pageButton);
        }

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayCards(currentPage);
                updatePagination();
            }
        };
        paginationContainer.appendChild(nextButton);
    }

      //search input
      function handleSearch() {
        const query = searchInput.value.toLowerCase();
        filteredData = businessData.filter(business => {
            return business.name.toLowerCase().includes(query) || business.details.toLowerCase().includes(query);
        });

        currentPage = 1;
        displayCards(currentPage);
        updatePagination();
    }

    searchButton.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

       // business name as query parameter
        window.goToReviewPage = function (businessName) {
        window.location.href = `review.html?business=${encodeURIComponent(businessName)}`;
    };
}

//read current user from localstorage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const usernameDisplay = document.getElementById('username-display');
const logoutButton = document.getElementById('logout-button');

// show user if logged in
if (currentUser) {
    usernameDisplay.textContent = `${currentUser.username}`;
} else {
    usernameDisplay.textContent = 'Anonymous User'; // change anonymous if it's not login
}

//Logout
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser'); 
    window.location.href = '../html/login.html'; 
});