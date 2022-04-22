

const searchButton = document.querySelector("#search-btn");
const searchInput = document.querySelector("search-txt");
const cityName = document.querySelector("#city-name");
const icon = document.querySelector("#icon");
const temperature = document.querySelector("#temp");
const humidity = document.querySelector("#humidity-div");

searchButton.addEventListener("click", findWeatherDatails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key == "Enter") {
        findWeatherDatails();
    }
}
function findWeatherDatails() {
    if(searchInput.value === "") {

    }else {
        const searchLink = "https://api.openweathermap.org/data/2.5/weather?q="+ searchInput.value + "&appid="
        httpRequestAsync(searchLink, theResponse);
    }
}

function theResponse(response) {
    const jasonObject = JSON.parse(response);
    cityName.innerHTML = jasonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jasonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jasonObject.main.temp - 273) + "*"
    humidity.innerHTML = jasonObject.main.humidity + "%";
}
 function httpRequestAsync(url, callback) {
     const httpRequest =  new XMLHttpRequest();

     httpRequest.onreadystatechange = () => {
         if (httpRequest.readyState == 4 && httpRequest.status == 200) {
             callback(httpRequest.responseText);
         }
     }
     httpRequest.open("GET", url, true);
     httpRequest.send();
 }