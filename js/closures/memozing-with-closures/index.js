function mem(func){
    let cache={}
    return function(...args){
let key = JSON.stringify(args)
if (!cache[key]){
    cache[key]=func(...args)
}
return cache[key]

    }

}
function expo(n){
    console.log(n)
    return n*2 
}
let g =mem(expo)
console.log(g(9))
console.log(g(9))