/**
 * ******************************
 * Object Literals
 * ******************************
 **/

/**
 * ********************
 * Creating Object Literal
 * ********************
 **/
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 36,
  email: 'johndoe@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Manchester',
    state: 'NH'
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

let val;
val = person;

/**
 * ********************
 * Get specific value using the key
 * ********************
 **/
val = person.firstName; // Method 1: Dot Notion
val = person['firstName']; // Method 2: Brachet Notation
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

/**
 * ********************
 * Arrays of Objects
 * ********************
 **/
const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 40 }
];

// loop through array and print out the names of each person within the people array.
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
