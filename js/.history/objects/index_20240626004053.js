const objects ={
    name:"pawan",
    getname:function(){
        return this.name
    },
    age:19
    ,
    getage:function(){
        return this.age
    }
}  
 //////////       ------>objects literals

 const obj = new Object()
 obj.name="pawan";

 console.log(Object.keys(objects))
 console.log(Object.entries(objects))
 console.log(Object.values(objects))
 const {
    name,getage
 }=objects