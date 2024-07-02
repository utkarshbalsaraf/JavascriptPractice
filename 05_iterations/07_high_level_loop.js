const myNum = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const newnums = myNum.map((num) => {return num + 10})
// console.log(newnums);

const newNum2 = myNum.map((num)=> num*10).map((num) => num +1)
// console.log(newNum2);

//Reduce

const myTotal = myNum.reduce(function (acc,curval){
  // console.log(`acc: ${acc} and currval : ${curval}`);
  return acc + curval
},0)
// console.log(myTotal);

const myadd = myNum.reduce((accu, currval)=> accu + currval,0)
console.log(myadd);