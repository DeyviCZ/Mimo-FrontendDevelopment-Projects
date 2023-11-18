var attempts = 10;
var randomNumber = Math.floor(Math.random() * 100 ) + 1;

function checkGuess() {
    var feedback = document.getElementById("feedback");
    var userInput = parseInt(document.getElementById("guess").value,10);

    while (attempts > 0) {
        if(userInput === randomNumber){
            feedback.innerHTML = "Congratulations!";
            break;
        } else if (userInput < randomNumber){
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
