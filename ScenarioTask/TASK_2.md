### **Task 4A: Employee Class and Object Methods**
Create comprehensive employee objects with methods:

```javascript
// Employee factory function with methods
const createEmployee = (data) => {
    // TODO: Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'department', 'role'];
    for (const field of requiredFields) {
        if (!data[field]) {
            throw new Error(`Missing required field: ${field}`);
        }
    }
    
    // TODO: Private data using closure
    let _lastUpdated = new Date();
    let _changeHistory = [];
    
    const employee = {
        // TODO: Core properties with validation
        id: data.id || this.generateEmployeeId(),
        personalInfo: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone || '',
            birthDate: data.birthDate || null,
            address: data.address || {}
        },
        
        workInfo: {
            department: data.department,
            role: data.role,
            salary: data.salary || 0,
            hireDate: data.hireDate || new Date().toISOString(),
            manager: data.manager || null,
            location: data.location || 'Remote',
            employmentType: data.employmentType || 'Full-time'
        },
        
        performance: {
            rating: data.rating || 0,
            goals: data.goals || [],
            reviews: data.reviews || [],
            skills: data.skills || [],
            certifications: data.certifications || []
        },
        
        status: {
            isActive: data.isActive !== undefined ? data.isActive : true,
            lastLoginDate: data.lastLoginDate || null,
            vacationDays: data.vacationDays || 20
        },
        
        // TODO: Method to update salary with validation and history
        updateSalary(newSalary, reason = 'Salary adjustment') {
            // TODO: Validate salary
            if (typeof newSalary !== 'number' || newSalary < 0) {
                throw new Error('Invalid salary amount');
            }
            
            // TODO: Check for minimum increase (business rule)
            const currentSalary = this.workInfo.salary;
            const increasePercent = ((newSalary - currentSalary) / currentSalary) * 100;
            
            if (increasePercent > 50) {
                throw new Error('Salary increase cannot exceed 50%');
            }
            
            // TODO: Record change in history
            _changeHistory.push({
                field: 'salary',
                oldValue: currentSalary,
                newValue: newSalary,
                reason,
                timestamp: new Date(),
                updatedBy: 'system' // TODO: Get from context
            });
            
            // TODO: Update salary and timestamp
            this.workInfo.salary = newSalary;
            _lastUpdated = new Date();
            
            return this;
        },
        
        // TODO: Add skill with validation
        addSkill(skill, proficiencyLevel = 'Beginner') {
            // TODO: Validate skill format
            if (!skill || typeof skill !== 'string') {
                throw new Error('Skill must be a non-empty string');
            }
            
            const trimmedSkill = skill.trim();
            if (trimmedSkill.length < 2) {
                throw new Error('Skill name must be at least 2 characters');
            }
            
            // TODO: Check for duplicates (case-insensitive)
            const existingSkill = this.performance.skills.find(s => 
                s.name.toLowerCase() === trimmedSkill.toLowerCase()
            );
            
            if (existingSkill) {
                // TODO: Update proficiency if skill exists
                existingSkill.proficiencyLevel = proficiencyLevel;
                existingSkill.lastUpdated = new Date();
            } else {
                // TODO: Add new skill
                this.performance.skills.push({
                    name: trimmedSkill,
                    proficiencyLevel,
                    dateAdded: new Date(),
                    lastUpdated: new Date()
                });
            }
            
            _lastUpdated = new Date();
            return this;
        },
        
        // TODO: Remove skill
        removeSkill(skillName) {
            const skillIndex = this.performance.skills.findIndex(s => 
                s.name.toLowerCase() === skillName.toLowerCase()
            );
            
            if (skillIndex > -1) {
                this.performance.skills.splice(skillIndex, 1);
                _lastUpdated = new Date();
            }
            
            return this;
        },
        
        // TODO: Calculate tenure in various formats
        calculateTenure() {
            const hireDate = new Date(this.workInfo.hireDate);
            const today = new Date();
            
            const diffTime = Math.abs(today - hireDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            const years = Math.floor(diffDays / 365);
            const months = Math.floor((diffDays % 365) / 30);
            const days = diffDays % 30;
            
            return {
                totalDays: diffDays,
                years,
                months,
                days,
                formatted: `${years}y ${months}m ${days}d`
            };
        },
        
        // TODO: Generate comprehensive employee report
        generateReport(reportType = 'summary') {
            const tenure = this.calculateTenure();
            
            const baseReport = {
                employeeId: this.id,
                fullName: this.fullName,
                department: this.workInfo.department,
                role: this.workInfo.role,
                tenure: tenure.formatted,
                status: this.status.isActive ? 'Active' : 'Inactive'
            };
            
            // TODO: Different report types
            switch (reportType) {
                case 'detailed':
                    return {
                        ...baseReport,
                        personalInfo: this.personalInfo,
                        workInfo: this.workInfo,
                        performance: this.performance,
                        skillsCount: this.performance.skills.length,
                        lastUpdated: _lastUpdated,
                        changeHistoryCount: _changeHistory.length
                    };
                    
                case 'performance':
                    return {
                        ...baseReport,
                        rating: this.performance.rating,
                        skills: this.performance.skills.map(s => s.name),
                        goalsCount: this.performance.goals.length,
                        reviewsCount: this.performance.reviews.length
                    };
                    
                case 'payroll':
                    return {
                        employeeId: this.id,
                        fullName: this.fullName,
                        salary: this.workInfo.salary,
                        employmentType: this.workInfo.employmentType,
                        vacationDays: this.status.vacationDays
                    };
                    
                default:
                    return baseReport;
            }
        },
        
        // TODO: Update multiple fields at once
        updateFields(updates) {
            const allowedFields = [
                'personalInfo', 'workInfo.department', 'workInfo.role', 
                'workInfo.location', 'performance.rating'
            ];
            
            Object.entries(updates).forEach(([key, value]) => {
                if (allowedFields.includes(key)) {
                    // TODO: Handle nested updates
                    if (key.includes('.')) {
                        const [parent, child] = key.split('.');
                        this# Lightning Web Component Task: Employee Management System

## **Scenario Overview**
Build a comprehensive Employee Management System LWC that demonstrates mastery of core JavaScript concepts. As an HR manager, you need to manage employee data, handle onboarding processes, track performance, and generate analytical reports.

---

## **Part 1: Variables and Data Types (01-variables-and-datatypes)**

### **Task 1A: Employee Data Structure**
Create proper variable declarations for different employee data types:

```javascript
// In employeeManager.js
export default class EmployeeManager extends LightningElement {
    // TODO: Declare constants for employee configuration
    // TODO: Use proper naming conventions (UPPER_CASE for constants)
    static get EMPLOYEE_ROLES() {
        return {
            DEVELOPER: 'Developer',
            MANAGER: 'Manager',
            DESIGNER: 'Designer',
            QA: 'QA Engineer',
            DEVOPS: 'DevOps Engineer'
        };
    }
    
