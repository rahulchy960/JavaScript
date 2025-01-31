// generate a random number
let random = parseInt(Math.random() * 100 + 1);
console.log(random);

// selecting the required elements
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const guessRemain = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const validate = document.getElementsByClassName('validate');

// requirements
const p = document.createElement('p');
let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess <1 || guess >100 || isNaN(guess)){
        alert("Please enter a valid Number")
    } else{
        prevGuess.push(guess);
        if(numOfGuesses > 10){
            displayMsg(`Game Over! The random number is ${random}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMsg("Yahoo! You guessed it right");
        endGame();
    }else if(guess<random){
        displayMsg("Number is less");
    }else if(guess>random){
        displayMsg("Number is greater");
    }
}

function displayGuess(guess){
    userInput.value = '';
    guesses.innerHTML += `${guess}, `;
    guessRemain.innerHTML = `${10 - numOfGuesses}`;
    numOfGuesses++;
}

function displayMsg(msg){
    lowOrHigh.innerHTML = `<h3>${msg}</h3>`;
}

function newGame(){
    const newgame = document.querySelector('#newGame');
    newgame.addEventListener('click',(e)=>{
        e.preventDefault();
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuesses = 1;
        guesses.innerHTML = '';
        guessRemain.innerHTML = `${10-numOfGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled',''); // disable input
    p.classList.add('button');
    p.innerHTML = '<h3 id="newGame">Start New Game</h3>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

