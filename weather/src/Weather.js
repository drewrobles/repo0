import { useState, useEffect } from 'react'

function Weather () {
  const [response, setResponse] = useState({})
  const [data, setData] = useState('')
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = 'b640c4354f674bcbe35d4c1f310d6a1a'
  const convertKelvinToFahrenheit = temperatureInKelvin => (temperatureInKelvin - 273.15) * (9/5) + 32
  useEffect(() => {
    const lat = localStorage.getItem("lat")
    const lon = localStorage.getItem("lon")
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url).then((response) => response.json())
    .then((responseJson) => { 
      setData(JSON.stringify(responseJson))
      setResponse(responseJson)
      console.log(responseJson.main.temp)
    })
  }, [])
  return <div>
    <div>{response?.name}</div>
    <div>{Math.trunc(convertKelvinToFahrenheit(response?.main?.temp))}°</div>
    {data}
  </div>
}

export default Weather