import { useEffect } from 'react'
const api = "API_KEY"
const lat = 34.2783
const lon = -119.2932
function Weather () {
  useEffect(() => {
    const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
    fetch(base).then((response) => response.json())
    .then((data) => { console.log(data) })
  })
  return <div class="container">Ventura</div>
}

export default Weather