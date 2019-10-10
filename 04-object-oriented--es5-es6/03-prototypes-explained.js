/**
 * ******************************
 * Prototypes Explained
 * ******************************
 **/

// Object.prototype - Object literals all have this prototype
// Person.prototype - Constructors have their own prototypes e.g. Persons.prototype but also have Object.prototype. This is known as prototype chain.

/**
 * ********************
 * Create a constructor
 * ********************
 **/

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

/**
 * ********************
 * Create prototype methods
 * ********************
 **/
// Calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets married last name
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

/**
 * ********************
 * Create object using the constructor
 * ********************
 **/
const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
// The properties firstname, lastname & dob appear for mary as properties. If we look at the __Proto__ object we can now see the different functions created above in the Person.prototype avaibale to use as seen below.

/**
 * ********************
 * Log prototype methods
 * ********************
 **/
// Person.prototype
console.log(john.calculateAge()); // 27
console.log(mary.getFullName()); // Mary Johnson
mary.getsMarried('Smith'); // manipulate the object property to change the last name
console.log(mary.getFullName()); // Mary Smith

// Object.prototype
console.log(mary.hasOwnProperty('firstName')); // true
console.log(mary.hasOwnProperty('getFullName')); // false - this is in the prototype and not a property of its own
