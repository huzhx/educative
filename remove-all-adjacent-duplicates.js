const removeDuplicates = function(string) {
  if (string.length <= 1) {
    return string;
  } else if (string[0] === string[1]) {
    return removeDuplicates(string.substr(1));
  }

  return string[0] + removeDuplicates(string.substr(1));
};

removeDuplicates('Hellllooo');
