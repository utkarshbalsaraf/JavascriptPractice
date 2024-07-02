const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("mouseover", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = "purple";
    }
  });
});
