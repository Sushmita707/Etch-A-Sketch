let color = "black";

document.addEventListener("DOMContentLoaded", function() {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = "repeat(16, 1fr)";
  board.style.gridTemplateRows = "repeat(16, 1fr)";
  createBoard(16);
  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);
  })
});

function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv)
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What will be the size of the board?");
  let message = document.querySelector("#message");
  if (input === "") {
    message.innerHTML = "Please provide a number";
  }
  else if (input < 0 || input > 100) {
    message.innerHTML = "Provide a number between 1 and 100";
  }
  else {
    createBoard(input);
    message.innerHTML = "Now you can play";
    return input;
  }
}

function colorDiv() {
    if (color === "random") {
      let randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.style.backgroundColor = randomColor;
    } else {
      this.style.backgroundColor = "black";
    }
  }
  
  
  
  
  

function setColor(colorChoice) {
  color = colorChoice;
}
function resetBoard(){
    let divs = document.querySelectorAll(".board div");
    divs.forEach((div) => div.style.backgroundColor = "white");
  }