/**
 * ******************************
 * General Loops
 * ******************************
 **/

/**
 * ********************
 * FOR LOOP
 * ********************
 **/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/**
 * ********************
 * SKIP ITERATION (CONTINUE KEYWORD)
 * ********************
 **/
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favourite number');
    continue;
  }
  console.log('Number ' + i);
}

/**
 * ********************
 * BREAK OUT OF LOOP (BREAK KEYWORD)
 * ********************
 **/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Stop the loop');
    break;
  }
  console.log('Number ' + i);
}

/**
 * ********************
 * WHILE LOOP
 * ********************
 **/
let i = 0;

while (i < 5) {
  console.log('Number ' + i);
  i++;
}

/**
 * ********************
 * DO WHILE
 * ********************
 **/
let i = 100;

do {
  console.log('Number ' + i);
  i++;
} while (i < 10);

/**
 * ********************
 * LOOP THROUGH ARRAY
 * ********************
 **/
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for loops with Arrays
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// while loops with Arrays
let i = 0;

while (i < cars.length) {
  console.log(cars[i]);
  i++;
}

/**
 * ********************
 * ARRAY LOOP: FOREACH
 * ********************
 **/

// Function with one parameter
cars.forEach(function(car) {
  console.log(car);
});

// Function with three parameters (2 parameters are optional)
cars.forEach(function(car, index, array) {
  console.log(`${index}: ${car}`);
  console.log(array);
});

/**
 * ********************
 * ARRAY LOOP: MAP
 * ********************
 **/
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' }
];

const newUser = users.map(function(user) {
  return `${user.id}: ${user.id}`;
});

/**
 * ********************
 * FOR IN LOOP
 * ********************
 **/
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

for (let prop in user) {
  console.log(prop);
}

for (let prop in user) {
  console.log(`${prop}: ${user[prop]}`);
}
