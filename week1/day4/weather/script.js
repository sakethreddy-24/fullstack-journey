const API_KEY = "d938500979b1050543aee66fcc55bd3e";
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const output = document.getElementById("output");

const getWeather = async(city)=> {
    output.innerHTML =  `<p class="loading...">Fetching weather....</p> `;

    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        if(!response.ok) throw new Error( "city not found");

        const data = await response.json();
        console.log(data);
        
        output.innerHTML = `
        <div class="weather-card">
        <h2>${data.name},${data.sys.country}</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
        <div class="temp">${Math.round(data.main.temp)}°C </div>
         <div class="desc">${data.weather[0].description}</div>
        <div class="details">
          <div class="detail">
            <span>Humidity</span>
            <strong>${data.main.humidity}%</strong>
          </div>
          <div class="detail">
            <span>Wind</span>
            <strong>${data.wind.speed} m/s</strong>
          </div>
          <div class="detail">
            <span>Feels Like</span>
            <strong>${Math.round(data.main.feels_like)}°C</strong>
          </div>
        </div>
      </div>
        `;
    }catch (error){
        output.innerHTML=`<p class="error">❌ ${error.message}</p>`;
    }
};
searchBtn.addEventListener("click",()=>{
    const city = cityInput.value.trim();
    if(city === "")return;
    getWeather(city);
});

cityInput.addEventListener("keydown",(e)=>{
    if(e.key==="enter") searchBtn.click();
});