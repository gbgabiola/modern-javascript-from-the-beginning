/**
 * ******************************
 * String Methods & Concatenation
 * ******************************
 */

const firstName = 'John';
const lastName = 'Doe';
const age = 33;
const str = 'Hello there my name is Genesis';
const tags = 'web design, web development, programming';

let val;
val = firstName + lastName; // JohnDoe

/**
 * ********************
 * Concatenation
 * ********************
 */
val = firstName + ' ' + lastName;

// Append
val = 'Genesis ';
val += 'Gabiola'; // Genesis Gabiola

// Concatenating w/ variables
val = 'Hello, my name is ' + firstName + ' and I am ' + age; // Hello, my name is John and i am 33

// Escaping
val = "That's awesome, I can't wait"; // That's awesome, I can't wait

/**
 * ********************
 * String Methods & Properties
 * ********************
 */

// .length
val = firstName.length; // 4

// concat()
val = firstName.concat(' ', lastName); // John Doe

// Change case
val = firstName.toUpperCase(); // JOHN
val = firstName.toLowerCase(); // john

//  Treating strings as read only arrays (not very useful but possible to do): Using the index of the string to return the character, 0 = J, 1 = o, 2 = h, ...
val = firstName[2]; // h

// indexOf()
val = firstName.indexOf('h'); // 2
val = firstName.lastIndexOf('h'); // 2

// charAt()
val = firstName.charAt('2'); // h

// Get last char
val = firstName.charAt(firstName.length - 1); // n

// substring()
val = firstName.substring(0, 4); // John

// slice()
val = firstName.slice(0, 4); // John = slice from left to right
val = firstName.slice(-3); // ohn = slice from right to left (negative number = return last x letters from the string).

// split()
val = str.split(' '); // (6) ['Hello', 'there', 'my', 'name', 'is', 'Genesis']
val = tags.split(','); // (3) ['web design', 'web development', 'programming']

// replace()
val = str.replace('Genesis', 'Jack'); // Hello there my name is Jack

// includes():
val = str.includes('Hello'); // true
val = str.includes('food'); // false
