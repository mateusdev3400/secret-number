let restartGameButton = document.querySelector("#restart");
let kickGameButton = document.querySelector("#kick");

let listDrawnNumbers = [];
let maximumNumber = 4;
let secretNumber = generateRandomNumber();
console.log(secretNumber);
let attempt = 1;
let kick;

function displayMessageOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
} 

function displayInitialMessageOnScreen() {
    displayMessageOnScreen("h1", "Jogo do número secreto");
    displayMessageOnScreen("p", `Escolha um número entre 1 e ${maximumNumber}`);
}

function checkKick() {
    kick = document.querySelector("input").value;

    if (kick == secretNumber) {
        let attemptText = attempt > 1 ? "tentativas" : "tentativa";
        let attemptMensage = `Você acertou o número secreto ${secretNumber} com ${attempt} ${attemptText}`;

        kickGameButton.setAttribute("disabled", true);
        restartGameButton.removeAttribute("disabled");

        displayMessageOnScreen("h1", "Acertou!");
        displayMessageOnScreen("p", attemptMensage);
    } else {
        if (kick > secretNumber) {
            displayMessageOnScreen("p", `O número secreto é menor que ${kick}`);
        } else {
            displayMessageOnScreen("p", `O número secreto é maior que ${kick}`);
        }

        attempt++;
        clearField();
    }
}

function clearField() {
    check = document.querySelector("input");
    check.value = "";
}

function restartGame() {
    secretNumber = generateRandomNumber();
    clearField();
    displayInitialMessageOnScreen();

    kickGameButton.removeAttribute("disabled");
    restartGameButton.setAttribute("disabled", true);
}

function generateRandomNumber() {
    let numberChosen = parseInt(Math.random() * maximumNumber + 1);
    let quantityNumbersList = listDrawnNumbers.length;

    if (quantityNumbersList == maximumNumber) {
        listDrawnNumbers = [];
    }

    if (listDrawnNumbers.includes(numberChosen)) {
        return generateRandomNumber();
    } else {
        listDrawnNumbers.push(numberChosen);
        console.log(listDrawnNumbers);
        return numberChosen;
    }
}

displayInitialMessageOnScreen();