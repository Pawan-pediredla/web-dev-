let promise  =  new Promise((reject,resolve)=>{
    
        setTimeout(()=>{
            let success  =  Math.random>0.5
            if (success) {
                resolve("task completed")
                
            }
            else{
                reject("task failed")
            }
        },1000)
}
)
promise.then((mess)=>
console.log(mess))
.catch((error)=>{
    console.log(error)
})
