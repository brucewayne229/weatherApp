let APP_ID = 'a9863dcd2ed0c26386e0079981d13d9a';

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=a9863dcd2ed0c26386e0079981d13d9a`)
})