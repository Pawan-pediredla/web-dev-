function mem(func){
    let cache={

    }
    return function(...args){
let key = JSON.stringify(args)
if (!cache[key]) {
    cache[key]=function
    (...args)
}
    }

}