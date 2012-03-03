var controller;
var controllerTimer;

function onGamepadConnected(e) {
	controller = e.gamepad;
	console.log("Gamepad connected", controller.id);
  controllerTimer = setInterval(checkState, 100);
}

function onGamepadDisconnected(e) {
	console.log("Gamepad disconnected", e.controller.id);
}

function checkState() {
	for (var i = 0; i < controller.buttons.length; i++) {
		if (controller.buttons[i] != 0) {
			console.log("Button state", i, controller.buttons[i]);
		}
	}

	for (var j = 0; j < controller.axes.length; j++) {
		if (controller.axes[j] < -0.05 || controller.axes[j] > 0.05) {
			console.log("Axis state", j, controller.axes[j]);
		}
	}
}

window.addEventListener("MozGamepadConnected", onGamepadConnected);
window.addEventListener("MozGamepadDisconnected", onGamepadDisconnected);