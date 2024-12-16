const API_KEY = '3592e37b327ca306e2c6309cd2e2283b'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='


const temperature = document.getElementsByClassName('temperature')[0];
const humidity = document.getElementsByClassName('humidity')[0];
const city = document.getElementsByClassName('city')[0];
const searchButton = document.getElementsByClassName('search-button')[0];
const searchInput = document.getElementsByClassName('search-input')[0];
const wind = document.getElementsByClassName('wind_value')[0];
console.log(wind.innerHTML)

searchButton.addEventListener('click', () => {

  getWeather(searchInput.value)
})

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    getWeather(searchInput.value);
  }
});

async function getWeather(cityName) {
  const response  = await fetch(`${API_URL}${cityName}&appid=${API_KEY}`)
  const data = await response.json()
  console.log(data)
  console.log(data.wind.speed)
  city.innerHTML = data.name
  temperature.innerHTML = Math.round(data.main.temp) + ' °C'
  humidity.innerHTML = Math.round(data.main.humidity) + '%'
  wind.innerHTML = Math.round(data.wind.speed ) + 'Km/h'
  searchInput.innerHTML = ''
  searchInput.value = ''
}