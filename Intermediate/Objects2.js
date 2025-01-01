// Singletons are classes which can be instantiated once, 
// and can be accessed globally. This single instance can 
// be shared throughout our application, which makes Singletons 
// great for managing global state in an application.

// const tinderUser = new Object()  // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {       // nested object
        userfullname: {  // nested nested object
            firstname: "Rahul",
            lastname: "chowdhury"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 }  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj4);   
const obj5 = Object.assign({}, obj1, obj2, obj3) //.assign(target,src,src,...)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj5);
const obj6 = {...obj1, ...obj2, ...obj3}  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj6);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    },
]

users[1].email

console.log(tinderUser);
const objKeys = Object.keys(tinderUser)
console.log(objKeys);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

