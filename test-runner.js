#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 JavaScript Assignment Test Runner');
console.log('=====================================\n');

// Get assignment file from command line argument
const assignmentFile = process.argv[2];

if (!assignmentFile) {
    console.log('Usage: node test-runner.js <assignment-file>');
    console.log('Example: node test-runner.js 01-variables-and-datatypes.js');
    console.log('\nAvailable assignments:');

    const files = fs.readdirSync('.')
        .filter(file => file.endsWith('.js') && file.match(/^\d{2}-/))
        .sort();

    files.forEach(file => {
        console.log(`  - ${file}`);
    });

    process.exit(1);
}

// Check if file exists
if (!fs.existsSync(assignmentFile)) {
    console.error(`❌ File not found: ${assignmentFile}`);
    process.exit(1);
}

console.log(`📝 Testing: ${assignmentFile}`);
console.log('─'.repeat(50));

try {
    // Read and execute the assignment file
    const code = fs.readFileSync(assignmentFile, 'utf8');

    // Check for incomplete assignments
    const todoCount = (code.match(/\/\* YOUR CODE HERE \*\//g) || []).length;

    if (todoCount > 0) {
        console.log(`⚠️  Found ${todoCount} incomplete TODO items`);
        console.log('   Complete all /* YOUR CODE HERE */ placeholders before testing\n');
    }

    // Execute the code
    eval(code);

    console.log('\n✅ Assignment executed successfully!');

} catch (error) {
    console.error('\n❌ Error executing assignment:');
    console.error(error.message);

    if (error.stack) {
        console.error('\nStack trace:');
        console.error(error.stack);
    }

    process.exit(1);
}
