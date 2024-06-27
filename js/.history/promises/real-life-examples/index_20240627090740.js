async function agregateData(userid){
   
    const userDetailsUrl = `https://jsonplaceholder.typicode.com/users/${userid}`;
    const userPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userid}`;
    const userCommentsUrl = `https://jsonplaceholder.typicode.com/comments?userId=${userid}`;

    try{
        const[details,comments,post]=await Promise.all([
                fetch(userDetailsUrl).then(res=>res.json()).then((res)=>console.log(res)),
                
                fetch(userCommentsUrl).then(res=>res.json()),
                fetch(userDetailsUrl).then(res=>res.json())

            ])

    }
    catch(error){
        console.log(error)
        throw error
    }
    return {
        user: details,
        posts:post,
        comments: comments
    };
}
agregateData(1).then((data)=>console.log(data))
.catch((error)=>{
    confirm.log(error)
})
console.log(y)
var y =10;

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'swimming'],
    address: {
        city: 'New York',
        zipCode: '10001'
    },
    greet: function() {
        return 'Hello!';
    }
};

console.log(person.address.city)
// Create an object person with properties name, age,
let person2={
    name:"jayadeep"
    ,
    age:17,
    greet:function(){
        console.log(`"hi im " ${this.name}`)
    }
    
}
person2.greet()