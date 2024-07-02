const User = {}
User.name = "utkarsh"
User.email = "utkarsh@gmail.com"
User.likes = 10
// console.log(User);

const regularUser = {
  email : "utkarsh@gmail.com",
  fullname:{
    userFullName: {
      firstName:"Utkarsh",
      lastName: "Balsaraf"
    }
  }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj3 = {5: "e", 6:"d"}

// const obj4 = {obj1,obj2};
// const obj4 = Object.assign({},obj1,obj2);
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const multiUsers = [
  {
    id : 1,
    email : "utkarsh@gmail.com"
  },
  {
    id : 2,
    email : "utkarsh@gmail.com"
  },
  {
    id : 3,
    email : "utkarsh@gmail.com"
  }
]

// console.log(multiUsers[1].id);
// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));
// console.log(User.hasOwnProperty('name'));

//*********************************Destructuring************************************************** */

const course = {
  courseName : "javascript",
  price : "999",
  courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

