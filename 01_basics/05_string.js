const name =" Utkarsh";
const marks = 98;

console.log(name + marks + " marks");
console.log(`Hello my name is ${name} and my marks for physics are ${marks}`);

const gameName = new String('hites-hc')

console.log(gameName[0]);
console.log(typeof gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const anotherString = gameName.substring(0,4);
console.log(anotherString);
const newString = gameName.slice(-5,4);
console.log(newString);

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));