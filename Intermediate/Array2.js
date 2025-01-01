const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//[...arr1, ...arr2, ...arr3] this ... is spread operator
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // nested array
const real_another_array = another_array.flat(Infinity)  // flat down all nested elements into one array  
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // [] (we have to specify how to build the array : with keys or with values)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));