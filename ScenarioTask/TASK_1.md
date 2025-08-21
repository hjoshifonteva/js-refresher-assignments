# Lightning Web Component Task: Employee Management System

## **Scenario Overview**
Build a comprehensive Employee Management System LWC that demonstrates mastery of core JavaScript concepts. As an HR manager, you need to manage employee data, handle onboarding processes, track performance, and generate analytical reports.

---

## **Part 1: Variables and Data Types (01-variables-and-datatypes)**

### **Task 1A: Employee Data Structure**
Create proper variable declarations for different employee data types:

```javascript
// In employeeManager.js
export default class EmployeeManager extends LightningElement {
    // YOUR CODE HERE - Declare variables using let, const, var appropriately
    // Consider: employee lists, form data, UI states, constants
    
    // Example structure to implement:
    employees = []; // Array of employee objects
    // Current form data for adding/editing
    // UI state variables (loading, error states)
    // Constants for employee roles, departments, status types
}
```

**Requirements:**
- Use `const` for configuration data that won't change
- Use `let` for variables that will be reassigned
- Demonstrate different primitive types: string, number, boolean, null, undefined
- Show proper variable naming conventions

---

## **Part 2: Functions and Scope (02-functions)**

### **Task 2A: Employee CRUD Operations**
Implement various function patterns for employee management:

```javascript
// Regular function declarations
function calculateEmployeeAge(birthDate) {
    // YOUR CODE HERE
}

// Arrow functions for event handlers
handleAddEmployee = (event) => {
    // YOUR CODE HERE
}

// Method functions
validateEmployeeData(employee) {
    // YOUR CODE HERE - demonstrate scope and closure concepts
}

// Higher-order functions
filterEmployees(filterFn) {
    // YOUR CODE HERE
}
```

**Requirements:**
- Demonstrate function hoisting differences
- Show proper use of `this` context in different function types
- Implement closures for data privacy
- Create utility functions with proper parameter handling

---

## **Part 3: Arrays and Methods (03-arrays-and-methods)**

### **Task 3A: Employee Data Manipulation**
Use modern array methods to process employee data:

```javascript
// Sample employee data structure
const sampleEmployees = [
    {
        id: 1,
        name: 'John Doe',
        department: 'Engineering',
        role: 'Senior Developer',
        salary: 95000,
        hireDate: '2021-03-15',
        skills: ['JavaScript', 'React', 'Node.js'],
        isActive: true
    }
    // Add more sample employees
];

// YOUR CODE HERE - Implement these methods:
// 1. getActiveEmployees() - filter active employees
// 2. getEmployeesByDepartment(dept) - filter by department  
// 3. calculateAverageSalary() - reduce to get average
// 4. getTopPerformers(count) - sort and slice top performers
// 5. addSkillToEmployee(employeeId, skill) - map to add skills
// 6. searchEmployees(searchTerm) - find employees by name/role
```

**Requirements:**
- Use `map()`, `filter()`, `reduce()`, `sort()`, `find()`, `some()`, `every()`
- Demonstrate array destructuring
- Show spread operator usage
- Implement proper error handling for array operations

---

## **Part 4: Objects and Methods (04-objects-and-methods)**

### **Task 4A: Employee Class and Object Methods**
Create comprehensive employee objects with methods:

```javascript
// Employee object with methods
const createEmployee = (data) => ({
    // YOUR CODE HERE - Object literal with methods
    // Properties: id, personalInfo, workInfo, performance
    // Methods: updateSalary, addSkill, calculateTenure, generateReport
    
    updateSalary(newSalary, reason) {
        // YOUR CODE HERE - demonstrate object method syntax
    },
    
    addSkill(skill) {
        // YOUR CODE HERE - modify object properties
    },
    
    // Getter and setter examples
    get fullName() {
        // YOUR CODE HERE
    },
    
    set email(value) {
        // YOUR CODE HERE - validation logic
    }
});

// Demonstrate object manipulation methods
// Object.keys(), Object.values(), Object.entries()
// Object.assign(), Object.freeze(), Object.seal()
```

