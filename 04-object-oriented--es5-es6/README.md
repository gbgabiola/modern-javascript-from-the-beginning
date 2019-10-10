# Object Oriented JavaScript - ES5 & ES2015

- [Constructors & the 'this' Keyword](#constructors--the-this-keyword)


## Constructors & the 'this' Keyword

Constructors and the 'this' keyword are one of the most fundamental/important subject in OOP (and in any programming language)

**Note**: ES6 is syntactic sugar or a convenient way of writing OOP code similar to programming languages that uses classes, i.e., Java, C# and PHP etc.

### Constructors

- define a function, constructors should always start with a capital letter
- add an argument/parameter in the function
- using the '`this`' keyword to create key:value pairs, the value being either a hard coded value or the parameter/argument

To instantiate a new object from the constructor we can use the '`new`' keyword to make a new object using the constructor.

### The '`this`' Keyword

The '`this`' keyword is very important and what this does is that it refers to the current instance of the object which pertain to the function scope.

However, if we were to use the '`this`' keyword in the global scope this will pertain to the windows object.
