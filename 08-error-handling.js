/**
 * Assignment 8: Error Handling
 * Fill in the placeholders to complete the code
 * Test this code in your browser console
 */

// TODO: Basic try-catch block
/* PLACEHOLDER */ {
    const result = riskyOperation();
    console.log('Operation succeeded:', result);
} /* PLACEHOLDER */ (error) {
    console.log('Operation failed:', error.message);
}

function riskyOperation() {
    const shouldFail = Math.random() > 0.5;
    if (shouldFail) {
        /* PLACEHOLDER */ new Error('Random failure occurred');
    }
    return 'Success!';
}

// TODO: Try-catch-finally
try {
    console.log('Starting risky operation...');
    const data = processData(null);
    console.log('Data processed:', data);
} catch (/* PLACEHOLDER */) {
    console.log('Error caught:', error.message);
    console.log('Error type:', error.name);
} /* PLACEHOLDER */ {
    console.log('Cleanup completed');
}

function processData(data) {
    if (data === null || data === undefined) {
        throw new /* PLACEHOLDER */('Data cannot be null or undefined');
    }
    return data.toUpperCase();
}

// TODO: Creating custom errors
class ValidationError extends /* PLACEHOLDER */ {
    constructor(message, field) {
        /* PLACEHOLDER */(message);
        this.name = 'ValidationError';
        this.field = /* PLACEHOLDER */;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(/* PLACEHOLDER */);
        /* PLACEHOLDER */name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

// TODO: Function with error handling
function validateUser(user) {
    if (!user) {
        /* PLACEHOLDER */ new ValidationError('User object is required', 'user');
    }

    if (!user.name || user.name.trim() === '') {
        throw new /* PLACEHOLDER */('Name is required', 'name');
    }

    if (!user.email || !user.email.includes('@')) {
        throw new ValidationError(/* PLACEHOLDER */, 'email');
    }

    return true;
}

// TODO: Handle different error types
function handleUserValidation(userData) {
    try {
        const isValid = /* PLACEHOLDER */(userData);
        console.log('User validation passed');
        return isValid;
    } catch (error) {
        if (error /* PLACEHOLDER */ ValidationError) {
            console.log(`Validation Error in ${error.field}: ${error.message}`);
        } else if (error instanceof /* PLACEHOLDER */) {
            console.log(`Network Error (${error.statusCode}): ${error.message}`);
        } else {
            console.log('Unknown error:', error.message);
        }
        return false;
    }
}

// TODO: Promise error handling
async function fetchWithErrorHandling(url) {
    /* PLACEHOLDER */ {
        const response = await fetch(url);

        if (!response.ok) {
            throw new NetworkError(
                `HTTP ${response.status}: ${response.statusText}`,
                /* PLACEHOLDER */
            );
        }

        const data = /* PLACEHOLDER */ response.json();
        return data;
    } catch (error) {
        if (error instanceof NetworkError) {
            console.log('Network issue:', error.message);
        } else {
            console.log('Fetch error:', error.message);
        }
        /* PLACEHOLDER */ null;
    }
}

// Test the error handling
console.log('Testing error handling...');

// Test basic try-catch
for (let i = 0; i < 3; i++) {
    console.log(`\nTest ${i + 1}:`);
    try {
        riskyOperation();
    } catch (e) {
        console.log('Caught:', e.message);
    }
}

// Test validation
console.log('\nTesting validation:');
handleUserValidation(null);
handleUserValidation({});
handleUserValidation({ name: 'John' });
handleUserValidation({ name: 'John', email: 'invalid-email' });
handleUserValidation({ name: 'John', email: 'john@example.com' });

// Test async error handling (will fail with invalid URL)
console.log('\nTesting async error handling:');
fetchWithErrorHandling('https://invalid-url-that-does-not-exist.com/data');
