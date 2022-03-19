const Ship = (length) => {
  const ship = Array(length).fill(1);
  function hit(num) {
    return (ship[num - 1] = "hit");
  }
  function isSunk() {
    const check = ship.every((e) => e === "hit");
    return check;
  }
  return {
    ship,
    length,
    hit,
    isSunk,
  };
};