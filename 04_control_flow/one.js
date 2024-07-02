//if

if(2 =="2"){
  console.log("Executed");
}
if(2 ==="2"){
  console.log("Wrong");
}else{
  console.log("Wrong");
}

const balance =1000
// if (balance>500) console.log("true"); //wrong do not do like this

if (balance<500){
  console.log("less than 500");
}else if (balance<750){
  console.log("less than 750");
}else if (balance<900){
  console.log("less than 900");
}else{
  console.log("greater than 900");
}


const userLoggedIn =true
const debitCard =true
if(userLoggedIn&&debitCard){
  console.log("Allow to buy course");
}