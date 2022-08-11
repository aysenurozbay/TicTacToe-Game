const cellElements = document.querySelectorAll("[data-cell]");

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  // todo: placeMark
  // todo: checkForWin
  // todo: checkForDraw
  // todo: Switch player
}
