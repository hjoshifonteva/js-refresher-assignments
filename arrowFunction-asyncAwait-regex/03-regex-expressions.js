// REGEX VALIDATION TRAINING EXERCISES
// Complete the TODOs below. Test in browser console.

console.log("=== REGEX VALIDATION EXERCISES ===");

// 1. Basic Email Validation
// TODO: Create regex pattern for basic email validation
// Should match: user@domain.com, test.email@site.co.uk
// Should reject: invalid-email, @domain.com, user@
const emailRegex = /^[YOUR_PATTERN_HERE]$/;

function validateEmail(email) {
    // TODO: Implement email validation using the regex above
    // return emailRegex.test(email);
}

// 2. Phone Number Validation
// TODO: Create regex for US phone numbers
// Should match: (555) 123-4567, 555-123-4567, 5551234567, +1-555-123-4567
// Should reject: 123-4567, (555) 12-34567
const phoneRegex = /^[YOUR_PATTERN_HERE]$/;

function validatePhone(phone) {
    // TODO: Implement phone validation
}

// 3. Password Strength Validation
// TODO: Create regex for strong password
// Requirements: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
const passwordRegex = /^[YOUR_PATTERN_HERE]$/;

function validatePassword(password) {
    // TODO: Implement password validation
    // Also return an object with details about what's missing
}

// 4. Credit Card Number Validation
// TODO: Create regex patterns for different card types
const cardPatterns = {
    // TODO: Visa (starts with 4, 13-19 digits)
    visa: /^[YOUR_PATTERN_HERE]$/,
    
    // TODO: Mastercard (starts with 5[1-5] or 2[2-7], 16 digits)
    mastercard: /^[YOUR_PATTERN_HERE]$/,
    
    // TODO: American Express (starts with 3[47], 15 digits)
    amex: /^[YOUR_PATTERN_HERE]$/
};

function validateCreditCard(cardNumber) {
    // TODO: Remove spaces/dashes, then check against patterns
    // Return { isValid: boolean, cardType: string }
}

// 5. URL Validation
// TODO: Create regex for HTTP/HTTPS URLs
// Should match: https://example.com, http://sub.domain.co.uk/path?query=1
const urlRegex = /^[YOUR_PATTERN_HERE]$/;

function validateURL(url) {
    // TODO: Implement URL validation
}

// 6. Date Format Validation
// TODO: Create regex for MM/DD/YYYY and DD-MM-YYYY formats
const dateRegexUS = /^[YOUR_PATTERN_HERE]$/;  // MM/DD/YYYY
const dateRegexEU = /^[YOUR_PATTERN_HERE]$/;  // DD-MM-YYYY

function validateDate(date, format = 'US') {
    // TODO: Validate date based on format
    // Also check if it's a valid calendar date
}

// 7. Username Validation
// TODO: Create regex for username
// Rules: 3-20 chars, alphanumeric + underscore, can't start with number
const usernameRegex = /^[YOUR_PATTERN_HERE]$/;

function validateUsername(username) {
    // TODO: Implement username validation
}

// 8. IP Address Validation
// TODO: Create regex for IPv4 addresses
// Should match: 192.168.1.1, 255.255.255.255
// Should reject: 256.1.1.1, 192.168.1
const ipRegex = /^[YOUR_PATTERN_HERE]$/;

function validateIPAddress(ip) {
    // TODO: Implement IP validation
    // Bonus: Also validate that each octet is 0-255
}

// 9. Social Security Number
// TODO: Create regex for SSN format XXX-XX-XXXX
const ssnRegex = /^[YOUR_PATTERN_HERE]$/;

function validateSSN(ssn) {
    // TODO: Implement SSN validation
}

// 10. Advanced: Data Extraction
const logEntry = "2025-08-03 14:30:22 [ERROR] User john.doe@email.com failed login from IP 192.168.1.100";

// TODO: Create regex patterns to extract different parts
const dateTimeRegex = /[YOUR_PATTERN_HERE]/;
const logLevelRegex = /[YOUR_PATTERN_HERE]/;
const emailExtractRegex = /[YOUR_PATTERN_HERE]/;
const ipExtractRegex = /[YOUR_PATTERN_HERE]/;

function parseLogEntry(logString) {
    // TODO: Extract all components and return object
    // { timestamp, level, email, ip, message }
}

// 11. Form Validation Suite
// TODO: Create comprehensive form validator
function validateForm(formData) {
    const errors = {};
    
    // TODO: Validate each field and collect errors
    // formData = { email, phone, password, username, website }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

// 12. Advanced Patterns
// TODO: Create regex for these complex patterns:

// Hex color codes (#RGB or #RRGGBB)
const hexColorRegex = /^[YOUR_PATTERN_HERE]$/;

// Time in 12-hour format (1:00 AM, 12:30 PM)
const timeRegex = /^[YOUR_PATTERN_HERE]$/;

// Money amounts ($1,234.56, $0.99, $1000)
const moneyRegex = /^[YOUR_PATTERN_HERE]$/;

// File extensions (.jpg, .jpeg, .png, .gif)
const imageExtRegex = /[YOUR_PATTERN_HERE]$/;

// 13. Real-world Challenge: Input Sanitization
function sanitizeInput(input) {
    // TODO: Remove/escape potentially dangerous characters
    // Remove: <script>, javascript:, on*, alert(, eval(
    // Use regex for cleaning
}

// Test Suite (uncomment sections as you complete them):
/*
// Test emails
const testEmails = ['user@domain.com', 'invalid-email', 'test@sub.domain.co.uk'];
testEmails.forEach(email => 
    console.log(`${email}: ${validateEmail(email)}`)
);

// Test phones
const testPhones = ['(555) 123-4567', '555-123-4567', '123-4567'];
testPhones.forEach(phone => 
    console.log(`${phone}: ${validatePhone(phone)}`)
);

// Test passwords
const testPasswords = ['weakpass', 'StrongPass123!', 'NoSpecial123'];
testPasswords.forEach(password => 
    console.log(`${password}: ${JSON.stringify(validatePassword(password))}`)
);

// Test credit cards
const testCards = ['4111111111111111', '5555555555554444', '378282246310005'];
testCards.forEach(card => 
    console.log(`${card}: ${JSON.stringify(validateCreditCard(card))}`)
);

// Test log parsing
console.log('Log parsing:', parseLogEntry(logEntry));

// Test form validation
const sampleForm = {
    email: 'user@test.com',
    phone: '555-123-4567',
    password: 'Test123!',
    username: 'testuser',
    website: 'https://example.com'
};
console.log('Form validation:', validateForm(sampleForm));
*/

// BONUS CHALLENGES:
// 1. Create regex that validates ISBN-10 and ISBN-13
// 2. Create regex for postal codes (US ZIP and international)
// 3. Create regex for license plates (various US state formats)
// 4. Create regex for matching hashtags in social media text
// 5. Create regex for parsing CSV lines with quoted fields