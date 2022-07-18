const ftoc = function(f) {
  return roundNumber((f - 32) * 5 / 9);
};

const ctof = function(c) {
  return roundNumber((c * 9 / 5) + 32);
};

function roundNumber(number)
{
  return Math.round(number * 10) / 10;
}



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
