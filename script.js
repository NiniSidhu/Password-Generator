/* Password Generator 
  Author: Nayandeep Sidhu 
  Date Created: May 08, 2021

  The scope of this assignment is to present to the user; 
  1) The criteria of the password: lowercase, uppercase, numbers, special chaacters 
  2) Then the user would input the length of the password ranging from 8 to 128 characters 
  3) Then using the two above, a random string should be generated.. 

  References: 

  1) https://stackoverflow.com/questions/10139588/check-for-false
  2) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  3) https://stackoverflow.com/questions/1650591/whether-to-use-set-names
  4) https://www.youtube.com/watch?v=duNmhKgtcsI&ab_channel=TraversyMedia


*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// A new function called General Passowrd gets initiated 
function generatePassword (){
  // The User enters how many characters they would like ranging from 8 to 128 characters.
  var passwordLength = window.prompt("How many charcters would you like your password to be? Please choose between 8 to 128 charachers");

  // The length is then confirmed using parseInt JS function which converts a string to an integer and returns the interer value. 
  var confirmLength = parseInt(passwordLength);
  
  // Checks if the password is within the given criteria and also checks if the user infact eneterd an integer rather than a string. If the user did not, then user is alerted! 
  if (passwordLength < 8 || passwordLength > 128 || isNaN (passwordLength)){
      var userAlert = window.alert("Error! Invalid choice. Try Again...");
      return; 
  }

  // Global Variables are initiated. 
  var passwordString = []; // this is the array where the password would be stored temporarily for the duration of the function 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz" . split(""); // Gives the criteria for the lower case character set. The split JS feature allows us to split a string into an array of substrings and then returns the new array. 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" . split(""); // Gives the criteria for the upper case character set 
  var numberCase = "0123456789" . split(""); // Gives the criteria for numbers character set 
  var specialCase = "<>,.?/':;|\][{=}+-_)(*&^%$#@!`~" . split(""); // Gives the criteria for special character set

  // Prompts user to confirm if they want to include lower case characters
  var confirmLower = window.prompt("Do you want to include lowercase characters in your password? Please enter Yes if so.");
  if (confirmLower === "yes" || confirmLower === "Yes"){
    for ( i = 0; i <lowerCase.length; i++){
      passwordString.push(lowerCase[i]);
    }
  }

    // Prompts user to confirm if they want to include uper case characters

  var confirmUpper = window.prompt("Do you want to include Uppercase characters in your password? Please enter Yes if so.");
  if (confirmUpper === "yes" || confirmUpper === "Yes"){
    for ( i = 0; i <upperCase.length; i++){
      passwordString.push(upperCase[i]);
    }
  }
  // Prompts user to confirm if they want to include numbers 

  var confirmNumber = window.prompt("Do you want to include numbers in your password? Please enter Yes if so.");
  if (confirmNumber === "yes" || confirmNumber === "Yes"){
    for ( i = 0; i <numberCase.length; i++){
      passwordString.push(numberCase[i]);
    }
  }
  // Prompts user to confirm if they want to include special case characters

  var confirmSpecial = window.prompt("Do you want to include special characters in your password? Please enter Yes if so.");
  if (confirmSpecial === "yes" || confirmSpecial === "Yes"){
    for ( i = 0; i <specialCase.length; i++){
      passwordString.push(specialCase[i]);
    }
  }
  // if the user does not select any of the character types, the user is alerted with an error.  
  else{
    var userAlert = window.alert("Error! You need to pick atleast one of the character types!");
    return; 
  }
  // we initialize a final password variable. this is where the temp password that was store in the Password String during the duration of 
  // program gets copied onto the final password and the final password is returned to the user and is displayed. 
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
