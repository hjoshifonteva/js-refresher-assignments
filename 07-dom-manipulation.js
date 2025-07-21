/**
 * Assignment 7: DOM Manipulation
 * Fill in the placeholders to complete the code
 * Create an HTML file and test this code there
 */

// Note: This code requires an HTML page to run properly
// Create a simple HTML file with some elements for testing

// TODO: Select elements by ID
const titleElement = document./* PLACEHOLDER */('title');

// TODO: Select elements by class name
const buttons = document./* PLACEHOLDER */('button');

// TODO: Select elements by tag name
const paragraphs = document./* PLACEHOLDER */('p');

// TODO: Select element by CSS selector
const firstButton = document./* PLACEHOLDER */('.button:first-child');

// TODO: Select multiple elements by CSS selector
const allDivs = document./* PLACEHOLDER */('div');

// TODO: Create new elements
const newDiv = document./* PLACEHOLDER */('div');
const newParagraph = document./* PLACEHOLDER */('p');

// TODO: Set element content
if (titleElement) {
    titleElement./* PLACEHOLDER */ = 'Updated Title';
}

newParagraph./* PLACEHOLDER */ = 'This is a new paragraph';

// TODO: Set element attributes
newDiv./* PLACEHOLDER */('class', 'new-container');
newDiv./* PLACEHOLDER */('id', 'dynamic-div');

// TODO: Add element to DOM
document.body./* PLACEHOLDER */(newDiv);
newDiv./* PLACEHOLDER */(newParagraph);

// TODO: Add event listeners
if (firstButton) {
    firstButton./* PLACEHOLDER */('click', function() {
        console.log('Button clicked!');
        /* PLACEHOLDER */style.backgroundColor = 'lightblue';
    });
}

// TODO: Modify styles
if (titleElement) {
    titleElement.style./* PLACEHOLDER */ = 'red';
    titleElement.style./* PLACEHOLDER */ = '24px';
}

// TODO: Add CSS classes
newDiv.classList./* PLACEHOLDER */('highlight');
newDiv.classList./* PLACEHOLDER */('container');

// TODO: Remove CSS classes
// newDiv.classList./* PLACEHOLDER */('highlight');

// TODO: Toggle CSS classes
newDiv.classList./* PLACEHOLDER */('active');

// TODO: Handle form events (if form exists)
const form = document.querySelector('form');
if (form) {
    form./* PLACEHOLDER */('submit', function(/* PLACEHOLDER */) {
        /* PLACEHOLDER */.preventDefault();
        console.log('Form submission prevented');
    });
}

// TODO: Create and dispatch custom events
const customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Hello from custom event!' }
});

document./* PLACEHOLDER */('myCustomEvent', function(e) {
    console.log('Custom event received:', e.detail.message);
});

document./* PLACEHOLDER */(customEvent);

console.log('DOM manipulation script loaded');
console.log('Remember to create HTML elements to test this code!');

// Sample HTML to test with:
console.log(`
Sample HTML structure needed:
<!DOCTYPE html>
<html>
<head>
    <title>DOM Test</title>
</head>
<body>
    <h1 id="title">Original Title</h1>
    <div class="container">
        <button class="button">Click Me</button>
        <p>Sample paragraph</p>
    </div>
    <script src="07-dom-manipulation.js"></script>
</body>
</html>
`);
