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

  function placeShip(xStart, yStart, ship, horizontal, vertical) {
    //if ship exceeds grid with starting position, adjust starting value//
    const xStartAdjusted = 10 - ship.length;
    const yStartAdjusted = 10 - ship.length;

    if (vertical) {
      if (xStart + ship.length > 9) {
        placeShipVertically(xStartAdjusted, yStart, ship)
    }else {
      placeShipVertically(xStart, yStart, ship)
      }
    }

    if (horizontal) {
      if (xStart + ship.length > 9) {
        placeShipHorizontally(yStartAdjusted, xStart, ship)
    }else {
      placeShipHorizontally(yStart, xStart, ship)
      }
    }
  }

  function placeShipVertically(x, yStart, ship) {
    for (let i = 0; i < ship.length; i++) {
        board[i + x].splice(yStart, 1, ship.ship[i]);
    }
  }
  function placeShipHorizontally(y, xStart, ship) {
    for (let i = 0; i < ship.length; i++) {
        board[xStart].splice((i + y), 1, ship.ship[i]);
    }
  }

  function receiveAttack(x, y) {
    switch (board[x][y]) {
      case 0:
        board[x][y] = 1
        break;
      // case 1:
      //   break;
      case "Destroyer0":
        destroyer.hit(0)
        updateBoardHitState(board, x, y)
      case "Destroyer1":
        updateBoardHitState(board, x, y)
        break;
      case "Submarine0":
          submarine.hit(0)
          updateBoardHitState(board, x, y) 
      case "Submarine1":
          submarine.hit(1)
          updateBoardHitState(board, x, y) 
      case "Submarine2":
          submarine.hit(2)
          updateBoardHitState(board, x, y) 
        break;
      case "Cruiser0":
          cruiser.hit(0)
          updateBoardHitState(board, x, y) 
      case "Cruiser1":
          cruiser.hit(1)
          updateBoardHitState(board, x, y) 
      case "Cruiser2":
          cruiser.hit(2)
          updateBoardHitState(board, x, y)
        break;
      case "Battleship0":
          battleship.hit(0)
          updateBoardHitState(board, x, y) 
      case "Battleship1":
          battleship.hit(1)
          updateBoardHitState(board, x, y) 
      case "Battleship2":
          battleship.hit(2)
          updateBoardHitState(board, x, y) 
      case "Battleship3":
          battleship.hit(3)
          updateBoardHitState(board, x, y) 
        break;
      case "Carrier0":
          carrier.hit(0)
          updateBoardHitState(board, x, y) 
      case "Carrier1":
          carrier.hit(1)
          updateBoardHitState(board, x, y) 
      case "Carrier2":
          carrier.hit(2)
          updateBoardHitState(board, x, y) 
      case "Carrier3":
          carrier.hit(3)
          updateBoardHitState(board, x, y) 
      case "Carrier4":
          carrier.hit(4)
          updateBoardHitState(board, x, y)
        break;
    
    }
  }
  function updateBoardHitState(board, x, y) {
    board[x][y] = 'hit';
  }
  function setEndGameCondition (hitCounter) {
    if (hitCounter === 17) {
      board[9][9] = 'GAME IS OVER'
    }
  }
  function convertInputToAttack(e) {
    const displayId = e.target.dataset.id;
    const firstIndex = displayId.charAt(8);
    const secondIndex = displayId.charAt(9);
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
    return savedRandomCoordinates
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
    convertInputToAttack,
    getRandomCoordinates
  };
};

export const Player = (playerName, type, turn) => {
  
  return {
    playerName,
    type,
    turn
  }
}

