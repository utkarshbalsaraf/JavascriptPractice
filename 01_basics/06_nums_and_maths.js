const score =400;
console.log(score);
console.log(score.toString());

const newScore = new Number(400);
console.log(newScore);
console.log(newScore.toString());
console.log(newScore.toFixed(2));

const hundreds =1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//******************************************Maths*********************************************** */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(81));
console.log(Math.min(4,6,10,8,1,2));
console.log(Math.max(4,6,10,8,1,2));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random()*10+1);

const min = 10;
const max =50;
console.log(Math.floor(Math.random()* (max - min+1)) +min);








