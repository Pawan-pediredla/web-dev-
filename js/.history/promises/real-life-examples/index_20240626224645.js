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
cons