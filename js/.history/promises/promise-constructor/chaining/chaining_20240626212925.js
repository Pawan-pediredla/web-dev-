let promise  =  new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
promise.then((mess)=>{
    console.log(mess)
    return mess *2
})
.then((mess)=>{
    console.log(mess)
    return mess *9
})
.then((mess)=>{
    console.log(mess)
})