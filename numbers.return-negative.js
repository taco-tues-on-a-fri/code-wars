//| Return Negative
//| https://www.codewars.com/kata/55685cd7ad70877c23000102
//|------------------------------------------------------------------------
//| Resources:
//| 
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function makeNegative(num) {
  if(num > 0){
    return -num;
  } else { 
    return num;
  }
}



//| Start of best practices / clever
//|------------------------------------------------------------------------
function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
