// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Getting user input
function generatePassword() {
  var userPasswordLenth = prompt("How many characters would you like your password? (8-128 characters")
  var userLowerCase = confirm("Do you want uppercase letters?")
  var userUpperCase = prompt("Do you want lowercase letters")
  var userNumberic = prompt("Do you want to use any numerical values")
  var userSpecialCharacters = prompt("Do you want to use any special Characters?"?")
}

//Using user input 
if (128 <  userPasswordLenth < 8)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;


