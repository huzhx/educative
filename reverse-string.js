const reverseString = function(str) {
  if (str === '') return str;

  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
};

console.log(reverseString('hello'));
