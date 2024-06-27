let promise =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello world")

    },1000)
})
promise.then((messgae)=>{
    console.log(messgae)
})
.catch((error)=>{
    console.log(error)
})