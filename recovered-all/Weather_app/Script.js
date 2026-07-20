
const inputBox = document.querySelector(".cityInput");

const searchBtn = document.querySelector(".searchBtn");

const weatherImg = document.querySelector(".weather-img");

const temp = document.querySelector(".temp");

const description = document.querySelector(".description");

const humidity = document.querySelector(".humidity span");

const wind = document.querySelector(".wind-speed");


const apiKey = "10a08b93e4008b689421fe47a2b0afe5";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(cityName) {

  if (!cityName) return;

  try {

    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    const data = await response.json();

    console.log(data);

    if (data.cod !== 200) {

      alert("City not found!");

      return;

    }


    temp.innerHTML = Math.round(data.main.temp);

    description.innerHTML = data.weather[0].description;
    
    humidity.innerHTML = data.main.humidity + "%";

    wind.innerHTML = data.wind.speed + " Km/H";


    const condition = data.weather[0].main;

    if (condition === "Clouds")

      weatherImg.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";

    else if (condition === "Clear")

      weatherImg.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";

    else if (condition === "Rain" || condition === "Drizzle")

      weatherImg.src = "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";

    else if (["Mist", "Haze", "Fog", "Smoke"].includes(condition))

      weatherImg.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";

    else if (condition === "Snow")

      weatherImg.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png";

    else

      weatherImg.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";

  } catch (error) {

    alert("Network Error!");

    console.log(error);
    }

}


searchBtn.addEventListener("click", () => {

  checkWeather(inputBox.value.trim());

});


inputBox.addEventListener("keyup", (e) => {

  if (e.key === "Enter") {

    checkWeather(inputBox.value.trim());

  }

});
