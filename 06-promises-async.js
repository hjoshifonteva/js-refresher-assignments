/**
 * Assignment 6: Promises and Async/Await
 * Fill in the placeholders to complete the code
 * Test this code in your browser console
 */

// TODO: Create a simple promise
const simplePromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success) {
           console.log('Promise resolved successfully!');
        } else {
            console.log('Promise rejected!');
        }
    }, 1000);
});

// TODO: Handle promise with .then() and .catch()
simplePromise
    .then(message => {
        console.log('Success:', message);
    })
    .catch(error => {
        console.log('Error:', error);
    });

// TODO: Create a function that returns a promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`
                });
            } else {
              reject('Invalid user ID');
            }
        }, 500);
    });
}

// TODO: Use async/await
async function getUserInfo(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log('User data:', user);
        return user;
    } catch(error) {
        console.log('Failed to fetch user:', error);
        return null;
    }
}

// TODO: Handle multiple promises with Promise.all
const promise1 = fetchUserData(1);
const promise2 = fetchUserData(2);
const promise3 = fetchUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(users => {
        console.log('All users:', users);
    })
    .catch(error => {
        console.log('One or more promises failed:', error);
    });

// TODO: Use Promise.race
Promise.race([
    fetchUserData(4),
    new Promise((_, reject) => setTimeout(() => reject('Timeout'), 300))
])
    .then(result => {
        console.log('Race winner:', result);
    })
    .catch(error => {
        console.log('Race error:', error);
    });

// TODO: Chain promises
fetchUserData(5)
    .then(user => {
        console.log('First user:', user);
        return fetchUserData(6);
    })
    .then(user => {
        console.log('Second user:', user);
    })
    .catch(error => {
        console.log('Chain error:', error);
    });

// Test async function
getUserInfo(1);
getUserInfo(-1);

console.log('Promises are being processed...');
