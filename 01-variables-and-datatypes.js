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
let myName = "Sai Sravai";

// TODO 2: Declare a constant for the value of PI
const PI = 3.14159;

// TODO 3: Create variables for different data types
let age = 25;           // Put your age (number)
let isStudent = false;     // true or false (boolean)
let favoriteColors = ['Black','White','Blue']; // Array with 3 colors
let person = {
    name: 'sravani',           // Your name
    age: 25,            // Your age
    city: Vijayawada          // Your city
};

// TODO 4: Use template literals to create a message
let introduction = `My name is ${myName} and I am ${age} years old`;

// TODO 5: Check data types using typeof
console.log('Type of Name:', typeof myName);
console.log('Type of age:', typeof age);
console.log('Type of isStudent:', typeof isStudent);
console.log('Type of favoriteColors:', typeof favoriteColors);
console.log('Type of person:', typeof person);

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
