const reverseString = function(string) {
  let i, returnString = '';
  for(i = string.length - 1; i >= 0; i--)
  {
    returnString += string.charAt(i);
  }
  return returnString;
};

// Do not edit below this line
module.exports = reverseString;
