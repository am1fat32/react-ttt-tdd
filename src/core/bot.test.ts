import {Bot} from './bot';
import {Board, Point} from './game';

describe('Bot', () => {
    it('should return next move correctly', () => {
        const bot = new Bot();

        const board1: Board = [
            ['x', 'x', 'x'],
            ['x', 'x', 'x'],
            ['x', 'x', ''],
        ];
        const {x: x1, y: y1}: Point = bot.getNextMove(board1);
        expect(board1[y1][x1]).toEqual('');

        const board2: Board = [
            ['', 'x', 'x'],
            ['x', 'x', 'x'],
            ['x', 'x', 'x'],
        ];
        const {x: x2, y: y2}: Point = bot.getNextMove(board2);
        expect(board2[y2][x2]).toEqual('');

        const board3: Board = [
            ['x', 'x', 'x'],
            ['x', '', 'x'],
            ['x', 'x', 'x'],
        ];

        const {x: x3, y: y3}: Point = bot.getNextMove(board3);
        expect(board3[y3][x3]).toEqual('');

        const board4: Board = [
            ['x', 'x', ''],
            ['x', 'x', 'x'],
            ['x', 'x', 'x'],
        ];

        const {x: x4, y: y4}: Point = bot.getNextMove(board4);
        expect(board4[y4][x4]).toEqual('');
    });
});
