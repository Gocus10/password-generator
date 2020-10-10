// Assignment code here
function generatePassword(){
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var num = '0123456789';
  var symbol = '!@#$%^&*(){}[]=<>/,.|~?';

  var isUpper = window.confirm("Would you like your password to include uppercase letters?");

    if(isUpper){lower += upper};

  var isNumber = window.confirm("Would you like your password to include numbers?");
   
    if(isNumber){lower+=num};

  var isSpecial= window.confirm("Would you like your password to include special characters?");
    
   if(isSpecial){lower+=symbol};
    
  var passLength = window.prompt('Type a length between 8 and 128 for your password!');
  passLength = parseInt(passLength);
  if (passLength === "" ||  passLength === null || passLength < 8  || passLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
  }
  else{
    function inception(){
      var pwd = '';
      for(var i=0; i<passLength; i++){
        pwd += lower.charAt(Math.floor(Math.random()*lower.length));
      }
      if(isUpper){
          var incUpper = false;
          for(i=0; i<upper.length; i++){         
            incUpper = pwd.includes(upper.charAt(i));
            if(incUpper){ break;}
            if(i==upper.length - 1){return inception();}
          }
      }
      if(isNumber){
        var incNum = false;
        for(i=0; i<num.length; i++){
          incNum = pwd.includes(num.charAt(i))
          if(incNum){break;}
          if(i==num.length - 1){return inception();}

        }
      }
      if(isSpecial){
        var incSpecial = false;
        for(i=0; i<symbol.length; i++){
          incSpecial = pwd.includes(symbol.charAt(i));
          if(incSpecial){break;}
          if(i==symbol.length - 1){return inception();}       
        }  
      }
      return pwd; 
    }
    return inception();
  }   
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
