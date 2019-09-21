# DOM Manipulation & Events

- [What is the DOM?](#what-is-the-dom)
- [Examining The Document Object](#examining-the-document-object)
- [DOM Selectors For Single Elements](#dom-selectors-for-single-elements)
- [DOM Selectors For Multiple Elements](#dom-selectors-for-multiple-elements)


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


## DOM Selectors For Single Elements

DOM Element Selectors are object methods that allow us to pull things from the DOM, manipulate and do different things to the elements or nodes.

**Note**: jQuery is useful for quick simple plugins and/or scripts for specific actions. You should no longer use it for DOM manipulation.

Two types of selectors:

1. **Single Element Selectors** which allows you to grab a single element by its id/class/etc and it can only store one element. If you use a single element that appears more than once in the DOM, it will only grab the single first instance of the element
2. **Multiple Element Selectors** will grab all the elements with the class and return a HTML collection or a node list depending on which selector you use

Two ways to select single elements:

- `document.getElementById()` returns an Element object representing the element whose id property matches the specified string
- `document.querySelector()` is newer and much more powerful that returns the first Element within the document that matches the specified selector, or group of selectors
  - if no matches are found, `null` is returned
  - works exactly like jQuery and accepts any CSS selectors

**Note**: Target a specific element even if there is more than one in the DOM by using the CSS :first-child/:last-child/:nth-child() sudo element within the querySelector.


## DOM Selectors For Multiple Elements

- `document.getElementByClassName()` returns an array-like object of all child elements which have all of the given class names
- `document.getElementByTagName()` returns an HTMLCollection of elements with the given tag name
- `querySelectorAll()` returns a static NodeList (not HTML Collection) representing a list of the document's elements that match the specified group of selectors
  - NodeList counts not just elements but also things like text nodes and it also allows us to do things such as forEach loops and other array methods without having to convert it into an array first

**Note**: `for` loop will work with both HTML Collections and Node Lists (using `length` on a HTML collection and access the item using the index) whereas the `forEach` loop will only work with Array/NodeList and not with HTML Collections.


