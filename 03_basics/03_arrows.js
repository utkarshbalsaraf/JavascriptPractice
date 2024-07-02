const user = {
  username : "Utkarsh",
  price: 999,
  
  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
  console.log(this);
}
// chai()

const coffee = () =>{
  let username = "Utkarsh"
  console.log(this);
}
// coffee()

//Explicit return
// const addTwo = (num1, num2) =>{
//   return num1 +num2
// }
// console.log(addTwo(5,7));


//implicit return
// const addTwo = (num1, num2) => num1 +num2
// console.log(addTwo(5,7));

const addTwo = (num1, num2) => (num1 +num2)
console.log(addTwo(5,7));



