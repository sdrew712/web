let colorButton = document.getElementById("color");
let placeButton = document.getElementById("place");
let ritualButton = document.getElementById("ritual");

function colorAlert(){
  alert("My favorite color is black");
}

function placeAlert(){
  alert("My favorite place is home");
}

function ritualAlert(){
  alert("My favorite ritual is... demon summoning?");
}

colorButton.addEventListener('click', colorAlert);
placeButton.addEventListener('click', placeAlert);
ritualButton.addEventListener('click', ritualAlert);