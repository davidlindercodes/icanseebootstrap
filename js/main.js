const doneBtn = document.querySelector(".doneBtn");
const alert = document.querySelector(".alert");

doneBtn.addEventListener("click", hideAlert);

function hideAlert() {
  alert.classList.add("hide");
}


