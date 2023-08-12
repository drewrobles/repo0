import { useState, useEffect } from 'react'

function Weather () {
  const [data, setData] = useState('')
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = 'b640c4354f674bcbe35d4c1f310d6a1a'
  useEffect(() => {
    const lat = 34.2783
    const lon = -119.2932
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url).then((response) => response.json())
    .then((responseJson) => { setData(JSON.stringify(responseJson)) })
  }, [])
  return <div>{data}</div>
}

export default Weather