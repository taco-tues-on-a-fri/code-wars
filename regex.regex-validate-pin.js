
//| Regex validate PIN code
//| https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
//|------------------------------------------------------------------------
//| Resources:
//| https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//| https://www.regular-expressions.info/quickstart.html
//| https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/test
//| https://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
//attempt #2 - try nested - Finally worked
function validatePIN (pin) {
  if(pin.match(/^(0|[0-9]\d*)$/gi)){
      if(pin.match(/[0-9]/gi).length === 4 || pin.match(/[0-9]/gi).length === 6){
          return true;
          } else {
          return false;
          }
  } else {
      return false;
  }
}


//attempt #1
function validatePIN (pin) {
  if(pin.match(/[0-9]/gi).length === 4 || pin.match(/[0-9]/gi).length === 6){
    return true;
  } else {
    return false;
  }
}

//| Start of best practices / clever
//|------------------------------------------------------------------------
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);
