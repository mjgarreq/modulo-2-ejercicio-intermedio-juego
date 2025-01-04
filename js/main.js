/*
    1. Crea HTML (h1, h2, select (seleccione jugada, piedra, papel y tijera), botón jugar, h3 con mensaje, (bonus contadores y boton reinicio)).
    2. Crear VAR - seleccionar los elementos del HTML para interactuar (select, boton, h3 (bonus contadores y boton reinicio)).
    3. Escuchar un evento sobre el botón ('click').
        3.1. Almacenar elección usuaria
        3.2. Generar un numero aleatorio entre 1 y 9.
            - Si es menor o igual a 3 --> piedra.
            - Si es menor o igual a 7 --> papel.
            - Sino --> tijera.
        3.3. Comparar resultado con elección usuaria y mostrar mensaje en h3.
            - Si la elección de la usuaria coincide con el movimiento aleatorio del ordenador --> empate.
            - Si la elección de la usuaria gana al movimiento aleatorio del ordenador --> ¡Has ganado!
            - Si la elección de la usuaria pierde contra el movimiento aleatorio del ordenador --> ¡Has perdido!
*/

//2.
const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const msg = document.querySelector('.js-msg');
const userCount = document.querySelector('.js-userCount');
const computerCount = document.querySelector('.js-computerCount');
const winner = document.querySelector('.js-winner');
const reset = document.querySelector('.js-reset');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function computerSelection() {
    const numRandom = getRandomNumber(9);
    let randomSelection = '';
    if (numRandom <= 3) {
        randomSelection = 'piedra';
    } else if (numRandom <= 7) {
        randomSelection = 'papel';
    } else {
        randomSelection = 'tijera';
    }
    return randomSelection
}

function compareResults(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        msg.innerHTML = `Empate. Los dos habéis elegido ${userSelection}`;
    } else if (
        userSelection === 'tijera' && computerSelection === 'papel' || 
        userSelection === 'papel' && computerSelection === 'piedra' || 
        userSelection === 'piedra' && computerSelection === 'tijera'
    ) {
        msg.innerHTML = `¡Has ganado! El ordenador ha elegido ${computerSelection}`;

        userCount.innerHTML = parseInt(userCount.textContent) + 1;
    } else {
        msg.innerHTML = `¡Has perdido! El ordenador ha elegido ${computerSelection}`;
       
        computerCount.innerHTML = parseInt(computerCount.textContent) + 1
    }
}

function checkWinner (userCount, computerCount) {
    if (userCount > computerCount) {
        winner.innerHTML = "¡Has ganado la partida!"
    } else if (computerCount > userCount) {
        winner.innerHTML = "¡Has perdido la partida!"
    } else {
         winner.innerHTML = "¡Has empatado la partida!"
    }
}

let movements = 0;

function handleClick(ev) {
    ev.preventDefault();
    //3.1
    const userSelection = select.value;
    if (userSelection !== '') {
        compareResults(userSelection, computerSelection());
    } else {
        msg.innerHTML = 'Elige Piedra, Papel o Tijera'
        return
    }

    if (movements < 10) {
        movements++;
    } else {
        checkWinner(parseInt(userCount.textContent), parseInt(computerCount.textContent));
    }
    console.log(movements);
}

//3
button.addEventListener('click', handleClick);


