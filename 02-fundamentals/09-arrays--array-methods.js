/**
 * ******************************
 * Arrays & Array Methods
 * ******************************
 **/

/**
 * ********************
 * Create an Arrays
 * ********************
 **/
const numbers = [43, 56, 33, 23, 44, 36, 5]; // Method 1: Array Literal
const numbers2 = new Array(22, 45, 33, 76, 54); // Method 2: Array Constructor
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

/**
 * ********************
 * Array Methods
 * ********************
 **/

// Get array length
val = numbers.length; // number of elements in array
val = Array.isArray(numbers); // check if it's array
val = numbers[3]; // 23 = index of 3
val = numbers[0]; // 43

// Insert into array
numbers[2] = 100; // change the value to 100

// Find index of value
val = numbers.indexOf(36); // 5

/**
 * ********************
 * MUTATING ARRAYS
 * ********************
 **/

// Add data onto end
numbers.push(250);

// Add data onto front
numbers.unshift(120);

// Remove data from the end
numbers.pop();

// Remove data from the front
numbers.shift();

// Splice values
numbers.splice(1, 3);

// Reverse the order
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting string arrays
val = fruit.sort(); // sorted alphabetically

// Sorting number arrays
val = numbers.sort(); // sorts by the first digit

// Use the "compare function"
val = numbers.sort(function(x, y) {
  // return x - y; // lowest to highest
  return y - x; // highest to lowest (Reverse sort)
});

/**
 * ********************
 * Find Methods
 * ********************
 **/

function under50(num) {
  return num < 50; // 43 = Finds the first that is below 50
}

function over50(num) {
  return num > 50; // Finds the first that is above 50
}

val = numbers.find(under50);
val = numbers.find(over50);

// OUTPUT
console.log(numbers);
console.log(val);
