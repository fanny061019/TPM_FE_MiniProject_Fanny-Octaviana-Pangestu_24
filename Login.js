// LOGIN FORM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = loginForm.querySelector("input[type='email']").value.trim();
    let password = loginForm
      .querySelector("input[type='password']")
      .value.trim();

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Email check
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Login Successful!");
  });
}
