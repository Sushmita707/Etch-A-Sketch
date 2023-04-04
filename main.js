
document.addEventListener("DOMContentLoaded", function() {
    
    let board = document.querySelector(".border");
  

    board.style.gridTemplateColumns = "repeat(16, 1fr)";
    board.style.gridTemplateRows = "repeat(16, 1fr)";
    createBoard(32);
  
    console.log("hie")
  });

  function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns ='repeat($(size) ,1fr)';
    board.style.gridTemplateRows ='repeat($(size) ,1fr)';

    let numDivs = size*size;

    for(let i =0; i< numDiv; i++){
       let div = document.createElement("div");
       div.style.backgroundColor="yellow";
       board.insertAdjacentElement("beforeend",div);
    }
  }
  