var controller;
var controllerTimer;

function onGamepadConnected(e) {
  controller = e.gamepad;
  createEvent("connected");
  controllerTimer = setInterval(checkState, 80);
}

function onGamepadDisconnected(e) {
  createEvent("disconnected");
}

function checkState() {
  for (var i = 0; i < controller.buttons.length; i++) {
    switch (i) {
      case 0:
        if (controller.buttons[i] == 1) {
          createEvent("x");
        }
          break;
      case 1:
        if (controller.buttons[i] == 1) {
          createEvent("a");
        }
        break;
      case 2:
        if (controller.buttons[i] == 1) {
          createEvent("b");
        }
        break;
      case 3:
        if (controller.buttons[i] == 1) {
          createEvent("y");
        }
        break;
      case 4:
        if (controller.buttons[i] == 1) {
          createEvent("lb");
        }
        break;
      case 5:
        if (controller.buttons[i] == 1) {
          createEvent("rb");
        }
        break;
      case 6:
        if (controller.buttons[i] == 1) {
          createEvent("lt");
        }
        break;
      case 7:
        if (controller.buttons[i] == 1) {
          createEvent("rt");
        }
        break;
      case 8:
        if (controller.buttons[i] == 1) {
          createEvent("back");
        }
        break;
      case 9:
        if (controller.buttons[i] == 1) {
          createEvent("start");
        }
        break;
      case 10:
        if (controller.buttons[i] == 1) {
          createEvent("left-click");
        }
        break;
      case 11:
        if (controller.buttons[i] == 1) {
          createEvent("right-click");
        }
        break;
    }
  }

  for (var j = 0; j < controller.axes.length; j++) {
    switch (j) {
      case 1:
        if (controller.axes[j] < -0.05) {
          createEvent("left-left");
        } else if (controller.axes[j] > 0.05) {
          createEvent("left-right");
        }
        break;
      case 2:
        if (controller.axes[j] < -0.05) {
          createEvent("left-up");
        } else if (controller.axes[j] > 0.05) {
          createEvent("left-down");
        }
        break;
      case 3:
        if (controller.axes[j] < -0.05) {
          createEvent("right-left");
        } else if (controller.axes[j] > 0.05) {
          createEvent("right-right");
        }
        break;
      case 4:
        if (controller.axes[j] < -0.05) {
          createEvent("right-up");
        } else if (controller.axes[j] > 0.05) {
          createEvent("right-down");
        }
        break;
      }
  }
}

window.addEventListener("MozGamepadConnected", onGamepadConnected);
window.addEventListener("MozGamepadDisconnected", onGamepadDisconnected);



function createEvent(type) {
  switch (type) {
    case "connected":
      console.log("Gamepad connected: ", controller.id);
      break;
    case "disconnected":
      console.log("Gamepad disconnected: ", controller.id);
      break;
    case "left-up":
      console.log("Left stick north");
      break;
    case "left-down":
      console.log("Left stick south");
      break;
    case "left-right":
      console.log("Left stick east");
      break;
    case "left-left":
      console.log("Left stick west");
      break;
    case "right-up":
      console.log("Right stick north");
      break;
    case "right-down":
      console.log("Right stick south");
      break;
    case "right-right":
      console.log("Right stick east");
      break;
    case "right-left":
      console.log("Right stick west");
      break;
    case "a":
      console.log("A pressed");
      break;
    case "b":
      console.log("B pressed");
      break;
    case "x":
      console.log("X pressed");
      break;
    case "y":
      console.log("Y pressed");
      break;
    case "lb":
      console.log("LB pressed");
      break;
    case "rb":
      console.log("RB pressed");
      break;
    case "lt":
      console.log("LT pressed");
      break;
    case "rt":
      console.log("RT pressed");
      break;
    case "back":
      console.log("Back pressed");
      break;
    case "start":
      console.log("Start pressed");
      break;
    case "left-click":
      console.log("Left stick clicked down");
      break;
    case "right-click":
      console.log("Right stick clicked down");
      break;
  }
}