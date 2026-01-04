// Day 1,2,3
const button = document.getElementById("actionBtn");
const text = document.getElementById("status-text");

button.addEventListener("click", () => {
  text.innerText =
    "Day 3 Completed ✅ JavaScript + GitHub progress updated!";
});

// Day 4
function showMessage() {
  document.getElementById("message").innerText =
    "🔥 JavaScript is working! You are becoming a developer.";
}
//  Day 5

function loadSkills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git & GitHub",
    "Basic React (Learning)",
    "Problem Solving"
  ];

  const list = document.getElementById("skillsList");
  list.innerHTML = ""; // clear old content

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.innerText = skill;
    list.appendChild(li);
  });
}

