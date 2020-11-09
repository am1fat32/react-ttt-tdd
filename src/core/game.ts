export interface Point {
    x: number;
    y: number;
}

export type Player = 'x' | 'o';

const DEFAULT_BORDER = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

export class Game {
    private _board: string[][];

    constructor(board: string[][] = DEFAULT_BORDER) {
        this._board = board;
    }

    public getState(): string[][] {
        return this._board;
    }

    public move({x, y}: Point, player: Player): void {
        this._board[y][x] = player;
    }
}
