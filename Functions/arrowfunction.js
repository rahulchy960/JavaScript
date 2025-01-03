
const user = {
    userName : "Rahul",
    age : 23,
    msg : function(){
        console.log(`${this.userName}, Welcome to Github!`);
        console.log(this);
    }
}
// user.msg()
user.userName = "Babai";
// user.msg()

// console.log(this) ; // this always refers to current context (which is empty in this case => {} empty object)
// but if we run this on browser console its current context will be => Window Object 

function show(){
    name = "Rahul";
    console.log(this.name);  // Rahul
    console.log(this);
}
// show()


const one = function(){
    console.log("Rahul");
    console.log(this)     // context global object
}
// one();


// arrow function 
// syntax : () => {}

const two = () => {
    console.log("Rahul");
    console.log(this)     // context empty object {}
}
// two();

const add = (num1, num2) => {
    return num1+num2;
}

console.log(add(4,7));

const Add = (num1, num2) => (num1+num2);  // implicit return allow function
console.log(Add(4,5));


// Wrapping the object in a () is important in implicit return

const obj1 = ()=> {name : "Rahul"};
console.log(obj1());  // undefined

const obj2 = ()=> ({name : "Rahul"});
console.log(obj2()); // { name: 'Rahul' }