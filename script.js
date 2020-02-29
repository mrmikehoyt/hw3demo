// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //declaring all the arrays that I am using, some of the arrays are place holders used to randomize the arrays, and maniuplate them
  const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const specialChars = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","]","]","|",",","/","?",">","<"];
  const arrayvalueuppercase = uppercase.values();
  const arrayvaluelowercase = lowercase.values(); 
  const arrayvalueSpecialCharacters = specialChars.values();
  let number = ["0","1","2","3","4","5","6","7","8","9"];
  let mixedPasswordArray = []
  let mixedPassAllCharTypes = []
  const password4 = mixedPasswordArray.values();
  
  //for randomizing numbers in array . Increasing 32 or decreasing 32 increases odds of number being listed in password
  function GeneratePassword(random){
      for (let i = 0; i < 32; i++) {
 
          let num = Math.floor(Math.random() * 8) + 1

          mixedPasswordArray.push(num);
  
      }
  }
  //for randomizing lowercase letters in array
  function GenerateLowercaseletters(random){
      for (const value of arrayvaluelowercase) {
      const value = random[Math.floor(Math.random() * random.length)];
      mixedPasswordArray.push(value);  
      }
  }
     //for randoming specialcharacters in array
    function GenerateSpecialCharacters(random){
      for (const value of arrayvalueSpecialCharacters) {
      const value = random[Math.floor(Math.random() * random.length)];
     mixedPasswordArray.push(value);
  
      }
  }
   //for randomizing uppercase letters in array
  function GenerateUppercaseletters(random){
      for (const value of arrayvalueuppercase) {
      
         
        

      const value = random[Math.floor(Math.random() * random.length)];
      mixedPasswordArray.push(value);
     
  
      }
  }
  
//for creating array that is only the amount of characters that is specified and randomizing the characters in the array a final time after they are all combined
  function createArray(random){
    for (const value of password4) {
          const value = random[Math.floor(Math.random() * random.length)];
        mixedPassAllCharTypes.push(value);
          window.passwithsemicolon = mixedPassAllCharTypes.slice(0, howManyChars)
        
      }
  }
  
 
 //questions that user is asked 
  let numbers = confirm ("Welcome to the password Generator. Will your password contain numbers?");
  let specialCharacters = confirm ("Will your password contain special characters?")
  let letters = confirm ("will your password contain lowercase letters?")
  let uppercaseletters = confirm ("will your password contain uppercase letters?")
  let howManyChars = prompt ("how many characters will your password contain?")
  while (howManyChars > 128 || howManyChars <8) {
    howManyChars =  prompt ("Please enter a number greater than 8 and less than 128.")
 }
 
  let ready = confirm ("ready to generate")
  
  
  //if the user answers yes regarding numbers being in the array. the function is called to randomize numbers and include them in password
  if (numbers  === true) {
  GeneratePassword(number);
  }
  else {  
  alert ("This password will contain no numbers") ;
  }
  
  //if the user answers yes regarding numbers being in the array. the function is called to randomize lower case letters and include them in password
  if (letters === true) {
      GenerateLowercaseletters(lowercase);
  }
  else {
      alert ("This password will contain no lowercase letters");
  }
  
  //if the user answers yes regarding numbers being in the array. the function is called to randomize upper case letters and include them in password
  if (uppercaseletters === true) {
      GenerateUppercaseletters(uppercase);
       
      
      //need to find out how to push specialchars to new array
  }
  else {
      alert ("This password will contain no uppercase letters");
  }
    //if the user answers yes regarding numbers being in the array. the function is called to randomize special characters and include them in password
  if (specialCharacters === true) {
      GenerateSpecialCharacters(specialChars)
      //need to find out how to push specialchars to new array
  }
  else { 
  alert ("This password will contain no special characters");
  }
  

  //if the user clicks ok on the ready prompt. The function to randomize the password again, and reduce the characters to the password length is called. Than the password is converted
  //has the semicolons removed from it, and the password is displayed
  if (ready === true){
      createArray(mixedPasswordArray)
      let finalpass = passwithsemicolon.join('')
      let message = document.getElementById("display")
      message.innerText = finalpass;
      
  } 
  else {
      alert ("Looks like you are not ready to create the password. The password generator will now terminate.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);