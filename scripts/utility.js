function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getARandomAlphabet() {
    const alphabetString = ('abcdefghijklmnopqrstuvwxyz');
    const alphabets = alphabetString.split('');
    // random index picker
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // 
    const alphabet = alphabets[index];
    console.log(alphabet, index);
    return alphabet;
}
// set background color function
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// set background color function
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}