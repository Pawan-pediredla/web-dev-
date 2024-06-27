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