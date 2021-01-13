// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//should i be declaring the variables in one place??
var userPasswordLenth
var userLowerCase
var userUpperCase
var userNumberic
var userSpecialCharacters


//Getting user input
function generatePassword() {


  //got from internet 
          //length of password
     var length = userPasswordLenth,
         lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
         uppercase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
         numbers = "0123456789",
         specialchar = "!@#" //add more
         finalPassword = [];
     // for (var i = 0, n = length; i < length; ++i) {
     //    retVal += lowercase+uppercase+numbers+specialchar.charAt(Math.floor(Math.random() * n));
     // }
    // return retVal; //whats retVal do, i REPLACED IT W PASSWORD

  //Password Length
  var userPasswordLenth = prompt("How many characters would you like your password? (8-128 characters")

    if (userPasswordLenth < 8 || userPasswordLenth > 128) { 
      window.alert("Invalid entry");   //how can i make it repeat the q
      }
    else{
      
      password.length === userPasswordLenth // is this redundant??

    } 
  //Upper Case letters y/n
  var userLowerCase = confirm("Do you want lowercase letters?")

    if (userLowerCase) { 
      lowercase === true //this is a guess
    ;   //how make password use lowercase
    }
    else{
  
      lowercase === false

    }   

  var userUpperCase = confirm("Do you want uppercase letters")

    if (userUpperCase) { 
    uppercase === true //this is a guess
    ;   //how make password use lowercase
    }
    else{
    uppercase === false
    }

  var userNumberic = confirm("Do you want to use any numerical values")

    if (userNumeric) { 
    numbers === true //this is a guess
    ;   //how make password use lowercase
    }
    else{

    numbers === false;
    }
  var userSpecialCharacters = confirm("Do you want to use any special Characters?")

  if (userSpecialCharacters) { 
    specialchar === true //this is a guess
  ;   //how make password use lowercase
  }
  else{

    specialchar === false;
  }

  for (var i = 0, n = password.length; i < passwordLength; ++i) {
    password += passowrd.charAt(Math.floor(Math.random() * n));
  } 

  return password; //whats return retVal do, i REPLACED IT W PASSWORD
 
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
