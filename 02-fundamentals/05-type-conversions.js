/**
 * ******************************
 * Type Conversion
 * ******************************
 */

// init variable
let val;

/**
 * ********************
 * Number to String
 * ********************
 */
val = String(555); // '555'
val = String(4 + 4); // '8'

/**
 * ********************
 * Boolean to String
 * ********************
 */
val = String(true); // 'true'

/**
 * ********************
 * Date to String
 * ********************
 */
val = String(new Date());

/**
 * ********************
 * Array to String
 * ********************
 */
val = String([1, 2, 3, 4]); // '1, 2, 3, 4'

/**
 * ********************
 * toString() Method
 * ********************
 */
val = true.toString(); // 'true'

/**
 * ********************
 * String (number) to Number
 * ********************
 */
val = Number('5'); // 5

/**
 * ********************
 * Boolean to Number
 * ********************
 */
val = Number(true); // 1 = true
val = Number(false); // 0 = false.

/**
 * ********************
 * Null to Number
 * ********************
 */
val = Number(null); // 0

/**
 * ********************
 * String (non-number) to Number
 * ********************
 */
val = Number('hello'); // returns NaN

/**
 * ********************
 * Array to Number
 * ********************
 */
val = Number([1, 2, 3]); // returns NaN

/**
 * ********************
 * parseInt() and parseFloat() Method
 * ********************
 */
val = parseInt('100.30'); // 100
val = parseFloat('100.30'); // 100.3

/**
 * ********************
 * OUTPUT
 * ********************
 */
console.log(val);
console.log(typeof val);
console.log(val.length); // will only work on strings (or else undefined)
console.log(val.toFixed()); // will only work on numbers (or else NaN)
console.log(val.toFixed(1)); //1 decimal point.

/**
 * ********************
 * Type Coercion
 * ********************
 */
const val1 = 5;
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

/**
 * ********************
 * JavaScript Type Coercion
 * ********************
 */
const val3 = String(5);
const val4 = 6;
const sum2 = val3 + val4; // '56'
const sum3 = Number(val3 + val4); // 56

console.log(sum2, sum3);
console.log(typeof sum2, typeof sum3);
