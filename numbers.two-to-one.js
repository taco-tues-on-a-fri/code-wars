//| Two to One
//| https://www.codewars.com/kata/5656b6906de340bd1b0000ac
//|------------------------------------------------------------------------
//| Resources:
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
//| Worked, and nearly exactly like best practice.  
//| Best practice didn't check for values other than a-z using Regex
function longest(s1, s2) {
  return [...new Set(s1.concat(s2).match(/[a-z]/gi).sort())].join('')
}


//| Start of best practices / clever
//|------------------------------------------------------------------------
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')