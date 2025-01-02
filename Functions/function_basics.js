function show(){
    console.log("Hello World!");
}

show // function reference
show() // function call

function add(num1, num2){
    return num1+num2;
}

let result = add(5,10);
console.log(result);

function userLog(user){
    if(user === undefined){
        return `Please Enter your name`;
    }
    return `${user}, Just Logged In`
}

console.log(userLog("Rahul"));

// function userLog(user = "Babai"){} // default argument

// function calculateCartPrice(...num){ // rest operator (accepts all the arguments and form an array)
//     return num;
// }
function calculateCartPrice(val1,val2,...num){
    return num;
}

console.log(calculateCartPrice(200,300,400,500));


function ObjPass(obj){
    console.log(`Username is ${obj.username} and Name is ${obj.name}`);
}

ObjPass({username:"rachchy20",name : "Rahul"});

function arrayAccess(Arr){
    return Arr[0];
}
console.log(arrayAccess([100, 200, 300]));