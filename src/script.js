function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
    hours = `0${minutes}`;
}
let minutes = date.getMinutes();
if (minutes < 10){
    minutes = `0${minutes}`;
}
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
let day = days[date.getDay()];
return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
   
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =Math.round(response.data.wind.speed);
    dateElement.innerHTML= formatDate(response.data.dt * 1000); 
    iconElement.setAttribute(
        "src",  `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
 }
function search(city) {  
 let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
 axios.get(apiUrl).then(displayTemperature);
}

 function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
 }
 search("Tokyo");
let form = document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);

function showLocalTemp(response) {
    let temp = Math.round(response.data.main.temp);
  
    let locationTemp = document.querySelector("#temperature");
    let city = document.querySelector("#city");
    
    city.innerHTML = response.data.name;
    locationTemp.innerHTML = `${temp}`;
  }
  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
  
    let apiKey = `1fd8093fa5ff12d796d7de756cc9d6b9`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  
    axios.get(apiUrl).then(showLocalTemp);
  }
  
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let currentLocationButton = document.querySelector("#location");
  currentLocationButton.addEventListener("click", getCurrentPosition);
  