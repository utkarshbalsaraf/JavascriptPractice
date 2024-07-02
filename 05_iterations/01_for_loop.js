//for
let heros = ["Spiderman","Superman","Deadpool","Ironman","Batman"]

// for (let index = 0; index < heros.length; index++) {
//   console.log(heros[index]);
// }

// for (let i = 1; i <=10; i++) {
//   console.log(`\nTable of ${i}`);
//   for (let j = 1; j <=10; j++) {
//     console.log(`${i} x ${j} = ${i*j}`);
//   }
// }

// Break and Contimue

// for (let index = 1; index <= 20; index++) {
//   if(index==5){
//     console.log(`Detected 5`);
//     break
//   }
//   console.log(`Value of index is ${index}`);  
// }

for (let index = 1; index <= 20; index++) {
  if(index==5){
    console.log(`Detected 5`);
    continue
  }
  console.log(`Value of index is ${index}`);  
}