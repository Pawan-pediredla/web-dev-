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
}
agregateData(1)