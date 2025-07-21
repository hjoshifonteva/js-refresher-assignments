/*
===========================================
ASSIGNMENT 5: ES6+ FEATURES
===========================================

📚 LEARNING OBJECTIVES:
- Master modern JavaScript syntax and features
- Use template literals for complex string operations
- Practice destructuring for arrays and objects
- Work with spread and rest operators
- Understand enhanced object literals

💡 CONCEPTS COVERED:
1. Template literals with embedded expressions
2. Destructuring assignment (arrays and objects)
3. Default parameters and rest parameters
4. Spread operator for arrays and objects
5. Enhanced object literals
6. Arrow functions vs regular functions
7. Block scoping with let and const

📖 EXAMPLES:
// Template literals
const name = 'John';
const message = `Hello, ${name}! Today is ${new Date().toDateString()}`;

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const {x, y, z = 0} = {x: 1, y: 2};

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
*/

// =================== YOUR CODE STARTS HERE ===================

// TODO 1: Use const and let appropriately
/* YOUR CODE HERE */ PI = 3.14159;      // This should never change
/* YOUR CODE HERE */ counter = 0;       // This will be reassigned

// TODO 2: Template literals with complex expressions
const user = { name: 'Sarah', age: 28, role: 'developer' };
const currentYear = new Date().getFullYear();

const userInfo = /* YOUR CODE HERE */`
User Profile:
Name: ${/* YOUR CODE HERE */}
Age: ${user.age} (born in ${/* YOUR CODE HERE */})
Role: ${user.role.toUpperCase()}
Status: ${user.age >= 18 ? /* YOUR CODE HERE */ : 'Minor'}
`;

// TODO 3: Array destructuring with default values and rest
const scores = [95, 87, 92, 78, 85];
const [highest, second, third = /* YOUR CODE HERE */, ...remainingScores] = /* YOUR CODE HERE */;

// TODO 4: Object destructuring with renaming and defaults
const product = {
    id: 'P001',
    title: 'Wireless Headphones',
    price: 199.99,
    category: 'Electronics'
};

const {
    id: productId,
    title: productName,
    price: productPrice,
    category: productCategory,
    rating = /* YOUR CODE HERE */  // default value
} = /* YOUR CODE HERE */;

// TODO 5: Nested destructuring
const company = {
    name: 'TechCorp',
    location: {
        country: 'USA',
        city: 'San Francisco',
        address: {
            street: '123 Tech Street',
            zipCode: '94105'
        }
    },
    employees: 150
};

const {
    name: companyName,
    location: {
        city: companyCity,
        address: { street: companyStreet }
    },
    employees: employeeCount
} = /* YOUR CODE HERE */;

// TODO 6: Function with default parameters and rest parameters
function createReport(title, author = /* YOUR CODE HERE */, ...sections) {
    return {
        title: /* YOUR CODE HERE */,
        author: author,
        sections: /* YOUR CODE HERE */,
        createdAt: new Date().toISOString(),
        pageCount: sections.length
    };
}

// TODO 7: Arrow functions with different syntaxes
const square = x => /* YOUR CODE HERE */;                    // Single parameter, implicit return
const add = (a, b) => /* YOUR CODE HERE */;                  // Multiple parameters, implicit return
const processData = data => {                                // Single parameter, explicit return
    const processed = data.map(item => item * 2);
    return /* YOUR CODE HERE */;
};

// TODO 8: Spread operator with arrays
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];
const groceries = [/* YOUR CODE HERE */fruits, 'bread', /* YOUR CODE HERE */vegetables, 'milk'];

// TODO 9: Spread operator with objects
const baseConfig = {
    theme: 'light',
    fontSize: 14,
    autoSave: true
};

const userConfig = {
    theme: 'dark',
    language: 'spanish'
};

const finalConfig = {
    /* YOUR CODE HERE */baseConfig,
    /* YOUR CODE HERE */userConfig,
    lastModified: Date.now()
};

// TODO 10: Enhanced object literals
const name = 'Calculator';
const version = '2.0';
const multiply = (a, b) => a * b;

const calculatorApp = {
    name,                           // Property shorthand
    version,                        // Property shorthand
    [`created_${Date.now()}`]: true, // Computed property name

    // Method shorthand
    add(a, b) {
        return /* YOUR CODE HERE */;
    },

    // Method shorthand with arrow function stored in variable
    multiply,

    // Method with computed name
    [/* YOUR CODE HERE */'get' + 'Info']() {
        return /* YOUR CODE HERE */`${this.name} v${this.version}`;
    }
};

// TODO 11: Function that uses multiple ES6+ features
function analyzeData(dataset, options = {}) {
    const {
        sortBy = 'value',
        filterMin = /* YOUR CODE HERE */,
        limit = 10
    } = /* YOUR CODE HERE */;

    return dataset
        ./* YOUR CODE HERE */(item => item.value >= filterMin)
        ./* YOUR CODE HERE */((a, b) => {
            return sortBy === 'value' ?
                b[/* YOUR CODE HERE */] - a.value :
                a.name.localeCompare(b.name);
        })
        .slice(0, /* YOUR CODE HERE */)
        .map(({ name, value, ...other }) => ({
            name: name.toUpperCase(),
            value: /* YOUR CODE HERE */,
            hasMetadata: Object.keys(other).length > 0
        }));
}

// TODO 12: Template literal function (tagged template)
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? /* YOUR CODE HERE */`<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}

// =================== TEST YOUR CODE ===================

console.log('=== ASSIGNMENT 5 RESULTS ===');

// Test variables
counter = 5;
console.log('PI:', PI, 'Counter:', counter);

// Test template literals
console.log('User Info:', userInfo);

// Test array destructuring
console.log('Scores Analysis:');
console.log(`Highest: ${highest}, Second: ${second}, Third: ${third}`);
console.log('Remaining scores:', remainingScores);

// Test object destructuring
console.log('Product Info:');
console.log(`ID: ${productId}, Name: ${productName}`);
console.log(`Price: $${productPrice}, Category: ${productCategory}, Rating: ${rating}`);

// Test nested destructuring
console.log(`Company: ${companyName} in ${companyCity}`);
console.log(`Address: ${companyStreet}, Employees: ${employeeCount}`);

// Test function with defaults and rest
