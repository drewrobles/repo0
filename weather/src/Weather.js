import { useEffect } from 'react'
function Weather () {
    useEffect(() => {
          // API ID
          const api = "API_KEY";
        
          // API URL
          const base =
        `http://api.openweathermap.org/data/2.5/weather?lat=${34.2783}&` +
        `lon=${-119.2932}&appid=${api}`;
          fetch(base)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            });
        });
    // }) 
    return <div class="container">Ventura</div>
}

export default Weather