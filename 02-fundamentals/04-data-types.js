/**
 * ******************************
 * Data Types in JavaScript
 * ******************************
 */

/**
 * ********************
 * PRIMITIVE DATA TYPES
 * ********************
 */
// typof operator verifies the Type of Data.

// String
const name = 'John Doe';
console.log(typeof name);
const strAge = '45';
console.log(typeof strAge);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);
/* Null appearing as an object is a bug. First implementation of JavaScript, values were represented as a type tag and a value, type tag for objects being 0 null was represented as NULL pointer(0x00). As a result null had 0 as a type tag, hence the bogus typof return value. Null is actually a primitive value and not a object. */

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

/**
 * ********************
 * REFERENCE DATA TYPES - Objects
 * ********************
 */

// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object literal
const address = {
  city: 'London',
  country: 'England'
};
console.log(typeof address);

//Date
const today = new Date();
console.log(today);
console.log(typeof today);
