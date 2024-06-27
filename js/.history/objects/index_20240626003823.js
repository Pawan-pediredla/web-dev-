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
 onsole.log(Object.entries(objects))
 onsole.log(Object.values(objects)