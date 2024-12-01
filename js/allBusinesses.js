// Global variables for handling pagination and business data
const cardsPerPage = 8;
let currentPage = 1;
let businessData = [];
let filteredData = [];

const cardContainer = document.getElementById('card-container');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');