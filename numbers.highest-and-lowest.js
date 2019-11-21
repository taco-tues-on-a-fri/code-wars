//| Highest and Lowest
//| https://www.codewars.com/kata/554b4ac871d6813a03000035
//|------------------------------------------------------------------------
//| Resources:
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function highAndLow(string){
  var array = string.split(" ").map(Number);
  var max = array.reduce(function(a, b) {
      return Math.max(a, b);
  })
  var min = array.reduce(function(a,b) {
      return Math.min(a, b);
  })
  return `${max}, ${min}`
}

//Failed ideas
//var array = JSON.parse("[" + string + "]")
//var convertedArray = [...'string'];
//var newNumbers = parseInt(string, 10)


//| Start of best practices / clever
//|------------------------------------------------------------------------
// Within comments best answer - cleaner - iterates through less, 
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Best Practice/Most Clever - Arguably wrong
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}