// this js file responds to text input
const loginButton = document.getElementById("login-button");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");
loginButton.onclick = function() {
	console.log("login successful");
	console.log("name: " + nameInput.value);
	console.log("password: " + passwordInput.value);
	message.textContent = "Welcome " + nameInput.value + ".";
};