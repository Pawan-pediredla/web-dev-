async function agregateData(userid){
   
    const userDetailsUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const userPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const userCommentsUrl = `https://jsonplaceholder.typicode.com/comments?userId=${userId}`;

    try{
        const[details,comments,post]=new Promise.add(
            [
                fetch().then((res=>console.log()))
            ]
        )

    }
}