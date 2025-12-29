document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.innerText = "All fields are required";
        return;
    }

    if (!email.includes("@")) {
        message.innerText = "Invalid email format";
        return;
    }

    if (password.length < 8) {
        message.innerText = "Password must be at least 8 characters";
        return;
    }

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match";
        return;
    }

    message.style.color = "green";
    message.innerText = "Registration successful";
});
