const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", loginUser);

async function loginUser(e) {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  try {
    const response = await axios.post(
      "http://localhost:3000/users/login",
      JSON.stringify({ email, password }),
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.status == 200) {
      alert("login successful");
      //document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
    loginEmail.value = "";
    loginPassword.value = "";
  } catch (e) {
    console.log(e);
    alert("Invalid details");
  }
}
