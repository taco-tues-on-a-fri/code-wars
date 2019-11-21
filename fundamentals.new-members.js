//| Categorize New Member
//| http://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascrip
//|------------------------------------------------------------------------
//| Resources:
//| https://stackoverflow.com/questions/46249656/codewars-com-kata-categorize-new-member
//| https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
function openOrSenior(data){
    return data.map(x => {
        if(x[0] >= 55 && x[1] > 7) {
            return "Senior";
            } else {
            return "Open";
            }
        }
    );   //end of return
}   // end of function



//| Start of best practices / clever
//|------------------------------------------------------------------------
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}