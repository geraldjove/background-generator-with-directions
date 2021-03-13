//get elements
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var direction = ""; //initial state of direction is none.

//get buttons
var button = document.getElementsByTagName("button");
var buttonVer = document.getElementById("vertical");
var buttonHor = document.getElementById("horizontal");
var buttonRad = document.getElementById("radial");

function gradientVer() {
    direction = "linear-gradient("; //value of direction is "linear-gradient(" when gradientVer() is ran.
  
  body.style.background = 
    direction 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function gradientHor() {
    direction = "linear-gradient(to right,"; //value of direction is "linear-gradient(to right," when gradientHor() is ran.
    body.style.background = 
    direction 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function gradientRad() {
    direction = "radial-gradient("; //value of direction is "radial-gradient" when gradientRad() is ran.
    body.style.background = 
    direction 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}


function updateColor() {
    body.style.background = 
    direction //direction value is kept and stored when you clicked one of the option (Horizontal/Vertical/Radial).
    + color1.value 
    + "," 
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
}

// gradientHor(); // initial state when starting the website

color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);

buttonVer.addEventListener("click", gradientVer); //changes the value of direction to "vertical" on-click.
buttonHor.addEventListener("click", gradientHor); //changes the value of direction to "horizontal" on-click.
buttonRad.addEventListener("click", gradientRad); //changes the value of direction to "radial" on-click.