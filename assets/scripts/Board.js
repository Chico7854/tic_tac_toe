export class Board {
    constructor() {
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
    }

    updateBoard(row, column, player) {
        this.board[row][column] = player;
    }
}
