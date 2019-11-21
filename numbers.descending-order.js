
//| Descending Order
//| https://www.codewars.com/kata/5467e4d82edf8bbf40000155
//|------------------------------------------------------------------------
//| Resources:
//| https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//| https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
//attempt #3
function descendingOrder(numbers){
  return Number(numbers.toString().split("").map(Number).sort((a, b) => a < b).join(''));
}


//attempt #1 - kept getting wrong answers
function descendingOrder(numbers){
  return Number(numbers.toString(10).split("").map(Number).sort((a, b) => a + b).join(''));
  //numbers = numbers.toString(10).split("").map(Number).sort((a, b) => a - b).join('')
  //numbers = numbers.sort((a, b) => a - b)
  //return numbers = numbers.split('').map(Number);
}


//attempt #2 Worked with 1 fail
function descendingOrder(numbers){
  numbers = numbers.toString(10).split("").map(Number).sort((a, b) => a + b).join('');
  return Number(numbers)
}



//| Start of best practices / clever
//|------------------------------------------------------------------------
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
// n.toString() will crash if n is undefined/null.
