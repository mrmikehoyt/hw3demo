// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //let password = generatePassword();
  //let passwordText = document.querySelector("#password");
  //passwordText.value = password;
  const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const specialChars = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","]","]",",","|",",","/","?",">","<"];
  const arrayvalueuppercase = uppercase.values();
  const arrayvaluelowercase = lowercase.values(); 
  const arrayvalueSpecialCharacters = specialChars.values();
  let number = ["0","1","2","3","4","5","6","7","8","9"];
  let mixedPasswordArray = []
 // let mixedcompletepass = []
  let mixedPassAllCharTypes = []
  // let password6 = []
  // let password8 = []
  const password4 = mixedPasswordArray.values();
  
  //for randomizing numbers in array
  function GeneratePassword(random){
      for (let i = 0; i < 10; i++) {
          // Generate a random number between 1 and 10
          // Math.floor will round down, meaning we would get a number
          // between 0 and 9, so we'll always add 1 to bump it up.
          let num = Math.floor(Math.random() * 8) + 1
  
          // Display in console
         // console.log(num)
          mixedPasswordArray.push(num);
  
      }
  }
  //for randomizing lowercase letters in array
  function GenerateLowercaseletters(random){
      for (const value of arrayvaluelowercase) {
      
         
        
    //  for (let i = 0; i < 10; i++) {
      
      const value = random[Math.floor(Math.random() * random.length)];
      //console.log(value);
      mixedPasswordArray.push(value);
     
  // }
  
      }
  }

    //for randoming specialcharacters in array
    function GenerateSpecialCharacters(random){
      for (const value of arrayvalueSpecialCharacters) {
      
         
        
    //  for (let i = 0; i < 10; i++) {
      
      const value = random[Math.floor(Math.random() * random.length)];
      //console.log(value);
      mixedPasswordArray.push(value);
     
  // }
  
      }
  }
  
  function GenerateUppercaseletters(random){
      for (const value of arrayvalueuppercase) {
      
         
        
    //  for (let i = 0; i < 10; i++) {
      
      const value = random[Math.floor(Math.random() * random.length)];
      //console.log(value);
      mixedPasswordArray.push(value);
     
  // }
  
      }
  }
  

  
  function createArray(random){
   
      for (const value of password4) {
          const value = random[Math.floor(Math.random() * random.length)];
          //console.log(value);    
          mixedPassAllCharTypes.push(value);
          window.blahblah = mixedPassAllCharTypes.slice(0, howManyChars)
          
          
         //  console.log (blahblah);
        
      }
  }
  
  //function splice(random){
  //     password2.slice(0, 7);
  //}
  
  //function FullPassword(mixed){
  //    var ranpass = password2.slice(0,howManyChars);
      //console.log(ranpass);
  //}
  //push function value output to new array, generate 10 random characters and spit them out
  
  let numbers = confirm ("Welcome to the password Generator. Will your password contain numbers?");
  let specialCharacters = confirm ("Will your password contain special characters?")
  let letters = confirm ("will your password contain lowercase letters?")
  let uppercaseletters = confirm ("will your password contain uppercase letters?")
  let howManyChars = prompt ("how many characters will your password contain?")
  let ready = confirm ("ready to generate")
  
  
  //if (howManyChars !== var)
  if (numbers  === true) {
  GeneratePassword(number);
  //need to find out how to push specialchars to new array
  }
  else {  
  alert ("no numbers to generate") ;
  }
  
  if (letters === true) {
      GenerateLowercaseletters(lowercase);
       
      
      //need to find out how to push specialchars to new array
  }
  else {
      alert ("no lowercase letters to generate");
  }
  
  if (uppercaseletters === true) {
      GenerateUppercaseletters(uppercase);
       
      
      //need to find out how to push specialchars to new array
  }
  else {
      alert ("no lowercase letters to generate");
  }
  
  if (specialCharacters === true) {
      GenerateSpecialCharacters(specialChars)
      //need to find out how to push specialchars to new array
  }
  else { 
  alert ("no special characters to generate");
  }
  
  
  
  if (ready === true){
      createArray(mixedPasswordArray)
      let message = document.getElementById("display")
      message.innerText = blahblah;
  }
  else {
      alert ("theres nothing to do");
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
