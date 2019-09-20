# DOM Manipulation & Events

- [What is the DOM?](#what-is-the-dom)
- [Examining The Document Object](#examining-the-document-object)


##  What is the DOM?

The DOM is a structured representation of a HTML document.

- Document Object Model
- Tree of nodes/elements (tags) created by the browser
- JavaScript can be used to read/write/manipulate the DOM
- The DOM is Object Oriented Representation (each node has its own set of properties and methods)

The browser gives us a window object and inside that we have a document object. The diagram above represents the loaded documents web page.

- root element which is the `<html>` element
- below we have the `<head>` and `<body>` tag which are both siblings (i.e. on the same level) in the tree
- in the `<head>` we have things like the meta tags, title etc.
- in the `<body>` we have our output such as h1, HTML5 header/footer, links tags etc.
- we can manipulate the elements using JavaScript
- you can use libraries such as jQuery to make it a little easier to manipulate the DOM, but it is worth learning how to do these stuff using vanilla JavaScript

**Analogy**: using jQuery to select elements from the DOM is kind of like using a sledge hammer to kill a mosquito.


## Examining The Document Object

`document` object returns the HTML structure.

### Document Properties

- `all` returns all of HTML document tags as arrays
  - uses zero indexing to call back specific tag from the document array
- `all.length` finds the length (properties) of the document array (i.e. number of elements in the DOM)
- `head` returns the `<head>` element of the current document
- `body` returns the `<body>` element of the current document
- `doctype` returns the Document Type Declaration
- `domain` returns the domain name
- `URL` returns the document location as a string
- `characterSet` returns the character encoding of the document
- `contentType` access to the content type i.e. text/html

### Selecting DOM Properties Without Selectors

- `forms`  returns an all the `<form>` elements contained in the document (if there are more forms they will have index numbers assigned to them)
  - `id` select ID of the form
  - `method` get method (forms have get and post methods)
  - `action` returns any action on the form
- `links` returns a collection of all links in a document with a value for the href attribute
  - we can access certain links using the index number
  - `id` returns the link id
  - `className` returns a string of all the classes
  - `links[0].classList[0]` returns a DOMtokensList of the different classes (use zero index to select a specific class)
- `images` returns images, if none then returns an empty collection
- `scripts` returns a list of the `<script>` elements in the document
  - `getAttribute()` returns the attribute of a script

### CONVERT HTML COLLECTION TO ARRAYS

By default, you cannot run loops on HTML collections. You must convert them into an array in order to use loops such as `forEach` loops etc.

- `Array.from()` creates a new, shallow-copied Array instance from an array-like or iterable object