**Requirements:**
- Show different object creation patterns
- Demonstrate method binding and `this` context
- Use object destructuring and property shorthand
- Implement computed property names

---

## **Part 5: ES6 Features (05-es6-features)**

### **Task 5A: Modern JavaScript in LWC**
Implement modern ES6+ features:

```javascript
export default class EmployeeManager extends LightningElement {
    // YOUR CODE HERE - Template literals, destructuring, default parameters
    
    // Template literals for dynamic content
    generateEmployeeReport(employee, options = {}) {
        // Use template literals for email templates, reports
    }
    
    // Destructuring in function parameters
    updateEmployee({ id, ...updates }) {
        // YOUR CODE HERE
    }
    
    // Rest and spread operators
    mergeEmployeeData(employee, ...additionalData) {
        // YOUR CODE HERE
    }
    
    // For...of loops with employee collections
    processAllEmployees() {
        // YOUR CODE HERE
    }
    
    // Symbol usage for private properties
    #privateEmployeeData = new Map();
    
    // Optional chaining and nullish coalescing
    getEmployeeManager(employeeId) {
        // YOUR CODE HERE - safe property access
    }
}
```

**Requirements:**
- Use template literals for dynamic strings
- Demonstrate destructuring assignment
- Show rest/spread operator usage
- Implement default parameters
- Use for...of loops appropriately
- Show optional chaining (?.) and nullish coalescing (??)

---

## **Part 6: Promises and Async Programming (06-promises-async)**

### **Task 6A: Async Employee Operations**
Handle asynchronous operations for employee data:

```javascript
import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class EmployeeManager extends LightningElement {
    
    // YOUR CODE HERE - Async/await for API calls
    async loadEmployees() {
        try {
            // Simulate API call with Promise
            // Handle loading states, errors
        } catch (error) {
            // Error handling
        }
    }
    
    // Promise chains for complex operations
    processEmployeeOnboarding(employeeData) {
        // YOUR CODE HERE - Chain multiple async operations
        // 1. Validate employee data
        // 2. Create employee record  
        // 3. Send welcome email
        // 4. Update UI
    }
    
    // Promise.all for batch operations
    async batchUpdateEmployees(updates) {
        // YOUR CODE HERE
    }
    
    // Custom Promise implementation
    simulateApiCall(data, delay = 1000) {
        return new Promise((resolve, reject) => {
            // YOUR CODE HERE
        });
    }
}
```

**Requirements:**
- Implement proper async/await patterns
- Show Promise creation and chaining
- Handle multiple concurrent operations with Promise.all
- Demonstrate proper error handling in async code
- Show loading states and user feedback

---

## **Part 7: DOM Manipulation (07-dom-manipulation)**

### **Task 7A: Dynamic UI Updates**
Handle DOM interactions in LWC context:

```javascript
import { LightningElement, track } from 'lwc';

export default class EmployeeManager extends LightningElement {
    @track employees = [];
    @track selectedEmployees = [];
    
    // YOUR CODE HERE - Event handling and DOM queries
    
    handleEmployeeSelection(event) {
        // Query DOM elements safely in LWC
        const checkboxes = this.template.querySelectorAll('.employee-checkbox');
        // YOUR CODE HERE
    }
    
    handleBulkAction(event) {
        // Dynamic DOM manipulation
        const selectedRows = this.template.querySelectorAll('.selected-row');
        // YOUR CODE HERE
    }
    
    // Custom event dispatching
    notifyEmployeeUpdate(employeeId, action) {
        // YOUR CODE HERE - Custom events
        const updateEvent = new CustomEvent('employeeupdate', {
            detail: { employeeId, action }
        });
        this.dispatchEvent(updateEvent);
    }
    
    // Lifecycle hooks for DOM access
    renderedCallback() {
        // YOUR CODE HERE - Safe DOM access after render
    }
}
```

