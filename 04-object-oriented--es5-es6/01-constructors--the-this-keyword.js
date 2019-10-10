/**
 * ******************************
 * Constructors & the 'this' Keyword
 * ******************************
 **/

// Person Constructor Example 1
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this); // returns all Person objects.
}

console.log(this); // returns the windows object.

// Instantiating Person Constructor to create multiple objects:
const john = new Person('John', 25);
const mark = new Person('Mark', 30);
console.log(mark.name); // returns value associated with name key i.e. Mark

// Person Constructor Example 2
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const john = new Person('John', '2-14-1993');
// console.log(john);
console.log(john.calculateAge());
