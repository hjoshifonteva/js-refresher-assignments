/**
 * Assignment 7: DOM Manipulation
 * Fill in the placeholders to complete the code
 * Create an HTML file and test this code there
 */

// Note: This code requires an HTML page to run properly
// Create a simple HTML file with some elements for testing

// TODO: Select elements by ID
const titleElement = document.getElementById('title');

// TODO: Select elements by class name
const buttons = document.getElementsByClassName('button');

// TODO: Select elements by tag name
const paragraphs = document.getElementsByTagName('p');

// TODO: Select element by CSS selector
const firstButton = document.querySelector('.button:first-child');

// TODO: Select multiple elements by CSS selector
const allDivs = document.querySelectorAll('div');

// TODO: Create new elements
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');

// TODO: Set element content
if (titleElement) {
    titleElement.textContent = 'Updated Title';
}

newParagraph.textContent = 'This is a new paragraph';

// TODO: Set element attributes
newDiv.setAttribute('class', 'new-container');
newDiv.setAttribute('id', 'dynamic-div');

// TODO: Add element to DOM
document.body.appendChild(newDiv);
newDiv.appendChild(newParagraph);

// TODO: Add event listeners
if (firstButton) {
    firstButton.addEventListener('click', function() {
        console.log('Button clicked!');
        firstButton.style.backgroundColor = 'lightblue';
    });
}

// TODO: Modify styles
if (titleElement) {
    titleElement.style.background = 'red';
    titleElement.style.padding = '24px';
}

// TODO: Add CSS classes
newDiv.classList.add('highlight');
newDiv.classList.add('container');

// TODO: Remove CSS classes
// newDiv.classList.remove('highlight');

// TODO: Toggle CSS classes
newDiv.classList.toggle('active');

// TODO: Handle form events (if form exists)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        console.log('Form submission prevented');
    });
}

// TODO: Create and dispatch custom events
const customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Hello from custom event!' }
});

document.addEventListener('myCustomEvent', function(e) {
    console.log('Custom event received:', e.detail.message);
});

document.dispatchEvent(customEvent);

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
