const fetch = require('node-fetch');

async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        throw error;
    }
}

async function displayUserData(userId) {
    try {
        const userData = await fetchUserData(userId);
        console.log('User Data:');
        console.log(userData);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Usage
const userId = 1; // Change userId as needed
displayUserData(userId);

