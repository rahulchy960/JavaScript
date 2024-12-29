"use strict"; //  treat all JS code as mordern js (ECMA script standard)

// alert('Hello, Rahul!');  // alert popup (*browser only)

// Primitive Data Types

// number => 2^53 64 bit
let age = 25;       // Integer
let price = 99.99;  // Floating-point
let infinity = Infinity; // Special number value
let nan = NaN;      // Result of invalid math operation

// bigInt => beyond number
let bigNumber = 1234567890123456789012345678901234567890n;

// string => ""
let greeting = "Hello";
let name = 'Rahul';
let message = `Hi, ${name}!`; // Template literal

// boolean => true/false
let isLoggedIn = true;
let isAdult = false;

// null => standalone value / Represents an intentional absence of value.
let value = null;

// undefined => A variable that has been declared but not assigned a value
let x; // Undefined by default
console.log(x); // undefined

// symbol => Represents unique, immutable values often used as object keys.
let uniqueId = Symbol('id');
console.log(uniqueId)

console.log(typeof age)        // number
console.log(typeof Infinity)   // number
console.log(typeof null)       // object
console.log(typeof undefined)  // undefined