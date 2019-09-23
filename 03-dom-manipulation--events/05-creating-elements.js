/**
 * ******************************
 * Creating Elements
 * ******************************
 **/

// Create element
const li = document.createElement('li');

// Add class & id
li.className = 'collection-item';
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Create new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = "<i class='fa fa-remove'></i>";

// Append link into li
li.appendChild(link);

console.log(li);
