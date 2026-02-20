const button = document.getElementById("actionBtn");
const text = document.getElementById("status-text");

button.addEventListener("click", () => {
  text.innerText =
    "Day 3 Completed ✅ JavaScript + GitHub progress updated!";
});
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter email & password");
  }
}

function logout() {
  window.location.href = "index.html";
}