    // TODO: Define department constants
    static get DEPARTMENTS() {
        const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR'];
        // YOUR CODE HERE - Return frozen object to prevent modification
        return Object.freeze(departments);
    }
    
    // TODO: Employee status constants
    EMPLOYEE_STATUS = {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        ON_LEAVE: 'on_leave',
        TERMINATED: 'terminated'
    };
    
    // TODO: Reactive properties for LWC
    @track employees = []; // Main employee array
    @track filteredEmployees = []; // Filtered results
    @track selectedEmployeeIds = new Set(); // Selected employee IDs
    
    // TODO: Form state variables
    @track currentEmployee = null; // Currently editing employee
    @track showForm = false; // Form visibility
    @track isEditing = false; // Edit vs Add mode
    
    // TODO: UI state management
    @track isLoading = false; // Loading indicator
    @track error = null; // Error message
    @track searchTerm = ''; // Search input
    @track selectedDepartment = 'All'; // Department filter
    
    // TODO: Pagination variables
    currentPage = 1;
    pageSize = 10;
    totalRecords = 0;
    
    // TODO: Private variables (use # for truly private in modern JS)
    #lastApiCall = null; // Track last API call
    #employeeCache = new Map(); // Cache employee data
    
    // TODO: Form validation state
    formErrors = {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        role: ''
    };
    
