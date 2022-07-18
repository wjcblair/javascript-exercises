const repeatString = function(string, iterations) {
  let i, returnString = '';
  if(iterations < 0)
    return 'ERROR';
    
  for(i = 0; i < iterations; i++)
  {
    returnString += string;
  }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
