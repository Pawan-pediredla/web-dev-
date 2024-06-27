// Function to simulate user login
function loginUser(username, password) {
    // Simulating a login request with a delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user123' && password === 'securepassword') {
                resolve('fake-jwt-token');
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
}

// Function to fetch user profile from a mock API
function fetchUserProfile(token) {
    const profileUrl = 'https://jsonplaceholder.typicode.com/users/1';

    return fetch(profileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user profile!');
            }
            return response.json();
        });
}

// Function to fetch user posts from a mock API
function fetchUserPosts(token) {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1';

    return fetch(postsUrl)
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
            postContent.textContent = post.body;
            postItem.appendChild(postContent);

            postsSection.appendChild(postItem);
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
