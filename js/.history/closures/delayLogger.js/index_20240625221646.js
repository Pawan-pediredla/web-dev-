function delayLogger(message,delaytime){
    setTimeout(function(){
        console.log(message)
    },delaytime)
}
delayLogger("hi pawan",1000)