/**
 * ******************************
 * Function Declaration & Expressions
 * ******************************
 **/

/**
 * ********************
 * FUNCTION DECLARATIONS
 * ********************
 **/
function greet() {
  return 'Hello';
}
console.log(greet());

// With Parameters/Arguments
function greet2(firstName, lastName) {
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet2('John', 'Doe'));

// ES5 Default Parameter Values
function greet(firstName, lastName) {
  if (typeof firstName === 'undefined') { firstName = 'John'; }
  if (typeof lastName === 'undefined') { lastName = 'Doe'; }
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());

// ES6 Default Parameter Values
function greet(firstName = 'John', lastName = 'Doe') {
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());

/**
 * ********************
 * FUNCTION EXPRESSIONS
 * ********************
 **/
const square = function(x) {
  return x * x;
};
console.log(square(8));

// Default Parameter Values
const square = function(x = 3) {
  return x * x;
};
console.log(square());

/**
 * ********************
 * IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
 * ********************
 **/
// Anonymous
(function() {
  console.log('IIFE Ran...');
})();

// With Parameter
(function(name) {
  console.log('Hello ' + name);
})('John');

/**
 * ********************
 * PROPERTY METHODS
 * ********************
 **/
const todo = {
  add: function() {
    console.log('Add todo..');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};
// Defining methods outside of the object:
todo.delete = function() {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
