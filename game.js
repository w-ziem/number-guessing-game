let randomNumber = Math.floor(Math.random()*100) +1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


const checkGuess = () => {
   const userGuess = Number(guessField.value);

   if (guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
   }
   guesses.textContent = `${guesses.textContent} ${userGuess}`;

   if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
   }

   else if (guessCount === 10) {
    lastResult.textContent = "GAME OVER!!!";
    lowOrHi.textContent = '';
    setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
};


guessSubmit.addEventListener('click', checkGuess);


