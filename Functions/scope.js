
var c = 300;
let d = 400;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    let d = 40;
    console.log("Inner d : ",d);
}

// console.log(a);  // error
// console.log(b);  // error
console.log(c);  // 30
console.log("Outer d : ",d);


function one(){
    username = "Rahul";
    function two(){
        const website = "gfg";
        console.log(username);
    }
    two();
    // console.log(website);
}
one();