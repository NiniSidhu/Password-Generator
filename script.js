/* Password Generator 
  Author: Nayandeep Sidhu 
  Date Created: May 08, 2021

  The scope of this assignment is to present to the user; 
  1) The criteria of the password: lowercase, uppercase, numbers, special chaacters 
  2) Then the user would input the length of the password ranging from 8 to 128 characters 
  3) Then using the two above, a random string should be generated.. 

*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){
  var passwordLength = window.prompt("How many charcters would you like your password to be? Please choose between 8 to 128 charachers");

  var confirmLength = parseInt(passwordLength);
  console.log(confirmLength);

  if (passwordLength < 8 || passwordLength > 128 || isNaN (passwordLength)){
      var userAlert = window.alert("Error! Invalid choice. Try Again...");
      return; 
  }

  var passwordString = [];
  var lowerCase = "abcdefghijklmnopqrstuvwxyz" . split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" . split("");
  var numberCase = "0123456789" . split("");
  var specialCase = "<>,.?/':;|\][{=}+-_)(*&^%$#@!`~" . split("");

  var confirmLower = window.prompt("Do you want to include lowercase characters in your password?");
  if (confirmLower === "yes" || confirmLower === "y"){
    for ( i = 0; i <lowerCase.length; i++){
      passwordString.push(lowerCase[i]);
    }
  }

  
  var confirmUpper = window.prompt("Do you want to include Uppercase characters in your password?");
  if (confirmUpper === "yes" || confirmUpper === "y"){
    for ( i = 0; i <upperCase.length; i++){
      passwordString.push(upperCase[i]);
    }
  }

  var confirmNumber = window.prompt("Do you want to include numbers in your password?");
  if (confirmNumber === "yes" || confirmNumber === "y"){
    for ( i = 0; i <numberCase.length; i++){
      passwordString.push(numberCase[i]);
    }
  }

  var confirmSpecial = window.prompt("Do you want to include special characters in your password?");
  if (confirmSpecial === "yes" || confirmSpecial === "y"){
    for ( i = 0; i <specialCase.length; i++){
      passwordString.push(specialCase[i]);
    }
  }

  var finalPassword = "";
  for (i =0; i<confirmLength; i++){
    passwordString[Math.floor(Math.random()*passwordString.length)];
    finalPassword += passwordString[Math.floor(Math.random()*passwordString.length)];
  }

  return finalPassword;

}

// Get references to the #generate element


// Write password to the #password input



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
