let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
     let success = true;
if (success) {

    resolve("operation is succesfull")
}
else{
reject("")
}
    }, 1000);
})