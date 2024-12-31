let name = "Rahul";
let age = 22;
console.log(`My name is ${name} and my age is ${age}`); // string interpolation

let game = new String("BGMI");
console.log(typeof name);   // string (primitive)
console.log(typeof game);   // object (reference)

/* when we use new keywond when initialize a primitive, it become an object and allocated in heap */

let num = new Number(25);
let num2 = Number(age);
console.log(typeof age);   // number
console.log(typeof num);   // object
console.log(typeof num2);  // number

/* String Object have manu utility methods attached with it */

let gameName = 'Rahul Chess'
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Rahul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rahul%20chowdhury"

console.log(url.replace('%20', '-'))

console.log(url.includes('rahul'))

console.log(gameName.split(' '));
