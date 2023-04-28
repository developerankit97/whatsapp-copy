// Variables Declarations and Initializations
let fullNameInput = document.querySelector("#full-name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone-number");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirm-password");
let signupBtn = document.querySelector(".signup-btn");

// Event Listeners
signupBtn.addEventListener("click", createUser);

// Create Read Write Update User Account
async function createUser(e) {
  e.preventDefault();
  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const phoneNumber = phoneInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const userObj = { fullName, email, phoneNumber, password, confirmPassword };
  if (fullName && email && password && confirmPassword) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      confirmPassword.focus();
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/signup",
          JSON.stringify(userObj),
          { headers: { "Content-Type": "application/json" } }
        );
        if (response.status == 202) {
          alert("User already exists");
        } else {
          alert("Signup successful");
        }
        //document.location.replace("/dashboard");
      } catch (e) {
        alert("Not valid details");
      }
    }
  } else {
    alert("All fields are required");
  }
}
