import { useState, useEffect } from 'react'

const Weather = () => {
  const [response, setResponse] = useState({})
  const [data, setData] = useState('')
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = 'b640c4354f674bcbe35d4c1f310d6a1a'
  const convertKelvinToFahrenheit = temperatureInKelvin => (temperatureInKelvin - 273.15) * (9/5) + 32
  const getTemperature = response => {
    if (response.cod === 200) {
      return Math.trunc(convertKelvinToFahrenheit(response?.main?.temp).toString()) + '°'
    } else if (response.cod === 400) {
      return response.message
    } else {
      return ''
    }
  }
  useEffect(() => {
    const lat = localStorage.getItem("lat")
    const lon = localStorage.getItem("lon")
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url).then((response) => response.json())
    .then((responseJson) => {
      setData(JSON.stringify(responseJson))
      setResponse(responseJson)
    })
  }, [])
  return <div>
    <div>{response?.name}</div>
    <div>{getTemperature(response)}</div>
    {data}
  </div>
}

export default Weather