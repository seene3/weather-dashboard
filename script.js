//fetch api 
//get data for forecast temp wind humid and uv 
//use if statement for weather forecast to get icons
//get 5 day forecast
//ammend info to page and cards
//use local storage for search history of cities
var cityInputEl = document.querySelector('#city')
var searchInputEl = document.querySelector('#search')

var getWeather = async (event) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value.trim()}&units=imperial&appid=beff4d2d3a48b96528fcd84d9d9be94a`
    event.preventDefault();
    const res = await fetch(apiUrl)
    let data = await res.json()
    console.log(data)
}

searchInputEl.addEventListener('submit', getWeather);