let promise =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello world")

    },1000)
})
promise.then((messgae)=>{
    console.log(mes)
})
.catch((error)=>{
    console.log(error)
})