let promise  =  new promise((reject,resolve)=>{
    try{
        let success  =  Math.random>0.5
        if (success) {
            resolve("")
            
        }
    }
    catch((error)=>{
        console.log(error)
    })
})