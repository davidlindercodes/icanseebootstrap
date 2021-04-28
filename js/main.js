const doneBtn = document.querySelector(".doneBtn");
const alert = document.querySelector(".alert");
const showmore = document.querySelector(".showMore");
const more = document.querySelector(".more");




function hideAlert() {
  alert.classList.add("hide");
}

function showMore() {
 // showmore.classList.add("hide");
document.getElementById("showMore").innerHTML = "<b>Show Less</b>";
  more.classList.toggle("hide");
}

// function showLess() {
//   more.classList.add("hide");
//   showmore.classList.remove("hide");
// }