# DOM Manipulation & Events

- [What is the DOM?](#what-is-the-dom)
- [Examining The Document Object](#examining-the-document-object)
- [DOM Selectors For Single Elements](#dom-selectors-for-single-elements)
- [DOM Selectors For Multiple Elements](#dom-selectors-for-multiple-elements)
- [Traversing The DOM](#traversing-the-dom)
- [Creating Elements](#creating-elements)
- [Removing & Replacing Elements](#removing--replacing-elements)


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


## Traversing The DOM

**Traversing the DOM** is the action of moving up and down the DOM object and dealing with specific parent and children nodes or whatever it is that we select.

There are different properties attached to the document items/nodes and it all depends on whether we select the parent or child of these nodes.

- `childNodes` returns a NodeList of child nodes of the given element, this includes text nodes which represents line breaks within HTML document
  - `nodeName` returns the name of the current node as a string
  - `nodeType` represents the type of the node
  - `nodeType` will return a number for the node selected
    - 1 = Element
    - 2 = Attribute (deprecated)
    - 3 = Text node
    - 8 = Comment
    - 9 = Document itself
    - 10 = Doctype
- `children` returns a HTMLCollection which contains all of the child elements of the node upon which it was called
- `firstChild` returns the node's first child in the tree, or null if the node has no children
- `firstElementChild` returns the object's first child Element, or `null` if there are no child elements
- `lastChild` returns the last child of the node
- `lastElementChild` returns the object's last child Element or null if there are no child elements
- `childElementCount` returns an unsigned long representing the number of child elements of the given element
- `parentNode` returns the parent of the specified node in the DOM tree
- `parentElement` returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element
- `nextSibling` returns the node immediately following the specified one in their parent's childNodes, or returns `null` if the specified node is the last child in the parent element
- `nextElementSibling` allows us to move down the DOM, from within the element node and we can combine this property to move multiple times down
- `previousSibling` returns the node immediately preceding the specified one in its parent's childNodes list, or `null` if the specified node is the first in that list
- `previousElementSibling` allows us to move up the DOM, from within the element node and we can combine this property to move back up the DOM

**Note**: We can combine `nextElementSibling` and `previousElementSibling` to move up and down the element node. Note we can all Traverse up and down Child Nodes using `.nextSibling` and `.previousSibling` (Child Nodes contain other nodes other than elements).


## Creating Elements

- `createElement()` creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized
- `setAttribute()` sets the value of an attribute on the specified element
- `appendChild()` adds a node to the end of the list of children of a specified parent node
- `createTextNode()` creates a new string to be put in the text node 

### Steps in Creating & Appending Elements to the DOM

1. Create an element
2. Add an id/classes/attributes to the element (Optional)
3. Add text Node (& append to element)/innerHTML (Optional)
4. Append the new element to the DOM as child element node.


## Removing & Replacing Elements

### Replace an Element

- Step 1
  - Create a element using a variable
  - Add id/class/attributes/textNodes to the element
- Step 2
  - Locate the old element we would want to replace and add it to a variable
  - Get the parent element of the old element and store it in a variable. `.replaceChild()` requires a parent object to call on the method
- Step 3
  - Replace the old element with the new element using the `.replaceChild()`

### Remove an Element

- Step 1
  - Create a variable to store all the elements using `querySelectorAll()`.
  - Create a variable to store the ul (parent) element of the li element.
- Step 2
There are two ways in which we can remove/delete a child element from the DOM.
  - The first variable in step 1 allows us to select an element using the index, then followed by the `remove()` to remove the element
  - Alternatively we can use the second variable and remove by child element using the parent and calling on the `removeChild()`, then passing in the first variable with the index as the parameter/argument

### Classes & Attributes

- `replaceChild()` replaces one child node of the specified node with another
- `remove()` of the DOMTokenList interface removes the specified tokens from the list
  - will remove the object from the tree it belongs to
- `removeChild()` will remove a child node from the DOM. Returns removed node
- `add()` of DOMTokenList interface adds the given token to the list
- `hasAttribute()` returns a **Boolean** value indicating whether the specified element has the specified attribute or not
- `removeAttribute()` removes the attribute with the specified name from the element.
