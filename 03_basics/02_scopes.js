let a =10 
const b =20
var c =30

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "utkarsh"
  function two(){
    const website ="youtube"
    console.log(username);
  }
  // console.log(website);
  two()
}
one()

//********************************* Interesting ************************************ */
console.log(addOne(5))
function addOne(num){
  return num + 1
}
const adddTwo = function(num){
  return num +2
}

adddTwo(5)