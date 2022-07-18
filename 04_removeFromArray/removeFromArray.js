const removeFromArray = function() {
  let array = arguments[0];
  let i;

  for(i = 1; i < arguments.length; i++)
  {
    let toRemove = array.indexOf(arguments[i]);
    if(toRemove === -1)
      continue;

    array.splice(toRemove, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
