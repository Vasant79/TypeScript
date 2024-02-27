enum direction {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

function buttonPressed(keyPressed: direction): void {
  console.log(keyPressed);
}

buttonPressed(direction.left);
