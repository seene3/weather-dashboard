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
var fiveDayEl = document.querySelector('#five-day')

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
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputEl.value.trim()}&units=imperial&appid=beff4d2d3a48b96528fcd84d9d9be94a`
    const res = await fetch(apiUrl)
    let data = await res.json()
    let milliOne = data.list[3].dt * 1000
    let dateOne = new Date(milliOne)
    let dateFormatOne = dateOne.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"})
    let milliTwo = data.list[11].dt * 1000
    let dateTwo = new Date(milliTwo)
    let dateFormatTwo = dateTwo.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"})
    let milliThree = data.list[19].dt * 1000
    let dateThree = new Date(milliThree)
    let dateFormatThree = dateThree.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"})
    let milliFour = data.list[27].dt * 1000
    let dateFour = new Date(milliFour)
    let dateFormatFour = dateFour.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"})
    let milliFive = data.list[35].dt * 1000
    let dateFive = new Date(milliFive)
    let dateFormatFive = dateFive.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"})
    console.log(data)
    
}

var getWeather = async (event) => {
    event.preventDefault();
    getCurrentWeather();
    getFiveDayWeather();
}

searchInputEl.addEventListener('submit', getWeather);