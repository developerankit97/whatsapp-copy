// Variables Declarations and Initializations
let fullName = document.querySelector("#full-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let signupBtn = document.querySelector(".signup-btn");

// Event Listeners
signupBtn.addEventListener("click", createUser);

// Create Read Write Update User Account
async function createUser(e) {
  e.preventDefault();
  const fullName = fullName.value;
  const email = email.value;
  const password = password.value;
  const confirmPassword = confirmPassword.value;
  const userObj = { fullName, email, password, confirmPassword };
  if (fullName && email && password && confirmPassword) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      confirmPassword.focus();
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/users",
          JSON.stringify(userObj),
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response.data);
        //document.location.replace("/dashboard");
      } catch (e) {
        alert(e.status);
      }
    }
  } else {
    alert("All fields are required");
  }
}
