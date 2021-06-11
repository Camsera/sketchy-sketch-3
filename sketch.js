const divCreation = document.querySelector(".sketch-container");
const clearBtn = document.querySelector(".clear-btn");
const bwBtn = document.querySelector(".black-white-btn");
const rgbBtn = document.querySelector(".rgb-btn");
let initialGridSize = 16;
let gridNumber = document.querySelector("#slide");
gridNumber.value = 16;



function createGrid(gridNumber){
    for(let i = 0; i < gridNumber*gridNumber; i++){
        let gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        divCreation.appendChild(gridElement);
    }
    divCreation.setAttribute('style', `grid-template-columns: repeat(${gridNumber}, 1fr); grid-template-rows: repeat(${gridNumber}, 1fr);`);
    // let gridContainer = divCreation.querySelectorAll('div');
    // gridContainer.forEach(gridElement => gridElement.addEventListener('mouseover', colorGrid));
}
function recreateGrid(){
    let gridContainer = divCreation.querySelectorAll('div');
    gridContainer.forEach(gridElement => gridElement.remove());
    createGrid(gridNumber.value);
}

function colorGrid(e){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let currentColor = [red, green, blue];
    e.target.style = `background-color: rgb(${currentColor})`;
}

function blackWhiteGrid(e){
    let grey = Math.floor(Math.random()*256);
    e.target.style = `background-color: rgb(${grey},${grey},${grey})`;
}

 function outputUpdate(boxAmount){
     document.querySelector('#box-amount').value = boxAmount;
 }
 createGrid(initialGridSize);
 gridNumber.addEventListener("mouseup", recreateGrid);
 clearBtn.addEventListener("click", recreateGrid);
 bwBtn.addEventListener("click", function(){
    let gridContainer = divCreation.querySelectorAll('div');
    gridContainer.forEach(gridElement => gridElement.addEventListener('mouseover', blackWhiteGrid));
 });
 rgbBtn.addEventListener("click", function(){
    let gridContainer = divCreation.querySelectorAll('div');
    gridContainer.forEach(gridElement => gridElement.addEventListener('mouseover', colorGrid));
 });

 