let randomNumber = parseInt(Math.random() * 100 + 1)
const submitguess = document.querySelector('#submitguess')
const guessfield = document.querySelector('#guessfield')
const guesses = document.querySelector('#guesses')
const remaining = document.querySelector('#remaining')
const result = document.querySelector('.result')
const laworhigh = document.querySelector('.laworhigh')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
    submitguess.addEventListener('click',function(e){
        e.preventDefault();
        const value = parseInt(guessfield.value);
        console.log(value);
        validateGuess(value)

    })
    
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1){
        alert('please enter a number more than 1')
    }else if (guess > 100){
        alert('please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
        
    }
    
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('you gussed it right')
        
    }else if(guess < randomNumber){
        displayMessage('Number is too low')

    }else if (guess > randomNumber){
        displayMessage('Number is too high')
    }

    
}

function displayGuess(guess) {

    guessfield.value = ''
    guesses.innerHTML += `${guess}    `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`


    
}
function displayMessage(message) {
    laworhigh.innerHTML = `<h2>${message}</h2>`

    
}
function endGame(game) {
    guessfield.value = ''
    guessfield.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">start new game</h2>`
    laworhigh.appendChild(p)
    playGame = false
    newGame();
    
}
function newGame(game) {
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click',function (e) {
    randomNumber =  parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1;
    guesses.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    guessfield.removeAttribute('disabled')
    laworhigh.removeChild(p)
    playGame = true;
    
   })

    
}
