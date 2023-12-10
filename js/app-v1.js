let maximumNumber = 10;
let secretNumber = parseInt(Math.random() * maximumNumber + 1);
let mensageKick = `Escolha um número entre 1 e ${maximumNumber}`;
let kick;
let attempt = 1;

function displayMessageOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function displayInitialMessageOnScreen() {
    displayMessageOnScreen("h1", "Número secreto");
    displayMessageOnScreen("h2", mensageKick);
}

function startGame() {
    alert("Boas vindas ao jogo do número secreto");

    // As long as the secret number is different from the guess, continue...
    while (secretNumber != kick) {
        kick = parseInt(prompt(mensageKick));

        if (kick == secretNumber) {
            break;
        } else {
            if (kick > secretNumber) {
                alert(`O número secreto é menor que ${kick}`);
            } else {
                alert(`O número secreto é maior que ${kick}`);
            }

            attempt++;
        }
    }

    let attemptText = attempt > 1 ? "tentativas" : "tentativa";
    let attemptMensage = `Parabéns, você acertou o número secreto ${secretNumber} com ${attempt} ${attemptText}`;

    displayMessageOnScreen("h2", attemptMensage);
    alert(attemptMensage);
}

displayInitialMessageOnScreen();