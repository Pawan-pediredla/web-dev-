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
document.getElementById(#).addEventListener('click',counter.increment());
document.getElementById(#).addEventListener('click',counter.decrement());
document.getElementById(#).addEventListener('click',counter.reset());
