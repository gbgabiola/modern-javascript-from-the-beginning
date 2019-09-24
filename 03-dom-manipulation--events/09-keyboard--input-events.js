/**
 * ******************************
 * Keyboard & Input Events
 * ******************************
 **/

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// Form Button Submit
form.addEventListener('submit', runEvent);

/**
 * ********************
 * Keyboard Events
 * ********************
 **/
// Keydown
taskInput.addEventListener('keydown', runEvent);
// Keyup
taskInput.addEventListener('keyup', runEvent);
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus
taskInput.addEventListener('focus', runEvent);
// Blur
taskInput.addEventListener('blur', runEvent);
// Cut
taskInput.addEventListener('cut', runEvent);
// Paste
taskInput.addEventListener('paste', runEvent);
// Input
taskInput.addEventListener('input', runEvent);

// Change Select List Option
select.addEventListener('change', runEvent);

/**
 * ********************
 * Event Handler (Function)
 * ********************
 **/
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  taskInput.value = ' ';
  console.log(taskInput.value);

  e.preventDefault();
}
