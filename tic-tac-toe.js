// Author: 620161664
// Info2180 Lab 3
// Date: October 27, 2024



// Ensures DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    /***** Exercise 1 - Layout the board *****/
    const squares = document.querySelectorAll("#board > div");
    squares.forEach(square => {
        square.classList.add("square");
    });
    
    // Variables to keep track of the game state
    let currentPlayer = "X";
    let gameBoard = Array(9).fill(null); // Initializes a 3x3 grid with null values to track game state
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
  
    /***** Exercise 4 - Checks for the winner and updates the status *****/
    // Helper function that checks if a player has won
    function checkWinner() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
  
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return gameBoard[a];
        }
      }
      return null;
    }
  
    // Helper function that updates the status message
    function updateStatus(winner) {
      if (winner) {
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add("you-won");
      } else {
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
      }
    }
  
    /***** Exercise 2: Adds X or O to a square when clicked *****/
    squares.forEach((square, index) => {
      square.addEventListener("click", () => {
        if (!gameBoard[index]) { /***** Exercise 6: Disallows changing values on filled squares *****/
          gameBoard[index] = currentPlayer;
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
  
          const winner = checkWinner();
          if (winner) {
            updateStatus(winner);
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switches player
          }
        }
      });
  
      /***** Exercise 3: Changes style when hovering over a square *****/
      square.addEventListener("mouseenter", () => {
        if (!gameBoard[index]) {
          square.classList.add("hover");
        }
      });
      square.addEventListener("mouseleave", () => {
        square.classList.remove("hover");
      });
    });
  
    /***** Exercise 5: Restarts the game when clicking "New Game" *****/
    newGameButton.addEventListener("click", () => {
      gameBoard.fill(null);
      squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("X", "O", "hover");
      });
      currentPlayer = "X";
      updateStatus(null);
    });
  });
  