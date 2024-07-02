// console.log("U");
// console.log("T");
// console.log("K");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");

function sayMyName(){
  console.log("U");
  console.log("T");
  console.log("K");
  console.log("A");
  console.log("R");
  console.log("S");
  console.log("H");
}
// sayMyName();

// function addTwonumbers(number1, number2){
//   console.log(number1+number2);
// }

// addTwonumbers(4,6);

function addTwonumbers(number1,number2){
  // let result =number1+number2;
  // return result;
  return number1 + number2;
}
const result = addTwonumbers(3,5);
// console.log("Result : ",result);

function loginUserMessage(username){
  if(username === undefined){
    console.log("Please Enter The Username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
  return num1;
}
// console.log(calculateCartPrice(200,300,4000,300));

const user = {
  username: "Utkarsh",
  marks: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and marks is ${anyobject.marks}`);
}
handleObject(user);

const myNewArray=[200,300,400]
function returnValues(getArray){
  return getArray[1];
}
console.log(returnValues(myNewArray)); 