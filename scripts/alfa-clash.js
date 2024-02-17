/* function play(){
    const homeSection = document.getElementById('home-screen')
    homeSection.classList.add('hidden')
    // console.log(homeSection.classList);
    
    const playGroundSection = document.getElementById('play-ground')
    playGroundSection.classList.remove('hidden')
} */


function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log(playerPressed);

    
 // get expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPressed , expectedAlphabet);

// check matched or not
if(playerPressed === expectedAlphabet){
    console.log('You get a point');
}else{
    console.log('You lost a life');
}

}



// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

    // remove background color
    removeBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}