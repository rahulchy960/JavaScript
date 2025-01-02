// Hoisting is the default behavior in JavaScript where variable and function declarations are 
// moved to the top of their respective scopes during the compilation phase. This guarantees 
// that regardless of where these declarations appear within a scope, they can be accessed throughout that scope.

console.log(one(5));  // Accsicible
function one(num){
    return num*2;
}

// console.log(Two(5)); // not accsicible as we declared the the function in a variable
const Two = function(num){
    return num*2;
}
console.log(Two(5));   // Accsicible