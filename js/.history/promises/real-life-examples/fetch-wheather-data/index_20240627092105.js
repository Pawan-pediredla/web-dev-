function wheather(city){
    const apiKey = 'your_api_key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return fetch(url)
    .then((resp)=>{
        if (!resp.ok){

            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return resp.json()
    })
    .then((data)=>{
        const temparature= data.main.temp;
        const description = data.weather[0].description
        return {
            temparature,
            description
        }
    })
}
wheather('London')
.then(data=>{
    console.log(`${
        data.temparature}`)
        console.log(`${
            data.description
        }`)
})
.catch(error=>
console.log(`${
    error.message
}`))
Function to fetch weather data
function fetchWeatherData(city) {
    const apiKey = 'your_api_key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extracting relevant weather information
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            return {
                temperature,
                description
            };
        });
}

// Using the function and handling the Promise
fetchWeatherData('London')
    .then(weather => {
        console.log(`Temperature: ${weather.temperature}°C`);
        console.log(`Description: ${weather.description}`);
    })
    .catch(error => {
        console.error('Failed to fetch weather data:', error.message);
    });
