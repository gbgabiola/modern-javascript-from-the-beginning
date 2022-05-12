let request = new XMLHttpRequest();

let scriptURL = "http://";
let asynch = true; // setting this as true insures that it will behave asynchronous

request.open("GET", scriptURL, asynch);

/* Setting the function that does something with the request */
request.onreadystatechange = doSomething; // will not wait

/* Sending request */
request.send(null);

function doSomething() {
  // something..
}
