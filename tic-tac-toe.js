document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board .square");
    squares.forEach(square => {
        square.classList.add("square");
    });
});