/**
 * ******************************
 * DOM Object Properties
 * ******************************
 **/

/**
 * ********************
 * DOM PROPERTIES
 * ********************
 **/
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

/**
 * ********************
 * SELECTING DOM PROPERTIES WITHOUT SELECTORS
 * ********************
 **/
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;

val = document.scripts[2].getAttribute('src');

/**
 * ********************
 * CONVERT HTML COLLECTION TO ARRAYS
 * ********************
 **/
let scripts = document.scripts;
let scriptsArr = Array.from(scripts); // Converts HTML collection into an Array Object

// Without array conversion this will get a TypeError message
scriptsArr.forEach(function(script) {
  console.log(script);
});

// Log only the src links.
scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
