const tileDisplay = document.querySelector('.tileContainer')
const keyboard = document.querySelector('.keyContainer')

//array for keyboard
const wordle = 'SUPER'

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<<'
]

//array for the guesses
const guessRows = [ 
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

let currentRow = 0
let currentTile = 0
//for each loop to create rows to enter guesses
guessRows.forEach( (guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-'+ guessRowIndex)
    //for each loop to create 5 singular tiles for the guesses
    guessRow.forEach((guessRow, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', "guessRow-"+ guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

//for each loop to make the keyboard
keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key 
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})


//function to print keys in the guess rows when keyborad buttons are clicked
const handleClick = (key) => {
    console.log('clicked', key)
    addLetter(key)
}

const addLetter = (letter) => {
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = letter 
    guessRows[currentRow][currentTile] = letter
    tile.setAttribute('data', letter)
    currentTile++
    console.log('guessRows', guessRows)
}