    // TODO: Analytics data
    @track analyticsData = {
        totalEmployees: 0,
        averageSalary: 0,
        departmentBreakdown: {},
        newHiresThisMonth: 0
    };
}
```

**Requirements:**
- Use `const` for configuration data that won't change
- Use `let` for variables that will be reassigned  
- Demonstrate different primitive types: string, number, boolean, null, undefined
- Show proper variable naming conventions

**TODOs to Complete:**
1. Add more constants for employee validation rules
2. Initialize default form data structure
3. Add timestamp variables for tracking changes
4. Create configuration object for component settings

---

## **Part 2: Functions and Scope (02-functions)**

### **Task 2A: Employee CRUD Operations**
Implement various function patterns for employee management:

```javascript
// Regular function declarations - hoisted, can be called before declaration
function calculateEmployeeAge(birthDate) {
    // TODO: Handle null/undefined birthDate
    if (!birthDate) return null;
    
    // TODO: Convert string to Date if needed
    const birth = new Date(birthDate);
    const today = new Date();
    
    // TODO: Calculate age accounting for birthday this year
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// TODO: Add function to calculate years of service
function calculateTenure(hireDate) {
    // YOUR CODE HERE - Similar to age calculation
    // TODO: Return object with years, months, days
}

// Arrow functions for event handlers - lexical 'this' binding
handleAddEmployee = (event) => {
    event.preventDefault();
    
    // TODO: Reset form errors
    this.clearFormErrors();
    
    // TODO: Initialize new employee form
    this.currentEmployee = this.getEmptyEmployeeTemplate();
    this.isEditing = false;
    this.showForm = true;
    
    // TODO: Focus first input field after render
    Promise.resolve().then(() => {
        const firstInput = this.template.querySelector('lightning-input');
        if (firstInput) firstInput.focus();
    });
}

handleEditEmployee = (event) => {
    // TODO: Get employee ID from dataset
    const employeeId = event.currentTarget.dataset.id;
    
    // TODO: Find employee in array
    const employee = this.employees.find(emp => emp.id === employeeId);
    
    if (employee) {
        // TODO: Deep clone to avoid direct mutation
        this.currentEmployee = JSON.parse(JSON.stringify(employee));
        this.isEditing = true;
        this.showForm = true;
    }
}

handleDeleteEmployee = async (event) => {
    // TODO: Get employee ID and confirm deletion
    const employeeId = event.currentTarget.dataset.id;
    
    // TODO: Show confirmation dialog
    const result = await this.showConfirmDialog('Delete Employee', 'Are you sure?');
    
    if (result) {
        try {
            // TODO: Call delete API
            await this.deleteEmployeeRecord(employeeId);
            
            // TODO: Update local array
            this.employees = this.employees.filter(emp => emp.id !== employeeId);
            
            // TODO: Show success message
            this.showToast('Success', 'Employee deleted successfully', 'success');
        } catch (error) {
            this.handleError(error, 'deleting employee');
        }
    }
}

// Method functions with proper scope
validateEmployeeData(employee) {
    // TODO: Create validation closure
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'department', 'role'];
    
    // TODO: Check required fields
    requiredFields.forEach(field => {
        if (!employee[field] || employee[field].trim() === '') {
            errors[field] = `${field} is required`;
        }
    });
    
    // TODO: Email validation using closure
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    if (employee.email && !validateEmail(employee.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // TODO: Salary validation
    if (employee.salary && (isNaN(employee.salary) || employee.salary < 0)) {
        errors.salary = 'Salary must be a positive number';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

// Higher-order functions for flexible filtering
filterEmployees(filterFn) {
    // TODO: Apply custom filter function
    return this.employees.filter(filterFn);
}

// TODO: Create filter functions factory
createDepartmentFilter(department) {
    return (employee) => {
        return department === 'All' || employee.department === department;
    };
}

createRoleFilter(role) {
    return (employee) => {
        return role === 'All' || employee.role === role;
    };
}

createSearchFilter(searchTerm) {
    const term = searchTerm.toLowerCase();
    return (employee) => {
        return employee.firstName.toLowerCase().includes(term) ||
               employee.lastName.toLowerCase().includes(term) ||
               employee.email.toLowerCase().includes(term) ||
               employee.role.toLowerCase().includes(term);
    };
}

// TODO: Combine multiple filters
applyFilters() {
    let filtered = [...this.employees];
    
    // TODO: Apply department filter
    if (this.selectedDepartment !== 'All') {
        const deptFilter = this.createDepartmentFilter(this.selectedDepartment);
        filtered = filtered.filter(deptFilter);
    }
    
    // TODO: Apply search filter
    if (this.searchTerm) {
        const searchFilter = this.createSearchFilter(this.searchTerm);
        filtered = filtered.filter(searchFilter);
    }
    
    this.filteredEmployees = filtered;
    
    // TODO: Update analytics based on filtered data
    this.updateAnalytics();
}

// TODO: Debounced search function
handleSearchInput = this.debounce((event) => {
    this.searchTerm = event.target.value;
    this.applyFilters();
}, 300);

// TODO: Utility function for debouncing
debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
```

**Requirements:**
- Demonstrate function hoisting differences
- Show proper use of `this` context in different function types
- Implement closures for data privacy
- Create utility functions with proper parameter handling

**TODOs to Complete:**
1. Add function for bulk employee operations
2. Implement employee export functionality
3. Create validation functions for different employee fields
4. Add error recovery functions with retry logic

---

## **Part 3: Arrays and Methods (03-arrays-and-methods)**

### **Task 3A: Employee Data Manipulation**
Use modern array methods to process employee data:

```javascript
// Sample employee data structure
const sampleEmployees = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@company.com',
        department: 'Engineering',
        role: 'Senior Developer',
        salary: 95000,
        hireDate: '2021-03-15',
        skills: ['JavaScript', 'React', 'Node.js', 'Python'],
        isActive: true,
        performanceRating: 4.5,
        manager: 'Jane Smith'
    },
    {
        id: 2,
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@company.com',
        department: 'Design',
        role: 'UX Designer',
        salary: 78000,
        hireDate: '2020-07-22',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        isActive: true,
        performanceRating: 4.8,
        manager: 'Mike Wilson'
    },
    {
        id: 3,
        firstName: 'Mike',
        lastName: 'Chen',
        email: 'mike.chen@company.com',
        department: 'Engineering',
        role: 'DevOps Engineer',
        salary: 88000,
        hireDate: '2019-11-10',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
        isActive: false,
        performanceRating: 4.2,
        manager: 'Jane Smith'
    }
    // TODO: Add 5 more sample employees with diverse data
];

// 1. Filter active employees
getActiveEmployees() {
    // TODO: Use filter method to get only active employees
    return this.employees.filter(employee => {
        // TODO: Add additional checks (not just isActive)
        return employee.isActive && 
               employee.status !== 'terminated' &&
               employee.hireDate; // Ensure hire date exists
    });
    
    // TODO: Chain with sort by hire date
    // .sort((a, b) => new Date(b.hireDate) - new Date(a.hireDate));
}

// 2. Filter employees by department with advanced options
getEmployeesByDepartment(dept, options = {}) {
    // TODO: Destructure options with defaults
    const { 
        includeInactive = false, 
        minRating = 0,
        sortBy = 'lastName'
    } = options;
    
    return this.employees
        .filter(employee => {
            // TODO: Department filter
            const deptMatch = employee.department === dept;
            
            // TODO: Active status filter
            const statusMatch = includeInactive || employee.isActive;
            
            // TODO: Rating filter
            const ratingMatch = employee.performanceRating >= minRating;
            
            return deptMatch && statusMatch && ratingMatch;
        })
        .sort((a, b) => {
            // TODO: Dynamic sorting
            if (sortBy === 'salary') {
                return b.salary - a.salary;
            }
            return a[sortBy].localeCompare(b[sortBy]);
        });
}

// 3. Calculate average salary with grouping
calculateAverageSalary(groupBy = null) {
    // TODO: Simple average if no grouping
    if (!groupBy) {
        const totalSalary = this.employees.reduce((sum, emp) => {
            return sum + (emp.isActive ? emp.salary : 0);
        }, 0);
        
        const activeCount = this.employees.filter(emp => emp.isActive).length;
        
        return activeCount > 0 ? Math.round(totalSalary / activeCount) : 0;
    }
    
    // TODO: Group by department/role and calculate averages
    const grouped = this.employees
        .filter(emp => emp.isActive)
        .reduce((acc, emp) => {
            const key = emp[groupBy];
            if (!acc[key]) {
                acc[key] = { total: 0, count: 0, employees: [] };
            }
            acc[key].total += emp.salary;
            acc[key].count += 1;
            acc[key].employees.push(emp);
            return acc;
        }, {});
    
    // TODO: Calculate averages for each group
    return Object.entries(grouped).map(([key, data]) => ({
        [groupBy]: key,
        averageSalary: Math.round(data.total / data.count),
        employeeCount: data.count,
        totalSalary: data.total
    }));
}

// 4. Get top performers with advanced criteria
getTopPerformers(count = 5, criteria = 'performanceRating') {
    // TODO: Create scoring algorithm
    const calculateScore = (employee) => {
        let score = employee.performanceRating * 20; // Base score from rating
        
        // TODO: Add tenure bonus
        const tenure = this.calculateTenure(employee.hireDate);
        score += Math.min(tenure * 2, 10); // Max 10 points for tenure
        
        // TODO: Add skills diversity bonus
        score += Math.min(employee.skills.length, 5); // Max 5 points for skills
        
        return score;
    };
    
    return this.employees
        .filter(emp => emp.isActive)
        .map(emp => ({
            ...emp,
            score: criteria === 'custom' ? calculateScore(emp) : emp[criteria]
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, count)
        .map(({ score, ...employee }) => ({ 
            ...employee, 
            performanceScore: score 
        }));
}

// 5. Add skill to employee with validation
addSkillToEmployee(employeeId, skill) {
    // TODO: Find employee and validate skill
    const employeeIndex = this.employees.findIndex(emp => emp.id === employeeId);
    
    if (employeeIndex === -1) {
        throw new Error(`Employee with ID ${employeeId} not found`);
    }
    
    // TODO: Validate skill format
    const trimmedSkill = skill.trim();
    if (!trimmedSkill) {
        throw new Error('Skill cannot be empty');
    }
    
    // TODO: Use map to create new array with updated employee
    this.employees = this.employees.map(emp => {
        if (emp.id === employeeId) {
            // TODO: Check if skill already exists
            const hasSkill = emp.skills.some(s => 
                s.toLowerCase() === trimmedSkill.toLowerCase()
            );
            
            if (hasSkill) {
                throw new Error(`Employee already has skill: ${trimmedSkill}`);
            }
            
            return {
                ...emp,
                skills: [...emp.skills, trimmedSkill],
                lastUpdated: new Date().toISOString()
            };
        }
        return emp;
    });
    
    // TODO: Update filtered employees and analytics
    this.applyFilters();
    return this.employees.find(emp => emp.id === employeeId);
}

// 6. Advanced search with multiple criteria
searchEmployees(searchTerm, options = {}) {
    const {
        searchFields = ['firstName', 'lastName', 'email', 'role', 'skills'],
        fuzzyMatch = false,
        caseSensitive = false
    } = options;
    
    // TODO: Prepare search term
    const term = caseSensitive ? searchTerm : searchTerm.toLowerCase();
    
    return this.employees.filter(employee => {
        // TODO: Search across specified fields
        return searchFields.some(field => {
            let fieldValue = employee[field];
            
            // TODO: Handle array fields (like skills)
            if (Array.isArray(fieldValue)) {
                return fieldValue.some(item => {
                    const itemValue = caseSensitive ? item : item.toLowerCase();
                    return fuzzyMatch ? 
                        this.fuzzyMatch(itemValue, term) : 
                        itemValue.includes(term);
                });
            }
            
            // TODO: Handle string fields
            if (typeof fieldValue === 'string') {
                fieldValue = caseSensitive ? fieldValue : fieldValue.toLowerCase();
                return fuzzyMatch ? 
                    this.fuzzyMatch(fieldValue, term) : 
                    fieldValue.includes(term);
            }
            
            return false;
        });
    });
}

// TODO: Implement fuzzy matching algorithm
fuzzyMatch(str, pattern) {
    // Simple fuzzy matching implementation
    const strLen = str.length;
    const patternLen = pattern.length;
    
    if (patternLen === 0) return true;
    if (strLen === 0) return false;
    
    let strIndex = 0;
    let patternIndex = 0;
    
    while (strIndex < strLen && patternIndex < patternLen) {
        if (str[strIndex] === pattern[patternIndex]) {
            patternIndex++;
        }
        strIndex++;
    }
    
    return patternIndex === patternLen;
}

// TODO: Additional array utility methods
// Get employees hired in specific time period
getEmployeesHiredInPeriod(startDate, endDate) {
    // YOUR CODE HERE - Use filter with date comparison
}

// Calculate department statistics
getDepartmentStats() {
    // TODO: Use reduce to group by department
    return this.employees.reduce((stats, emp) => {
        const dept = emp.department;
        if (!stats[dept]) {
            stats[dept] = {
                total: 0,
                active: 0,
                averageSalary: 0,
                totalSalary: 0,
                roles: new Set()
            };
        }
        
        stats[dept].total++;
        stats[dept].roles.add(emp.role);
        
        if (emp.isActive) {
            stats[dept].active++;
            stats[dept].totalSalary += emp.salary;
        }
        
        return stats;
    }, {});
    
    // TODO: Calculate averages in second pass
}

// Bulk update employees
bulkUpdateEmployees(updates) {
    // TODO: Use map with conditional updates
    // updates format: [{ id: 1, changes: { salary: 100000 } }]
}

// Find employees by multiple criteria
findEmployeesByCriteria(criteria) {
    // TODO: Dynamic filtering based on criteria object
    // criteria format: { department: 'Engineering', minSalary: 80000, skills: ['React'] }
}
```

**Requirements:**
- Use `map()`, `filter()`, `reduce()`, `sort()`, `find()`, `some()`, `every()`
- Demonstrate array destructuring
- Show spread operator usage
- Implement proper error handling for array operations

**TODOs to Complete:**
1. Implement employee comparison functionality
2. Add methods for skills analysis across teams
3. Create employee recommendation system
4. Build advanced sorting with multiple criteria
5. Add data export methods (CSV, JSON)
6. Implement employee hierarchy traversal methods

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