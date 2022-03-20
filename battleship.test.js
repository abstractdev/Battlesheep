const { expect } = require('@jest/globals');
const {Ship, Gameboard, Player} = require('./battleship')

const newShip = Ship('newShip', 4)
test('ship length parameter', () => {
  expect(newShip.length).toBe(4);
});
test('if hit is working', () => {
    newShip.hit(0);
  expect(newShip.ship[0]).toBe('hit');
});
test('if ship is sunk', () => {
    newShip.hit(0);
    newShip.hit(1);
    newShip.hit(2);
    newShip.hit(3);
  expect(newShip.isSunk()).toBe(true);
});

const newGameboard = Gameboard()
test('length of board and destroyer ship', () => {
  expect(newGameboard.board).toHaveLength(10);
  expect(newGameboard.board[9]).toHaveLength(10);
  expect(newGameboard.destroyer.ship).toHaveLength(2);
});

newGameboard.placeShip(9, 9, newGameboard.destroyer, true, false)
  describe('gameboard', () => {
    test('gameboard contains destroyer with horizontal placement', () => {
      expect(newGameboard.board[9][8]).toBe(newGameboard.destroyer.ship[0]);
        expect(newGameboard.board[9][9]).toBe(newGameboard.destroyer.ship[1]);
    });
  });
  newGameboard.placeShip(9, 0, newGameboard.destroyer, false, true)
  describe('gameboard', () => {
    test('gameboard contains destroyer with vertical placement', () => {
      expect(newGameboard.board[8][0]).toBe(newGameboard.destroyer.ship[0]);
      expect(newGameboard.board[9][0]).toBe(newGameboard.destroyer.ship[1]);
    });
  });
  newGameboard.receiveAttack(0, 0)
  describe('gameboard', () => {
    test('attack hit the correct location and missed', () => {
      expect(newGameboard.board[0][0]).toBe(1);
    });
  });
  newGameboard.placeShip(1, 0, newGameboard.submarine, true, false)
  newGameboard.receiveAttack(1, 0)
  newGameboard.receiveAttack(1, 1)
  newGameboard.receiveAttack(1, 2)
  describe('gameboard', () => {
    test('attack hit submarine at index 0, 1, 2', () => {
      expect(newGameboard.submarine.ship[0]).toBe('hit');
      expect(newGameboard.submarine.ship[1]).toBe('hit');
      expect(newGameboard.submarine.ship[2]).toBe('hit');
    });
    test('if ship is sunk', () => {
    expect(newGameboard.submarine.isSunk()).toBe(true);
    });
    test('attacks are recorded on the gameboard', () => {
      expect(newGameboard.board[1][0]).toBe('hit');
      expect(newGameboard.board[1][1]).toBe('hit');
      expect(newGameboard.board[1][2]).toBe('hit');
    });
  });

  newGameboard.placeShip(2, 0, newGameboard.submarine, true, false)
  newGameboard.placeShip(3, 0, newGameboard.cruiser, true, false)
  newGameboard.placeShip(5, 0, newGameboard.battleship, true, false)
  newGameboard.placeShip(4, 0, newGameboard.carrier, true, false)
  newGameboard.receiveAttack(2, 0)
  newGameboard.receiveAttack(3, 0)
  newGameboard.receiveAttack(5, 0)
  newGameboard.receiveAttack(4, 0)
  describe('gameboard', () => {
    test('attack hit submarine, cruiser, battleship, carrier', () => {
      expect(newGameboard.submarine.ship[0]).toBe('hit');
      expect(newGameboard.cruiser.ship[0]).toBe('hit');
      expect(newGameboard.battleship.ship[0]).toBe('hit');
      expect(newGameboard.carrier.ship[0]).toBe('hit');
    });
    test('attacks are recorded on the gameboard', () => {
      expect(newGameboard.board[2][0]).toBe('hit');
      expect(newGameboard.board[3][0]).toBe('hit');
      expect(newGameboard.board[5][0]).toBe('hit');
      expect(newGameboard.board[4][0]).toBe('hit');
    });
  })

  const tempFunc = () => {
  const newGameboard2 = Gameboard();
  const newGameboard2board = newGameboard2.board;
    const computer = Player('computer', 'computer', true);
    computer.playComputerMoves(newGameboard2, newGameboard2board);
    const flatArr = newGameboard2board.flat();
    return flatArr
  }
  test('computer move was played', () => {
    expect(tempFunc()).toContain(1);
  });
