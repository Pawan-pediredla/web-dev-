function mem(func){
    let cache={}
    return function(...args){
let key = JSON.stringify(args)
if (!cache[key]){
    cache[key]=function(...args)
}
return cache[key]

    }

}
function expo(n){
    return n*2 
}
let g =mem(expo)
console.log()