// VARIABLES****************************
let userChoice;
let computerChoice;
let result;
// VARIABLES COUNTER******************
let counter1 = 0;
let counter2 = 0;
// VARIABLE ID ******************
let rockClick = document.getElementById('rock')
let paperClick = document.getElementById('paper')
let scissorsClick = document.getElementById('scissors')
// SOUNDS ******************* 
let winSound = document.getElementById('win')
let looseSound = document.getElementById('loose')
let egalSound = document.getElementById('egal')
// *******************

function stringChange(computerChoice) {
    console.log(computerChoice)
    switch (computerChoice) {
        case 1:
            return 'Pierre'

        case 2:
            return 'Feuille'

        case 3:
            return 'Ciseaux'


        default:
            break;

    }
}

//******************************
function resultFinish(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        computerString=stringChange(computerChoice)
        document.getElementById('result').innerHTML = `<div class="bg-secondary text-dark">Egalité</div>
        <div class="text-info">L'Ordinateur à choisie <span class="text-white">${computerString}</span></div>`

        egalSound.play()
    }
    //CONDITIONS GAGNER
    else if (userChoice == 1 && computerChoice == 3 || userChoice == 2 && computerChoice == 1 || userChoice == 3 && computerChoice == 2) {
        computerString=stringChange(computerChoice)
        document.getElementById('counter1').innerHTML++;
        document.getElementById('result').innerHTML = `<div class="bg-success text-dark">Tu as Gagné</div>
        <div class="text-info">L'Ordinateur à choisie <span class="text-white">${computerString}</span></div>`

        winSound.play()

    }
    //CONDITIONS PERDU
    else if (userChoice == 2 && computerChoice == 3 || userChoice == 1 && computerChoice == 2 || userChoice == 3 && computerChoice == 1) {
        computerString=stringChange(computerChoice)
        document.getElementById('counter2').innerHTML++;
        document.getElementById('result').innerHTML = `<div class="bg-danger text-dark">Tu as Perdu</div>
        <div class="text-info">L'Ordinateur à choisie <span class="text-white">${computerString}</span></div>`

        looseSound.play()

    }

}

// EVENEMENT******************************
rockClick.addEventListener('click', function () {
    userChoice = 1;
    computerChoice = Math.floor(Math.random() * 3) + 1;
    resultFinish(userChoice, computerChoice)
})
paperClick.addEventListener('click', function () {
    userChoice = 2;
    computerChoice = Math.floor(Math.random() * 3) + 1;
    resultFinish(userChoice, computerChoice)
})
scissorsClick.addEventListener('click', function () {
    userChoice = 3;
    computerChoice = Math.floor(Math.random() * 3) + 1;
    resultFinish(userChoice, computerChoice)
})