let promise  =  new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
promise.then((mess)=>{
    console.log(mess)
    return mess *2
})
then((mes)=>{
    console.log(mes)
    return mess *9
})