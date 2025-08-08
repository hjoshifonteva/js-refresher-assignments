/*
===========================================
ASSIGNMENT 4: OBJECTS AND OBJECT METHODS
===========================================

📚 LEARNING OBJECTIVES:
- Work with object properties and methods
- Use Object static methods (keys, values, entries, assign)
- Practice object destructuring and property shorthand
- Understand this context in object methods
- Create objects with computed properties

💡 CONCEPTS COVERED:
1. Object literal syntax and property shorthand
2. Object methods and 'this' keyword
3. Object.keys(), Object.values(), Object.entries()
4. Object.assign() for merging objects
5. Object destructuring with renaming
6. Computed property names
7. Method chaining in objects

📖 EXAMPLES:
const person = {
    name: 'John',
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

// Object destructuring
const { name, age } = person;

// Object.keys/values/entries
const keys = Object.keys(person);     // ['name', 'age', 'greet']
const values = Object.values(person); // ['John', 30, function]

// Computed properties
const prop = 'dynamicKey';
const obj = { [prop]: 'value' };
*/



// =================== YOUR CODE STARTS HERE ===================

// TODO 1: Create a calculator object with methods that support chaining
const calculator = {
    value: 0,

    add(num) {
        this.value += num;
        return this;
    },

    subtract(num) {
        this.value -= num;
        return this;
    },

    multiply(num) {
        this.value *= num;
        return this;
    },

    divide(num) {
        if (num !== 0) {
            this.value /= num;
        }
        return this;
    },

    getValue() {
        return this.value;
    },

    reset() {
        this.value = 0;
        return this;
    }
};

// TODO 2: Work with Object static methods
const student = {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    courses: ['Math', 'Science', 'History'],
    gpa: 3.8
};

const studentKeys = Object.keys(student);
const studentValues = Object.values(student);
const studentEntries = Object.entries(student);

// TODO 3: Use Object.assign to merge objects
const defaultPreferences = {
    theme: 'light',
    language: 'english',
    notifications: true,
    autoSave: false
};

const userPreferences = {
    theme: 'dark',
    autoSave: true
};

const finalPreferences = Object.assign({}, defaultPreferences, userPreferences);

// TODO 4: Object destructuring with renaming and default values
const {
    name: studentName,
    email: studentEmail,
    gpa: gradePointAverage = 0,
    graduationYear = 2024
} = student;

// TODO 5: Create an object with computed property names
const createDynamicObject = (keyName, keyValue) => {
    return {
        id: Math.random(),
        timestamp: Date.now(),
        [keyName]: keyValue,
        [`${keyName}_uppercase`]: keyValue.toUpperCase()
    };
};

// TODO 6: Create a shopping cart object with advanced methods
const shoppingCart = {
    items: [],

    addItem(name, price, quantity = 1) {
        const existingItem = this.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                name: name,
                price: price,
                quantity: quantity
            });
        }
        return this;
    },

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        return this;
    },

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    },

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    },

    clear() {
        this.items = [];
        return this;
    }
};

// TODO 7: Create a person object with nested methods
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Boston',
        zipCode: '02101'
    },

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    getFullAddress() {
        const { street, city, zipCode } = this.address;
        return `${street}, ${city} ${zipCode}`;
    },

    introduce() {
        return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old.`;
    }
};

// =================== TEST YOUR CODE ===================

console.log('=== ASSIGNMENT 4 RESULTS ===');

// Test calculator chaining
console.log('Calculator test:');
const result = calculator.add(10).multiply(2).subtract(5).divide(3).getValue();
console.log('Calculation result:', result); // Expected: 5
calculator.reset();

// Test Object methods
console.log('Student object analysis:');
console.log('Keys:', studentKeys);
console.log('Values:', studentValues);
console.log('Entries:', studentEntries);

// Test object merging
console.log('Merged preferences:', finalPreferences);

// Test destructuring
console.log('Destructured student info:');
console.log(`Name: ${studentName}, Email: ${studentEmail}`);
console.log(`GPA: ${gradePointAverage}, Graduation Year: ${graduationYear}`);

// Test computed properties
const dynamicObj = createDynamicObject('status', 'active');
console.log('Dynamic object:', dynamicObj);

// Test shopping cart
console.log('Shopping cart test:');
shoppingCart
    .addItem('Laptop', 999, 1)
    .addItem('Mouse', 25, 2)
    .addItem('Keyboard', 75, 1);

console.log('Cart items:', shoppingCart.items);
console.log('Total price: $', shoppingCart.getTotal());
console.log('Item count:', shoppingCart.getItemCount());

shoppingCart.removeItem('Mouse');
console.log('After removing mouse - Total: $', shoppingCart.getTotal());

// Test person object
console.log('Person info:');
console.log('Full name:', person.getFullName());
console.log('Address:', person.getFullAddress());
console.log('Introduction:', person.introduce());
