/**
 * ******************************
 * Traversing the DOM
 * ******************************
 **/

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem; // returns first li item
val = list; // returns ul

/**
 * ********************
 * Get child nodes
 * ********************
 **/
val = list.childNodes;
val = list.childNodes[0]; // returns first node object within the list
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

/**
 * ********************
 * Child node type lookup table
 *
 * 1 = Element
 * 2 = Attribute (deprecated)
 * 3 = Text node
 * 8 = Comment
 * 9 = Document itself
 * 10 = Doctype
 * ********************
 **/

/**
 * ********************
 * Get children element nodes
 * ********************
 **/
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

/**
 * ********************
 * Get children of children element nodes
 * ********************
 **/
val = list.children[3].children;
val = list.children[3].children[0]; // access specific index of the children of children elements.
list.children[3].children[0].id = 'test-link'; // add 'test-link' id

/**
 * ********************
 * Other child nodes & children nodes properties
 * ********************
 **/

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);
