let promise =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello world")

    },1000)
})
promise