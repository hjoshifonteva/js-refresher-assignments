/**
 * Assignment 10: Modules and Advanced Concepts
 * Fill in the placeholders to complete the code
 * Test this code in your browser console or Node.js
 */

// Note: Some features may require a module environment or Node.js

// TODO: Export functions (ES6 modules)
// Uncomment these when using in a module environment:
/*
export function add(a, b) {
    return a + b;
}

export const subtract = (a, b) => a - b;

export default function multiply(a, b) {
    return a * b;
}
*/

// TODO: Import statements (use in another file)
/*
import multiply, { add, subtract } from './math-utils.js';
import * as MathUtils from './math-utils.js';
*/

// Closures and Module Pattern
// TODO: Create a module using closure
const CounterModule = (function() {
    // Private variable
    let count = 0;

    return {
        increment: function() {
            return ++count;
        },

        decrement: function() {
            return --count;
        },

        getValue: function() {
            return count;
        },

        reset: function() {
            count = 0;
            return count;
        }
    };
})();

// ----------------------------
// Generator functions
// ----------------------------
function* numberGenerator(start = 0, end = 10) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// ----------------------------
// Generator with yield*
// ----------------------------
function* fibonacciGenerator(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// ----------------------------
// Symbol usage
// ----------------------------
const uniqueKey = Symbol('uniqueKey');
const anotherKey = Symbol('anotherKey');

const symbolObject = {
    [uniqueKey]: 'This is a symbol property',
    [anotherKey]: 'Another symbol property',
    regularProperty: 'This is regular'
};

// ----------------------------
// WeakMap usage
// ----------------------------
const privateData = new WeakMap();
const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

privateData.set(obj1, { secret: 'Secret data for obj1' });
privateData.set(obj2, { secret: 'Secret data for obj2' });

// ----------------------------
// WeakSet usage
// ----------------------------
const visitedObjects = new WeakSet();
visitedObjects.add(obj1);
visitedObjects.add(obj2);

// ----------------------------
// Proxy usage
// ----------------------------
const targetObject = { name: 'John', age: 30 };

const proxiedObject = new Proxy(targetObject, {
    get: function(target, property) {
        console.log(`Getting ${property}`);
        return target[property];
    },

    set: function(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = value;
        return true;
    },

    has: function(target, property) {
        console.log(`Checking if ${property} exists`);
        return property in target;
    }
});

