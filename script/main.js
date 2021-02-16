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

//function that add buttons in the first paragraph of out html page
function addButtons() {
    const input = document.querySelector('input');
    const paraFirst = document.getElementById('first');
    let nrOfButtons = Number(input.value);
    winningNumber = Math.floor(Math.random() * Number(input.value));

    //create array
    let numbersArray = [];
    for (let i = 0; i < nrOfButtons; ++i) {
        numbersArray[i] = i;
    }
    
    //shuffle the array
    numbersArray = shuffleArray(numbersArray);
    
    //create buttons and set an id
    for (let i = 0; i < nrOfButtons; ++i) {
        const newButton = document.createElement('button');
        newButton.innerText = "Cick me"; 
        newButton.id = numbersArray[i];
        paraFirst.appendChild(newButton);
    }
}

//function that clears all the buttons created
function clearButtons() {
    let oldButtons = document.getElementById('first').querySelectorAll('button');
    const paraFirst = document.getElementById('first');
    for (let i = 0; i < oldButtons.length; ++i) {
        const oldButton = paraFirst.querySelector('button');
        paraFirst.removeChild(oldButton);
    }
}

/*we are setting an event listner on the event object*/
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
    document.getElementById('addButton').addEventListener('click', addButtons);
    document.getElementById('second').appendChild(removeButton);
    removeButton.addEventListener('click', clearButtons);
    addListenerCheckValue();
}
init();

