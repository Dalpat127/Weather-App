const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity-details");
const wind = document.querySelector(".wind-speed");
const location_not_found = document.querySelector("h1");



async function checkweather(city) {
    try {
        const url = `http://api.weatherapi.com/v1/current.json?key=3e1bb10556d5447ca2e165831242611&q=${city}&aqi=no`;
        const weather_data = await fetch(`${url}`).then(response => response.json());
         
        temperature.innerHTML = `${weather_data.current.temp_c}°C`;
        humidity.innerHTML = `${weather_data.current.humidity}%`;
        wind.innerHTML = `${weather_data.current.wind_kph}KM/H`;
        description.innerHTML = `${weather_data.current.condition.text}`;

        console.log(weather_data);
        switch (weather_data.current.condition.text) {
            case 'Clouds':
                weatherImg.src = "assets/cloud.png";
                break;
            case 'Clear':
                weatherImg.src = "assets/clear.png";
                break;
            case 'Rain':
                weatherImg.src = "assets/rain.png";
                break;
            case 'Overcast':
                weatherImg.src = "assets/cloud.png";
                break;
            case 'Partly cloud':
                weatherImg.src = "assets/cloud.png";
                break;
            case 'Moderate rain at times':
                weatherImg.src = "assets/rain.png";
                break;
            case 'Mist':
                weatherImg.src = "assets/mist.png";
                break;
            case 'Snow':
                weatherImg.src = "assets/snow.png";
                break;
            default:
                weatherImg.src = "assets/clear.png";
                break;
        }
    }

    catch (error) {
        temperature.innerHTML = "0°C ";
        humidity.innerHTML = "0%";
        wind.innerHTML = "0KM/H";
        description.innerHTML = "Sorry, Location Not Found !!!";
        weatherImg.src = "assets/404.png";
    }
}
searchBtn.addEventListener("click", () => {
    checkweather(inputBox.value);
})

