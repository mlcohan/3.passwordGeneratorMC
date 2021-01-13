// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//should i be declaring the variables 
var userPasswordLenth
var userLowerCase
var userUpperCase
var userNumberic
var userSpecialCharacters


//Getting user input
function generatePassword() {
  var userPasswordLenth = prompt("How many characters would you like your password? (8-128 characters")

    if (userPasswordLenth < 8 || userPasswordLenth > 128) 
      { window.alert("Invalid entry"); userPasswordLenth;  //how can i make it repeat the q
      }
    else{
      
      password.length === userPasswordLenth

    } 

  var userLowerCase = confirm("Do you want uppercase letters?")

    

  var userUpperCase = prompt("Do you want lowercase letters")
  var userNumberic = prompt("Do you want to use any numerical values")
  var userSpecialCharacters = prompt("Do you want to use any special Characters?")



}

//Using user input 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;


