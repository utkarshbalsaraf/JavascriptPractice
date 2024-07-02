let myName = "Hitesh    ";
console.log(myName.length);
// console.log(myName.truelength);

let myHeros = ["thor", "Spiderman", "Ironman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is : ${this.spiderman}`);
  },
};

Object.prototype.utkarsh = function(){
  console.log(`utkarsh is present in all objects`);
}

Array.prototype.heyUtkarsh = function(){
  console.log(`Hey utkarsh`);
}

// myHeros.utkarsh()
// myHeros.heyUtkarsh()

//Inheritance

const User = {
  name : "chai",
  email: "chai@gmail.com"
}

const Teacher = {
  makeVideo : true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS Assgnment',
  fullTime:true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let user3 = "ChaiAurCode    "


String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`true length is : ${this.trim().length}`);
}
user3.trueLength()
"Utkarsh   ".trueLength()


