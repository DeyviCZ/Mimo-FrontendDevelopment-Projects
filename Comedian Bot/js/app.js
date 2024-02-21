
// const question  = document.querySelector('#question');
// const answer    = document.querySelector('#answer');


const chatContent = document.querySelector(".chat-content");
const btnStart  = document.querySelector('#btnStart');



const scrollToNewElement = (element) => {
    element.scrollIntoView();
}


const userText = () => {

    const contentDiv = document.createElement('div');

    contentDiv.textContent = "Tell me a joke!";
    contentDiv.className = "user-message";
    userContent.appendChild(contentDiv);

    const contentDivImg = document.createElement('img');
    contentDivImg.src = 'assets/user-avatar.jpg';
    contentDivImg.className = "user-content > img";
    userContent.appendChild(contentDivImg);
}

const botText = () => {

    const contentDiv = document.createElement('div');

    setTimeout(function() {
        contentDiv.textContent = "Hmm ...";
        contentDiv.className = "bot-content";
        botContent.appendChild(contentDiv);
    } ,2000 )

}

const start = () => {

    userMessage(); // Primero, crea el mensaje del usuario
    setTimeout(() => {
        botMessage("Uhmm ...");
    }, 1000);
    setTimeout(() => {
        botMessage("Ok, got one.");
    }, 3000);
    setTimeout(() => {
        requestJoke();
    }, 4000);

}

btnStart.addEventListener('click', start);


const botMessage = (messageText) => {

    const messageDiv = document.createElement("div");
    messageDiv.className = "bot-content";

    const avatar = document.createElement("div");
    avatar.className = "bot-content bot-avatar";

    const contentDiv = document.createElement("div");
    contentDiv.className = "bot-content bot-message";
    contentDiv.textContent = messageText;

    messageDiv.append(avatar, contentDiv);
    chatContent.appendChild(messageDiv);
    scrollToNewElement(messageDiv);

}

const userMessage = () =>{

    const userContentDiv = document.createElement("div");
    userContentDiv.className = "user-content";

    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "user-content user-message";
    userMessageDiv.textContent = "Tell me a joke!";

    const avatar = document.createElement("div");
    avatar.className = "user-content user-avatar";


    userContentDiv.append(userMessageDiv, avatar);
    chatContent.appendChild(userContentDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
    scrollToNewElement(userContentDiv);

}

const requestJoke = () => {

    fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
        .then(response => response.json())
        .then(data =>{
                botMessage(`${data.setup}`);

                setTimeout(() => {
                    botMessage(`${data.delivery}`);
                }, 3000);

        })
        .catch(error => {
            console.error('Hubo un error al obtener el chiste: ', error);
        })

}