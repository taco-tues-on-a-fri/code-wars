//| Shortest Word
//| https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
//|------------------------------------------------------------------------
//| Resources:
//| https://stackoverflow.com/questions/40864915/find-the-shortest-string-in-array
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function findShort(s){
  return ...s.split(" ");
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))



//| Start of best practices / clever
//|------------------------------------------------------------------------
function findShort(s){
  return Math.min(...s.split(" ").map(x => x.length));
}
