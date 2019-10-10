# Object Oriented JavaScript - ES5 & ES2015

- [Constructors & the 'this' Keyword](#constructors--the-this-keyword)
- [Built In Constructors](#built-in-constructors)
- [Prototypes Explained](#prototypes-explained)
- [Prototypal Inheritance](#prototypal-inheritance)


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


## Built In Constructors

There are other core objects in JavaScript that have constructors as well; however, most are not advisable to use. 

Primitive types such as `Strings`, `Numbers`, `Booleans` etc. can be created as constructor objects instead of primitives. There are more reason for not using constructors instead of primitives compared to the reason for using it: it slows down execution speed, more code, confusing and issues when using operators to compare values.

**Note**: these core object constructor exist in JavaScript but not something you will use often, learning it only to see what is possible in JavaScript for knowledge.


## Prototypes Explained

- Each object in JavaScript has a prototype and a prototype is an object in itself
- All object inherit their properties and methods from their prototypes
- When dealing with object literals you are inheriting from a prototype called `Object.prototype`
- When dealing with objects created from a constructor, it is inheriting from a prototype
- There is something called the prototype chain where you have the constructor prototype but ypu can also go upto the main `Object.prototype`

The `Object.prototype` has its own default functions that we can call such as `hasOwnProperty()`. This will check if an object has its own property.


## Prototypal Inheritance

**Prototypal Inheritance** is where one object type inherits from another object type.

- `call()` allows us to call another function from somewhere else in the current context
- We can override the our prototypes with new prototypes 

**Note**: any new methods on our created object prototype will be accessible to the other object through inheritance.
