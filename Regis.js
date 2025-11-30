// REGISTRATION FORM
const regisForm = document.getElementById("regisForm");

if (regisForm) {
  regisForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let inputs = regisForm.querySelectorAll("input");
    let firstName = inputs[0].value.trim();
    let email = inputs[1].value.trim();
    let password = inputs[2].value.trim();
    let confirm = inputs[3].value.trim();
    let agree = document.getElementById("terms").checked;

    if (firstName === "" || email === "" || password === "" || confirm === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    if (!agree) {
      alert("You must agree to the Terms first.");
      return;
    }

    alert("Registration Successful!");
  });
}
