//| Remove First and Last Character
//| https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
//|------------------------------------------------------------------------
//| Resources:
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function removeChar(str){
  let split = str.split('')
  let last = split.pop();
  let first = split.shift();
  return split.join('')
};


//| Start of best practices / clever
//|------------------------------------------------------------------------
function removeChar(str) {
  return str.slice(1, -1);
}
