import {Board, CellValue, Point} from './game';

export class Bot {
    public getNextMove(board: Board): Point {
        for (let i = 0; i < board.length; i += 1) {
            for (let j = 0; j < board[i].length; j += 1) {
                const cell: CellValue = board[i][j];

                if (cell === '') {
                    return {x: j, y: i};
                }
            }
        }

        throw new Error(`Can't find next move`);
    }
}
