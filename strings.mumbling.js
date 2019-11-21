//| Mumbling
//| https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
//|------------------------------------------------------------------------
//| Resources:
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
//| https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//| https://stackoverflow.com/questions/8761627/string-tochararray-equivalent-on-javascript?lq=1
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function accum(string) {
  let mumble = string.toLowerCase().split('')
  let newMumble = [];
  for(let i = 0; i<mumble.length; i++){
      newMumble.push(mumble[i].repeat(i+1)); 
  }
  for(let i = 0; i<newMumble.length; i++){
    newMumble[i] = newMumble[i].charAt(0).toUpperCase() + newMumble[i].slice(1);
  }
 string = newMumble.join('-')
return string;
}



//| Start of best practices / clever
//|------------------------------------------------------------------------
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}
