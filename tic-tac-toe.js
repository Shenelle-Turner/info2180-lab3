document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board .square");
    squares.forEach(square => {
        square.classList.add("square");
    });
});

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

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (!square.textContent) square.classList.add("hover");
    });
    square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
    });
});

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