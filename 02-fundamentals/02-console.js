/**
 * ******************************
 * Using the Console
 * ******************************
 */

// Single line comment.

/*
  Multi
  line
  comments
*/


// Log to console
console.log('Hello World!');        // string
console.log(123);                   // number
console.log(true);                  // boolean

var greeting = 'Hello';
console.log(greeting);              // variable
console.log([1, 2, 3, 4]);          // arrays
console.log({ a: 1, b: 2 });        // objects

console.table({ a: 1, b: 2 });      // objects into table
console.error('Ths is an error!');  // error message
console.clear();                    // clear the console
console.warn('This is a warning!'); // warning message

// Check the time it takes to log to the console
console.time('Time');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.timeEnd('Time');