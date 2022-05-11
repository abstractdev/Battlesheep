import { Player } from "./battleship.js";
import { Gameboard } from "./battleship.js";
import { Display } from "./display.js";

export const Game = (() => {
  const playerGameboard = Gameboard("player");
  const computerGameboard = Gameboard("computer");
  const player = Player("Player", "player", true);
  const computer = Player("Computer", "computer", false);
  computerGameboard.placeComputerShips(computerGameboard);
  let playerHitCounter = 0;
  let computerHitCounter = 0;

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
  Display.initShipPlacement();
  //1 turn
  document
    .querySelector(".computer-gameboard-container")
    .addEventListener("click", (e) => {
      if (
        e.target.className === "computer-cell" &&
        e.target.style.backgroundImage ===
          'url("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-grass-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png")'
      ) {
        //record user attack on board array
        const coordinates = computerGameboard.convertInputToCoordinates(e);
        computerGameboard.receiveAttack(coordinates[0], coordinates[1]);
        const compFlat = computerGameboard.board.flat();
        const compFiltered = compFlat.filter((element) => {
          return element === "hit";
        });
        computerHitCounter = compFiltered.length;
        //display user attack
        Display.renderBoard(
          computerGameboard,
          computerGameboard.boardName,
          document.querySelector(".computer-gameboard-container")
        );
        //play computer move
        const randomCoordinates = playerGameboard.getRandomCoordinates();
        playerGameboard.receiveAttack(
          randomCoordinates[0],
          randomCoordinates[1]
        );
        const playerFlat = playerGameboard.board.flat();
        const playerFiltered = playerFlat.filter((element) => {
          return element === "hit";
        });
        playerHitCounter = playerFiltered.length;
        //display computer move
        Display.renderBoard(
          playerGameboard,
          playerGameboard.boardName,
          document.querySelector(".player-gameboard-container")
        );
      }

      if (computerHitCounter === 17) {
        Display.displayWinnerModal(`${player.playerName} wins!`);
        document.querySelector("body").style.pointerEvents = "none";
      } else if (playerHitCounter === 17) {
        Display.displayWinnerModal(`${computer.playerName} wins!`);
        document.querySelector("body").style.pointerEvents = "none";
      }
    });
  return {
    playerGameboard,
  };
})();
