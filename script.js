// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordText.innerHTML=text;
//text is not being grabbed .......
}


//Getting user input
function generatePassword() {

          //variable for parts of password
     var length = userPasswordLength, //necessary?
         lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
         uppercase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
         numbers = "0123456789".split(" "); //does this work instead of quotes around the whole thing?
         specialchar = "!@#" //add more
         text = "";
     // for (var i = 0, n = length; i < length; ++i) {
     //    retVal += lowercase+uppercase+numbers+specialchar.charAt(Math.floor(Math.random() * n));
     // }
    // return retVal; //whats retVal do, i REPLACED IT W PASSWORD

  //Password Length
  var userPasswordLength = prompt("How many characters would you like your password? (8-128 characters")

    if (userPasswordLength < 8 || userPasswordLength > 128) { 
      window.alert("Invalid entry"); 
        return  //this is new, see if this works
      }
    else{
      
      text.length === userPasswordLength 

    } 
  //Upper Case letters y/n
  var userLowerCase = confirm("Do you want lowercase letters?")

    if (userLowerCase) { 
      lowercase === true 
    ;   
    }
    else{
  
      lowercase === false

    }   

  var userUpperCase = confirm("Do you want uppercase letters")

    if (userUpperCase) { 
    uppercase === true 
    ;   
    }
    else{
    uppercase === false
    }

    //numerical
  var userNumeric = confirm("Do you want to use any numerical values")

    if (userNumeric) { 
    numbers === true 
    ;   
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

 

  for (var i = 0, i = password.length; i < length; i++) {
    password += password.charAt(Math.floor(Math.random() * i));
    console.log(password)
  } 
  //somehow need to be filling a string concat??


  // return password; // ends function and returns the password?? not working
 
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 


// for( var i=0; i < IdLength.value; i++ ){
//   text += shuffle.charAt(Math.floor(Math.random() * shuffle.length));
// }
//  Results.innerHTML=text;

