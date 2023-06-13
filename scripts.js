const key = "35d8568397f28c15ff445f215392ff8e"

//screen fuctions
function dataScreen(data) {
    console.log(data);
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".text-time").innerHTML = data.weather[0].description;
    document.querySelector(".img-time").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%";
    document.querySelector(".temp-max").innerHTML = "Máx: " + Math.floor(data.main.temp_max) + "°C"
    document.querySelector(".temp-min").innerHTML = "Mín: " + Math.floor(data.main.temp_min) + "°C"
}



//API fuction
async function citySearch(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataScreen(data)
}


//button fuction
function clickButton() {
    const city = document.querySelector(".city-input").value
    citySearch(city)

}
