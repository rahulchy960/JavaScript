// string to number
let score = "150"
console.log(typeof(score))

let valueInNumber = Number(score)  // explicit type conversion 
console.log(typeof(valueInNumber)) 

// string to number
let num = "123ab"
console.log(num)
let numCon = Number(num);
console.log(typeof(numCon))
console.log(numCon)    // NaN (a special type of number indicates conversion fails)

// null to number
let n = null;
console.log(typeof(n))
let numN = Number(n);
console.log(typeof(numN))
console.log(numN)    // 0

// string to boolean
let log = ""
let loggedIn = "Rahul"
console.log(typeof(log))
console.log(typeof(loggedIn))

let Clog = Boolean(log)
let CloggedIn = Boolean(loggedIn)
console.log(Clog)  // false (empty string)
console.log(CloggedIn)  // true (any string)
console.log(typeof(Clog))
console.log(typeof(CloggedIn))


// boolean to string
let bool = true ; 
let strBool = String(bool);   
console.log(typeof bool)  
console.log(typeof(strBool))
console.log(strBool)