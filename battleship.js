export const Ship = (shipName, length) => {
  let ship = Array(length).fill(length);
    for (let i = 0; i < ship.length; i++) {
     ship[i] = `${shipName}${i}`
    }
  function hit(num) {
    return (ship[num] = "hit");
  }
  function isSunk() {
    const check = ship.every((e) => e === "hit");
    return check;
  }
  return {
    ship,
    shipName,
    length,
    hit,
    isSunk,
  };
};
export const Gameboard = (boardName) => {
  const board = [
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
    new Array(10).fill(0),
  ];
  const destroyer = Ship("Destroyer", 2);
  const submarine = Ship("Submarine", 3);
  const cruiser = Ship("Cruiser", 3);
  const battleship = Ship("Battleship", 4);
  const carrier = Ship("Carrier", 5);

  function placeShip(xStart, yStart, ship, horizontal) {
    //prevent placing multiples of the same ship
    const flatBoard = board.flat()
    if ((flatBoard.some((e) => {
      return (e === ship.ship[0] || e === `${ship.ship[0]}v`)
    }))) {
      return
    }

    if (!horizontal) {
       //prevent invalid placement
       if (xStart + ship.length > 10) {
        return
      }
      //default placement
      placeShipVertically(xStart, yStart, ship)
    }

    if (horizontal) {
    //prevent invalid placement
       if (yStart + ship.length > 10) {
         return
        }
        //default placement
      placeShipHorizontally(xStart, yStart, ship)
    }
  }

  function placeShipVertically(xStart, yStart, ship) {
    //prevent placing ships in overlapping positions
    for (let z = 0; z < ship.length; z++) {
      if (board[z + xStart][yStart] !== 0) {
        return
      }
    }
    for (let i = 0; i < ship.length; i++) {
        board[i + xStart].splice(yStart, 1, `${ship.ship[i]}v`);
    }
  }
  function placeShipHorizontally(xStart, yStart, ship) {
    //prevent placing ships in overlapping positions
    for (let z = 0; z < ship.length; z++) {
      if (board[xStart][z + yStart] !== 0) {
        return
      }
    }
    for (let i = 0; i < ship.length; i++) {
        board[xStart].splice((i + yStart), 1, ship.ship[i]);
    }
  }

  function receiveAttack(x, y) {
    switch (board[x][y]) {
      case 0:
        board[x][y] = 1
        break;
      case "Destroyer0":
        destroyer.hit(0)
        updateBoardHitState(board, x, y)
        break;
      case "Destroyer0v":
        destroyer.hit(0)
        updateBoardHitState(board, x, y)
        break;
      case "Destroyer1":
        updateBoardHitState(board, x, y)
        destroyer.hit(1)
        break;
      case "Destroyer1v":
        updateBoardHitState(board, x, y)
        destroyer.hit(1)
        break;
      case "Submarine0":
        submarine.hit(0)
        updateBoardHitState(board, x, y) 
        break;
      case "Submarine0v":
          submarine.hit(0)
          updateBoardHitState(board, x, y)
          break;
      case "Submarine1":
          submarine.hit(1)
          updateBoardHitState(board, x, y) 
          break;
      case "Submarine1v":
          submarine.hit(1)
          updateBoardHitState(board, x, y) 
          break;
      case "Submarine2":
          submarine.hit(2)
          updateBoardHitState(board, x, y) 
          break;
      case "Submarine2v":
          submarine.hit(2)
          updateBoardHitState(board, x, y) 
        break;
      case "Cruiser0":
          cruiser.hit(0)
          updateBoardHitState(board, x, y) 
          break;
      case "Cruiser0v":
          cruiser.hit(0)
          updateBoardHitState(board, x, y)
          break;
      case "Cruiser1":
          cruiser.hit(1)
          updateBoardHitState(board, x, y)
          break; 
      case "Cruiser1v":
          cruiser.hit(1)
          updateBoardHitState(board, x, y)
          break;
      case "Cruiser2":
          cruiser.hit(2)
          updateBoardHitState(board, x, y)
        break;
      case "Cruiser2v":
          cruiser.hit(2)
          updateBoardHitState(board, x, y)
        break;
      case "Battleship0":
          battleship.hit(0)
          updateBoardHitState(board, x, y)
          break
      case "Battleship0v":
          battleship.hit(0)
          updateBoardHitState(board, x, y)
          break
      case "Battleship1":
          battleship.hit(1)
          updateBoardHitState(board, x, y)
          break
      case "Battleship1v":
          battleship.hit(1)
          updateBoardHitState(board, x, y)
          break
      case "Battleship2":
          battleship.hit(2)
          updateBoardHitState(board, x, y)
          break
      case "Battleship2v":
          battleship.hit(2)
          updateBoardHitState(board, x, y)
          break
      case "Battleship3":
          battleship.hit(3)
          updateBoardHitState(board, x, y) 
        break;
      case "Battleship3v":
          battleship.hit(3)
          updateBoardHitState(board, x, y) 
        break;
      case "Carrier0":
          carrier.hit(0)
          updateBoardHitState(board, x, y)
          break;
      case "Carrier0v":
          carrier.hit(0)
          updateBoardHitState(board, x, y) 
          break;
      case "Carrier1":
          carrier.hit(1)
          updateBoardHitState(board, x, y)
          break;
      case "Carrier1v":
          carrier.hit(1)
          updateBoardHitState(board, x, y)
          break;
      case "Carrier2":
          carrier.hit(2)
          updateBoardHitState(board, x, y)
          break;
      case "Carrier2v":
          carrier.hit(2)
          updateBoardHitState(board, x, y)
          break;
      case "Carrier3":
          carrier.hit(3)
          updateBoardHitState(board, x, y)
          break;
      case "Carrier3v":
          carrier.hit(3)
          updateBoardHitState(board, x, y)
          break;
      case "Carrier4":
          carrier.hit(4)
          updateBoardHitState(board, x, y)
        break;
      case "Carrier4v":
          carrier.hit(4)
          updateBoardHitState(board, x, y)
        break;
    }
  }
  function updateBoardHitState(board, x, y) {
    board[x][y] = 'hit';
    console.log('hit');
  }
  function convertInputToCoordinates(e) {
    const displayId = e.target.dataset.id;
    let firstIndex;
    let secondIndex;
    if (displayId.charAt(0) === 'c') {
      firstIndex = displayId.charAt(8);
      secondIndex = displayId.charAt(9);
    }else if (displayId.charAt(0) === 'p') {
      firstIndex = displayId.charAt(6);
      secondIndex = displayId.charAt(7);
    }
    const coordinates = [(parseInt(firstIndex)),(parseInt(secondIndex))]
    return coordinates
  }

  const allCoordinates = board.map((i => i.map((j => j))))
  for (let i = 0; i < allCoordinates.length; i++) {
    for (let j = 0; j < allCoordinates[i].length; j++) {
      allCoordinates[i][j] = [i,j]
    }
  }
  let allCoordinatesFlat = allCoordinates.flat()
  function getRandomCoordinates () {
    let randomIndex = (Math.floor(Math.random() * allCoordinatesFlat.length))
    let randomCoordinates = allCoordinatesFlat[randomIndex]
    const savedRandomCoordinates = randomCoordinates
    allCoordinatesFlat.splice(randomIndex, 1)
    console.log(allCoordinatesFlat);
    return savedRandomCoordinates
  }

  const getrandomIndex = () => (Math.floor(Math.random() * 9));
  function placeComputerShips(computerGameboard) {
    let flatBoard = computerGameboard.board.flat();
    const all = ['Destroyer0', 'Submarine0', 'Cruiser0', 'Battleship0', 'Carrier0']
    if (!flatBoard.some((e => e === 'Destroyer0'))) {
      computerGameboard.placeShip(getrandomIndex(), getrandomIndex(), computerGameboard.destroyer, true)
    }
    if (!flatBoard.some((e => e === 'Submarine0'))) {
      computerGameboard.placeShip(getrandomIndex(), getrandomIndex(), computerGameboard.submarine, true)
    }
    if (!flatBoard.some((e => e === 'Cruiser0'))) {
      computerGameboard.placeShip(getrandomIndex(), getrandomIndex(), computerGameboard.cruiser, true)
    }
    if (!flatBoard.some((e => e === 'Battleship0'))) {
      computerGameboard.placeShip(getrandomIndex(), getrandomIndex(), computerGameboard.battleship, true)
    }
    if (!flatBoard.some((e => e === 'Carrier0'))) {
      computerGameboard.placeShip(getrandomIndex(), getrandomIndex(), computerGameboard.carrier, true)
    }
    if (!all.every((e => flatBoard.includes(e)))) {
      placeComputerShips(computerGameboard)
    }
  }

  return {
    boardName,
    board,
    destroyer,
    submarine,
    cruiser,
    battleship,
    carrier,
    placeShip,
    receiveAttack,
    convertInputToCoordinates,
    getRandomCoordinates,
    placeComputerShips
  };
};

export const Player = (playerName, type, turn) => {
  
  return {
    playerName,
    type,
    turn
  }
}

