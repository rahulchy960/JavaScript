// let time = new Date();
// console.log(time.toLocaleTimeString());
let clock = document.getElementById('clock');
setInterval(()=>{
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
},1000);