import {Point, Game, Player} from './game';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should have empty game board', () => {
        const board = game.getState();

        const expected = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];

        expect(board).toEqual(expected);
    });

    it('should apply given board via constructor', () => {
        const board = [
            ['x', 'x', 'x'],
            ['o', 'x', 'o'],
            ['o', 'o', 'o'],
        ];
        const game = new Game(board);
        expect(game.getState()).toEqual(board);
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

    it('should check horizontal win', () => {
        const winBoard1 = [
            ['x', 'x', 'x'],
            ['', '', ''],
            ['', '', ''],
        ];

        const winBoard2 = [
            ['', '', ''],
            ['x', 'x', 'x'],
            ['', '', ''],
        ];

        const winBoard3 = [
            ['', '', ''],
            ['', '', ''],
            ['x', 'x', 'x'],
        ];

        const game1 = new Game(winBoard1);
        const game2 = new Game(winBoard2);
        const game3 = new Game(winBoard3);

        expect(game1.isWinner('x')).toEqual(true);
        expect(game2.isWinner('x')).toEqual(true);
        expect(game3.isWinner('x')).toEqual(true);
    });

    it('should check vertical win', () => {
        const winBoard1 = [
            ['x', '', ''],
            ['x', '', ''],
            ['x', '', ''],
        ];

        const winBoard2 = [
            ['', 'x', ''],
            ['', 'x', ''],
            ['', 'x', ''],
        ];

        const winBoard3 = [
            ['', '', 'x'],
            ['', '', 'x'],
            ['', '', 'x'],
        ];

        const game1 = new Game(winBoard1);
        const game2 = new Game(winBoard2);
        const game3 = new Game(winBoard3);

        expect(game1.isWinner('x')).toEqual(true);
        expect(game2.isWinner('x')).toEqual(true);
        expect(game3.isWinner('x')).toEqual(true);
    });

    it('should check diagonal win', () => {
        const winBoard1 = [
            ['x', '', ''],
            ['', 'x', ''],
            ['', '', 'x'],
        ];

        const winBoard2 = [
            ['', '', 'x'],
            ['', 'x', ''],
            ['x', '', ''],
        ];

        const game1 = new Game(winBoard1);
        const game2 = new Game(winBoard2);

        expect(game1.isWinner('x')).toEqual(true);
        expect(game2.isWinner('x')).toEqual(true);
    });
});
