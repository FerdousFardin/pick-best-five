const selectBtns = document.querySelectorAll(".select-btn");
for (const selectBtn of selectBtns) {
  selectBtn.addEventListener("click", (event) => {
    const playerList = document.getElementById("player-list");
    const totalPlayer = playerList.childNodes.length;
    if (totalPlayer < 5) {
      const playerName =
        event.target.parentNode.querySelector(".card-title").textContent;
      const listItemNew = document.createElement("li");
      listItemNew.innerText = playerName;
      listItemNew.classList.add("py-2", "fs-5");
      playerList.appendChild(listItemNew);
      selectBtn.setAttribute("disabled", true);
    } else {
      alert("Warning! You Have Added Maximum Amount of Players ❌");
      return;
    }
  });
}
