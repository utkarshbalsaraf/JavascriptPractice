const arr =  ["Spiderman","Superman","Deadpool","Ironman","Batman"]

arr.forEach( function(heros){
  // console.log(heros);
})

arr.forEach((heros)=>{
  // console.log(heros);
})
arr.forEach((heros,index,arr)=>{
  // console.log(heros,index,arr);
})

const mycoding = [
  {
    languageName : "JAVA",
    languageFileName:  "java"
  },
  {
    languageName : "JavaScript",
    languageFileName:  "js"
  },
  {
    languageName : "Python",
    languageFileName:  "py"
  },
  {
    languageName : "CSharp",
    languageFileName:  "c#"
  }
]

mycoding.forEach((item => {
  console.log(item.languageName);
}))