const RED = document.getElementById("red");
const GREEN = document.getElementById("green");
const BOARD = document.getElementById("game-board");
const UP = document.getElementById("up");
const DOWN = document.getElementById("down");
const LEFT = document.getElementById("left");
const RIGHT = document.getElementById("right");
const WIN = document.getElementById("wins");
const DIST = 20;

let wins = 0;
let gameInterval;

function start() {
    GREEN.style.left = (Math.floor(380*Math.random())) + "px";  // randomly chooses a point within the game area to move the green player
    GREEN.style.top = (Math.floor(380*Math.random())) + "px";
    greenPlayerInterval = setInterval(moveGreen, 8000);         // will call the moveGreen function every 8 seconds

    RED.style.top = "-20px";            // places the red player at the top left of the game area
    RED.style.left = "0px";

    if (gameInterval) {
        clearInterval(gameInterval);             
        WIN.innerHTML = 0;              // if a game was already being played, this will stop that game and start over
    }
    gameInterval = setInterval(checkWin, 100);          // check if red player is touching green player every 100ms
}

function checkWin() {
    const greenTop = parseInt(GREEN.style.top);
    const greenLeft =  parseInt(GREEN.style.left);
    const redTop =  parseInt(RED.style.top);
    const redLeft =  parseInt(RED.style.left);

    const greenCenterY = greenTop + GREEN.clientHeight/2;
    const greenCenterX = greenLeft + GREEN.clientWidth/2;
    const redCenterY = redTop + RED.clientHeight/2;
    const redCenterX = redLeft + RED.clientWidth/2;

    const playerSize = GREEN.clientWidth;

    const deltaX = Math.abs(greenCenterX - redCenterX);
    const deltaY = Math.abs(greenCenterY - redCenterY);

    const distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));  // calculates the distance between red and green play centers

    if (distance < playerSize) {    // if distance between is less than the size of the player, that means they are touching and red wins a point
            wins++;
            WIN.innerHTML = wins;
            clearInterval(greenPlayerInterval);
            moveGreen();
            greenPlayerInterval = setInterval(moveGreen, 8000);
    }
}

function moveGreen() {      // randomly chooses a place to move green player within the game area
    GREEN.style.left = (Math.floor(380*Math.random())) + "px";
    GREEN.style.top = (Math.floor(380*Math.random())) + "px";
}

function up() {     // moves red player up
    let currentTop = parseInt(RED.style.top, 10);
    if (currentTop == -20) {
        RED.style.top = -20 + "px"
    } else {
        RED.style.top = (currentTop + -DIST) + "px"
    }
}

function down() {   // moves red player down
    let currentTop = parseInt(RED.style.top, 10);
    if (currentTop == 360) {
        RED.style.top = 360 + "px";
    } else {
        RED.style.top = (currentTop + DIST) + "px"
    }
}

function left() {   // moves red player left
    let currentLeft = parseInt(RED.style.left, 10);
    if (currentLeft == 0) {
        RED.style.left = 0 + "px";
    } else {
        RED.style.left = (currentLeft + -DIST) + "px"
    }
}

function right() {  // moves red player right
    let currentLeft = parseInt(RED.style.left, 10);
    if (currentLeft == 380) {
        RED.style.left = 380 + "px";
    } else {
        RED.style.left = (currentLeft + DIST) + "px"
    }
}