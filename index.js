// function play(){
//     // home
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

// // playground
//    const playGroundSection = document.getElementById('playground');
//    playGroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        //  console.log('You pressed the correct key', expectedAlphabet);
        //  update score
        // 1-current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        console.log(currentScoreText);
        // 2-increase score
        const newScore = currentScore + 1;


        // 3-update score
        currentScoreElement.innerText = newScore;
        // new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You missed. You lost a life');
        // 1-current number
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2-reduce Number
        const newLife = currentLife - 1;
        // 3-updated Number

        currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            gameOver();
        }

    }

}
document.addEventListener('keyup', handleKeyboardButtonPress);

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');


}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBgColorId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-yellow-400');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);


    const randomMath = Math.random() * 25;
    const index = Math.round(randomMath);


    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}

// continue
function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log('your alphabet', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    addBgColorId(alphabet);
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
}

function play() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('playground')

    currentLifeText = document.getElementById('current-life');
    currentLifeText.innerText = '5';
    const currentScoreElement = document.getElementById('current-score');
    currentScoreElement.innerText = '0';
    
    continueGame()
}

function gameOver() {
    hideElementById('playground');
    showElementById('final-score');

    const  currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const lastScoreElement = document.getElementById('last-score');
    lastScoreElement.innerText = currentScoreText;

const currentAlphabet = getElementValueById('current-alphabet');
removeBackgroundColorById(currentAlphabet); 
}