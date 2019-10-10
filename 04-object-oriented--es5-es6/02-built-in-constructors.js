/**
 * ******************************
 * Built In Constructors
 * ******************************
 **/

/**
 * ********************
 * String
 * ********************
 **/
const name1 = 'Jeff'; // primitive value
const name2 = new String('Jeff'); // Object value
//console.log(name1)
//console.log(name2)

name2.foo = 'bar'; // with objects we can add properties

// Where we would run into problems when comparing type - see If Statement:
console.log(typeof name1); // Typeof String
console.log(typeof name2); // Typeof Object

name1 === 'Jeff' ? console.log('YES') : console.log('NO'); // YES
name2 === 'Jeff' ? console.log('YES') : console.log('NO'); // NO

/**
 * ********************
 * Number
 * ********************
 **/
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(name2);
console.log(typeof num1);
console.log(typeof name2);

/**
 * ********************
 * Boolean
 * ********************
 **/
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);
console.log(typeof bool1);
console.log(typeof bool2);

/**
 * ********************
 * Function
 * ********************
 **/
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1 + 1');

/**
 * ********************
 * Object
 * ********************
 **/
const person1 = { name: 'John' };
const person2 = new Object({ name: 'John' });
console.log(person1);
console.log(person2);

/**
 * ********************
 * Array
 * ********************
 **/
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log(arr1);
console.log(arr2);

/**
 * ********************
 * Regular Expressions
 * ********************
 **/
const regExp1 = /\w+/;
const regExp2 = new RegExp('\\w+');

console.log(regExp1);
console.log(regExp2);
