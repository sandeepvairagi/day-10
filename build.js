const names = ["RITIK", "ARUN", "SANDEEP", "SHOURYA"];


const ol = document.getElementById("leaderboard");


names.forEach((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  ol.appendChild(li);
});