const shift     = document.querySelector('#shift');
const plainText = document.querySelector('#plainText');
const output    = document.querySelector('#output');

const fullStr = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
];

const translate = () => {

    let numCipher = parseInt(shift.value);
    let inputText = plainText.value;
    let textEncrypt = "";

    if (validateNumCipher(numCipher)) {

        for (let i = 0; i < inputText.length; i++) {
            const letter = inputText[i];

            if(fullStr.includes(letter)){
                const currentIndex = fullStr.indexOf(letter);
                const newIndex = (currentIndex + numCipher) % 26;
                textEncrypt += fullStr[newIndex];

            } else {
                textEncrypt += letter;
            }
        }

        output.textContent = textEncrypt;

    } else {
        output.textContent = "Invalid Number";
    }

};

const validateNumCipher = (numCipher) => {
    return !isNaN(numCipher) && numCipher > 0 && numCipher <= 25;
};


plainText.addEventListener('input', translate);
shift.addEventListener('input', translate);
