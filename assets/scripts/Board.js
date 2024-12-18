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
                this.updateBoardData(coordinates, 1);
                this.updateBoardUI(target);
                console.log(this.board);
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

    updateBoardUI(squareElement) {
        squareElement.style.backgroundColor = 'red';
    }
}
