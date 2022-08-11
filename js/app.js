let APP_ID = 'a9863dcd2ed0c26386e0079981d13d9a';
let DEFAULT_VALUE = '--';
let searchInput = document.querySelector('#search-input');
let cityName = document.querySelector('.city-name');
let weatherState = document.querySelector('.weather-state');
let weatherIcon= document.querySelector('.weather-icon');
let temp = document.querySelector('.temp');

let sunrise = document.querySelector('.sunrise')
let sunset = document.querySelector('.sunset')
let humidity = document.querySelector('.humidity')
let windSpeed = document.querySelector('.wind-speed')


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then( async res => {
        let data = await res.json();
        console.log('[SearchInput]', data);
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temp.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;

        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mn')  || DEFAULT_VALUE;
        sunrise.innerHTML = moment.unix(data.sys.sunset).format('H:mn')  || DEFAULT_VALUE;
        humidity.innerHTML = data.main.huminity  || DEFAULT_VALUE;
        windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2)  || DEFAULT_VALUE;
    });
});