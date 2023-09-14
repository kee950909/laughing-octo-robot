//Assignment code plus query selector
var generateBtn = document.querySelector("#generate");
//Declaring variables
var characterCount;
var addSpecial;
var addNumber;
var addUpper;
var addLower;
var passwordCriteria;
//Defining values
var specials = ['!', '@', '#', '$', '%', '^', '&', '*'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function printPassword() {
    var password = createPassword();
    var passwordCharacters = document.querySelector("#password");
    passwordCharacters.value = password;
}

generateBtn.addEventListener("click", printPassword)
//Creating the function
function createPassword() {
  characterCount = prompt("How many characters, between 8 - 50, should your password be?");
//If the character count is left blank
  if (!characterCount) {
    alert("Character count cannot be left blank.");
//If the character count exceeds the parameters
  } else if (characterCount < 8 || characterCount > 50) {
  characterCount = prompt("Choose a length between 8 - 50.");
//User inputs to determine password Criteria
  } else {
    addSpecial = confirm("Should the password have special characters?");
    addNumber = confirm("Should the password contain numbers?");
    addUpper = confirm("Should the password contain upper case letters?");
    addLower = confirm("Should the password contain lower case letters?");
  };

  //No answer then
  if (!addSpecial && !addNumber && !addUpper && !addLower) {
    passwordCriteria = alert("At least one selection must be made")
  //Four
  } else if (addSpecial && addNumber && addUpper && addLower)  {
    passwordCriteria = specials.concat(numbers, uppers, lowers);
  }
  //Three
    else if (addSpecial && addNumber && addUpper) {
    passwordCriteria = specials.concat(numbers, uppers);
  } 
  else if (addNumber && addUpper && addLower) {
    passwordCriteria = numbers.concat(uppers, lowers);
  } 
  else if (addSpecial && addUpper && addLower) {
    passwordCriteria = specials.concat(uppers, lowers);
  } 
  else if (addSpecial && addNumber && addLower) {
    passwordCriteria = specials.concat(numbers, lowers);
  //Two
  } 
  else if (addSpecial && addNumber) {
    passwordCriteria = specials.concat(numbers);
  } 
  else if (addNumber && addUpper) {
    passwordCriteria = numbers.concat(uppers);
  } 
  else if (addUpper && addLower) {
    passwordCriteria = uppers.concat(lowers);
  } 
  else if (addSpecial && addUpper) {
    passwordCriteria = specials.concat(uppers);
  } 
  else if (addSpecial && addLower) {
    passwordCriteria = specials.concat(lowers);
  } 
  else if (addNumber && addLower) {
    passwordCriteria = numbers.concat(lowers);
  //One
  } 
  else if (addSpecial) {
    passwordCriteria = specials;
  } 
  else if (addNumber) {
    passwordCriteria = numbers;
  } 
  else if (addUpper) {
    passwordCriteria = uppers;
  } 
  else if (addLower) {
    passwordCriteria = lowers;
  };

  //Empty Criteria
  var criteriaBlank = [];

  //Randomization Loop
  for (var i = 0; i < characterCount; i++) {
    var allCriteria = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
    criteriaBlank.push(allCriteria);
  }

  //Compile and Return
   var password = criteriaBlank.join("");
   return password;
}

