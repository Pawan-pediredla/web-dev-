//Sure, here are a few real-world examples where closures are commonly used in JavaScript:

function Createcounter(){
    let count =0;
    return {
        increment:function(){
            count++;
            console.log(count)
        }
        ,
        decrement :function(){
            count--;
            console.log(count)
        },
        getcount:function(){
            return count
        }
    }
}
let counter  = Createcounter()
counter.increment()
counter.decrement()