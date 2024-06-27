async function agregateData(userid){
   
    const userDetailsUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const userPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const userCommentsUrl = `https://jsonplaceholder.typicode.com/comments?userId=${userId}`;

    try{
        const[details,comments,post]=new Promise.all([
                fetch(userDetailsUrl).then(res=>res.json()),
                
                fetch(userCommentsUrl).then(res=>res.json()),
                fetch(userDetailsUrl).then(res=>res.json())

            ])

    }
    catch(error){
        console.log(error)
        throw error
    }
}
