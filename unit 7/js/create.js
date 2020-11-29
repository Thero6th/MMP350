const signUpUsername = js.getEl('sign-up-username');
const signUpEmail = js.getEl('sign-up-email');
const signUpPassword = js.getEl('sign-up-password');
const signUpButton = js.getEl('submit-sign-up');
const signUpMessage = js.getEl('submit-sign-up');

signUpButton.onclick = function () {
    const email = signUpEmail.value;
    const password = signUpPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password);

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.then(updateUser)

    function updateUser(credentials) {
        const userinfo = {
            displayName: signUsername.value
        };
        credentials.user.updateProfile(userInfo);
        alert("successfully created a user!")
    }

    promise.catch(function (error) {
        console.log(error);
        alert(error.message);
    });
};