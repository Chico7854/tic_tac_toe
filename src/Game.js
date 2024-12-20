import { Board } from "./Board.js";

class Game {
    static startGame() {
        const board = new Board();
        const boardElement = document.getElementById('board');
        const playAgainButton = document.querySelector('button');

        window.playerTurn = 1;

        boardElement.addEventListener("click", event => {
            if (event.target.classList.contains('square')) {
                this.changePlayerTurnHandler();
                this.winnerHandler(board);
            }
        });
        playAgainButton.addEventListener('click', board.clearBoard.bind(board));
    }

    static changePlayerTurnHandler() {
        if (window.playerTurn === 1) {
            window.playerTurn = 2;
        } else {
            window.playerTurn = 1;
        }
    }

    //this function is not the most optimal since you could return after you found the winner
    //but this way is easier to maintain since it has only one return
    static checkWinner(board) {
        const currentBoard = board.board;
        let winner = 0;

        //check rows
        for (const row of currentBoard) {
            if (row[0] === row[1] && row[0] === row[2]) {
                if (row[0] !== 0) {
                    winner = row[0];
                    break;
                }
            }
        }

        //check columns
        for (let i = 0; i < 3; i++) {
            if (
                currentBoard[0][i] === currentBoard[1][i] &&
                currentBoard[0][i] === currentBoard[2][i]
            ) {
                if (currentBoard[0][i] !== 0) {
                    winner = currentBoard[0][i];
                    break;
                }
            }
        }

        // //check diagonals
        if (
            (currentBoard[0][0] === currentBoard[1][1] && currentBoard[0][0] === currentBoard[2][2]) ||
            (currentBoard[0][3] === currentBoard[2][2] && currentBoard[0][3] === currentBoard[3][0])
        ) {
            winner = currentBoard[2][2];
        }

        return winner;
    }

    static winnerHandler(board) {
        const winnerMessageElement = document.getElementById('score-board');
        const winner = this.checkWinner(board);

        if (winner) {
            winnerMessageElement.textContent = `Player ${winner} Won!`;
            board.clearBoard();
        }
    }
}

Game.startGame();
