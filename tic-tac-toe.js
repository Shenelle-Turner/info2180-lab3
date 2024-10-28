/**************************************************************/
//             EXERCISE 1 - Layout the board                  //
/**************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    // Get all the divs inside the board
    const squares = document.querySelectorAll("#board > div");
    
    // Add the 'square' class to each div
    squares.forEach(square => {
        square.classList.add("square");
    });
});

/**************************************************************/
//    EXERCISE 2  - Add an X or O to a square when clicked    //
/**************************************************************/

let currentPlayer = "X";
squares.forEach((square) => {
    square.addEventListener("click", () => {
        if (!square.textContent) {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

/******************************************************************************/
//    EXERCISE 3 - Change the style when you move your mouse over a square    //
/******************************************************************************/

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (!square.textContent) square.classList.add("hover");
    });
    square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
    });
});

/********************************************************************/
//    EXERCISE 4  - Check for the winner and update the status      //
/********************************************************************/

const statusDiv = document.getElementById("status");

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some((combo) => {
        const [a, b, c] = combo;
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
            statusDiv.textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
            statusDiv.classList.add("you-won");
            return true;
        }
        return false;
    });
}

/**************************************************************/
//            EXERCISE 5 - Restart the game                   //
/**************************************************************/

const resetButton = document.querySelector(".btn");

resetButton.addEventListener("click", () => {
    squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("X", "O", "hover");
    });
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");
    currentPlayer = "X";
});

/**************************************************************/
//            EXERCISE 6 - Disallow Cheating                  //
/**************************************************************/

square.addEventListener("click", () => {
    if (gameActive && !square.textContent) {
        let currentPlayer = "X";
        squares.forEach((square) => {
            square.addEventListener("click", () => {
                if (!square.textContent) {
                    square.textContent = currentPlayer;
                    square.classList.add(currentPlayer);
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            });
        });
    }
});