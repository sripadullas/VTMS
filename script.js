function addVehicle() {
  const name = document.getElementById("vehicleName").value;
  const number = document.getElementById("vehicleNumber").value;
  const list = document.getElementById("vehicleList");
  const emptyMsg = document.getElementById("emptyMsg");

  if (!name || !number) {
    alert("Please enter all details");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("vehicle-card");

  card.innerHTML = `
    <button class="delete-btn" onclick="this.parentElement.remove(); checkEmpty()">×</button>
    <h3>${name}</h3>
    <p>${number}</p>
  `;

  list.appendChild(card);

  document.getElementById("vehicleName").value = "";
  document.getElementById("vehicleNumber").value = "";

  checkEmpty();
}

function checkEmpty() {
  const list = document.getElementById("vehicleList");
  const emptyMsg = document.getElementById("emptyMsg");

  if (list.children.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }
}
