// Given stored username and password and input username and password, Print if the user can login or not.

let username = "CyberPunk";
let password = "Cyber123456"

let inputUsername = "CyberPunk";
let inputPassword = "Cyber123456";

// if(username == inputUsername && password == inputPassword){
//   console.log("You may login.")
// }
// else(
//   console.log("Incorrect credentials.")
// )

if(username == inputUsername){
  if(password == inputPassword){
    console.log("You may login.")
  }
  else{
    console.log("Incorrect Password.")
  }
}
else{
  console.log("Invalid Username.")
}