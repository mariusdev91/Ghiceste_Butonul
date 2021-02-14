//utility functions
function randomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}
function winningNumber(value) {
    return Math.floor(Math.random() * Number(value)) + 1;
}

function addButtons() {
    const input = document.querySelector('input');
    const paraFirst = document.getElementById('first');
    let nrOfButtons = Number(input.value);
    for (let i = 1; i <= nrOfButtons; ++i) {
        const newButton = document.createElement('button');
        newButton.innerText = "Cick me";
        //newButton.id = "btn-" + i;
        paraFirst.appendChild(newButton);
    }
}

function setIdForButton() {
    let buttons = document.querySelectorAll('button');
    for (let i = 1; i < buttons.length; ++i) {
        let rndNum = randomNumber(buttons.length);
        buttons[i].setAttribute('id', rndNum.toString());
    }
}

function clearButtons() {
    let oldButtons = document.getElementById('first').querySelectorAll('button');
    const paraFirst = document.getElementById('first');
    for (let i = 1; i <= oldButtons.length; ++i) {
        const oldButton = paraFirst.querySelector('button');
        paraFirst.removeChild(oldButton);
    }
}

function addListenerCheckValue() {
    const input = document.querySelector('input');
    const paraFirst = document.getElementById('first');
    let winnerNumber = winningNumber(input.value);
    paraFirst.addEventListener("click", function (e) {
        let btnAttribute = e.getAttribute('id');
        if (btnAttribute == winnerNumber.toString()) {
            alert(`You won! Congratulations!`);
        } else {
            alert(`Bad call! Try again or press the Clear button`);
        }
    });
}

function init() {
    const removeButton = document.createElement('button');
    removeButton.innerText = "Clear buttons";
    document.getElementById('addButton').addEventListener('click', addButtons);
    setIdForButton();
    document.getElementById('second').appendChild(removeButton);
    removeButton.addEventListener('click', clearButtons);
    addListenerCheckValue();
}

init();

