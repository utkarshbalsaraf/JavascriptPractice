//falsy values

// false,0,-0,BigInt 0n,null,undefined,NaN

//truethy values
//all others other than falsy values are truthy values
//"0",'false', " " all values in string are truthy values ,[], {}


const obj ={}

if(Object.keys(obj).length === 0){
  console.log("Object is empty");
}

//nullish coalescing operator (??): null undefined
// if the value is null it provides optional value
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);


const teaPrice =100
teaPrice>=80 ? console.log("more than 80") : console.log("less than 80")


