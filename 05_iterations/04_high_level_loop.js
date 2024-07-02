//for in loop

const myobj = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby'
}

for (const key in myobj) {
// console.log(key);
}
for (const key in myobj) {
// console.log(myobj[key]);
}
for (const key in myobj) {
// console.log(`${key} is shortcut for ${myobj[key]}`);
}

//array
const arr =  ["Spiderman","Superman","Deadpool","Ironman","Batman"]
for (const hero in arr) {
  // console.log(hero);
}
for (const hero in arr) {
  console.log(arr[hero]);
}

//cannot use for in for map