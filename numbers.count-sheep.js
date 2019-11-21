//| Count all the sheep on farm in the heights of New Zealand
//| hhttps://www.codewars.com/kata/58e0f0bf92d04ccf0a000010
//|------------------------------------------------------------------------
//| Resources:
//| 
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function lostSheep(friday,saturday,total){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (friday === undefined || friday.length == 0) {
  friday = [0]
 }
  if (saturday === undefined || saturday.length == 0) {
  saturday = [0]
 }
  
  let fri_sheep = friday.reduce(reducer);
  let sat_sheep = saturday.reduce(reducer);
  let not_eaten_bois = fri_sheep + sat_sheep
  let dead_bois = total - not_eaten_bois
  return dead_bois
 }


//| Start of best practices / clever
//|------------------------------------------------------------------------

