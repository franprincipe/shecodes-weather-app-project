function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
   
   

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =Math.round(response.data.wind.speed);
 }


let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Willow Spring&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);