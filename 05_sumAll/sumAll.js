const sumAll = function() {
  if(validateInput(arguments) === false)
    return "ERROR";

  let min = arguments[0], max = arguments[1], i, sum = 0;

  if(arguments[0] > arguments[1])
  {
    min = arguments[1];
    max = arguments[0];
  }
  
  for(i = min; i <= max; i++)
  {
    sum += i;
  }

  return sum;
};

function validateInput(array)
{
  for(let i = 0; i < 2; i++)
  {
    if(Number.isInteger(array[i]) === false)
      return false;
    else if(array[i] < 0)
      return false;
  }
  return true;
}

// Do not edit below this line
module.exports = sumAll;
