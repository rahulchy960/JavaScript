
const mySym = Symbol("key1")
const JsUser = {
    name: "Rahul",
    "full name": "Rahul Chowdhury",
    [mySym]: "mykey1",  // symbol as a key
    age: 22,
    location: "kolkata",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rahul@chatgpt.com"
// Object.freeze(JsUser)    // prevent the object from changing values
JsUser.email = "rahul@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());