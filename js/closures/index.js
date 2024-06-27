function outerfnc(){
    let name="pawan"
    function inner(){
        console.log(name)
    }return inner
}
let closueEx = outerfnc()
closueEx()