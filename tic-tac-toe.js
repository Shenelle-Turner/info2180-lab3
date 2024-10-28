/**************************************************************/
//             EXERCISE 1 - - Layout the board                //
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    // Get all the divs inside the board
    const squares = document.querySelectorAll('#board > div');
    
    // Add the 'square' class to each div
    squares.forEach(square => {
        square.classList.add('square');
    });
});

/**************************************************************/
//    EXERCISE 2  - Add an X or O to a square when clicked    //
/**************************************************************/

let currentPlayer = 'X';

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board > div');
    
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (!square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});

/******************************************************************************/
//    EXERCISE 3 - Change the style when you move your mouse over a square    //
/******************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board > div');
    
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });
        
        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });
});

/********************************************************************/
//    EXERCISE 4  - Check for the winner and update the status      //
/********************************************************************/

function checkWinner() {
    const squares = document.querySelectorAll('#board > div');
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (squares[a].textContent && 
            squares[a].textContent === squares[b].textContent && 
            squares[a].textContent === squares[c].textContent) {
            
            const winner = squares[a].textContent;
            const status = document.getElementById('status');
            status.textContent = 'Congratulations! ${currentPlayer} is the Winner!';
            status.classList.add('you-won');
            return true;
        }
    }
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board > div');
    
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (!square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });
});

/**************************************************************/
//            EXERCISE 5 - Restart the game                   //
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const newGameButton = document.querySelector('.btn');
    const status = document.getElementById('status');
    const squares = document.querySelectorAll('#board > div');
    
    newGameButton.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        currentPlayer = 'X';
    });
});

/**************************************************************/
//            EXERCISE 6 - Disallow Cheating                  //
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board > div');
    
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (!square.textContent && !checkWinner()) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });
});