/**
 * ******************************
 * Local & Session Storage
 * ******************************
 **/

/**
 * ********************
 * LOCAL STORAGE
 * ********************
 **/
// Set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// console.log(name, age);

// Get from local storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name, age);

// Remove from local storage:
// localStorage.removeItem("name");
// console.log(name, age);

// Clear local storage
// localStorage.clear();
// console.log(name, age);

/**
 * ********************
 * SESSION STORAGE
 * ********************
 **/
// Set session storage item
// sessionStorage.setItem("name", "Beth");
// sessionStorage.setItem("age", "20");
// console.log(name, age);

// Get from session storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name, age);

// Remove from session storage
// sessionStorage.removeItem("name");
// console.log(name, age);

// Clear session storage
// sessionStorage.clear();
// console.log(name, age);

/**
 * ********************
 * JSON.Stringify & JSON.parse
 * ********************
 **/

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  e.preventDefault();
});

// Loop to list each task in the console
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);
});