**Requirements:**
- Use LWC template query selectors appropriately
- Handle form events and input validation
- Implement custom event dispatching
- Show proper lifecycle hook usage
- Demonstrate accessibility best practices

---

## **Part 8: Error Handling (08-error-handling)**

### **Task 8A: Robust Error Management**
Implement comprehensive error handling:

```javascript
export default class EmployeeManager extends LightningElement {
    
    // YOUR CODE HERE - Try/catch blocks, custom errors
    
    async saveEmployee(employeeData) {
        try {
            // Validation
            this.validateEmployeeData(employeeData);
            
            // Save operation
            const result = await this.submitEmployee(employeeData);
            
        } catch (error) {
            // YOUR CODE HERE - Handle different error types
            this.handleError(error, 'saving employee');
        }
    }
    
    // Custom error classes
    class EmployeeValidationError extends Error {
        constructor(message, field) {
            // YOUR CODE HERE
        }
    }
    
    // Global error handler
    handleError(error, context) {
        // YOUR CODE HERE - Logging, user notification, fallbacks
    }
    
    // Input validation with error throwing
    validateEmployeeData(data) {
        // YOUR CODE HERE - Multiple validation rules
    }
    
    // Error recovery mechanisms
    retryFailedOperation(operation, maxRetries = 3) {
        // YOUR CODE HERE
    }
}
```

**Requirements:**
- Create custom error types
- Implement try/catch blocks appropriately
- Show error propagation and handling
- Add user-friendly error messages
- Implement retry mechanisms

---

## **Part 9: Classes and Inheritance (09-classes-inheritance)**

### **Task 9A: Employee Type Hierarchy**
Create class-based employee management:

```javascript
// Base Employee class
class Employee {
    // YOUR CODE HERE - Constructor, private fields, methods
    
    constructor(personalInfo, workInfo) {
        // Initialize employee data
    }
    
    // Protected methods (convention with #)
    #calculateBaseSalary() {
        // YOUR CODE HERE
    }
    
    // Public interface
    updateInfo(updates) {
        // YOUR CODE HERE
    }
    
    generateReport() {
        // YOUR CODE HERE - Base report generation
    }
}

// Specialized employee types
class Developer extends Employee {
    // YOUR CODE HERE - Extend base class
    
    constructor(personalInfo, workInfo, technicalSkills) {
        // YOUR CODE HERE - Super call and additional setup
    }
    
    // Override methods
    generateReport() {
        // YOUR CODE HERE - Developer-specific report
    }
    
    // Additional methods
    addTechnicalSkill(skill) {
        // YOUR CODE HERE
    }
}

class Manager extends Employee {
    // YOUR CODE HERE - Manager-specific implementation
    
    // Composition over inheritance example
    #teamManagement = new TeamManagement();
    
    manageTeam(action, employeeId) {
        // YOUR CODE HERE
    }
}

// Use in LWC
export default class EmployeeManager extends LightningElement {
    employees = [];
    
    createEmployee(type, data) {
        // YOUR CODE HERE - Factory pattern
    }
}
```

**Requirements:**
- Show proper class inheritance
- Demonstrate method overriding
- Use static methods and properties
- Implement private fields and methods
- Show composition patterns

---

## **Part 10: Advanced Concepts and Modules (10-modules-advanced)**

### **Task 10A: Modular Architecture**
Create a modular employee management system:

