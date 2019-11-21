
//| List Filtering
//| https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
//|------------------------------------------------------------------------
//| Resources:
//| 
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function filter_list(l) {
  return l.filter(function(item) {
    return parseInt(item) === item;
  });
}
//console.log(filter_list([1,2,'aasf','1','123',123]))

//| Start of best practices / clever
//|------------------------------------------------------------------------
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}