const mvHeros =["Thor","IronMan","Spiderman"];
const dcHeros =["Superman","Flash","Batman"];

// mvHeros.push(dcHeros);
// console.log(mvHeros);

// const allHeros = mvHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...mvHeros, ...dcHeros];//Spread
console.log(allNewHeros);

const nestArray =[1,2,3,[4,5,6],7,[8,9,[4,5]]];
console.log(nestArray);
const flatArray = nestArray.flat(1);
console.log(flatArray);
const flatArray2 = nestArray.flat(2);
console.log(flatArray2);

console.log(Array.isArray("Utkarsh"));
console.log(Array.from("Utkarsh"));
console.log(Array.from({fname: "Utkarsh"})); //interesting

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));


