function hideAlert() {
  document.querySelector(".alert").classList.add("hide");
}

function showMore() {
document.getElementById("showMore").innerHTML = "<b>Show Less</b>";
document.querySelector(".more").classList.toggle("hide");
}


function hideReminder1() {
  document.querySelector(".reminderOne").classList.add("hide");
}

function hideReminder2() {
  document.querySelector(".reminderTwo").classList.add("hide");
}
function hideReminder3() {
  document.querySelector(".reminderThree").classList.add("hide");
}
function hideReminder4() {
  document.querySelector(".reminderFour").classList.add("hide");
}



function changeChevron1() {
if (document.querySelector(".chevUp1")) {
  document.getElementById("chevron1").src = "img/chevron_down.svg";
  document.getElementById("chevron1").classList.add("chevDown1");
  document.getElementById("chevron1").classList.remove("chevUp1");
} else {
  document.getElementById("chevron1").src = "img/chevron_up.svg";
  document.getElementById("chevron1").classList.remove("chevDown1");
  document.getElementById("chevron1").classList.add("chevUp1");
} 
 };

function changeChevron2() {
if (document.querySelector(".chevUp2")) {
  document.getElementById("chevron2").src = "img/chevron_down.svg";
  document.getElementById("chevron2").classList.add("chevDown2");
  document.getElementById("chevron2").classList.remove("chevUp2");
} else {
  document.getElementById("chevron2").src = "img/chevron_up.svg";
  document.getElementById("chevron2").classList.remove("chevDown2");
  document.getElementById("chevron2").classList.add("chevUp2");
} 
 };
 
 
function changeChevron3() {
if (document.querySelector(".chevUp3")) {
  document.getElementById("chevron3").src = "img/chevron_down.svg";
  document.getElementById("chevron3").classList.add("chevDown3");
  document.getElementById("chevron3").classList.remove("chevUp3");
} else {
  document.getElementById("chevron3").src = "img/chevron_up.svg";
  document.getElementById("chevron3").classList.remove("chevDown3");
  document.getElementById("chevron3").classList.add("chevUp3");
} 
 };
 
 
function changeChevron4() {
if (document.querySelector(".chevUp4")) {
  document.getElementById("chevron4").src = "img/chevron_down.svg";
  document.getElementById("chevron4").classList.add("chevDown4");
  document.getElementById("chevron4").classList.remove("chevUp4");
} else {
  document.getElementById("chevron4").src = "img/chevron_up.svg";
  document.getElementById("chevron4").classList.remove("chevDown4");
  document.getElementById("chevron4").classList.add("chevUp4");
} 
 };
 
 

function changeChevron5() {
if (document.querySelector(".chevUp5")) {
  document.getElementById("chevron5").src = "img/chevron_down.svg";
  document.getElementById("chevron5").classList.add("chevDown5");
  document.getElementById("chevron5").classList.remove("chevUp5");
} else {
  document.getElementById("chevron5").src = "img/chevron_up.svg";
  document.getElementById("chevron5").classList.remove("chevDown5");
  document.getElementById("chevron5").classList.add("chevUp5");
} 
 }; 


 function changeChevron6() {
if (document.querySelector(".chevUp6")) {
  document.getElementById("chevron6").src = "img/chevron_down.svg";
  document.getElementById("chevron6").classList.add("chevDown6");
  document.getElementById("chevron6").classList.remove("chevUp6");
} else {
  document.getElementById("chevron6").src = "img/chevron_up.svg";
  document.getElementById("chevron6").classList.remove("chevDown6");
  document.getElementById("chevron6").classList.add("chevUp6");
   } 
 }; 