function random(number) {
    return Math.floor(Math.random() * number);
}
  
function bgChange(event) {
    event.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}
  
const tiles = document.querySelectorAll(".tile");
  
tiles.forEach(tile => tile.addEventListener("click", bgChange));
