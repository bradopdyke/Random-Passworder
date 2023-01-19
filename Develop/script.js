var generateBtn = document.querySelector("#generate");

function writePassword() {
  // get password criteria
  var length = prompt("Password length (8-128 characters)");
  var lowerCase = confirm("Lowercase characters?");
  var upperCase = confirm("Uppercase characters?");
  var numbers = confirm("Numeric characters?");
  var specialChar = confirm("Special characters?");

  // if statements to confirm 
  if (length < 8 || length > 128) {
    alert("Please make sure the length of your password is between 8 and 128 characters.");
    return;
  }
  if (!lowerCase && !upperCase && !numbers && !specialChar) {
    alert("You must use at least one character type");
    return;
  }

  // Generate password
  var password = "";
  var characters = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()"
  };
  while (password.length < length) {
    if (lowerCase) password += characters.lower[Math.floor(Math.random() * characters.lower.length)];
    if (upperCase) password += characters.upper[Math.floor(Math.random() * characters.upper.length)];
    if (numbers) password += characters.numeric[Math.floor(Math.random() * characters.numeric.length)];
    if (specialChar) password += characters.special[Math.floor(Math.random() * characters.special.length)];
  }
  password = password.slice(0, length);

  // Display password on screen
  var generatedPassword = document.querySelector("#password");
  generatedPassword.value = password;
}

// event listener
generateBtn.addEventListener("click", writePassword);
