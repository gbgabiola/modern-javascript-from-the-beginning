# Object Oriented JavaScript - ES5 & ES2015 (ES6)

- [Constructors & the 'this' Keyword](#constructors--the-this-keyword)
- [Built In Constructors](#built-in-constructors)
- [Prototypes Explained](#prototypes-explained)
- [Prototypal Inheritance](#prototypal-inheritance)
- [Using Object.create](#using-objectcreate)
- [ES6 Classes](#es6-classes)
- [Sub Classes](#sub-classes)


## Constructors & the 'this' Keyword

Constructors and the 'this' keyword are one of the most fundamental/important subject in OOP (and in any programming language)

**Note**: ES6 is syntactic sugar or a convenient way of writing OOP code similar to programming languages that uses classes, i.e. Java, C# and PHP etc.

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


## Using Object.create

`Object.create()` creates a new object, using an existing object as the prototype of the newly created object

We can create prototype inside of a parent object and then have different properties with different prototype methods/prototype functions

Steps in using `Object.create`:

- create a parent function that is an object with the different prototype methods
- create a variable to create a new object using the `Object.create()` passing in the parent function
- add properties to the new object
- we can also call on the prototype methods on these objects as you normally would do


## ES6 Classes

- classes when creating objects is very common with other programming languages i.e. Java, C#, PHP, Python & etc
- we can create a class, constructors, have methods and properties inside of the class
- set the constructor and properties for the class and also create the class methods (i.e. object prototypes/functions) all within our class.
- we can now create a new class based on the ES6 class object by calling new ClassName() and passing in the parameters. We can also call on the Class methods on the new class object

**Note**: under the hood in the JavaScript engine ES6 classes works almost exactly the same way as ES5 Constructors & Prototypes (i.e. you still have the `__proto__` object which has your class constructors and methods). This is why ES6 Classes is considered a syntactic sugar/convenience syntax i.e. its basically changing the way we write them and not the way it operates in the underlying engine/language.

Static Methods - able to use without instantiating an object i.e. we do not need to create an object to use the method.

- If we wanted to add two numbers together we do not need specific object properties i.e. it is a standalone method. To create a static method we would use the '`static`' keyword, e.g.

```js
static addNumbers(){
  standalone function;
}
```

- we do not need to create a variable to use `static` method, rather we would use the ClassName, followed by the static functionName and passing in any properties for the function, e.g. `Person.addNumbers(1,2)`
- You would generally use static function where you do not use the `this` keyword in the method within the class object because you do not require the properties of the class for the function to work i.e. this is a standalone function


## Sub Classes
 
- sub class syntax is the ES6 version of inheritance
- `extends` keyword is used to create a class as a child of another class
- if there is a constructor present in the subclass, it needs to first call `super()` before using `this`.
- `super` keyword is used to access and call functions on object's parent

**Example**:

1. created a `Person` class with properties and methods
2. then created a `Customer` class which `extends` from the `Person` class, e.g. `class Customer extends Person`
3. when we instantiate a Customer, since it is extending a Person we want to call the Person constructor and to do this we would use a function called `super()`. We would have to call the parameters from the parent object i.e. `Person` object parameters. Any extra properties in relation to the `Customer` class we will define as normal within the `constructor()` method using the '`this`' keyword
4. we can also instantiate any methods from the `Person` class even though they are not within the `Customer` class, this is because the `Customer` class `extends` from the `Person` class
5. we can create `Customer` methods as well (this also includes static methods)

**Note**: we can use `Person` properties and methods in the `Customer` class because we extended `Person` class, but we cannot use `Customer` properties and methods in `Person` (the opposite way round) unless we extend the `Customer` class in the `Person` class. Sub Classes extends one way only.

Please refer to the [codes](07-sub-classes.js).
