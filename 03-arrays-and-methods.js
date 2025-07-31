/*
===========================================
ASSIGNMENT 3: ARRAYS AND ARRAY METHODS
===========================================

📚 LEARNING OBJECTIVES:
- Master essential array methods for data manipulation
- Understand the difference between mutating and non-mutating methods
- Practice method chaining for complex operations
- Work with array destructuring and spread operator

💡 CONCEPTS COVERED:
1. Array methods: map, filter, reduce, find, some, every
2. forEach for iteration
3. Array destructuring
4. Spread operator with arrays
5. Method chaining
6. Mutating vs non-mutating methods

📖 EXAMPLES:
const numbers = [1, 2, 3, 4, 5];

// map - transforms each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - selects elements based on condition
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - combines all elements into single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// Method chaining
const result = numbers
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
*/

// =================== YOUR CODE STARTS HERE ===================

// Sample data for testing
const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
    { id: 2, name: 'Phone', price: 699, category: 'Electronics', inStock: false },
    { id: 3, name: 'Tablet', price: 299, category: 'Electronics', inStock: true },
    { id: 4, name: 'Chair', price: 149, category: 'Furniture', inStock: true },
    { id: 5, name: 'Desk', price: 299, category: 'Furniture', inStock: false }
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO 1: Use map to create an array of product names

const productNames = products.map(product => product.name);

// TODO 2: Use filter to get products that are in stock
const inStockProducts = products.filter(product => product.inStock);

// TODO 3: Use filter to get products under $500
const affordableProducts = products.filter(product => product.price < 500);

// TODO 4: Use reduce to calculate total value of all products
const totalValue = products.reduce((total, product) => total + product.price, 0);

// TODO 5: Use find to get the first Electronics product
const firstElectronics = products.find(product => product.category === 'Electronics');

// TODO 6: Use some to check if any product costs more than $800
const hasExpensiveProduct = products.some(product => product.price > 800);

// TODO 7: Use every to check if all products have prices above $100
const allExpensive = products.every(product => product.price > 100);
// TODO 8: Use map to create an array of numbers squared
const squaredNumbers = numbers.map(num => num * num);

// TODO 9: Chain methods - get even numbers, double them, then sum
const evenDoubledSum = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);

// TODO 10: Use forEach to log each product's details
console.log('=== PRODUCT CATALOG ===');
products.forEach(product => {
    console.log(`${product.name}: $${product.price} (${product.inStock ? 'In Stock' : 'Out of Stock'})`);
});

// TODO 11: Use array destructuring
const [firstProduct, secondProduct, ...otherProducts] = products;

// TODO 12: Use spread operator to combine arrays
const moreNumbers = [11, 12, 13];
const allNumbers = [...numbers, ...moreNumbers];

// TODO 13: Create a function that filters and sorts products
function getProductsByCategory(products, category) {
    return products
        .filter(product => product.category === category)
        .sort((a, b) => a.price - b.price);
}
// =================== TEST YOUR CODE ===================

console.log('=== ASSIGNMENT 3 RESULTS ===');
console.log('Product names:', productNames);
console.log('In stock products:', inStockProducts.length, 'items');
console.log('Affordable products (<$500):', affordableProducts.length, 'items');
console.log('Total value of all products: $', totalValue);
console.log('First electronics product:', firstElectronics?.name);
console.log('Has expensive product (>$800):', hasExpensiveProduct);
console.log('All products >$100:', allExpensive);
console.log('Squared numbers:', squaredNumbers);
console.log('Even numbers doubled and summed:', evenDoubledSum);
console.log('First product:', firstProduct.name);
console.log('Second product:', secondProduct.name);
console.log('Other products count:', otherProducts.length);
console.log('All numbers combined:', allNumbers);
console.log('Electronics sorted by price:', getProductsByCategory(products, 'Electronics'));

/*
🎯 EXPECTED OUTPUT EXAMPLE:
=== PRODUCT CATALOG ===
Laptop: $999 (In Stock)
Phone: $699 (Out of Stock)
Tablet: $299 (In Stock)
Chair: $149 (In Stock)
Desk: $299 (Out of Stock)
=== ASSIGNMENT 3 RESULTS ===
Product names: ['Laptop', 'Phone', 'Tablet', 'Chair', 'Desk']
In stock products: 3 items
Affordable products (<$500): 3 items
Total value of all products: $ 2445
First electronics product: Laptop
Has expensive product (>$800): true
All products >$100: true
Squared numbers: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Even numbers doubled and summed: 60
First product: Laptop
Second product: Phone
Other products count: 3
All numbers combined: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
Electronics sorted by price: [...] (sorted by price)
*/
