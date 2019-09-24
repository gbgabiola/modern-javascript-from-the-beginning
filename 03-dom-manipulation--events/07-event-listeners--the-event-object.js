/**
 * ******************************
 * Event Listeners & The Event Object
 * ******************************
 **/

/**
 * ********************
 * UNNAMED FUNCTION
 * ********************
 **/
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
  console.log('Hello World');
  // e.preventDefault();
});

/**
 * ********************
 * NAMED FUNCTION
 * ********************
 **/
document.querySelector('.clear-tasks').addEventListener('click', onClick);

/**
 * ********************
 * EVENT OBJECTS
 * ********************
 **/
function onClick(e) {
  // console.log("Clicked");
  // e.preventDefault();

  let val;
  val = e;

  // Event target elements:
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  // e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinates event relative to the browser window
  val = e.clientY;
  val = e.clientX;

  // Coordinates event relative to the element itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
