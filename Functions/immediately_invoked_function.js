
function one(){
    console.log("DB connected");
}
one();

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

(function one(){           // Wrapped in function in ()
    console.log("DB connected");
})();  // semicolon is must after IIFE 

(() => {
    console.log("DB connected");
})();

((name) => {
    console.log(`DB connected ${name}`);
})("Rahul");