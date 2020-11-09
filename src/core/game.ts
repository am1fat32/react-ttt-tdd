export interface Point {
    x: number;
    y: number;
}

export type Player = 'x' | 'o';

const INITIAL_BOARD = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

export class Game {
    private _board = INITIAL_BOARD;

    public getState(): string[][] {
        return this._board;
    }

    public move({x, y}: Point, player: Player): void {
        this._board[y][x] = player;
    }
}
