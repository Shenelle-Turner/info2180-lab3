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

