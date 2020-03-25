const printPattern = function(num) {
  if (num <= 0) {
    console.log(num);
    return;
  }

  console.log(num);
  printPattern(num - 5);
  console.log(num);
};

printPattern(10);
