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
     var length = userPasswordLenth,
         lowercase = "abcdefghijklmnopqrstuvwxyz",
         uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
         numbers = "0123456789",
         specialchar = "!@#" //add more
         retVal = "";
      for (var i = 0, n = lowercase+uppercase+numbers+specialchar.length; i < length; ++i) {
         retVal += charset.charAt(Math.floor(Math.random() * n));
      }
    // return retVal; //whats retVal do 

  //Password Length
  var userPasswordLenth = prompt("How many characters would you like your password? (8-128 characters")

    if (userPasswordLenth < 8 || userPasswordLenth > 128) { 
      window.alert("Invalid entry");   //how can i make it repeat the q
      }
    else{
      
      password.length === userPasswordLenth

    } 
  //Upper Case letters y/n
  var userLowerCase = confirm("Do you want lowercase letters?")

    if (userLowerCase) { 
      password
    ;   //how make password use lowercase
    }
    else{
  
    password.length === userPasswordLenth

    }   

  var userUpperCase = confirm("Do you want uppercase letters")
  var userNumberic = confirm("Do you want to use any numerical values")
  var userSpecialCharacters = confirm("Do you want to use any special Characters?")


window.alert(password)
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
