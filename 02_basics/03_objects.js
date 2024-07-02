//singleton = has only one instance 
// Object.create

const mySymb = Symbol('key1') 

// Object Literals
const JsUser ={
  name : "Utkarsh",
  [mySymb]: "mykey1",
  age: 24,
  location : "Jaipur",
  email : "utkarsh@gmail.com",
  isLoggedIn : true,
  lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySymb]);

JsUser.email = "utkarsh@yahoo.com";
// Object.freeze(JsUser);
JsUser.email = "utkarsh@ooutlook.com";
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS User");
}

JsUser.greetingtwo = function(){
  console.log(`Hello JS User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

// console.log(JsUser);




