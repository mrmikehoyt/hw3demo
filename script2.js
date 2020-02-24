const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const specialChars = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","]","]",",","|",",","/","?",">","<"];
const iterator = lowercase.values(); 
let number = ["0","1","2","3","4","5","6","7","8","9"];
let password = []
//for randomizing locations in array
function GeneratePassword(random){
    for (let i = 0; i < 10; i++) {
        // Generate a random number between 1 and 10
        // Math.floor will round down, meaning we would get a number
        // between 0 and 9, so we'll always add 1 to bump it up.
        let num = Math.floor(Math.random() * 10) + 1

        // Display in console
        console.log(num)
        password.push(num);

    }
}
//for randoming values in array
function GeneratePasswordvalue(random){
    for (const value of iterator) {
    
       
      
  //  for (let i = 0; i < 10; i++) {
    
    const value = random[Math.floor(Math.random() * random.length)];
    console.log(value);
    password.push(value);
   
// }

    }
}


//push function value output to new array, generate 10 random characters and spit them out

