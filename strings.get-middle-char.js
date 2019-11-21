//| Get the Middle Character
//| https://www.codewars.com/kata/56747fd5cb988479af000028
//|------------------------------------------------------------------------
//| Resources:
//| https://stackoverflow.com/questions/39001373/extracting-middle-of-string-javascript
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function getMiddle(string){
  let position;
  let length;

  if(string.length%2 === 0){
      position = string.length/2-1;
      length = 2;
  } else {
      position = string.length/2;
      length = 1;
  }
  return string.substring(position, position + length)
  }





//| Start of best practices / clever
//|------------------------------------------------------------------------
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

