let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
     let success = true;
if (success) {

    resolve("operation is succesfull")
}
else{
reject("operation is rejected")
}
    }, 1000);
})
promise.then((mesage)=>{
    console.log(mesage)
})
.catch((error)=>{
console.log(error)
})
async function asyncFn(){
    try{
        let data = await promise;
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
<<<<<<< HEAD
asyncFn()
=======
asyncFn()
>>>>>>> 6a88ceb30b03c48c457dffd5daf3d6f2494bfcdc
