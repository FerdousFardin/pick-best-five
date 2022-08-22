/**
 * Utility Functions
 */
const getElementValueById = (elementId) => {
  const elementString = document.getElementById(elementId).value;
  const element = parseInt(elementString);
  return element;
};
const totalChildElement = (parentElementId) => {
  const totalChildElement =
    document.getElementById(parentElementId).childNodes.length;
  return totalChildElement;
};
const setElementTextById = (elementId, text) => {
  const elementField = document.getElementById(elementId);
  elementField.innerText = text;
};
const errorTags = (tagName) => {
  const tags = document.getElementsByTagName(tagName);
  for (const tag of tags) {
    const tagValue = tag.value;
    if (isNaN(tagValue)) {
      alert("Wrong Input! Input must be a number ❌");
      tag.value = "";
      return true;
    } else if (parseInt(tagValue) <= 0) {
      alert("Wrong Input! Amount must be higher than Zero ❌");
      tag.value = "";
      return true;
    }
  }
  return false;
};
/**
 * Website Interactivities
 */
// select btns
const selectBtns = document.querySelectorAll(".select-btn");
for (const selectBtn of selectBtns) {
  selectBtn.addEventListener("click", (event) => {
    const playerList = document.getElementById("player-list");
    const totalPlayer = totalChildElement("player-list");
    if (totalPlayer < 5) {
      const playerName =
        event.target.parentNode.querySelector(".card-title").textContent;
      const listItemNew = document.createElement("li");
      listItemNew.innerText = playerName;
      listItemNew.classList.add("py-2", "fs-5");
      playerList.appendChild(listItemNew);
      selectBtn.setAttribute("disabled", true);
      selectBtn.innerText = "Selected";
    } else {
      alert("Warning! You Have Added Maximum Amount of Players ❌");
      return;
    }
  });
}
//calculate
document.getElementById("calc-btn").addEventListener("click", () => {
  const perPlayerCost = getElementValueById("per-player");
  const totalPlayer = totalChildElement("player-list");
  if (errorTags("input")) return;
  else if (totalPlayer < 1) alert("You Have To Select Atleast One Player ❌");
  else if (isNaN(perPlayerCost)) alert("Inputs Can Not be Empty ❌");
  else {
    const totalPlayerExpense = perPlayerCost * totalPlayer;
    setElementTextById("player-expense", totalPlayerExpense);
  }
});
//calculate-total
document.getElementById("total-btn").addEventListener("click", () => {
  const playerExpenseString =
    document.getElementById("player-expense").innerText;
  const playerExpense = parseInt(playerExpenseString);
  const managerExpense = getElementValueById("manager-cost");
  const coachExpense = getElementValueById("coach-cost");
  if (errorTags("input")) return;
  else if (isNaN(managerExpense) || isNaN(coachExpense))
    alert("Inputs Can Not be Empty ❌");
  else {
    const totalExpense = playerExpense + managerExpense + coachExpense;
    setElementTextById("total", totalExpense);
  }
});
