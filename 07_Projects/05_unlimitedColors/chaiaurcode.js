//Generate the random color

const randomColor = function () {
  const hexaCode = "0123456789ABCDE";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexaCode[Math.floor(Math.random() * 15)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {

    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId =null
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
