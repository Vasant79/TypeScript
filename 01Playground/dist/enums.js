"use strict";
var direction;
(function (direction) {
    direction["up"] = "up";
    direction["down"] = "down";
    direction["left"] = "left";
    direction["right"] = "right";
})(direction || (direction = {}));
function buttonPressed(keyPressed) {
    console.log(keyPressed);
}
buttonPressed(direction.left);
