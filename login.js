document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('login.json');
        const data = await response.json();

        const user = data.users.find(user => user.username === username && user.password === password);

        if (user) {
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "home.html";
        } else {
            document.getElementById("loginMessage").textContent = "Invalid username or password!";
        }
    } catch (error) {
        console.error("Error loading login data:", error);
        document.getElementById("loginMessage").textContent = "Error loading login data!";
    }
});
