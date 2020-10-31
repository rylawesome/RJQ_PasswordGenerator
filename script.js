// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var password = "";
  var passwordText = document.querySelector("#password");
    // All chars available
  var alphabet = "abcdefghijklmnopqrstuvwxyz"; //include uppercase
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var chars = "";
  // User input for PW
  // PW length
  var passLength = prompt("Enter a number between 8 and 128")
  if (parseInt(passLength) > 128) {
    alert("Password is too long!");
    return;
  }
  else if (parseInt(passLength) < 8) {
    alert("Password is too short!");
    return;
  }
  // Items in PW
  var lowercase = confirm("Would you like lowercase characters?");
  var upperConfirm = confirm("Would you like uppercase characters?");
  var numericConfirm = confirm("Would you like numeric characters?");
  var specialConfirm = confirm("Would you like special characters?");
  // Tests for userinput
  if (lowercase == true) {
    // could be simplified to chars = alphabet but this is more robust
    chars = chars.concat(alphabet);
    //returns all chars in the string
    console.log(lowercase);
    console.log(chars);
  }
  if (upperConfirm == true) {
    chars = chars.concat(uppercase);
    console.log(upperConfirm);
    console.log(chars);
  }
  if (numericConfirm == true) {
    chars = chars.concat(numeric);
    console.log(numericConfirm);
    console.log(chars);
  }
  if (specialConfirm == true) {
    chars = chars.concat(specialChar);
    console.log(specialConfirm);
    console.log(chars);
  }
  for (i=0;i<parseInt(passLength);i++) {
    password+=chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
