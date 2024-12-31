
// js comparison operators blindly do type conversion on its own then compare the values so 
// there is uncontrolled behavior when we compare different types of primitive
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);  // true
console.log("0" > 1);  // false

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false


console.log("2" == 2);   // true (== doesnt do tppe check)
console.log("2" === 2);  // false (=== does type check first)