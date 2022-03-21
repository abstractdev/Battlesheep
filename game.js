
import { Player } from "./battleship.js";
import { Gameboard } from "./battleship.js";
import { Display } from "./display.js";

const Game = (() => {
  const playerGameboard = Gameboard("player");
  const computerGameboard = Gameboard("computer");
  const player = Player("Player", "player", true);
  const computer = Player("Computer", "computer", false);
  let playerHitCounter = 0
  let computerHitCounter = 0
  
  //init display
  Display.renderBoard(
    playerGameboard,
    playerGameboard.boardName,
    document.querySelector(".player-gameboard-container")
  );
  Display.renderBoard(
    computerGameboard,
    computerGameboard.boardName,
    document.querySelector(".computer-gameboard-container")
  );
  //place ships
  playerGameboard.placeShip(0, 0, playerGameboard.destroyer, true, false)
  playerGameboard.placeShip(1, 0, playerGameboard.submarine, true, false)
  playerGameboard.placeShip(2, 0, playerGameboard.cruiser, true, false)
  playerGameboard.placeShip(3, 0, playerGameboard.battleship, true, false)
  playerGameboard.placeShip(4, 0, playerGameboard.carrier, true, false)
  computerGameboard.placeShip(0, 0, computerGameboard.destroyer, true, false)
  computerGameboard.placeShip(1, 0, computerGameboard.submarine, true, false)
  computerGameboard.placeShip(2, 0, computerGameboard.cruiser, true, false)
  computerGameboard.placeShip(3, 0, computerGameboard.battleship, true, false)
  computerGameboard.placeShip(4, 0, computerGameboard.carrier, true, false)
  //1 turn
    document.querySelector('.computer-gameboard-container').addEventListener('click', (e) => {
      if (e.target.className === 'cell') {
      //record user attack on board array
        const coordinates = computerGameboard.convertInputToAttack(e);
        computerGameboard.receiveAttack(coordinates[0], coordinates[1])
        if (computerGameboard.board[coordinates[0]][coordinates[1]] === 'hit') {
          computerHitCounter++
          console.log(computerHitCounter);
        }
      }
      //display user attack
        Display.renderBoard(
          computerGameboard,
          computerGameboard.boardName,
          document.querySelector(".computer-gameboard-container")
          );
      //play computer move
        const randomCoordinates = playerGameboard.getRandomCoordinates()
        playerGameboard.receiveAttack(randomCoordinates[0], randomCoordinates[1])
        if (playerGameboard.board[randomCoordinates[0]][randomCoordinates[1]] === 'hit') {
          playerHitCounter++
          console.log(playerHitCounter);
        }
      //display computer move
        Display.renderBoard(
          playerGameboard,
          playerGameboard.boardName,
          document.querySelector(".player-gameboard-container")
          );
          
          if (computerHitCounter === 17 || playerHitCounter === 17) {
            alert('Game Over')
          }
    })
})();

