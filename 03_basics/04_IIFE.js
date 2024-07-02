//IMIDIATLY INVOKED FUNCTION EXPRESSIONS (IIFE)

function chai(){
  console.log("DB Connected");
}
chai();

(function chais(){
  console.log("DB Connected");
})();

(() => {
  console.log(`DB CONNECTED TWO`);
})();

((fname) => {
  console.log(`DB CONNECTED THREE ${fname}`);
})("utkarsh");



