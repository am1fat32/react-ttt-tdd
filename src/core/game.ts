export interface Point {
    x: number;
    y: number;
}

export type Player = 'x' | 'o';
export type CellValue = '' | Player;
export type Board = CellValue[][];

const DEFAULT_BOARD: Board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

export class Game {
    private _board: Board;

    constructor(board: Board = DEFAULT_BOARD) {
        this._board = board;
    }

    public getState(): Board {
        return this._board;
    }

    public move({x, y}: Point, player: Player): void {
        this._board[y][x] = player;
    }

    public isWinner(player: Player): boolean {
        return this._hasWinByHorizontal(player)
            || this._hasWinByVertical(player)
            || this._hasWinByDiagonal(player);
    }

    private _hasMatch(boardSlices: CellValue[][], player: Player): boolean {
        const hasFullMatch = (cellValue: CellValue) => cellValue === player;
        return boardSlices.some((slice: CellValue[]) => slice.every(hasFullMatch));
    }


    private _hasWinByHorizontal(player: Player): boolean {
        const [row1, row2, row3] = this.getState();

        return this._hasMatch(
            [row1, row2, row3],
            player,
        );
    }

    private _hasWinByVertical(player: Player): boolean {
        const b = this.getState();
        const col1 = [b[0][0], b[1][0], b[2][0]];
        const col2 = [b[0][1], b[1][1], b[2][1]];
        const col3 = [b[0][2], b[1][2], b[2][2]];

        return this._hasMatch(
            [col1, col2, col3],
            player,
        );
    }

    private _hasWinByDiagonal(player: Player): boolean {
        const b = this.getState();
        const diagonal1 = [b[0][0], b[1][1], b[2][2]];
        const diagonal2 = [b[0][2], b[1][1], b[2][0]];

        return this._hasMatch(
            [diagonal1, diagonal2],
            player,
        );
    }
}
