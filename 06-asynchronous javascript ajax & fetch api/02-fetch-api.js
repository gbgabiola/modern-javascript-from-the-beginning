let url = "https://jsonplaceholder.typicode.com/todos/1";

/*
    creating a variable for the returned promise
*/
const promise = fetch(url);

/*
    Unwrapping the promise with .then
    Note: Notice that response.json() also returns a promise
*/
promise.then((response) => response.json()).then((json) => console.log(json));
