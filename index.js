// Simulated user credentials (replace with actual authentication logic)
const validUsername = "group b";
const validPassword = "animals";

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Simulated authentication logic (replace with actual authentication logic)
    if (usernameInput === validUsername && passwordInput === validPassword) {
        

        // Redirect to the irrigation app
        window.location.href = "./irrigation.html"; // Replace with the actual filename or path to your irrigation app
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
