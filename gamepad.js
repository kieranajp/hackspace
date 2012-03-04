var controller;
// Run When a gamepad is connected
function onGamepadConnected(e) {
	controller = e.gamepad;
	console.log("Gamepad connected", controller.id);
}

// Run on button change
function onGamepadButtonDown(e) {
	var button = e.button;
	console.log("Gamepad button pressed", button);
}

function onGamepadButtonUp(e) {
	var button = e.button;
	console.log("Gamepad button released", button);
}

// Run on axis move
function onGamepadAxisMove(e) {
	var axis = e.axis,
	value = e.value;

	console.log("Gamepad axis move", axis, value);
}

// Run When a gamepad is disconnected
function onGamepadDisconnected(e) {
	console.log("Gamepad disconnected", e.controller.id);
}

// Poll gamepad state on the fly (call this inside a timeout or requestAnimationFrame)
function checkState() {
	for (var i = 0; i < controller.buttons.length; i++) {
		console.log("Button state", i, controller.buttons[i]);
	}

	for (var j = 0; j < controller.axes.length; j++) {
		console.log("Axis state", j, controller.axes[j]);
	}
}

window.addEventListener("MozGamepadConnected", onGamepadConnected);
window.addEventListener("MozGamepadDisconnected", onGamepadDisconnected);
window.addEventListener("MozGamepadButtonDown", onGamepadButtonDown);
window.addEventListener("MozGamepadButtonUp", onGamepadButtonUp);
window.addEventListener("MozGamepadAxisMove", onGamepadAxisMove);