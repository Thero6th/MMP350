const loginButton = document.getElementById('login-button');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

loginButton.onclick = function() {
	const email = loginEmail.value;
	const password = loginPassword.value;

	// this auth method is a simple method that doesn't use promises
	// we are commenting it out for now.
	/*
	firebase.auth().signInWithEmailAndPassword(email, password);
	*/
	const promise = firebase.auth().signInWithEmailAndPassword(email, password);
	// if it works, say we succeeded!
	promise.then(alert("Successfully Logged In!"));

	// if it doesn't work, give an error message
	promise.catch(function(error) {
		console.log(error);
		alert(error.message);
	});
}
