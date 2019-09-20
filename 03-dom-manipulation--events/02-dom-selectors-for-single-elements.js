/**
 * ******************************
 * DOM Selectors for Single Elements
 * ******************************
 **/

/**
 * ********************
 * document.getElementById()
 * ********************
 **/
const taskTitle = document.getElementById('task-title');
console.log(taskTitle);

// Get things from the element
console.log(taskTitle.id);
console.log(taskTitle.className);

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>'; // Insert HTML elements

/**
 * ********************
 * document.querySelector()
 * ********************
 **/

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// only the first li element will change red, because it is a Single Element Selector
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red'; // Select last list element using CSS :last-child sudo element
document.querySelector('li:nth-child(3)').style.color = 'yellow'; // Select third element using CSS nth-child(3) sudo elements
document.querySelector('li:nth-child(4)').textContent = 'Hello World'; // Select forth element using the CSS nth-child(4) sudo elements
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // Select all odd number elements using the CSS nth-child(odd), but only the first odd will change color
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // Select all even number elements using the CSS nth-child(even), but only the first even will change color
