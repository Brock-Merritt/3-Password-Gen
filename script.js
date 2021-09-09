var generateBtn = document.querySelector("#generate") ;
var number= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "]", "[", "~", "-", "_", ".",];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var userArray = []

var newArray = []

function generatePassword() {

  var length =  parseInt(prompt("Pick a number from 8 to 128"));
  console.log(length);
    if (length <8 ||length >128){
      alert("please type a valid number");
      return;
    }
    if (isNaN(length) === true){
      alert("please type in a number")
      return;
    }
  
  var lowercase = confirm("do you want to add lowercase letter?");
  

  var uppercase = confirm("do you want to add an uppercase letter?");
  
  
  var numbercase = confirm ("do you want to add numbers?");
  var symbolscase = confirm("do you want to add symbols");
  if(lowercase === false && uppercase === false && numbercase === false && symbolscase === false ){
    alert("you must pick atleast one condition, try again")
    return;
  }

  if(lowercase){
    userArray = userArray.concat(lower);
    console.log(userArray)
  }
  if(uppercase){
    userArray = userArray.concat(upper);
    console.log(userArray)
  }
  if(numbercase){
    userArray = userArray.concat(number);
    console.log(userArray)
  }
  if(symbolscase){
    userArray = userArray.concat(symbols);
    console.log(userArray)
  }
  for (let index = 0; index < length; index++) {
    newArray.push(userArray[Math.floor(Math.random() * userArray.length)])
    
  }

  return newArray.join("");
}


// Get references to the #generate element

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword ) 



