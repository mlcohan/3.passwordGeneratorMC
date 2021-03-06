// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

      passwordText.value = password;




  //Getting user input
  function generatePassword() {
    var password = ""
    //variables for parts of password
    const lowercase = ["abcdefghijklmnopqurstuvwxyz".split(" ")],
       uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ")],
       numbers = ["0123456789".split(" ")], 
       specialchar = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(" ")] //add more
    var
      text = lowercase + uppercase + numbers + specialchar;
   
      
    //Password Length Prompt
    var userPasswordLength = prompt("How many characters would you like your password? (8-128 characters")

    //Invalid warning for passswords that are too short/long
      if (userPasswordLength < 8 || userPasswordLength > 128) { 
        window.alert("Invalid entry"); 
      //ends loop because of invalid entry
      return  
      }

      else{
      
     //make the password the length of users choice 
      text.length === userPasswordLength 

      } 
    //Lower Case letters y/n
    var userLowerCase = confirm("Do you want lowercase letters?")

      if (userLowerCase) { 
        lowercase === true;   
      }
      else{
        lowercase === false;
      }   

    //Upper Case letters y/n
    var userUpperCase = confirm("Do you want uppercase letters")

      if (userUpperCase) { 
        uppercase === true;   
      }
      else{
        uppercase === false;
      }

    //Numbers y/n
    var userNumeric = confirm("Do you want to use any numerical values")

      if (userNumeric) { 
        numbers === true;   
      }
      else{
        numbers === false;
      }

    //Special Characters y/n
    var userSpecialCharacters = confirm("Do you want to use any special Characters?")

      if (userSpecialCharacters) { 
        specialchar === true;   
        }
      else{
        specialchar === false;
        }
    //if user picks no characters then they recieve an error message
      if (!userLowerCase && !userUpperCase && !userNumeric && !userSpecialCharacters) { 
      
        window.alert("Invalid entry"); 

        //ends loop because of invalid entry
      return  
      }

      else{

        //loop to generate random password
        for (var i = 0, n = text.length; i < userPasswordLength; i++) {
          password += text.charAt(Math.floor(Math.random() * n));
        } 
        return password; // ends function and returns the password
      }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 