```javascript
// employeeUtils.js - Utility module
export const EMPLOYEE_CONSTANTS = {
    // YOUR CODE HERE - Named exports
};

export function calculateTenure(hireDate) {
    // YOUR CODE HERE
}

export class EmployeeValidator {
    // YOUR CODE HERE
}

// Default export
export default class EmployeeReportGenerator {
    // YOUR CODE HERE
}

// employeeManager.js - Main component
import EmployeeReportGenerator, { 
    EMPLOYEE_CONSTANTS, 
    calculateTenure, 
    EmployeeValidator 
} from './employeeUtils';

export default class EmployeeManager extends LightningElement {
    // YOUR CODE HERE - Use imported modules
    
    // Demonstrate advanced concepts:
    // 1. WeakMap for private data
    // 2. Proxy for data observation
    // 3. Generators for data processing
    // 4. Decorators (@track, @api, @wire)
    
    @api selectedEmployeeId;
    @track employees = [];
    @wire(getEmployees) wiredEmployees;
    
    // Generator function for batch processing
    *processEmployeeBatch(employees) {
        // YOUR CODE HERE
    }
    
    // Proxy for change detection
    createEmployeeProxy(employee) {
        // YOUR CODE HERE
    }
    
    // WeakMap for private data
    #privateData = new WeakMap();
    
    // Advanced array methods
    handleComplexEmployeeQuery() {
        // YOUR CODE HERE - flatMap, groupBy (when available)
    }
}
```

**Requirements:**
- Demonstrate ES6 module imports/exports
- Use WeakMap and WeakSet appropriately
- Implement Proxy for object observation
- Show generator functions
- Use advanced array methods
- Demonstrate proper LWC decorators

---

## **HTML Template Requirements**

Create a comprehensive template that showcases DOM manipulation:

```html
<!-- employeeManager.html -->
<template>
    <!-- YOUR CODE HERE - Complete UI implementation -->
    
    <!-- Employee List with dynamic rendering -->
    <div class="employee-grid">
        <template for:each={filteredEmployees} for:item="employee">
            <!-- Employee card with event handlers -->
        </template>
    </div>
    
    <!-- Add/Edit Employee Form -->
    <lightning-card title="Employee Form" if:true={showForm}>
        <!-- Form inputs with validation -->
        <!-- Event handlers for form submission -->
    </lightning-card>
    
    <!-- Bulk Actions Section -->
    <div class="bulk-actions" if:true={hasSelectedEmployees}>
        <!-- Bulk operation buttons -->
    </div>
    
    <!-- Employee Analytics Dashboard -->
    <div class="analytics-section">
        <!-- Charts and statistics -->
    </div>
    
    <!-- Error and Loading States -->
    <div class="loading" if:true={isLoading}>
        <lightning-spinner></lightning-spinner>
    </div>
    
    <div class="error" if:true={error}>
        <!-- Error message display -->
    </div>
</template>
```

---

## **Evaluation Criteria**

Your solution will be evaluated on:

1. **JavaScript Mastery**: Proper use of all 10 concept areas
2. **LWC Best Practices**: Correct use of decorators, lifecycle hooks, templates
3. **Code Organization**: Clean, modular, maintainable code structure
4. **Error Handling**: Robust error management and user feedback
5. **Performance**: Efficient data handling and DOM operations
6. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
7. **Security**: Input validation, data sanitization
8. **Testing**: Unit tests for critical functionality (bonus)

---

## **Bonus Challenges**

1. **Implement real-time search** with debouncing
2. **Add data caching** mechanism for offline support  
3. **Create export functionality** for employee reports
4. **Build notification system** for employee updates
5. **Add drag-and-drop** for employee assignment
6. **Implement undo/redo** functionality
7. **Add internationalization (i18n)** support
8. **Create component composition** with child components

---

## **Getting Started**

1. Clone the provided starter code structure
2. Review each concept area and plan your implementation
3. Start with basic CRUD operations, then add advanced features
4. Test thoroughly with different data scenarios
5. Optimize for performance and accessibility
6. Document your code and design decisions

**Time Estimate**: 8-12 hours for complete implementation
**Difficulty Level**: Intermediate to Advanced
**Prerequisites**: Basic LWC knowledge, Salesforce platform familiarity