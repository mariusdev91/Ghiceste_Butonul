//declaring globally our variable that will store our winning number
let winningNumber;

//we use a function to shuffle the array
function shuffleArray(array) {
    let crtIndex = array.length, tempVal, rndIndex;
    while (crtIndex !== 0) {
        rndIndex = Math.floor(Math.random() * crtIndex);
        crtIndex -= 1;
        tempVal = array[crtIndex];
        array[crtIndex] = array[rndIndex];
        array[rndIndex] = tempVal;
    }
    return array;
}

//function that add buttons inside the div that has the id equal to first
function addButtonsToFirstDiv() {
    const input = document.querySelector('input');
    const divFirst = document.getElementById('first');
    let nrOfButtons = Number(input.value);
    winningNumber = Math.floor(Math.random() * Number(input.value));

    let numbersArray = [];
    for (let i = 0; i < nrOfButtons; ++i) {
        numbersArray[i] = i;
    }

    numbersArray = shuffleArray(numbersArray);
    
    //create buttons and set an id
    for (let i = 0; i < nrOfButtons; ++i) {
        const newButton = document.createElement('button');
        newButton.innerText = "Cick me"; 
        newButton.id = numbersArray[i];
        divFirst.appendChild(newButton);
    }
}

//function that removes all the buttons created
function clearButtons() {
    const divFirst = document.getElementById('first');
    divFirst.innerHTML = "";
}

//we are setting an event listener on the event object
function addListenerCheckValue() {
    const paraFirst = document.getElementById('first');
    paraFirst.addEventListener("click", function(e) {
        let btn = e.target.getAttribute('id');
        if (Number(btn) == winningNumber) { 
            alert(`You won! Congratulations!`);
        } else {
            alert(`Bad call! Try again or press the Clear button`);
        }
    });
}

function init() {
    const removeButton = document.createElement('button');
    removeButton.innerText = "Clear buttons";
    document.getElementById('addButton').addEventListener('click', addButtonsToFirstDiv);
    document.getElementById('second').appendChild(removeButton);
    removeButton.addEventListener('click', clearButtons);
    addListenerCheckValue();
}
init();

