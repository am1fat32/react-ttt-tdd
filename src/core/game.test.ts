import {Game} from './game';

describe('Game', () => {
    it('should generate board', () => {
        const expected = [
            [''], [''], [''],
            [''], [''], [''],
            [''], [''], [''],
        ];

        const board = new Game().generateBoard();

        expect(board).toEqual(expected);
    });
});
