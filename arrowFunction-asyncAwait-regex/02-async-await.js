// ASYNC/AWAIT TRAINING EXERCISES
// Complete the TODOs below. Test in browser console.

console.log("=== ASYNC/AWAIT EXERCISES ===");

// 1. Basic Promise to Async/Await Conversion
// TODO: Convert this Promise chain to async/await
function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
            console.log('User data:', data.name);
            return data;
        })
        .catch(error => console.error('Error:', error));
}

// async function fetchUserDataAsync() {
//     // TODO: Implement using async/await with try/catch
// }

// 2. Multiple Async Operations
// TODO: Create async function that fetches user and their posts
async function fetchUserWithPosts(userId) {
    // TODO: Fetch user data from https://jsonplaceholder.typicode.com/users/${userId}
    // TODO: Fetch user's posts from https://jsonplaceholder.typicode.com/posts?userId=${userId}
    // TODO: Return combined object { user, posts }
    // Use try/catch for error handling
}

// 3. Parallel vs Sequential Execution
// TODO: Implement both approaches
async function sequentialFetch() {
    // TODO: Fetch 3 users sequentially (one after another)
    // URLs: /users/1, /users/2, /users/3
    const startTime = Date.now();
    
    // YOUR CODE HERE
    
    const endTime = Date.now();
    console.log(`Sequential time: ${endTime - startTime}ms`);
}

async function parallelFetch() {
    // TODO: Fetch 3 users in parallel using Promise.all
    const startTime = Date.now();
    
    // YOUR CODE HERE
    
    const endTime = Date.now();
    console.log(`Parallel time: ${endTime - startTime}ms`);
}

// 4. Error Handling Patterns
// TODO: Complete this function with proper error handling
async function robustDataFetch(url) {
    // TODO: Try to fetch data with multiple fallback strategies
    // 1. Try primary URL
    // 2. If fails, try backup URL: url + '?backup=true'
    // 3. If both fail, return default object: { error: 'Data unavailable' }
    // Use try/catch blocks appropriately
}

// 5. Async/Await with Array Methods
const userIds = [1, 2, 3, 4, 5];

// TODO: Implement async function that processes array of IDs
async function processUserIds(ids) {
    // TODO: For each ID, fetch user data and extract just name and email
    // Return array of processed users
    // Handle any fetch errors gracefully
}

// 6. Custom Promise with Async/Await
// TODO: Create a function that simulates async operation
function delay(ms) {
    // TODO: Return a Promise that resolves after ms milliseconds
}

// TODO: Use the delay function in an async function
async function countdownTimer(seconds) {
    // TODO: Count down from 'seconds' to 0, logging each number
    // Wait 1 second between each count using your delay function
}

// 7. Advanced: Race Conditions and Timeouts
// TODO: Implement fetch with timeout
async function fetchWithTimeout(url, timeoutMs = 5000) {
    // TODO: Race between fetch and timeout
    // If timeout wins, throw error "Request timeout"
    // Use Promise.race()
}

// 8. Async Generators (Advanced)
// TODO: Create async generator that yields data progressively
async function* dataStream() {
    // TODO: Yield user data one by one with 1-second delays
    // Fetch users 1-5 from jsonplaceholder API
    // Use yield to return each user
}

// 9. Error Recovery Patterns
// TODO: Implement retry logic
async function fetchWithRetry(url, maxRetries = 3) {
    // TODO: Try to fetch URL, retry up to maxRetries times if it fails
    // Wait longer between each retry (exponential backoff)
    // If all retries fail, throw the last error
}

// 10. Real-world Scenario
// TODO: Build a complete data processing pipeline
async function buildUserReport() {
    // TODO: 
    // 1. Fetch all users
    // 2. For each user, fetch their posts
    // 3. Calculate statistics: total posts, average posts per user
    // 4. Handle errors gracefully
    // 5. Return formatted report object
}

// Testing Functions (uncomment after completing TODOs):
/*
// Test basic functions
fetchUserDataAsync();

// Test parallel vs sequential
sequentialFetch();
parallelFetch();

// Test user processing
processUserIds([1, 2, 3]).then(users => 
    console.log('Processed users:', users)
);

// Test countdown
countdownTimer(3);

// Test async generator
(async () => {
    for await (const user of dataStream()) {
        console.log('Streamed user:', user.name);
    }
})();

// Test complete pipeline
buildUserReport().then(report => 
    console.log('User report:', report)
);
*/

// CHALLENGE: Combine all concepts
// TODO: Create an async function that uses arrow functions, proper error handling,
// and processes data from multiple API endpoints to create a dashboard summary