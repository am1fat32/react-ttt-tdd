import {Point, Game, Player} from './game';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should return empty game state', () => {
        const board = game.getState();

        const expected = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];

        expect(board).toEqual(expected);
    });

    it('should set apply move correctly', () => {
        interface Move {
            point: Point;
            player: Player;
            expected: string[][];
        }

        const moves: Move[] = [
            {
                point: {x: 0, y: 0},
                player: 'x',
                expected: [
                    ['x', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
            },
            {
                point: {x: 2, y: 2},
                player: 'o',
                expected: [
                    ['x', '', ''],
                    ['', '', ''],
                    ['', '', 'o'],
                ],
            },
            {
                point: {x: 2, y: 1},
                player: 'x',
                expected: [
                    ['x', '', ''],
                    ['', '', 'x'],
                    ['', '', 'o'],
                ],
            },
            {
                point: {x: 1, y: 2},
                player: 'o',
                expected: [
                    ['x', '', ''],
                    ['', '', 'x'],
                    ['', 'o', 'o'],
                ],
            }
        ];

        moves.forEach(({point, player, expected}: Move) => {
            game.move(point, player);
            expect(game.getState()).toEqual(expected);
        });
    });
});
