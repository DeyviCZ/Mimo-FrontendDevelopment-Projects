let attempts = 10;
let randomNumber = Math.floor(Math.random() * 100 ) + 1;
let btnSubmit = document.querySelector('button');
let userInput = document.getElementById("guess");

function checkGuess() {
    let feedback = document.getElementById("feedback");
    let strToInt = parseInt(userInput.value, 10);

    while (attempts > 0) {
        if(strToInt === randomNumber){
            feedback.innerHTML = "Congratulations!";
            break;
        } else if (strToInt < randomNumber){
             feedback.innerHTML = `Too low! Try again. ${attempts -1} attempts remaining.`;
        } else {
            feedback.innerHTML = `Too high! Try again. ${attempts -1} attempts remaining.`;
        }
        attempts --;

        if(attempts === 0) {
            feedback.innerHTML = `Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
        }
        break;
    }
}

btnSubmit.addEventListener('click', checkGuess);

userInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        checkGuess();
    }
});
