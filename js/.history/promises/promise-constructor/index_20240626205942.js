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