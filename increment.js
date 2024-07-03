let counter = (function(){
let count=0
;
return{
increment:function(){
count++;
},
decrement:function(){
count--;
}
reset:function(){
count=0;

}
}
)
document.getElementById(#increment).addEventListener('click',counter.increment());
document.getElementById(#decrement).addEventListener('click',counter.decrement());
document.getElementById(#reset).addEventListener('click',counter.reset());
