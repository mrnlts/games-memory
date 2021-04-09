document.addEventListener('DOMContentLoaded', () => {

    console.log('Dom is loaded');

    //card options
    const cardArray = [
        {
            name: 'city',
            img: 'images/city.png'
        },
        {
            name: 'city',
            img: 'images/city.png'
        },
        {
            name: 'fish',
            img: 'images/fish.png'
        },
        {
            name: 'fish',
            img: 'images/fish.png'
        },
        {
            name: 'island',
            img: 'images/island.png'
        },
        {
            name: 'island',
            img: 'images/island.png'
        },
        {
            name: 'lady',
            img: 'images/lady.png'
        },
        {
            name: 'lady',
            img: 'images/lady.png'
        },
        {
            name: 'palmtree',
            img: 'images/palmtree.png'
        },
        {
            name: 'palmtree',
            img: 'images/palmtree.png'
        },
        {
            name: 'tree',
            img: 'images/tree.png'
        },
        {
            name: 'tree',
            img: 'images/tree.png'
        }
    ]


cardArray.sort(()=> 0.5 - Math.random());


const grid = document.querySelector( '.grid' );
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];


//create the board
function createBoard () {
    for(let i = 0; i < cardArray.length; i++) {
        let card = document.createElement ('img');
        card.setAttribute ('src', 'images/blank.png');
        card.setAttribute ('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild ( card );
    }
}


//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('You have clicked the same image!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.parentElement.innerHTML = 'Congratulations! You found them all!';
    }
}


//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}


createBoard();


});