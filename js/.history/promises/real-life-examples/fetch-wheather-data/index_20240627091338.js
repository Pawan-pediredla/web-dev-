function wheather(city){
    const apikey=;
    const url=;
    return fetch(url)
    .then((resp)=>{
        if (!resp.ok){

            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return resp.json()
    })
}