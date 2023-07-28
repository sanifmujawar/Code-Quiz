const selectOlist = document.querySelector("ol");
let highscore = JSON.parse(localStorage.getItem("scores")) || [];

highscore.forEach((score) => {
  let li = document.createElement("li");
  selectOlist.appendChild(li);
  li.textContent = `${score.initial} (${score.score}) points`;
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  localStorage.removeItem("scores");
  selectOlist.textContent = "";
});
