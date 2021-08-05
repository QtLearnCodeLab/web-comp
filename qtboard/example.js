// https://qtlearn.page.link/qtwc-docs
// THIS FILE IS MEANT FOR REFERENCE ONLY
// DO NOT INCLUDE THIS FILE IN YOUR PROJECT(index.html)

// GETTING ELEMENTS FROM DOCUMENT:
// COMPONENT:
let m1 = document.getElementById("motor1");

// HTML TAGS LIKE BUTTON OR LABLE ETC:
let button = document.getElementById("forwardButton");

// ADDING EVENT LISTENER:
button.addEventListener("mouseover", functionNameHere);
button.addEventListener("mouseout", functionNameHere);

// HELPER FUNCTIONS:
function forward() {
  m1.run("clockwise", 200);
}

// MAIN LOGIC FUNCTION:
// Main logic function is called via eventListener or onData or setTimeout
function functionNameHere(event) {
  if (event.code === "KeyA") {
    forward();
  }
}
