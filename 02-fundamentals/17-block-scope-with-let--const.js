/**
 * ******************************
 * Block Scope With Let & Const
 * ******************************
 **/

/**
 * ********************
 * GLOBAL SCOPE & FUNCTION SCOPE
 * ********************
 **/

// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// FUNCTION SCOPE
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

/**
 * ********************
 * BLOCK SCOPE (IF)
 * ********************
 **/

if (true) {
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('(If) Block Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c);

/**
 * ********************
 * BLOCK SCOPES (FOR LOOPS)
 * ********************
 **/

// VAR BLOCK SCOPE
for (var a = 0; a < 10; a++) {
  console.log(`Var Loop: ${a}`);
}

// LET BLOCK SCOPE
for (let b = 0; b < 10; b++) {
  console.log(`Let Loop: ${b}`);
}
