/*
===========================================
ASSIGNMENT 1: VARIABLES AND DATA TYPES
===========================================

📚 LEARNING OBJECTIVES:
- Understand the difference between var, let, and const
- Work with different JavaScript data types
- Use template literals for string interpolation
- Practice type checking with typeof

💡 CONCEPTS COVERED:
1. Variable declarations (let, const, var)
2. Primitive data types (string, number, boolean, undefined, null)
3. Complex data types (object, array)
4. Template literals with ${} syntax
5. Type checking with typeof operator

📖 EXAMPLES:
// Variable declarations
let userName = "John";          // let - can be reassigned
const PI = 3.14159;            // const - cannot be reassigned
var oldStyle = "avoid this";   // var - function scoped (avoid in modern JS)

// Template literals
const message = `Hello, ${userName}!`;

// Type checking
console.log(typeof userName);   // "string"
console.log(typeof PI);         // "number"
*/

// =================== YOUR CODE STARTS HERE ===================

// TODO 1: Declare a variable using 'let' with your name
let myName = /* YOUR CODE HERE */;

// TODO 2: Declare a constant for the value of PI
/* YOUR CODE HERE */ PI = 3.14159;

// TODO 3: Create variables for different data types
let age = /* YOUR CODE HERE */;           // Put your age (number)
let isStudent = /* YOUR CODE HERE */;     // true or false (boolean)
let favoriteColors = /* YOUR CODE HERE */; // Array with 3 colors
let person = {
    name: /* YOUR CODE HERE */,           // Your name
    age: /* YOUR CODE HERE */,            // Your age
    city: /* YOUR CODE HERE */            // Your city
};

// TODO 4: Use template literals to create a message
let introduction = /* YOUR CODE HERE */`My name is ${myName} and I am ${age} years old`;

// TODO 5: Check data types using typeof
console.log('Type of Sravani:', /* YOUR CODE HERE */ myName);
console.log('Type of age:', /* YOUR CODE HERE */ age);
console.log('Type of isStudent:', /* YOUR CODE HERE */ isStudent);
console.log('Type of favoriteColors:', /* YOUR CODE HERE */ favoriteColors);
console.log('Type of person:', /* YOUR CODE HERE */ person);

// =================== TEST YOUR CODE ===================
// Run this in your browser console and verify the outputs

console.log('=== ASSIGNMENT 1 RESULTS ===');
console.log('Name:', myName);
console.log('Age:', age);
console.log('Is Student:', isStudent);
console.log('Favorite Colors:', favoriteColors);
console.log('Person Object:', person);
console.log('Introduction:', introduction);

/*
🎯 EXPECTED OUTPUT EXAMPLE:
=== ASSIGNMENT 1 RESULTS ===
Name: Alice
Age: 25
Is Student: true
Favorite Colors: ['blue', 'green', 'purple']
Person Object: {name: 'Alice', age: 25, city: 'New York'}
Introduction: My name is Alice and I am 25 years old
Type of myName: string
Type of age: number
Type of isStudent: boolean
Type of favoriteColors: object
Type of person: object
*/
