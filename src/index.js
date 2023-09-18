module.exports = function reverse (n) {
  const numberArr = n.toString().split('').reverse().join('');
  const reverseNum = parseFloat(numberArr);
  return reverseNum;
}
