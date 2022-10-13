const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector(".game-intro");

const background1 = new Image();
background1.src = "../images/road.png"
const background2 = new Image();
background2.src = "../images/road.png"
const car = new Image();
car.src = "../images/car.png"

const carSpeed = 3;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const startBtn = document.querySelector(".start-button");
const startingCarPosition = canvasWidth / 2 - 70
let isGameOver = false
let carX = startingCarPosition
let carMovement = 0;
let back1 = 0;
let back2 = -canvas.height;
let gameId = 0;

const moveCar = () => {
   if (carX + carMovement <= canvasWidth - 70 && carX + carMovement >= 0) {
     carX += carMovement
   }
 }

const animate = () => {
  ctx.drawImage(background1, 0, back1, canvasWidth, canvasHeight);
  ctx.drawImage(background2, 0, back2, canvasWidth, canvasHeight);
  ctx.drawImage(car, carX, 500, 70, 140);
  back1 +=2;
  back2 +=2;
  moveCar();
  if (back1 > canvas.height) {
    back1 = -canvas.height - 2;
  }
  if (back2 > canvas.height) {
    back2 = -canvas.height;
  }
  if (isGameOver) {
    cancelAnimationFrame(gameId);
  } else {
    gameId = requestAnimationFrame(animate);
  }
  if (gameId === 2000) {
    isGameOver = true;
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log("starting");
    startGame();
  };

  function startGame() {
    console.log(gameId);
  startScreen.style.display = "none";
  animate();
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      carMovement = -carSpeed;
    }
    if (event.key === "ArrowRight") {
      carMovement = carSpeed;
    }
  });
  document.addEventListener("keyup", () => {
    carMovement = 0;
  });
};}