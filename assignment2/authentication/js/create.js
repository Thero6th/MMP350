const signupButton = document.getElementById('submit-sign-up');
const signupUsername = document.getElementById('sign-up-username');
const signupEmail = document.getElementById('sign-up-email');
const signupPassword = document.getElementById('sign-up-password');

signupButton.onclick = function () {
    const email = signupEmail.value;
    const password = signupPassword.value;
    // firebase.auth().createUserWithEmailAndPassword(email, password);

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
