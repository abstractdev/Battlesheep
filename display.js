import { Game } from "./game.js";
export const Display = (() => {
  const shipContainer = document.querySelector(".ship-container");
  const playerBoard = document.querySelector(".player-gameboard-container");
  const destroyerContainer = document.querySelector(".destroyer-container");
  const submarineContainer = document.querySelector(".submarine-container");
  const cruiserContainer = document.querySelector(".cruiser-container");
  const battleshipContainer = document.querySelector(".battleship-container");
  const carrierContainer = document.querySelector(".carrier-container");
  const computerGameboardContainer = document.querySelector(
    ".computer-gameboard-container"
  );
  const playerGameboardContainer = document.querySelector(
    ".player-gameboard-container"
  );
  const placementContainer = document.querySelector(".placement-container");
  const modalContainer = document.querySelector(".modal-container");

  function renderBoard(gameBoardObj, boardName, container) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    const board = document.createElement("div");
    board.classList.add(`${boardName}-gameboard`);
    container.appendChild(board);
    for (let i = 0; i < gameBoardObj.board.length; i++) {
      const row = document.createElement("div");
      row.classList.add(`${boardName}${i}`);
      board.appendChild(row);
      for (let j = 0; j < gameBoardObj.board[i].length; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("data-id", `${boardName}${i}${j}`);
        cell.classList.add(`${boardName}-cell`);
        if (boardName === "player") {
          switch (gameBoardObj.board[i][j]) {
            case 0:
              cell.style.backgroundImage =
                'url("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-grass-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png")';
              break;
            case 1:
              cell.style.backgroundImage =
                'url("https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/25/000000/external-grass-jungle-vitaliy-gorbachev-blue-vitaly-gorbachev.png")';
              break;
            case "hit":
              cell.style.backgroundImage =
                'url("https://img.icons8.com/emoji/25/000000/bullseye.png")';
              break;
            case "Destroyer0v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Destroyer1v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Submarine0v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Submarine1v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Submarine2v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Cruiser0v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Cruiser1v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Cruiser2v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Battleship0v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Battleship1v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Battleship2v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Battleship3v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Carrier0v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Carrier1v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Carrier2v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Carrier3v":
              cell.style.backgroundImage = 'url("./vertical.png")';
            case "Carrier4v":
              cell.style.backgroundImage = 'url("./vertical.png")';
              break;
            default:
              cell.style.backgroundImage =
                'url("https://img.icons8.com/plasticine/25/000000/sheep.png")';
              break;
          }
        } else {
          switch (gameBoardObj.board[i][j]) {
            case 0:
              cell.style.backgroundImage =
                'url("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-grass-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png")';
              break;
            case 1:
              cell.style.backgroundImage =
                'url("https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/25/000000/external-grass-jungle-vitaliy-gorbachev-blue-vitaly-gorbachev.png")';
              break;
            case "hit":
              cell.style.backgroundImage =
                'url("https://img.icons8.com/emoji/25/000000/bullseye.png")';
              break;
            default:
              cell.style.backgroundImage = 'url("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/25/000000/external-grass-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png")';
              break;
          }
        }
        document.querySelector(`.${boardName}${i}`).appendChild(cell);
      }
    }
  }

  function rotateShipOnClick() {
    document.querySelector(".ship-container").addEventListener("click", (e) => {
      e.preventDefault();
      if (
        e.target.className === "destroyer" ||
        e.target.className === "submarine" ||
        e.target.className === "cruiser" ||
        e.target.className === "battleship" ||
        e.target.className === "carrier"
      ) {
        e.target.parentNode.classList.toggle("rotate");
        e.target.parentNode.classList.toggle("vertical");
      }
    });
  }
  function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    switch (event.target.id) {
      case "destroyer":
        if (event.target.parentNode.classList.contains("rotate")) {
          event.dataTransfer.setDragImage(
            document.getElementById("destroyer-clone"),
            0,
            0
          );
        }
        break;
      case "submarine":
        if (event.target.parentNode.classList.contains("rotate")) {
          event.dataTransfer.setDragImage(
            document.getElementById("submarine-clone"),
            0,
            0
          );
        }
        break;
      case "cruiser":
        if (event.target.parentNode.classList.contains("rotate")) {
          event.dataTransfer.setDragImage(
            document.getElementById("cruiser-clone"),
            0,
            0
          );
        }
        break;
      case "battleship":
        if (event.target.parentNode.classList.contains("rotate")) {
          event.dataTransfer.setDragImage(
            document.getElementById("battleship-clone"),
            0,
            0
          );
        }
        break;
      case "carrier":
        if (event.target.parentNode.classList.contains("rotate")) {
          event.dataTransfer.setDragImage(
            document.getElementById("carrier-clone"),
            0,
            0
          );
        }
        break;
    }
  }
  function onDragEnd(event) {
    event.stopPropagation();
  }
  function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dragEffect = "move";
  }
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    let shipName;
    switch (document.getElementById(data).id) {
      case "destroyer":
        shipName = Game.playerGameboard.destroyer;
        break;
      case "submarine":
        shipName = Game.playerGameboard.submarine;
        break;
      case "cruiser":
        shipName = Game.playerGameboard.cruiser;
        break;
      case "battleship":
        shipName = Game.playerGameboard.battleship;
        break;
      case "carrier":
        shipName = Game.playerGameboard.carrier;
        break;
    }
    function putShipInArray() {
      const placementCoordinates =
        Game.playerGameboard.convertInputToCoordinates(event);
      if (
        document.getElementById(data).parentNode.classList.contains("vertical")
      ) {
        Game.playerGameboard.placeShip(
          placementCoordinates[0],
          placementCoordinates[1],
          shipName,
          false
        );
      } else {
        Game.playerGameboard.placeShip(
          placementCoordinates[0],
          placementCoordinates[1],
          shipName,
          true
        );
      }

      const checkIfShipsArePlaced = (() => {
        const flatBoard = Game.playerGameboard.board.flat();
        if (flatBoard.some((e) => e === "Destroyer0" || e === "Destroyer0v")) {
          destroyerContainer.style.display = "none";
          submarineContainer.classList.add("show");
        }
        if (flatBoard.some((e) => e === "Submarine0" || e === "Submarine0v")) {
          submarineContainer.style.display = "none";
          cruiserContainer.classList.add("show");
        }
        if (flatBoard.some((e) => e === "Cruiser0" || e === "Cruiser0v")) {
          cruiserContainer.style.display = "none";
          battleshipContainer.classList.add("show");
        }
        if (
          flatBoard.some((e) => e === "Battleship0" || e === "Battleship0v")
        ) {
          battleshipContainer.style.display = "none";
          carrierContainer.classList.add("show");
        }
        if (flatBoard.some((e) => e === "Carrier0" || e === "Carrier0v")) {
          carrierContainer.style.display = "none";
          placementContainer.style.display = "none";
          computerGameboardContainer.style.pointerEvents = "all";
          playerGameboardContainer.style.pointerEvents = "none";
          document.querySelector(".attack-container").style.display = "flex";
        }
      })();
    }
    createShipPlacementPromise(event.target.dataset.id)
      .then(putShipInArray())
      .then(
        renderBoard(
          Game.playerGameboard,
          Game.playerGameboard.boardName,
          document.querySelector(".player-gameboard-container")
        )
      );
  }

  function dragEnter(event) {
    if (event.target.className === "player-cell") {
      event.target.style.border = "5px solid seashell";
    }
  }
  function dragLeave(event) {
    if (event.target.className === "player-cell") {
      event.target.style.border = "";
    }
  }

  function initShipPlacement() {
    rotateShipOnClick();
    [...shipContainer.childNodes].forEach((element) => {
      element.addEventListener("dragstart", onDragStart);
      element.addEventListener("dragend", onDragEnd);
    });
    playerBoard.addEventListener("drop", drop);
    playerBoard.addEventListener("dragover", dragOver);
    playerBoard.addEventListener("dragenter", dragEnter);
    playerBoard.addEventListener("dragleave", dragLeave);
  }
  function createShipPlacementPromise(id) {
    const promise = new Promise((resolve, reject) => {
      if (id) {
        resolve(id);
      }
    });
    return promise;
  }

  function displayWinnerModal(winnerMessage) {
    modalContainer.textContent = winnerMessage;
    modalContainer.classList.add("show");
  }

  return {
    renderBoard,
    initShipPlacement,
    displayWinnerModal,
  };
})();
