//fetch api 
//get data for forecast temp wind humid and uv 
//use if statement for weather forecast to get icons
//get 5 day forecast
//ammend info to page and cards
//use local storage for search history of cities
var cityInputEl = document.querySelector('#city')
var searchInputEl = document.querySelector('#search')
var currentCityEl = document.querySelector('#current-city')
var currentTempEl = document.querySelector('#current-temp')
var currentWindEl = document.querySelector('#current-wind')
var currentHumidEl = document.querySelector('#current-humid')
var currentWeatherImg = document.querySelector('#current-weather-img')

const getCurrentWeather = async () => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value.trim()}&units=imperial&appid=beff4d2d3a48b96528fcd84d9d9be94a`
    const res = await fetch(apiUrl)
    let data = await res.json()
    let milli = data.dt * 1000
    let date = new Date(milli)
    let dateFormat = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"})
    currentCityEl.textContent = data.name + " " + dateFormat
    currentTempEl.textContent = "Temp: " + data.main.temp + "°F"
    currentWindEl.textContent = "Wind: " + data.wind.speed + " mph"
    currentHumidEl.textContent = "Humidity: " + data.main.humidity + "%"
    currentWeatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}

const getFiveDayWeather = async () => {
    
}

var getWeather = async (event) => {
    event.preventDefault();
    getCurrentWeather();
    get5dayWeather();
}

searchInputEl.addEventListener('submit', getWeather);