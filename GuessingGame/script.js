let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.querySelector('#guesses')

let randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum);
let noOfGuess = 0;
btn.addEventListener("click", () => {
    guessesNumber();
})

function guessesNumber() {
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.textContent = "Enter Number between 1 to 100";
        noOfGuess++;
        guesses.innerHTML = `No. of Guess: ${noOfGuess}`
    }
    else {
        noOfGuess++;
        if(randNum>input.value){
            wrng.textContent = "Your value is too small"
        }
        else if(randNum<input.value){
            wrng.textContent = "Your value is too big"
        }
        else{
            wrng.textContent = `You got it right, in ${noOfGuess} guess`
            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
        guesses.innerHTML = `No. of Guess: ${noOfGuess}`
    }
    input.value='';
}

function resetGame() {
    noOfGuess=0;
    randNum=Math.floor(Math.random() * 100) + 1;   
    input.value='';
    btn.disabled=false;
    guesses.innerHTML = "No. of Guess:0"
}