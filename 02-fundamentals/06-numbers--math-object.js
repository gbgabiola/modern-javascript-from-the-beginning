/**
 * ******************************
 * Numbers & Math Object
 * ******************************
 */

const num1 = 100;
const num2 = 50;
let val;

/**
 * ********************
 * Simple math with numbers
 * ********************
 */
val = num1 + num2; // addition
val = num1 * num2; // multiplication
val = num1 - num2; // subtraction
val = num1 / num2; // division
val = num1 % num2; // modulus

//Remember the rule of BIDMAS in maths (Brackets, Indicies, Division, Multiplication, Addition & Subtraction)

/**
 * ********************
 * Math Object
 * ********************
 */
val = Math.PI; // 3.141592653589793
val = Math.E; // 2.718281828459045
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3 number
val = Math.pow(8, 2); // 64
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // -2
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // 55
val = Math.random(); // random decimal number

// random number between 1 to 20 (* 20 + 1), floor method will round the number down, now the random method will return a full interger number between 1 to 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
