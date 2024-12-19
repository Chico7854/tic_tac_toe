import { Board } from "./Board.js";

class Game {
    static startGame() {
        const board = new Board();
        const boardElement = document.getElementById('board');
        window.playerTurn = 1;
        boardElement.addEventListener('click', () => {
            if (window.playerTurn === 1) {
                window.playerTurn = 2;;
            } else {
                window.playerTurn = 1;
            }
        })
    }
}

Game.startGame();
