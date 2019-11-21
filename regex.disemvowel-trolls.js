
//| Disemvowel Trolls
//| https://www.codewars.com/kata/52fba66badcd10859f00097e
//|------------------------------------------------------------------------
//| Resources:
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//| https://stackoverflow.com/questions/10396074/remove-specific-characters-from-a-string-in-javascript
//| https://www.regular-expressions.info/charclass.html
//| https://regexr.com/
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
//Took inspiration from vowel count
function disemvowel(str) {
  return (str.replace(/[aeiou]/ig, '')||[]);
}




//| Start of best practices / clever
//|------------------------------------------------------------------------
function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}