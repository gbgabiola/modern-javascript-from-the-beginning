/**
 * ******************************
 * Template Literals
 * ******************************
 **/

// Define Variables
const name = 'John';
const age = 35;
const job = 'Web Developer';
const city = 'New Hampshire';
let html;

/**
 * ********************
 * Without Template Literals (ES5)
 * ********************
 **/
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// Alternative syntax
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

/**
 * ********************
 * With Template Literals (ES6)
 * ********************
 **/
function hello() {
  return 'Hello';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;
