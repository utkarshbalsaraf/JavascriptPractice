//Primitive

//7 Types : String, Number, Boolean, Null, undefined, Symbol, Bigint
var symbol = Symbol('1223');
console.log(symbol);

// Referance (Non Primitive)

// Array, Objects, Function == all has type object
//array
const heros =["shaktiman", "naagraj","doga"];
console.log( heros);

//object
const myobj = {name:"utkarsh",age:22};
console.log(myobj);

//function
const myFunction = function(){
  console.log('Hello World!');
}
myFunction();

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// Stack(Primitive), Heap (Non-Primitive)
let myName ="Utkarsh";
console.log(myName);
let newName = myName;
console.log(newName);
newName ="Monika";
console.log(myName);
console.log(newName);

let userOne = {
  email: "user@gmail.com",
  upi : "user@ybl"
}
console.log(userOne);

let userTwo = userOne;
console.log(userTwo);

userTwo.email ="utkarsh@gmail.com";
console.log(userOne);
console.log(userTwo);



//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.