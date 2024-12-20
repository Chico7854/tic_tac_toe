export class Board {
    constructor() {
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        this.mapDOMSquares();
        this.connectBoard();
    }

    mapDOMSquares() {
        const squares = document.querySelectorAll('.square');
        let row = 0;
        let column = 0;
       
        for (const square of squares) {
            square.dataset.coordinates = `[${row}, ${column}]`;
            column++;
            if (column > 2) {
                row++;
                column = 0;
            }
        }
    }

    connectBoard() {
        const board = document.getElementById('board');
        board.addEventListener('click', event => {
            const target = event.target;
            if (target.classList.contains('square')) {
                const coordinates = JSON.parse(target.dataset.coordinates);
                this.updateBoardData(coordinates, window.playerTurn);
                this.updateBoardUI(target, window.playerTurn);
            } else {
                event.stopPropagation();
            }
        })
    }

    updateBoardData(coordinates, player) {
        const row = coordinates[0];
        const column = coordinates[1];
        this.board[row][column] = player;
    }

    updateBoardUI(squareElement, player) {
        if (player === 1) {
            squareElement.style.backgroundColor = 'red';
        } else {
            squareElement.style.backgroundColor = 'blue';
        }
    }

    clearBoard() {
        const squares = document.querySelectorAll('.square');
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.board[i][j] = 0;
                squares[i*3 + j].style.backgroundColor = 'white';
            }
        }
    }
}
