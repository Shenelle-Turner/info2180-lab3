document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board .square");
    const statusDiv = document.getElementById("status");
    const resetButton = document.querySelector(".btn");
    let currentPlayer = "X";
    let gameActive = true;
    const boardState = Array(9).fill(null);

    // Initialize the board
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Click event to mark X or O
        square.addEventListener("click", () => {
            if (gameActive && !square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                boardState[index] = currentPlayer;
                if (checkWinner()) {
                    gameActive = false;
                    statusDiv.classList.add("you-won");
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                } else if (boardState.every(cell => cell)) {
                    gameActive = false;
                    statusDiv.textContent = "It's a Tie!";
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Hover effect
        square.addEventListener("mouseover", () => {
            if (!square.textContent) {
                square.classList.add("hover");
            }
        });
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    // Reset game
    resetButton.addEventListener("click", () => {
        gameActive = true;
        currentPlayer = "X";
        boardState.fill(null);
        statusDiv.classList.remove("you-won");
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    });

    // Check for winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return boardState[a] &&
                   boardState[a] === boardState[b] &&
                   boardState[a] === boardState[c];
        });
    }
});