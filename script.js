const weather_api = 'http://api.openweathermap.org/data/2.5/weather?q=miami,us&APPID=8f7b1f386704c1ba9ffce1fdc6681f05';

window.addEventListener('load', function(){

});

function getWeatherData() {
  const data = JSON.parse(this.responseText);
  console.dir(data);

  const sunrise = (data.sys.sunrise);
  const sunset = (data.sys.sunset);
  const current_time = new Date().getTime()/1000;
}

const getWeather = new XMLHttpRequest();

getWeather.addEventListener("load", getWeatherData);

getWeather.open("GET", weather_api);

getWeather.send();
