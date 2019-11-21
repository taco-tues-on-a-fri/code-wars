//| Vowel Count
//| https://www.codewars.com/kata/56747fd5cb988479af000028
//|------------------------------------------------------------------------
//| Resources:
//| 
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
//| https://teamtreehouse.com/community/how-to-count-the-number-of-times-a-specific-character-appears-in-a-string
//| https://stackoverflow.com/questions/12949618/typeerror-cannot-read-property-length-from-null
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------

//attempt #6  -  attempt that worked
function getCount(str) {
  var vowelsCount = 0
  var regexp = /["a","e","i","o","u"]/gi;
  if (str.match(regexp) !== null){
      vowelsCount = str.match(regexp).length;
  } 
  return vowelsCount;
}

//attempt #1
function getCount(str) {
  var vowelsCount = str.match(a,e,i,o,u).length;
  return vowelsCount;
}

//attempt #2
function getCount(str) {
  var vowelsCount = 0
  var regexp = /["a","e","i","o","u"]/gi;
  var found = str.match(regexp);
  vowelsCount = found.length
  return vowelsCount;
}

//attempt #3
function getCount(str) {
  var vowelsCount = 0
  var regexp = /["a","e","i","o","u"]/gi;
  var found = str.match(regexp);
  if (found.length != null && found.length >= 1){
vowelsCount = found.length;
} else {
vowelsCount = 0;
}
  return vowelsCount;
}

//attempt #4
function getCount(str) {
  var vowelsCount = 0
  var regexp = /["a","e","i","o","u"]/gi;
  var found = str.match(regexp);
  if (found.length = null){
vowelsCount = 0;
} else {
vowelsCount = found.length;
}
  return vowelsCount;
}

//attempt #5
function getCount(str) {
  var vowelsCount = 0
  var regexp = /["a","e","i","o","u"]/gi;
  var found = 0 
  if (str.match(regexp) !== null){
      found = str.match(regexp);
  }
  vowelsCount = found.length
  return vowelsCount;
}


//| Start of best practices / clever
//|------------------------------------------------------------------------
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}





