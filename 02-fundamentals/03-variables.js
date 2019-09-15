/**
 * ******************************
 * Variables - var, let, const
 * ******************************
 */

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

var greeting;                 // init var
console.log(greeting);        // greeting will return undefined because it has no value
greeting = 'Hello';           // assigning a value to greeting variable.
console.log(greeting);        // log variable value in the console.

/**
 * ******************************
 * Variables rules:
 * can contain letters, numbers, _, $
 * cannot start with a number.
 *
 * Multi Word Variable Names:
 *
 * var firstName = 'John';    // camelCase
 * var first_name = 'Sara';   // under_score
 * var FirstName = 'Tom';     // PascalCase
 * var firstname;             // lowercase
 * ******************************
 */

/**
 * ********************
 * LET Keyword
 * ********************
 */

let name2;                     // init variable.
name2 = 'John Doe';            // assign a value to variable.
console.log(name2);
name2 = 'Steve Smith';         // reassign value to the variable.
console.log(name2);


/**
 * ********************
 * CONST Keyword
 * ********************
 */

const name3 = 'John';         // create and assign value to const variable
console.log(name3);
// name3 = 'Sara';            // cannot reassign new value to const variable
// const greeting;            // cannot init a const variable, have to assign a value


// We can change the values for Object/Array but we cannot reassign the object/array
const person = {              // create an onject
  name: 'John',
  age: 30
}

console.log(person);          // log object literal

person.name = "Sara";         // taking the object property and mutating/changing the value
person.age = 32;              // taking the object property and mutating/changing the value.
console.log(person);          // log the new object literal values.

const numbers = [1,2,3,4,5];  // create an Array.
console.log(numbers);         // log the 5 items within the array

numbers.push(6);              // adding 6 to the array using the push method
console.log(numbers);         // log the number arrays with 6 items