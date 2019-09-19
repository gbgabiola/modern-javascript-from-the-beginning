/**
 * ******************************
 * A Look at the Window Object
 * ******************************
 **/

/**
 * ********************
 * WINDOW METHODS / OBJECTS / PROPERTIES
 * ********************
 **/

// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if (confirm('Are you sure')) {
  console.log('YES'); // OK button.
} else {
  console.log('NO'); // Cancel button.
}

let val;
// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY; // Vertical
val = window.scrollX; // Horizontal

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port; // port number
val = window.location.href; // full Host name & Port number
val = window.location.search; // http search criteria

// Redirect
window.location.href = 'http://google.com';

// Reload
window.location.reload();

// History Object
window.history.go(-2); // move 2 web pages backwards in the web history
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
