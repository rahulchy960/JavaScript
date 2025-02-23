const users =[
    {name : "Alice", purchases : ["Laptop", "Phone"]},
    {name : "Bob", purchases : ["Laptop", "Tablet"]},
    {name : "Charlie", purchases : ["Tablet", "Phone"]}
]

/* need output in this format
output = {
    "Laptop" : ["Alice", "Bob"],
    "Phone"  : ["Alice", "Charlie"],
    "Tablet" : ["Bob", "Charlie"]
} */

output = {};

users.forEach((user)=>{
    user.purchases.forEach((item)=>{
        if(!output[item])
            output[item] = [];
        output[item].push(user.name);
    });
});
console.log(output);