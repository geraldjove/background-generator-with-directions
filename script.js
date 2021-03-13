//get elements
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var direction = "";

//get buttons
var button = document.getElementsByTagName("button");
var buttonVer = document.getElementById("vertical");
var buttonHor = document.getElementById("horizontal");
var buttonRad = document.getElementById("radial");

function gradientVer() {
    direction = "linear-gradient(";
    body.style.background = "linear-gradient(" 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}


function gradientHor() {
    direction = "linear-gradient(to right,";
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function gradientRad() {
    direction = "radial-gradient(";
    body.style.background = "radial-gradient(" 
    + color1.value 
    + "," 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
    return direction;
}


function setBackground() {
    body.style.background = 
    direction
    + color1.value 
    + "," 
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);

buttonVer.addEventListener("click", gradientVer);
buttonHor.addEventListener("click", gradientHor);
buttonRad.addEventListener("click", gradientRad);