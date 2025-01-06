const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers                 // Chainning
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// filter(), map(), forEach() all these expects a callback function
// filter() is for selecting specific elements. Creates a new array by transforming each element of the original array.
// map() is for transforming all elements. Creates a new array containing elements that pass a condition.