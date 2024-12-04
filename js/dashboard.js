

//sidebar buttons
const home = document.getElementById("home")
const makeReview = document.getElementById("makeReview")
const logOutBtn = document.getElementById("logout")

//home
home.addEventListener("click", () =>{
    window.location.href ="../index.html"
})

//MakeReview
makeReview.addEventListener("click", () =>{
    window.location.href ="../html/allBusinesses.html"
})

//Logout
logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser'); 
    window.location.href = "../html/login.html";
});

//dashboard
document.addEventListener('DOMContentLoaded', () => {
  
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Redirect to login if not logged in
    if (!currentUser) {
        window.location.href = '../html/login.html';
    }

   
    //total users and businesses
    const totalUsers = 100; 
    const totalBusinesses = 50; 

    document.getElementById('totalUsers').innerText = totalUsers;
    document.getElementById('totalBusinesses').innerText = totalBusinesses;

    // Weather API 
    const weatherApiKey = '4b5bb59e90d6c180fd66d3662994faaf'; 
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mogadishu,SO&appid=${weatherApiKey}&units=metric`;

    //fetching weather from api (i use API that display mogadisho,so weather ,sunrise, sunset, timezone and more... to full requirements)
    async function fetchWeather() {
        try {
            const response = await fetch(weatherApiUrl);
            if (!response.ok) {
                throw new Error('Weather not available');
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerText = 'Failed to load weather data.';
        }
    }

    //weather data
    function displayWeather(data) {
        const { name, coord, timezone, sys, main } = data; 
        const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

        const weatherInfo = `
            <p>City: ${name}</p>
            <p>Latitude: ${coord.lat}</p>
            <p>Longitude: ${coord.lon}</p>
            <p>Timezone: UTC ${timezone / 3600}</p>
            <p>Temperature: ${main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Sunrise: ${sunrise}</p>
            <p>Sunset: ${sunset}</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    }

    // Calling fetchWeather
    fetchWeather();


    //this will use an external API for OPENSTREETMAP, so this fetching maps data does not require Api key.
    //NOTE: this is not requirement of the project but its my choice to fulfill eye catching of the page.
    
    const map = L.map('map').setView([2.0459, 45.3480], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 45,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([2.0459, 45.3480]).addTo(map)
        .bindPopup('Mogadishu, Somalia')
        .openPopup();
});
