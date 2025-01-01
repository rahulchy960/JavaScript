
const myArr = [1, 2, 3, 4, , 5, "Rahul", true]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr);

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // convert the array into a string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);


// slice, splice : slice doesnot change the original array but splice changes

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);        // [ 2, 3 ]
console.log("B ", myArr); // B  [ 1, 2, 3, 4, <1 empty item>, 5, 'Rahul', true ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // C  [ 1, <1 empty item>, 5, 'Rahul', true ]
console.log(myn2);         // [ 2, 3, 4 ]