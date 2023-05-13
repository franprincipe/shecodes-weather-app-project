function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
 }
let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Willow Spring&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);