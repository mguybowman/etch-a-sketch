const root = document.documentElement;
const grid = document.getElementById("grid");

function initialize(gridWidth) {
    grid.innerHTML = "";
    root.style.setProperty('--gridWidth', gridWidth);
    for (let i = 0; i < (gridWidth ** 2); i++) {
        let div = document.createElement("div");
        div.className = "square";
        div.style.backgroundColor = "rgb(255, 255, 255)";
        grid.append(div);
    };
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('pointerenter', fill));
}

function fill() {
    bgColor = this.style.backgroundColor;
    bgColor = bgColor.substr(4, 3);
    bgColor = parseInt(bgColor, 10);
    if (bgColor > 0) {
        bgColor = bgColor * 100 / 255;
        bgColor = Math.round(bgColor);
        bgColor -= 10;
        this.style.backgroundColor = "hsl(0, 0%, " + bgColor + "%)";
    };
};

function newGrid() {
    while (true) {
        let input = prompt('How many squares wide should the grid be?');
        if (input === null) { break; };
        input = parseInt(input, 10);
        if (isNaN(input)) {
            alert("Not a number. Please choose an integer from 1 to 100.");
        } else if (input > 100) {
            alert("Too big. Please choose an integer from 1 to 100.");
        } else if (input < 1) {
            alert("Too small. Please choose an integer from 1 to 100.");
        } else { 
            initialize(input);
            return;
        };
    };
};

document.getElementById("newGrid").addEventListener('click', newGrid);

initialize(16);
