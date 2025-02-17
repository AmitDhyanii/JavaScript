/*
 basically javascript is a functional oriented programming

js has prototypl behaviour  || example =>this, new, classes, prototypl inheritance
also no this keyword in arrow functions
prototypl inheritance => searching for value in its parent grandparent or so on. js never give up for searching value till the end


Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// javascript and classes
// OOP


// Object
// collection of properties and methods
// toLowerCase


// parts of OOP
// Object literal


// Constructor function
// Prototypes
// Classes
// Instances (new, this)


// 4 pillars
// Abstraction, Encapsulation, Inheritance, Polymorphism




console.log(this);