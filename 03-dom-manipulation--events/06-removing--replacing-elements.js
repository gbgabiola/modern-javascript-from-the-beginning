/**
 * ******************************
 * Removing & Replacing Elements
 * ******************************
 **/

/**
 * ********************
 * REPLACE ELEMENT
 * ********************
 **/
// Create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// Append a new text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Get the parent element
const cardAction = document.querySelector('.card-action');

// Replace element
cardAction.replaceChild(newHeading, oldHeading);

/**
 * ********************
 * REMOVE ELEMENT
 * ********************
 **/
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

/**
 * ********************
 * CLASSES & ATTRIBUTES
 * ********************
 **/
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList; // returns a DOMTokenList (not an array but setup as an array)
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);
