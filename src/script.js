function formatDate(date) {
  let now = new Date();

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
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
  let day = days[now.getDay()];

  let currentDate = `${day}, ${hours}: ${minutes}`;

  return currentDate;
}
document.getElementById("date").innerHTML = formatDate(response.data.dt * 1000);

function citySearch(city) {
  let cityName = document.querySelector("#city");
  cityName.innerHTML = city;
}
function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  citySearch(searchInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("h4");
  temperatureElement.innerHTML = 45;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("h4");
  temperatureElement.innerHTML = 15;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `${temperature}`;
      
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
 
  let windElement = document.querySelector("#wind");
  windElement.innerHTML =Math.round(response.data.wind.speed);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    ''
  );
}
function temperatureSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = `57b2c40fdae71a6ba41d72685e3226e2`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", temperatureSearch);

function showLocalTemp(response) {
  let temp = Math.round(response.data.main.temp);

  let locationTemp = document.querySelector("#current-temp");
  locationTemp.innerHTML = `${temp}`;

  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = `17f4641f07f947e33529ab836920a226`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showLocalTemp);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocationButton = document.querySelector("#location");
currentLocationButton.addEventListener("click", getCurrentPosition);