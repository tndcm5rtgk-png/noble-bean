const signInButton = document.querySelector(".nav-signin");

if (signInButton) {
    signInButton.addEventListener("click", function () {
        alert("Sign in page is loading...");
    });
}

const signInBtn = document.querySelector("#signInBtn");

if (signInBtn) {
    signInBtn.addEventListener("click", function () {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (email === "" || password === "") {
            alert("Please fill in both fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        window.location.href = "account.html";
    });
}