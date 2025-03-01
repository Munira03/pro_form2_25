

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.textContent = "All good to go!";
        emailError.className = "success";
    } else {
        emailError.textContent = "Invalid email. Must be more than 3 characters and contain '@' and '.'";
        emailError.className = "error";
    }
    toggleSubmitButton();
}
function validatePassword() {
    const passwordValue = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (passwordValue.length > 8) {
        passwordError.textContent = "All good to go";
        passwordError.className = "success"
    } else {
        passwordError.textContent = "Password must be more than 8 characters."
        passwordError.className = "error"
    }
    toggleSubmitButton();
}

function toggleSubmitButton() {
    const emailError = document.getElementById("emailError").className;
    const passwordError = document.getElementById("passswordError").className;
    document.getElementById("btn-submit").disabled = !(emailError === "success" && passwordError === "success")
}
document.getElementById("signupForm").addEventListener('submit', function (event) {
    event.preventDefault();
    if (confirm("Are you sure you want to sign up?")) {
        alert("Successful Signup!")
    } else {
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('emailError').textContent = "Email is required";
        document.getElementById('passwordError').textContent = "Password is required";
        document.getElementById('emailError').className = "error";
        document.getElementById('passwordError').classNmae = "error";
        document.getElementById('btn-submit').disabled = true;
    }
})

