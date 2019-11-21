//| Sum of positive
//| https://www.codewars.com/kata/sum-of-positive/train/javascript/5c15641ea8af374bfa0000fc
//|------------------------------------------------------------------------
//| Resources:
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
//|  My attempt - used for loop 
//|  Was almost exactly the same as the highest voted solution - could be slimmer
//|  Didn't need the else statement, or to apply Number to +=(arr[i])
//|  Best practice to initialize [i] with var or let so it doesn't go to global scope
function positiveSum(arr) {
  let total = 0;
  for(let i=0; i<arr.length; i++){
      if(arr[i] > 0){
          total += Number(arr[i]);
      } else {
          continue;
      }
  }
  return total;
}



//| Start of best practices / clever
//|------------------------------------------------------------------------
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {   
    if (arr[i] > 0) {                  
      total += arr[i];                 

  return total;                        
}

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum(arr) {
  var initialValue=0
  return arr.reduce((sumValue,currentValue)=> sumValue + (currentValue > 0 ? currentValue : 0),initialValue);
}

