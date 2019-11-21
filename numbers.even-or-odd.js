//| Categorize New Member
//| https://www.codewars.com/kata/even-or-odd/train/javascript/5c15504157415b88e1000086
//|------------------------------------------------------------------------
//| Resources:
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function even_or_odd(number) {
  if (number %2 === 0) {
      return 'Even';
  } else {
      return 'Odd';
  }
}



//| Start of best practices / clever
//|------------------------------------------------------------------------

const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

function odd_or_even(number) {
  return number % 2 ? "Odd" : "Even"
}

var even_or_odd = number => number & 1 ? 'Odd' : 'Even'


