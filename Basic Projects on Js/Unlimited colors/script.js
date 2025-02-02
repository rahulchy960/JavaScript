// generate random color

const randomColor = function(){
    const hex = '0123456789ABCDE';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

document.querySelector("#start").addEventListener('click',()=>{

    const start = setInterval(()=>{
        document.body.style.background = randomColor();
    },1000);

    document.querySelector("#stop").addEventListener('click',()=>{
        clearInterval(start);
    })
})