// Function to simulate user login
function loginUser(username, password) {
    const loginUrl = 'https://api.example.com/login';
    const loginData = {
        username: username,
        password: password
    };

    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed!');
        }
        return response.json();
    })
    .then(data => {
        return data.token; // Assuming the API returns a token on successful login
    });
}

// Function to fetch user profile
function fetchUserProfile(token) {
    const profileUrl = 'https://api.example.com/user/profile';

    return fetch(profileUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch user profile!');
        }
        return response.json();
    });
}

// Function to fetch user posts
function fetchUserPosts(token) {
    const postsUrl = 'https://api.example.com/user/posts';

    return fetch(postsUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch user posts!');
        }
        return response.json();
    });
}

// Using the functions and handling Promises
const username = 'user123';
const password = 'securepassword';

loginUser(username, password)
    .then(token => {
        // Once logged in, fetch user profile and posts in parallel
        return Promise.all([fetchUserProfile(token), fetchUserPosts(token)]);
    })
    .then(results => {
        const [profile, posts] = results;
        
        console.log('User Profile:', profile);
        console.log('User Posts:', posts);

        // Display the profile and posts on the page
        const profileSection = document.getElementById('profile-section');
        profileSection.innerHTML = `
            <h2>${profile.name}</h2>
            <p>Email: ${profile.email}</p>
        `;

        const postsSection = document.getElementById('posts-section');
        postsSection.innerHTML = '';

        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.className = 'post-item';

            const postTitle = document.createElement('h3');
            postTitle.textContent = post.title;
            postItem.appendChild(postTitle);

            const postContent = document.createElement('p');
            postContent.textContent = post.content;
            postItem.appendChild(postContent);

            postsSection.appendChild(postItem);
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
