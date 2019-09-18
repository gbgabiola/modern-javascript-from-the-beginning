/**
 * ******************************
 * Dates & Times
 * ******************************
 **/

let val;

/**
 * ********************
 * Date & Time
 * ********************
 **/
const today = new Date(); // Instantiating a date object.
val = today;
console.log(val, typeof val); // Tue Sep 17 2019 18:12:40 GMT+0800 & Object

let birthday = new Date('9-10-1981 11:25:00'); // Changing it to a specific date/time

birthday = new Date('September 10 1981');
birthday = new Date('10 Sep 1981');
birthday = new Date('09/10/1981');
val = birthday;

// console.log(val.toUTCString());

/**
 * ********************
 * Get Dates
 * ********************
 **/
val = today.getMonth(); // month in numerical format (0 based)
val = today.getDate(); // the date/day of the month
val = today.getDay(); // day in numerical format (0 based)
val = today.getFullYear(); // year

/**
 * ********************
 * Get Time
 * ********************
 **/
val = today.getHours(); // hour
val = today.getMinutes(); // minute
val = today.getSeconds(); // seconds
val = today.getMilliseconds(); // milliseconds
val = today.getTime(); // time stamp

console.log(val);

/**
 * ********************
 * Set Date
 * ********************
 **/
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2019);

/**
 * ********************
 * Set Time
 * ********************
 **/
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
