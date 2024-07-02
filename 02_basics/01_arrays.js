//array 

const myArray = [1,2,3,4,5];
const myArray2 = new Array(1,2,3,4,5);
console.log(myArray2);
const myHeros = ["Ironman", "Spiderman"];
console.log(myArray[0]);

//array methods

myArray.push(6);
myArray.push(7);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(9);
console.log(myArray);
myArray.shift();
console.log(myArray);

console.log(myArray.includes(3));
console.log(myArray.indexOf(3));

const newArray =myArray.join();
console.log(myArray);
console.log(newArray);

// Slice ,Splice

console.log("A ",myArray);

const myn1 = myArray.slice(1,3);

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3);

console.log(myn2);
console.log("C ", myArray);
