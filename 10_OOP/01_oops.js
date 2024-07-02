function User(username, logincount, isLoggedIn) {
  this.username = username;
  this.logincount = logincount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }
  // return this;
}
const userone = new User("utkarsh", 12, true);
const usertwo = new User("shantanu", 13, true);
console.log(userone.greeting);
console.log(usertwo);
