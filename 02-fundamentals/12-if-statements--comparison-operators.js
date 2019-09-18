/**
 * ******************************
 * If Statements & Comparison Operators
 * ******************************
 **/

/**
 * ********************
 * If Else Statement
 * ********************
 **/

// if (something) {
//   do something
// } else {
//   do something else
// }

const id = 100;
console.log('id = ' + id);

/**
 * ********************
 * Comparison Operators
 * ********************
 **/

// EQUAL TO (==)\
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO (!=)
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE (===)
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE (!==)
if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER THAN OR EQUAL TO (>=) / LESS THAN OR EQUAL TO (<=)
if (id <= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

/**
 * ********************
 * Else If Statement
 * ********************
 **/

// if (something) {
//   do something
// } else if (something) {
//   do something else
// } else {
//   do something else
// }

const colour = 'yellow';

if (color === 'red') {
  console.log('Colour is red');
} else if (color === 'green') {
  console.log('Colour is green');
} else if (color === 'blue') {
  console.log('Colour is blue');
} else {
  console.log(`Colour is not red, green or blue. Color is ${colour}`);
}

/**
 * ********************
 * Logical Operators
 * ********************
 **/
const name = 'Steve';
const age = 36;

// AND (&&)
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR (||)
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

/**
 * ********************
 * Ternary Operator
 * ********************
 **/
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

/**
 * ********************
 * Without Braces ({})
 * ********************
 **/
if (id === 100)
  console.log('ID is 100');
else
  console.log('ID is not 100');
