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
            temparature
            description
        }
    })
}
wheather
.then((Data)=>{
    console.log(`${
        Data.data}`)
        console.log(`${
            Data.description
        }`)
})
.catch((error)=>
console.log(`${
    error.message
}`))