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
    // TODO: Private variable
    let /* PLACEHOLDER */ = 0;

    return {
        // TODO: Public methods
        increment: function() {
            return ++/* PLACEHOLDER */;
        },

        decrement: function() {
            return --count;
        },

        getValue: function() {
            return /* PLACEHOLDER */;
        },

        reset: function() {
            count = /* PLACEHOLDER */;
            return count;
        }
    };
})();

// TODO: Generator functions
function* numberGenerator(start = 0, end = 10) {
    for (let i = start; i <= end; i++) {
        /* PLACEHOLDER */ i;
    }
}

// TODO: Generator with yield*
function* fibonacciGenerator(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield /* PLACEHOLDER */;
        [a, b] = [/* PLACEHOLDER */, a + b];
    }
}

// TODO: Symbol usage
const uniqueKey = /* PLACEHOLDER */('uniqueKey');
const anotherKey = Symbol(/* PLACEHOLDER */);

const symbolObject = {
    [uniqueKey]: 'This is a symbol property',
    [/* PLACEHOLDER */]: 'Another symbol property',
    regularProperty: 'This is regular'
};

// TODO: WeakMap usage
const /* PLACEHOLDER */ = new WeakMap();
const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

privateData./* PLACEHOLDER */(obj1, { secret: 'Secret data for obj1' });
privateData.set(/* PLACEHOLDER */, { secret: 'Secret data for obj2' });

// TODO: WeakSet usage
const visitedObjects = new /* PLACEHOLDER */();
visitedObjects./* PLACEHOLDER */(obj1);
visitedObjects.add(/* PLACEHOLDER */);

// TODO: Proxy usage
const targetObject = { name: 'John', age: 30 };

const proxiedObject = new /* PLACEHOLDER */(targetObject, {
    get: function(target, property) {
        console.log(`Getting ${property}`);
        return target[/* PLACEHOLDER */];
    },

    set: function(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = /* PLACEHOLDER */;
        return true;
    },

    has: function(/* PLACEHOLDER */, property) {
        console.log(`Checking if ${property} exists`);
        return property /* PLACEHOLDER */ target;
    }
});

// TODO: Reflect usage
const reflectTarget = { x: 1, y: 2
