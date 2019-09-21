/**
 * ******************************
 * DOM Selectors for Multiple Elements
 * ******************************
 **/

/**
 * ********************
 * document.getElementsByClassName()
 * ********************
 **/
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

// Select elements inside the ul list and not from global scope
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

/**
 * ********************
 * document.getElementsByTagName()
 * ********************
 **/
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]); // Select first li
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

/**
 * ********************
 * Convert HTML Collection into Array
 * ********************
 **/
lis = Array.from(lis);

lis.reverse(); // Without array conversion this will get a TypeError message

lis.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
console.log(lis);

/**
 * ********************
 * document.querySelectorAll()
 * ********************
 **/
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items); //This returns a Node list.

// Node List do not require conversion into an array
items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

// We can change the style for all odd and even list items
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// forEach loop to change all odd list background color
liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
});

// for loop to change all even list background color
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}
