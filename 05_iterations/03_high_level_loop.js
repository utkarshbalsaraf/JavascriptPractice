//for of

const arr =  ["Spiderman","Superman","Deadpool","Ironman","Batman"]
for (const hero of arr) {
  // console.log(hero);
}

const string = "Utkarsh"
for (const str of string) {
  // console.log(str);
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA', "United State of America")
map.set('FR',"France")

for (const key of map) {
  // console.log(key);
}
for (const [key, value] of map) {
  console.log(key, ':-', value);
}

//cannot print object with for of