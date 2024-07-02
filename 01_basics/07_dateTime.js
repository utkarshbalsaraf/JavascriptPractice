let myDate = new Date()
console.log(myDate);
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2023, 0, 23,10,2,30);
// let myCreatedDate = new Date("2023-01-23");
let myCreatedDate = new Date("01-23-2023");

console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleTimeString());

let myTimeStamp =Date.now();

console.log(myTimeStamp);
console.log(myDate.toLocaleString('default',{
  weekday:"long",
}));
