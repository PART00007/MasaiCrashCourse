function createRateLimiter(limit, interval) {
    let count = 0;
    let lastResetTime = Date.now();

    return function() {
        const now = Date.now();
        if (now - lastResetTime >= interval) {
            count = 0;
            lastResetTime = now;
        }

        if (count < limit) {
            count++;
            return true; // Allow the function call
        } else {
            return false; // Limit exceeded, reject the function call
        }
    };
}

// Create a rate limiter that allows 2 function calls every 1 second
const rateLimiter = createRateLimiter(2, 1000);

// Function to be rate-limited
function myFunction() {
    console.log('Function called.');
}

// Call the function multiple times
console.log(rateLimiter()); // Output: true
myFunction(); // Function called.
console.log(rateLimiter()); // Output: true
myFunction(); // Function called.
console.log(rateLimiter()); // Output: false (limit exceeded)
myFunction(); // Function not called.

